const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path')
const webpack = require('webpack')

console.log('__dirname',__dirname)

module.exports = {
    mode: 'development',
    devtool: false,
    // 入口
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    devServer: {
        open: true,
        port: 9999,
        // 除了默认
        static: path.resolve(__dirname,'static'),
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src/index.html')
        }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': process.env.NODE_ENV,
        // })
    ],
    // 出口
    output: {
        // 写入的文件名
        filename: '[name].bundle.js',
        // 写入的目录
        path: path.resolve(__dirname, 'dist'),
        // 每次构建前清理 dist文件夹
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
            ]
            },
            {
                test: /\.scss$/i,
                use: ['style-loader','css-loader','postcss-loader','sass-loader']
            },
            {
                test: /\.less$/i,
                use: ['style-loader','css-loader','postcss-loader','less-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }``
}