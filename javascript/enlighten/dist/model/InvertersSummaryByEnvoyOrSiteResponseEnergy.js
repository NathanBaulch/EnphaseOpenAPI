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
 * The InvertersSummaryByEnvoyOrSiteResponseEnergy model module.
 * @module model/InvertersSummaryByEnvoyOrSiteResponseEnergy
 * @version 2.0
 */
var InvertersSummaryByEnvoyOrSiteResponseEnergy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvertersSummaryByEnvoyOrSiteResponseEnergy</code>.
   * Returns the lifetime energy of the Microinverter. If the system has never produced energy, the energy value would be 0.
   * @alias module:model/InvertersSummaryByEnvoyOrSiteResponseEnergy
   * @param value {Number} 
   * @param units {module:model/InvertersSummaryByEnvoyOrSiteResponseEnergy.UnitsEnum} 
   * @param precision {Number} 
   */
  function InvertersSummaryByEnvoyOrSiteResponseEnergy(value, units, precision) {
    _classCallCheck(this, InvertersSummaryByEnvoyOrSiteResponseEnergy);
    InvertersSummaryByEnvoyOrSiteResponseEnergy.initialize(this, value, units, precision);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InvertersSummaryByEnvoyOrSiteResponseEnergy, null, [{
    key: "initialize",
    value: function initialize(obj, value, units, precision) {
      obj['value'] = value;
      obj['units'] = units;
      obj['precision'] = precision;
    }

    /**
     * Constructs a <code>InvertersSummaryByEnvoyOrSiteResponseEnergy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvertersSummaryByEnvoyOrSiteResponseEnergy} obj Optional instance to populate.
     * @return {module:model/InvertersSummaryByEnvoyOrSiteResponseEnergy} The populated <code>InvertersSummaryByEnvoyOrSiteResponseEnergy</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvertersSummaryByEnvoyOrSiteResponseEnergy();
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
  return InvertersSummaryByEnvoyOrSiteResponseEnergy;
}();
/**
 * @member {Number} value
 */
InvertersSummaryByEnvoyOrSiteResponseEnergy.prototype['value'] = undefined;

/**
 * @member {module:model/InvertersSummaryByEnvoyOrSiteResponseEnergy.UnitsEnum} units
 */
InvertersSummaryByEnvoyOrSiteResponseEnergy.prototype['units'] = undefined;

/**
 * @member {Number} precision
 */
InvertersSummaryByEnvoyOrSiteResponseEnergy.prototype['precision'] = undefined;

/**
 * Allowed values for the <code>units</code> property.
 * @enum {String}
 * @readonly
 */
InvertersSummaryByEnvoyOrSiteResponseEnergy['UnitsEnum'] = {
  /**
   * value: "Wh"
   * @const
   */
  "Wh": "Wh",
  /**
   * value: "kJ"
   * @const
   */
  "kJ": "kJ"
};
var _default = InvertersSummaryByEnvoyOrSiteResponseEnergy;
exports["default"] = _default;