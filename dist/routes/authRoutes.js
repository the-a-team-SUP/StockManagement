"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _authValidator = _interopRequireDefault(require("../middlewares/authValidator"));

var _asyncErrorHandler = _interopRequireDefault(require("../helpers/asyncErrorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.post('/signin', _authValidator["default"].signinValidator, (0, _asyncErrorHandler["default"])(_userController["default"].signIn));
var _default = router;
exports["default"] = _default;