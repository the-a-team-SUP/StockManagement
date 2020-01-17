"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addProduct = function addProduct(req, res, next) {
  var fields = _joi["default"].object({
    name: _joi["default"].string().strict().trim().required(),
    quantity: _joi["default"].string().strict().trim().required(),
    description: _joi["default"].string().strict().trim().required().email()
  });

  var output = fields.validate(req.body);

  if (output.error != null) {
    return res.status(400).json({
      status: 400,
      error: "".concat(output.error.details[0].message)
    });
  }

  next();
};

var _default = addProduct;
exports["default"] = _default;