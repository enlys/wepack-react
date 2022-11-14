/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
    },
    devServer: {
        // 当使用 [HTML5 History API] 时，任意的 `404` 响应被替代为 `index.html`
        historyApiFallback: true,
        open: false, // 自动打开浏览器
        // 默认为true
        hot: true,
        // 是否开启代码压缩
        compress: true,
        // 启动的端口
        port: 3908,
    },
    plugins: [
        new ESLintPlugin({ extensions: ['js', 'ts', 'tsx'] }),
    ]
});