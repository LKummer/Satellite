const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRTLPlugin = require('webpack-rtl-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = (env) => {
  const isProduction = env && env.prod;
  const isHotReload = env && env.hot && !isProduction;
  return {
    mode: isProduction ? 'production' : 'development',
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
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
      new CopyPlugin(
        [
          !isHotReload && { from: 'layouts', to: 'theme/layouts' },
          { from: 'i18n', to: 'theme/i18n' },
          { from: 'public', to: 'theme' }
        ].filter(Boolean)
      ),
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
  };
};
