class RunPlugin {
    //每个插件都是一个类，而每个类都需要定义一个apply方法
    apply(compiler) {
      // 在此插件中监听 run 钩子
      compiler.hooks.run.tap("RunPlugin", () => {
        console.log("run:开始编译");
      });
    }
  }
  module.exports = RunPlugin;