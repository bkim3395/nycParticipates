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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/circles.js":
/*!************************!*\
  !*** ./lib/circles.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// d3.json(\"data/city_districts.json\").then((data) => {\n//     console.log(data);\n// })\n// console.log(\"testing\")\n// let projection = d3.geoEqualEarth()\n// let path = d3.geoPath(projection);\n// let svg = d3.select(\"body\").append(\"svg\")\n//             .attr(\"width\", 500)\n//             .attr(\"height\", 500);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((projection, path) => {\n  $(\"#year-selector\").on(\"click\", e => {\n    e.preventDefault();\n    console.log(`Year ${e.target.value} selected!`);\n    let projects = d3.csv(\"data/participatory_budgeting_projects.csv\");\n    projects.then(data => {\n      let selection = d3.select(\"svg\").selectAll(\"circle\").data(data.filter(d => {\n        return e.target.value === d[\"Vote Year\"];\n      }), d => {\n        return d[\"Vote Year\"];\n      });\n      selection.enter().append(\"circle\").attr(\"cx\", d => projection([d.Longitude, d.Latitude])[0]).attr(\"cy\", d => projection([d.Longitude, d.Latitude])[1]).attr(\"r\", \"1px\").attr(\"class\", (_, i) => {\n        return `circle-${i}`;\n      }).attr(\"fill\", d => {\n        return d.Winner === \"1\" ? \"green\" : \"red\";\n      });\n      selection.exit().remove();\n    });\n  });\n}); // , (d, i) => (d[\"Vote Year\"])//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2lyY2xlcy5qcz8yYmJiIl0sIm5hbWVzIjpbInByb2plY3Rpb24iLCJwYXRoIiwiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwicHJvamVjdHMiLCJkMyIsImNzdiIsInRoZW4iLCJkYXRhIiwic2VsZWN0aW9uIiwic2VsZWN0Iiwic2VsZWN0QWxsIiwiZmlsdGVyIiwiZCIsImVudGVyIiwiYXBwZW5kIiwiYXR0ciIsIkxvbmdpdHVkZSIsIkxhdGl0dWRlIiwiXyIsImkiLCJXaW5uZXIiLCJleGl0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLGdFQUFDQSxVQUFELEVBQWFDLElBQWIsS0FBc0I7QUFDakNDLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxFQUFwQixDQUF1QixPQUF2QixFQUFpQ0MsQ0FBRCxJQUFPO0FBQ25DQSxLQUFDLENBQUNDLGNBQUY7QUFFQUMsV0FBTyxDQUFDQyxHQUFSLENBQWEsUUFBT0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQU0sWUFBbkM7QUFFQSxRQUFJQyxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLDJDQUFQLENBQWY7QUFFQUYsWUFBUSxDQUFDRyxJQUFULENBQWVDLElBQUQsSUFBVTtBQUNwQixVQUFJQyxTQUFTLEdBQUdKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVLEtBQVYsRUFDS0MsU0FETCxDQUNlLFFBRGYsRUFFS0gsSUFGTCxDQUVVQSxJQUFJLENBQUNJLE1BQUwsQ0FBYUMsQ0FBRCxJQUFPO0FBQUUsZUFBT2YsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVQsS0FBbUJVLENBQUMsQ0FBQyxXQUFELENBQTNCO0FBQTRDLE9BQWpFLENBRlYsRUFHYUEsQ0FBRCxJQUFLO0FBQUUsZUFBT0EsQ0FBQyxDQUFDLFdBQUQsQ0FBUjtBQUF3QixPQUgzQyxDQUFoQjtBQUtBSixlQUFTLENBQUNLLEtBQVYsR0FDU0MsTUFEVCxDQUNnQixRQURoQixFQUVTQyxJQUZULENBRWMsSUFGZCxFQUVxQkgsQ0FBRCxJQUFRbkIsVUFBVSxDQUFDLENBQUNtQixDQUFDLENBQUNJLFNBQUgsRUFBY0osQ0FBQyxDQUFDSyxRQUFoQixDQUFELENBQVYsQ0FBc0MsQ0FBdEMsQ0FGNUIsRUFHU0YsSUFIVCxDQUdjLElBSGQsRUFHcUJILENBQUQsSUFBUW5CLFVBQVUsQ0FBQyxDQUFDbUIsQ0FBQyxDQUFDSSxTQUFILEVBQWNKLENBQUMsQ0FBQ0ssUUFBaEIsQ0FBRCxDQUFWLENBQXNDLENBQXRDLENBSDVCLEVBSVNGLElBSlQsQ0FJYyxHQUpkLEVBSW1CLEtBSm5CLEVBS1NBLElBTFQsQ0FLYyxPQUxkLEVBS3VCLENBQUNHLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQUUsZUFBUSxVQUFTQSxDQUFFLEVBQW5CO0FBQXVCLE9BTDFELEVBTVNKLElBTlQsQ0FNYyxNQU5kLEVBTXVCSCxDQUFELElBQU07QUFBRSxlQUFPQSxDQUFDLENBQUNRLE1BQUYsS0FBYSxHQUFiLEdBQW1CLE9BQW5CLEdBQTZCLEtBQXBDO0FBQTZDLE9BTjNFO0FBUUFaLGVBQVMsQ0FBQ2EsSUFBVixHQUNTQyxNQURUO0FBRUgsS0FoQkQ7QUFpQkgsR0F4QkQ7QUF5QkgsQ0ExQkQsRSxDQTRCQSIsImZpbGUiOiIuL2xpYi9jaXJjbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZDMuanNvbihcImRhdGEvY2l0eV9kaXN0cmljdHMuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyB9KVxuXG4vLyBjb25zb2xlLmxvZyhcInRlc3RpbmdcIilcblxuLy8gbGV0IHByb2plY3Rpb24gPSBkMy5nZW9FcXVhbEVhcnRoKClcbi8vIGxldCBwYXRoID0gZDMuZ2VvUGF0aChwcm9qZWN0aW9uKTtcblxuLy8gbGV0IHN2ZyA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic3ZnXCIpXG4vLyAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIDUwMClcbi8vICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDUwMCk7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9qZWN0aW9uLCBwYXRoKSA9PiB7XG4gICAgJChcIiN5ZWFyLXNlbGVjdG9yXCIpLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBZZWFyICR7ZS50YXJnZXQudmFsdWV9IHNlbGVjdGVkIWApO1xuXG4gICAgICAgIGxldCBwcm9qZWN0cyA9IGQzLmNzdihcImRhdGEvcGFydGljaXBhdG9yeV9idWRnZXRpbmdfcHJvamVjdHMuY3N2XCIpO1xuXG4gICAgICAgIHByb2plY3RzLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBzZWxlY3Rpb24gPSBkMy5zZWxlY3QoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShkYXRhLmZpbHRlcigoZCkgPT4geyByZXR1cm4oZS50YXJnZXQudmFsdWUgPT09IGRbXCJWb3RlIFllYXJcIl0pOyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZCk9PnsgcmV0dXJuIGRbXCJWb3RlIFllYXJcIl07IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBzZWxlY3Rpb24uZW50ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgKGQpID0+IChwcm9qZWN0aW9uKFtkLkxvbmdpdHVkZSwgZC5MYXRpdHVkZV0pWzBdKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCAoZCkgPT4gKHByb2plY3Rpb24oW2QuTG9uZ2l0dWRlLCBkLkxhdGl0dWRlXSlbMV0pKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgXCIxcHhcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAoXywgaSkgPT4geyByZXR1cm4oYGNpcmNsZS0ke2l9YCkgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKT0+IHsgcmV0dXJuKGQuV2lubmVyID09PSBcIjFcIiA/IFwiZ3JlZW5cIiA6IFwicmVkXCIpOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHNlbGVjdGlvbi5leGl0KClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZSgpXG4gICAgICAgIH0pICBcbiAgICB9KSBcbn1cblxuLy8gLCAoZCwgaSkgPT4gKGRbXCJWb3RlIFllYXJcIl0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/circles.js\n");

/***/ }),

/***/ "./lib/district_info.js":
/*!******************************!*\
  !*** ./lib/district_info.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((data, d) => {\n  console.log(`This is District ${d.id}. Data below has been transmitted.`);\n  console.log(`The Year selected is ${$(\"#year-selector :selected\").val()}.`);\n  console.log(`God Bless America.`);\n  console.log(`${data}`);\n  $(\"#initial-details-container\").remove();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGlzdHJpY3RfaW5mby5qcz9jZjMzIl0sIm5hbWVzIjpbImRhdGEiLCJkIiwiY29uc29sZSIsImxvZyIsImlkIiwiJCIsInZhbCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxnRUFBQ0EsSUFBRCxFQUFPQyxDQUFQLEtBQWE7QUFDeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkYsQ0FBQyxDQUFDRyxFQUFHLG9DQUFyQztBQUNBRixTQUFPLENBQUNDLEdBQVIsQ0FBYSx3QkFBdUJFLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCQyxHQUE5QixFQUFvQyxHQUF4RTtBQUNBSixTQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBYjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBYSxHQUFFSCxJQUFLLEVBQXBCO0FBRUFLLEdBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDRSxNQUFoQztBQUNILENBUEQiLCJmaWxlIjoiLi9saWIvZGlzdHJpY3RfaW5mby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChkYXRhLCBkKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFRoaXMgaXMgRGlzdHJpY3QgJHtkLmlkfS4gRGF0YSBiZWxvdyBoYXMgYmVlbiB0cmFuc21pdHRlZC5gKVxuICAgIGNvbnNvbGUubG9nKGBUaGUgWWVhciBzZWxlY3RlZCBpcyAkeyQoXCIjeWVhci1zZWxlY3RvciA6c2VsZWN0ZWRcIikudmFsKCl9LmApXG4gICAgY29uc29sZS5sb2coYEdvZCBCbGVzcyBBbWVyaWNhLmApXG4gICAgY29uc29sZS5sb2coYCR7ZGF0YX1gKVxuXG4gICAgJChcIiNpbml0aWFsLWRldGFpbHMtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/district_info.js\n");

/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mapgen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapgen */ \"./lib/mapgen.js\");\n/* harmony import */ var _circles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circles */ \"./lib/circles.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let width = 700;\n  let height = 500;\n  let projection = d3.geoEquirectangular().translate([width / 2, height / 2]).scale(69000).center([-73.985974, 40.712776]); // 40.712776, -74.005974\n\n  let path = d3.geoPath().projection(projection);\n  Object(_mapgen__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(width, height, projection, path);\n  Object(_circles__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projection, path);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aWR0aCIsImhlaWdodCIsInByb2plY3Rpb24iLCJkMyIsImdlb0VxdWlyZWN0YW5ndWxhciIsInRyYW5zbGF0ZSIsInNjYWxlIiwiY2VudGVyIiwicGF0aCIsImdlb1BhdGgiLCJtYXBnZW4iLCJjaXJjbGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07QUFFaEQsTUFBSUMsS0FBSyxHQUFHLEdBQVo7QUFDQSxNQUFJQyxNQUFNLEdBQUcsR0FBYjtBQUNBLE1BQUlDLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxrQkFBSCxHQUNJQyxTQURKLENBQ2MsQ0FBQ0wsS0FBSyxHQUFDLENBQVAsRUFBVUMsTUFBTSxHQUFDLENBQWpCLENBRGQsRUFFSUssS0FGSixDQUVVLEtBRlYsRUFHSUMsTUFISixDQUdXLENBQUMsQ0FBQyxTQUFGLEVBQWEsU0FBYixDQUhYLENBQWpCLENBSmdELENBUTVCOztBQUVwQixNQUFJQyxJQUFJLEdBQUdMLEVBQUUsQ0FBQ00sT0FBSCxHQUFhUCxVQUFiLENBQXdCQSxVQUF4QixDQUFYO0FBRUFRLHlEQUFNLENBQUNWLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsVUFBaEIsRUFBMkJNLElBQTNCLENBQU47QUFDQUcsMERBQU8sQ0FBQ1QsVUFBRCxFQUFZTSxJQUFaLENBQVA7QUFDSCxDQWREIiwiZmlsZSI6Ii4vbGliL2VudHJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcGdlbiBmcm9tICcuL21hcGdlbic7XG5pbXBvcnQgY2lyY2xlcyBmcm9tICcuL2NpcmNsZXMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBsZXQgd2lkdGggPSA3MDA7XG4gICAgbGV0IGhlaWdodCA9IDUwMDtcbiAgICBsZXQgcHJvamVjdGlvbiA9IGQzLmdlb0VxdWlyZWN0YW5ndWxhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNsYXRlKFt3aWR0aC8yLCBoZWlnaHQvMl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoNjkwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2VudGVyKFstNzMuOTg1OTc0LCA0MC43MTI3NzZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQwLjcxMjc3NiwgLTc0LjAwNTk3NFxuXG4gICAgbGV0IHBhdGggPSBkMy5nZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuICAgIG1hcGdlbih3aWR0aCwgaGVpZ2h0LCBwcm9qZWN0aW9uLHBhdGgpO1xuICAgIGNpcmNsZXMocHJvamVjdGlvbixwYXRoKTtcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ }),

/***/ "./lib/mapgen.js":
/*!***********************!*\
  !*** ./lib/mapgen.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _district_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./district_info */ \"./lib/district_info.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((width, height, projection, path) => {\n  let svg = d3.select(\"div#map-container\").append(\"svg\").attr(\"preserveAspectRatio\", \"xMinYMin meet\").attr(\"viewBox\", \"0 0 \" + width + \" \" + height).style(\"background\", \"#c9e8fd\").classed(\"svg-content\", true);\n  let cityMap = d3.json(\"data/city_districts.json\");\n  cityMap.then(data => {\n    svg.selectAll(\"path\").data(data.features).enter().append(\"path\").attr(\"class\", d => \"district-\" + d.id).attr(\"d\", path).on(\"mouseenter\", d => {\n      d3.select(`.district-${d.id}`).attr(\"fill\", \"white\");\n    }).on(\"mouseleave\", d => {\n      d3.select(`.district-${d.id}`).attr(\"fill\", \"black\");\n    }).on(\"click\", d => {\n      if ($(\"#year-selector :selected\").val() !== \"Year\") {\n        Object(_district_info__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, d);\n      }\n    });\n  });\n}); // let cityDistricts;\n// $.getJSON(\"lib/pbp.json\", (json) => {\n//     cityDistricts = json;\n// })\n// console.log(cityDistricts[0][Title])\n// let data;\n// d3.json('http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycc/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson', (error,mapData) => {\n//     console.log(mapData[type]);\n// })\n// let features = mapData.features;\n// mapLayer.selectAll('path')\n//     .data(features)\n//     .enter().append('path')\n//     .attr('d', path)\n//   .attr('vector-effect', 'non-scaling-stroke')\n//   .style('fill', fillFn)\n//   .on('mouseover', mouseover)\n//   .on('mouseout', mouseout)\n//   .on('click', clicked);\n// })\n// let width = 1000;\n// let height = 1000;\n// let centered;\n// let projection = d3.geo.mercator()\n//                 .scale(500)\n//                 .center([-74,4.5])\n//                 .translate([width / 2, height / 2])\n// let path = d3.geo.path().\n//             projection(projection)\n// let svg = d3.select('svg').\n//             attr('width', width)\n//             .attr('height', height)\n// var g = svg.append('g');\n// var effectLayer = g.append('g')\n//   .classed('effect-layer', true);\n// var mapLayer = g.append('g')\n//   .classed('map-layer', true);\n// var dummyText = g.append('text')\n//   .classed('dummy-text', true)\n//   .attr('x', 10)\n//   .attr('y', 30)\n//   .style('opacity', 0);\n// var bigText = g.append('text')\n//   .classed('big-text', true)\n//   .attr('x', 20)\n//   .attr('y', 45);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFwZ2VuLmpzPzIwYWQiXSwibmFtZXMiOlsid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0aW9uIiwicGF0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsImNpdHlNYXAiLCJqc29uIiwidGhlbiIsImRhdGEiLCJzZWxlY3RBbGwiLCJmZWF0dXJlcyIsImVudGVyIiwiZCIsImlkIiwib24iLCIkIiwidmFsIiwiZGlzdHJpY3RJbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFZSxnRUFBQ0EsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxVQUFoQixFQUE0QkMsSUFBNUIsS0FBcUM7QUFFaEQsTUFBSUMsR0FBRyxHQUFHQyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxtQkFBVixFQUNHQyxNQURILENBQ1UsS0FEVixFQUVHQyxJQUZILENBRVEscUJBRlIsRUFFK0IsZUFGL0IsRUFHR0EsSUFISCxDQUdRLFNBSFIsRUFHbUIsU0FBU1IsS0FBVCxHQUFpQixHQUFqQixHQUF1QkMsTUFIMUMsRUFHbURRLEtBSG5ELENBR3lELFlBSHpELEVBR3VFLFNBSHZFLEVBSUdDLE9BSkgsQ0FJVyxhQUpYLEVBSTBCLElBSjFCLENBQVY7QUFNQSxNQUFJQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRLDBCQUFSLENBQWQ7QUFFQUQsU0FBTyxDQUFDRSxJQUFSLENBQWNDLElBQUQsSUFBVTtBQUNuQlYsT0FBRyxDQUFDVyxTQUFKLENBQWMsTUFBZCxFQUNLRCxJQURMLENBQ1VBLElBQUksQ0FBQ0UsUUFEZixFQUVLQyxLQUZMLEdBR0tWLE1BSEwsQ0FHWSxNQUhaLEVBSUtDLElBSkwsQ0FJVSxPQUpWLEVBSW9CVSxDQUFELElBQVEsY0FBY0EsQ0FBQyxDQUFDQyxFQUozQyxFQUtLWCxJQUxMLENBS1UsR0FMVixFQUtlTCxJQUxmLEVBTUtpQixFQU5MLENBTVEsWUFOUixFQU11QkYsQ0FBRCxJQUFLO0FBQ0hiLFFBQUUsQ0FBQ0MsTUFBSCxDQUFXLGFBQVlZLENBQUMsQ0FBQ0MsRUFBRyxFQUE1QixFQUErQlgsSUFBL0IsQ0FBb0MsTUFBcEMsRUFBNEMsT0FBNUM7QUFDQyxLQVJ6QixFQVNLWSxFQVRMLENBU1EsWUFUUixFQVN1QkYsQ0FBRCxJQUFLO0FBQ0hiLFFBQUUsQ0FBQ0MsTUFBSCxDQUFXLGFBQVlZLENBQUMsQ0FBQ0MsRUFBRyxFQUE1QixFQUErQlgsSUFBL0IsQ0FBb0MsTUFBcEMsRUFBNEMsT0FBNUM7QUFDSyxLQVg3QixFQVlLWSxFQVpMLENBWVEsT0FaUixFQVlrQkYsQ0FBRCxJQUFPO0FBQ0EsVUFBR0csQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJDLEdBQTlCLE9BQXdDLE1BQTNDLEVBQWtEO0FBQzlDQyxzRUFBWSxDQUFDVCxJQUFELEVBQU9JLENBQVAsQ0FBWjtBQUNDO0FBQ0osS0FoQnpCO0FBaUJILEdBbEJEO0FBbUJILENBN0JELEUsQ0ErQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9saWIvbWFwZ2VuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3RyaWN0SW5mbyBmcm9tICcuL2Rpc3RyaWN0X2luZm8nO1xuXG5leHBvcnQgZGVmYXVsdCAod2lkdGgsIGhlaWdodCwgcHJvamVjdGlvbiwgcGF0aCkgPT4ge1xuXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcImRpdiNtYXAtY29udGFpbmVyXCIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB3aWR0aCArIFwiIFwiICsgaGVpZ2h0ICkuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIFwiI2M5ZThmZFwiKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgICBsZXQgY2l0eU1hcCA9IGQzLmpzb24oXCJkYXRhL2NpdHlfZGlzdHJpY3RzLmpzb25cIik7XG5cbiAgICBjaXR5TWFwLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXRhKGRhdGEuZmVhdHVyZXMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgKGQpID0+IChcImRpc3RyaWN0LVwiICsgZC5pZCkpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aClcbiAgICAgICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgKGQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChgLmRpc3RyaWN0LSR7ZC5pZH1gKS5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIChkKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoYC5kaXN0cmljdC0ke2QuaWR9YCkuYXR0cihcImZpbGxcIiwgXCJibGFja1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQoXCIjeWVhci1zZWxlY3RvciA6c2VsZWN0ZWRcIikudmFsKCkgIT09IFwiWWVhclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RyaWN0SW5mbyhkYXRhLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgICAgICAgXG4gICAgfSk7XG59XG5cbi8vIGxldCBjaXR5RGlzdHJpY3RzO1xuXG4vLyAkLmdldEpTT04oXCJsaWIvcGJwLmpzb25cIiwgKGpzb24pID0+IHtcbi8vICAgICBjaXR5RGlzdHJpY3RzID0ganNvbjtcbi8vIH0pXG5cbi8vIGNvbnNvbGUubG9nKGNpdHlEaXN0cmljdHNbMF1bVGl0bGVdKVxuXG4vLyBsZXQgZGF0YTtcbi8vIGQzLmpzb24oJ2h0dHA6Ly9zZXJ2aWNlczUuYXJjZ2lzLmNvbS9HZndXTmtoT2o5Yk5CcW9KL2FyY2dpcy9yZXN0L3NlcnZpY2VzL255Y2MvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5P3doZXJlPTE9MSZvdXRGaWVsZHM9KiZvdXRTUj00MzI2JmY9Z2VvanNvbicsIChlcnJvcixtYXBEYXRhKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cobWFwRGF0YVt0eXBlXSk7XG4vLyB9KVxuICAgIC8vIGxldCBmZWF0dXJlcyA9IG1hcERhdGEuZmVhdHVyZXM7XG5cbiAgICAvLyBtYXBMYXllci5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgIC8vICAgICAuZGF0YShmZWF0dXJlcylcbiAgICAvLyAgICAgLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAvLyAgICAgLmF0dHIoJ2QnLCBwYXRoKVxuICAgIC8vICAgLmF0dHIoJ3ZlY3Rvci1lZmZlY3QnLCAnbm9uLXNjYWxpbmctc3Ryb2tlJylcbiAgICAvLyAgIC5zdHlsZSgnZmlsbCcsIGZpbGxGbilcbiAgICAvLyAgIC5vbignbW91c2VvdmVyJywgbW91c2VvdmVyKVxuICAgIC8vICAgLm9uKCdtb3VzZW91dCcsIG1vdXNlb3V0KVxuICAgIC8vICAgLm9uKCdjbGljaycsIGNsaWNrZWQpO1xuLy8gfSlcblxuLy8gbGV0IHdpZHRoID0gMTAwMDtcbi8vIGxldCBoZWlnaHQgPSAxMDAwO1xuLy8gbGV0IGNlbnRlcmVkO1xuXG4vLyBsZXQgcHJvamVjdGlvbiA9IGQzLmdlby5tZXJjYXRvcigpXG4vLyAgICAgICAgICAgICAgICAgLnNjYWxlKDUwMClcbi8vICAgICAgICAgICAgICAgICAuY2VudGVyKFstNzQsNC41XSlcbi8vICAgICAgICAgICAgICAgICAudHJhbnNsYXRlKFt3aWR0aCAvIDIsIGhlaWdodCAvIDJdKVxuXG4vLyBsZXQgcGF0aCA9IGQzLmdlby5wYXRoKCkuXG4vLyAgICAgICAgICAgICBwcm9qZWN0aW9uKHByb2plY3Rpb24pXG5cbi8vIGxldCBzdmcgPSBkMy5zZWxlY3QoJ3N2ZycpLlxuLy8gICAgICAgICAgICAgYXR0cignd2lkdGgnLCB3aWR0aClcbi8vICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG5cbi8vIHZhciBnID0gc3ZnLmFwcGVuZCgnZycpO1xuXG4vLyB2YXIgZWZmZWN0TGF5ZXIgPSBnLmFwcGVuZCgnZycpXG4vLyAgIC5jbGFzc2VkKCdlZmZlY3QtbGF5ZXInLCB0cnVlKTtcblxuLy8gdmFyIG1hcExheWVyID0gZy5hcHBlbmQoJ2cnKVxuLy8gICAuY2xhc3NlZCgnbWFwLWxheWVyJywgdHJ1ZSk7XG5cbi8vIHZhciBkdW1teVRleHQgPSBnLmFwcGVuZCgndGV4dCcpXG4vLyAgIC5jbGFzc2VkKCdkdW1teS10ZXh0JywgdHJ1ZSlcbi8vICAgLmF0dHIoJ3gnLCAxMClcbi8vICAgLmF0dHIoJ3knLCAzMClcbi8vICAgLnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cbi8vIHZhciBiaWdUZXh0ID0gZy5hcHBlbmQoJ3RleHQnKVxuLy8gICAuY2xhc3NlZCgnYmlnLXRleHQnLCB0cnVlKVxuLy8gICAuYXR0cigneCcsIDIwKVxuLy8gICAuYXR0cigneScsIDQ1KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/mapgen.js\n");

/***/ })

/******/ });