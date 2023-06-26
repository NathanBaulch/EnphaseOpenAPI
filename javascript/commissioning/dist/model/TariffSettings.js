"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TariffSettingsTariff = _interopRequireDefault(require("./TariffSettingsTariff"));
var _UpdateSystemTariffSettingsResponseTask = _interopRequireDefault(require("./UpdateSystemTariffSettingsResponseTask"));
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
 * The TariffSettings model module.
 * @module model/TariffSettings
 * @version 4.0
 */
var TariffSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TariffSettings</code>.
   * @alias module:model/TariffSettings
   */
  function TariffSettings() {
    _classCallCheck(this, TariffSettings);
    TariffSettings.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TariffSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TariffSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TariffSettings} obj Optional instance to populate.
     * @return {module:model/TariffSettings} The populated <code>TariffSettings</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TariffSettings();
        if (data.hasOwnProperty('tariff')) {
          obj['tariff'] = _TariffSettingsTariff["default"].constructFromObject(data['tariff']);
        }
        if (data.hasOwnProperty('task')) {
          obj['task'] = _UpdateSystemTariffSettingsResponseTask["default"].constructFromObject(data['task']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TariffSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TariffSettings</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `tariff`
      if (data['tariff']) {
        // data not null
        _TariffSettingsTariff["default"].validateJSON(data['tariff']);
      }
      // validate the optional field `task`
      if (data['task']) {
        // data not null
        _UpdateSystemTariffSettingsResponseTask["default"].validateJSON(data['task']);
      }
      return true;
    }
  }]);
  return TariffSettings;
}();
/**
 * @member {module:model/TariffSettingsTariff} tariff
 */
TariffSettings.prototype['tariff'] = undefined;

/**
 * @member {module:model/UpdateSystemTariffSettingsResponseTask} task
 */
TariffSettings.prototype['task'] = undefined;
var _default = TariffSettings;
exports["default"] = _default;