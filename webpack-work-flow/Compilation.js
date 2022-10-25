const path = require('path')
const baseDir = process.cwd()
const fs = require('fs')
const parser = require('@babel/parser')
// const generate = require('@babel/generage')
// const types = require('@babel/types')
const traverse = require('@babel/traverse').default


class Compilation {
    constructor(options, compiler) {
        this.options = options
        this.compiler = compiler
        this.modules = [] //本次编译涉及的所有模块
        this.chunks = [] // 本次编译所组装出的代码块
        this.assets = {} // key 是文件名，值是文件内容
        this.files = [] // 代表本次打包出来的文件
        this.fileDependencies = [] // 编译依赖的文件或者模块
    }

    build(callback) {
        // 5. 根据配置中的entry找到入口文件
        let entry = {}

        if (typeof this.options.entry === 'string') {
            entry.main = this.options.entry
        } else {
            entry = this.options.entry
        }

        for (let entryName in entry) {
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
        }, this.fileDependencied)
    }


    /* 
    编译模块：
        name: 模块所属的代码块（chunk）的名称，也就是 entry 的 name : entry1 entry2
        modulePath: 模块的路径
    */
    buildModule(name, modulePath) {
        // 1. 读取文件内容
        let sourceCode = fs.readFileSync(modulePath, 'utf8')
        let { rules } = this.options.module
        // 根据规则找到所有匹配的loader
        let loaders = []

        rules.forEach(rule => {
            if (modulePath.match(rule.test)) {
                loaders.push(...rule.use)
            }
        })
        console.log('modulePath',modulePath)

        sourceCode = loaders.reduceRight((sourceCode,loader)=> {
            // loader 返回的是函数，调用loader们
            return require(loader)(sourceCode)
        }, sourceCode)

        //7.找出该模块依赖的模块，再递归本步骤，直到所有入口依赖的文件都经过了本步骤的处理
        // 声明当前模块的 ID ，值是 modulePath
        let moduleId = './' + path.posix.relative(baseDir,modulePath)

        console.log('moduleId', moduleId)
        // name 是一个数组，是模块所处代码块的名称，因为可能多个文件引用一个模块
        let module = {
            id: moduleId, // 模块与根目录的相对路径
            dependencies: [],
            names: [name] // 模块所属代码块的名称
        }

        let ast = parser.parse(sourceCode, {
            sourceType: 'module'
        })

        traverse(ast, {
            // 捕获处理 expression
            CallExpression({node}){
                if(node.callee.name === 'require'){
                    // 如果调用的是 require 方法，拿到模块名称
                    let depModuleName = node.arguments[0].value
                    // 处理相对路径
                    if(depModuleName.startWith('.')) {
                        // 当前模块相对根目录的相对路径
                        const currentDir = path.posix.dirname(modulePath)
                        console.log('currentDir', currentDir)
                        // 找出相对路径
                        let depModulePath = path.posix.join(currentDir, depModuleName)

                        const extensions = this.options.resolve.extensions

                        depModulePath= tryExtensions(depModulePath,extensions)
                    } else {
                    // 处理第三方模块
                        let depModulePath = require.resolve(depModuleName)
                    }
                }
            }
        })

        // 使用改造后的 ast 重新生成新的源代码
    }
}
// TODO:
function tryExtensions(modulePath, extensions){
    if(fs.existsSync(modulePath)){
        return modulePath
    }else {

    }
}


module.exports = Compilation