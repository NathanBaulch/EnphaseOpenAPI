"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetCompanyUsersResponseUsersInner = _interopRequireDefault(require("./GetCompanyUsersResponseUsersInner"));
var _GetPvManufacturerModelsResponsePvManufacturers = _interopRequireDefault(require("./GetPvManufacturerModelsResponsePvManufacturers"));
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
 * The GetPvManufacturerModelsResponse model module.
 * @module model/GetPvManufacturerModelsResponse
 * @version 4.0
 */
var GetPvManufacturerModelsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPvManufacturerModelsResponse</code>.
   * @alias module:model/GetPvManufacturerModelsResponse
   */
  function GetPvManufacturerModelsResponse() {
    _classCallCheck(this, GetPvManufacturerModelsResponse);
    GetPvManufacturerModelsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetPvManufacturerModelsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>GetPvManufacturerModelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPvManufacturerModelsResponse} obj Optional instance to populate.
     * @return {module:model/GetPvManufacturerModelsResponse} The populated <code>GetPvManufacturerModelsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPvManufacturerModelsResponse();
        if (data.hasOwnProperty('pv_manufacturers')) {
          obj['pv_manufacturers'] = _GetPvManufacturerModelsResponsePvManufacturers["default"].constructFromObject(data['pv_manufacturers']);
        }
        if (data.hasOwnProperty('pv_models')) {
          obj['pv_models'] = _ApiClient["default"].convertToType(data['pv_models'], [[_GetCompanyUsersResponseUsersInner["default"]]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetPvManufacturerModelsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetPvManufacturerModelsResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `pv_manufacturers`
      if (data['pv_manufacturers']) {
        // data not null
        _GetPvManufacturerModelsResponsePvManufacturers["default"].validateJSON(data['pv_manufacturers']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['pv_models'])) {
        throw new Error("Expected the field `pv_models` to be an array in the JSON data but got " + data['pv_models']);
      }
      return true;
    }
  }]);
  return GetPvManufacturerModelsResponse;
}();
/**
 * @member {module:model/GetPvManufacturerModelsResponsePvManufacturers} pv_manufacturers
 */
GetPvManufacturerModelsResponse.prototype['pv_manufacturers'] = undefined;

/**
 * A list of PV models for this manufacturer. Each element in the list is an array including the model's primary key and name. The list may be empty.
 * @member {Array.<Array.<module:model/GetCompanyUsersResponseUsersInner>>} pv_models
 */
GetPvManufacturerModelsResponse.prototype['pv_models'] = undefined;
var _default = GetPvManufacturerModelsResponse;
exports["default"] = _default;