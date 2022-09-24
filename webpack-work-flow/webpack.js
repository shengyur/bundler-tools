const { Compiler } = require("./Compiler")

function webpack(options) {
    // 1. 初始化参数
    const argv = process.argv.slice(2)
    // --mode=production

    const shellOptions = argv.reduce((shellOptions, options)=> {
        debugger
        const [key ,value] = options.split('=')
        shellOptions[key.slice(2)] = value
        return shellOptions
    }, {})

    const finalOptions = {
        ...options,...shellOptions
    }

    console.log(finalOptions)

    // 2. 用上一步得到的参数初始化 Compiler 对象
    const compiler = new Compiler(finalOptions)

    // 3. 加载所有配置的插件
    const { plugins } = finalOptions

    for(let plugin of plugins){
        plugin.apply(compiler)
    }
}

module.exports = webpack