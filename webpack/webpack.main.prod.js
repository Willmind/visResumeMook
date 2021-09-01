// webpack/webpack.main.prod.js
//表示主进程在生产环境下的打包配置。
const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const prodConfig = {
    entry: path.resolve(__dirname, '../app/main/electron.ts'),
    target: 'electron-main',
    output: {
        filename: 'electron.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'inline-source-map',
    // 👇 这里改成生产环境
    mode: 'production',
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);
