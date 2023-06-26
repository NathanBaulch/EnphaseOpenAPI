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
 * The GetCompanyUsersResponseUsersInner model module.
 * @module model/GetCompanyUsersResponseUsersInner
 * @version 4.0
 */
var GetCompanyUsersResponseUsersInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetCompanyUsersResponseUsersInner</code>.
   * @alias module:model/GetCompanyUsersResponseUsersInner
   * @param {(module:model/Number|module:model/String)} instance The actual instance to initialize GetCompanyUsersResponseUsersInner.
   */
  function GetCompanyUsersResponseUsersInner() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetCompanyUsersResponseUsersInner);
    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    _defineProperty(this, "toJSON", function () {
      return this.getActualInstance();
    });
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      // validate integer
      if (!(typeof instance === 'number' && instance % 1 === 0)) {
        throw new Error("Invalid value. Must be integer. Input: " + JSON.stringify(instance));
      }
      this.actualInstance = instance;
      match++;
    } catch (err) {
      // json data failed to deserialize into Number
      errorMessages.push("Failed to construct Number: " + err);
    }
    try {
      // validate string
      if (!(typeof instance === 'string')) {
        throw new Error("Invalid value. Must be string. Input: " + JSON.stringify(instance));
      }
      this.actualInstance = instance;
      match++;
    } catch (err) {
      // json data failed to deserialize into String
      errorMessages.push("Failed to construct String: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetCompanyUsersResponseUsersInner` with oneOf schemas Number, String. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetCompanyUsersResponseUsersInner` with oneOf schemas Number, String. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetCompanyUsersResponseUsersInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCompanyUsersResponseUsersInner} obj Optional instance to populate.
   * @return {module:model/GetCompanyUsersResponseUsersInner} The populated <code>GetCompanyUsersResponseUsersInner</code> instance.
   */
  _createClass(GetCompanyUsersResponseUsersInner, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>Number</code>, <code>String</code>.
     * @return {(module:model/Number|module:model/String)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>Number</code>, <code>String</code>.
     * @param {(module:model/Number|module:model/String)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetCompanyUsersResponseUsersInner.constructFromObject(obj).getActualInstance();
    }
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetCompanyUsersResponseUsersInner(data);
    }
  }]);
  return GetCompanyUsersResponseUsersInner;
}();
/**
 * Create an instance of GetCompanyUsersResponseUsersInner from a JSON string.
 * @param {string} json_string JSON string.
 * @return {module:model/GetCompanyUsersResponseUsersInner} An instance of GetCompanyUsersResponseUsersInner.
 */
_defineProperty(GetCompanyUsersResponseUsersInner, "fromJSON", function (json_string) {
  return GetCompanyUsersResponseUsersInner.constructFromObject(JSON.parse(json_string));
});
GetCompanyUsersResponseUsersInner.OneOf = ["Number", "String"];
var _default = GetCompanyUsersResponseUsersInner;
exports["default"] = _default;