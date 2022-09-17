const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: {
        index: './src/index.js',
    },
    output: {
        clean: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src/index.html')
        })
    ]
}