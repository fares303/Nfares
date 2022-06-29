self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\searchify-main\\pages\\index.js",
    _s = $RefreshSig$();







function Home() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);

  var search = function search(e) {
    e.preventDefault();
    var term = searchInputRef.current.value;
    if (!term) return;
    router.push("/search?term=".concat(term));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col justify-center h-screen items-center dark:bg-gray-900 bg-opacity-25",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "FaresChrome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Hosting your own Searchengine was never easier."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "../public/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "flex w-full p-5 justify-between text-sm text-grey-700 dark:text-white",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "flex space-x-4 items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "http://fares-meteo.tk/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "link",
              children: "M\xE9t\xE9o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 50
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://github.com/fares303",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "link",
              children: "Github"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 55
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex space-x-4 items-center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: "flex flex-col items-center mt-44 flex-grow w-4/5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: "",
        height: 100,
        width: 300
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items center sm:max-w-xl lg:max-w-2xl",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {
          className: "h-5 mr-3 text-gray-500 dark:text-gray-300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: searchInputRef,
          type: "text",
          className: "flex grow w-full focus:outline-none dark:bg-gray-900 bg-opacity-25 dark:text-white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: search,
          className: "btn dark:bg-gray-800 dark:text-white",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: search,
          className: "btn dark:bg-gray-800 dark:text-white",
          children: "Teleport me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-center py-4 lg:px-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex",
        role: "alert",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3",
          children: "What's new"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-semibold mr-2 text-left flex-auto",
          children: "Now supporting auto-darkmode"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_s(Home, "AEV146mX0Fbc4rXKci2kjxGVV1E=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNlYXJjaElucHV0UmVmIiwidXNlUmVmIiwic2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVybSIsImN1cnJlbnQiLCJ2YWx1ZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzNCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUE3Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxDQUFELEVBQU87QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLElBQUksR0FBR0wsY0FBYyxDQUFDTSxPQUFmLENBQXVCQyxLQUFwQztBQUVBLFFBQUcsQ0FBQ0YsSUFBSixFQUFVO0FBRVZQLFVBQU0sQ0FBQ1UsSUFBUCx3QkFBNEJILElBQTVCO0FBQ0QsR0FQRDs7QUFXQSxzQkFDQTtBQUFLLGFBQVMsRUFBQyxtRkFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9JO0FBQVEsZUFBUyxFQUFDLHVFQUFsQjtBQUFBLDhCQUVJO0FBQUEsK0JBQ0E7QUFBRyxtQkFBUyxFQUFDLDZCQUFiO0FBQUEsa0NBQ0k7QUFBRyxnQkFBSSxFQUFDLHdCQUFSO0FBQUEsbUNBQWlDO0FBQUcsdUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLGdCQUFJLEVBQUMsNkJBQVI7QUFBQSxtQ0FBc0M7QUFBRyx1QkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFTSTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFzQkk7QUFBTSxlQUFTLEVBQUMsa0RBQWhCO0FBQUEsOEJBQ0ksOERBQUMsbURBQUQ7QUFDQSxXQUFHLEVBQUMsRUFESjtBQUVBLGNBQU0sRUFBRSxHQUZSO0FBR0EsYUFBSyxFQUFFO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBT0k7QUFBSyxpQkFBUyxFQUFDLHNKQUFmO0FBQUEsZ0NBQ0ksOERBQUMsZ0VBQUQ7QUFBWSxtQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGFBQUcsRUFBRUwsY0FBWjtBQUE0QixjQUFJLEVBQUMsTUFBakM7QUFBd0MsbUJBQVMsRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBV0k7QUFBSyxpQkFBUyxFQUFDLHlGQUFmO0FBQUEsZ0NBQ0k7QUFBUSxpQkFBTyxFQUFFRSxNQUFqQjtBQUF5QixtQkFBUyxFQUFDLHNDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQVEsaUJBQU8sRUFBRUEsTUFBakI7QUFBeUIsbUJBQVMsRUFBQyxzQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJKLGVBc0NJO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUEsNkJBQ0k7QUFDSSxpQkFBUyxFQUFDLGlHQURkO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFBQSxnQ0FHSTtBQUFNLG1CQUFTLEVBQUMsNEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUk7QUFBTSxtQkFBUyxFQUFDLHdDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdENKLGVBK0NJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFtREg7O0dBakV1QkwsSTtVQUNMRSxrRDs7O0tBREtGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Q3OWI0NDg0ZDE2NDBmMmU2YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgc2VhcmNoID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRlcm0gPSBzZWFyY2hJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgICBpZighdGVybSkgcmV0dXJuO1xuXG4gICAgICByb3V0ZXIucHVzaChgL3NlYXJjaD90ZXJtPSR7dGVybX1gKVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlbiBpdGVtcy1jZW50ZXIgZGFyazpiZy1ncmF5LTkwMCBiZy1vcGFjaXR5LTI1XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZhcmVzQ2hyb21lPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhvc3RpbmcgeW91ciBvd24gU2VhcmNoZW5naW5lIHdhcyBuZXZlciBlYXNpZXIuXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuLi9wdWJsaWMvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHAtNSBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSB0ZXh0LWdyZXktNzAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgey8qIExlZnQgKi99XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9mYXJlcy1tZXRlby50ay9cIj48cCBjbGFzc05hbWU9XCJsaW5rXCI+TcOpdMOpbzwvcD48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mYXJlczMwM1wiPjxwIGNsYXNzTmFtZT1cImxpbmtcIj5HaXRodWI8L3A+PC9hPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogUmlnaHQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgey8qIEJvZHkgKi99XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LTQ0IGZsZXgtZ3JvdyB3LTQvNVwiID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiXCJcbiAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbXQtNSBob3ZlcjpzaGFkb3ctbGcgZm9jdXMtd2l0aGluOnNoYWRvdy1sZyBtYXgtdy1tZCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBweC01IHB5LTMgaXRlbXMgY2VudGVyIHNtOm1heC13LXhsIGxnOm1heC13LTJ4bFwiPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSBtci0zIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3NlYXJjaElucHV0UmVmfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZsZXggZ3JvdyB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6YmctZ3JheS05MDAgYmctb3BhY2l0eS0yNSBkYXJrOnRleHQtd2hpdGVcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTEvMiBzcGFjZS15LTIganVzdGlmeS1jZW50ZXIgbXQtOCBzbTpzcGFjZS15LTAgc206ZmxleC1yb3cgc206c3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWFyY2h9IGNsYXNzTmFtZT1cImJ0biBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VhcmNofSBjbGFzc05hbWU9XCJidG4gZGFyazpiZy1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIj5UZWxlcG9ydCBtZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS00IGxnOnB4LTRcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctaW5kaWdvLTgwMCBpdGVtcy1jZW50ZXIgdGV4dC1pbmRpZ28tMTAwIGxlYWRpbmctbm9uZSBsZzpyb3VuZGVkLWZ1bGwgZmxleCBsZzppbmxpbmUtZmxleFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTUwMCB1cHBlcmNhc2UgcHgtMiBweS0xIHRleHQteHMgZm9udC1ib2xkIG1yLTNcIj5XaGF0J3MgbmV3PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbXItMiB0ZXh0LWxlZnQgZmxleC1hdXRvXCI+Tm93IHN1cHBvcnRpbmcgYXV0by1kYXJrbW9kZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=