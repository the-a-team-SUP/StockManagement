"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productController = _interopRequireDefault(require("../controllers/productController"));

var _isLogged = _interopRequireDefault(require("../middlewares/isLogged"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import AuthValidator from '../middlewares/authValidator';
var router = (0, _express["default"])();
router.post("/products", _isLogged["default"], _productController["default"].createProduct);
var _default = router;
exports["default"] = _default;