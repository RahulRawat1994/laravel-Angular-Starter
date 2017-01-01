/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("var app = angular.module('app',['ui.router']);\napp \r\n    .controller('userController',['$scope','$rootScope',function($scope,$rootScope){\r\n        $scope.name=\"Rahul\";\r\n        $scope.email=\"rahul.rawat@walkwel.in\";\r\n    }])\napp \r\n    .config(['$stateProvider','$urlRouterProvider','$locationProvider',\r\n        function($stateProvider,$urlRouterProvider,$locationProvider){\r\n\r\n        \r\n        $urlRouterProvider.otherwise('/');\r\n        $locationProvider.html5Mode(true);\r\n\r\n        $stateProvider\r\n            .state({\r\n                name: 'hello',\r\n                url: '/hello',\r\n                template: '<h3>hello world!</h3>' \r\n            })\r\n            .state({\r\n                name    : 'master',\r\n                url     : '/', \r\n                template : '<h2>sdfsd</h2>',\r\n                controller:'userController'  \r\n            })\r\n            \r\n\r\n    }])\napp \r\n    .service('userService',['$http',function($http){\r\n        \r\n    }])\r\n//# sourceMappingURL=app.js.map\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvanMvYXBwLmpzP2Y1MjYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLFsndWkucm91dGVyJ10pO1xuYXBwIFxyXG4gICAgLmNvbnRyb2xsZXIoJ3VzZXJDb250cm9sbGVyJyxbJyRzY29wZScsJyRyb290U2NvcGUnLGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKXtcclxuICAgICAgICAkc2NvcGUubmFtZT1cIlJhaHVsXCI7XHJcbiAgICAgICAgJHNjb3BlLmVtYWlsPVwicmFodWwucmF3YXRAd2Fsa3dlbC5pblwiO1xyXG4gICAgfV0pXG5hcHAgXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCckdXJsUm91dGVyUHJvdmlkZXInLCckbG9jYXRpb25Qcm92aWRlcicsXHJcbiAgICAgICAgZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyLCRsb2NhdGlvblByb3ZpZGVyKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xyXG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdoZWxsbycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvaGVsbG8nLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8aDM+aGVsbG8gd29ybGQhPC9oMz4nIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSAgICA6ICdtYXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgdXJsICAgICA6ICcvJywgXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA6ICc8aDI+c2Rmc2Q8L2gyPicsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOid1c2VyQ29udHJvbGxlcicgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICB9XSlcbmFwcCBcclxuICAgIC5zZXJ2aWNlKCd1c2VyU2VydmljZScsWyckaHR0cCcsZnVuY3Rpb24oJGh0dHApe1xyXG4gICAgICAgIFxyXG4gICAgfV0pXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5qcy5tYXBcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);