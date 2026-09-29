import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// Modules are preserved one-to-one from src/ into dist/ rather than bundled into a
// single file. That keeps every icon its own module, so consumer bundlers can drop the
// ones an app never imports, and it gives the follow-up tree-shaking work real per-icon
// chunks to build on.
export default defineConfig({
    plugins: [
        react(),
        dts({
            tsconfigPath: './tsconfig.json',
            bundleTypes: false,
            // Without these the declarations land in dist/src/ and the "types" paths
            // in package.json exports do not resolve.
            entryRoot: 'src',
            outDir: 'dist',
        }),
    ],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
                map: resolve(__dirname, 'src/map.ts'),
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
            },
        },
        sourcemap: false,
        // Left unminified on purpose: consumers minify, and readable module output
        // tree-shakes more predictably than a pre-mangled bundle.
        minify: false,
        target: 'es2022',
    },
});
