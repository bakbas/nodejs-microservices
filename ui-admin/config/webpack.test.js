const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = (env) =>
    merge(common(env), {
        mode: "development",
        devtool: "inline-source-map",
        devServer: {
            contentBase: "./public",
            watchContentBase: true,
            historyApiFallback: true,
            host: "localhost",
            publicPath: "/",
            open: true,
            hot: true,
            compress: true,
            inline: true,
            stats: {
                warnings: false,
                modules: false,
                hash: false,
                children: false
            },
            watchOptions: {
                ignored: /node_modules/
            }
        },
        module: {
            rules: []
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
    });
