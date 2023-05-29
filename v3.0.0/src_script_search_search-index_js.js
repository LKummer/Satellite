"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksatellite"] = self["webpackChunksatellite"] || []).push([["src_script_search_search-index_js"],{

/***/ "./src/script/search/search-index.js":
/*!*******************************************!*\
  !*** ./src/script/search/search-index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSearchIndex\": () => (/* binding */ getSearchIndex)\n/* harmony export */ });\n/* harmony import */ var fuse_js_dist_fuse_basic_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fuse.js/dist/fuse.basic.esm */ \"./node_modules/fuse.js/dist/fuse.basic.esm.js\");\n/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commonmark */ \"./node_modules/commonmark/lib/index.js\");\n\n\n\nfunction findHeadings(tree) {\n  let result = [];\n  if (tree._type === 'heading') {\n    result.push(tree);\n  }\n  if (tree._firstChild) {\n    result = result.concat(findHeadings(tree._firstChild));\n  }\n  if (tree._next) {\n    result = result.concat(findHeadings(tree._next));\n  }\n  return result;\n}\n\nfunction linkifyHeading(literal) {\n  return literal.toLowerCase().replaceAll(/\\s/gu, '-').replaceAll(/\\//gu, '');\n}\n\nasync function getSearchIndex(baseURL) {\n  const markdownReader = new commonmark__WEBPACK_IMPORTED_MODULE_1__.Parser({});\n  const index = await fetch(`${baseURL}index.json`);\n  const data = (await index.json()).map((page) => {\n    const headings = findHeadings(markdownReader.parse(page.content))\n      .map((heading) => ({\n        literal: heading._firstChild._literal,\n        line: heading._sourcepos[0][0],\n        href: `${page.permalink}#${linkifyHeading(\n          heading._firstChild._literal\n        )}`\n      }))\n      // Sort in reverse order for easier lookup later on.\n      .sort((a, b) => b.line - a.line);\n    return { ...page, headings };\n  });\n  return new fuse_js_dist_fuse_basic_esm__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data, {\n    keys: ['title', 'description', 'section', 'content'],\n    threshold: 0.2,\n    ignoreLocation: true,\n    minMatchCharLength: 3,\n    includeMatches: true\n  });\n}\n\n\n//# sourceURL=webpack://satellite/./src/script/search/search-index.js?");

/***/ })

}]);