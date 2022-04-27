module.exports = {
    "ecmaFeatures": {
        "modules": true,
        "spread": true,
        "restParams": true
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    // "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2017
    },
    "extends": [
        "react-app"
    ],
    "rules": {
        "no-unused-vars": "off"
    }
}