const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path')
const webpack = require('webpack')

console.log('__dirname', __dirname)

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
        static: path.resolve(__dirname, 'static'),
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
        // 提供在服务器内部执行所有其他中间件之前执行自定义中间件的能力。 这可以用来定义自定义处理程序， 
        onBeforeSetupMiddleware: function (devServer) {
            if (!devServer) {
              throw new Error('webpack-dev-server is not defined');
            }
      
            devServer.app.get('/users', function (req, res) {
                res.json({
                  id: 1,
                  name: 'weizhi'
                })
              })
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new ESLintPlugin({
            // 编译的时候会自动修复问题
            fix: true
        })
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
        // 有query的时候，会带上png后面的query参数
        assetModuleFilename: '[hash][ext][query]',
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
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { legacy: true }],
                            ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
                            ["@babel/plugin-proposal-private-methods", { "loose": true }],
                            ["@babel/plugin-proposal-class-properties", { loose: true }],
                        ]
                    }
                }
            }
        ]
    }
}