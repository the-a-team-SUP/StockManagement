"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

var _mochaAsyncFunc = _interopRequireDefault(require("../helpers/mochaAsyncFunc"));

var _authData = _interopRequireDefault(require("./testData/authData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var expect = _chai["default"].expect;

_chai["default"].use(_chaiHttp["default"]);

var savedUsers = _authData["default"].savedUsers;
describe('Endpoint /api/v1/auth/login', function () {
  it("should signin a user with an account", (0, _mochaAsyncFunc["default"])(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _chai["default"].request(_index["default"]).post("/api/v1/auth/login").send({
              email: savedUsers[0].email,
              password: savedUsers[0].password
            });

          case 2:
            res = _context.sent;
            expect(res.body.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.data).to.be.an('object');
            expect(res.body.data.token).to.be.a('string');

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))));
});