/** @type {import("stylelint").Config} */
// This is a JSDoc comment. It tells your code editor (like VS Code) that this object
// should conform to the 'Config' type from the 'stylelint' package.
// This provides helpful autocompletion and type-checking as you edit the file.

export default {
  // This uses modern JavaScript (ESM) syntax to export the configuration object.

  // 'extends' tells Stylelint to use a pre-existing configuration as a starting point.
  // 'stylelint-config-standard' is a popular ruleset that enforces common CSS
  // style conventions.
  extends: ['stylelint-config-standard'],

  // 'ignoreFiles' specifies files and directories that Stylelint should not lint.
  ignoreFiles: ['**/*.astro', 'node_modules'],
  // '**/*.astro': Ignores all files with the .astro extension, since Stylelint
  //              doesn't understand Astro's unique syntax out of the box.
  // 'node_modules': Ignores all third-party packages, which you don't control
  //                 and shouldn't be linting.

  // 'rules' is where you can override the rules from the 'extends' configuration
  // or add new ones.
  rules: {
    // This configures the 'at-rule-no-unknown' rule. By default, this rule
    // flags any at-rules (like @media, @import) that aren't part of the
    // standard CSS specification.
    'at-rule-no-unknown': [
      true, // This part enables the rule.
      {
        // This is the options object for the rule.
        // 'ignoreAtRules' provides a list of custom at-rules to allow.
        ignoreAtRules: [
          // These are at-rules used by the Tailwind CSS framework.
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',

          // These are at-rules often used in CSS preprocessors like Sass/SCSS.
          'function',
          'if',
          'each',

          // 'media' is a standard CSS at-rule, but it's sometimes included
          // here to prevent conflicts with preprocessor syntax.
          'media',
        ],
      },
    ],
  },
};
