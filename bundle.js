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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((width, height, projection, path) => {\n  let svg = d3.select(\"div#map-container\").append(\"svg\").attr(\"preserveAspectRatio\", \"xMinYMin meet\").attr(\"viewBox\", \"0 0 \" + width + \" \" + height).style(\"background\", \"#c9e8fd\").classed(\"svg-content\", true);\n  let cityMap = d3.json(\"data/city_districts.json\");\n  cityMap.then(data => {\n    svg.selectAll(\"path\").data(data.features).enter().append(\"path\").attr(\"class\", d => \"district-\" + d.id).attr(\"d\", path).on(\"mouseenter\", d => {\n      d3.select(`.district-${d.id}`).attr(\"fill\", \"white\");\n    }).on(\"mouseleave\", d => {\n      d3.select(`.district-${d.id}`).attr(\"fill\", \"black\");\n    }).on(\"click\", d => {\n      if ($(\"#year-selector :selected\").val() !== \"Year\") {\n        console.log(`This is District ${d.id}. Data below has been transmitted.`);\n        console.log(`The Year selected is ${$(\"#year-selector :selected\").val()}.`);\n        console.log(`${data}`);\n      }\n    });\n  });\n}); // let cityDistricts;\n// $.getJSON(\"lib/pbp.json\", (json) => {\n//     cityDistricts = json;\n// })\n// console.log(cityDistricts[0][Title])\n// let data;\n// d3.json('http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycc/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson', (error,mapData) => {\n//     console.log(mapData[type]);\n// })\n// let features = mapData.features;\n// mapLayer.selectAll('path')\n//     .data(features)\n//     .enter().append('path')\n//     .attr('d', path)\n//   .attr('vector-effect', 'non-scaling-stroke')\n//   .style('fill', fillFn)\n//   .on('mouseover', mouseover)\n//   .on('mouseout', mouseout)\n//   .on('click', clicked);\n// })\n// let width = 1000;\n// let height = 1000;\n// let centered;\n// let projection = d3.geo.mercator()\n//                 .scale(500)\n//                 .center([-74,4.5])\n//                 .translate([width / 2, height / 2])\n// let path = d3.geo.path().\n//             projection(projection)\n// let svg = d3.select('svg').\n//             attr('width', width)\n//             .attr('height', height)\n// var g = svg.append('g');\n// var effectLayer = g.append('g')\n//   .classed('effect-layer', true);\n// var mapLayer = g.append('g')\n//   .classed('map-layer', true);\n// var dummyText = g.append('text')\n//   .classed('dummy-text', true)\n//   .attr('x', 10)\n//   .attr('y', 30)\n//   .style('opacity', 0);\n// var bigText = g.append('text')\n//   .classed('big-text', true)\n//   .attr('x', 20)\n//   .attr('y', 45);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFwZ2VuLmpzPzIwYWQiXSwibmFtZXMiOlsid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0aW9uIiwicGF0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsImNpdHlNYXAiLCJqc29uIiwidGhlbiIsImRhdGEiLCJzZWxlY3RBbGwiLCJmZWF0dXJlcyIsImVudGVyIiwiZCIsImlkIiwib24iLCIkIiwidmFsIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxnRUFBQ0EsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxVQUFoQixFQUE0QkMsSUFBNUIsS0FBcUM7QUFFaEQsTUFBSUMsR0FBRyxHQUFHQyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxtQkFBVixFQUNHQyxNQURILENBQ1UsS0FEVixFQUVHQyxJQUZILENBRVEscUJBRlIsRUFFK0IsZUFGL0IsRUFHR0EsSUFISCxDQUdRLFNBSFIsRUFHbUIsU0FBU1IsS0FBVCxHQUFpQixHQUFqQixHQUF1QkMsTUFIMUMsRUFHbURRLEtBSG5ELENBR3lELFlBSHpELEVBR3VFLFNBSHZFLEVBSUdDLE9BSkgsQ0FJVyxhQUpYLEVBSTBCLElBSjFCLENBQVY7QUFNQSxNQUFJQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRLDBCQUFSLENBQWQ7QUFFQUQsU0FBTyxDQUFDRSxJQUFSLENBQWNDLElBQUQsSUFBVTtBQUNuQlYsT0FBRyxDQUFDVyxTQUFKLENBQWMsTUFBZCxFQUNLRCxJQURMLENBQ1VBLElBQUksQ0FBQ0UsUUFEZixFQUVLQyxLQUZMLEdBR0tWLE1BSEwsQ0FHWSxNQUhaLEVBSUtDLElBSkwsQ0FJVSxPQUpWLEVBSW9CVSxDQUFELElBQVEsY0FBY0EsQ0FBQyxDQUFDQyxFQUozQyxFQUtLWCxJQUxMLENBS1UsR0FMVixFQUtlTCxJQUxmLEVBTUtpQixFQU5MLENBTVEsWUFOUixFQU11QkYsQ0FBRCxJQUFLO0FBQ0hiLFFBQUUsQ0FBQ0MsTUFBSCxDQUFXLGFBQVlZLENBQUMsQ0FBQ0MsRUFBRyxFQUE1QixFQUErQlgsSUFBL0IsQ0FBb0MsTUFBcEMsRUFBNEMsT0FBNUM7QUFDQyxLQVJ6QixFQVNLWSxFQVRMLENBU1EsWUFUUixFQVN1QkYsQ0FBRCxJQUFLO0FBQ0hiLFFBQUUsQ0FBQ0MsTUFBSCxDQUFXLGFBQVlZLENBQUMsQ0FBQ0MsRUFBRyxFQUE1QixFQUErQlgsSUFBL0IsQ0FBb0MsTUFBcEMsRUFBNEMsT0FBNUM7QUFDSyxLQVg3QixFQVlLWSxFQVpMLENBWVEsT0FaUixFQVlrQkYsQ0FBRCxJQUFPO0FBQ0EsVUFBR0csQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJDLEdBQTlCLE9BQXdDLE1BQTNDLEVBQWtEO0FBQzlDQyxlQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJOLENBQUMsQ0FBQ0MsRUFBRyxvQ0FBckM7QUFDQUksZUFBTyxDQUFDQyxHQUFSLENBQWEsd0JBQXVCSCxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkMsR0FBOUIsRUFBb0MsR0FBeEU7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQWEsR0FBRVYsSUFBSyxFQUFwQjtBQUNDO0FBQ0osS0FsQnpCO0FBbUJILEdBcEJEO0FBcUJILENBL0JELEUsQ0FpQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9saWIvbWFwZ2VuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHdpZHRoLCBoZWlnaHQsIHByb2plY3Rpb24sIHBhdGgpID0+IHtcblxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCJkaXYjbWFwLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgd2lkdGggKyBcIiBcIiArIGhlaWdodCApLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBcIiNjOWU4ZmRcIilcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250ZW50XCIsIHRydWUpO1xuXG4gICAgbGV0IGNpdHlNYXAgPSBkMy5qc29uKFwiZGF0YS9jaXR5X2Rpc3RyaWN0cy5qc29uXCIpO1xuXG4gICAgY2l0eU1hcC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAgICAgICAuZGF0YShkYXRhLmZlYXR1cmVzKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkKSA9PiAoXCJkaXN0cmljdC1cIiArIGQuaWQpKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGgpXG4gICAgICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsIChkKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoYC5kaXN0cmljdC0ke2QuaWR9YCkuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoZCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KGAuZGlzdHJpY3QtJHtkLmlkfWApLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigkKFwiI3llYXItc2VsZWN0b3IgOnNlbGVjdGVkXCIpLnZhbCgpICE9PSBcIlllYXJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyBEaXN0cmljdCAke2QuaWR9LiBEYXRhIGJlbG93IGhhcyBiZWVuIHRyYW5zbWl0dGVkLmApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIFllYXIgc2VsZWN0ZWQgaXMgJHskKFwiI3llYXItc2VsZWN0b3IgOnNlbGVjdGVkXCIpLnZhbCgpfS5gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7ZGF0YX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICBcbiAgICB9KTtcbn1cblxuLy8gbGV0IGNpdHlEaXN0cmljdHM7XG5cbi8vICQuZ2V0SlNPTihcImxpYi9wYnAuanNvblwiLCAoanNvbikgPT4ge1xuLy8gICAgIGNpdHlEaXN0cmljdHMgPSBqc29uO1xuLy8gfSlcblxuLy8gY29uc29sZS5sb2coY2l0eURpc3RyaWN0c1swXVtUaXRsZV0pXG5cbi8vIGxldCBkYXRhO1xuLy8gZDMuanNvbignaHR0cDovL3NlcnZpY2VzNS5hcmNnaXMuY29tL0dmd1dOa2hPajliTkJxb0ovYXJjZ2lzL3Jlc3Qvc2VydmljZXMvbnljYy9GZWF0dXJlU2VydmVyLzAvcXVlcnk/d2hlcmU9MT0xJm91dEZpZWxkcz0qJm91dFNSPTQzMjYmZj1nZW9qc29uJywgKGVycm9yLG1hcERhdGEpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhtYXBEYXRhW3R5cGVdKTtcbi8vIH0pXG4gICAgLy8gbGV0IGZlYXR1cmVzID0gbWFwRGF0YS5mZWF0dXJlcztcblxuICAgIC8vIG1hcExheWVyLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgLy8gICAgIC5kYXRhKGZlYXR1cmVzKVxuICAgIC8vICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgIC8vICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgLy8gICAuYXR0cigndmVjdG9yLWVmZmVjdCcsICdub24tc2NhbGluZy1zdHJva2UnKVxuICAgIC8vICAgLnN0eWxlKCdmaWxsJywgZmlsbEZuKVxuICAgIC8vICAgLm9uKCdtb3VzZW92ZXInLCBtb3VzZW92ZXIpXG4gICAgLy8gICAub24oJ21vdXNlb3V0JywgbW91c2VvdXQpXG4gICAgLy8gICAub24oJ2NsaWNrJywgY2xpY2tlZCk7XG4vLyB9KVxuXG4vLyBsZXQgd2lkdGggPSAxMDAwO1xuLy8gbGV0IGhlaWdodCA9IDEwMDA7XG4vLyBsZXQgY2VudGVyZWQ7XG5cbi8vIGxldCBwcm9qZWN0aW9uID0gZDMuZ2VvLm1lcmNhdG9yKClcbi8vICAgICAgICAgICAgICAgICAuc2NhbGUoNTAwKVxuLy8gICAgICAgICAgICAgICAgIC5jZW50ZXIoWy03NCw0LjVdKVxuLy8gICAgICAgICAgICAgICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMl0pXG5cbi8vIGxldCBwYXRoID0gZDMuZ2VvLnBhdGgoKS5cbi8vICAgICAgICAgICAgIHByb2plY3Rpb24ocHJvamVjdGlvbilcblxuLy8gbGV0IHN2ZyA9IGQzLnNlbGVjdCgnc3ZnJykuXG4vLyAgICAgICAgICAgICBhdHRyKCd3aWR0aCcsIHdpZHRoKVxuLy8gICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcblxuLy8gdmFyIGcgPSBzdmcuYXBwZW5kKCdnJyk7XG5cbi8vIHZhciBlZmZlY3RMYXllciA9IGcuYXBwZW5kKCdnJylcbi8vICAgLmNsYXNzZWQoJ2VmZmVjdC1sYXllcicsIHRydWUpO1xuXG4vLyB2YXIgbWFwTGF5ZXIgPSBnLmFwcGVuZCgnZycpXG4vLyAgIC5jbGFzc2VkKCdtYXAtbGF5ZXInLCB0cnVlKTtcblxuLy8gdmFyIGR1bW15VGV4dCA9IGcuYXBwZW5kKCd0ZXh0Jylcbi8vICAgLmNsYXNzZWQoJ2R1bW15LXRleHQnLCB0cnVlKVxuLy8gICAuYXR0cigneCcsIDEwKVxuLy8gICAuYXR0cigneScsIDMwKVxuLy8gICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcblxuLy8gdmFyIGJpZ1RleHQgPSBnLmFwcGVuZCgndGV4dCcpXG4vLyAgIC5jbGFzc2VkKCdiaWctdGV4dCcsIHRydWUpXG4vLyAgIC5hdHRyKCd4JywgMjApXG4vLyAgIC5hdHRyKCd5JywgNDUpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/mapgen.js\n");

/***/ })

/******/ });