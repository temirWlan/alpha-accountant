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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/js/main.js":
/*!*******************************!*\
  !*** ./app/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animation */ "./app/assets/js/modules/animation.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./app/assets/js/modules/menu.js");


window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_animation__WEBPACK_IMPORTED_MODULE_0__["default"])('.animation-item', 'visible');
  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])('.burger', '.header__nav', 'active-burger', 'active-nav');
});

/***/ }),

/***/ "./app/assets/js/modules/animation.js":
/*!********************************************!*\
  !*** ./app/assets/js/modules/animation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function countOffset(elem) {
  const rect = elem.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

function animateOnScroll(items, activeClass) {
  items.forEach((item, i) => {
    const itemHeight = item.offsetHeight,
          itemOffset = countOffset(item).top,
          animationStart = 4;
    let itemPoint = window.innerHeight - itemHeight / animationStart;

    if (itemHeight > window.innerHeight) {
      itemPoint = window.innerHeight - window.innerHeight / animationStart;
    }

    if (window.pageYOffset > itemOffset - itemPoint && window.pageYOffset < itemOffset + itemHeight) {
      item.classList.add(activeClass);
    }
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (function (itemSelector, activeClass) {
  const animationItems = document.querySelectorAll(itemSelector);
  animationItems.length > 0 && window.addEventListener('scroll', () => animateOnScroll(animationItems, activeClass));
  setTimeout(() => animateOnScroll(animationItems, activeClass), 500);
});

/***/ }),

/***/ "./app/assets/js/modules/menu.js":
/*!***************************************!*\
  !*** ./app/assets/js/modules/menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/toggle */ "./app/assets/js/utils/toggle.js");

/* harmony default export */ __webpack_exports__["default"] = (function (selectors) {
  const {
    triggerSelector,
    menuSelector,
    triggerActiveClass,
    menuActiveClass
  } = selectors;
  const trigger = document.querySelector(triggerSelector),
        menu = document.querySelector(menuSelector);
  trigger.addEventListener('click', () => {
    trigger.classList.toggle(triggerActiveClass);
    trigger.classList.contains(triggerActiveClass) ? Object(_utils_toggle__WEBPACK_IMPORTED_MODULE_0__["showItem"])(menuSelector, menuActiveClass) : Object(_utils_toggle__WEBPACK_IMPORTED_MODULE_0__["hideItem"])(menuSelector, menuActiveClass);
  });
  menu.addEventListener('click', () => {
    trigger.classList.toggle(triggerActiveClass);
    Object(_utils_toggle__WEBPACK_IMPORTED_MODULE_0__["hideItem"])(menuSelector, menuActiveClass);
  });
});

/***/ }),

/***/ "./app/assets/js/utils/toggle.js":
/*!***************************************!*\
  !*** ./app/assets/js/utils/toggle.js ***!
  \***************************************/
/*! exports provided: showItem, hideItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showItem", function() { return showItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideItem", function() { return hideItem; });
const showItem = (itemSelector, activeClass) => {
  const item = document.querySelector(itemSelector);
  item.classList.add(activeClass);
  document.body.style.overflow = 'hidden';
};
const hideItem = (itemSelector, activeClass) => {
  const item = document.querySelector(itemSelector);
  item.classList.remove(activeClass);
  document.body.style.overflow = '';
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map