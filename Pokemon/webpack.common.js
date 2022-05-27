const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ['./src/utils.js', './src/test.js'],
    plugins: [
        new CleanWebpackPlugin()
    ],
}