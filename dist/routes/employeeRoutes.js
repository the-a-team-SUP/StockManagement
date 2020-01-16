"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _employeeController = _interopRequireDefault(require("../controllers/employeeController"));

var _authValidator = _interopRequireDefault(require("../middlewares/authValidator"));

var _asyncErrorHandler = _interopRequireDefault(require("../helpers/asyncErrorHandler"));

var _isLogged = _interopRequireDefault(require("../middlewares/isLogged"));

var _isAdmin = _interopRequireDefault(require("../middlewares/isAdmin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.post('/employee', _isLogged["default"], _isAdmin["default"], _authValidator["default"].addEmployeeValidator, (0, _asyncErrorHandler["default"])(_employeeController["default"].addEmployee));
router.patch('/employee/:employee_id/password', _isLogged["default"], _authValidator["default"].EmployeePasswordValidator, (0, _asyncErrorHandler["default"])(_employeeController["default"].updatePassword));
var _default = router;
exports["default"] = _default;