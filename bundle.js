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

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mapgen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapgen */ \"./lib/mapgen.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  Object(_mapgen__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXBnZW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0FBQ2hEQyx5REFBTTtBQUVULENBSEQiLCJmaWxlIjoiLi9saWIvZW50cnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFwZ2VuIGZyb20gJy4vbWFwZ2VuJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIG1hcGdlbigpO1xuICAgIFxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ }),

/***/ "./lib/mapgen.js":
/*!***********************!*\
  !*** ./lib/mapgen.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  let width = 700;\n  let height = 500;\n  let svg = d3.select(\"div#map-container\").append(\"svg\").attr(\"preserveAspectRatio\", \"xMinYMin meet\").attr(\"viewBox\", \"0 0 \" + width + \" \" + height).style(\"background\", \"#c9e8fd\").classed(\"svg-content\", true);\n  let projection = d3.geoEquirectangular().translate([width / 2, height / 2]).scale(69000).center([-73.985974, 40.712776]); // 40.712776, -74.005974\n\n  let path = d3.geoPath().projection(projection);\n  let cityMap = d3.json(\"data/city_districts.json\");\n  cityMap.then(data => {\n    svg.selectAll(\"path\").data(data.features).enter().append(\"path\").attr(\"class\", d => \"district-\" + d.id).attr(\"d\", path);\n  }); // Promise.all(([cityMap]).then((values) => {\n  //     svg.selectAll(\"path\")\n  //         .data(values[0].features)\n  //         .enter()\n  //         .append(\"path\")\n  //         .attr(\"class\", \"districts\")\n  //         .attr(\"d\", path);\n  // }));\n}); // let cityDistricts;\n// $.getJSON(\"lib/pbp.json\", (json) => {\n//     cityDistricts = json;\n// })\n// console.log(cityDistricts[0][Title])\n// let data;\n// d3.json('http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycc/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson', (error,mapData) => {\n//     console.log(mapData[type]);\n// })\n// let features = mapData.features;\n// mapLayer.selectAll('path')\n//     .data(features)\n//     .enter().append('path')\n//     .attr('d', path)\n//   .attr('vector-effect', 'non-scaling-stroke')\n//   .style('fill', fillFn)\n//   .on('mouseover', mouseover)\n//   .on('mouseout', mouseout)\n//   .on('click', clicked);\n// })\n// let width = 1000;\n// let height = 1000;\n// let centered;\n// let projection = d3.geo.mercator()\n//                 .scale(500)\n//                 .center([-74,4.5])\n//                 .translate([width / 2, height / 2])\n// let path = d3.geo.path().\n//             projection(projection)\n// let svg = d3.select('svg').\n//             attr('width', width)\n//             .attr('height', height)\n// var g = svg.append('g');\n// var effectLayer = g.append('g')\n//   .classed('effect-layer', true);\n// var mapLayer = g.append('g')\n//   .classed('map-layer', true);\n// var dummyText = g.append('text')\n//   .classed('dummy-text', true)\n//   .attr('x', 10)\n//   .attr('y', 30)\n//   .style('opacity', 0);\n// var bigText = g.append('text')\n//   .classed('big-text', true)\n//   .attr('x', 20)\n//   .attr('y', 45);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFwZ2VuLmpzPzIwYWQiXSwibmFtZXMiOlsid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzdHlsZSIsImNsYXNzZWQiLCJwcm9qZWN0aW9uIiwiZ2VvRXF1aXJlY3Rhbmd1bGFyIiwidHJhbnNsYXRlIiwic2NhbGUiLCJjZW50ZXIiLCJwYXRoIiwiZ2VvUGF0aCIsImNpdHlNYXAiLCJqc29uIiwidGhlbiIsImRhdGEiLCJzZWxlY3RBbGwiLCJmZWF0dXJlcyIsImVudGVyIiwiZCIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLHFFQUFNO0FBRWpCLE1BQUlBLEtBQUssR0FBRyxHQUFaO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEdBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLG1CQUFWLEVBQ0dDLE1BREgsQ0FDVSxLQURWLEVBRUdDLElBRkgsQ0FFUSxxQkFGUixFQUUrQixlQUYvQixFQUdHQSxJQUhILENBR1EsU0FIUixFQUdtQixTQUFTTixLQUFULEdBQWlCLEdBQWpCLEdBQXVCQyxNQUgxQyxFQUdtRE0sS0FIbkQsQ0FHeUQsWUFIekQsRUFHdUUsU0FIdkUsRUFJR0MsT0FKSCxDQUlXLGFBSlgsRUFJMEIsSUFKMUIsQ0FBVjtBQU1BLE1BQUlDLFVBQVUsR0FBR04sRUFBRSxDQUFDTyxrQkFBSCxHQUNJQyxTQURKLENBQ2MsQ0FBQ1gsS0FBSyxHQUFDLENBQVAsRUFBVUMsTUFBTSxHQUFDLENBQWpCLENBRGQsRUFFSVcsS0FGSixDQUVVLEtBRlYsRUFHSUMsTUFISixDQUdXLENBQUMsQ0FBQyxTQUFGLEVBQWEsU0FBYixDQUhYLENBQWpCLENBVmlCLENBY2pCOztBQUNBLE1BQUlDLElBQUksR0FBR1gsRUFBRSxDQUFDWSxPQUFILEdBQWFOLFVBQWIsQ0FBd0JBLFVBQXhCLENBQVg7QUFFQSxNQUFJTyxPQUFPLEdBQUdiLEVBQUUsQ0FBQ2MsSUFBSCxDQUFRLDBCQUFSLENBQWQ7QUFFQUQsU0FBTyxDQUFDRSxJQUFSLENBQWNDLElBQUQsSUFBVTtBQUNuQmpCLE9BQUcsQ0FBQ2tCLFNBQUosQ0FBYyxNQUFkLEVBQ0tELElBREwsQ0FDVUEsSUFBSSxDQUFDRSxRQURmLEVBRUtDLEtBRkwsR0FHS2pCLE1BSEwsQ0FHWSxNQUhaLEVBSUtDLElBSkwsQ0FJVSxPQUpWLEVBSW9CaUIsQ0FBRCxJQUFRLGNBQWNBLENBQUMsQ0FBQ0MsRUFKM0MsRUFLS2xCLElBTEwsQ0FLVSxHQUxWLEVBS2VRLElBTGY7QUFPSCxHQVJELEVBbkJpQixDQTZCakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNILENBdENELEUsQ0F3Q0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9saWIvbWFwZ2VuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gICAgbGV0IHdpZHRoID0gNzAwO1xuICAgIGxldCBoZWlnaHQgPSA1MDA7XG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcImRpdiNtYXAtY29udGFpbmVyXCIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB3aWR0aCArIFwiIFwiICsgaGVpZ2h0ICkuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIFwiI2M5ZThmZFwiKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgICBsZXQgcHJvamVjdGlvbiA9IGQzLmdlb0VxdWlyZWN0YW5ndWxhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNsYXRlKFt3aWR0aC8yLCBoZWlnaHQvMl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoNjkwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2VudGVyKFstNzMuOTg1OTc0LCA0MC43MTI3NzZdKTtcbiAgICAvLyA0MC43MTI3NzYsIC03NC4wMDU5NzRcbiAgICBsZXQgcGF0aCA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG4gICAgbGV0IGNpdHlNYXAgPSBkMy5qc29uKFwiZGF0YS9jaXR5X2Rpc3RyaWN0cy5qc29uXCIpO1xuXG4gICAgY2l0eU1hcC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAgICAgICAuZGF0YShkYXRhLmZlYXR1cmVzKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkKSA9PiAoXCJkaXN0cmljdC1cIiArIGQuaWQpKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICBcbiAgICB9KTtcblxuICAgIC8vIFByb21pc2UuYWxsKChbY2l0eU1hcF0pLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgIC8vICAgICBzdmcuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgIC8vICAgICAgICAgLmRhdGEodmFsdWVzWzBdLmZlYXR1cmVzKVxuICAgIC8vICAgICAgICAgLmVudGVyKClcbiAgICAvLyAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLy8gICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZGlzdHJpY3RzXCIpXG4gICAgLy8gICAgICAgICAuYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgIFxuICAgIC8vIH0pKTtcbn1cblxuLy8gbGV0IGNpdHlEaXN0cmljdHM7XG5cbi8vICQuZ2V0SlNPTihcImxpYi9wYnAuanNvblwiLCAoanNvbikgPT4ge1xuLy8gICAgIGNpdHlEaXN0cmljdHMgPSBqc29uO1xuLy8gfSlcblxuLy8gY29uc29sZS5sb2coY2l0eURpc3RyaWN0c1swXVtUaXRsZV0pXG5cbi8vIGxldCBkYXRhO1xuLy8gZDMuanNvbignaHR0cDovL3NlcnZpY2VzNS5hcmNnaXMuY29tL0dmd1dOa2hPajliTkJxb0ovYXJjZ2lzL3Jlc3Qvc2VydmljZXMvbnljYy9GZWF0dXJlU2VydmVyLzAvcXVlcnk/d2hlcmU9MT0xJm91dEZpZWxkcz0qJm91dFNSPTQzMjYmZj1nZW9qc29uJywgKGVycm9yLG1hcERhdGEpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhtYXBEYXRhW3R5cGVdKTtcbi8vIH0pXG4gICAgLy8gbGV0IGZlYXR1cmVzID0gbWFwRGF0YS5mZWF0dXJlcztcblxuICAgIC8vIG1hcExheWVyLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgLy8gICAgIC5kYXRhKGZlYXR1cmVzKVxuICAgIC8vICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgIC8vICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgLy8gICAuYXR0cigndmVjdG9yLWVmZmVjdCcsICdub24tc2NhbGluZy1zdHJva2UnKVxuICAgIC8vICAgLnN0eWxlKCdmaWxsJywgZmlsbEZuKVxuICAgIC8vICAgLm9uKCdtb3VzZW92ZXInLCBtb3VzZW92ZXIpXG4gICAgLy8gICAub24oJ21vdXNlb3V0JywgbW91c2VvdXQpXG4gICAgLy8gICAub24oJ2NsaWNrJywgY2xpY2tlZCk7XG4vLyB9KVxuXG4vLyBsZXQgd2lkdGggPSAxMDAwO1xuLy8gbGV0IGhlaWdodCA9IDEwMDA7XG4vLyBsZXQgY2VudGVyZWQ7XG5cbi8vIGxldCBwcm9qZWN0aW9uID0gZDMuZ2VvLm1lcmNhdG9yKClcbi8vICAgICAgICAgICAgICAgICAuc2NhbGUoNTAwKVxuLy8gICAgICAgICAgICAgICAgIC5jZW50ZXIoWy03NCw0LjVdKVxuLy8gICAgICAgICAgICAgICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMl0pXG5cbi8vIGxldCBwYXRoID0gZDMuZ2VvLnBhdGgoKS5cbi8vICAgICAgICAgICAgIHByb2plY3Rpb24ocHJvamVjdGlvbilcblxuLy8gbGV0IHN2ZyA9IGQzLnNlbGVjdCgnc3ZnJykuXG4vLyAgICAgICAgICAgICBhdHRyKCd3aWR0aCcsIHdpZHRoKVxuLy8gICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcblxuLy8gdmFyIGcgPSBzdmcuYXBwZW5kKCdnJyk7XG5cbi8vIHZhciBlZmZlY3RMYXllciA9IGcuYXBwZW5kKCdnJylcbi8vICAgLmNsYXNzZWQoJ2VmZmVjdC1sYXllcicsIHRydWUpO1xuXG4vLyB2YXIgbWFwTGF5ZXIgPSBnLmFwcGVuZCgnZycpXG4vLyAgIC5jbGFzc2VkKCdtYXAtbGF5ZXInLCB0cnVlKTtcblxuLy8gdmFyIGR1bW15VGV4dCA9IGcuYXBwZW5kKCd0ZXh0Jylcbi8vICAgLmNsYXNzZWQoJ2R1bW15LXRleHQnLCB0cnVlKVxuLy8gICAuYXR0cigneCcsIDEwKVxuLy8gICAuYXR0cigneScsIDMwKVxuLy8gICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcblxuLy8gdmFyIGJpZ1RleHQgPSBnLmFwcGVuZCgndGV4dCcpXG4vLyAgIC5jbGFzc2VkKCdiaWctdGV4dCcsIHRydWUpXG4vLyAgIC5hdHRyKCd4JywgMjApXG4vLyAgIC5hdHRyKCd5JywgNDUpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/mapgen.js\n");

/***/ })

/******/ });