const path = require('path')
const baseDir = process.cwd()

class Compilation {
    constructor(options,compiler){
        this.options = options
        this.compiler = compiler
        this.modules = [] //本次编译涉及的所有模块
        this.chunks = [] // 本次编译所组装出的代码块
        this.assets = {} // key 是文件名，值是文件内容
        this.files = [] // 代表本次打包出来的文件
        this.fileDependencies = [] // 编译依赖的文件或者模块
    }

    build(callback){
        // 5. 根据配置中的entry找到入口文件
        let entry = {}

        if(typeof this.options.entry === 'string'){
            entry.main = this.options.entry
        } else {
            entry = this.options.entry
        }

        for(let entryNamein in entry){
            let entryFilePath = path.posix.join(baseDir, entry[entryName])
            this.fileDependencies.push(entryFilePath)

            // 6. 从入口文件出发，调用所有配置的Loader对模块进行编译
            let entryModule = this.buildModule(entryName, entryFilePath)
        }

        callback(null, {
            modules: this.modules,
            chunks: this.chunks,
            assets: this.assets,
            files: this.files
        },  this.fileDependencied)
    }


    /* 
    编译模块：
        name: 模块所属的代码块（chunk）的名称，也就是 entry 的 name : entry1 entry2
        modulePath: 模块的路径
        */    
    buildModule(name, modulePath){
            // 1. 读取文件内容

            // 根据规则找到所有匹配的loader
    }
}