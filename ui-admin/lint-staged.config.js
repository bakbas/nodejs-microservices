module.exports = {
    "*.{js,jsx}": [
        "eslint --fix",
        "pretty-quick --staged"
        //"jest --coverage --findRelatedTests"
    ],
    "*.styles.{js,jsx}": ["npx stylelint"]
};