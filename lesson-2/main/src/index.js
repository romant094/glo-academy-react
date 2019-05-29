"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _employers = _interopRequireDefault(require("./employers"));

var _sponsors = require("./sponsors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Business =
/*#__PURE__*/
function () {
  function Business(owner) {
    var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Victor';
    var cash = arguments.length > 2 ? arguments[2] : undefined;
    var emp = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Business);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  _createClass(Business, [{
    key: "showInfo",
    value: function showInfo() {
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp));
      console.log('And we have sponsors: ');
      console.log([].concat(_toConsumableArray(_sponsors.eu), _toConsumableArray(_sponsors.rus), ['unexpected sponsor']).join(', '));
      console.log("Note. Be careful with ".concat(_sponsors.srl, ". It's a huge risk."));
    }
  }]);

  return Business;
}();

var business = new Business('Sam', undefined, _sponsors.money, _employers.default);
business.showInfo();