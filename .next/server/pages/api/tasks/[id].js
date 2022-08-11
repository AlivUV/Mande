"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tasks/[id]";
exports.ids = ["pages/api/tasks/[id]"];
exports.modules = {

/***/ "(api)/./src/pages/api/tasks/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/api/tasks/[id].tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const { method , query  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                res.status(200).json(`GET ${query.id}.`);\n                break;\n            } catch (error) {\n                console.log(error);\n            }\n        case \"PUT\":\n            try {\n                res.status(200).json(`PUT ${query.id}.`);\n                break;\n            } catch (error1) {\n                console.log(error1);\n            }\n        default:\n            try {\n                res.status(200).json(\"M\\xe9todo inv\\xe1lido.\");\n                break;\n            } catch (error2) {\n                console.log(error2);\n            }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Rhc2tzL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSw4REFBOEQ7QUFDOUQsaUVBQWUsQ0FBQ0EsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUM1RCxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsS0FBSyxHQUFFLEdBQUdILEdBQUc7SUFFN0IsT0FBUUUsTUFBTTtRQUNaLEtBQUssS0FBSztZQUNSLElBQUk7Z0JBQ0ZELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUVGLEtBQUssQ0FBQ0csRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxNQUFLO2FBRU4sQ0FBQyxPQUFPQyxLQUFLLEVBQUU7Z0JBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7YUFDbkI7UUFDSCxLQUFLLEtBQUs7WUFDUixJQUFJO2dCQUNGTixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFRixLQUFLLENBQUNHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsTUFBSzthQUVOLENBQUMsT0FBT0MsTUFBSyxFQUFFO2dCQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBSyxDQUFDO2FBQ25CO1FBRUg7WUFDRSxJQUFJO2dCQUNGTixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLHdCQUFrQixDQUFDO2dCQUN4QyxNQUFLO2FBRU4sQ0FBQyxPQUFPRSxNQUFLLEVBQUU7Z0JBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFLLENBQUM7YUFDbkI7S0FDSjtDQUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuZGUvLi9zcmMvcGFnZXMvYXBpL3Rhc2tzL1tpZF0udHN4PzY0NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB7IG1ldGhvZCwgcXVlcnkgfSA9IHJlcVxyXG5cclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSAnR0VUJzpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihgR0VUICR7cXVlcnkuaWR9LmApXHJcbiAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIGNhc2UgJ1BVVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYFBVVCAke3F1ZXJ5LmlkfS5gKVxyXG4gICAgICAgIGJyZWFrXHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbignTcOpdG9kbyBpbnbDoWxpZG8uJylcclxuICAgICAgICBicmVha1xyXG5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbn0iXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiaWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/tasks/[id].tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/tasks/[id].tsx"));
module.exports = __webpack_exports__;

})();