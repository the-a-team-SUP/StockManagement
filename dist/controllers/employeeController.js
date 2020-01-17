"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _authenticate = _interopRequireDefault(require("../helpers/authenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmployeeController =
/*#__PURE__*/
function () {
  function EmployeeController() {
    _classCallCheck(this, EmployeeController);
  }

  _createClass(EmployeeController, null, [{
    key: "addEmployee",
    value: function () {
      var _addEmployee = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var existingEmail, user, _ref, id, names, email, role;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _userModel["default"].emailExists(req.body.email);

              case 2:
                existingEmail = _context.sent;

                if (!(existingEmail.rowCount === 1)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", res.status(409).json({
                  status: 409,
                  error: 'This employee already exists!'
                }));

              case 5:
                user = new _userModel["default"](req.body);
                _context.next = 8;
                return _userModel["default"].createUser(user);

              case 8:
                _ref = _context.sent;
                id = _ref.id;
                names = _ref.names;
                email = _ref.email;
                role = _ref.role;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: 'Employee created successfully',
                  data: {
                    token: _authenticate["default"].generateToken(email, id, role),
                    names: names,
                    email: email,
                    role: role
                  }
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addEmployee(_x, _x2) {
        return _addEmployee.apply(this, arguments);
      }

      return addEmployee;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var newPassword, _ref2, names, email, role;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                newPassword = _authenticate["default"].hashPassword(req.body.password);

                if (!(req.userData.id === parseInt(req.params.employee_id, 10))) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 4;
                return _userModel["default"].updatePassword(req.userData.id, newPassword);

              case 4:
                _ref2 = _context2.sent;
                names = _ref2.names;
                email = _ref2.email;
                role = _ref2.role;
                res.status(200).json({
                  status: 200,
                  message: 'Employee password updated successfully',
                  data: {
                    names: names,
                    email: email,
                    role: role
                  }
                });
                _context2.next = 12;
                break;

              case 11:
                res.status(401).json({
                  status: 401,
                  error: "Unauthorized. \nUnable to update password"
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updatePassword(_x3, _x4) {
        return _updatePassword.apply(this, arguments);
      }

      return updatePassword;
    }()
  }, {
    key: "retrieveEmployees",
    value: function () {
      var _retrieveEmployees = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var employees;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _userModel["default"].allEmployees();

              case 2:
                employees = _context3.sent;
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  data: employees
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function retrieveEmployees(_x5, _x6) {
        return _retrieveEmployees.apply(this, arguments);
      }

      return retrieveEmployees;
    }()
  }]);

  return EmployeeController;
}();

;
var _default = EmployeeController;
exports["default"] = _default;