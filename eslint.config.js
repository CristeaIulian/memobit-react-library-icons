import globals from 'globals';
import importPlugin from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['dist/**', 'node_modules/**', 'playground/**'],
    },
    ...tseslint.configs.recommended,
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2020,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            import: importPlugin,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^react$'],
                        ['^@?\\w'],
                        ['^@components', '^@helpers', '^@hooks', '^@pages', '^@services'],
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        ['^\\./'],
                        ['^.+\\.s?css$'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
            ],
        },
    },
);
