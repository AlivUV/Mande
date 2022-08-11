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
exports.id = "pages/api/ping";
exports.ids = ["pages/api/ping"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./src/pages/api/ping.tsx":
/*!********************************!*\
  !*** ./src/pages/api/ping.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/database */ \"(api)/./src/utils/database/index.ts\");\n\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const response = await _utils_database__WEBPACK_IMPORTED_MODULE_0__.conn.query(`SELECT nombre FROM estudiantes WHERE codigo = '1922373';`);\n    res.status(200).json(`Conectado ${response.rows[0].nombre}.`);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3BpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRTJDO0FBRTNDLDhEQUE4RDtBQUM5RCxpRUFBZSxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBRWxFLE1BQU1DLFFBQVEsR0FBRyxNQUFNSCx1REFBVSxDQUFDLENBQUMsd0RBQXdELENBQUMsQ0FBQztJQUU3RkUsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRUgsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM5RCIsInNvdXJjZXMiOlsid2VicGFjazovL21hbmRlLy4vc3JjL3BhZ2VzL2FwaS9waW5nLnRzeD8xNTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5cclxuaW1wb3J0IHsgY29ubiB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFiYXNlJ1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubi5xdWVyeShgU0VMRUNUIG5vbWJyZSBGUk9NIGVzdHVkaWFudGVzIFdIRVJFIGNvZGlnbyA9ICcxOTIyMzczJztgKVxyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihgQ29uZWN0YWRvICR7cmVzcG9uc2Uucm93c1swXS5ub21icmV9LmApXHJcbn0iXSwibmFtZXMiOlsiY29ubiIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwicm93cyIsIm5vbWJyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/ping.tsx\n");

/***/ }),

/***/ "(api)/./src/utils/database/index.ts":
/*!*************************************!*\
  !*** ./src/utils/database/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conn\": () => (/* binding */ conn)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nlet conn;\nif (!conn) {\n    conn = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n        user: \"karen\",\n        password: \"karen\",\n        host: \"127.0.0.1\",\n        port: 5432,\n        database: \"baseDatos\"\n    });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvZGF0YWJhc2UvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRWpDLElBQUlDLElBQUk7QUFFUixJQUFJLENBQUNBLElBQUksRUFBRTtJQUNUQSxJQUFJLEdBQUcsSUFBSUQsb0NBQUksQ0FBQztRQUNkRSxJQUFJLEVBQUUsT0FBTztRQUNiQyxRQUFRLEVBQUUsT0FBTztRQUNqQkMsSUFBSSxFQUFFLFdBQVc7UUFDakJDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxXQUFXO0tBQ3RCLENBQUM7Q0FDSDtBQUVjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuZGUvLi9zcmMvdXRpbHMvZGF0YWJhc2UvaW5kZXgudHM/MDE1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sLCBDbGllbnQgfSBmcm9tICdwZydcclxuXHJcbmxldCBjb25uOiBhbnlcclxuXHJcbmlmICghY29ubikge1xyXG4gIGNvbm4gPSBuZXcgUG9vbCh7XHJcbiAgICB1c2VyOiAna2FyZW4nLFxyXG4gICAgcGFzc3dvcmQ6ICdrYXJlbicsXHJcbiAgICBob3N0OiAnMTI3LjAuMC4xJyxcclxuICAgIHBvcnQ6IDU0MzIsXHJcbiAgICBkYXRhYmFzZTogJ2Jhc2VEYXRvcydcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBjb25uIH0iXSwibmFtZXMiOlsiUG9vbCIsImNvbm4iLCJ1c2VyIiwicGFzc3dvcmQiLCJob3N0IiwicG9ydCIsImRhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/utils/database/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/ping.tsx"));
module.exports = __webpack_exports__;

})();