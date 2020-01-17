"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authRoutes = _interopRequireDefault(require("./authRoutes"));

var _employeeRoutes = _interopRequireDefault(require("./employeeRoutes"));

var _productRoutes = _interopRequireDefault(require("./productRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.use(_authRoutes["default"]);
router.use(_employeeRoutes["default"]);
router.use(_productRoutes["default"]);
var _default = router;
exports["default"] = _default;