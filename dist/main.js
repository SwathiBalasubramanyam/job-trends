/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", main);\nfunction main() {\n  const titleForSkillsInput = document.querySelector(\".title-for-skills\");\n  titleForSkillsInput.addEventListener(\"click\", showSkills);\n}\nasync function showSkills(event) {\n  const titleInput = event.target.value;\n  const res = await fetch(\"../data/pdl_skills_for_us_software_engineers.json\");\n  const allSkillsByTitle = await res.json();\n  if (allSkillsByTitle[titleInput]) {\n    console.log(allSkillsByTitle[titleInput]);\n    return allSkillsByTitle[titleInput];\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwidGl0bGVGb3JTa2lsbHNJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJzaG93U2tpbGxzIiwiZXZlbnQiLCJ0aXRsZUlucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJyZXMiLCJmZXRjaCIsImFsbFNraWxsc0J5VGl0bGUiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXRyZW5kcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3QgdGl0bGVGb3JTa2lsbHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZm9yLXNraWxsc1wiKVxuXG4gICAgdGl0bGVGb3JTa2lsbHNJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NraWxscyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dTa2lsbHMoZXZlbnQpIHtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIuLi9kYXRhL3BkbF9za2lsbHNfZm9yX3VzX3NvZnR3YXJlX2VuZ2luZWVycy5qc29uXCIpO1xuICAgIGNvbnN0IGFsbFNraWxsc0J5VGl0bGUgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKGFsbFNraWxsc0J5VGl0bGVbdGl0bGVJbnB1dF0pe1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxTa2lsbHNCeVRpdGxlW3RpdGxlSW5wdXRdKTtcbiAgICAgICAgcmV0dXJuIGFsbFNraWxsc0J5VGl0bGVbdGl0bGVJbnB1dF1cbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiQUFDQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRUMsSUFBSSxDQUFDO0FBRW5ELFNBQVNBLElBQUlBLENBQUEsRUFBRztFQUNaLE1BQU1DLG1CQUFtQixHQUFHSCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUV2RUQsbUJBQW1CLENBQUNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRUksVUFBVSxDQUFDO0FBQzdEO0FBRUEsZUFBZUEsVUFBVUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzdCLE1BQU1DLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7RUFDckMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxtREFBbUQsQ0FBQztFQUM1RSxNQUFNQyxnQkFBZ0IsR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBRXpDLElBQUlELGdCQUFnQixDQUFDTCxVQUFVLENBQUMsRUFBQztJQUM3Qk8sT0FBTyxDQUFDQyxHQUFHLENBQUNILGdCQUFnQixDQUFDTCxVQUFVLENBQUMsQ0FBQztJQUN6QyxPQUFPSyxnQkFBZ0IsQ0FBQ0wsVUFBVSxDQUFDO0VBQ3ZDO0FBQ0oifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2ItdHJlbmRzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;