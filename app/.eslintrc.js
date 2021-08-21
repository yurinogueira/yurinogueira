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
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-recommended",
        "eslint:recommended"
    ],
    rules: {
        'no-console': 'off'
    }
}
