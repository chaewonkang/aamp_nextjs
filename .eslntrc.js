module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "airbnb", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/function-component-definition": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
    },
};
