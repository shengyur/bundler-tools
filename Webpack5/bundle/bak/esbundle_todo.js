    // 套一堆函数是利用函数作用域，防止命名冲突
  debugger
  // todo: 4:39 min
  var __webpack_modules__ = {
    "./src/title.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      (__webpack_exports__, {
        "age": () => age,
        "default": () => __WEBPACK_DEFAULT_EXPORT__
      });
      const __WEBPACK_DEFAULT_EXPORT__ = 'title_name';
      const age = 'title_age';
    }
  };
  function __webpack_require__(moduleId) {
    var module = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
      // definition
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
          // key: age default
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
    // 检测对象是否本身拥有某个属性，而不是在原型链上有
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    // 入参： 一个对象
    __webpack_require__.r = exports => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          // 给 Object.prototype.toString 的结果，添加 [Object Module]
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
      }
      // 给对象添加 __esModule 的属性
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    }

  var __webpack_exports__ = {};
  let title = __webpack_require__("./src/title.js");
  console.log('name', title.default);
  console.log('age', title.age)