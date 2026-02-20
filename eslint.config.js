// @ts-check
// https://typescript-eslint.io/getting-started/typed-linting

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // TypeScript specific
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',

      // General rules
      eqeqeq: ['error', 'always'],
      semi: ['error', 'always'],

      "no-console" : "error"
    },
  },
];
