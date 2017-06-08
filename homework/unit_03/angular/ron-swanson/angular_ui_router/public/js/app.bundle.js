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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


HomeController.$inject = [];

function HomeController() {
  // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
  var vm = this;

  // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
  activate();

  function activate() {}
}

module.exports = HomeController;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (27:0)\n\n\u001b[0m \u001b[90m 25 | \u001b[39m $urlRouterProvider\u001b[33m.\u001b[39motherwise(\u001b[32m'/'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 26 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 | \u001b[39m\n \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var controller = __webpack_require__(31);
var template = __webpack_require__(95);

var component = {
  controller: controller,
  template: template
};

angular.module('RonSwansonApp').component('home', component);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log("Netflix Controller works!");

//your Netflix Controller Here

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var controller = __webpack_require__(64);
var template = __webpack_require__(97);

var component = {
  controller: controller,
  template: template
};

angular.module('RonSwansonApp').component('quotes', component);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// console.log("Quotes Controller Works!")

//Your QUOTES CONTROLLER HERE!
QuotesController.$inject = [];

function QuoteController() {
  // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
  var vm = this;

  // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
  activate();

  function activate() {}
}

module.exports = QuoteController;

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <h1>Home!!</h1>\n</div>";

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(31);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
module.exports = __webpack_require__(64);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = "<section id=\"quotes\">\n<!-- All your code goes inside this <section> -->\n\n  <h1>RON SWANSON QUOTE OF THE DAY</h1>\n\n  <button>Get Swansonized</button>\n\n  <ul>\n    <li></li>\n  </ul>\n\n  <h3>See All my saved quotes</h3>\n\n</section>\n";

/***/ })

/******/ });