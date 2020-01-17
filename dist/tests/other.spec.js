"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

describe('Endpoint /', function () {
  it("should welcome a users", function (done) {
    _chai["default"].request(_index["default"]).get("/").end(function (err, res) {
      res.should.have.status(200);
      res.body.should.have.property("message", "Welcome to Stock Management App");
      done();
    });
  });
  it("should not allow wrong urls", function (done) {
    _chai["default"].request(_index["default"]).get("/anywrongurl/").end(function (err, res) {
      res.should.have.status(404);
      res.body.should.have.property("error", "Endpoint not found");
      done();
    });
  });
});