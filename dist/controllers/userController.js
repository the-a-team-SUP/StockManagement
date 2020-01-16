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

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "signIn",
    value: function () {
      var _signIn = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var doesExist, pswMatch, _doesExist$rows$, id, names, email, role;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _userModel["default"].emailExists(req.body.email);

              case 2:
                doesExist = _context.sent;

                if (!(doesExist.rowCount === 0)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", res.status(401).json({
                  status: 401,
                  error: 'Sign up first please'
                }));

              case 5:
                pswMatch = _authenticate["default"].checkPassword(req.body.password, doesExist.rows[0].password);

                if (!pswMatch) {
                  _context.next = 9;
                  break;
                }

                _doesExist$rows$ = doesExist.rows[0], id = _doesExist$rows$.id, names = _doesExist$rows$.names, email = _doesExist$rows$.email, role = _doesExist$rows$.role;
                return _context.abrupt("return", res.status(200).json({
                  status: 200,
                  message: 'User is successfully logged in',
                  data: {
                    token: _authenticate["default"].generateToken(email, id, role),
                    names: names,
                    email: email,
                    role: role
                  }
                }));

              case 9:
                return _context.abrupt("return", res.status(401).json({
                  status: 401,
                  error: 'Invalid credentials'
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function signIn(_x, _x2) {
        return _signIn.apply(this, arguments);
      }

      return signIn;
    }()
  }]);

  return UserController;
}();

;
var _default = UserController;
exports["default"] = _default;