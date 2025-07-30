// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

import stylistic from '@stylistic/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import tailwindcss from 'eslint-plugin-tailwindcss';

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
export default [{
  ignores: ['src/components/ui/**/*'],
}, {
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  languageOptions: {
    ...pluginReact.configs.flat.recommended.languageOptions,
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
}, ...compat.config({
  extends: ['eslint:recommended', 'next'],
}), pluginJs.configs.recommended, ...tseslint.configs.recommended, pluginReact.configs.flat.recommended, pluginReact.configs.flat['jsx-runtime'], // ...tailwindcss.configs['flat/recommended'],

stylistic.configs.customize({ semi: true }), {
  rules: {
    'import/no-anonymous-default-export': 'off',
  },
}, {
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}, {
  rules: {
    '@stylistic/array-bracket-newline': ['error', { multiline: true }],
    '@stylistic/array-element-newline': [
      'error',
      { multiline: true, consistent: true },
    ],
    '@stylistic/curly-newline': ['error'],
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
    '@stylistic/implicit-arrow-linebreak': 'error',
    '@stylistic/line-comment-position': 'error',
    '@stylistic/max-len': ['warn', { tabWidth: 2 }],
    '@stylistic/nonblock-statement-body-position': ['error', 'below'],
    '@stylistic/object-curly-newline': [
      'error',
      { multiline: true, consistent: true },
    ],
    '@stylistic/object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    '@stylistic/one-var-declaration-per-line': 'error',
    '@stylistic/operator-linebreak': ['error', 'before'],
  },
}, ...storybook.configs["flat/recommended"]];