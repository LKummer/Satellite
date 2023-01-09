const { join } = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = (env) => {
  const isProduction = env && env.prod;
  const isHotReload = env && env.hot && !isProduction;
  return {
    mode: isProduction ? 'production' : 'development',
    output: {
      path: join(process.cwd(), 'dist/theme/static')
    },
    module: {
      rules: [
        {
          // Process SCSS and extract a CSS file.
          test: /\.(?:css|scss|sass)$/iu,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          // Load fonts.
          test: /\.woff2?$/u,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        }
      ]
    },
    plugins: [
      // Copies files to the dist/theme folder.
      new CopyPlugin({
        patterns: [
          !isHotReload && { from: 'layouts', to: '../layouts' },
          { from: 'public', to: '..' }
        ].filter(Boolean)
      }),
      // Extracts a CSS file.
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      // Lint during build.
      new ESLintPlugin({
        files: ['src/**/*.js', '*.js']
      }),
      new StylelintPlugin({
        files: ['src/**/*.s?(a|c)ss']
      })
    ]
  };
};
