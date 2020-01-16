"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _morgan = _interopRequireDefault(require("morgan"));

var _allRoutes = _interopRequireDefault(require("./routes/allRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});
app.use('/api/v1', _allRoutes["default"]);
app.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to Stock Management App'
  });
});
app.use(function (req, res) {
  res.status(404);
  res.json({
    status: 404,
    error: 'Endpoint not found'
  });
});
app.listen(port, function () {
  process.stdout.write("Stock Management App running on ".concat(port, "\n"));
});
var _default = app;
exports["default"] = _default;