"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
 * The SystemParamsAddress model module.
 * @module model/SystemParamsAddress
 * @version 4.0
 */
var SystemParamsAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemParamsAddress</code>.
   * Location of the system. Use the ISO 3166-1 2-letter code for the country. Latitude and longitude are calculated by Enlighten, not provided by the client.
   * @alias module:model/SystemParamsAddress
   * @param street1 {String} 
   * @param city {String} 
   * @param state {String} 
   * @param country {String} 
   * @param postalCode {String} 
   */
  function SystemParamsAddress(street1, city, state, country, postalCode) {
    _classCallCheck(this, SystemParamsAddress);
    SystemParamsAddress.initialize(this, street1, city, state, country, postalCode);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SystemParamsAddress, null, [{
    key: "initialize",
    value: function initialize(obj, street1, city, state, country, postalCode) {
      obj['street1'] = street1;
      obj['city'] = city;
      obj['state'] = state;
      obj['country'] = country;
      obj['postal_code'] = postalCode;
    }

    /**
     * Constructs a <code>SystemParamsAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemParamsAddress} obj Optional instance to populate.
     * @return {module:model/SystemParamsAddress} The populated <code>SystemParamsAddress</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemParamsAddress();
        if (data.hasOwnProperty('street1')) {
          obj['street1'] = _ApiClient["default"].convertToType(data['street1'], 'String');
        }
        if (data.hasOwnProperty('street2')) {
          obj['street2'] = _ApiClient["default"].convertToType(data['street2'], 'String');
        }
        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }
        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }
        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SystemParamsAddress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SystemParamsAddress</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(SystemParamsAddress.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['street1'] && !(typeof data['street1'] === 'string' || data['street1'] instanceof String)) {
        throw new Error("Expected the field `street1` to be a primitive type in the JSON string but got " + data['street1']);
      }
      // ensure the json data is a string
      if (data['street2'] && !(typeof data['street2'] === 'string' || data['street2'] instanceof String)) {
        throw new Error("Expected the field `street2` to be a primitive type in the JSON string but got " + data['street2']);
      }
      // ensure the json data is a string
      if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
        throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
      }
      // ensure the json data is a string
      if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
        throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
      }
      // ensure the json data is a string
      if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
        throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
      }
      // ensure the json data is a string
      if (data['postal_code'] && !(typeof data['postal_code'] === 'string' || data['postal_code'] instanceof String)) {
        throw new Error("Expected the field `postal_code` to be a primitive type in the JSON string but got " + data['postal_code']);
      }
      return true;
    }
  }]);
  return SystemParamsAddress;
}();
SystemParamsAddress.RequiredProperties = ["street1", "city", "state", "country", "postal_code"];

/**
 * @member {String} street1
 */
SystemParamsAddress.prototype['street1'] = undefined;

/**
 * @member {String} street2
 */
SystemParamsAddress.prototype['street2'] = undefined;

/**
 * @member {String} city
 */
SystemParamsAddress.prototype['city'] = undefined;

/**
 * @member {String} state
 */
SystemParamsAddress.prototype['state'] = undefined;

/**
 * @member {String} country
 */
SystemParamsAddress.prototype['country'] = undefined;

/**
 * @member {String} postal_code
 */
SystemParamsAddress.prototype['postal_code'] = undefined;
var _default = SystemParamsAddress;
exports["default"] = _default;