"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Graduated Bachelor's Degree\",\n        location: \"Indang, Cavite, PH\",\n        desc: \"I graduated after 4 years of studying. I immediately found a job after 5 months.\",\n        date: \"Jan 21, 2020\"\n    },\n    {\n        title: \"Jr. Frontend Software Engineer\",\n        location: \"Para\\xf1aque, NCR, PH\",\n        desc: \"I worked as a front-end developer for 6 months. I faced pressure and fortunate enough to build self-confidence.\",\n        date: \"May 2020 - Nov 2020\"\n    },\n    {\n        title: \"Data Encoder\",\n        location: \"General Trias, Cavite, PH\",\n        desc: \"Work at a school university to learn other skills aside from programming like data entry and automation.\",\n        date: \"May 2021 - June 2022\"\n    },\n    {\n        title: \"Jr. Java Developer\",\n        location: \"Dasmari\\xf1as, Cavite, PH\",\n        desc: \"To fulfill full-stack in the future, I focus on design, development, testing (unit & automation), implementation and maintenance of specific software solutions in java while maintaining a focus on quality principles.\",\n        date: \"Jun 2022 - Feb 2023\"\n    },\n    {\n        title: \"Packaged App Development Analyst\",\n        location: \"Taguig, NCR, PH\",\n        desc: \"This is my current work. Focus on upskilling and creating image for the future as programmer.\",\n        date: \"March 2023 - present\"\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"NodeJS\",\n    \"Typescript\",\n    \"React\",\n    \"Next.js\",\n    \"Git\",\n    \"Tailwind\",\n    \"MYSQL\",\n    \"Java EE\",\n    \"Spring\",\n    \"Springboot\",\n    \"REST\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBS25CLE1BQU1DLFFBQVE7SUFDbkI7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsa0JBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUNFO1FBQ0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VILE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUNFO1FBQ0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VILE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUNFO1FBQ0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VILE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUNFO1FBQ0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VILE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQVU7QUFHSixNQUFNQyxhQUFhO0lBQ3hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxDQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9kYXRhLnRzPzE2ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29ycGNvbW1lbnRJbWcgZnJvbSBcIkAvcHVibGljL2NvcnBjb21tZW50LnBuZ1wiO1xyXG5pbXBvcnQgcm10ZGV2SW1nIGZyb20gXCJAL3B1YmxpYy9ybXRkZXYucG5nXCI7XHJcbmltcG9ydCB3b3JkYW5hbHl0aWNzSW1nIGZyb20gXCJAL3B1YmxpYy93b3JkYW5hbHl0aWNzLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSG9tZVwiLFxyXG4gICAgaGFzaDogXCIjaG9tZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBYm91dFwiLFxyXG4gICAgaGFzaDogXCIjYWJvdXRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2tpbGxzXCIsXHJcbiAgICBoYXNoOiBcIiNza2lsbHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRXhwZXJpZW5jZVwiLFxyXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXNEYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdyYWR1YXRlZCBCYWNoZWxvcidzIERlZ3JlZVwiLFxyXG4gICAgbG9jYXRpb246IFwiSW5kYW5nLCBDYXZpdGUsIFBIXCIsXHJcbiAgICBkZXNjOlxyXG4gICAgICBcIkkgZ3JhZHVhdGVkIGFmdGVyIDQgeWVhcnMgb2Ygc3R1ZHlpbmcuIEkgaW1tZWRpYXRlbHkgZm91bmQgYSBqb2IgYWZ0ZXIgNSBtb250aHMuXCIsXHJcbiAgICBkYXRlOiBcIkphbiAyMSwgMjAyMFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSnIuIEZyb250ZW5kIFNvZnR3YXJlIEVuZ2luZWVyXCIsXHJcbiAgICBsb2NhdGlvbjogXCJQYXJhw7FhcXVlLCBOQ1IsIFBIXCIsXHJcbiAgICBkZXNjOlxyXG4gICAgICBcIkkgd29ya2VkIGFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBmb3IgNiBtb250aHMuIEkgZmFjZWQgcHJlc3N1cmUgYW5kIGZvcnR1bmF0ZSBlbm91Z2ggdG8gYnVpbGQgc2VsZi1jb25maWRlbmNlLlwiLFxyXG4gICAgZGF0ZTogXCJNYXkgMjAyMCAtIE5vdiAyMDIwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJEYXRhIEVuY29kZXJcIixcclxuICAgIGxvY2F0aW9uOiBcIkdlbmVyYWwgVHJpYXMsIENhdml0ZSwgUEhcIixcclxuICAgIGRlc2M6XHJcbiAgICAgIFwiV29yayBhdCBhIHNjaG9vbCB1bml2ZXJzaXR5IHRvIGxlYXJuIG90aGVyIHNraWxscyBhc2lkZSBmcm9tIHByb2dyYW1taW5nIGxpa2UgZGF0YSBlbnRyeSBhbmQgYXV0b21hdGlvbi5cIixcclxuICAgIGRhdGU6IFwiTWF5IDIwMjEgLSBKdW5lIDIwMjJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkpyLiBKYXZhIERldmVsb3BlclwiLFxyXG4gICAgbG9jYXRpb246IFwiRGFzbWFyacOxYXMsIENhdml0ZSwgUEhcIixcclxuICAgIGRlc2M6XHJcbiAgICAgIFwiVG8gZnVsZmlsbCBmdWxsLXN0YWNrIGluIHRoZSBmdXR1cmUsIEkgZm9jdXMgb24gZGVzaWduLCBkZXZlbG9wbWVudCwgdGVzdGluZyAodW5pdCAmIGF1dG9tYXRpb24pLCBpbXBsZW1lbnRhdGlvbiBhbmQgbWFpbnRlbmFuY2Ugb2Ygc3BlY2lmaWMgc29mdHdhcmUgc29sdXRpb25zIGluIGphdmEgd2hpbGUgbWFpbnRhaW5pbmcgYSBmb2N1cyBvbiBxdWFsaXR5IHByaW5jaXBsZXMuXCIsXHJcbiAgICBkYXRlOiBcIkp1biAyMDIyIC0gRmViIDIwMjNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBhY2thZ2VkIEFwcCBEZXZlbG9wbWVudCBBbmFseXN0XCIsXHJcbiAgICBsb2NhdGlvbjogXCJUYWd1aWcsIE5DUiwgUEhcIixcclxuICAgIGRlc2M6IFwiVGhpcyBpcyBteSBjdXJyZW50IHdvcmsuIEZvY3VzIG9uIHVwc2tpbGxpbmcgYW5kIGNyZWF0aW5nIGltYWdlIGZvciB0aGUgZnV0dXJlIGFzIHByb2dyYW1tZXIuXCIsIFxyXG4gICAgZGF0ZTogXCJNYXJjaCAyMDIzIC0gcHJlc2VudFwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNraWxsc0RhdGEgPSBbXHJcbiAgXCJIVE1MXCIsXHJcbiAgXCJDU1NcIixcclxuICBcIkphdmFTY3JpcHRcIixcclxuICBcIk5vZGVKU1wiLFxyXG4gIFwiVHlwZXNjcmlwdFwiLFxyXG4gIFwiUmVhY3RcIixcclxuICBcIk5leHQuanNcIixcclxuICBcIkdpdFwiLFxyXG4gIFwiVGFpbHdpbmRcIixcclxuICBcIk1ZU1FMXCIsXHJcbiAgXCJKYXZhIEVFXCIsXHJcbiAgXCJTcHJpbmdcIixcclxuICBcIlNwcmluZ2Jvb3RcIixcclxuICBcIlJFU1RcIlxyXG5dIGFzIGNvbnN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJsaW5rcyIsIm5hbWUiLCJoYXNoIiwiZXhwZXJpZW5jZXNEYXRhIiwidGl0bGUiLCJsb2NhdGlvbiIsImRlc2MiLCJkYXRlIiwic2tpbGxzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/data.ts\n"));

/***/ })

});