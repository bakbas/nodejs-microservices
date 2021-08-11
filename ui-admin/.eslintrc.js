module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    parser: "@babel/eslint-parser",
    plugins: ["jest", "promise", "react-hooks", "import", "react", "prettier"],
    extends: [
        "plugin:promise/recommended",
        "plugin:jest/recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "prettier"
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "error",
        "no-plusplus": ["off", { allowForLoopAfterthoughts: true }],
        "no-param-reassign": "off",
        "no-unused-expressions": ["error", { allowShortCircuit: true }],
        "consistent-return": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/label-has-associated-control": "off",

        "react/require-default-props": "off",
        "react/button-has-type": "off",
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".js", ".jsx"] }
        ],
        "react/no-array-index-key": "off",
        "react/forbid-prop-types": "warn",
        "react/display-name": "warn",
        "react/jsx-no-bind": "error",

        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        "import/prefer-default-export": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off"
    }
};
