const CopyPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')

// Common Webpack configuration.
const common = require('./webpack.common')

// Configuration for building a Hugo theme in dist/theme.
const build = {
    output: {
        filename: 'theme/static/[name].js'
    },
    plugins: [
        new CopyPlugin([
            { from: 'layouts', to: 'theme/layouts' },
            { from: 'public', to: 'theme' }
        ])
    ]
}

module.exports = env => {
    // Short circuit check `env` to avoid errors.
    if (env && env.prod) {
        return merge(common, build, { mode: 'production' })
    } else {
        return merge(common, build, { mode: 'development' })
    }
}
