var appGlobal =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Inheritance/SingleInheritance/child.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Inheritance/SingleInheritance/child.js":
/*!****************************************************!*\
  !*** ./src/Inheritance/SingleInheritance/child.js ***!
  \****************************************************/
/*! exports provided: child */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"child\", function() { return child; });\n/* harmony import */ var _SingleInheritance_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SingleInheritance/parent */ \"./src/Inheritance/SingleInheritance/parent.js\");\n\r\n\r\nclass child extends _SingleInheritance_parent__WEBPACK_IMPORTED_MODULE_0__[\"parent\"]{\r\n\r\n    constructor(name){\r\n        super(name);\r\n    }\r\n\r\n\r\n    childMethod(){\r\n        // call base class Method\r\n        super.parentMethod();\r\n    }\r\n\r\n    parentOverrideMethod(){\r\n        super.parentOverrideMethod(); // Call Parent Object\r\n        console.log(\"Override method call in child Method\");\r\n    }\r\n\r\n}\r\n\r\nlet childObj=new child(\"Hello Constructor Overriding\");\r\nchildObj.parentOverrideMethod();\r\n\n\n//# sourceURL=webpack://appGlobal/./src/Inheritance/SingleInheritance/child.js?");

/***/ }),

/***/ "./src/Inheritance/SingleInheritance/parent.js":
/*!*****************************************************!*\
  !*** ./src/Inheritance/SingleInheritance/parent.js ***!
  \*****************************************************/
/*! exports provided: parent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parent\", function() { return parent; });\nclass parent{\r\n\r\n    constructor(name){\r\n        console.log(name);\r\n    }\r\n\r\n    parentMethod(){\r\n        console.log(\"Parent Method\");\r\n    }\r\n\r\n    // Override Demo\r\n    parentOverrideMethod(){\r\n        console.log(\"Parent Override Method\");\r\n    }\r\n\r\n  \r\n\r\n}\n\n//# sourceURL=webpack://appGlobal/./src/Inheritance/SingleInheritance/parent.js?");

/***/ })

/******/ });