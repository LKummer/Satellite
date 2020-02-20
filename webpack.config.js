const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: 'theme/static/main.js'
    },
    plugins: [
        new CopyPlugin([
            { from: 'layouts', to: 'theme/layouts' },
            { from: 'public', to: 'theme' }
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist/demo'),
        watchContentBase: true,
        writeToDisk: true
    }
}
