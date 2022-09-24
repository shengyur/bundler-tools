const { SyncHook }  = require('tapable')

class Compiler{
    constructor(){
        this.options = options

        this.hooks = {
            run: new SyncHook(), 
            done: new SyncHook()
        }
    }

    run(callback){
        // 在开始编译前触发 run 钩子
        this.hooks.run.call()

        const onCompiled = (err,stats,fileDependencies)=> {
            // stats 统计对象
            callback(err, {toJson: ()=> stats})

            fileDependencies.forEach((fileDependency) => {
                // 监听依赖的文件变化，如果依赖的文件变化，会开始一次新的编译
                fs.watch(fileDependency, ()=> this.compile())
            })
        }

        this.compile(onCompiled)

        // 编译完成时出发 done  钩子执行
        this.hooks.done.call()

    }
    // 开启一次新的编译
    compile(callback){
        // 每次编译都会创建一个新的 Compilation 实例
        let compilation = new Compilation(this.options)

        compilation.build(callback)
    }
}

module.exports = Compiler