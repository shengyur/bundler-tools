const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

const compiler = webpack(webpackConfig)

// 调用 run 方法启动编译
debugger
compiler.run((err,stats)=> {
    console.log(err);

    console.log(stats.toJson({
        assets: true, // 代表打包后生成的文件
        chunks: true, // 从入口模块出发，找到此入口模块依赖的模块以及上级依赖，一坨组成一个代码块 chunk 一个入口对应一个chunk
        modules: true // 打包的模块
    }))
})