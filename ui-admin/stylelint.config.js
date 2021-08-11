module.exports = {
    processors: ["stylelint-processor-styled-components"],

    extends: [
        "stylelint-config-recommended",
        "stylelint-config-styled-components"
    ],

    rules: {
        "unit-allowed-list": ["rem", "%", "vh", "vw", "s", "deg", "fr", "ms"],
        "no-descending-specificity": null,
        "block-closing-brace-newline-after": "always",
        "rule-empty-line-before": [
            "always",
            {
                except: ["first-nested", "after-single-line-comment"]
            }
        ],
        "selector-max-id": 0
    }
};
