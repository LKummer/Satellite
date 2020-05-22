const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackRTLPlugin = require('webpack-rtl-plugin')
const merge = require('webpack-merge')

// Common Webpack configuration.
const common = require('./webpack.common')

// Configuration for building a Hugo theme in dist/theme.
const build = {
  output: {
    filename: 'theme/static/[name].js'
  },
  module: {
    rules: [
      {
        // When merged first, this loader should be the last one used
        // To process Sass files.
        test: /\.(?:css|scss|sass)$/iu,
        use: [MiniCssExtractPlugin.loader]
      },
      {
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
    // Used to copy files into the dist/theme folder.
    new CopyPlugin([
      { from: 'layouts', to: 'theme/layouts' },
      { from: 'i18n', to: 'theme/i18n' },
      { from: 'public', to: 'theme' }
    ]),
    // Used to extract a CSS file.
    new MiniCssExtractPlugin({
      filename: 'theme/static/[name].css'
    }),
    // Used to process an rtl CSS file.
    new WebpackRTLPlugin()
  ]
}

// Merge the required configurations.
module.exports = env => {
  // Short circuit check `env` to avoid errors.
  if (env && env.prod) {
    const prod = require('./webpack.prod')
    return merge.smart(build, common, prod)
  } else {
    return merge.smart(build, common, { mode: 'development' })
  }
}
