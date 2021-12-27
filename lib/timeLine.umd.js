(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["timeLine"] = factory();
	else
		root["timeLine"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "075d":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzODFCNjM0QTYxMDExRUE5OThGRDJDNzhGNUUxOEY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzODFCNjM1QTYxMDExRUE5OThGRDJDNzhGNUUxOEY3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODM4MUI2MzJBNjEwMTFFQTk5OEZEMkM3OEY1RTE4RjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODM4MUI2MzNBNjEwMTFFQTk5OEZEMkM3OEY1RTE4RjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6D0FlLAAACH0lEQVR42syYv0tCURiGj1en0oYcJcihrCCXBq0xG6OphqihEBwqsKH/oMaEggoKkqKajeZcy6EMDFKbgnBMB2tT6P3guyZl13uvP+554YHA7vkejtdzzndsPYcfwkTGQQhMgWEwAJz82Sd4B6/gDiTBs9ECNgNiVDgCwmDMYJ0XcApOWLxpFB3/4wBR8AZiJqQEPxPjMaI8ZktiQyAF9oBbtB43j5XisU2JzYIHMCHaHxrzkWsYElsCCdAnOhcX11jWKzYHzvW8B20I1TjjmppiPnAJ7KJ7sXNN339iZH/FU9ztuLi2o5HYeodedCM/iI3fC6yT1xi3sDYkM0iLsDpjEQmk1HUuUv9VhoU8CasvvN/MNvO11l/7u/eoqPsznduXn2ZsWsiXEIkFJRQLktiohGIjJOaRUMyjWLTSN90JFCFpSKwsoVeZxAoSihVILCehWE7h87dsSSnc98mWJIlluO+TJeSSUU+McbBr5GmtzdnExl2feP2x55gPaVanyC41MWrbdyQQ21avEOpX/gNuQq3KEzv8aUYq3OhasRPQLC2yQ8O+Ms+dcbWLUlWekHyzTvwGrHRJjmqsck1ddxfUGc8LnXdZLXx9C+DCyKUK5Zqb0HQHpNI8dkLr2KMVuq4MgE1QaoNQiccK8NjCrJj6a90HXrAFsiaEsvysl8eqNHvA1sLl8AyYFD+Xw+oRnZYb9XL4HtwKE5fD3wIMAE42biA9crOnAAAAAElFTkSuQmCC"

/***/ }),

/***/ "1740":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1NzJGRUU0QTYxMDExRUE5MUZCQUY1MDdEQ0UyRThDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1NzJGRUU1QTYxMDExRUE5MUZCQUY1MDdEQ0UyRThDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODU3MkZFRTJBNjEwMTFFQTkxRkJBRjUwN0RDRTJFOEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODU3MkZFRTNBNjEwMTFFQTkxRkJBRjUwN0RDRTJFOEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz74oyx0AAAC30lEQVR42syYTWgTURDHZzcb0sRkUwgIEkSL1GqpRbTYGlDEehQVNYjowRCIB8V4UDzpRfFWUagHRUVREbxUBD+KFhGqRtAKtdgPL0oJXtQqm6qtqXGmzGrQanbfvk3yh/8peTM/3ts3uzNK4PQHENASdDs6hl6InosO8m859Ch6BP0Y3YN+aTeBYgOMEqfQSXSjzTyv0OfRZxm8pFQL/9HQafQbdIcAFPCaDo6R5piOwOrRGfRJdAScK8KxMhxbCGw9+hl6OcgXxXzOOWyB7UB3oXVwTyHOsdMq2Ab0JSvPgQRRjouc879gDegraA+UTx7O2fAvMKK/yltcboU4tzYT2B6XHnQ7F2LvnwU2yDUmApUVwcynImzuWKoKoMw6lyo+yqRopESjDxS5cEkTrFnwNTOtzjWz4M7GECwIS7vIxNJMYGudRloV9cLTbTqkl9aApkqBa6cwbTIi+TUFjscC8GCzDk0Rx7vXRmCLZT4gy2Zr0BsPw5EVfvCJ8y0isKjsq+XFqIda/Hi8YYjNEXqzRVU3K319rQe6N+lwYnUAgl5bdzekul2YVOTZ3VSDx6tDrc86HIEZbsM9epeH+O0cfJooWF1i0AOQdavqG5MFOJz5AucGJqBgb2mWwIa4yErV3bffYd/DccjmfogsH1L5+1ua3n8tQOJeDrbcMkShSBmN+z4puv56Eg72jk/DOVQPgfVz3yf8vhzFnUnjsXXj8UkQsfSb5eKCaJQzA9+g5dpnWVC/WKrtQ/Ejel7xhyK17ceq4EPxqDlCKK78ndyEVkovmOGvZiTPja5RASjape3MMGNfOcyd8VQZoaZ4Q4ZLdeI30bvKBEc5EpzT0uyCOuOtYHGW5eD44ujLdqc9N7gJ7XMBqo9jd4mMoUg0rmxF70ePSQAa41itHBtEwczbegpdhz6AHhQAGuS1dRwrX2qB4mA4vA69En4Ph81PdCo35nD4Cfo+CAyHfwowAKxvrXOKZK+FAAAAAElFTkSuQmCC"

/***/ }),

/***/ "1de5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "56cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ca1345_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cd44");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ca1345_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ca1345_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "86ee":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1NzJGRUU0QTYxMDExRUE5MUZCQUY1MDdEQ0UyRThDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1NzJGRUU1QTYxMDExRUE5MUZCQUY1MDdEQ0UyRThDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODU3MkZFRTJBNjEwMTFFQTkxRkJBRjUwN0RDRTJFOEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODU3MkZFRTNBNjEwMTFFQTkxRkJBRjUwN0RDRTJFOEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz74oyx0AAAC30lEQVR42syYTWgTURDHZzcb0sRkUwgIEkSL1GqpRbTYGlDEehQVNYjowRCIB8V4UDzpRfFWUagHRUVREbxUBD+KFhGqRtAKtdgPL0oJXtQqm6qtqXGmzGrQanbfvk3yh/8peTM/3ts3uzNK4PQHENASdDs6hl6InosO8m859Ch6BP0Y3YN+aTeBYgOMEqfQSXSjzTyv0OfRZxm8pFQL/9HQafQbdIcAFPCaDo6R5piOwOrRGfRJdAScK8KxMhxbCGw9+hl6OcgXxXzOOWyB7UB3oXVwTyHOsdMq2Ab0JSvPgQRRjouc879gDegraA+UTx7O2fAvMKK/yltcboU4tzYT2B6XHnQ7F2LvnwU2yDUmApUVwcynImzuWKoKoMw6lyo+yqRopESjDxS5cEkTrFnwNTOtzjWz4M7GECwIS7vIxNJMYGudRloV9cLTbTqkl9aApkqBa6cwbTIi+TUFjscC8GCzDk0Rx7vXRmCLZT4gy2Zr0BsPw5EVfvCJ8y0isKjsq+XFqIda/Hi8YYjNEXqzRVU3K319rQe6N+lwYnUAgl5bdzekul2YVOTZ3VSDx6tDrc86HIEZbsM9epeH+O0cfJooWF1i0AOQdavqG5MFOJz5AucGJqBgb2mWwIa4yErV3bffYd/DccjmfogsH1L5+1ua3n8tQOJeDrbcMkShSBmN+z4puv56Eg72jk/DOVQPgfVz3yf8vhzFnUnjsXXj8UkQsfSb5eKCaJQzA9+g5dpnWVC/WKrtQ/Ejel7xhyK17ceq4EPxqDlCKK78ndyEVkovmOGvZiTPja5RASjape3MMGNfOcyd8VQZoaZ4Q4ZLdeI30bvKBEc5EpzT0uyCOuOtYHGW5eD44ujLdqc9N7gJ7XMBqo9jd4mMoUg0rmxF70ePSQAa41itHBtEwczbegpdhz6AHhQAGuS1dRwrX2qB4mA4vA69En4Ph81PdCo35nD4Cfo+CAyHfwowAKxvrXOKZK+FAAAAAElFTkSuQmCC"

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "95aa":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__("1de5");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__("1740");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__("f6b9");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".time-line-container[data-v-33ca1345]{position:fixed;bottom:50px;left:17%;color:#ddd;z-index:99;width:70%;height:81px;background:rgba(7,13,21,.7);border-radius:10px;padding:0 10px}.time-line-container .time-line[data-v-33ca1345]{width:100%;height:100%;display:flex;justify-content:space-around;align-items:center}.time-line-container .handle-con[data-v-33ca1345]{display:felx;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;width:4em}.time-line-container .handle-con .img-con[data-v-33ca1345]{width:2em;height:2em}.time-line-container .handle-con .next-img[data-v-33ca1345]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0 0;background-size:cover}.time-line-container .handle-con .pre-img[data-v-33ca1345]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0;background-size:cover}.time-line-container .handle-con .btn-title[data-v-33ca1345]{font-size:12px}.time-line-container .line-con[data-v-33ca1345]{width:100%;height:100%;display:flex;align-items:center}.time-line-container .line-con .line[data-v-33ca1345]{width:100%;height:8px;background-color:rgba(248,245,245,.3);border-radius:10px;cursor:pointer;position:relative}.time-line-container .line-con .line .mark-con[data-v-33ca1345]{height:60px;display:inline-block;position:relative;vertical-align:top}.time-line-container .line-con .line .mark-con .mark[data-v-33ca1345]{width:2px;height:1em;background-color:rgba(248,242,242,.3);margin:0 auto;margin-top:8px;border-radius:5px}.time-line-container .line-con .line .mark-con .label[data-v-33ca1345]{width:100%;text-align:center;font-size:10px}.time-line-container .line-con .vernier[data-v-33ca1345]{position:absolute;left:0;top:-5px;width:16px;height:16px;border-radius:50%;cursor:pointer;transition:.3s;background:#f7a715;border:1px solid #fff}.time-line-container .line-con .vernier .tooltip[data-v-33ca1345]{width:112px;height:24px;background:rgba(44,193,255,.7);border-radius:4px;position:absolute;top:-34px;left:-50px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 1px 0 #000}.time-line-container .line-con .vernier .tooltip .text[data-v-33ca1345]{width:100%;color:#fff;font-size:12px}.time-line-container .line-con .vernier .tooltip .trangle[data-v-33ca1345]{position:absolute;top:24px;left:50px;width:0;height:0;border-style:solid;border-width:5px 5px 0 5px;border-color:rgba(44,193,255,.7) transparent transparent transparent}.time-line-container .time-line-close[data-v-33ca1345]{position:absolute;right:.5%;top:1%;font-size:22px;color:#fff;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "cd44":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("95aa");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5eeaa36b", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f6b9":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODU3MkZFRTRBNjEwMTFFQTkxRkJBRjUwN0RDRTJFOEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODU3MkZFRTVBNjEwMTFFQTkxRkJBRjUwN0RDRTJFOEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NTcyRkVFMkE2MTAxMUVBOTFGQkFGNTA3RENFMkU4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NTcyRkVFM0E2MTAxMUVBOTFGQkFGNTA3RENFMkU4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvijLHQAAAM4SURBVFhHxZhLSFRRHMb/k6llM409NjFIbSwLE3pA9kAIC3tA5CaKiqIHboSidi2rTRChkIuisEURMSUVbYKKKDALjTDRTCIihiAQnNF8MDPa990X4zSve+fc5gc/5pwD8z8f59y5c8/1lLUNiwPWwh1wM1wJK6APklH4E36F7+AL+Bnawk4wPzwFT8LVHLDBALwNb8EwB7Ixx/jMxFx4Bn6HV6HdUITf4XdZg7VYMyPZgnGb3sMWuIgDecIarMWarJ2WTMEaYQ9cr/XUwpqsvV/rpSBdsKMwCL1azx1Y+yE8ovWSSBVsH2yHRVrPXTjHHcg5Z5EcbBW8B/9HKBPOdRdybovEYPyl3Idubl86eA/kgli/1sRgzXCd3iwIGyAzaJg3WK7SD7iYnQLCMCvgmLliTVBJKG+xR67VlRk92yyBzGJt5QnjMy8alhdL9yG/NFXPM0YcoWVhsBq4hh2nLJ3vkfadXunY65MKb+Jl6whmqWGVeq3rkAOVJdJzsFz7VEg9g9XqbXsEsDKPsEJcKa6YYmoZrEpv5wYjnK4uxSr5ZReuKZeoYrCA3s5OZXmRPG9cKC11C8RXonyVEgkwmPnkmZHyUo8E93hl67Ksj1Iq8DFYToxMzci2YERu9E3K9Iwx6CIMxmf0nBiLzsi5N+PS8DgiQyNxY9QVRhkspLdzp/NXTDY9CMuV7gmJThuDagkx2Be9bY8pLNjFDxPY3rB8/B0zRpUxwGBdetsZfcNx2d4RkQud4zIRU3bxdTHYS73tnBi2s/XTJLY3Im9DUWM0L14xWC/s17p58i0cl91PRqX59R9jxBHM0stghIdRJXAz2/un9I4ztCxmsJvQ0bsCxTADs1jBxuBlvVlQLkFmsYKR65CH0ELBudv05uxgvBkdhjn/EyiEc3Ju64aYGIwMQp6MXf2/SYJzcU7ObZEcjDyFx6Hy23kKOMcxyDlnkSoY4cmYL1Xc3NYI5Bw86P5DumDkGeQh1I0fBGtuhJwjJZmCkSHIM8FZqOI+xxqsxZqsnZZswQivg1bIE/J56OTvi9/hd1mDtbJev/m8HOaxbws0Xw6bL2N4gzRfDndCPiTYfDks8hcJhrVeQvPeIAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4757a5e9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/time-line/index.vue?vue&type=template&id=33ca1345&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"time-line-container"},[_c('a',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],staticClass:"time-line-close",attrs:{"href":"javascript:;"},on:{"click":_vm.handleCloseTimeLIne}},[_vm._v("×")]),_c('div',{staticClass:"time-line",attrs:{"type":"flex","justify":"","gutter":10}},[_c('div',{staticClass:"handle-con play-btn",attrs:{"span":2},on:{"click":_vm.handlePlay}},[_c('img',{staticClass:"img-con",attrs:{"src":_vm.isPlay ? _vm.playImg : _vm.stopPlayImg,"alt":""}})]),_c('div',{staticClass:"line-con",attrs:{"span":10}},[_c('div',{ref:"line",staticClass:"line",attrs:{"id":"line"}},[_vm._l((_vm.lineData),function(item,index){return _c('div',{key:index,ref:"markCon",refInFor:true,staticClass:"mark-con",style:({ width: _vm.markWidthInit }),attrs:{"title":item},on:{"click":function($event){$event.stopPropagation();return _vm.markerClick(item, index + 1, $event)}}},[_c('div',{staticClass:"mark",style:(index % 2 == 0 ? { height: '15px' } : { height: '15px' })}),_c('div',{staticClass:"label"},[_vm._v(_vm._s(_vm._f("formatTime")(item)))])])}),_c('div',{ref:"vernier",staticClass:"vernier",style:({ left: _vm.vernierLeft })},[_c('div',{staticClass:"tooltip"},[_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm._f("dateFormat")(_vm.value)))]),_c('div',{staticClass:"trangle"})])])],2),_c('div',{staticClass:"passed"})])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/time-line/index.vue?vue&type=template&id=33ca1345&scoped=true&

// CONCATENATED MODULE: ./packages/time-line/common.js
/*
 * @Author: wangchaoxu
 * @Date: 2020-06-04 14:33:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-08-05 15:57:20
 * @Description:
 */
function timeFormat(time, fmt = 'yyyy-MM-dd HH:mm:ss') {
  time = new Date(time);
  var o = {
    'M+': time.getMonth() + 1, //月份
    'd+': time.getDate(), //日
    'h+': time.getHours() % 12 == 0 ? 12 : time.getHours() % 12, //小时
    'H+': time.getHours(), //小时
    'm+': time.getMinutes(), //分
    's+': time.getSeconds(), //秒
    'q+': Math.floor((time.getMonth() + 3) / 3), //季度
    S: time.getMilliseconds() //毫秒
  };
  var week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[time.getDay() + '']);
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
}
/*
* 调用实例
  timeRange('2020-06-04 00:00:00', '2020-06-04 24:00:00', 24)
*
*/
function timeRange(startDate, endDate, amount) {
  var startTime = new Date(startDate),
    endTime = new Date(endDate),
    gap = (endTime - startTime) / amount;
  var temp = [];
  for (var i = 0; i < amount; i++) {
    startTime.setMilliseconds(startTime.getMilliseconds() + gap);
    temp[i] = timeFormat(new Date(startTime.getTime()));
  }
  return temp;
}
/**
 * 从数组中找到最接近的数
 * @param {Number}  val
 * @param {Array}   data
 * @return {Number} 最接近当前值的结果
 * @author: wangchaoxu
 */
function findNearByArr(val, data) {
  if (data.indexOf(val) != -1) return val;
  data.push(val);
  let newArr = data.sort((a, b) => a - b);
  console.log(newArr);
  let pre = newArr[newArr.indexOf(val) - 1];
  let next = newArr[newArr.indexOf(val) + 1];
  return val - pre > next - val || val - pre === next - val ? next : pre;
}


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/time-line/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var time_linevue_type_script_lang_js_ = ({
  name: "TimeLine",
  components: {},
  props: {
    btime: {
      type: Date,
    },
    etime: {
      type: Date,
    },
    lineData: {
      type: Array,
      default: () => timeRange(timeFormat(new Date(), "yyyy-MM-dd 00:00:00"), timeFormat(new Date(), "yyyy-MM-dd 24:00:00"), 24),
    },
    playImg: {
      type: String,
      default: __webpack_require__("075d"),
    },
    stopPlayImg: {
      type: String,
      default: __webpack_require__("86ee"),
    },
    nextImg: __webpack_require__("1740"),
    preImg: __webpack_require__("f6b9"),
  },
  data() {
    return {
      isPlay: false,
      date: new Date(),
      count: this.lineData.length, //分段的长度
      timer: null, //播放时的定时器
      vernierLeft: "0",
      markWidth: "", //每个mark的宽度
      index: 1, //当前所在元素的下标
      value: null, //当前元素的时间
      timeList: [],
    };
  },
  methods: {
    // 用户修改时间确认
    handleChangeDate(val) {
      console.log("修改时间", val);
      this.$nextTick(() => {
        this.initTimeline();
      });
    },
    time() {},
    // 点击播放
    handlePlay() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.playImg = __webpack_require__("075d");
        this.timer = setInterval(() => {
          this.nextMove();
        }, 800);
      } else {
        clearInterval(this.timer);
        this.playImg = __webpack_require__("86ee");
      }
    },
    nextMove() {
      if (this.index == this.count) this.index = 0;
      this.index++;
      this.getIndexTime();
      this.vernierLeft = this.markerPosition(this.index, this.markWidth);
      this.$emit("handlePlay", this.value);
    },
    //点击mark
    markerClick(val, index) {
      console.log("点击mark");
      this.isPlay = false;
      clearInterval(this.timer);
      this.playImg = __webpack_require__("86ee");
      this.vernierLeft = this.markerPosition(index, this.markWidth);
      this.index = index;
      this.value = val;
      this.$emit("handleMarkerClick", this.value);
    },
    // 设置游标的位置
    markerPosition(index, markWidth) {
      return parseFloat(markWidth) * index - parseFloat(markWidth) / 2 - 8 + "px";
    },
    // 初始化时间
    initTimeline(time = timeFormat(time)) {
      this.markWidth = this.getMarkWidth();
      this.index = this.lineData.indexOf(time) + 1;
      this.value = time;
      this.vernierLeft = this.markerPosition(this.index, this.markWidth);
      this.$emit("handleInit", this.value);
    },
    // 获取分段的宽度
    getMarkWidth() {
      let with2 = document.defaultView.getComputedStyle(document.getElementById("line"), null).width;
      return parseFloat(with2) / this.count;
    },
    // 获取下标对应的时间
    getIndexTime() {
      this.value = this.lineData[this.index - 1];
    },
    // 关闭时间轴
    handleCloseTimeLIne() {
      if (this.isPlay) {
        this.isPlay = false;
        clearInterval(this.timer);
        this.playImg = __webpack_require__("86ee");
      }
      this.$emit("handleCloseTimeLIne", false);
    },
  },
  filters: {
    dateFormat(val) {
      return timeFormat(val, "yyyy-MM-dd HH:mm");
    },
    formatTime(val) {
      return timeFormat(val, "HH:mm");
    },
  },
  computed: {
    markWidthInit() {
      return 100 / this.count + "%";
    },
  },
  mounted() {
    setTimeout(() => {
      let timeData = this.lineData.map((item) => new Date(item).getTime());
      this.initTimeline(timeFormat(findNearByArr(new Date().getTime(), timeData)));
    });
  },
});

// CONCATENATED MODULE: ./packages/time-line/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_time_linevue_type_script_lang_js_ = (time_linevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/time-line/index.vue?vue&type=style&index=0&id=33ca1345&scoped=true&lang=less&
var time_linevue_type_style_index_0_id_33ca1345_scoped_true_lang_less_ = __webpack_require__("56cf");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/time-line/index.vue






/* normalize component */

var component = normalizeComponent(
  packages_time_linevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "33ca1345",
  null
  
)

/* harmony default export */ var time_line = (component.exports);
// CONCATENATED MODULE: ./packages/time-line/index.js
/*
 * @Author: zulezhe
 * @Date: 2021-12-27 09:59:05
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-12-27 10:13:44
 * @Path: https://gitee.com/zulezhe/
 * @Description:
 */
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
time_line.install = function(Vue) {
  Vue.component(time_line.name, time_line);
};
// 默认导出组件
/* harmony default export */ var packages_time_line = (time_line);

// CONCATENATED MODULE: ./packages/index.js
/*
 * @Author: zulezhe
 * @Date: 2021-12-27 09:59:05
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-12-27 10:13:20
 * @Path: https://gitee.com/zulezhe/
 * @Description: 
 */
// 导入时间轴组件


// 存储组件列表
const components = [packages_time_line];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  TimeLine: packages_time_line,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=timeLine.umd.js.map