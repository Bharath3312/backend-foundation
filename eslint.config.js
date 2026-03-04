// @ts-check
// https://typescript-eslint.io/getting-started/typed-linting

import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json'
            },
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            // TypeScript specific
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',

            // General rules
            eqeqeq: ['error', 'always'],
            // semi: ['error', 'never'],

            'no-console': 'error'
        }
    }
]
