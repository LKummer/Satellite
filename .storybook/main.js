const merge = require('webpack-merge')

const common = require('../webpack.common')

const dev = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader']
      }
    ]
  }
}

module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  webpackFinal: config => merge(config, dev, common)
}
