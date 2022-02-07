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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      template: '#usun'\n    }).then(function (result) {\n      if (result.value) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteurl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire({\n            title: 'Błąd!',\n            text: data.responseJSON.message,\n            icon: data.responseJSON.status,\n            confirmButtonText: 'OK :('\n          });\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0ZW1wbGF0ZSIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkZWxldGV1cmwiLCJkYXRhIiwiZG9uZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsInRpdGxlIiwidGV4dCIsInJlc3BvbnNlSlNPTiIsIm1lc3NhZ2UiLCJpY29uIiwic3RhdHVzIiwiY29uZmlybUJ1dHRvblRleHQiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBWTtBQUNWQSxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEtBQWIsQ0FBbUIsWUFBWTtBQUFBOztBQUUzQkMsSUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsTUFBQUEsUUFBUSxFQUFFO0FBREosS0FBVixFQUVHQyxJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ1osVUFBSUEsTUFBTSxDQUFDQyxLQUFYLEVBQWtCO0FBQ2RQLFFBQUFBLENBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0NDLFVBQUFBLE1BQU0sRUFBRSxRQURUO0FBRUNDLFVBQUFBLEdBQUcsRUFBRUMsU0FBUyxHQUFHWCxDQUFDLENBQUMsS0FBRCxDQUFELENBQVFZLElBQVIsQ0FBYSxJQUFiO0FBRmxCLFNBQVAsRUFJS0MsSUFKTCxDQUlVLFVBQVVELElBQVYsRUFBZ0I7QUFDbEJFLFVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxTQU5MLEVBUUtDLElBUkwsQ0FRVSxVQUFVTCxJQUFWLEVBQWdCO0FBQ2xCVixVQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOZSxZQUFBQSxLQUFLLEVBQUUsT0FERDtBQUVOQyxZQUFBQSxJQUFJLEVBQUVQLElBQUksQ0FBQ1EsWUFBTCxDQUFrQkMsT0FGbEI7QUFHTkMsWUFBQUEsSUFBSSxFQUFFVixJQUFJLENBQUNRLFlBQUwsQ0FBa0JHLE1BSGxCO0FBSU5DLFlBQUFBLGlCQUFpQixFQUFFO0FBSmIsV0FBVjtBQU1ILFNBZkw7QUFnQkg7QUFDSixLQXJCTDtBQXdCSCxHQTFCRDtBQTJCSCxDQTVCQSxDQUFEIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmRlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGVtcGxhdGU6ICcjdXN1bidcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRlbGV0ZXVybCArICQodGhpcykuZGF0YShcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0LFgsSFZCEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBkYXRhLnJlc3BvbnNlSlNPTi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBkYXRhLnJlc3BvbnNlSlNPTi5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0sgOignXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICApXG4gICAgfSk7XG59KTtcbiJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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