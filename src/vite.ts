import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, extname, join, resolve } from 'node:path';

import { iconModules } from './iconModules';

// Vite's Plugin type is structural, so describing the shape we use keeps vite out of this
// package's dependencies — a consumer already has it.
interface TrimPlugin {
    name: string;
    enforce: 'pre';
    resolveId(source: string): string | null;
    load(id: string): string | null;
}

export interface MemobitIconsOptions {
    /**
     * Names the source scan cannot see because they only exist at runtime — a value from a
     * database, an API response, or an icon picker. Pass 'all' to keep the whole set, which
     * is what an app with a picker needs.
     */
    include?: readonly string[] | 'all';
    /** Directories to scan, relative to `root`. Defaults to ['src']. */
    scanDirs?: readonly string[];
    /**
     * Installed packages whose build output also names icons. Defaults to ['@memobit/libs'],
     * whose components render `<Icon name="caret-down" />` and the like internally — scanning
     * only the app would strip those and break the components at runtime.
     */
    scanPackages?: readonly string[];
    /** Project root. Defaults to the current working directory. */
    root?: string;
    /** Log which icons were kept. Useful when a trim drops something unexpectedly. */
    debug?: boolean;
}

const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mts', '.mjs']);
const SKIP_DIRECTORIES = new Set(['node_modules', 'dist', 'build', '.git', 'coverage']);
const MAP_SPECIFIER = '@memobit/icons/map';
const VIRTUAL_ID = '\0virtual:memobit-icon-map';

// Icon names are lowercase kebab-case, so this catches every quoted string that could be
// one. Matching broadly and filtering against the real names afterwards keeps a name found
// in an unexpected position — a config object, a lookup table, a ternary — rather than
// assuming icons only ever appear in a `name=` prop.
const QUOTED_STRING = /['"`]([a-z][a-z0-9-]*)['"`]/g;

const collectSourceFiles = (directory: string, found: string[]): string[] => {
    let dirEntries;

    try {
        dirEntries = readdirSync(directory, { withFileTypes: true });
    } catch {
        return found;
    }

    for (const entry of dirEntries) {
        if (entry.isDirectory()) {
            if (!SKIP_DIRECTORIES.has(entry.name)) {
                collectSourceFiles(join(directory, entry.name), found);
            }
        } else if (SOURCE_EXTENSIONS.has(extname(entry.name))) {
            found.push(join(directory, entry.name));
        }
    }

    return found;
};

// Packages differ in what they expose. @memobit/libs, for one, has an "exports" map that
// deliberately omits ./package.json, so resolving that path throws. Fall back to the
// package's main entry — which already sits in its dist — and finally to the conventional
// layout, so a package that hides both still gets scanned.
const resolvePackageDist = (root: string, packageName: string): string | null => {
    const require = createRequire(join(root, 'noop.js'));

    try {
        return join(dirname(require.resolve(`${packageName}/package.json`)), 'dist');
    } catch {
        // falls through
    }

    try {
        return dirname(require.resolve(packageName));
    } catch {
        // falls through
    }

    const conventional = join(root, 'node_modules', packageName, 'dist');

    return existsSync(conventional) ? conventional : null;
};

const scanForIconNames = (root: string, scanDirs: readonly string[], scanPackages: readonly string[]): Set<string> => {
    const names = new Set<string>();

    const directories = [
        ...scanDirs.map(dir => resolve(root, dir)),
        ...scanPackages.map(name => resolvePackageDist(root, name)).filter((dir): dir is string => dir !== null),
    ];

    for (const directory of directories) {
        for (const file of collectSourceFiles(directory, [])) {
            let contents;

            try {
                contents = readFileSync(file, 'utf8');
            } catch {
                continue;
            }

            for (const match of contents.matchAll(QUOTED_STRING)) {
                if (match[1] in iconModules) {
                    names.add(match[1]);
                }
            }
        }
    }

    return names;
};

const buildMapModule = (names: readonly string[]): string => {
    const imports = names.map(name => `import { ${iconModules[name]} } from '@memobit/icons/icons/${name}';`).join('\n');
    const entries = names.map(name => `    '${name}': ${iconModules[name]},`).join('\n');

    return `${imports}\n\nexport const iconMap = {\n${entries}\n};\n`;
};

/**
 * Replaces the full 495-icon `iconMap` with one holding only the icons an app actually
 * uses, so a bundler can drop the rest.
 *
 * `<Icon name="..." />` resolves through a string key, which no bundler can narrow, so an
 * app that renders a single icon still ships all of them. This scans the app's own source
 * for strings matching a real icon name and generates a map of just those, which the
 * library imports in place of the real one.
 *
 * Opting in is deliberate. A name that only exists in a database or an API response is
 * invisible to any source scan, and trimming it away would break icons at runtime with no
 * build error. An app that does not use this plugin keeps the full set and behaves exactly
 * as before. An app whose names are user-chosen — anything with an icon picker — should
 * pass `include: 'all'`, which keeps everything and simply does nothing.
 */
export const memobitIcons = (options: MemobitIconsOptions = {}): TrimPlugin => {
    const { include = [], scanDirs = ['src'], scanPackages = ['@memobit/libs'], root = process.cwd(), debug = false } = options;

    return {
        name: 'memobit-icons-trim',
        enforce: 'pre',

        resolveId(source: string): string | null {
            return source === MAP_SPECIFIER ? VIRTUAL_ID : null;
        },

        load(id: string): string | null {
            if (id !== VIRTUAL_ID) {
                return null;
            }

            if (include === 'all') {
                return buildMapModule(Object.keys(iconModules));
            }

            const names = scanForIconNames(root, scanDirs, scanPackages);

            for (const name of include) {
                if (!(name in iconModules)) {
                    throw new Error(`[memobit-icons] "${name}" was passed to include but is not an icon name.`);
                }

                names.add(name);
            }

            const kept = [...names].sort();

            if (debug) {
                console.log(`[memobit-icons] keeping ${kept.length} of ${Object.keys(iconModules).length} icons: ${kept.join(', ')}`);
            }

            return buildMapModule(kept);
        },
    };
};
