//const eslintPluginAstro = require('eslint-plugin-astro');
import { defineConfig } from 'eslint/config';
import { eslintPluginAstro } from 'eslint-plugin-astro';
//import jsxA11y from 'eslint-plugin-jsx-a11y';
export default defineConfig([
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs[('jsx-a11y-recommended')], // In CommonJS, the `flat/` prefix is required.
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',

      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
    ignores: ['**/dist/**', '**/node_modules/**', '**/.astro/**'],
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.jsx',
      '**/*.ts',
      '**/*.tsx',
    ],
  },
]);
