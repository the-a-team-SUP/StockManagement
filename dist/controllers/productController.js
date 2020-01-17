"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _productModel = _interopRequireDefault(require("../models/productModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductControler =
/*#__PURE__*/
function () {
  function ProductControler() {
    _classCallCheck(this, ProductControler);
  }

  _createClass(ProductControler, null, [{
    key: "createProduct",
    value: function () {
      var _createProduct = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var p, addedProduct;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req.body.employee_id = req.userData.id;
                p = new _productModel["default"](req.body);
                console.log(p);
                _context.next = 5;
                return _productModel["default"].addProduct(p);

              case 5:
                addedProduct = _context.sent;

                if (!addedProduct) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", res.json({
                  status: 201,
                  message: "Product Created Successffully",
                  data: addedProduct
                }).status(201));

              case 8:
                return _context.abrupt("return", res.status(500).json({
                  status: 500,
                  message: "failed to save product"
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createProduct(_x, _x2) {
        return _createProduct.apply(this, arguments);
      }

      return createProduct;
    }()
  }]);

  return ProductControler;
}();

var _default = ProductControler;
exports["default"] = _default;