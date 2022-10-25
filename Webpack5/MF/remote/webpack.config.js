let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    mode: "development",
    devtool: false,
    entry: "./src/index.js",
    output: {
        publicPath: "http://localhost:3000/",
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"]
                    },
                },
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            // 向基座提供服务的文件名，构建输出的文件名
            filename: "remoteEntry.js",
            //var remote;
            // 输出的模块名,作为一个远程容器，向外界提供服务
            // 本质上是通过一个全局变量向外提供服务的
            name: "remote",
            // 被远程引用时可暴露的资源路径及其别名
            exposes: {
                "./NewsList": "./src/NewsList",
            },
            shared:{
                react: { 
                    // 是否是单例的
                    singleton: true 
                },
                "react-dom": { 
                    singleton: true 
                }
            },
        })
    ]
}