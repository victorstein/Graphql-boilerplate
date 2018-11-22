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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/models/user.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  User: _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/models/index.js?");

/***/ }),

/***/ "./src/models/user.js":
/*!****************************!*\
  !*** ./src/models/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  email: {\n    type: String,\n    required: true\n  },\n  name: {\n    type: String,\n    required: true\n  },\n  lastName: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema));\n\n//# sourceURL=webpack:///./src/models/user.js?");

/***/ }),

/***/ "./src/resolvers/index.js":
/*!********************************!*\
  !*** ./src/resolvers/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/resolvers/user.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/resolvers/index.js?");

/***/ }),

/***/ "./src/resolvers/user.js":
/*!*******************************!*\
  !*** ./src/resolvers/user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar pwHash = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pwHash,\n    pwAuth = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pwAuth,\n    jwtRegister = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwtRegister,\n    jwtAuth = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwtAuth;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Query: {\n    user: function () {\n      var _user = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(root, _ref, _ref2, info) {\n        var id, User, token, response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                id = _ref.id;\n                User = _ref2.User, token = _ref2.token;\n                _context.prev = 2;\n\n                if (token) {\n                  _context.next = 5;\n                  break;\n                }\n\n                throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"AuthenticationError\"](\"Unauthenticated\");\n\n              case 5:\n                _context.next = 7;\n                return jwtAuth(token);\n\n              case 7:\n                _context.next = 9;\n                return User.findById(id).exec();\n\n              case 9:\n                response = _context.sent;\n\n                if (response) {\n                  _context.next = 12;\n                  break;\n                }\n\n                throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"ApolloError\"](\"Unable to find a user with the provided ID\");\n\n              case 12:\n                return _context.abrupt(\"return\", response);\n\n              case 15:\n                _context.prev = 15;\n                _context.t0 = _context[\"catch\"](2);\n                throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"ApolloError\"](_context.t0.message);\n\n              case 18:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[2, 15]]);\n      }));\n\n      return function user(_x, _x2, _x3, _x4) {\n        return _user.apply(this, arguments);\n      };\n    }()\n  },\n  Mutation: {\n    signUp: function () {\n      var _signUp = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(root, _ref3, _ref4, info) {\n        var email, name, lastName, password, User, emailInUse, newUser;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                email = _ref3.email, name = _ref3.name, lastName = _ref3.lastName, password = _ref3.password;\n                User = _ref4.User;\n                _context2.prev = 2;\n                _context2.next = 5;\n                return User.findOne({\n                  email: email\n                }).exec();\n\n              case 5:\n                emailInUse = _context2.sent;\n\n                if (!emailInUse) {\n                  _context2.next = 8;\n                  break;\n                }\n\n                throw new Error('Email already in use');\n\n              case 8:\n                _context2.next = 10;\n                return pwHash(password);\n\n              case 10:\n                password = _context2.sent;\n                newUser = new User({\n                  email: email,\n                  name: name,\n                  lastName: lastName,\n                  password: password\n                }); // Save and return user\n\n                return _context2.abrupt(\"return\", newUser.save());\n\n              case 15:\n                _context2.prev = 15;\n                _context2.t0 = _context2[\"catch\"](2);\n                throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"ApolloError\"](\"Error creating new user \".concat(_context2.t0.message));\n\n              case 18:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this, [[2, 15]]);\n      }));\n\n      return function signUp(_x5, _x6, _x7, _x8) {\n        return _signUp.apply(this, arguments);\n      };\n    }(),\n    login: function () {\n      var _login = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(root, _ref5, _ref6, info) {\n        var email, password, User, user, validPw, token;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                email = _ref5.email, password = _ref5.password;\n                User = _ref6.User;\n                _context3.prev = 2;\n                _context3.next = 5;\n                return User.findOne({\n                  email: email\n                }).exec();\n\n              case 5:\n                user = _context3.sent;\n\n                if (user) {\n                  _context3.next = 8;\n                  break;\n                }\n\n                throw new Error('Invalid email or password');\n\n              case 8:\n                _context3.next = 10;\n                return pwAuth(password, user.password);\n\n              case 10:\n                validPw = _context3.sent;\n\n                if (validPw) {\n                  _context3.next = 13;\n                  break;\n                }\n\n                throw new Error('Invalid email or password');\n\n              case 13:\n                _context3.next = 15;\n                return jwtRegister({\n                  id: user['_id']\n                });\n\n              case 15:\n                token = _context3.sent;\n                return _context3.abrupt(\"return\", {\n                  token: token\n                });\n\n              case 19:\n                _context3.prev = 19;\n                _context3.t0 = _context3[\"catch\"](2);\n                throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"AuthenticationError\"](\"Error while Login in \".concat(_context3.t0.message));\n\n              case 22:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this, [[2, 19]]);\n      }));\n\n      return function login(_x9, _x10, _x11, _x12) {\n        return _login.apply(this, arguments);\n      };\n    }()\n  }\n});\n\n//# sourceURL=webpack:///./src/resolvers/user.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ \"./src/resolvers/index.js\");\n/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typeDefs */ \"./src/typeDefs/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee() {\n  var _process$env, PORT, NODE_ENV, DB_URI, DB_NAME, DB_PASS, DB_USER, DB_PORT, User, app, server;\n\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          Object(dotenv__WEBPACK_IMPORTED_MODULE_3__[\"config\"])();\n          _process$env = process.env, PORT = _process$env.PORT, NODE_ENV = \"development\", DB_URI = _process$env.DB_URI, DB_NAME = _process$env.DB_NAME, DB_PASS = _process$env.DB_PASS, DB_USER = _process$env.DB_USER, DB_PORT = _process$env.DB_PORT;\n          User = _models__WEBPACK_IMPORTED_MODULE_7__[\"default\"].User;\n          app = express__WEBPACK_IMPORTED_MODULE_2___default()();\n          app.disable('x-powered-by');\n          _context.next = 8;\n          return mongoose__WEBPACK_IMPORTED_MODULE_6___default.a.connect(\"mongodb://\".concat(DB_USER, \":\").concat(DB_PASS, \"@\").concat(DB_URI, \":\").concat(DB_PORT, \"/\").concat(DB_NAME), {\n            useNewUrlParser: true\n          });\n\n        case 8:\n          server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_1__[\"ApolloServer\"]({\n            typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            playground: NODE_ENV !== 'production',\n            context: function context(_ref2) {\n              var req = _ref2.req;\n              var token = req.headers.authorization || null;\n              return {\n                User: User,\n                token: token\n              };\n            }\n          });\n          server.applyMiddleware({\n            app: app\n          });\n          app.listen({\n            port: PORT\n          }, function () {\n            return console.log(\"\\uD83D\\uDE80 Server ready at http://localhost:\".concat(PORT).concat(server.graphqlPath));\n          });\n          _context.next = 16;\n          break;\n\n        case 13:\n          _context.prev = 13;\n          _context.t0 = _context[\"catch\"](0);\n          console.log(_context.t0);\n\n        case 16:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, this, [[0, 13]]);\n}))();\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/typeDefs/index.js":
/*!*******************************!*\
  !*** ./src/typeDefs/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/typeDefs/user.js\");\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root */ \"./src/typeDefs/root.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _root__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/typeDefs/index.js?");

/***/ }),

/***/ "./src/typeDefs/root.js":
/*!******************************!*\
  !*** ./src/typeDefs/root.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  type Query {\\n    _: String\\n  }\\n\\n  type Mutation {\\n    _: String\\n  }\\n\\n  type Subscription {\\n    _: String\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"gql\"])(_templateObject()));\n\n//# sourceURL=webpack:///./src/typeDefs/root.js?");

/***/ }),

/***/ "./src/typeDefs/user.js":
/*!******************************!*\
  !*** ./src/typeDefs/user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\n  extend type Query {\\n    user(id: ID!): User\\n  }\\n\\n  type token {\\n    token: String\\n  }\\n\\n  extend type Mutation {\\n\\n    signUp(email: String!, name: String!, lastName: String!, password: String!): User\\n\\n    login(email: String!, password: String!): token\\n\\n  }\\n\\n  type User {\\n    id: ID!\\n    email: String!\\n    name: String!\\n    lastName: String!\\n  }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"gql\"])(_templateObject()));\n\n//# sourceURL=webpack:///./src/typeDefs/user.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pwHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pwHash */ \"./src/utils/pwHash.js\");\n/* harmony import */ var _pwAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pwAuth */ \"./src/utils/pwAuth.js\");\n/* harmony import */ var _jwtRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwtRegister */ \"./src/utils/jwtRegister.js\");\n/* harmony import */ var _jwtAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwtAuth */ \"./src/utils/jwtAuth.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  pwHash: _pwHash__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  pwAuth: _pwAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  jwtRegister: _jwtRegister__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  jwtAuth: _jwtAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/jwtAuth.js":
/*!******************************!*\
  !*** ./src/utils/jwtAuth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_1__[\"config\"])();\nvar JWT_SECRET = process.env.JWT_SECRET;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (token) {\n  // Split token from bearer\n  token = token.split(' ')[1];\n  return new Promise(function (resolve, reject) {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, JWT_SECRET, function (err, decoded) {\n      if (err) {\n        reject(err);\n      }\n\n      resolve(decoded);\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/utils/jwtAuth.js?");

/***/ }),

/***/ "./src/utils/jwtRegister.js":
/*!**********************************!*\
  !*** ./src/utils/jwtRegister.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_1__[\"config\"])();\nvar JWT_SECRET = process.env.JWT_SECRET;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (payload) {\n  return new Promise(function (resolve, reject) {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, JWT_SECRET, {\n      expiresIn: '1 day'\n    }, function (err, token) {\n      if (err) {\n        reject(err);\n      }\n\n      resolve(token);\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/utils/jwtRegister.js?");

/***/ }),

/***/ "./src/utils/pwAuth.js":
/*!*****************************!*\
  !*** ./src/utils/pwAuth.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(pw, hash) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n              try {\n                bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.compare(pw, hash).then(function (res) {\n                  resolve(res);\n                });\n              } catch (e) {\n                reject(e);\n              }\n            }));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./src/utils/pwAuth.js?");

/***/ }),

/***/ "./src/utils/pwHash.js":
/*!*****************************!*\
  !*** ./src/utils/pwHash.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (pw) {\n  return new Promise(function (resolve, reject) {\n    bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.hash(pw, 10, function (e, hash) {\n      if (e) {\n        reject(e);\n      }\n\n      resolve(hash);\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/utils/pwHash.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });