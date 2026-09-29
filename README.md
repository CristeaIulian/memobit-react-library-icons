# @memobit/icons

495 hand-built SVG icons for the Memobit apps, with categories and search aliases.
TypeScript-first, ESM-only, React 19.

Extracted from [`@memobit/libs`](https://github.com/CristeaIulian/memobit-react-library)
in v2.0.0 of that library, so icons can be versioned and released independently.

## Install

```bash
npm install @memobit/icons
```

`react` is a peer dependency.

## Usage

### Import the icons you need (tree-shakeable)

```ts
import { arrowUp, bee } from '@memobit/icons';
```

Each icon is a `ReactElement` rendering an inline `<svg>` sized at `1em` with
`fill="currentColor"`, so it inherits font size and colour from its container.

Every icon is its own module and the package is marked side-effect free, so a bundler
drops whatever you do not import. Importing two icons costs ~4 KB, not the full set.

### Look an icon up by name

```ts
import { iconMap } from '@memobit/icons/map';

const element = iconMap[name];
```

`iconMap` is behind its own subpath deliberately: it references all 495 icons, so
importing it pulls in the whole set and defeats tree-shaking. Reach for it only when the
name is not known until runtime — for example a value chosen through a picker and
persisted to a database.

### Metadata

```ts
import {
    iconAliases,
    iconCategoryById,
    iconCategoryByPath,
    iconCategoryDefinitions,
    OTHER_CATEGORY_ID,
    otherCategory,
    type IconCategory,
    type IconName,
} from '@memobit/icons';
```

- `IconName` — union of all 495 names.
- `iconCategoryDefinitions` — the categories, each with its icon names.
- `iconAliases` — search synonyms per icon, used by the icon picker.

## Adding an icon

1. Add `src/icons/<kebab-name>.tsx` exporting a camelCase const.
2. Add the import and the map entry in `src/map.ts`.
3. Add the name to the right category in `src/iconCategories.ts`, and aliases in
   `src/iconAliases/` if it needs them.
4. Run `npm run generate:icon-names` to regenerate the `IconName` union.
5. Run `npm run build`.

The `IconName` union is generated rather than derived as `keyof typeof iconMap`, because
the derived form forced the whole map's object type into the emitted declarations and
dominated the type-build time.

## Build output

Modules are preserved one-to-one from `src/` into `dist/` rather than bundled, so every
icon stays its own chunk. `dist/index.js` re-exports them all; `dist/map.js` holds the
lookup.

## License

Apache-2.0
