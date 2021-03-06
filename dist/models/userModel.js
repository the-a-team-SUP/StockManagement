"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authenticate = _interopRequireDefault(require("../helpers/authenticate"));

var _dbConnect = _interopRequireDefault(require("../config/dbConnect"));

var _queries = _interopRequireDefault(require("./queries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(_ref) {
    var names = _ref.names,
        email = _ref.email,
        status = _ref.status,
        password = _ref.password,
        role = _ref.role;

    _classCallCheck(this, User);

    this.names = names;
    this.email = email;
    this.status = status;
    this.role = role;
    this.password = _authenticate["default"].hashPassword(password);
    this.createdOn = new Date();
  }

  _createClass(User, null, [{
    key: "emailExists",
    value: function emailExists(email) {
      return _dbConnect["default"].query(_queries["default"].findOneUser, [email]);
    }
  }, {
    key: "idExists",
    value: function idExists(id) {
      return _dbConnect["default"].query(_queries["default"].findUserById, [id]);
    }
  }, {
    key: "createUser",
    value: function () {
      var _createUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(user) {
        var addedUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _dbConnect["default"].query(_queries["default"].addUser, [user.names, user.email, user.status, user.role, user.password, user.createdOn]);

              case 2:
                addedUser = _context.sent;
                return _context.abrupt("return", addedUser.rows[0]);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createUser(_x) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id, password) {
        var updatedUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _dbConnect["default"].query(_queries["default"].updatePassword, [password, id]);

              case 2:
                updatedUser = _context2.sent;
                return _context2.abrupt("return", updatedUser.rows[0]);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updatePassword(_x2, _x3) {
        return _updatePassword.apply(this, arguments);
      }

      return updatePassword;
    }()
  }, {
    key: "allEmployees",
    value: function () {
      var _allEmployees = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _ref2, rows;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _dbConnect["default"].query(_queries["default"].findAllEmployees);

              case 2:
                _ref2 = _context3.sent;
                rows = _ref2.rows;
                return _context3.abrupt("return", rows);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function allEmployees() {
        return _allEmployees.apply(this, arguments);
      }

      return allEmployees;
    }()
  }]);

  return User;
}();

var _default = User;
exports["default"] = _default;