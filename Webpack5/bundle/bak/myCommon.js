// 定义了一个自执行的箭头函数
(() => {
  debugger
  var __webpack_modules__ = {
    // 属性是模块id：以根目录为当前目录的 相对路径
    "./src/title.js": module => {
      module.exports = 'title';
    }
  };
  // 用来缓存webpack模块的对象，是一个优化手段
  function __webpack_require__(moduleId) {
    // 为什么这里要构造一个 module对象和它的 exports属性？
    var module = {
      exports: {}
    };

    // 为什么要把 __webpack_require__ 传进去呢？因为有可能模块间递归调用
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }
  var __webpack_exports__ = {};
  // 默认会执行这个函数
  (() => {
    // let title = require('./title') 
    // require 会被编译成 __webpack_require__函数
    let title = __webpack_require__("./src/title.js");
    console.log('require title', title);
  })();
})();