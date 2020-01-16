"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _dbConnect = _interopRequireDefault(require("../config/dbConnect"));

var _category = _interopRequireDefault(require("../models/category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var categoryController =
/*#__PURE__*/
function () {
  function categoryController() {
    _classCallCheck(this, categoryController);
  }

  _createClass(categoryController, null, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var name, createdAt, newCategory;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = req.body.name;
                createdAt = (0, _moment["default"])().format('MMMM Do YYYY, h:mm:ss a');
                _context.next = 4;
                return _dbConnect["default"].query(_category["default"].insertCategory, [name, createdAt]);

              case 4:
                newCategory = _context.sent;

                if (!(newCategory.rowCount === 1)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: 'Category successfully Created',
                  data: newCategory.rows[0]
                }));

              case 7:
                return _context.abrupt("return", res.status(409).json({
                  status: 409,
                  error: 'Category not created'
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);

  return categoryController;
}();

var _default = categoryController;
exports["default"] = _default;