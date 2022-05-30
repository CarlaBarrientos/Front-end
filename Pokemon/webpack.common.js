const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        utils: './src/utils.js',
        api: './src/api.js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
}