(() => {
  var __webpack_modules__ = {
    "./src/title.js": module => {
      module.exports = {
        cat: 'title_cat',
        dog: 'title_dog'
      };
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  var __webpack_exports__ = {};
  (() => {
    const title = __webpack_require__("./src/title.js");
    console.log(title.cat, title.dog);
  })();
})();