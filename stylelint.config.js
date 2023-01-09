module.exports = {
  extends: ['stylelint-config-standard', 'prettier'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  customSyntax: 'postcss-scss',
  rules: {
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: ['preferes-color-scheme']
      }
    ],
    'block-closing-brace-newline-after': null,
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'media-query-list-comma-newline-after': null,
    'declaration-colon-newline-after': null,
    'no-invalid-position-at-import-rule': null,
    'scss/at-rule-no-unknown': true,
    'scss/at-each-key-value-single-line': true,
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-if-no-null': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/declaration-nested-properties': 'never',
    'scss/dimension-no-non-numeric-values': true,
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,
    'scss/map-keys-quotes': 'always',
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-rules',
      'declarations',
      'rules'
    ],
    'order/properties-alphabetical-order': true
  }
};
