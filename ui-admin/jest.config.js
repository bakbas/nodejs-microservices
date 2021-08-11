module.exports = {
    clearMocks: true,
    verbose: false,
    coverageDirectory: "coverage",
    notify: true,
    notifyMode: "always",

    setupFilesAfterEnv: ["./jest.setup.js"],
    roots: ["<rootDir>/src"],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.stories.{js,jsx,ts,tsx}",
        "!src/**/*.styles.{js,jsx,ts,tsx}",
        "!src/**/index.{js,jsx,ts,tsx}",
        "!src/i18n.{js,jsx,ts,tsx}",
        "!src/test-*.{js,jsx,ts,tsx}",
        "!src/theme.{js,jsx,ts,tsx}",
        "!src/constants.{js,jsx,ts,tsx}"
    ],

    testResultsProcessor: "jest-sonar-reporter",

    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/__mocks__/style.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/file.js",
        API: "<rootDir>/__mocks__/api/index.js",
        STORAGE: "<rootDir>/src/services/storage",
        "^SRC(.*)$": "<rootDir>/src$1",
        "^ASSETS(.*)$": "<rootDir>/src/assets$1",
        "^COMPONENTS(.*)$": "<rootDir>/src/components$1",
        "^CONTEXT(.*)$": "<rootDir>/src/context$1",
        "^HELPERS(.*)$": "<rootDir>/src/helper$1",
        "^HOOKS(.*)$": "<rootDir>/src/hooks$1",
        "^LAYOUTS(.*)$": "<rootDir>/src/layouts$1",
        "^PAGES(.*)$": "<rootDir>/src/pages$1",
        "^UTILS(.*)$": "<rootDir>/src/utils$1"
    },

    transformIgnorePatterns: ["/node_modules/(?!imask|lodash)"]
};
