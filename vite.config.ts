import react from '@vitejs/plugin-react';
import { resolve } from 'path';
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
            outDirs: 'dist',
        }),
    ],
    build: {
        lib: {
            entry: {
                index: resolve(import.meta.dirname, 'src/index.ts'),
                animated: resolve(import.meta.dirname, 'src/animated.ts'),
                map: resolve(import.meta.dirname, 'src/map.ts'),
                registry: resolve(import.meta.dirname, 'src/registry.ts'),
                vite: resolve(import.meta.dirname, 'src/vite.ts'),
            },
            formats: ['es'],
        },
        rollupOptions: {
            // /^node:/ covers the Vite plugin entry's builtins; naming them one by one meant
            // node:module silently became Vite's browser stub and the plugin threw at build time.
            external: ['react', 'react/jsx-runtime', /^node:/],
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
