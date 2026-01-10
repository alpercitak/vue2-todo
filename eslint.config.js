// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.config({
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      '@vue/eslint-config-typescript',
      '@vue/eslint-config-prettier/skip-formatting',
    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {},
  }),
];
