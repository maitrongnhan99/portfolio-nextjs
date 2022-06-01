module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "unused-imports"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    overrides: [
        {
            files: ["**/*.{js,jsx,ts,tsx}"],
            rules: {
                "cypress/no-unnecessary-waiting": "off",
                "@typescript-eslint/no-var-requires": "off",
                "no-unused-vars": [
                    "off",
                    {
                        vars: "all",
                        args: "after-used",
                        ignoreRestSiblings: false,
                    },
                ],
                "@typescript-eslint/ban-types": [
                    "error",
                    {
                        extendDefaults: true,
                        types: {
                            "{}": false,
                        },
                    },
                ],
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "unused-imports/no-unused-imports-ts": "error",
                "unused-imports/no-unused-vars": [
                    "off",
                    {
                        vars: "all",
                        varsIgnorePattern: "^_",
                        args: "after-used",
                        argsIgnorePattern: "^_",
                    },
                ],
            },
        },
    ],
    env: {
        node: true,
        browser: true,
        amd: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:cypress/recommended",
    ],
};
