/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete_user').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      template: '#usun_usera'\n    }).then(function (result) {\n      if (result.value) {\n        $.ajax({\n          method: \"DELETE\",\n          url: $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire({\n            title: 'Błąd!',\n            text: data.responseJSON.message,\n            icon: data.responseJSON.status,\n            confirmButtonText: 'OK :('\n          });\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0ZW1wbGF0ZSIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiZG9uZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsInRpdGxlIiwidGV4dCIsInJlc3BvbnNlSlNPTiIsIm1lc3NhZ2UiLCJpY29uIiwic3RhdHVzIiwiY29uZmlybUJ1dHRvblRleHQiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBWTtBQUNWQSxFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCQyxLQUFsQixDQUF3QixZQUFZO0FBQUE7O0FBRWhDQyxJQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxNQUFBQSxRQUFRLEVBQUU7QUFESixLQUFWLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVk7QUFDWixVQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDZFAsUUFBQUEsQ0FBQyxDQUFDUSxJQUFGLENBQU87QUFDQ0MsVUFBQUEsTUFBTSxFQUFFLFFBRFQ7QUFFQ0MsVUFBQUEsR0FBRyxFQUFFVixDQUFDLENBQUMsS0FBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxJQUFiO0FBRk4sU0FBUCxFQUlLQyxJQUpMLENBSVUsVUFBVUQsSUFBVixFQUFnQjtBQUNsQkUsVUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNILFNBTkwsRUFRS0MsSUFSTCxDQVFVLFVBQVVMLElBQVYsRUFBZ0I7QUFDbEJULFVBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05jLFlBQUFBLEtBQUssRUFBRSxPQUREO0FBRU5DLFlBQUFBLElBQUksRUFBRVAsSUFBSSxDQUFDUSxZQUFMLENBQWtCQyxPQUZsQjtBQUdOQyxZQUFBQSxJQUFJLEVBQUVWLElBQUksQ0FBQ1EsWUFBTCxDQUFrQkcsTUFIbEI7QUFJTkMsWUFBQUEsaUJBQWlCLEVBQUU7QUFKYixXQUFWO0FBTUgsU0FmTDtBQWdCSDtBQUNKLEtBckJMO0FBd0JILEdBMUJEO0FBMkJILENBNUJBLENBQUQiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuZGVsZXRlX3VzZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnI3VzdW5fdXNlcmEnXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmRhdGEoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCxYLEhWQhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZGF0YS5yZXNwb25zZUpTT04uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LIDooJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgKVxuICAgIH0pO1xufSk7XG4iXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;