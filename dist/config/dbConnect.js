"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var pool;

if (process.env.NODE_ENV === 'isTesting') {
  pool = new _pg.Pool({
    connectionString: process.env.DATABASE_URL_TEST
  });
} else {
  pool = new _pg.Pool({
    connectionString: process.env.DATABASE_URL
  });
  console.log('connected');
}

var _default = pool;
exports["default"] = _default;