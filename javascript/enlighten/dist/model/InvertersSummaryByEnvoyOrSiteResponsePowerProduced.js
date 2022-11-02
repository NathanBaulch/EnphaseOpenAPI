"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InvertersSummaryByEnvoyOrSiteResponsePowerProduced model module.
 * @module model/InvertersSummaryByEnvoyOrSiteResponsePowerProduced
 * @version 2.0
 */
var InvertersSummaryByEnvoyOrSiteResponsePowerProduced = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvertersSummaryByEnvoyOrSiteResponsePowerProduced</code>.
   * @alias module:model/InvertersSummaryByEnvoyOrSiteResponsePowerProduced
   * @param value {Number} 
   * @param units {module:model/InvertersSummaryByEnvoyOrSiteResponsePowerProduced.UnitsEnum} 
   * @param precision {Number} 
   */
  function InvertersSummaryByEnvoyOrSiteResponsePowerProduced(value, units, precision) {
    _classCallCheck(this, InvertersSummaryByEnvoyOrSiteResponsePowerProduced);
    InvertersSummaryByEnvoyOrSiteResponsePowerProduced.initialize(this, value, units, precision);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InvertersSummaryByEnvoyOrSiteResponsePowerProduced, null, [{
    key: "initialize",
    value: function initialize(obj, value, units, precision) {
      obj['value'] = value;
      obj['units'] = units;
      obj['precision'] = precision;
    }

    /**
     * Constructs a <code>InvertersSummaryByEnvoyOrSiteResponsePowerProduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvertersSummaryByEnvoyOrSiteResponsePowerProduced} obj Optional instance to populate.
     * @return {module:model/InvertersSummaryByEnvoyOrSiteResponsePowerProduced} The populated <code>InvertersSummaryByEnvoyOrSiteResponsePowerProduced</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvertersSummaryByEnvoyOrSiteResponsePowerProduced();
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
        if (data.hasOwnProperty('units')) {
          obj['units'] = _ApiClient["default"].convertToType(data['units'], 'String');
        }
        if (data.hasOwnProperty('precision')) {
          obj['precision'] = _ApiClient["default"].convertToType(data['precision'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return InvertersSummaryByEnvoyOrSiteResponsePowerProduced;
}();
/**
 * @member {Number} value
 */
InvertersSummaryByEnvoyOrSiteResponsePowerProduced.prototype['value'] = undefined;

/**
 * @member {module:model/InvertersSummaryByEnvoyOrSiteResponsePowerProduced.UnitsEnum} units
 */
InvertersSummaryByEnvoyOrSiteResponsePowerProduced.prototype['units'] = undefined;

/**
 * @member {Number} precision
 */
InvertersSummaryByEnvoyOrSiteResponsePowerProduced.prototype['precision'] = undefined;

/**
 * Allowed values for the <code>units</code> property.
 * @enum {String}
 * @readonly
 */
InvertersSummaryByEnvoyOrSiteResponsePowerProduced['UnitsEnum'] = {
  /**
   * value: "W"
   * @const
   */
  "W": "W"
};
var _default = InvertersSummaryByEnvoyOrSiteResponsePowerProduced;
exports["default"] = _default;