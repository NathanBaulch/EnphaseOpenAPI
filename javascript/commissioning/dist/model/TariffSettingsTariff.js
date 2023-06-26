"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TariffSeasonsInner = _interopRequireDefault(require("./TariffSeasonsInner"));
var _TariffSettingsTariffCurrencyType = _interopRequireDefault(require("./TariffSettingsTariffCurrencyType"));
var _TariffSettingsTariffSingleRate = _interopRequireDefault(require("./TariffSettingsTariffSingleRate"));
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
 * The TariffSettingsTariff model module.
 * @module model/TariffSettingsTariff
 * @version 4.0
 */
var TariffSettingsTariff = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TariffSettingsTariff</code>.
   * @alias module:model/TariffSettingsTariff
   */
  function TariffSettingsTariff() {
    _classCallCheck(this, TariffSettingsTariff);
    TariffSettingsTariff.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TariffSettingsTariff, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TariffSettingsTariff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TariffSettingsTariff} obj Optional instance to populate.
     * @return {module:model/TariffSettingsTariff} The populated <code>TariffSettingsTariff</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TariffSettingsTariff();
        if (data.hasOwnProperty('currency_type')) {
          obj['currency_type'] = _TariffSettingsTariffCurrencyType["default"].constructFromObject(data['currency_type']);
        }
        if (data.hasOwnProperty('single_rate')) {
          obj['single_rate'] = _TariffSettingsTariffSingleRate["default"].constructFromObject(data['single_rate']);
        }
        if (data.hasOwnProperty('seasons')) {
          obj['seasons'] = _ApiClient["default"].convertToType(data['seasons'], [_TariffSeasonsInner["default"]]);
        }
        if (data.hasOwnProperty('seasons_sell')) {
          obj['seasons_sell'] = _ApiClient["default"].convertToType(data['seasons_sell'], [_TariffSeasonsInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TariffSettingsTariff</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TariffSettingsTariff</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `currency_type`
      if (data['currency_type']) {
        // data not null
        _TariffSettingsTariffCurrencyType["default"].validateJSON(data['currency_type']);
      }
      // validate the optional field `single_rate`
      if (data['single_rate']) {
        // data not null
        _TariffSettingsTariffSingleRate["default"].validateJSON(data['single_rate']);
      }
      if (data['seasons']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['seasons'])) {
          throw new Error("Expected the field `seasons` to be an array in the JSON data but got " + data['seasons']);
        }
        // validate the optional field `seasons` (array)
        var _iterator = _createForOfIteratorHelper(data['seasons']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _TariffSeasonsInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      if (data['seasons_sell']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['seasons_sell'])) {
          throw new Error("Expected the field `seasons_sell` to be an array in the JSON data but got " + data['seasons_sell']);
        }
        // validate the optional field `seasons_sell` (array)
        var _iterator2 = _createForOfIteratorHelper(data['seasons_sell']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _TariffSeasonsInner["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      return true;
    }
  }]);
  return TariffSettingsTariff;
}();
/**
 * @member {module:model/TariffSettingsTariffCurrencyType} currency_type
 */
TariffSettingsTariff.prototype['currency_type'] = undefined;

/**
 * @member {module:model/TariffSettingsTariffSingleRate} single_rate
 */
TariffSettingsTariff.prototype['single_rate'] = undefined;

/**
 * ToU seasons.
 * @member {Array.<module:model/TariffSeasonsInner>} seasons
 */
TariffSettingsTariff.prototype['seasons'] = undefined;

/**
 * ToU seasons.
 * @member {Array.<module:model/TariffSeasonsInner>} seasons_sell
 */
TariffSettingsTariff.prototype['seasons_sell'] = undefined;
var _default = TariffSettingsTariff;
exports["default"] = _default;