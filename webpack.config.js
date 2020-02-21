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
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader
                ]
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: 'layouts', to: 'theme/layouts' },
            { from: 'public', to: 'theme' }
        ]),
        new MiniCssExtractPlugin({
            filename: "theme/static/[name].css"
        }),
        new WebpackRTLPlugin()
    ]
}

module.exports = env => {
    // Short circuit check `env` to avoid errors.
    if (env && env.prod) {
        const prod = require('./webpack.prod')
        return merge(build, common, prod)
    } else {
        return merge(build, common, { mode: 'development' })
    }
}
