const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'dist')
    //     },
    //     compress: true,
    //     port: 9000
    // },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
});