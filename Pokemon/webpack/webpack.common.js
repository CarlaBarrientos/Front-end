const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        utils: './src/utils.js',
        api: './src/api.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
}