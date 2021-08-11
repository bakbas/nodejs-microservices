module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "entry",
                modules: false,
                corejs: 3
            }
        ],
        [
            "@babel/preset-react",
            {
                runtime: "automatic"
            }
        ]
    ],
    plugins: [
        [
            "babel-plugin-styled-components",
            {
                fileName: false,
                pure: true,
                minify: true,
                transpileTemplateLiterals: true
            }
        ],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-transform-runtime",
        "react-hot-loader/babel"
    ],
    env: {
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs"]
        }
    }
};