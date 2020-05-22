const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackRTLPlugin = require('webpack-rtl-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const merge = require('webpack-merge')

// Configuration for building a Hugo theme in dist/theme.
const build = {
  output: {
    filename: 'theme/static/[name].js'
  },
  module: {
    rules: [
      {
        // Pass JS files through ESLint.
        test: /\.js$/iu,
        exclude: /node_modules/u,
        loader: 'eslint-loader'
      },
      {
        // Process SCSS and extract a CSS file.
        test: /\.(?:css|scss|sass)$/iu,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        // Load fonts.
        test: /\.woff2?$/u,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'theme/static/fonts',
          publicPath: './fonts/'
        }
      }
    ]
  },
  plugins: [
    // Copies files to the dist/theme folder.
    new CopyPlugin([
      { from: 'layouts', to: 'theme/layouts' },
      { from: 'i18n', to: 'theme/i18n' },
      { from: 'public', to: 'theme' }
    ]),
    // Extracts a CSS file.
    new MiniCssExtractPlugin({
      filename: 'theme/static/[name].css'
    }),
    // Extracts an RTL processed CSS file.
    new WebpackRTLPlugin(),
    // Lints stylesheets.
    new StylelintPlugin({
      syntax: 'scss'
    })
  ]
}

// Merge the configurations.
module.exports = env => {
  // Short circuit check `env` to avoid errors.
  if (env && env.prod) {
    const prod = require('./webpack.prod')
    return merge.smart(build, prod)
  } else {
    return merge.smart(build, { mode: 'development' })
  }
}
