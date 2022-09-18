var __webpack_modules__ = {};
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

__webpack_require__.d = (exports, definition) => {
  for (var key in definition) {
    if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
    }
  }
};

__webpack_require__.e = chunkId => {
  let promises = []
  __webpack_require__.f.j(chunkId, promises)

  return Promise.all(promises)
};
__webpack_require__.g = function () {

}();

__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

__webpack_require__.r = exports => {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {
      value: 'Module'
    });
  }
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
};

var installedChunks = {
  "index": 0,
  // 加载中的模块，会被记录到这边，value值是数组时，说明还在加载，0表示加载完成了
  // "src_dynamic_js": [resolve,reject,promise]
};
__webpack_require__.f = {}
// publicPath 文件访问路径
__webpack_require__.p = ''
// 文件名
__webpack_require__.u = (chunkId) => chunkId + '.js'

// 加载脚本
__webpack_require__.l = (url) => {
  let script = document.createElement('script')
  script.src = url
  document.head.appendChild(script)
}
// jsonp 通过 JSONP 的方式加载 chunkId 对应的 JS 文件，生成一个 promise 放到 promises 数组里
__webpack_require__.f.j = (chunkId, promises) => {
  let installedChunkData

  const promise = new Promise((resolve, reject) => {
    installedChunkData = installedChunks[chunkId] = [resolve, reject]
  })
  // 把当前模块promise的 resolve  reject 和 promise 本身存放到数组里
  installedChunkData[2] = promise

  promises.push(promise)

  const url = __webpack_require__.p + __webpack_require__.u(chunkId)

  __webpack_require__.l(url)
};

var webpackJsonpCallback = ([chunkIds, moreModules]) => {
  const resolves = []

  for (let i = 0; i < chunkIds.length; i++) {
    const chunkId = chunkIds[i]

    resolves.push(installedChunks[chunkId][0])
    installedChunks[chunkId] = 0
  }

  // 合并模块定义
  for (const moduleId in moreModules) {
    __webpack_modules__[moduleId] = moreModules[moduleId]
  }
  // 依次取出 promise 的 resolve 方法，让它对应的promise 变成success状态
  while(resolves.length){
    // 按队列顺序  先加载的先执行
    const firstDone = resolves.shift()
    firstDone()
  }

};
// 全局变量  用来保存  webpackJsonpCallback  以与新模块共享
var chunkLoadingGlobal = self["webpackChunkbundle"] = self["webpackChunkbundle"] || [];
chunkLoadingGlobal.push = webpackJsonpCallback

var __webpack_exports__ = {};
__webpack_require__.e("src_dynamic_js").then(__webpack_require__.bind(__webpack_require__, "./src/dynamic.js")).then(result => {
  console.log('我是dym 1', result.default);
});
