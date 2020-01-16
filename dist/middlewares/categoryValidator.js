"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createCategory = function createCategory(req, res, next) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().trim().required()
  });

  var output = schema.validate(req.body);

  if (output.error != null) {
    return res.status(400).json({
      status: 400,
      error: "".concat(output.error.details[0].message)
    });
  }

  next();
};

var _default = {
  createCategory: createCategory
};
exports["default"] = _default;