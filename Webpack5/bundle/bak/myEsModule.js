var __webpack_module = {
    './src/title.js': (__unused_webpack_module,__webpack_exports__,__webpack_require__)=> {
        // 默认是 strict 模式呢
        "use strict";

        __webpack_require__.r(__webpack_exports__);

        __webpack_require__.d(__webpack_exports__,{
            "age": ()=> age,
            "default": ()=> __WEBPACK_DEFAULT_EXPORT__
        })

        const __WEBPACK_DEFAULT_EXPORT__ = 'title_name'
        const age = 'title_age'
    }
}

function __webpack_require__(moduleId){
    var module = {
        exports: {}
    }

    __webpack_module[moduleId](module,module.exports,__webpack_require__)

    return module.exports

}

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
debugger
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