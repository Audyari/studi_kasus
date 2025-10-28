import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import globals from 'globals';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      // Add Prettier plugin if it's available
    },
    rules: {
      // Override or add rules here
      '@next/next/no-html-link-for-pages': 'off',
      'react/no-unescaped-entities': 'off',
      // Add Prettier rules if the plugin is available
      // "prettier/prettier": ["error", { "endOfLine": "auto" }],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);
