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
 * The UnprocessableEntityError model module.
 * @module model/UnprocessableEntityError
 * @version 2.0
 */
var UnprocessableEntityError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnprocessableEntityError</code>.
   * @alias module:model/UnprocessableEntityError
   */
  function UnprocessableEntityError() {
    _classCallCheck(this, UnprocessableEntityError);
    UnprocessableEntityError.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UnprocessableEntityError, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>UnprocessableEntityError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnprocessableEntityError} obj Optional instance to populate.
     * @return {module:model/UnprocessableEntityError} The populated <code>UnprocessableEntityError</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnprocessableEntityError();
        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }
        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
        if (data.hasOwnProperty('errorMessages')) {
          obj['errorMessages'] = _ApiClient["default"].convertToType(data['errorMessages'], ['String']);
        }
        if (data.hasOwnProperty('start')) {
          obj['start'] = _ApiClient["default"].convertToType(data['start'], 'Date');
        }
        if (data.hasOwnProperty('end')) {
          obj['end'] = _ApiClient["default"].convertToType(data['end'], 'Date');
        }
        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Number');
        }
        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }
        if (data.hasOwnProperty('first_interval')) {
          obj['first_interval'] = _ApiClient["default"].convertToType(data['first_interval'], 'Number');
        }
        if (data.hasOwnProperty('last_interval')) {
          obj['last_interval'] = _ApiClient["default"].convertToType(data['last_interval'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UnprocessableEntityError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UnprocessableEntityError</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
        throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
      }
      // ensure the json data is a string
      if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
        throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['errorMessages'])) {
        throw new Error("Expected the field `errorMessages` to be an array in the JSON data but got " + data['errorMessages']);
      }
      return true;
    }
  }]);
  return UnprocessableEntityError;
}();
/**
 * @member {String} reason
 */
UnprocessableEntityError.prototype['reason'] = undefined;

/**
 * @member {String} message
 */
UnprocessableEntityError.prototype['message'] = undefined;

/**
 * @member {Array.<String>} errorMessages
 */
UnprocessableEntityError.prototype['errorMessages'] = undefined;

/**
 * @member {Date} start
 */
UnprocessableEntityError.prototype['start'] = undefined;

/**
 * @member {Date} end
 */
UnprocessableEntityError.prototype['end'] = undefined;

/**
 * @member {Number} start_at
 */
UnprocessableEntityError.prototype['start_at'] = undefined;

/**
 * @member {Number} end_at
 */
UnprocessableEntityError.prototype['end_at'] = undefined;

/**
 * @member {Number} first_interval
 */
UnprocessableEntityError.prototype['first_interval'] = undefined;

/**
 * @member {Number} last_interval
 */
UnprocessableEntityError.prototype['last_interval'] = undefined;
var _default = UnprocessableEntityError;
exports["default"] = _default;