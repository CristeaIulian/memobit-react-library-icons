// Removes the <title> and <desc> elements that downloaded SVGs (svgrepo, Sketch exports)
// carry into the icon components. A browser shows an SVG <title> as a native hover
// tooltip, which the apps forbid: hover hints go through the Tooltip component.
//
// Runs as part of `npm run generate:icon-names`, the step every new icon goes through,
// and on its own via `npm run strip:svg-titles`.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const iconDirs = [join(here, '../src/icons'), join(here, '../src/animated')];

// Each element goes together with the space or {' '} spacer that follows it.
const strippable = [/<title>[^<]*<\/title>/g, /<desc>[^<]*<\/desc>/g, /<defs>\s*<\/defs>/g];
const spacer = String.raw`(?:\s*\{' '\}|[ \t]*)`;
const strippers = strippable.map(element => new RegExp(element.source + spacer, 'g'));

const isLoneSpacer = line => line.trim() === "{' '}";

const stripSource = source => {
    const eol = source.includes('\r\n') ? '\r\n' : '\n';
    const output = [];

    for (const line of source.split(/\r?\n/)) {
        if (!/<title>|<desc>|<defs>\s*<\/defs>/.test(line)) {
            output.push(line);
            continue;
        }

        // The {' '} line before the stripped element was its leading spacer.
        if (output.length > 0 && isLoneSpacer(output[output.length - 1])) {
            output.pop();
        }

        const indent = line.match(/^\s*/)[0];
        const rest = strippers.reduce((text, stripper) => text.replace(stripper, ''), line).trim();
        if (rest !== '') {
            output.push(indent + rest);
        }
    }

    return output.join(eol);
};

const listIconFiles = dir =>
    readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) return listIconFiles(path);
        return entry.name.endsWith('.tsx') ? [path] : [];
    });

export const stripSvgTitles = () => {
    const changed = [];

    for (const file of iconDirs.flatMap(listIconFiles)) {
        const source = readFileSync(file, 'utf8');
        const stripped = stripSource(source);

        if (/<title[\s>]/.test(stripped)) {
            throw new Error(`Could not strip the <title> from ${file} — remove it by hand`);
        }
        if (stripped !== source) {
            writeFileSync(file, stripped);
            changed.push(file);
        }
    }

    if (changed.length > 0) {
        console.log(`Stripped <title>/<desc> from ${changed.length} icon file(s):`);
        changed.forEach(file => console.log(`  ${file}`));
    }
    return changed;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    stripSvgTitles();
}
