/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  width: 80%;\n  margin: 0 auto;\n  padding: 1rem;\n  border: none;\n  background-color: #bfdbfe;\n}\n\nheader {\n  padding: 1rem;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px #93c5fd;\n  margin-bottom: 1.5rem;\n  background-color: #ffffff;\n  \n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1.5rem;\n}\n\nheader .left-part {\n  grid-column: 1 / 4;\n\n  display: grid;\n  grid-template-columns: auto auto 0.85fr;\n  gap: 0.75rem;\n  align-items: center;\n  justify-content: start;\n}\n\nheader .left-part img {\n  height: 1.5em;\n}\n\nheader .left-part input {\n  border-radius: 10px;\n  border: none;\n  background-color: #e2e8f0;\n}\n\nheader .right-part {\n  grid-column: 4 / 6;\n\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  justify-content: end;\n  align-items: center;\n  gap: 1rem;\n}\n\n.project-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1.5rem;\n}\n\n.todo-container {\n  padding: 1rem;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px #93c5fd;\n  background-color: #ffffff;\n\n  display: grid;\n  grid-template-rows: auto;\n}\n\n#todo-form,\n.sub-container {\n  padding: 1rem;\n}\n\n.add-section-button {\n  border-style: none;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px #93c5fd;\n  background-color: #ffffff;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display-todo.js":
/*!*****************************!*\
  !*** ./src/display-todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction refreshDisplay() {\n  const containers = document.querySelectorAll('.sub-container');\n\n  // Loop through the NodeList and remove each container\n  if(containers.length > 0) {\n    containers.forEach(function(container) {\n        container.remove();\n    });\n  }\n}\n\nfunction displayTodo(todoHolder) {\n  refreshDisplay();\n\n  const todoContainer = document.querySelector('.todo-container');\n\n  const todos = todoHolder.todos\n  todos.forEach(todo => {\n    const subContainer = document.createElement('div');\n    subContainer.classList.add('sub-container');\n    for (const property in todo) {\n      const line = document.createElement('p');\n      line.textContent = `${property}: ${todo[property]}`;\n      subContainer.appendChild(line);\n      todoContainer.appendChild(subContainer);\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodo);\n\n//# sourceURL=webpack://project-todo-list/./src/display-todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _load_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-header.js */ \"./src/load-header.js\");\n/* harmony import */ var _load_default_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-default.js */ \"./src/load-default.js\");\n/* harmony import */ var _todo_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-holder.js */ \"./src/todo-holder.js\");\n//import styles, classes, modules\n\n\n\n// maybe import todo-holder here\n\n\nfunction startup() {\n  const todoHolder = new _todo_holder_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]()\n  ;(0,_load_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_load_default_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoHolder);\n  //try adding tasks first without todo class object\n}\n\nstartup();\n\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/load-default.js":
/*!*****************************!*\
  !*** ./src/load-default.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _load_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-form.js */ \"./src/load-form.js\");\n\n\nfunction loadDefault(todoHolder) {\n  const container = document.querySelector('.container')\n\n  const projectContainer = document.createElement('div');\n  projectContainer.classList.add('project-container');\n\n  const todoContainer = document.createElement('div');\n  todoContainer.classList.add('todo-container');\n\n  const h3 = document.createElement('h3');\n  h3.textContent = 'To do';\n\n  const addTask = document.createElement('button');\n  addTask.classList.add('add-task')\n  addTask.textContent = '+ Add task';\n  addTask.addEventListener(\"click\", () => {\n    (0,_load_form_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todoHolder);\n  });\n\n  const addSection = document.createElement('button');\n  addSection.classList.add('add-section-button');\n  addSection.textContent = '+ Add section';\n\n  container.appendChild(projectContainer);\n  \n  projectContainer.appendChild(todoContainer);\n  //projectContainer.appendChild(newSection)\n  todoContainer.appendChild(h3);\n  todoContainer.appendChild(addTask);\n  projectContainer.appendChild(addSection);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDefault);\n\n//# sourceURL=webpack://project-todo-list/./src/load-default.js?");

/***/ }),

/***/ "./src/load-form.js":
/*!**************************!*\
  !*** ./src/load-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item.js */ \"./src/todo-item.js\");\n/* harmony import */ var _display_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-todo.js */ \"./src/display-todo.js\");\n\n\n\n// Function to create and append an input element\nfunction createInput(form, labelName, type, id, required = false) {\n  // for holding label and input\n  const formItem = document.createElement('div');\n  formItem.classList.add('form-item');\n\n  const label = document.createElement('label');\n  label.setAttribute('for', id);\n  label.textContent = labelName;\n\n  const input = document.createElement('input');\n  input.type = type;\n  input.id = id;\n  input.name = id;\n  if (required) {\n    input.required = true;\n  }\n\n  formItem.appendChild(label);\n  formItem.appendChild(input);\n  form.appendChild(formItem);\n}\n\nfunction createSelect(form, labelName, id, options) {\n  // for holding label and select\n  const formItem = document.createElement('div');\n  formItem.classList.add('form-item');\n\n  const label = document.createElement('label');\n  label.setAttribute('for', id);\n  label.textContent = labelName;\n\n  const select = document.createElement('select');\n  select.id = id;\n  select.name = id;\n  options.forEach(opt => {\n    const option = document.createElement('option');\n    option.value = opt.value;\n    option.textContent = opt.label;\n    select.appendChild(option);\n  });\n\n  formItem.appendChild(label);\n  formItem.appendChild(select);\n  form.appendChild(formItem);\n}\n\nfunction loadForm(todoHolder) {\n  // cancel and submit form reloads add task button\n  document.querySelector('.add-task').remove();\n  \n  // create form\n  const form = document.createElement('form');\n  form.id = 'todo-form';\n\n  createInput(form, 'Title:', 'text', 'title', true);\n  createInput(form, 'Description:', 'text', 'description', true);\n  createInput(form, 'Due Date:', 'date', 'due-date', true);\n  createSelect(form, 'Priority:', 'priority', [\n    {value: 'low', label: 'Low'},\n    {value: 'medium', label: 'Medium'},\n    {value: 'high', label: 'High'},\n  ]);\n\n  const submitBtn = document.createElement('input');\n  submitBtn.type = 'submit';\n  submitBtn.value = 'Add Todo';\n  form.appendChild(submitBtn);\n\n  // form submit event\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const title = document.getElementById('title').value;\n    const description = document.getElementById('description').value;\n    const dueDate = document.getElementById('due-date').value;\n    const priority = document.getElementById('priority').value;\n\n    const newTodo = new _todo_item_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority);\n    console.log(newTodo);\n\n    todoHolder.addTodo(newTodo);\n    console.log(todoHolder);\n\n    (0,_display_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoHolder);\n\n    // append after form submission\n    const addTask = document.createElement('button');\n    addTask.classList.add('add-task')\n    addTask.textContent = '+ Add task';\n    addTask.addEventListener(\"click\", () => {\n      loadForm(todoHolder);\n    });\n    document.querySelector('.todo-container').appendChild(addTask);\n    form.remove();\n  });\n\n  // append to container\n  document.querySelector('.todo-container').appendChild(form);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadForm);\n\n//# sourceURL=webpack://project-todo-list/./src/load-form.js?");

/***/ }),

/***/ "./src/load-header.js":
/*!****************************!*\
  !*** ./src/load-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_FILL0_wght400_GRAD0_opsz24.svg */ \"./src/menu_FILL0_wght400_GRAD0_opsz24.svg\");\n/* harmony import */ var _home_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home_FILL0_wght400_GRAD0_opsz24.svg */ \"./src/home_FILL0_wght400_GRAD0_opsz24.svg\");\n/* harmony import */ var _account_circle_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account_circle_FILL0_wght400_GRAD0_opsz24.svg */ \"./src/account_circle_FILL0_wght400_GRAD0_opsz24.svg\");\n/* harmony import */ var _notifications_active_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications_active_FILL0_wght400_GRAD0_opsz24.svg */ \"./src/notifications_active_FILL0_wght400_GRAD0_opsz24.svg\");\n\n\n\n\n\nfunction loadHeader() {\n  const container = document.querySelector('.container')\n  const header = document.createElement('header');\n\n  const leftPart = document.createElement('div');\n  leftPart.classList.add('left-part');\n  const menuIcon = document.createElement('img');\n  menuIcon.src = _menu_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_0__;\n  const homeIcon = document.createElement('img');\n  homeIcon.src = _home_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_1__;\n  const searchBar = document.createElement('input');\n  searchBar.type = 'search'\n  searchBar.id = 'searchbar';\n  searchBar.name = 'searchbar';\n\n  const rightPart = document.createElement('div');\n  rightPart.classList.add('right-part');\n  const bellIcon = document.createElement('img');\n  bellIcon.src = _notifications_active_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__;\n  const accountIcon = document.createElement('img');\n  accountIcon.src = _account_circle_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__;\n\n  container.appendChild(header);\n  header.appendChild(leftPart);\n  leftPart.appendChild(menuIcon);\n  leftPart.appendChild(homeIcon);\n  leftPart.appendChild(searchBar);\n  header.appendChild(rightPart);\n  rightPart.appendChild(bellIcon);\n  rightPart.appendChild(accountIcon);\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);\n\n//# sourceURL=webpack://project-todo-list/./src/load-header.js?");

/***/ }),

/***/ "./src/todo-holder.js":
/*!****************************!*\
  !*** ./src/todo-holder.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item.js */ \"./src/todo-item.js\");\n\n\n// use this class to store\nclass TodoHolder {\n  constructor(name) {\n    this.name = name;\n    this.todos = [];\n  }\n\n  addTodo(todoItem) {\n    if (todoItem instanceof _todo_item_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.todos.push(todoItem); \n    } else {\n      throw new Error('Invalid todo item');\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoHolder);\n\n//# sourceURL=webpack://project-todo-list/./src/todo-holder.js?");

/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nclass TodoItem {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);\n\n//# sourceURL=webpack://project-todo-list/./src/todo-item.js?");

/***/ }),

/***/ "./src/account_circle_FILL0_wght400_GRAD0_opsz24.svg":
/*!***********************************************************!*\
  !*** ./src/account_circle_FILL0_wght400_GRAD0_opsz24.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7b592d6f71021d8f768.svg\";\n\n//# sourceURL=webpack://project-todo-list/./src/account_circle_FILL0_wght400_GRAD0_opsz24.svg?");

/***/ }),

/***/ "./src/home_FILL0_wght400_GRAD0_opsz24.svg":
/*!*************************************************!*\
  !*** ./src/home_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97a5076a0efd36487580.svg\";\n\n//# sourceURL=webpack://project-todo-list/./src/home_FILL0_wght400_GRAD0_opsz24.svg?");

/***/ }),

/***/ "./src/menu_FILL0_wght400_GRAD0_opsz24.svg":
/*!*************************************************!*\
  !*** ./src/menu_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d3c31af19b9c297e945.svg\";\n\n//# sourceURL=webpack://project-todo-list/./src/menu_FILL0_wght400_GRAD0_opsz24.svg?");

/***/ }),

/***/ "./src/notifications_active_FILL0_wght400_GRAD0_opsz24.svg":
/*!*****************************************************************!*\
  !*** ./src/notifications_active_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53c1da01f9ab1da45fb8.svg\";\n\n//# sourceURL=webpack://project-todo-list/./src/notifications_active_FILL0_wght400_GRAD0_opsz24.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;