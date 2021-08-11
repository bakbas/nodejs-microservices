const paths = require("./paths");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
    return {
        entry: ["react-hot-loader/patch", paths.src + "/index.js"],
        output: {
            path: paths.build,
            filename: "[name].bundle.js",
            publicPath: "/"
        },
        plugins: [
            new CleanWebpackPlugin(),
            new Dotenv({
                systemvars: true,
                silent: false,
                path: `./env/${env.APP_ENV}.env`
            }),
            new webpack.DefinePlugin({
                "process.env.ASSETS_VERSION": JSON.stringify(Date.now())
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: paths.src + "/locales",
                        to: "locales/[name].json"
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: paths.public,
                        globOptions: {
                            ignore: ["**/index.html"]
                        }
                    }
                ]
            }),
            new HtmlWebpackPlugin({
                favicon: paths.public + "/favicon.ico",
                template: paths.public + "/index.html",
                filename: "index.html"
            })
        ],
        resolve: {
            modules: ["node_modules"],
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
            alias: {
                "react-dom": "@hot-loader/react-dom",
                SRC: paths.src,
                API: paths.src + "/services/api",
                STORAGE: paths.src + "/services/storage",
                ASSETS: paths.src + "/assets",
                COMPONENTS: paths.src + "/components",
                CONTEXT: paths.src + "/context",
                HELPERS: paths.src + "/helpers",
                HOOKS: paths.src + "/hooks",
                LAYOUTS: paths.src + "/layouts",
                PAGES: paths.src + "/pages",
                UTILS: paths.src + "/utils"
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(scss|css)$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(woff|woff2|ttf|eot)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "media/[name].[hash:8].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                // Images larger than 10 KB won’t be inlined
                                limit: 10 * 1024,

                                // File loader options
                                // The fallback loader will receive the same configuration options as url-loader.
                                fallback: "file-loader",
                                name: "images/[name].[hash:8].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: [/\.svg$/],
                    use: ["@svgr/webpack"]
                }
            ]
        }
    };
};
