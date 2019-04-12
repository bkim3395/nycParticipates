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
/*! no static exports found */
/***/ (function(module, exports) {

eval("// d3.json(\"data/city_districts.json\").then((data) => {\n//     console.log(data);\n// })\n// console.log(\"testing\")\n// let projection = d3.geoEqualEarth()\n// let path = d3.geoPath(projection);\n// let svg = d3.select(\"body\").append(\"svg\")\n//             .attr(\"width\", 500)\n//             .attr(\"height\", 500);\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let width = 700;\n  let height = 500;\n  let svg = d3.select(\"div#map-container\").append(\"svg\").attr(\"preserveAspectRatio\", \"xMinYMin meet\").attr(\"viewBox\", \"0 0 \" + width + \" \" + height).style(\"background\", \"#c9e8fd\").classed(\"svg-content\", true);\n  let projection = d3.geoEquirectangular().translate([width / 2, height / 2]).scale(69000).center([-73.985974, 40.712776]); // 40.712776, -74.005974\n\n  let path = d3.geoPath().projection(projection);\n  let cityMap = d3.json(\"data/city_districts.json\");\n  cityMap.then(data => {\n    svg.selectAll(\"path\").data(data.features).enter().append(\"path\").attr(\"class\", d => \"district-\" + d.id).attr(\"d\", path);\n  }); // Promise.all(([cityMap]).then((values) => {\n  //     svg.selectAll(\"path\")\n  //         .data(values[0].features)\n  //         .enter()\n  //         .append(\"path\")\n  //         .attr(\"class\", \"districts\")\n  //         .attr(\"d\", path);\n  // }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsInByb2plY3Rpb24iLCJnZW9FcXVpcmVjdGFuZ3VsYXIiLCJ0cmFuc2xhdGUiLCJzY2FsZSIsImNlbnRlciIsInBhdGgiLCJnZW9QYXRoIiwiY2l0eU1hcCIsImpzb24iLCJ0aGVuIiwiZGF0YSIsInNlbGVjdEFsbCIsImZlYXR1cmVzIiwiZW50ZXIiLCJkIiwiaWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0FBQ2hELE1BQUlDLEtBQUssR0FBRyxHQUFaO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEdBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLG1CQUFWLEVBQ0dDLE1BREgsQ0FDVSxLQURWLEVBRUdDLElBRkgsQ0FFUSxxQkFGUixFQUUrQixlQUYvQixFQUdHQSxJQUhILENBR1EsU0FIUixFQUdtQixTQUFTTixLQUFULEdBQWlCLEdBQWpCLEdBQXVCQyxNQUgxQyxFQUdtRE0sS0FIbkQsQ0FHeUQsWUFIekQsRUFHdUUsU0FIdkUsRUFJR0MsT0FKSCxDQUlXLGFBSlgsRUFJMEIsSUFKMUIsQ0FBVjtBQU1BLE1BQUlDLFVBQVUsR0FBR04sRUFBRSxDQUFDTyxrQkFBSCxHQUNJQyxTQURKLENBQ2MsQ0FBQ1gsS0FBSyxHQUFDLENBQVAsRUFBVUMsTUFBTSxHQUFDLENBQWpCLENBRGQsRUFFSVcsS0FGSixDQUVVLEtBRlYsRUFHSUMsTUFISixDQUdXLENBQUMsQ0FBQyxTQUFGLEVBQWEsU0FBYixDQUhYLENBQWpCLENBVGdELENBYWhEOztBQUNBLE1BQUlDLElBQUksR0FBR1gsRUFBRSxDQUFDWSxPQUFILEdBQWFOLFVBQWIsQ0FBd0JBLFVBQXhCLENBQVg7QUFFQSxNQUFJTyxPQUFPLEdBQUdiLEVBQUUsQ0FBQ2MsSUFBSCxDQUFRLDBCQUFSLENBQWQ7QUFFQUQsU0FBTyxDQUFDRSxJQUFSLENBQWNDLElBQUQsSUFBVTtBQUNuQmpCLE9BQUcsQ0FBQ2tCLFNBQUosQ0FBYyxNQUFkLEVBQ0tELElBREwsQ0FDVUEsSUFBSSxDQUFDRSxRQURmLEVBRUtDLEtBRkwsR0FHS2pCLE1BSEwsQ0FHWSxNQUhaLEVBSUtDLElBSkwsQ0FJVSxPQUpWLEVBSW9CaUIsQ0FBRCxJQUFRLGNBQWNBLENBQUMsQ0FBQ0MsRUFKM0MsRUFLS2xCLElBTEwsQ0FLVSxHQUxWLEVBS2VRLElBTGY7QUFPSCxHQVJELEVBbEJnRCxDQTRCaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVILENBdENEIiwiZmlsZSI6Ii4vbGliL2VudHJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZDMuanNvbihcImRhdGEvY2l0eV9kaXN0cmljdHMuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyB9KVxuXG4vLyBjb25zb2xlLmxvZyhcInRlc3RpbmdcIilcblxuLy8gbGV0IHByb2plY3Rpb24gPSBkMy5nZW9FcXVhbEVhcnRoKClcbi8vIGxldCBwYXRoID0gZDMuZ2VvUGF0aChwcm9qZWN0aW9uKTtcblxuLy8gbGV0IHN2ZyA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic3ZnXCIpXG4vLyAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIDUwMClcbi8vICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDUwMCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsZXQgd2lkdGggPSA3MDA7XG4gICAgbGV0IGhlaWdodCA9IDUwMDtcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiZGl2I21hcC1jb250YWluZXJcIilcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCBcIiArIHdpZHRoICsgXCIgXCIgKyBoZWlnaHQgKS5zdHlsZShcImJhY2tncm91bmRcIiwgXCIjYzllOGZkXCIpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgIGxldCBwcm9qZWN0aW9uID0gZDMuZ2VvRXF1aXJlY3Rhbmd1bGFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2xhdGUoW3dpZHRoLzIsIGhlaWdodC8yXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zY2FsZSg2OTAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jZW50ZXIoWy03My45ODU5NzQsIDQwLjcxMjc3Nl0pO1xuICAgIC8vIDQwLjcxMjc3NiwgLTc0LjAwNTk3NFxuICAgIGxldCBwYXRoID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbiAgICBsZXQgY2l0eU1hcCA9IGQzLmpzb24oXCJkYXRhL2NpdHlfZGlzdHJpY3RzLmpzb25cIik7XG5cbiAgICBjaXR5TWFwLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXRhKGRhdGEuZmVhdHVyZXMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgKGQpID0+IChcImRpc3RyaWN0LVwiICsgZC5pZCkpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgLy8gUHJvbWlzZS5hbGwoKFtjaXR5TWFwXSkudGhlbigodmFsdWVzKSA9PiB7XG4gICAgLy8gICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgLy8gICAgICAgICAuZGF0YSh2YWx1ZXNbMF0uZmVhdHVyZXMpXG4gICAgLy8gICAgICAgICAuZW50ZXIoKVxuICAgIC8vICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkaXN0cmljdHNcIilcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgXG4gICAgLy8gfSkpO1xuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ })

/******/ });