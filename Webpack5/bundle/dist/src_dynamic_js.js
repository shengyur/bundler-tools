"use strict";
(self["webpackChunkbundle"] = self["webpackChunkbundle"] || []).push(
  [
    ["src_dynamic_js"], 
    {
      "./src/dynamic.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "default": () => __WEBPACK_DEFAULT_EXPORT__
        });
        const __WEBPACK_DEFAULT_EXPORT__ = 'hello dynamic import!';
      }
    }
  ]
);