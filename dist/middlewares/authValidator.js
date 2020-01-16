"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthValidation =
/*#__PURE__*/
function () {
  function AuthValidation() {
    _classCallCheck(this, AuthValidation);
  }

  _createClass(AuthValidation, null, [{
    key: "signinValidator",
    value: function signinValidator(req, res, next) {
      var Schema = _joi["default"].object().keys({
        email: _joi["default"].string().email().label('Email').trim().required(),
        password: _joi["default"].string().min(5).regex(/^[a-zA-Z0-9]{3,30}$/).label('Password').trim().required()
      });

      var userChecker = {
        email: req.body.email,
        password: req.body.password
      };
      var result = Schema.validate(userChecker, {
        abortEarly: false
      });
      var valid = result.error == null;

      if (valid) {
        return next();
      }

      var details = result.error.details;
      var message = details.map(function (i) {
        return i.message.replace(/"/g, '');
      }).join(',');
      return res.status(400).json({
        status: 400,
        error: message
      });
    }
  }, {
    key: "addEmployeeValidator",
    value: function addEmployeeValidator(req, res, next) {
      var Schema = _joi["default"].object().keys({
        createdOn: _joi["default"].date().required(),
        names: _joi["default"].string().min(3).max(40).label('Names').trim().required(),
        email: _joi["default"].string().email().label('Email').trim().required(),
        status: _joi["default"].string().min(3).max(40).label('Status').trim().required(),
        role: _joi["default"].string().min(3).max(40).label('Role').trim().required(),
        password: _joi["default"].string().label('Password').trim().required()
      });

      var user = new _userModel["default"](req.body);
      var result = Schema.validate(user, {
        abortEarly: false
      });
      var valid = result.error == null;

      if (valid) {
        return next();
      }

      var details = result.error.details;
      var message = details.map(function (i) {
        return i.message.replace(/"/g, '');
      }).join(', ');
      return res.status(400).json({
        status: 400,
        error: message
      });
    }
  }]);

  return AuthValidation;
}();

var _default = AuthValidation;
exports["default"] = _default;