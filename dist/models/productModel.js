"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dbConnect = _interopRequireDefault(require("../config/dbConnect"));

var _queries = _interopRequireDefault(require("./queries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var product =
/*#__PURE__*/
function () {
  function product(_ref) {
    var employee_id = _ref.employee_id,
        category_id = _ref.category_id,
        name = _ref.name,
        quantity = _ref.quantity,
        description = _ref.description;

    _classCallCheck(this, product);

    this.employee_id = employee_id;
    this.category_id = category_id;
    this.name = name;
    this.quantity = quantity;
    this.description = description;
    this.createdAt = new Date();
  }

  _createClass(product, null, [{
    key: "addProduct",
    value: function () {
      var _addProduct = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(pdt) {
        var addedProduct;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _dbConnect["default"].query(_queries["default"].addProduct, [pdt.employee_id, pdt.category_id, pdt.name, pdt.quantity, pdt.description, pdt.createdAt]);

              case 2:
                addedProduct = _context.sent;
                return _context.abrupt("return", addedProduct.rows[0]);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addProduct(_x) {
        return _addProduct.apply(this, arguments);
      }

      return addProduct;
    }()
  }]);

  return product;
}();

var _default = product;
exports["default"] = _default;