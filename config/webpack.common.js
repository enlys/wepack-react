/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 把css分割为单个文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const pkg = require('../package.json');
const ROOT_PATH = path.resolve(__dirname, '..');
const IS_PROD = process.env.NODE_ENV === 'production';

function resolve(dir) {
    return path.join(ROOT_PATH, dir);
}

module.exports = {
    context: resolve('src/client'),
    entry: './main.tsx',
    output: {
        // filename: 'bundle.js',
        // [contenthash:8] - 本应用打包输出文件级别的更新，导致输出文件名变化
        path: resolve('public/assets'),
        publicPath: `${pkg.path}assets/`,
        filename: IS_PROD ? 'js/[name]-[contenthash:8].js' : '[name].js',
        chunkFilename: IS_PROD ? 'js/[name].[contenthash:8].js' : '[name].chunk.js' // works with lazy loading
    },
    module: {
        rules: [
            /* babel 转码 */
            {
                test:/\.(ts|tsx)$/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    // 预设执行顺序由右往左,所以先处理ts,再处理jsx
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ],
                    cacheDirectory: true,
                  },
                },    
            },
            /* css 转码 */
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader',
                ],
            },
            /* less */
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]',
                },
            },
        ],
    },

    resolve: {
        alias: {
            '@': resolve('src/client'),
        },
        // mainFiles: ['index', 'main'],
        extensions: ['.js', '.tsx', '.ts', '...'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: IS_PROD ? 'css/[name].[contenthash:8].css' : '[name].css',
        }),
        // 进度条
        new ProgressBarPlugin({
            format: `:msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({
                parallel: 4,
            }),
        ],
    },
};