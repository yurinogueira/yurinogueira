// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/REPO_NAME/' : '/',
    lintOnSave: true,
    devServer: {
        clientLogLevel: 'info'
    },
};
