/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrenotice_examples"] = self["webpackChunkrenotice_examples"] || []).push([["main"],{

/***/ "../lib/index.js":
/*!***********************!*\
  !*** ../lib/index.js ***!
  \***********************/
/***/ (() => {


/***/ }),

/***/ "./src/components/NotificationButton/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/NotificationButton/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var alenite_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alenite-design */ \"./node_modules/alenite-design/lib/index.js\");\n/* harmony import */ var alenite_design__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alenite_design__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var renotice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! renotice */ \"../lib/index.js\");\n/* harmony import */ var renotice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(renotice__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\nconst NotificationButton = () => {\r\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\r\n    const handleClick = () => {\r\n        dispatch((0,renotice__WEBPACK_IMPORTED_MODULE_3__.createNotification)({ id: \"trigger-notification\", message: 'This is a basic notification!', type: 'success' }));\r\n    };\r\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(alenite_design__WEBPACK_IMPORTED_MODULE_2__.Button, Object.assign({ onClick: handleClick }, { children: \"Show Notification\" }));\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationButton);\r\n\n\n//# sourceURL=webpack://renotice-examples/./src/components/NotificationButton/index.tsx?");

/***/ }),

/***/ "./src/features/ui/index.ts":
/*!**********************************!*\
  !*** ./src/features/ui/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\r\nconst initalState = {\r\n    query: '',\r\n};\r\nconst reducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initalState, builder => {\r\n    builder;\r\n    // .addCase(setQuery, (state, action) =>{\r\n    //     state.query = action.payload;\r\n    // })\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\r\n\n\n//# sourceURL=webpack://renotice-examples/./src/features/ui/index.ts?");

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch),\n/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\r\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\r\nconst useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\r\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\r\n\n\n//# sourceURL=webpack://renotice-examples/./src/hooks/index.ts?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/App */ \"./src/views/App/index.tsx\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ \"./src/store.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById('root'));\r\nroot.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, Object.assign({ store: _store__WEBPACK_IMPORTED_MODULE_5__.store }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_views_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}) })) }));\r\n\n\n//# sourceURL=webpack://renotice-examples/./src/index.tsx?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNotifications: () => (/* binding */ getNotifications),\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _features_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/ui */ \"./src/features/ui/index.ts\");\n/* harmony import */ var renotice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! renotice */ \"../lib/index.js\");\n/* harmony import */ var renotice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(renotice__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({\r\n    reducer: {\r\n        ui: _features_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        notifications: renotice__WEBPACK_IMPORTED_MODULE_1__.notifications,\r\n    },\r\n    middleware: (getDefaultMiddleware) => getDefaultMiddleware({\r\n        serializableCheck: false,\r\n    })\r\n    // .prepend(\r\n    // \tpendingListener.middleware,\r\n    // \tfulfilledListener.middleware,\r\n    // \trejectedListener.middleware,\r\n    // callbackListener.middleware\r\n    // )\r\n});\r\nconst getNotifications = (state) => state.notifications;\r\n\n\n//# sourceURL=webpack://renotice-examples/./src/store.ts?");

/***/ }),

/***/ "./src/views/App/index.tsx":
/*!*********************************!*\
  !*** ./src/views/App/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var components_NotificationButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/NotificationButton */ \"./src/components/NotificationButton/index.tsx\");\n/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/index */ \"./src/hooks/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var renotice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! renotice */ \"../lib/index.js\");\n/* harmony import */ var renotice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(renotice__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\nconst App = () => {\r\n    const dispatch = (0,hooks_index__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\r\n    const notifications = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(s => s.notifications);\r\n    console.log(\"react-redux-not,notifications\", notifications);\r\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(renotice__WEBPACK_IMPORTED_MODULE_4__.NotificationArea, { notifications: notifications, dispatch: dispatch }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_NotificationButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {})] });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://renotice-examples/./src/views/App/index.tsx?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_a","vendors-node_modules_i","vendors-node_modules_react-dom_cjs_react-dom_development_js-61bb2bf2","vendors-node_modules_red","vendors-node_modules_s"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);