"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * The Enlighten Systems API
                                                                                                                                                                                                                                                                                                                                                                                               * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 2.0
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
* Enum class Status.
* @enum {}
* @readonly
*/
var Status = /*#__PURE__*/function () {
  function Status() {
    _classCallCheck(this, Status);
    /**
     * value: "comm"
     * @const
     */
    _defineProperty(this, "comm", "comm");
    /**
     * value: "power"
     * @const
     */
    _defineProperty(this, "power", "power");
    /**
     * value: "meter"
     * @const
     */
    _defineProperty(this, "meter", "meter");
    /**
     * value: "meter_issue"
     * @const
     */
    _defineProperty(this, "meter_issue", "meter_issue");
    /**
     * value: "micro"
     * @const
     */
    _defineProperty(this, "micro", "micro");
    /**
     * value: "battery"
     * @const
     */
    _defineProperty(this, "battery", "battery");
    /**
     * value: "storage_idle"
     * @const
     */
    _defineProperty(this, "storage_idle", "storage_idle");
    /**
     * value: "normal"
     * @const
     */
    _defineProperty(this, "normal", "normal");
  }
  _createClass(Status, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>Status</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Status} The enum <code>Status</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);
  return Status;
}();
exports["default"] = Status;