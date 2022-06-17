const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../build'),
        assetModuleFilename: 'assets/[name].[contenthash][ext]',
        clean: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash].css"
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                default: {
                    test: /[\\/]src[\\/]/,
                    chunks: 'all',
                    name: (module, chunks, cacheGroupKey) => {
                        const allChunksNames = chunks.map((chunk) => chunk.name).join('-');
                        return allChunksNames;
                    }
                },
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: (module, chunks, cacheGroupKey) => {
                        const allChunksNames = chunks.map((chunk) => chunk.name).join('-');
                        return allChunksNames;
                    }
                }
            }
        }
    }
});