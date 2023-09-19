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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _top_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top_skills */ \"./src/top_skills.js\");\n/* harmony import */ var _job_posts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job_posts.js */ \"./src/job_posts.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", main);\nfunction main() {\n  const getInsightsBtn = document.querySelector(\".title-input-btn\");\n  getInsightsBtn.addEventListener(\"click\", getInsightsAndJobPostings);\n}\nasync function getInsightsAndJobPostings(event) {\n  event.preventDefault();\n  const userTitleInput = document.querySelector(\"input[name='title-for-skills']\");\n  const titleInput = userTitleInput.value;\n  await new _top_skills__WEBPACK_IMPORTED_MODULE_0__.topSkills(titleInput);\n  await new _job_posts_js__WEBPACK_IMPORTED_MODULE_1__.jobPosts(titleInput);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ3lDO0FBQ0Y7QUFFdkNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVDLElBQUksQ0FBQztBQUVuRCxTQUFTQSxJQUFJQSxDQUFBLEVBQUc7RUFDWixNQUFNQyxjQUFjLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQ2pFRCxjQUFjLENBQUNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRUkseUJBQXlCLENBQUM7QUFDdkU7QUFFQSxlQUFlQSx5QkFBeUJBLENBQUNDLEtBQUssRUFBRTtFQUM1Q0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QixNQUFNQyxjQUFjLEdBQUdSLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLGdDQUFnQyxDQUFDO0VBQy9FLE1BQU1LLFVBQVUsR0FBR0QsY0FBYyxDQUFDRSxLQUFLO0VBQ3ZDLE1BQU0sSUFBSVosa0RBQVMsQ0FBQ1csVUFBVSxDQUFDO0VBQy9CLE1BQU0sSUFBSVYsbURBQVEsQ0FBQ1UsVUFBVSxDQUFDO0FBQ2xDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXRyZW5kcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdG9wU2tpbGxzIH0gZnJvbSBcIi4vdG9wX3NraWxsc1wiO1xuaW1wb3J0IHtqb2JQb3N0c30gZnJvbSBcIi4vam9iX3Bvc3RzLmpzXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3QgZ2V0SW5zaWdodHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWlucHV0LWJ0blwiKVxuICAgIGdldEluc2lnaHRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRJbnNpZ2h0c0FuZEpvYlBvc3RpbmdzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5zaWdodHNBbmRKb2JQb3N0aW5ncyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlclRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ndGl0bGUtZm9yLXNraWxscyddXCIpXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IHVzZXJUaXRsZUlucHV0LnZhbHVlXG4gICAgYXdhaXQgbmV3IHRvcFNraWxscyh0aXRsZUlucHV0KTtcbiAgICBhd2FpdCBuZXcgam9iUG9zdHModGl0bGVJbnB1dCk7XG59XG4iXSwibmFtZXMiOlsidG9wU2tpbGxzIiwiam9iUG9zdHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0SW5zaWdodHNCdG4iLCJxdWVyeVNlbGVjdG9yIiwiZ2V0SW5zaWdodHNBbmRKb2JQb3N0aW5ncyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyVGl0bGVJbnB1dCIsInRpdGxlSW5wdXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/job_card.js":
/*!*************************!*\
  !*** ./src/job_card.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   jobCard: function() { return /* binding */ jobCard; }\n/* harmony export */ });\nclass jobCard {\n  constructor(jobPost) {\n    this.jobId = jobPost[\"job_id\"];\n    this.companyName = jobPost[\"company_name\"];\n    this.description = jobPost[\"description\"];\n    this.title = jobPost[\"title\"];\n    this.workType = jobPost[\"formatted_work_type\"];\n    this.location = jobPost[\"location\"];\n    this.jobPostingUrl = jobPost[\"job_posting_url\"];\n    this.createElement();\n  }\n  createElement() {\n    const domEle = document.createElement(\"div\");\n    domEle.setAttribute(\"id\", this.jobId);\n    const compEle = document.createElement(\"div\");\n    compEle.innerText = `${this.companyName}`;\n    domEle.appendChild(compEle);\n    const locEle = document.createElement(\"div\");\n    locEle.innerText = `${this.location}(${this.workType})`;\n    domEle.appendChild(locEle);\n    domEle.addEventListener(\"click\", this.showDetails.bind(this));\n    this.domEle = domEle;\n  }\n  showDetails() {\n    const superParent = document.querySelector(\".job-posts-success\");\n    const parentEle = document.querySelector(\".job-desc-container\");\n    if (parentEle) {\n      superParent.removeChild(parentEle);\n    }\n    const jobDescriptionContainer = document.createElement(\"div\");\n    jobDescriptionContainer.className = \"job-desc-container\";\n    const heading = document.createElement(\"h2\");\n    heading.innerText = this.title;\n    jobDescriptionContainer.appendChild(heading);\n    const compEle = document.createElement(\"div\");\n    compEle.innerText = `${this.companyName}`;\n    jobDescriptionContainer.appendChild(compEle);\n    const locEle = document.createElement(\"div\");\n    locEle.innerText = `${this.location}(${this.workType})`;\n    jobDescriptionContainer.appendChild(locEle);\n    const link = document.createElement(\"a\");\n    let linkText = document.createTextNode(\"View Post\");\n    link.appendChild(linkText);\n    link.href = this.jobPostingUrl;\n    link.target = \"_blank\";\n    jobDescriptionContainer.appendChild(link);\n    const linebreak = document.createElement(\"br\");\n    jobDescriptionContainer.appendChild(linebreak);\n    const description = document.createElement(\"div\");\n    description.innerText = `${this.description}`;\n    jobDescriptionContainer.appendChild(description);\n    superParent.appendChild(jobDescriptionContainer);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7SUFFM0MsTUFBTVcsSUFBSSxHQUFHaEIsUUFBUSxDQUFDRixhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3hDLElBQUltQixRQUFRLEdBQUdqQixRQUFRLENBQUNrQixjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ25ERixJQUFJLENBQUNaLFdBQVcsQ0FBQ2EsUUFBUSxDQUFDO0lBQzFCRCxJQUFJLENBQUNHLElBQUksR0FBRyxJQUFJLENBQUN0QixhQUFhO0lBQzlCbUIsSUFBSSxDQUFDSSxNQUFNLEdBQUcsUUFBUTtJQUN0QlAsdUJBQXVCLENBQUNULFdBQVcsQ0FBQ1ksSUFBSSxDQUFDO0lBRXpDLE1BQU1LLFNBQVMsR0FBR3JCLFFBQVEsQ0FBQ0YsYUFBYSxDQUFDLElBQUksQ0FBQztJQUM5Q2UsdUJBQXVCLENBQUNULFdBQVcsQ0FBQ2lCLFNBQVMsQ0FBQztJQUU5QyxNQUFNNUIsV0FBVyxHQUFHTyxRQUFRLENBQUNGLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDakRMLFdBQVcsQ0FBQ1UsU0FBUyxHQUFJLEdBQUUsSUFBSSxDQUFDVixXQUFZLEVBQUM7SUFDN0NvQix1QkFBdUIsQ0FBQ1QsV0FBVyxDQUFDWCxXQUFXLENBQUM7SUFFaERnQixXQUFXLENBQUNMLFdBQVcsQ0FBQ1MsdUJBQXVCLENBQUM7RUFDcEQ7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYi10cmVuZHMvLi9zcmMvam9iX2NhcmQuanM/ZTY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3Mgam9iQ2FyZHtcbiAgICBjb25zdHJ1Y3Rvcihqb2JQb3N0KXtcbiAgICAgICAgICAgIHRoaXMuam9iSWQgPSBqb2JQb3N0W1wiam9iX2lkXCJdO1xuICAgICAgICAgICAgdGhpcy5jb21wYW55TmFtZSA9IGpvYlBvc3RbXCJjb21wYW55X25hbWVcIl07XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gam9iUG9zdFtcImRlc2NyaXB0aW9uXCJdO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGpvYlBvc3RbXCJ0aXRsZVwiXTtcbiAgICAgICAgICAgIHRoaXMud29ya1R5cGUgPSBqb2JQb3N0W1wiZm9ybWF0dGVkX3dvcmtfdHlwZVwiXTtcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBqb2JQb3N0W1wibG9jYXRpb25cIl07XG4gICAgICAgICAgICB0aGlzLmpvYlBvc3RpbmdVcmwgPSBqb2JQb3N0W1wiam9iX3Bvc3RpbmdfdXJsXCJdO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlRWxlbWVudCgpe1xuICAgICAgICBjb25zdCBkb21FbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGRvbUVsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmpvYklkKTtcblxuICAgICAgICBjb25zdCBjb21wRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcEVsZS5pbm5lclRleHQgPSBgJHt0aGlzLmNvbXBhbnlOYW1lfWBcbiAgICAgICAgZG9tRWxlLmFwcGVuZENoaWxkKGNvbXBFbGUpO1xuXG4gICAgICAgIGNvbnN0IGxvY0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvY0VsZS5pbm5lclRleHQgPSBgJHt0aGlzLmxvY2F0aW9ufSgke3RoaXMud29ya1R5cGV9KWBcbiAgICAgICAgZG9tRWxlLmFwcGVuZENoaWxkKGxvY0VsZSk7XG5cbiAgICAgICAgZG9tRWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNob3dEZXRhaWxzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuZG9tRWxlID0gZG9tRWxlO1xuICAgIH1cblxuICAgIHNob3dEZXRhaWxzKCl7XG4gICAgICAgIGNvbnN0IHN1cGVyUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qb2ItcG9zdHMtc3VjY2Vzc1wiKTtcblxuICAgICAgICBjb25zdCBwYXJlbnRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpvYi1kZXNjLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHBhcmVudEVsZSl7XG4gICAgICAgICAgICBzdXBlclBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnRFbGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBqb2JEZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgam9iRGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJqb2ItZGVzYy1jb250YWluZXJcIjtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgICAgIGpvYkRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGNvbXBFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wRWxlLmlubmVyVGV4dCA9IGAke3RoaXMuY29tcGFueU5hbWV9YFxuICAgICAgICBqb2JEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wRWxlKTtcblxuICAgICAgICBjb25zdCBsb2NFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NFbGUuaW5uZXJUZXh0ID0gYCR7dGhpcy5sb2NhdGlvbn0oJHt0aGlzLndvcmtUeXBlfSlgXG4gICAgICAgIGpvYkRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY0VsZSk7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICAgIGxldCBsaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVmlldyBQb3N0XCIpXG4gICAgICAgIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xuICAgICAgICBsaW5rLmhyZWYgPSB0aGlzLmpvYlBvc3RpbmdVcmw7XG4gICAgICAgIGxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgICAgICBqb2JEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcblxuICAgICAgICBjb25zdCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIilcbiAgICAgICAgam9iRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobGluZWJyZWFrKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7dGhpcy5kZXNjcmlwdGlvbn1gXG4gICAgICAgIGpvYkRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBzdXBlclBhcmVudC5hcHBlbmRDaGlsZChqb2JEZXNjcmlwdGlvbkNvbnRhaW5lcilcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiam9iQ2FyZCIsImNvbnN0cnVjdG9yIiwiam9iUG9zdCIsImpvYklkIiwiY29tcGFueU5hbWUiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwid29ya1R5cGUiLCJsb2NhdGlvbiIsImpvYlBvc3RpbmdVcmwiLCJjcmVhdGVFbGVtZW50IiwiZG9tRWxlIiwiZG9jdW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb21wRWxlIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJsb2NFbGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd0RldGFpbHMiLCJiaW5kIiwic3VwZXJQYXJlbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlIiwicmVtb3ZlQ2hpbGQiLCJqb2JEZXNjcmlwdGlvbkNvbnRhaW5lciIsImNsYXNzTmFtZSIsImhlYWRpbmciLCJsaW5rIiwibGlua1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImhyZWYiLCJ0YXJnZXQiLCJsaW5lYnJlYWsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/job_card.js\n");

/***/ }),

/***/ "./src/job_posts.js":
/*!**************************!*\
  !*** ./src/job_posts.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   jobPosts: function() { return /* binding */ jobPosts; }\n/* harmony export */ });\n/* harmony import */ var _job_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job_card */ \"./src/job_card.js\");\n\nclass jobPosts {\n  constructor(titleInput) {\n    this.titleInput = titleInput;\n    this.jobPostsSuccess = document.querySelector(\".job-posts-success\");\n    this.jobPostsFaliure = document.querySelector(\".job-posts-failure\");\n    this.getJobs().then(this.render.bind(this));\n  }\n  async getJobs() {\n    const res = await fetch(\"../src/data/job_postings.json\");\n    this.jobPosts = await res.json();\n    return;\n  }\n  render() {\n    this.jobs = [];\n    while (this.jobPostsSuccess.firstChild) {\n      this.jobPostsSuccess.removeChild(this.jobPostsSuccess.firstChild);\n    }\n    for (const [jobId, jobPost] of Object.entries(this.jobPosts)) {\n      let postingsTitle = jobPost['title'].toLowerCase();\n      if (postingsTitle === this.titleInput) {\n        this.jobs.push(jobPost);\n      }\n    }\n    if (!this.jobs.length) {\n      this.jobPostsSuccess.setAttribute(\"hidden\", \"hidden\");\n      this.jobPostsFaliure.removeAttribute(\"hidden\");\n    } else {\n      this.jobPostsFaliure.setAttribute(\"hidden\", \"hidden\");\n      this.jobPostsSuccess.removeAttribute(\"hidden\", \"hidden\");\n      const jobCardsContainer = document.createElement(\"div\");\n      jobCardsContainer.className = \"job-cards-container\";\n      this.jobs = this.jobs.map(jobPost => {\n        const jobCardIns = new _job_card__WEBPACK_IMPORTED_MODULE_0__.jobCard(jobPost);\n        jobCardsContainer.appendChild(jobCardIns.domEle);\n        return jobCardIns;\n      });\n      this.jobPostsSuccess.appendChild(jobCardsContainer);\n      this.jobs[0].showDetails();\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvam9iX3Bvc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFDO0FBRTlCLE1BQU1DLFFBQVE7RUFFakJDLFdBQVdBLENBQUNDLFVBQVUsRUFBQztJQUNuQixJQUFJLENBQUNBLFVBQVUsR0FBR0EsVUFBVTtJQUM1QixJQUFJLENBQUNDLGVBQWUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFDbkUsSUFBSSxDQUFDQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBQ25FLElBQUksQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDL0M7RUFFQSxNQUFNSCxPQUFPQSxDQUFBLEVBQUU7SUFDWCxNQUFNSSxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLCtCQUErQixDQUFDO0lBQ3hELElBQUksQ0FBQ1osUUFBUSxHQUFHLE1BQU1XLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFDaEM7RUFDSjtFQUVBSixNQUFNQSxDQUFBLEVBQUU7SUFDSixJQUFJLENBQUNLLElBQUksR0FBRyxFQUFFO0lBQ2QsT0FBTyxJQUFJLENBQUNYLGVBQWUsQ0FBQ1ksVUFBVSxFQUFFO01BQ3BDLElBQUksQ0FBQ1osZUFBZSxDQUFDYSxXQUFXLENBQUMsSUFBSSxDQUFDYixlQUFlLENBQUNZLFVBQVUsQ0FBQztJQUNyRTtJQUNBLEtBQUssTUFBTSxDQUFDRSxLQUFLLEVBQUVDLE9BQU8sQ0FBQyxJQUFJQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNwQixRQUFRLENBQUMsRUFBRTtNQUMxRCxJQUFJcUIsYUFBYSxHQUFHSCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUNJLFdBQVcsQ0FBQyxDQUFDO01BQ2xELElBQUlELGFBQWEsS0FBSyxJQUFJLENBQUNuQixVQUFVLEVBQUM7UUFDbEMsSUFBSSxDQUFDWSxJQUFJLENBQUNTLElBQUksQ0FBQ0wsT0FBTyxDQUFDO01BQzNCO0lBQ0o7SUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDSixJQUFJLENBQUNVLE1BQU0sRUFBQztNQUNsQixJQUFJLENBQUNyQixlQUFlLENBQUNzQixZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztNQUNyRCxJQUFJLENBQUNuQixlQUFlLENBQUNvQixlQUFlLENBQUMsUUFBUSxDQUFDO0lBQ2xELENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ3BCLGVBQWUsQ0FBQ21CLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO01BQ3JELElBQUksQ0FBQ3RCLGVBQWUsQ0FBQ3VCLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO01BRXhELE1BQU1DLGlCQUFpQixHQUFHdkIsUUFBUSxDQUFDd0IsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUN2REQsaUJBQWlCLENBQUNFLFNBQVMsR0FBRyxxQkFBcUI7TUFFbkQsSUFBSSxDQUFDZixJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUNnQixHQUFHLENBQUVaLE9BQU8sSUFBSztRQUNuQyxNQUFNYSxVQUFVLEdBQUcsSUFBSWhDLDhDQUFPLENBQUNtQixPQUFPLENBQUM7UUFDdkNTLGlCQUFpQixDQUFDSyxXQUFXLENBQUNELFVBQVUsQ0FBQ0UsTUFBTSxDQUFDO1FBQ2hELE9BQU9GLFVBQVU7TUFDckIsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDNUIsZUFBZSxDQUFDNkIsV0FBVyxDQUFDTCxpQkFBaUIsQ0FBQztNQUNuRCxJQUFJLENBQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29CLFdBQVcsQ0FBQyxDQUFDO0lBQzlCO0VBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYi10cmVuZHMvLi9zcmMvam9iX3Bvc3RzLmpzP2RiOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9iQ2FyZCB9IGZyb20gXCIuL2pvYl9jYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBqb2JQb3N0c3tcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlSW5wdXQpe1xuICAgICAgICB0aGlzLnRpdGxlSW5wdXQgPSB0aXRsZUlucHV0O1xuICAgICAgICB0aGlzLmpvYlBvc3RzU3VjY2VzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuam9iLXBvc3RzLXN1Y2Nlc3NcIilcbiAgICAgICAgdGhpcy5qb2JQb3N0c0ZhbGl1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpvYi1wb3N0cy1mYWlsdXJlXCIpXG4gICAgICAgIHRoaXMuZ2V0Sm9icygpLnRoZW4odGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Sm9icygpe1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi4uL3NyYy9kYXRhL2pvYl9wb3N0aW5ncy5qc29uXCIpXG4gICAgICAgIHRoaXMuam9iUG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHRoaXMuam9icyA9IFtdO1xuICAgICAgICB3aGlsZSAodGhpcy5qb2JQb3N0c1N1Y2Nlc3MuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5qb2JQb3N0c1N1Y2Nlc3MucmVtb3ZlQ2hpbGQodGhpcy5qb2JQb3N0c1N1Y2Nlc3MuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBbam9iSWQsIGpvYlBvc3RdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuam9iUG9zdHMpKSB7XG4gICAgICAgICAgICBsZXQgcG9zdGluZ3NUaXRsZSA9IGpvYlBvc3RbJ3RpdGxlJ10udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChwb3N0aW5nc1RpdGxlID09PSB0aGlzLnRpdGxlSW5wdXQpe1xuICAgICAgICAgICAgICAgIHRoaXMuam9icy5wdXNoKGpvYlBvc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5qb2JzLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLmpvYlBvc3RzU3VjY2Vzcy5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB0aGlzLmpvYlBvc3RzRmFsaXVyZS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuam9iUG9zdHNGYWxpdXJlLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIHRoaXMuam9iUG9zdHNTdWNjZXNzLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiLCBcImhpZGRlblwiKTtcblxuICAgICAgICAgICAgY29uc3Qgam9iQ2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBqb2JDYXJkc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImpvYi1jYXJkcy1jb250YWluZXJcIjtcblxuICAgICAgICAgICAgdGhpcy5qb2JzID0gdGhpcy5qb2JzLm1hcCgoam9iUG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpvYkNhcmRJbnMgPSBuZXcgam9iQ2FyZChqb2JQb3N0KTtcbiAgICAgICAgICAgICAgICBqb2JDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChqb2JDYXJkSW5zLmRvbUVsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpvYkNhcmRJbnM7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmpvYlBvc3RzU3VjY2Vzcy5hcHBlbmRDaGlsZChqb2JDYXJkc0NvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmpvYnNbMF0uc2hvd0RldGFpbHMoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiam9iQ2FyZCIsImpvYlBvc3RzIiwiY29uc3RydWN0b3IiLCJ0aXRsZUlucHV0Iiwiam9iUG9zdHNTdWNjZXNzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiam9iUG9zdHNGYWxpdXJlIiwiZ2V0Sm9icyIsInRoZW4iLCJyZW5kZXIiLCJiaW5kIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiam9icyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImpvYklkIiwiam9iUG9zdCIsIk9iamVjdCIsImVudHJpZXMiLCJwb3N0aW5nc1RpdGxlIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwibGVuZ3RoIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiam9iQ2FyZHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwiam9iQ2FyZElucyIsImFwcGVuZENoaWxkIiwiZG9tRWxlIiwic2hvd0RldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/job_posts.js\n");

/***/ }),

/***/ "./src/top_skills.js":
/*!***************************!*\
  !*** ./src/top_skills.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   topSkills: function() { return /* binding */ topSkills; }\n/* harmony export */ });\nclass topSkills {\n  constructor(titleInput) {\n    this.titleInput = titleInput;\n    this.topSkillsSuccessList = document.querySelector(\".top-skills-success\");\n    this.topSkillsFailureList = document.querySelector(\".top-skills-failure\");\n    this.removeChildren(this.topSkillsSuccessList);\n    this.removeChildren(this.topSkillsFailureList);\n    this.getSkills().then(this.handleSkills.bind(this));\n  }\n  async getSkills() {\n    const res = await fetch(\"../src/data/pdl_skills_for_us_software_engineers.json\");\n    this.allSkillsByTitle = await res.json();\n    this.skills = this.allSkillsByTitle[this.titleInput];\n    return;\n  }\n  handleSkills() {\n    if (this.skills) {\n      this.topSkillsFailureList.setAttribute(\"hidden\", \"hidden\");\n      this.showSkillsSuccess();\n    } else {\n      this.topSkillsSuccessList.setAttribute(\"hidden\", \"hidden\");\n      this.showSkillsFailure();\n    }\n  }\n  showSkillsSuccess() {\n    this.topSkillsSuccessList.removeAttribute(\"hidden\");\n    const label = document.createElement('label');\n    label.innerText = `Here are some of the skills for ${this.titleInput}`;\n    this.topSkillsSuccessList.append(label);\n    this.skills['skills'].forEach(element => {\n      const liItem = document.createElement(\"li\");\n      liItem.innerText = element['skill'];\n      this.topSkillsSuccessList.append(liItem);\n    });\n  }\n  removeChildren(element) {\n    while (element.firstChild) {\n      element.removeChild(element.firstChild);\n    }\n  }\n  showSkillsFailure() {\n    this.topSkillsFailureList.innerText = `Sorry we couldnt find any skills for the given title ..`;\n    this.topSkillsFailureList.removeAttribute(\"hidden\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9wX3NraWxscy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUztFQUVsQkMsV0FBV0EsQ0FBQ0MsVUFBVSxFQUFDO0lBQ25CLElBQUksQ0FBQ0EsVUFBVSxHQUFHQSxVQUFVO0lBQzVCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0lBQ3pFLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0lBQ3pFLElBQUksQ0FBQ0UsY0FBYyxDQUFDLElBQUksQ0FBQ0osb0JBQW9CLENBQUM7SUFDOUMsSUFBSSxDQUFDSSxjQUFjLENBQUMsSUFBSSxDQUFDRCxvQkFBb0IsQ0FBQztJQUU5QyxJQUFJLENBQUNFLFNBQVMsQ0FBQyxDQUFDLENBQ1hDLElBQUksQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzNDO0VBRUEsTUFBTUgsU0FBU0EsQ0FBQSxFQUFFO0lBQ2IsTUFBTUksR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyx1REFBdUQsQ0FBQztJQUNoRixJQUFJLENBQUNDLGdCQUFnQixHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUM7SUFDeEMsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDRixnQkFBZ0IsQ0FBQyxJQUFJLENBQUNaLFVBQVUsQ0FBQztJQUNwRDtFQUNKO0VBRUFRLFlBQVlBLENBQUEsRUFBRTtJQUNWLElBQUksSUFBSSxDQUFDTSxNQUFNLEVBQUM7TUFDWixJQUFJLENBQUNWLG9CQUFvQixDQUFDVyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztNQUMxRCxJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7SUFDNUIsQ0FBQyxNQUFLO01BQ0YsSUFBSSxDQUFDZixvQkFBb0IsQ0FBQ2MsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7TUFDMUQsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCO0VBQ0o7RUFFQUQsaUJBQWlCQSxDQUFBLEVBQUU7SUFDZixJQUFJLENBQUNmLG9CQUFvQixDQUFDaUIsZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUNuRCxNQUFNQyxLQUFLLEdBQUdqQixRQUFRLENBQUNrQixhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzdDRCxLQUFLLENBQUNFLFNBQVMsR0FBSSxtQ0FBa0MsSUFBSSxDQUFDckIsVUFBVyxFQUFDO0lBQ3RFLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNxQixNQUFNLENBQUNILEtBQUssQ0FBQztJQUV2QyxJQUFJLENBQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQ1MsT0FBTyxDQUFDQyxPQUFPLElBQUk7TUFDckMsTUFBTUMsTUFBTSxHQUFHdkIsUUFBUSxDQUFDa0IsYUFBYSxDQUFDLElBQUksQ0FBQztNQUMzQ0ssTUFBTSxDQUFDSixTQUFTLEdBQUdHLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDbkMsSUFBSSxDQUFDdkIsb0JBQW9CLENBQUNxQixNQUFNLENBQUNHLE1BQU0sQ0FBQztJQUM1QyxDQUFDLENBQUM7RUFDTjtFQUVBcEIsY0FBY0EsQ0FBQ21CLE9BQU8sRUFBQztJQUNuQixPQUFPQSxPQUFPLENBQUNFLFVBQVUsRUFBRTtNQUN2QkYsT0FBTyxDQUFDRyxXQUFXLENBQUNILE9BQU8sQ0FBQ0UsVUFBVSxDQUFDO0lBQzNDO0VBQ0o7RUFFQVQsaUJBQWlCQSxDQUFBLEVBQUU7SUFDZixJQUFJLENBQUNiLG9CQUFvQixDQUFDaUIsU0FBUyxHQUFJLHlEQUF3RDtJQUMvRixJQUFJLENBQUNqQixvQkFBb0IsQ0FBQ2MsZUFBZSxDQUFDLFFBQVEsQ0FBQztFQUN2RDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXRyZW5kcy8uL3NyYy90b3Bfc2tpbGxzLmpzPzUzZGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIHRvcFNraWxsc3tcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlSW5wdXQpe1xuICAgICAgICB0aGlzLnRpdGxlSW5wdXQgPSB0aXRsZUlucHV0O1xuICAgICAgICB0aGlzLnRvcFNraWxsc1N1Y2Nlc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3Atc2tpbGxzLXN1Y2Nlc3NcIik7XG4gICAgICAgIHRoaXMudG9wU2tpbGxzRmFpbHVyZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1za2lsbHMtZmFpbHVyZVwiKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZHJlbih0aGlzLnRvcFNraWxsc1N1Y2Nlc3NMaXN0KTtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZHJlbih0aGlzLnRvcFNraWxsc0ZhaWx1cmVMaXN0KTtcblxuICAgICAgICB0aGlzLmdldFNraWxscygpXG4gICAgICAgICAgICAudGhlbih0aGlzLmhhbmRsZVNraWxscy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTa2lsbHMoKXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIuLi9zcmMvZGF0YS9wZGxfc2tpbGxzX2Zvcl91c19zb2Z0d2FyZV9lbmdpbmVlcnMuanNvblwiKTtcbiAgICAgICAgdGhpcy5hbGxTa2lsbHNCeVRpdGxlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgdGhpcy5za2lsbHMgPSB0aGlzLmFsbFNraWxsc0J5VGl0bGVbdGhpcy50aXRsZUlucHV0XTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZVNraWxscygpe1xuICAgICAgICBpZiAodGhpcy5za2lsbHMpe1xuICAgICAgICAgICAgdGhpcy50b3BTa2lsbHNGYWlsdXJlTGlzdC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJoaWRkZW5cIilcbiAgICAgICAgICAgIHRoaXMuc2hvd1NraWxsc1N1Y2Nlc3MoKTsgXG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRoaXMudG9wU2tpbGxzU3VjY2Vzc0xpc3Quc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgdGhpcy5zaG93U2tpbGxzRmFpbHVyZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1NraWxsc1N1Y2Nlc3MoKXtcbiAgICAgICAgdGhpcy50b3BTa2lsbHNTdWNjZXNzTGlzdC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBgSGVyZSBhcmUgc29tZSBvZiB0aGUgc2tpbGxzIGZvciAke3RoaXMudGl0bGVJbnB1dH1gXG4gICAgICAgIHRoaXMudG9wU2tpbGxzU3VjY2Vzc0xpc3QuYXBwZW5kKGxhYmVsKVxuICAgIFxuICAgICAgICB0aGlzLnNraWxsc1snc2tpbGxzJ10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICAgICAgbGlJdGVtLmlubmVyVGV4dCA9IGVsZW1lbnRbJ3NraWxsJ107XG4gICAgICAgICAgICB0aGlzLnRvcFNraWxsc1N1Y2Nlc3NMaXN0LmFwcGVuZChsaUl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZHJlbihlbGVtZW50KXtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1NraWxsc0ZhaWx1cmUoKXtcbiAgICAgICAgdGhpcy50b3BTa2lsbHNGYWlsdXJlTGlzdC5pbm5lclRleHQgPSBgU29ycnkgd2UgY291bGRudCBmaW5kIGFueSBza2lsbHMgZm9yIHRoZSBnaXZlbiB0aXRsZSAuLmBcbiAgICAgICAgdGhpcy50b3BTa2lsbHNGYWlsdXJlTGlzdC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gICAgfSBcbn1cbiJdLCJuYW1lcyI6WyJ0b3BTa2lsbHMiLCJjb25zdHJ1Y3RvciIsInRpdGxlSW5wdXQiLCJ0b3BTa2lsbHNTdWNjZXNzTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvcFNraWxsc0ZhaWx1cmVMaXN0IiwicmVtb3ZlQ2hpbGRyZW4iLCJnZXRTa2lsbHMiLCJ0aGVuIiwiaGFuZGxlU2tpbGxzIiwiYmluZCIsInJlcyIsImZldGNoIiwiYWxsU2tpbGxzQnlUaXRsZSIsImpzb24iLCJza2lsbHMiLCJzZXRBdHRyaWJ1dGUiLCJzaG93U2tpbGxzU3VjY2VzcyIsInNob3dTa2lsbHNGYWlsdXJlIiwicmVtb3ZlQXR0cmlidXRlIiwibGFiZWwiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJsaUl0ZW0iLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/top_skills.js\n");

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