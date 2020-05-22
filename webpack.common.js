const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/iu,
        use: [
          // No third loader as it is added while merging later.
          'css-loader',
          'sass-loader'
        ]
      },
      {
        // Used for linting JS.
        test: /\.js$/iu,
        exclude: /node_modules/u,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    // Used for linting SCSS.
    new StylelintPlugin({
      syntax: 'scss'
    })
  ]
}
