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
eval("__webpack_require__.r(__webpack_exports__);\n// d3.json(\"data/city_districts.json\").then((data) => {\n//     console.log(data);\n// })\n// console.log(\"testing\")\n// let projection = d3.geoEqualEarth()\n// let path = d3.geoPath(projection);\n// let svg = d3.select(\"body\").append(\"svg\")\n//             .attr(\"width\", 500)\n//             .attr(\"height\", 500);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((projection, path) => {\n  $(\"#year-selector\").on(\"click\", e => {\n    e.preventDefault();\n    console.log(`Year ${e.target.value} selected!`);\n    let projects = d3.csv(\"data/participatory_budgeting_projects.csv\");\n    projects.then(data => {\n      console.log(data);\n    }); // projects.then((data) => {\n    //     d3.select(\"svg\")\n    //       .selectAll(\"circle\")\n    //       .data(data, (d, i) => (d[\"Vote Year\"]))\n    //       .enter()\n    //       .append(\"circle\")\n    //       .attr(\"cx\", (d) =>    \n    // })  \n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2lyY2xlcy5qcz8yYmJiIl0sIm5hbWVzIjpbInByb2plY3Rpb24iLCJwYXRoIiwiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwicHJvamVjdHMiLCJkMyIsImNzdiIsInRoZW4iLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLGdFQUFDQSxVQUFELEVBQWFDLElBQWIsS0FBc0I7QUFDakNDLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxFQUFwQixDQUF1QixPQUF2QixFQUFpQ0MsQ0FBRCxJQUFPO0FBQ25DQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQWEsUUFBT0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQU0sWUFBbkM7QUFFQSxRQUFJQyxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLDJDQUFQLENBQWY7QUFDQUYsWUFBUSxDQUFDRyxJQUFULENBQWVDLElBQUQsSUFBVTtBQUNwQlIsYUFBTyxDQUFDQyxHQUFSLENBQVlPLElBQVo7QUFDSCxLQUZELEVBTG1DLENBU25DO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSCxHQXBCRDtBQXFCSCxDQXRCRCIsImZpbGUiOiIuL2xpYi9jaXJjbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZDMuanNvbihcImRhdGEvY2l0eV9kaXN0cmljdHMuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyB9KVxuXG4vLyBjb25zb2xlLmxvZyhcInRlc3RpbmdcIilcblxuLy8gbGV0IHByb2plY3Rpb24gPSBkMy5nZW9FcXVhbEVhcnRoKClcbi8vIGxldCBwYXRoID0gZDMuZ2VvUGF0aChwcm9qZWN0aW9uKTtcblxuLy8gbGV0IHN2ZyA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic3ZnXCIpXG4vLyAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIDUwMClcbi8vICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDUwMCk7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9qZWN0aW9uLCBwYXRoKSA9PiB7XG4gICAgJChcIiN5ZWFyLXNlbGVjdG9yXCIpLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgWWVhciAke2UudGFyZ2V0LnZhbHVlfSBzZWxlY3RlZCFgKTtcblxuICAgICAgICBsZXQgcHJvamVjdHMgPSBkMy5jc3YoXCJkYXRhL3BhcnRpY2lwYXRvcnlfYnVkZ2V0aW5nX3Byb2plY3RzLmNzdlwiKTtcbiAgICAgICAgcHJvamVjdHMudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHByb2plY3RzLnRoZW4oKGRhdGEpID0+IHtcblxuXG4gICAgICAgIC8vICAgICBkMy5zZWxlY3QoXCJzdmdcIilcbiAgICAgICAgLy8gICAgICAgLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuICAgICAgICAvLyAgICAgICAuZGF0YShkYXRhLCAoZCwgaSkgPT4gKGRbXCJWb3RlIFllYXJcIl0pKVxuICAgICAgICAvLyAgICAgICAuZW50ZXIoKVxuICAgICAgICAvLyAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgIC8vICAgICAgIC5hdHRyKFwiY3hcIiwgKGQpID0+ICAgIFxuXG4gICAgICAgIC8vIH0pICBcbiAgICB9KSBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/circles.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((width, height, projection, path) => {\n  let svg = d3.select(\"div#map-container\").append(\"svg\").attr(\"preserveAspectRatio\", \"xMinYMin meet\").attr(\"viewBox\", \"0 0 \" + width + \" \" + height).style(\"background\", \"#c9e8fd\").classed(\"svg-content\", true); // let projection = d3.geoEquirectangular()\n  //                     .translate([width/2, height/2])\n  //                     .scale(69000)\n  //                     .center([-73.985974, 40.712776]);\n  // // 40.712776, -74.005974\n  // let path = d3.geoPath().projection(projection);\n\n  let cityMap = d3.json(\"data/city_districts.json\");\n  cityMap.then(data => {\n    svg.selectAll(\"path\").data(data.features).enter().append(\"path\").attr(\"class\", d => \"district-\" + d.id).attr(\"d\", path);\n  }); // Promise.all(([cityMap]).then((values) => {\n  //     svg.selectAll(\"path\")\n  //         .data(values[0].features)\n  //         .enter()\n  //         .append(\"path\")\n  //         .attr(\"class\", \"districts\")\n  //         .attr(\"d\", path);\n  // }));\n}); // let cityDistricts;\n// $.getJSON(\"lib/pbp.json\", (json) => {\n//     cityDistricts = json;\n// })\n// console.log(cityDistricts[0][Title])\n// let data;\n// d3.json('http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycc/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson', (error,mapData) => {\n//     console.log(mapData[type]);\n// })\n// let features = mapData.features;\n// mapLayer.selectAll('path')\n//     .data(features)\n//     .enter().append('path')\n//     .attr('d', path)\n//   .attr('vector-effect', 'non-scaling-stroke')\n//   .style('fill', fillFn)\n//   .on('mouseover', mouseover)\n//   .on('mouseout', mouseout)\n//   .on('click', clicked);\n// })\n// let width = 1000;\n// let height = 1000;\n// let centered;\n// let projection = d3.geo.mercator()\n//                 .scale(500)\n//                 .center([-74,4.5])\n//                 .translate([width / 2, height / 2])\n// let path = d3.geo.path().\n//             projection(projection)\n// let svg = d3.select('svg').\n//             attr('width', width)\n//             .attr('height', height)\n// var g = svg.append('g');\n// var effectLayer = g.append('g')\n//   .classed('effect-layer', true);\n// var mapLayer = g.append('g')\n//   .classed('map-layer', true);\n// var dummyText = g.append('text')\n//   .classed('dummy-text', true)\n//   .attr('x', 10)\n//   .attr('y', 30)\n//   .style('opacity', 0);\n// var bigText = g.append('text')\n//   .classed('big-text', true)\n//   .attr('x', 20)\n//   .attr('y', 45);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFwZ2VuLmpzPzIwYWQiXSwibmFtZXMiOlsid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0aW9uIiwicGF0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsImNpdHlNYXAiLCJqc29uIiwidGhlbiIsImRhdGEiLCJzZWxlY3RBbGwiLCJmZWF0dXJlcyIsImVudGVyIiwiZCIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLGdFQUFDQSxLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLFVBQWhCLEVBQTRCQyxJQUE1QixLQUFxQztBQUVoRCxNQUFJQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLG1CQUFWLEVBQ0dDLE1BREgsQ0FDVSxLQURWLEVBRUdDLElBRkgsQ0FFUSxxQkFGUixFQUUrQixlQUYvQixFQUdHQSxJQUhILENBR1EsU0FIUixFQUdtQixTQUFTUixLQUFULEdBQWlCLEdBQWpCLEdBQXVCQyxNQUgxQyxFQUdtRFEsS0FIbkQsQ0FHeUQsWUFIekQsRUFHdUUsU0FIdkUsRUFJR0MsT0FKSCxDQUlXLGFBSlgsRUFJMEIsSUFKMUIsQ0FBVixDQUZnRCxDQVFoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsT0FBTyxHQUFHTixFQUFFLENBQUNPLElBQUgsQ0FBUSwwQkFBUixDQUFkO0FBRUFELFNBQU8sQ0FBQ0UsSUFBUixDQUFjQyxJQUFELElBQVU7QUFDbkJWLE9BQUcsQ0FBQ1csU0FBSixDQUFjLE1BQWQsRUFDS0QsSUFETCxDQUNVQSxJQUFJLENBQUNFLFFBRGYsRUFFS0MsS0FGTCxHQUdLVixNQUhMLENBR1ksTUFIWixFQUlLQyxJQUpMLENBSVUsT0FKVixFQUlvQlUsQ0FBRCxJQUFRLGNBQWNBLENBQUMsQ0FBQ0MsRUFKM0MsRUFLS1gsSUFMTCxDQUtVLEdBTFYsRUFLZUwsSUFMZjtBQU9ILEdBUkQsRUFqQmdELENBMkJoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0gsQ0FwQ0QsRSxDQXNDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNKO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2xpYi9tYXBnZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAod2lkdGgsIGhlaWdodCwgcHJvamVjdGlvbiwgcGF0aCkgPT4ge1xuXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcImRpdiNtYXAtY29udGFpbmVyXCIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB3aWR0aCArIFwiIFwiICsgaGVpZ2h0ICkuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIFwiI2M5ZThmZFwiKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgICAvLyBsZXQgcHJvamVjdGlvbiA9IGQzLmdlb0VxdWlyZWN0YW5ndWxhcigpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAudHJhbnNsYXRlKFt3aWR0aC8yLCBoZWlnaHQvMl0pXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuc2NhbGUoNjkwMDApXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuY2VudGVyKFstNzMuOTg1OTc0LCA0MC43MTI3NzZdKTtcbiAgICAvLyAvLyA0MC43MTI3NzYsIC03NC4wMDU5NzRcbiAgICAvLyBsZXQgcGF0aCA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG4gICAgbGV0IGNpdHlNYXAgPSBkMy5qc29uKFwiZGF0YS9jaXR5X2Rpc3RyaWN0cy5qc29uXCIpO1xuXG4gICAgY2l0eU1hcC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAgICAgICAuZGF0YShkYXRhLmZlYXR1cmVzKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkKSA9PiAoXCJkaXN0cmljdC1cIiArIGQuaWQpKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICBcbiAgICB9KTtcblxuICAgIC8vIFByb21pc2UuYWxsKChbY2l0eU1hcF0pLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgIC8vICAgICBzdmcuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgIC8vICAgICAgICAgLmRhdGEodmFsdWVzWzBdLmZlYXR1cmVzKVxuICAgIC8vICAgICAgICAgLmVudGVyKClcbiAgICAvLyAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLy8gICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZGlzdHJpY3RzXCIpXG4gICAgLy8gICAgICAgICAuYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgIFxuICAgIC8vIH0pKTtcbn1cblxuLy8gbGV0IGNpdHlEaXN0cmljdHM7XG5cbi8vICQuZ2V0SlNPTihcImxpYi9wYnAuanNvblwiLCAoanNvbikgPT4ge1xuLy8gICAgIGNpdHlEaXN0cmljdHMgPSBqc29uO1xuLy8gfSlcblxuLy8gY29uc29sZS5sb2coY2l0eURpc3RyaWN0c1swXVtUaXRsZV0pXG5cbi8vIGxldCBkYXRhO1xuLy8gZDMuanNvbignaHR0cDovL3NlcnZpY2VzNS5hcmNnaXMuY29tL0dmd1dOa2hPajliTkJxb0ovYXJjZ2lzL3Jlc3Qvc2VydmljZXMvbnljYy9GZWF0dXJlU2VydmVyLzAvcXVlcnk/d2hlcmU9MT0xJm91dEZpZWxkcz0qJm91dFNSPTQzMjYmZj1nZW9qc29uJywgKGVycm9yLG1hcERhdGEpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhtYXBEYXRhW3R5cGVdKTtcbi8vIH0pXG4gICAgLy8gbGV0IGZlYXR1cmVzID0gbWFwRGF0YS5mZWF0dXJlcztcblxuICAgIC8vIG1hcExheWVyLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgLy8gICAgIC5kYXRhKGZlYXR1cmVzKVxuICAgIC8vICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgIC8vICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgLy8gICAuYXR0cigndmVjdG9yLWVmZmVjdCcsICdub24tc2NhbGluZy1zdHJva2UnKVxuICAgIC8vICAgLnN0eWxlKCdmaWxsJywgZmlsbEZuKVxuICAgIC8vICAgLm9uKCdtb3VzZW92ZXInLCBtb3VzZW92ZXIpXG4gICAgLy8gICAub24oJ21vdXNlb3V0JywgbW91c2VvdXQpXG4gICAgLy8gICAub24oJ2NsaWNrJywgY2xpY2tlZCk7XG4vLyB9KVxuXG4vLyBsZXQgd2lkdGggPSAxMDAwO1xuLy8gbGV0IGhlaWdodCA9IDEwMDA7XG4vLyBsZXQgY2VudGVyZWQ7XG5cbi8vIGxldCBwcm9qZWN0aW9uID0gZDMuZ2VvLm1lcmNhdG9yKClcbi8vICAgICAgICAgICAgICAgICAuc2NhbGUoNTAwKVxuLy8gICAgICAgICAgICAgICAgIC5jZW50ZXIoWy03NCw0LjVdKVxuLy8gICAgICAgICAgICAgICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMl0pXG5cbi8vIGxldCBwYXRoID0gZDMuZ2VvLnBhdGgoKS5cbi8vICAgICAgICAgICAgIHByb2plY3Rpb24ocHJvamVjdGlvbilcblxuLy8gbGV0IHN2ZyA9IGQzLnNlbGVjdCgnc3ZnJykuXG4vLyAgICAgICAgICAgICBhdHRyKCd3aWR0aCcsIHdpZHRoKVxuLy8gICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcblxuLy8gdmFyIGcgPSBzdmcuYXBwZW5kKCdnJyk7XG5cbi8vIHZhciBlZmZlY3RMYXllciA9IGcuYXBwZW5kKCdnJylcbi8vICAgLmNsYXNzZWQoJ2VmZmVjdC1sYXllcicsIHRydWUpO1xuXG4vLyB2YXIgbWFwTGF5ZXIgPSBnLmFwcGVuZCgnZycpXG4vLyAgIC5jbGFzc2VkKCdtYXAtbGF5ZXInLCB0cnVlKTtcblxuLy8gdmFyIGR1bW15VGV4dCA9IGcuYXBwZW5kKCd0ZXh0Jylcbi8vICAgLmNsYXNzZWQoJ2R1bW15LXRleHQnLCB0cnVlKVxuLy8gICAuYXR0cigneCcsIDEwKVxuLy8gICAuYXR0cigneScsIDMwKVxuLy8gICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcblxuLy8gdmFyIGJpZ1RleHQgPSBnLmFwcGVuZCgndGV4dCcpXG4vLyAgIC5jbGFzc2VkKCdiaWctdGV4dCcsIHRydWUpXG4vLyAgIC5hdHRyKCd4JywgMjApXG4vLyAgIC5hdHRyKCd5JywgNDUpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/mapgen.js\n");

/***/ })

/******/ });