const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// Minification for JS and CSS files.
module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 8
                }
            })
        ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin()
    ]
}
