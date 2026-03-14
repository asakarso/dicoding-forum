import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: '19.2.4',
      },
    },
  },
  pluginReact.configs.flat.recommended,
  daStyle,
  {
    files: ['**/*.cy.{js,jsx}'],
    plugins: {
      cypress: pluginCypress,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...pluginCypress.environments.globals.globals,
      },
    },
  }
]);
