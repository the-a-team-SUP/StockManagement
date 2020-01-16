"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dbConnect = _interopRequireDefault(require("../config/dbConnect"));

var _queries = _interopRequireDefault(require("./queries"));

var _authenticate = _interopRequireDefault(require("../helpers/authenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dummyUsers = [{
  names: 'Josue Byiringiro',
  email: 'josue@gmail.com',
  status: 'Active',
  role: 'Admin',
  password: _authenticate["default"].hashPassword('12345678'),
  createdOn: new Date()
}, {
  names: 'Karen Giramata',
  email: 'karen@gmail.com',
  status: 'Active',
  role: 'Employee',
  password: _authenticate["default"].hashPassword('12345678'),
  createdOn: new Date()
}];

var addTables =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _dbConnect["default"].query(_queries["default"].addUser, [dummyUsers[0].names, dummyUsers[0].email, dummyUsers[0].status, dummyUsers[0].role, dummyUsers[0].password, dummyUsers[0].createdOn]);

          case 2:
            _context.next = 4;
            return _dbConnect["default"].query(_queries["default"].addUser, [dummyUsers[1].names, dummyUsers[1].email, dummyUsers[1].status, dummyUsers[1].role, dummyUsers[1].password, dummyUsers[1].createdOn]);

          case 4:
            process.stdout.write("Two users added successfully\n");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addTables() {
    return _ref.apply(this, arguments);
  };
}();

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _dbConnect["default"].query(addTables);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))()["catch"](function (error) {
  return process.stdout.write("".concat(error, "\n"));
});

var _default = addTables;
exports["default"] = _default;