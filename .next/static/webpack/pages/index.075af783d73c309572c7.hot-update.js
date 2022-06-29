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
        src: "https://i.imgur.com/0BQtwBE.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNlYXJjaElucHV0UmVmIiwidXNlUmVmIiwic2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVybSIsImN1cnJlbnQiLCJ2YWx1ZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzNCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUE3Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxDQUFELEVBQU87QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLElBQUksR0FBR0wsY0FBYyxDQUFDTSxPQUFmLENBQXVCQyxLQUFwQztBQUVBLFFBQUcsQ0FBQ0YsSUFBSixFQUFVO0FBRVZQLFVBQU0sQ0FBQ1UsSUFBUCx3QkFBNEJILElBQTVCO0FBQ0QsR0FQRDs7QUFXQSxzQkFDQTtBQUFLLGFBQVMsRUFBQyxtRkFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9JO0FBQVEsZUFBUyxFQUFDLHVFQUFsQjtBQUFBLDhCQUVJO0FBQUEsK0JBQ0E7QUFBRyxtQkFBUyxFQUFDLDZCQUFiO0FBQUEsa0NBQ0k7QUFBRyxnQkFBSSxFQUFDLHdCQUFSO0FBQUEsbUNBQWlDO0FBQUcsdUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLGdCQUFJLEVBQUMsNkJBQVI7QUFBQSxtQ0FBc0M7QUFBRyx1QkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFTSTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFzQkk7QUFBTSxlQUFTLEVBQUMsa0RBQWhCO0FBQUEsOEJBQ0ksOERBQUMsbURBQUQ7QUFDQSxXQUFHLEVBQUMsaUNBREo7QUFFQSxjQUFNLEVBQUUsR0FGUjtBQUdBLGFBQUssRUFBRTtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU9JO0FBQUssaUJBQVMsRUFBQyxzSkFBZjtBQUFBLGdDQUNJLDhEQUFDLGdFQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTyxhQUFHLEVBQUVMLGNBQVo7QUFBNEIsY0FBSSxFQUFDLE1BQWpDO0FBQXdDLG1CQUFTLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVdJO0FBQUssaUJBQVMsRUFBQyx5RkFBZjtBQUFBLGdDQUNJO0FBQVEsaUJBQU8sRUFBRUUsTUFBakI7QUFBeUIsbUJBQVMsRUFBQyxzQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGlCQUFPLEVBQUVBLE1BQWpCO0FBQXlCLG1CQUFTLEVBQUMsc0NBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSixlQXNDSTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBLDZCQUNJO0FBQ0ksaUJBQVMsRUFBQyxpR0FEZDtBQUVJLFlBQUksRUFBQyxPQUZUO0FBQUEsZ0NBR0k7QUFBTSxtQkFBUyxFQUFDLDRFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJO0FBQU0sbUJBQVMsRUFBQyx3Q0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRDSixlQStDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBbURIOztHQWpFdUJMLEk7VUFDTEUsa0Q7OztLQURLRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA3NWFmNzgzZDczYzMwOTU3MmM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHNlYXJjaCA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0ZXJtID0gc2VhcmNoSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgICAgaWYoIXRlcm0pIHJldHVybjtcblxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2g/dGVybT0ke3Rlcm19YClcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gaXRlbXMtY2VudGVyIGRhcms6YmctZ3JheS05MDAgYmctb3BhY2l0eS0yNVwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GYXJlc0Nocm9tZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIb3N0aW5nIHlvdXIgb3duIFNlYXJjaGVuZ2luZSB3YXMgbmV2ZXIgZWFzaWVyLlwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi4vcHVibGljL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBwLTUganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gdGV4dC1ncmV5LTcwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIHsvKiBMZWZ0ICovfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vZmFyZXMtbWV0ZW8udGsvXCI+PHAgY2xhc3NOYW1lPVwibGlua1wiPk3DqXTDqW88L3A+PC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZmFyZXMzMDNcIj48cCBjbGFzc05hbWU9XCJsaW5rXCI+R2l0aHViPC9wPjwvYT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIFJpZ2h0ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIHsvKiBCb2R5ICovfVxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC00NCBmbGV4LWdyb3cgdy00LzVcIiA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vMEJRdHdCRS5wbmdcIlxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBtdC01IGhvdmVyOnNoYWRvdy1sZyBmb2N1cy13aXRoaW46c2hhZG93LWxnIG1heC13LW1kIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHB4LTUgcHktMyBpdGVtcyBjZW50ZXIgc206bWF4LXcteGwgbGc6bWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC01IG1yLTMgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0zMDBcIi8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj17c2VhcmNoSW5wdXRSZWZ9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZmxleCBncm93IHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpiZy1ncmF5LTkwMCBiZy1vcGFjaXR5LTI1IGRhcms6dGV4dC13aGl0ZVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMS8yIHNwYWNlLXktMiBqdXN0aWZ5LWNlbnRlciBtdC04IHNtOnNwYWNlLXktMCBzbTpmbGV4LXJvdyBzbTpzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlYXJjaH0gY2xhc3NOYW1lPVwiYnRuIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWFyY2h9IGNsYXNzTmFtZT1cImJ0biBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPlRlbGVwb3J0IG1lPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTQgbGc6cHgtNFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy1pbmRpZ28tODAwIGl0ZW1zLWNlbnRlciB0ZXh0LWluZGlnby0xMDAgbGVhZGluZy1ub25lIGxnOnJvdW5kZWQtZnVsbCBmbGV4IGxnOmlubGluZS1mbGV4XCJcbiAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tNTAwIHVwcGVyY2FzZSBweC0yIHB5LTEgdGV4dC14cyBmb250LWJvbGQgbXItM1wiPldoYXQncyBuZXc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtci0yIHRleHQtbGVmdCBmbGV4LWF1dG9cIj5Ob3cgc3VwcG9ydGluZyBhdXRvLWRhcmttb2RlPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogRm9vdGVyICovfVxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==