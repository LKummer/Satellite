const merge = require('webpack-merge')

const common = require('../webpack.common')

module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  webpackFinal: config => merge(config, common)
}
