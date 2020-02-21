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
                // to process Sass files.
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader]
            }
        ]
    },
    plugins: [
        // Used to copy files into the dist/theme folder.
        new CopyPlugin([
            { from: 'layouts', to: 'theme/layouts' },
            { from: 'public', to: 'theme' }
        ]),
        // Used to extract a CSS file.
        new MiniCssExtractPlugin({
            filename: "theme/static/[name].css"
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
        return merge(build, common, prod)
    } else {
        return merge(build, common, { mode: 'development' })
    }
}
