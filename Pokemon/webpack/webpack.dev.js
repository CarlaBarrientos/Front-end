const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: 'assets/[name][ext]',
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 4000
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all'
                }
            }
        }
    }
});