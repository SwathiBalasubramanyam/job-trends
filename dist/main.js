/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _top_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top_skills */ \"./src/top_skills.js\");\n/* harmony import */ var _job_posts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job_posts.js */ \"./src/job_posts.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", main);\nfunction main() {\n  const titleForSkillsInput = document.querySelector(\".title-for-skills\");\n  titleForSkillsInput.addEventListener(\"click\", showSkillsAndJobs);\n}\nasync function showSkillsAndJobs(event) {\n  const titleInput = event.target.value;\n  if (!titleInput) {\n    return;\n  }\n  await new _top_skills__WEBPACK_IMPORTED_MODULE_0__.topSkills(titleInput);\n  await new _job_posts_js__WEBPACK_IMPORTED_MODULE_1__.jobPosts(titleInput);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ3lDO0FBQ0Y7QUFFdkNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVDLElBQUksQ0FBQztBQUVuRCxTQUFTQSxJQUFJQSxDQUFBLEVBQUc7RUFDWixNQUFNQyxtQkFBbUIsR0FBR0gsUUFBUSxDQUFDSSxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDdkVELG1CQUFtQixDQUFDRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVJLGlCQUFpQixDQUFDO0FBQ3BFO0FBRUEsZUFBZUEsaUJBQWlCQSxDQUFDQyxLQUFLLEVBQUU7RUFDcEMsTUFBTUMsVUFBVSxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztFQUNyQyxJQUFJLENBQUNGLFVBQVUsRUFBQztJQUNaO0VBQ0o7RUFDQSxNQUFNLElBQUlULGtEQUFTLENBQUNTLFVBQVUsQ0FBQztFQUUvQixNQUFNLElBQUlSLG1EQUFRLENBQUNRLFVBQVUsQ0FBQztBQUNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYi10cmVuZHMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHRvcFNraWxscyB9IGZyb20gXCIuL3RvcF9za2lsbHNcIjtcbmltcG9ydCB7am9iUG9zdHN9IGZyb20gXCIuL2pvYl9wb3N0cy5qc1wiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIG1haW4pO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IHRpdGxlRm9yU2tpbGxzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWZvci1za2lsbHNcIilcbiAgICB0aXRsZUZvclNraWxsc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2tpbGxzQW5kSm9icyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dTa2lsbHNBbmRKb2JzKGV2ZW50KSB7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIGlmICghdGl0bGVJbnB1dCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgbmV3IHRvcFNraWxscyh0aXRsZUlucHV0KTtcblxuICAgIGF3YWl0IG5ldyBqb2JQb3N0cyh0aXRsZUlucHV0KTtcbn1cbiJdLCJuYW1lcyI6WyJ0b3BTa2lsbHMiLCJqb2JQb3N0cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJ0aXRsZUZvclNraWxsc0lucHV0IiwicXVlcnlTZWxlY3RvciIsInNob3dTa2lsbHNBbmRKb2JzIiwiZXZlbnQiLCJ0aXRsZUlucHV0IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/job_card.js":
/*!*************************!*\
  !*** ./src/job_card.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   jobCard: function() { return /* binding */ jobCard; }\n/* harmony export */ });\nclass jobCard {\n  constructor(jobPost) {\n    this.jobId = jobPost[\"job_id\"];\n    this.companyName = jobPost[\"company_name\"];\n    this.description = jobPost[\"description\"];\n    this.title = jobPost[\"title\"];\n    this.workType = jobPost[\"formatted_work_type\"];\n    this.location = jobPost[\"location\"];\n    this.jobPostingUrl = jobPost[\"job_posting_url\"];\n  }\n  createElement() {\n    const domEle = document.createElement(\"div\");\n    domEle.setAttribute(\"id\", this.jobId);\n    const link = document.createElement(\"a\");\n    let linkText = document.createTextNode(`${this.companyName}, ${this.location}(${this.workType})`);\n    link.appendChild(linkText);\n    link.href = this.jobPostingUrl;\n    link.target = \"_blank\";\n    domEle.appendChild(link);\n    const linebreak = document.createElement(\"br\");\n    domEle.appendChild(linebreak);\n    const desc = document.createElement(\"textarea\");\n    desc.innerText = `${this.description}`;\n    domEle.appendChild(desc);\n    this.domEle = domEle;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvam9iX2NhcmQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLE9BQU87RUFDaEJDLFdBQVdBLENBQUNDLE9BQU8sRUFBQztJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHRCxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzlCLElBQUksQ0FBQ0UsV0FBVyxHQUFHRixPQUFPLENBQUMsY0FBYyxDQUFDO0lBQzFDLElBQUksQ0FBQ0csV0FBVyxHQUFHSCxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3pDLElBQUksQ0FBQ0ksS0FBSyxHQUFHSixPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzdCLElBQUksQ0FBQ0ssUUFBUSxHQUFHTCxPQUFPLENBQUMscUJBQXFCLENBQUM7SUFDOUMsSUFBSSxDQUFDTSxRQUFRLEdBQUdOLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDbkMsSUFBSSxDQUFDTyxhQUFhLEdBQUdQLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztFQUN2RDtFQUVBUSxhQUFhQSxDQUFBLEVBQUU7SUFDWCxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0YsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM1Q0MsTUFBTSxDQUFDRSxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ1YsS0FBSyxDQUFDO0lBRXJDLE1BQU1XLElBQUksR0FBR0YsUUFBUSxDQUFDRixhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3hDLElBQUlLLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxjQUFjLENBQUUsR0FBRSxJQUFJLENBQUNaLFdBQVksS0FBSSxJQUFJLENBQUNJLFFBQVMsSUFBRyxJQUFJLENBQUNELFFBQVMsR0FBRSxDQUFDO0lBQ2pHTyxJQUFJLENBQUNHLFdBQVcsQ0FBQ0YsUUFBUSxDQUFDO0lBQzFCRCxJQUFJLENBQUNJLElBQUksR0FBRyxJQUFJLENBQUNULGFBQWE7SUFDOUJLLElBQUksQ0FBQ0ssTUFBTSxHQUFHLFFBQVE7SUFDdEJSLE1BQU0sQ0FBQ00sV0FBVyxDQUFDSCxJQUFJLENBQUM7SUFFeEIsTUFBTU0sU0FBUyxHQUFHUixRQUFRLENBQUNGLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDOUNDLE1BQU0sQ0FBQ00sV0FBVyxDQUFDRyxTQUFTLENBQUM7SUFFN0IsTUFBTUMsSUFBSSxHQUFHVCxRQUFRLENBQUNGLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDL0NXLElBQUksQ0FBQ0MsU0FBUyxHQUFJLEdBQUUsSUFBSSxDQUFDakIsV0FBWSxFQUFDO0lBQ3RDTSxNQUFNLENBQUNNLFdBQVcsQ0FBQ0ksSUFBSSxDQUFDO0lBQ3hCLElBQUksQ0FBQ1YsTUFBTSxHQUFHQSxNQUFNO0VBQ3hCO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2ItdHJlbmRzLy4vc3JjL2pvYl9jYXJkLmpzP2U2NDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIGpvYkNhcmR7XG4gICAgY29uc3RydWN0b3Ioam9iUG9zdCl7XG4gICAgICAgICAgICB0aGlzLmpvYklkID0gam9iUG9zdFtcImpvYl9pZFwiXTtcbiAgICAgICAgICAgIHRoaXMuY29tcGFueU5hbWUgPSBqb2JQb3N0W1wiY29tcGFueV9uYW1lXCJdO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGpvYlBvc3RbXCJkZXNjcmlwdGlvblwiXTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBqb2JQb3N0W1widGl0bGVcIl07XG4gICAgICAgICAgICB0aGlzLndvcmtUeXBlID0gam9iUG9zdFtcImZvcm1hdHRlZF93b3JrX3R5cGVcIl07XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gam9iUG9zdFtcImxvY2F0aW9uXCJdO1xuICAgICAgICAgICAgdGhpcy5qb2JQb3N0aW5nVXJsID0gam9iUG9zdFtcImpvYl9wb3N0aW5nX3VybFwiXTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbGVtZW50KCl7XG4gICAgICAgIGNvbnN0IGRvbUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZG9tRWxlLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuam9iSWQpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgICAgICBsZXQgbGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt0aGlzLmNvbXBhbnlOYW1lfSwgJHt0aGlzLmxvY2F0aW9ufSgke3RoaXMud29ya1R5cGV9KWApXG4gICAgICAgIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xuICAgICAgICBsaW5rLmhyZWYgPSB0aGlzLmpvYlBvc3RpbmdVcmw7XG4gICAgICAgIGxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgICAgICBkb21FbGUuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICAgICAgY29uc3QgbGluZWJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgICAgICBkb21FbGUuYXBwZW5kQ2hpbGQobGluZWJyZWFrKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcbiAgICAgICAgZGVzYy5pbm5lclRleHQgPSBgJHt0aGlzLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgZG9tRWxlLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgICAgIHRoaXMuZG9tRWxlID0gZG9tRWxlO1xuICAgIH1cblxufSJdLCJuYW1lcyI6WyJqb2JDYXJkIiwiY29uc3RydWN0b3IiLCJqb2JQb3N0Iiwiam9iSWQiLCJjb21wYW55TmFtZSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJ3b3JrVHlwZSIsImxvY2F0aW9uIiwiam9iUG9zdGluZ1VybCIsImNyZWF0ZUVsZW1lbnQiLCJkb21FbGUiLCJkb2N1bWVudCIsInNldEF0dHJpYnV0ZSIsImxpbmsiLCJsaW5rVGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJocmVmIiwidGFyZ2V0IiwibGluZWJyZWFrIiwiZGVzYyIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/job_card.js\n");

/***/ }),

/***/ "./src/job_posts.js":
/*!**************************!*\
  !*** ./src/job_posts.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   jobPosts: function() { return /* binding */ jobPosts; }\n/* harmony export */ });\n/* harmony import */ var _job_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job_card */ \"./src/job_card.js\");\n\nclass jobPosts {\n  constructor(titleInput) {\n    this.titleInput = titleInput;\n    this.jobPostsInfo = document.querySelector(\".job-posts-info\");\n    while (this.jobPostsInfo.firstChild) {\n      this.jobPostsInfo.removeChild(this.jobPostsInfo.firstChild);\n    }\n    this.getJobs().then(this.render.bind(this));\n  }\n  async getJobs() {\n    const res = await fetch(\"../data/job_postings.json\");\n    this.jobPosts = await res.json();\n    return;\n  }\n  render() {\n    for (const key in this.jobPosts) {\n      const jobPost = this.jobPosts[key];\n      let postingsTitle = jobPost['title'].toLowerCase();\n      if (postingsTitle !== this.titleInput) {\n        continue;\n      }\n      const jobCardIns = new _job_card__WEBPACK_IMPORTED_MODULE_0__.jobCard(jobPost);\n      jobCardIns.createElement();\n      this.jobPostsInfo.append(jobCardIns.domEle);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvam9iX3Bvc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFDO0FBRTlCLE1BQU1DLFFBQVE7RUFFakJDLFdBQVdBLENBQUNDLFVBQVUsRUFBQztJQUNuQixJQUFJLENBQUNBLFVBQVUsR0FBR0EsVUFBVTtJQUM1QixJQUFJLENBQUNDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDN0QsT0FBTyxJQUFJLENBQUNGLFlBQVksQ0FBQ0csVUFBVSxFQUFFO01BQ2pDLElBQUksQ0FBQ0gsWUFBWSxDQUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDSixZQUFZLENBQUNHLFVBQVUsQ0FBQztJQUMvRDtJQUNBLElBQUksQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDL0M7RUFFQSxNQUFNSCxPQUFPQSxDQUFBLEVBQUU7SUFDWCxNQUFNSSxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO0lBQ3BELElBQUksQ0FBQ2IsUUFBUSxHQUFHLE1BQU1ZLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFDaEM7RUFDSjtFQUVBSixNQUFNQSxDQUFBLEVBQUU7SUFDSixLQUFLLE1BQU1LLEdBQUcsSUFBSSxJQUFJLENBQUNmLFFBQVEsRUFBRTtNQUM3QixNQUFNZ0IsT0FBTyxHQUFHLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ2UsR0FBRyxDQUFDO01BQ2xDLElBQUlFLGFBQWEsR0FBR0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDRSxXQUFXLENBQUMsQ0FBQztNQUNsRCxJQUFJRCxhQUFhLEtBQUssSUFBSSxDQUFDZixVQUFVLEVBQUM7UUFDbEM7TUFDSjtNQUNBLE1BQU1pQixVQUFVLEdBQUcsSUFBSXBCLDhDQUFPLENBQUNpQixPQUFPLENBQUM7TUFDdkNHLFVBQVUsQ0FBQ0MsYUFBYSxDQUFDLENBQUM7TUFDMUIsSUFBSSxDQUFDakIsWUFBWSxDQUFDa0IsTUFBTSxDQUFDRixVQUFVLENBQUNHLE1BQU0sQ0FBQztJQUMvQztFQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2ItdHJlbmRzLy4vc3JjL2pvYl9wb3N0cy5qcz9kYjk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvYkNhcmQgfSBmcm9tIFwiLi9qb2JfY2FyZFwiO1xuXG5leHBvcnQgY2xhc3Mgam9iUG9zdHN7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZUlucHV0KXtcbiAgICAgICAgdGhpcy50aXRsZUlucHV0ID0gdGl0bGVJbnB1dDtcbiAgICAgICAgdGhpcy5qb2JQb3N0c0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpvYi1wb3N0cy1pbmZvXCIpXG4gICAgICAgIHdoaWxlICh0aGlzLmpvYlBvc3RzSW5mby5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmpvYlBvc3RzSW5mby5yZW1vdmVDaGlsZCh0aGlzLmpvYlBvc3RzSW5mby5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldEpvYnMoKS50aGVuKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEpvYnMoKXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIuLi9kYXRhL2pvYl9wb3N0aW5ncy5qc29uXCIpXG4gICAgICAgIHRoaXMuam9iUG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuam9iUG9zdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGpvYlBvc3QgPSB0aGlzLmpvYlBvc3RzW2tleV07XG4gICAgICAgICAgICBsZXQgcG9zdGluZ3NUaXRsZSA9IGpvYlBvc3RbJ3RpdGxlJ10udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChwb3N0aW5nc1RpdGxlICE9PSB0aGlzLnRpdGxlSW5wdXQpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgam9iQ2FyZElucyA9IG5ldyBqb2JDYXJkKGpvYlBvc3QpO1xuICAgICAgICAgICAgam9iQ2FyZElucy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLmpvYlBvc3RzSW5mby5hcHBlbmQoam9iQ2FyZElucy5kb21FbGUpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJqb2JDYXJkIiwiam9iUG9zdHMiLCJjb25zdHJ1Y3RvciIsInRpdGxlSW5wdXQiLCJqb2JQb3N0c0luZm8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJnZXRKb2JzIiwidGhlbiIsInJlbmRlciIsImJpbmQiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJrZXkiLCJqb2JQb3N0IiwicG9zdGluZ3NUaXRsZSIsInRvTG93ZXJDYXNlIiwiam9iQ2FyZElucyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJkb21FbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/job_posts.js\n");

/***/ }),

/***/ "./src/top_skills.js":
/*!***************************!*\
  !*** ./src/top_skills.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   topSkills: function() { return /* binding */ topSkills; }\n/* harmony export */ });\nclass topSkills {\n  constructor(titleInput) {\n    this.titleInput = titleInput;\n    this.topSkillsSuccessList = document.querySelector(\".top-skills-success\");\n    this.topSkillsFailureList = document.querySelector(\".top-skills-failure\");\n    this.getSkills().then(this.handleSkills.bind(this));\n  }\n  async getSkills() {\n    const res = await fetch(\"../data/pdl_skills_for_us_software_engineers.json\");\n    this.allSkillsByTitle = await res.json();\n    this.skills = this.allSkillsByTitle[this.titleInput];\n    return;\n  }\n  handleSkills() {\n    this.removeChildren(this.topSkillsSuccessList);\n    if (this.skills) {\n      this.topSkillsFailureList.setAttribute(\"hidden\", \"hidden\");\n      this.showSkillsSuccess();\n    } else {\n      this.topSkillsSuccessList.setAttribute(\"hidden\", \"hidden\");\n      this.showSkillsFailure();\n    }\n  }\n  showSkillsSuccess() {\n    this.topSkillsSuccessList.removeAttribute(\"hidden\");\n    const label = document.createElement('label');\n    label.innerText = `Here are some of the skills for ${this.titleInput}`;\n    this.topSkillsSuccessList.append(label);\n    this.skills['skills'].forEach(element => {\n      const liItem = document.createElement(\"li\");\n      liItem.innerText = element['skill'];\n      this.topSkillsSuccessList.append(liItem);\n    });\n  }\n  removeChildren(element) {\n    while (element.firstChild) {\n      element.removeChild(element.firstChild);\n    }\n  }\n  showSkillsFailure() {\n    this.topSkillsFailureList.removeAttribute(\"hidden\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9wX3NraWxscy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUztFQUVsQkMsV0FBV0EsQ0FBQ0MsVUFBVSxFQUFDO0lBQ25CLElBQUksQ0FBQ0EsVUFBVSxHQUFHQSxVQUFVO0lBQzVCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0lBQ3pFLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0lBQ3pFLElBQUksQ0FBQ0UsU0FBUyxDQUFDLENBQUMsQ0FDWEMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDM0M7RUFFQSxNQUFNSCxTQUFTQSxDQUFBLEVBQUU7SUFDYixNQUFNSSxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDO0lBQzVFLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLENBQUMsQ0FBQztJQUN4QyxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNGLGdCQUFnQixDQUFDLElBQUksQ0FBQ1gsVUFBVSxDQUFDO0lBQ3BEO0VBQ0o7RUFFQU8sWUFBWUEsQ0FBQSxFQUFFO0lBQ1YsSUFBSSxDQUFDTyxjQUFjLENBQUMsSUFBSSxDQUFDYixvQkFBb0IsQ0FBQztJQUU5QyxJQUFJLElBQUksQ0FBQ1ksTUFBTSxFQUFDO01BQ1osSUFBSSxDQUFDVCxvQkFBb0IsQ0FBQ1csWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7TUFDMUQsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCLENBQUMsTUFBSztNQUNGLElBQUksQ0FBQ2Ysb0JBQW9CLENBQUNjLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO01BQzFELElBQUksQ0FBQ0UsaUJBQWlCLENBQUMsQ0FBQztJQUM1QjtFQUNKO0VBRUFELGlCQUFpQkEsQ0FBQSxFQUFFO0lBQ2YsSUFBSSxDQUFDZixvQkFBb0IsQ0FBQ2lCLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDbkQsTUFBTUMsS0FBSyxHQUFHakIsUUFBUSxDQUFDa0IsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUM3Q0QsS0FBSyxDQUFDRSxTQUFTLEdBQUksbUNBQWtDLElBQUksQ0FBQ3JCLFVBQVcsRUFBQztJQUN0RSxJQUFJLENBQUNDLG9CQUFvQixDQUFDcUIsTUFBTSxDQUFDSCxLQUFLLENBQUM7SUFFdkMsSUFBSSxDQUFDTixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUNVLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJO01BQ3JDLE1BQU1DLE1BQU0sR0FBR3ZCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDM0NLLE1BQU0sQ0FBQ0osU0FBUyxHQUFHRyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQ25DLElBQUksQ0FBQ3ZCLG9CQUFvQixDQUFDcUIsTUFBTSxDQUFDRyxNQUFNLENBQUM7SUFDNUMsQ0FBQyxDQUFDO0VBQ047RUFFQVgsY0FBY0EsQ0FBQ1UsT0FBTyxFQUFDO0lBQ25CLE9BQU9BLE9BQU8sQ0FBQ0UsVUFBVSxFQUFFO01BQ3ZCRixPQUFPLENBQUNHLFdBQVcsQ0FBQ0gsT0FBTyxDQUFDRSxVQUFVLENBQUM7SUFDM0M7RUFDSjtFQUVBVCxpQkFBaUJBLENBQUEsRUFBRTtJQUNmLElBQUksQ0FBQ2Isb0JBQW9CLENBQUNjLGVBQWUsQ0FBQyxRQUFRLENBQUM7RUFDdkQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYi10cmVuZHMvLi9zcmMvdG9wX3NraWxscy5qcz81M2RlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyB0b3BTa2lsbHN7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZUlucHV0KXtcbiAgICAgICAgdGhpcy50aXRsZUlucHV0ID0gdGl0bGVJbnB1dDtcbiAgICAgICAgdGhpcy50b3BTa2lsbHNTdWNjZXNzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wLXNraWxscy1zdWNjZXNzXCIpO1xuICAgICAgICB0aGlzLnRvcFNraWxsc0ZhaWx1cmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3Atc2tpbGxzLWZhaWx1cmVcIik7XG4gICAgICAgIHRoaXMuZ2V0U2tpbGxzKClcbiAgICAgICAgICAgIC50aGVuKHRoaXMuaGFuZGxlU2tpbGxzLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNraWxscygpe1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi4uL2RhdGEvcGRsX3NraWxsc19mb3JfdXNfc29mdHdhcmVfZW5naW5lZXJzLmpzb25cIik7XG4gICAgICAgIHRoaXMuYWxsU2tpbGxzQnlUaXRsZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHRoaXMuc2tpbGxzID0gdGhpcy5hbGxTa2lsbHNCeVRpdGxlW3RoaXMudGl0bGVJbnB1dF07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVTa2lsbHMoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZHJlbih0aGlzLnRvcFNraWxsc1N1Y2Nlc3NMaXN0KTtcbiAgICBcbiAgICAgICAgaWYgKHRoaXMuc2tpbGxzKXtcbiAgICAgICAgICAgIHRoaXMudG9wU2tpbGxzRmFpbHVyZUxpc3Quc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiaGlkZGVuXCIpXG4gICAgICAgICAgICB0aGlzLnNob3dTa2lsbHNTdWNjZXNzKCk7IFxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aGlzLnRvcFNraWxsc1N1Y2Nlc3NMaXN0LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NraWxsc0ZhaWx1cmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dTa2lsbHNTdWNjZXNzKCl7XG4gICAgICAgIHRoaXMudG9wU2tpbGxzU3VjY2Vzc0xpc3QucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gYEhlcmUgYXJlIHNvbWUgb2YgdGhlIHNraWxscyBmb3IgJHt0aGlzLnRpdGxlSW5wdXR9YFxuICAgICAgICB0aGlzLnRvcFNraWxsc1N1Y2Nlc3NMaXN0LmFwcGVuZChsYWJlbClcbiAgICBcbiAgICAgICAgdGhpcy5za2lsbHNbJ3NraWxscyddLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgIGxpSXRlbS5pbm5lclRleHQgPSBlbGVtZW50Wydza2lsbCddO1xuICAgICAgICAgICAgdGhpcy50b3BTa2lsbHNTdWNjZXNzTGlzdC5hcHBlbmQobGlJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGRyZW4oZWxlbWVudCl7XG4gICAgICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dTa2lsbHNGYWlsdXJlKCl7XG4gICAgICAgIHRoaXMudG9wU2tpbGxzRmFpbHVyZUxpc3QucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xuICAgIH0gXG59XG4iXSwibmFtZXMiOlsidG9wU2tpbGxzIiwiY29uc3RydWN0b3IiLCJ0aXRsZUlucHV0IiwidG9wU2tpbGxzU3VjY2Vzc0xpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3BTa2lsbHNGYWlsdXJlTGlzdCIsImdldFNraWxscyIsInRoZW4iLCJoYW5kbGVTa2lsbHMiLCJiaW5kIiwicmVzIiwiZmV0Y2giLCJhbGxTa2lsbHNCeVRpdGxlIiwianNvbiIsInNraWxscyIsInJlbW92ZUNoaWxkcmVuIiwic2V0QXR0cmlidXRlIiwic2hvd1NraWxsc1N1Y2Nlc3MiLCJzaG93U2tpbGxzRmFpbHVyZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxhYmVsIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImFwcGVuZCIsImZvckVhY2giLCJlbGVtZW50IiwibGlJdGVtIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/top_skills.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2ItdHJlbmRzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;