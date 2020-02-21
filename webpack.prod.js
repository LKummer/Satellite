const WebpackRTLPlugin = require('webpack-rtl-plugin')

module.exports = {
    mode: 'production',
    plugins: [
        new WebpackRTLPlugin()
    ]
}
