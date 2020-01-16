"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _categoryController = _interopRequireDefault(require("../controllers/categoryController"));

var _authValidator = _interopRequireDefault(require("../middlewares/authValidator"));

var _categoryValidator = _interopRequireDefault(require("../middlewares/categoryValidator"));

var _asyncErrorHandler = _interopRequireDefault(require("../helpers/asyncErrorHandler"));

var _isLogged = _interopRequireDefault(require("../middlewares/isLogged"));

var _isAdmin = _interopRequireDefault(require("../middlewares/isAdmin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.post('/signin', _authValidator["default"].signinValidator, (0, _asyncErrorHandler["default"])(_userController["default"].signIn));
router.post('/categories', _isLogged["default"], _isAdmin["default"], _categoryValidator["default"].createCategory, (0, _asyncErrorHandler["default"])(_categoryController["default"].create));
var _default = router;
exports["default"] = _default;