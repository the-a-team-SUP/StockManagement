"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv["default"].config();

var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: "generateToken",
    value: function generateToken(email, id, role) {
      return _jsonwebtoken["default"].sign({
        email: email,
        id: id,
        role: role
      }, process.env.KEY);
    }
  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      return _jsonwebtoken["default"].verify(token, process.env.KEY);
    }
  }, {
    key: "hashPassword",
    value: function hashPassword(password) {
      return _bcrypt["default"].hashSync(password, 10);
    }
  }, {
    key: "checkPassword",
    value: function checkPassword(plainPassword, hashedPassword) {
      return _bcrypt["default"].compareSync(plainPassword, hashedPassword);
    }
  }]);

  return Auth;
}();

var _default = Auth;
exports["default"] = _default;