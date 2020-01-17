"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dbConnect = _interopRequireDefault(require("../config/dbConnect"));

var _queries = _interopRequireDefault(require("../models/queries"));

var _authenticate = _interopRequireDefault(require("../helpers/authenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers.authorization.split(' ')[1];
            decoded = _authenticate["default"].verifyToken(token);
            req.userData = decoded;
            _context.next = 6;
            return _dbConnect["default"].query(_queries["default"].findOneUser, [req.userData.email]);

          case 6:
            user = _context.sent;

            if (!(user.rowCount === 0)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(401).send({
              status: 401,
              error: 'Sign up first please'
            }));

          case 9:
            return _context.abrupt("return", next());

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(401).json({
              status: 401,
              error: 'Auth failed'
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;