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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * The Enphase Commissioning API
                                                                                                                                                                                                                                                                                                                                                                                               * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 4.0
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The SystemParamsEnchargeInner model module.
 * @module model/SystemParamsEnchargeInner
 * @version 4.0
 */
var SystemParamsEnchargeInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemParamsEnchargeInner</code>.
   * @alias module:model/SystemParamsEnchargeInner
   */
  function SystemParamsEnchargeInner() {
    _classCallCheck(this, SystemParamsEnchargeInner);
    SystemParamsEnchargeInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SystemParamsEnchargeInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SystemParamsEnchargeInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemParamsEnchargeInner} obj Optional instance to populate.
     * @return {module:model/SystemParamsEnchargeInner} The populated <code>SystemParamsEnchargeInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemParamsEnchargeInner();
        if (data.hasOwnProperty('envoy_serial_number')) {
          obj['envoy_serial_number'] = _ApiClient["default"].convertToType(data['envoy_serial_number'], 'String');
        }
        if (data.hasOwnProperty('encharge_serial_numbers')) {
          obj['encharge_serial_numbers'] = _ApiClient["default"].convertToType(data['encharge_serial_numbers'], ['String']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SystemParamsEnchargeInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SystemParamsEnchargeInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['envoy_serial_number'] && !(typeof data['envoy_serial_number'] === 'string' || data['envoy_serial_number'] instanceof String)) {
        throw new Error("Expected the field `envoy_serial_number` to be a primitive type in the JSON string but got " + data['envoy_serial_number']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['encharge_serial_numbers'])) {
        throw new Error("Expected the field `encharge_serial_numbers` to be an array in the JSON data but got " + data['encharge_serial_numbers']);
      }
      return true;
    }
  }]);
  return SystemParamsEnchargeInner;
}();
/**
 * Envoy serial number.
 * @member {String} envoy_serial_number
 */
SystemParamsEnchargeInner.prototype['envoy_serial_number'] = undefined;

/**
 * Encharge serial numbers.
 * @member {Array.<String>} encharge_serial_numbers
 */
SystemParamsEnchargeInner.prototype['encharge_serial_numbers'] = undefined;
var _default = SystemParamsEnchargeInner;
exports["default"] = _default;