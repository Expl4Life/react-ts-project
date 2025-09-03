module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['eslint:recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks', 'react-refresh'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {
        // Vitest глобальные функции
        vi: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        __dirname: 'readonly',
        afterAll: 'readonly',
        test: 'readonly',
    },
    rules: {
        // Базовые правила
        'prefer-const': 'error',
        'no-var': 'error',
        'no-unused-vars': 'off',

        // TypeScript правила (ручные)
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_'
        }],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',

        // React правила
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    overrides: [
        {
            // Специальные правила для тестовых файлов
            files: ['**/*.test.ts', '**/*.test.tsx', '**/tests/**/*'],
            env: {
                jest: true,
            },
        },
    ],
}