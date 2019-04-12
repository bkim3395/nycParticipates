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
eval("__webpack_require__.r(__webpack_exports__);\n// d3.json(\"data/city_districts.json\").then((data) => {\n//     console.log(data);\n// })\n// console.log(\"testing\")\n// let projection = d3.geoEqualEarth()\n// let path = d3.geoPath(projection);\n// let svg = d3.select(\"body\").append(\"svg\")\n//             .attr(\"width\", 500)\n//             .attr(\"height\", 500);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((projection, path) => {\n  $(\"#year-selector\").on(\"click\", e => {\n    e.preventDefault();\n    console.log(`Year ${e.target.value} selected!`);\n    let projects = d3.csv(\"data/participatory_budgeting_projects.csv\");\n    projects.then(data => {\n      let selection = d3.select(\"svg\").selectAll(\"circle\").data(data.filter(d => {\n        return e.target.value === d[\"Vote Year\"];\n      }), d => {\n        return d[\"Vote Year\"];\n      });\n      selection.enter().append(\"circle\").attr(\"cx\", d => projection([d.Longitude, d.Latitude])[0]).attr(\"cy\", d => projection([d.Longitude, d.Latitude])[1]).attr(\"r\", \"1px\").attr(\"class\", (_, i) => {\n        return `circle-${i}`;\n      }).attr(\"fill\", d => {\n        return d.Winner === \"1\" ? \"green\" : \"red\";\n      });\n      selection.exit().remove();\n    });\n  });\n}); // , (d, i) => (d[\"Vote Year\"])//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2lyY2xlcy5qcz8yYmJiIl0sIm5hbWVzIjpbInByb2plY3Rpb24iLCJwYXRoIiwiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwicHJvamVjdHMiLCJkMyIsImNzdiIsInRoZW4iLCJkYXRhIiwic2VsZWN0aW9uIiwic2VsZWN0Iiwic2VsZWN0QWxsIiwiZmlsdGVyIiwiZCIsImVudGVyIiwiYXBwZW5kIiwiYXR0ciIsIkxvbmdpdHVkZSIsIkxhdGl0dWRlIiwiXyIsImkiLCJXaW5uZXIiLCJleGl0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLGdFQUFDQSxVQUFELEVBQWFDLElBQWIsS0FBc0I7QUFDakNDLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxFQUFwQixDQUF1QixPQUF2QixFQUFpQ0MsQ0FBRCxJQUFPO0FBQ25DQSxLQUFDLENBQUNDLGNBQUY7QUFFQUMsV0FBTyxDQUFDQyxHQUFSLENBQWEsUUFBT0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQU0sWUFBbkM7QUFFQSxRQUFJQyxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLDJDQUFQLENBQWY7QUFFQUYsWUFBUSxDQUFDRyxJQUFULENBQWVDLElBQUQsSUFBVTtBQUNwQixVQUFJQyxTQUFTLEdBQUdKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVLEtBQVYsRUFDS0MsU0FETCxDQUNlLFFBRGYsRUFFS0gsSUFGTCxDQUVVQSxJQUFJLENBQUNJLE1BQUwsQ0FBYUMsQ0FBRCxJQUFPO0FBQUUsZUFBT2YsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVQsS0FBbUJVLENBQUMsQ0FBQyxXQUFELENBQTNCO0FBQTRDLE9BQWpFLENBRlYsRUFHYUEsQ0FBRCxJQUFLO0FBQUUsZUFBT0EsQ0FBQyxDQUFDLFdBQUQsQ0FBUjtBQUF3QixPQUgzQyxDQUFoQjtBQUlBSixlQUFTLENBQUNLLEtBQVYsR0FDU0MsTUFEVCxDQUNnQixRQURoQixFQUVTQyxJQUZULENBRWMsSUFGZCxFQUVxQkgsQ0FBRCxJQUFRbkIsVUFBVSxDQUFDLENBQUNtQixDQUFDLENBQUNJLFNBQUgsRUFBY0osQ0FBQyxDQUFDSyxRQUFoQixDQUFELENBQVYsQ0FBc0MsQ0FBdEMsQ0FGNUIsRUFHU0YsSUFIVCxDQUdjLElBSGQsRUFHcUJILENBQUQsSUFBUW5CLFVBQVUsQ0FBQyxDQUFDbUIsQ0FBQyxDQUFDSSxTQUFILEVBQWNKLENBQUMsQ0FBQ0ssUUFBaEIsQ0FBRCxDQUFWLENBQXNDLENBQXRDLENBSDVCLEVBSVNGLElBSlQsQ0FJYyxHQUpkLEVBSW1CLEtBSm5CLEVBS1NBLElBTFQsQ0FLYyxPQUxkLEVBS3VCLENBQUNHLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQUUsZUFBUSxVQUFTQSxDQUFFLEVBQW5CO0FBQXVCLE9BTDFELEVBTVNKLElBTlQsQ0FNYyxNQU5kLEVBTXVCSCxDQUFELElBQU07QUFBRSxlQUFPQSxDQUFDLENBQUNRLE1BQUYsS0FBYSxHQUFiLEdBQW1CLE9BQW5CLEdBQTZCLEtBQXBDO0FBQTZDLE9BTjNFO0FBUUFaLGVBQVMsQ0FBQ2EsSUFBVixHQUNTQyxNQURUO0FBRUgsS0FmRDtBQWdCSCxHQXZCRDtBQXdCSCxDQXpCRCxFLENBMkJBIiwiZmlsZSI6Ii4vbGliL2NpcmNsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkMy5qc29uKFwiZGF0YS9jaXR5X2Rpc3RyaWN0cy5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vIH0pXG5cbi8vIGNvbnNvbGUubG9nKFwidGVzdGluZ1wiKVxuXG4vLyBsZXQgcHJvamVjdGlvbiA9IGQzLmdlb0VxdWFsRWFydGgoKVxuLy8gbGV0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24pO1xuXG4vLyBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbi8vICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgNTAwKVxuLy8gICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgNTAwKTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb2plY3Rpb24sIHBhdGgpID0+IHtcbiAgICAkKFwiI3llYXItc2VsZWN0b3JcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYFllYXIgJHtlLnRhcmdldC52YWx1ZX0gc2VsZWN0ZWQhYCk7XG5cbiAgICAgICAgbGV0IHByb2plY3RzID0gZDMuY3N2KFwiZGF0YS9wYXJ0aWNpcGF0b3J5X2J1ZGdldGluZ19wcm9qZWN0cy5jc3ZcIik7XG5cbiAgICAgICAgcHJvamVjdHMudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGlvbiA9IGQzLnNlbGVjdChcInN2Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEuZmlsdGVyKChkKSA9PiB7IHJldHVybihlLnRhcmdldC52YWx1ZSA9PT0gZFtcIlZvdGUgWWVhclwiXSk7IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkKT0+eyByZXR1cm4gZFtcIlZvdGUgWWVhclwiXTsgfSlcbiAgICAgICAgICAgIHNlbGVjdGlvbi5lbnRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCAoZCkgPT4gKHByb2plY3Rpb24oW2QuTG9uZ2l0dWRlLCBkLkxhdGl0dWRlXSlbMF0pKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImN5XCIsIChkKSA9PiAocHJvamVjdGlvbihbZC5Mb25naXR1ZGUsIGQuTGF0aXR1ZGVdKVsxXSkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCBcIjFweFwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChfLCBpKSA9PiB7IHJldHVybihgY2lyY2xlLSR7aX1gKSB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgKGQpPT4geyByZXR1cm4oZC5XaW5uZXIgPT09IFwiMVwiID8gXCJncmVlblwiIDogXCJyZWRcIik7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VsZWN0aW9uLmV4aXQoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKClcbiAgICAgICAgfSkgIFxuICAgIH0pIFxufVxuXG4vLyAsIChkLCBpKSA9PiAoZFtcIlZvdGUgWWVhclwiXSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/circles.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((width, height, projection, path) => {\n  let svg = d3.select(\"div#map-container\").append(\"svg\").attr(\"preserveAspectRatio\", \"xMinYMin meet\").attr(\"viewBox\", \"0 0 \" + width + \" \" + height).style(\"background\", \"#c9e8fd\").classed(\"svg-content\", true);\n  let cityMap = d3.json(\"data/city_districts.json\");\n  cityMap.then(data => {\n    svg.selectAll(\"path\").data(data.features).enter().append(\"path\").attr(\"class\", d => \"district-\" + d.id).attr(\"d\", path);\n  });\n}); // let cityDistricts;\n// $.getJSON(\"lib/pbp.json\", (json) => {\n//     cityDistricts = json;\n// })\n// console.log(cityDistricts[0][Title])\n// let data;\n// d3.json('http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycc/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson', (error,mapData) => {\n//     console.log(mapData[type]);\n// })\n// let features = mapData.features;\n// mapLayer.selectAll('path')\n//     .data(features)\n//     .enter().append('path')\n//     .attr('d', path)\n//   .attr('vector-effect', 'non-scaling-stroke')\n//   .style('fill', fillFn)\n//   .on('mouseover', mouseover)\n//   .on('mouseout', mouseout)\n//   .on('click', clicked);\n// })\n// let width = 1000;\n// let height = 1000;\n// let centered;\n// let projection = d3.geo.mercator()\n//                 .scale(500)\n//                 .center([-74,4.5])\n//                 .translate([width / 2, height / 2])\n// let path = d3.geo.path().\n//             projection(projection)\n// let svg = d3.select('svg').\n//             attr('width', width)\n//             .attr('height', height)\n// var g = svg.append('g');\n// var effectLayer = g.append('g')\n//   .classed('effect-layer', true);\n// var mapLayer = g.append('g')\n//   .classed('map-layer', true);\n// var dummyText = g.append('text')\n//   .classed('dummy-text', true)\n//   .attr('x', 10)\n//   .attr('y', 30)\n//   .style('opacity', 0);\n// var bigText = g.append('text')\n//   .classed('big-text', true)\n//   .attr('x', 20)\n//   .attr('y', 45);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFwZ2VuLmpzPzIwYWQiXSwibmFtZXMiOlsid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0aW9uIiwicGF0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsImNpdHlNYXAiLCJqc29uIiwidGhlbiIsImRhdGEiLCJzZWxlY3RBbGwiLCJmZWF0dXJlcyIsImVudGVyIiwiZCIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLGdFQUFDQSxLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLFVBQWhCLEVBQTRCQyxJQUE1QixLQUFxQztBQUVoRCxNQUFJQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLG1CQUFWLEVBQ0dDLE1BREgsQ0FDVSxLQURWLEVBRUdDLElBRkgsQ0FFUSxxQkFGUixFQUUrQixlQUYvQixFQUdHQSxJQUhILENBR1EsU0FIUixFQUdtQixTQUFTUixLQUFULEdBQWlCLEdBQWpCLEdBQXVCQyxNQUgxQyxFQUdtRFEsS0FIbkQsQ0FHeUQsWUFIekQsRUFHdUUsU0FIdkUsRUFJR0MsT0FKSCxDQUlXLGFBSlgsRUFJMEIsSUFKMUIsQ0FBVjtBQU1BLE1BQUlDLE9BQU8sR0FBR04sRUFBRSxDQUFDTyxJQUFILENBQVEsMEJBQVIsQ0FBZDtBQUVBRCxTQUFPLENBQUNFLElBQVIsQ0FBY0MsSUFBRCxJQUFVO0FBQ25CVixPQUFHLENBQUNXLFNBQUosQ0FBYyxNQUFkLEVBQ0tELElBREwsQ0FDVUEsSUFBSSxDQUFDRSxRQURmLEVBRUtDLEtBRkwsR0FHS1YsTUFITCxDQUdZLE1BSFosRUFJS0MsSUFKTCxDQUlVLE9BSlYsRUFJb0JVLENBQUQsSUFBUSxjQUFjQSxDQUFDLENBQUNDLEVBSjNDLEVBS0tYLElBTEwsQ0FLVSxHQUxWLEVBS2VMLElBTGY7QUFPSCxHQVJEO0FBU0gsQ0FuQkQsRSxDQXFCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNKO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2xpYi9tYXBnZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAod2lkdGgsIGhlaWdodCwgcHJvamVjdGlvbiwgcGF0aCkgPT4ge1xuXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcImRpdiNtYXAtY29udGFpbmVyXCIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB3aWR0aCArIFwiIFwiICsgaGVpZ2h0ICkuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIFwiI2M5ZThmZFwiKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgICBsZXQgY2l0eU1hcCA9IGQzLmpzb24oXCJkYXRhL2NpdHlfZGlzdHJpY3RzLmpzb25cIik7XG5cbiAgICBjaXR5TWFwLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXRhKGRhdGEuZmVhdHVyZXMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgKGQpID0+IChcImRpc3RyaWN0LVwiICsgZC5pZCkpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgIFxuICAgIH0pO1xufVxuXG4vLyBsZXQgY2l0eURpc3RyaWN0cztcblxuLy8gJC5nZXRKU09OKFwibGliL3BicC5qc29uXCIsIChqc29uKSA9PiB7XG4vLyAgICAgY2l0eURpc3RyaWN0cyA9IGpzb247XG4vLyB9KVxuXG4vLyBjb25zb2xlLmxvZyhjaXR5RGlzdHJpY3RzWzBdW1RpdGxlXSlcblxuLy8gbGV0IGRhdGE7XG4vLyBkMy5qc29uKCdodHRwOi8vc2VydmljZXM1LmFyY2dpcy5jb20vR2Z3V05raE9qOWJOQnFvSi9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9ueWNjL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeT93aGVyZT0xPTEmb3V0RmllbGRzPSomb3V0U1I9NDMyNiZmPWdlb2pzb24nLCAoZXJyb3IsbWFwRGF0YSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKG1hcERhdGFbdHlwZV0pO1xuLy8gfSlcbiAgICAvLyBsZXQgZmVhdHVyZXMgPSBtYXBEYXRhLmZlYXR1cmVzO1xuXG4gICAgLy8gbWFwTGF5ZXIuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAvLyAgICAgLmRhdGEoZmVhdHVyZXMpXG4gICAgLy8gICAgIC5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgLy8gICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAvLyAgIC5hdHRyKCd2ZWN0b3ItZWZmZWN0JywgJ25vbi1zY2FsaW5nLXN0cm9rZScpXG4gICAgLy8gICAuc3R5bGUoJ2ZpbGwnLCBmaWxsRm4pXG4gICAgLy8gICAub24oJ21vdXNlb3ZlcicsIG1vdXNlb3ZlcilcbiAgICAvLyAgIC5vbignbW91c2VvdXQnLCBtb3VzZW91dClcbiAgICAvLyAgIC5vbignY2xpY2snLCBjbGlja2VkKTtcbi8vIH0pXG5cbi8vIGxldCB3aWR0aCA9IDEwMDA7XG4vLyBsZXQgaGVpZ2h0ID0gMTAwMDtcbi8vIGxldCBjZW50ZXJlZDtcblxuLy8gbGV0IHByb2plY3Rpb24gPSBkMy5nZW8ubWVyY2F0b3IoKVxuLy8gICAgICAgICAgICAgICAgIC5zY2FsZSg1MDApXG4vLyAgICAgICAgICAgICAgICAgLmNlbnRlcihbLTc0LDQuNV0pXG4vLyAgICAgICAgICAgICAgICAgLnRyYW5zbGF0ZShbd2lkdGggLyAyLCBoZWlnaHQgLyAyXSlcblxuLy8gbGV0IHBhdGggPSBkMy5nZW8ucGF0aCgpLlxuLy8gICAgICAgICAgICAgcHJvamVjdGlvbihwcm9qZWN0aW9uKVxuXG4vLyBsZXQgc3ZnID0gZDMuc2VsZWN0KCdzdmcnKS5cbi8vICAgICAgICAgICAgIGF0dHIoJ3dpZHRoJywgd2lkdGgpXG4vLyAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuXG4vLyB2YXIgZyA9IHN2Zy5hcHBlbmQoJ2cnKTtcblxuLy8gdmFyIGVmZmVjdExheWVyID0gZy5hcHBlbmQoJ2cnKVxuLy8gICAuY2xhc3NlZCgnZWZmZWN0LWxheWVyJywgdHJ1ZSk7XG5cbi8vIHZhciBtYXBMYXllciA9IGcuYXBwZW5kKCdnJylcbi8vICAgLmNsYXNzZWQoJ21hcC1sYXllcicsIHRydWUpO1xuXG4vLyB2YXIgZHVtbXlUZXh0ID0gZy5hcHBlbmQoJ3RleHQnKVxuLy8gICAuY2xhc3NlZCgnZHVtbXktdGV4dCcsIHRydWUpXG4vLyAgIC5hdHRyKCd4JywgMTApXG4vLyAgIC5hdHRyKCd5JywgMzApXG4vLyAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xuXG4vLyB2YXIgYmlnVGV4dCA9IGcuYXBwZW5kKCd0ZXh0Jylcbi8vICAgLmNsYXNzZWQoJ2JpZy10ZXh0JywgdHJ1ZSlcbi8vICAgLmF0dHIoJ3gnLCAyMClcbi8vICAgLmF0dHIoJ3knLCA0NSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/mapgen.js\n");

/***/ })

/******/ });