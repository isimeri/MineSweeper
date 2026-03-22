/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    --board-width: 100%;\\n    --board-padding: 1rem;\\n    --red0: hsl(356, 68%, 34%);\\n    --red1: hsl(357, 69%, 45%);\\n    --red2: hsl(357, 69%, 65%);\\n    --green0: hsl(95, 20%, 22%);\\n    --green1: hsl(95, 40%, 34%);\\n    --green2: hsl(95, 46%, 49%);\\n    --green3: hsl(95, 46%, 63%);\\n    --blue0: hsl(236, 58%, 34%);\\n}\\n*{\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\nbody{\\n    background-color:#222;\\n    color: #ccc;\\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n    min-height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n.supreme-container{\\n    padding: 0 0.5rem;\\n    padding-top: 2vh;\\n}\\n\\nh1{\\n    margin-bottom: 1rem;\\n    text-align: center;\\n    color: #eee;\\n}\\n\\n.grid{\\n    display: grid;\\n    grid-template-areas:\\n    \\\"board\\\"\\n    \\\"grid-right\\\"\\n    \\\"grid-left\\\";\\n    /* grid-template-columns: 1fr; */\\n    gap: 1rem;\\n    max-width: 1200px;\\n    margin: 0 auto;\\n}\\n\\n.grid-left, .grid-right{\\n    padding: 1rem;\\n    background-color: #111;\\n    border-radius: 0.5rem;\\n}\\n\\n.grid-left{\\n    grid-area: grid-left;\\n    font-size: 1.1rem;\\n    line-height: 1.6;\\n}\\n.grid-right{\\n    display: flex;\\n    flex-direction: column;\\n    /* justify-content: space-between; */\\n    /* align-items: center; */\\n    grid-area: grid-right;\\n    gap: 0.5rem;\\n}\\n\\n\\n\\n\\n.grid-left > h2{\\n    color: #eee;\\n}\\n.instructions > p:not(:last-child), .instructions > .list-wrapper{\\n    padding-bottom: 0.5rem;\\n    border-bottom: 1px dashed #555;\\n    margin-bottom: 0.5rem;\\n}\\n\\nol{\\n    list-style-position: inside;\\n}\\n\\n.highlight{\\n    font-weight: bold;\\n    color: var(--red2);\\n}\\n.flags-left{\\n    font-size: 1.4rem;\\n    text-align: center;\\n}\\n\\n.game-over-message{\\n    padding: 0.5rem;\\n    font-size: 1.4rem;\\n    background-color: #ccc;\\n    color: #111;\\n    border-radius: 0.5rem;\\n    text-align: center;\\n}\\n\\n\\n.restart-btn{\\n    font-size: 1.4rem;\\n    padding: 0.5rem;\\n    border: none;\\n    background-color: var(--green2);\\n    cursor: pointer;\\n    border-radius: 0.5rem;\\n    transition: background-color 0.2s ease;\\n}\\n\\n.restart-btn:hover{\\n    background-color: var(--green3);\\n}\\n\\n.board{\\n    --board-padding: 0.5rem;\\n    grid-area: board;\\n    width: var(--board-width);\\n    padding: var(--board-padding);\\n    aspect-ratio: 1/1;\\n    background-color: #555;\\n    display: flex;\\n    flex-wrap: wrap;\\n    border-radius: 0.5rem;\\n}\\n.cell{\\n    width: calc((var(--board-width) - 2 * var(--board-padding)) / 10);\\n    width: calc(var(--board-width) / 10);\\n    aspect-ratio: 1/1;\\n    border: 1px solid #555;\\n    background-color: #888;\\n    -webkit-user-select: none;\\n       -moz-user-select: none;\\n            user-select: none;\\n    border-radius: 0.5rem;\\n}\\n.revealed-bomb{\\n    border: 1px solid var(--red1);\\n    background-color: var(--red2);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n.bomb-svg{\\n    fill: var(--red0);\\n}\\n.uncovered{\\n    background-color: var(--green2);\\n    border: 1px solid var(--green1);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 1.5rem;\\n    font-weight: bold;\\n    color: var(--green0);\\n}\\n.flag{\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 1,5rem;\\n}\\n.flag-svg{\\n    fill: var(--blue0);\\n}\\nfooter{\\n    background-color: #111;\\n    padding: 0.5rem 1rem;\\n    margin-top: auto;\\n    text-align: center;\\n}\\n.author{\\n    color: #ccc;\\n}\\n.author:hover{\\n    color: var(--red2);\\n}\\n.hidden{\\n    visibility: hidden;\\n}\\n\\n@media screen and (min-width: 450px) {\\n    .grid-right{\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: space-between;\\n        align-items: center;\\n        grid-area: grid-right;\\n        gap: 0.5rem;\\n    }\\n\\n    .flags-left{\\n        text-align: start;\\n    }\\n    .game-over-message{\\n        padding: 1rem;\\n        margin-left: auto;\\n    }\\n\\n    .restart-btn{\\n        padding: 1rem;\\n    }\\n}\\n\\n\\n@media screen and (min-width: 600px) {\\n    .board{\\n        --board-padding: 1rem;\\n    }\\n    .supreme-container{\\n        padding: 0 2rem;\\n        padding-top: 5vh;\\n    }\\n}\\n\\n@media screen and (min-width: 750px) {\\n    .grid{\\n        display: grid;\\n        grid-template-areas:\\n        \\\"board grid-right\\\"\\n        \\\"grid-left grid-left\\\";\\n        grid-template-columns: 2fr 1fr;\\n    }\\n    .grid-left{\\n        grid-area: grid-left;\\n\\n    }\\n    .grid-right{\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: flex-start;\\n        align-items: stretch;\\n        grid-area: grid-right;\\n        text-align: center;\\n    }\\n    .flags-left{\\n        margin-bottom: 1rem;\\n    }\\n    .game-over-message{\\n        margin-left: 0;\\n    }\\n\\n    .restart-btn{\\n        margin-top: auto;\\n    }\\n}\\n\\n@media screen and (min-width: 1200px) {\\n    .grid{\\n        display: grid;\\n        grid-template-columns: 1fr 2fr 1fr;\\n        grid-template-areas: none;\\n    }\\n    .grid-left, .grid-right, .board{\\n        grid-area: unset;\\n    }\\n    .instructions > p:not(:last-child), .instructions > .list-wrapper{\\n        padding-bottom: 1rem;\\n        border-bottom: 1px dashed #555;\\n        margin-bottom: 1rem;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://minesweeper/./src/styles.css?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nvar grid = document.querySelector(\".board\");\nvar nrFlagsDiv = document.querySelector(\".flags-left\");\nvar gameOverMsg = document.querySelector(\".game-over-message\");\nvar restartBtn = document.querySelector(\".restart-btn\");\n\n// setarile implicite\nvar gameState = {\n  width: 10,\n  gameOver: false,\n  flagsUsedCount: 0,\n  uncoveredCount: 0,\n  bombCount: 20\n};\nvar gameArray, domCellArray;\nfunction shuffleCells(arr1, arr2) {\n  var shuffled = [].concat(_toConsumableArray(arr1), _toConsumableArray(arr2));\n  for (var i = shuffled.length - 1; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1));\n    var _ref = [shuffled[j], shuffled[i]];\n    shuffled[i] = _ref[0];\n    shuffled[j] = _ref[1];\n  }\n  return shuffled;\n}\n;\nfunction lose(domCell, id) {\n  gameState.gameOver = true;\n  gameOverMsg.classList.remove(\"hidden\");\n  gameOverMsg.textContent = \"You lost...\";\n  domCell.classList.add(\"revealed-bomb\");\n  domCellArray.forEach(function (c, index) {\n    if (gameArray[index].bomb) {\n      c.classList.add(\"revealed-bomb\");\n      c.innerHTML = \"<svg class=\\\"bomb-svg\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z\\\" /></svg>\";\n    }\n  });\n}\nfunction win() {\n  gameState.gameOver = true;\n  gameOverMsg.classList.remove(\"hidden\");\n  gameOverMsg.textContent = \"You won!\";\n}\nfunction checkForWin() {\n  var foundBombsCount = 0;\n  for (var i = 0; i < domCellArray.length; i++) {\n    var domCell = domCellArray[i];\n    if (gameArray[i].bomb && domCell.classList.contains(\"flag\")) {\n      foundBombsCount += 1;\n    }\n  }\n  if (foundBombsCount === gameState.bombCount) {\n    win();\n  }\n}\nfunction clickCallback(cell, id) {\n  var leftEdge = id % 10 === 0;\n  var rightEdge = id % 10 === gameState.width - 1;\n  var data = gameArray[id].number;\n  if (data === 0) {\n    if (!leftEdge && id > 10) {\n      // click top left neighbor\n      clickCell(domCellArray[id - gameState.width - 1]);\n    }\n    if (id > 9) {\n      // click top neighbor\n      clickCell(domCellArray[id - gameState.width]);\n    }\n    if (!rightEdge && id > 9) {\n      // click top right neighbor\n      clickCell(domCellArray[id - gameState.width + 1]);\n    }\n    if (!rightEdge) {\n      // click right neighbor\n      clickCell(domCellArray[id + 1]);\n    }\n    if (!rightEdge && id < 89) {\n      // click bottom right neighbor\n      clickCell(domCellArray[id + gameState.width + 1]);\n    }\n    if (id < 90) {\n      // click bottom neighbor\n      clickCell(domCellArray[id + gameState.width]);\n    }\n    if (!leftEdge && id < 90) {\n      // click bottom left neighbor\n      clickCell(domCellArray[id + gameState.width - 1]);\n    }\n    if (!leftEdge) {\n      // click left neighbor\n      clickCell(domCellArray[id - 1]);\n    }\n  }\n}\nfunction clickCell(domCell) {\n  var id = parseInt(domCell.id);\n  if (gameState.gameOver) {\n    return;\n  }\n  if (domCell.classList.contains(\"uncovered\") || domCell.classList.contains(\"flag\")) {\n    return;\n  }\n  if (gameArray[id].bomb) {\n    lose(domCell, id);\n    return;\n  } else {\n    domCell.classList.add('uncovered');\n    gameState.uncoveredCount += 1;\n    var data = gameArray[id].number;\n    if (data) domCell.innerHTML = data;\n    if (gameState.uncoveredCount === gameState.width * gameState.width - gameState.bombCount) {\n      gameArray.forEach(function (item, index) {\n        if (item.bomb && !domCellArray[index].classList.contains(\"flag\")) {\n          domCellArray[index].classList.add(\"revealed-bomb\");\n          domCellArray[index].innerHTML = \"<svg class=\\\"bomb-svg\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z\\\" /></svg>\";\n        }\n      });\n      win();\n      return;\n    }\n    clickCallback(domCell, id);\n  }\n}\nfunction addFlag(cell) {\n  if (gameState.gameOver) {\n    return;\n  }\n  if (!cell.classList.contains(\"uncovered\")) {\n    if (!cell.classList.contains(\"flag\") && gameState.flagsUsedCount < gameState.bombCount) {\n      cell.classList.add(\"flag\");\n      cell.innerHTML = \"<svg class=\\\"flag-svg\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3Z\\\" /></svg>\";\n      gameState.flagsUsedCount++;\n      nrFlagsDiv.innerText = \"Flags left: \".concat(20 - gameState.flagsUsedCount);\n      checkForWin();\n    } else {\n      cell.classList.remove(\"flag\");\n      cell.innerHTML = \"\";\n      gameState.flagsUsedCount--;\n      nrFlagsDiv.innerText = \"Flags left: \".concat(20 - gameState.flagsUsedCount);\n    }\n  }\n}\nfunction createBoard() {\n  var _loop = function _loop() {\n    var cell = document.createElement(\"div\");\n    cell.setAttribute(\"id\", i);\n    cell.classList.add(\"cell\");\n    grid.appendChild(cell);\n    domCellArray.push(cell);\n    cell.addEventListener(\"click\", function (e) {\n      if (e.ctrlKey) {\n        addFlag(cell);\n        return;\n      }\n      clickCell(cell);\n    });\n  };\n  for (var i = 0; i < gameState.width * gameState.width; i++) {\n    _loop();\n  }\n}\nfunction init() {\n  var bombsArray = Array(gameState.bombCount).fill(\"bomb\");\n  var emptyArray = Array(gameState.width * gameState.width - gameState.bombCount).fill(\"empty\");\n  var shuffledArray = shuffleCells(emptyArray, bombsArray);\n  gameArray = shuffledArray.map(function (item, i) {\n    if (item === \"bomb\") {\n      return {\n        bomb: true,\n        number: null\n      };\n    } else {\n      var data = 0;\n      var leftEdge = i % 10 === 0;\n      var rightEdge = i % 10 === gameState.width - 1;\n      if (shuffledArray[i] === \"empty\") {\n        if (!leftEdge && i > 10 && shuffledArray[i - gameState.width - 1] === \"bomb\") {\n          // top left neigbor is bomb\n          data++;\n        }\n        if (i > 9 && shuffledArray[i - gameState.width] === \"bomb\") {\n          // top neighbor is bomb\n          data++;\n        }\n        if (!rightEdge && i > 9 && shuffledArray[i - gameState.width + 1] === \"bomb\") {\n          // top right neighbor is bomb\n          data++;\n        }\n        if (!rightEdge && shuffledArray[i + 1] === \"bomb\") {\n          // right neighbor is bomb\n          data++;\n        }\n        if (!rightEdge && i < 89 && shuffledArray[i + gameState.width + 1] === \"bomb\") {\n          // bottom right neighbor is bomb\n          data++;\n        }\n        if (i < 90 && shuffledArray[i + gameState.width] === \"bomb\") {\n          // bottom neighbor is bomb\n          data++;\n        }\n        if (!leftEdge && i < 90 && shuffledArray[i + gameState.width - 1] == \"bomb\") {\n          // bottom left neighbor is bomb\n          data++;\n        }\n        if (!leftEdge && shuffledArray[i - 1] === \"bomb\") {\n          // left neighbor is bomb\n          data++;\n        }\n      }\n      return {\n        bomb: false,\n        number: data\n      };\n    }\n  });\n  gameState.gameOver = false;\n  gameState.flagsUsedCount = 0;\n  gameState.uncoveredCount = 0;\n  // daca bag feature de latime reglabila, aici o setez la valoarea din input\n\n  gameOverMsg.classList.add(\"hidden\");\n  nrFlagsDiv.textContent = \"Flags left: \".concat(gameState.bombCount);\n  grid.innerHTML = \"\";\n  domCellArray = [];\n  createBoard();\n}\nrestartBtn.addEventListener(\"click\", init);\ninit();\n\n//# sourceURL=webpack://minesweeper/./src/script.js?\n}");

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;