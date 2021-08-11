const paths = require("./paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = (env) =>
    merge(common(env), {
        mode: "production",
        devtool: false,
        output: {
            path: paths.build,
            publicPath: "/",
            filename: "js/[name].[contenthash].bundle.js"
        },
        module: {
            rules: []
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                minSize: 512000,
                maxSize: 512000
            }
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    });
