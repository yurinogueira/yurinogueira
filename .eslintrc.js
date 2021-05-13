// http://eslint.org/docs/user-guide/configuring

module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "globals": {
        "moment": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "sourceType": "module"
    },
    rules: {
        'no-console': 'off'
    }
}
