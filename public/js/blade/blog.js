(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/blade/blog"],{

/***/ "./resources/js/blade/blog.js":
/*!************************************!*\
  !*** ./resources/js/blade/blog.js ***!
  \************************************/
/***/ (() => {

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

var initializeEvents = function initializeEvents() {
  var getPost = $(".single-post-content");

  if (getPost.length > 0) {
    var text = decodeHtml(getPost[0].innerHTML);
    $(getPost).remove();
    $(".single-post-output").html(text);
  }

  var getDate = $(".single-post-date-input");

  if (getDate.length > 0) {
    var date = $(getDate).text();
    var formattedDate = new Date(date).toLocaleDateString();
    $(getDate).remove();
    $(".single-post-date-output").text(formattedDate);
  }
};

$(function () {
  initializeEvents();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/blade/blog.js"));
/******/ }
]);