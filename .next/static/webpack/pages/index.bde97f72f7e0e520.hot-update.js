"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hero)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Hero() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: '#121212',\n            height: '100vh',\n            color: 'white',\n            display: 'flex',\n            flexDirection: 'column',\n            justifyContent: 'center',\n            alignItems: 'center'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/logo.webp\",\n                alt: \"MomentumPro Logo\",\n                style: {\n                    width: '300px',\n                    marginBottom: '30px'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JUAN DAVID\\\\Downloads\\\\MomentumPro\\\\components\\\\Hero.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    fontSize: '3rem',\n                    textAlign: 'center',\n                    marginBottom: '20px'\n                },\n                children: \"\\xa1Bienvenido a MomentumPro!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JUAN DAVID\\\\Downloads\\\\MomentumPro\\\\components\\\\Hero.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    padding: '15px 30px',\n                    fontSize: '1.2rem',\n                    backgroundColor: '#FFD700',\n                    color: 'black',\n                    border: 'none',\n                    borderRadius: '10px',\n                    cursor: 'pointer',\n                    transition: 'all 0.3s ease',\n                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'\n                },\n                onClick: ()=>document.getElementById('featured-products').scrollIntoView({\n                        behavior: 'smooth'\n                    }),\n                children: \"Descubre m\\xe1s\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JUAN DAVID\\\\Downloads\\\\MomentumPro\\\\components\\\\Hero.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\JUAN DAVID\\\\Downloads\\\\MomentumPro\\\\components\\\\Hero.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPO1lBQ1ZDLGlCQUFpQjtZQUNqQkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxnQkFBZ0I7WUFDaEJDLFlBQVk7UUFDZDs7MEJBQ0UsOERBQUNDO2dCQUFJQyxLQUFJO2dCQUFvQkMsS0FBSTtnQkFBbUJWLE9BQU87b0JBQUVXLE9BQU87b0JBQVNDLGNBQWM7Z0JBQU87Ozs7OzswQkFDbEcsOERBQUNDO2dCQUFHYixPQUFPO29CQUFFYyxVQUFVO29CQUFRQyxXQUFXO29CQUFVSCxjQUFjO2dCQUFPOzBCQUFHOzs7Ozs7MEJBRzVFLDhEQUFDSTtnQkFBT2hCLE9BQU87b0JBQ2JpQixTQUFTO29CQUNUSCxVQUFVO29CQUNWYixpQkFBaUI7b0JBQ2pCRSxPQUFPO29CQUNQZSxRQUFRO29CQUNSQyxjQUFjO29CQUNkQyxRQUFRO29CQUNSQyxZQUFZO29CQUNaQyxXQUFXO2dCQUNiO2dCQUFHQyxTQUFTLElBQU1DLFNBQVNDLGNBQWMsQ0FBQyxxQkFBcUJDLGNBQWMsQ0FBQzt3QkFBRUMsVUFBVTtvQkFBUzswQkFBSTs7Ozs7Ozs7Ozs7O0FBSzdHO0tBOUJ3QjdCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEpVQU4gREFWSURcXERvd25sb2Fkc1xcTW9tZW50dW1Qcm9cXGNvbXBvbmVudHNcXEhlcm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTIxMjEyJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9fT5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLndlYnBcIiBhbHQ9XCJNb21lbnR1bVBybyBMb2dvXCIgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcsIG1hcmdpbkJvdHRvbTogJzMwcHgnIH19IC8+XG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJywgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+XG4gICAgICAgIMKhQmllbnZlbmlkbyBhIE1vbWVudHVtUHJvIVxuICAgICAgPC9oMT5cbiAgICAgIDxidXR0b24gc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzE1cHggMzBweCcsXG4gICAgICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRDcwMCcsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXG4gICAgICAgIGJveFNoYWRvdzogJzBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICB9fSBvbkNsaWNrPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVhdHVyZWQtcHJvZHVjdHMnKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KX0+XG4gICAgICAgIERlc2N1YnJlIG3DoXNcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlcm8iLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImNvbG9yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsImgxIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsIm9uQ2xpY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero.js\n"));

/***/ })

});