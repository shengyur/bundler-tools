var __webpack_module = {
    './src/title.js': (__unused_webpack_module,__webpack_exports__,__webpack_require__)=> {
        // 默认是 strict 模式呢
        "use strict";
        // 把这个对象标记成 esmodule，供后续消费（不同的模块规范，消费方式不一样）
        __webpack_require__.r(__webpack_exports__);
        // 定义模块：把当前模块的输出声明，抽象成接口，保存到 module.exports 对象上
        __webpack_require__.d(__webpack_exports__,{
            "age": ()=> age,
            "default": ()=> __WEBPACK_DEFAULT_EXPORT__
        })
        // 该模块本身的代码内容
        const __WEBPACK_DEFAULT_EXPORT__ = 'title_name'
        const age = 'title_age'
        console.log('my name is title');

    }
}
function __webpack_require__(moduleId){
    var module = {
        exports: {}
    }
    // 从入口文件开始加载依赖
    __webpack_module[moduleId](module,module.exports,__webpack_require__)
    return module.exports
}
// 把入口文件的 key  value 信息，定义到 exports 对象上
__webpack_require__.d = (exports,definition) => {
    for(var key in definition) {
        if(__webpack_require__.o(definition,key) && !__webpack_require__.o(exports,key)){
            Object.defineProperty(exports,key, {
                enumerable: true,
                // 这里就是 es6 module 的原理，为什么输出的是引用，不是缓存？
                get:definition[key]
            })
        }  
    }
}
__webpack_require__.o = (obj,prop) => Object.prototype.hasOwnProperty.call(obj,prop)
// 在结果中标记这个对象是 esmodule
__webpack_require__.r = (exports) => {
    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports,Symbol.toLocaleString, {
            value: 'module'
        })
    }
    
    Object.defineProperty(exports,'__esModule', {
        value: true
    })
}

var __webpack_exports__ = {};
let title = __webpack_require__("./src/title.js");

 console.log('name', title.default);
 console.log('age', title.age)