"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvertersSummaryByEnvoyOrSiteResponseEnergy = _interopRequireDefault(require("./InvertersSummaryByEnvoyOrSiteResponseEnergy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InvertersSummaryByEnvoyOrSiteResponseMicroInverters model module.
 * @module model/InvertersSummaryByEnvoyOrSiteResponseMicroInverters
 * @version 2.0
 */
var InvertersSummaryByEnvoyOrSiteResponseMicroInverters = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvertersSummaryByEnvoyOrSiteResponseMicroInverters</code>.
   * @alias module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInverters
   * @param id {Number} 
   * @param model {String} Model number of this Microinverter.
   * @param partNumber {String} The Enphase part number of this Microinverter.
   * @param serialNumber {String} The serial number of this Microinverter.
   * @param sku {String} 
   * @param status {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInverters.StatusEnum} The current status of this Microinverter. * `normal` - The microinverter is operating normally. * `power` - There is a production issue. * `micro` - The microinverter is not reporting. * `retired` - The microinverter is retired.
   * @param powerProduced {Number} 
   * @param procLoad {String} 
   * @param paramTable {String} 
   * @param envoySerialNumber {String} 
   * @param energy {module:model/InvertersSummaryByEnvoyOrSiteResponseEnergy} 
   * @param gridProfile {String} 
   * @param lastReportDate {Date} The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
   */
  function InvertersSummaryByEnvoyOrSiteResponseMicroInverters(id, model, partNumber, serialNumber, sku, status, powerProduced, procLoad, paramTable, envoySerialNumber, energy, gridProfile, lastReportDate) {
    _classCallCheck(this, InvertersSummaryByEnvoyOrSiteResponseMicroInverters);

    InvertersSummaryByEnvoyOrSiteResponseMicroInverters.initialize(this, id, model, partNumber, serialNumber, sku, status, powerProduced, procLoad, paramTable, envoySerialNumber, energy, gridProfile, lastReportDate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvertersSummaryByEnvoyOrSiteResponseMicroInverters, null, [{
    key: "initialize",
    value: function initialize(obj, id, model, partNumber, serialNumber, sku, status, powerProduced, procLoad, paramTable, envoySerialNumber, energy, gridProfile, lastReportDate) {
      obj['id'] = id;
      obj['model'] = model;
      obj['part_number'] = partNumber;
      obj['serial_number'] = serialNumber;
      obj['sku'] = sku;
      obj['status'] = status;
      obj['power_produced'] = powerProduced;
      obj['proc_load'] = procLoad;
      obj['param_table'] = paramTable;
      obj['envoy_serial_number'] = envoySerialNumber;
      obj['energy'] = energy;
      obj['grid_profile'] = gridProfile;
      obj['last_report_date'] = lastReportDate;
    }
    /**
     * Constructs a <code>InvertersSummaryByEnvoyOrSiteResponseMicroInverters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInverters} obj Optional instance to populate.
     * @return {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInverters} The populated <code>InvertersSummaryByEnvoyOrSiteResponseMicroInverters</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvertersSummaryByEnvoyOrSiteResponseMicroInverters();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('model')) {
          obj['model'] = _ApiClient["default"].convertToType(data['model'], 'String');
        }

        if (data.hasOwnProperty('part_number')) {
          obj['part_number'] = _ApiClient["default"].convertToType(data['part_number'], 'String');
        }

        if (data.hasOwnProperty('serial_number')) {
          obj['serial_number'] = _ApiClient["default"].convertToType(data['serial_number'], 'String');
        }

        if (data.hasOwnProperty('sku')) {
          obj['sku'] = _ApiClient["default"].convertToType(data['sku'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('power_produced')) {
          obj['power_produced'] = _ApiClient["default"].convertToType(data['power_produced'], 'Number');
        }

        if (data.hasOwnProperty('proc_load')) {
          obj['proc_load'] = _ApiClient["default"].convertToType(data['proc_load'], 'String');
        }

        if (data.hasOwnProperty('param_table')) {
          obj['param_table'] = _ApiClient["default"].convertToType(data['param_table'], 'String');
        }

        if (data.hasOwnProperty('envoy_serial_number')) {
          obj['envoy_serial_number'] = _ApiClient["default"].convertToType(data['envoy_serial_number'], 'String');
        }

        if (data.hasOwnProperty('energy')) {
          obj['energy'] = _InvertersSummaryByEnvoyOrSiteResponseEnergy["default"].constructFromObject(data['energy']);
        }

        if (data.hasOwnProperty('grid_profile')) {
          obj['grid_profile'] = _ApiClient["default"].convertToType(data['grid_profile'], 'String');
        }

        if (data.hasOwnProperty('last_report_date')) {
          obj['last_report_date'] = _ApiClient["default"].convertToType(data['last_report_date'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return InvertersSummaryByEnvoyOrSiteResponseMicroInverters;
}();
/**
 * @member {Number} id
 */


InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['id'] = undefined;
/**
 * Model number of this Microinverter.
 * @member {String} model
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['model'] = undefined;
/**
 * The Enphase part number of this Microinverter.
 * @member {String} part_number
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['part_number'] = undefined;
/**
 * The serial number of this Microinverter.
 * @member {String} serial_number
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['serial_number'] = undefined;
/**
 * @member {String} sku
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['sku'] = undefined;
/**
 * The current status of this Microinverter. * `normal` - The microinverter is operating normally. * `power` - There is a production issue. * `micro` - The microinverter is not reporting. * `retired` - The microinverter is retired.
 * @member {module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInverters.StatusEnum} status
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['status'] = undefined;
/**
 * @member {Number} power_produced
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['power_produced'] = undefined;
/**
 * @member {String} proc_load
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['proc_load'] = undefined;
/**
 * @member {String} param_table
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['param_table'] = undefined;
/**
 * @member {String} envoy_serial_number
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['envoy_serial_number'] = undefined;
/**
 * @member {module:model/InvertersSummaryByEnvoyOrSiteResponseEnergy} energy
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['energy'] = undefined;
/**
 * @member {String} grid_profile
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['grid_profile'] = undefined;
/**
 * The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null.
 * @member {Date} last_report_date
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters.prototype['last_report_date'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

InvertersSummaryByEnvoyOrSiteResponseMicroInverters['StatusEnum'] = {
  /**
   * value: "normal"
   * @const
   */
  "normal": "normal",

  /**
   * value: "power"
   * @const
   */
  "power": "power",

  /**
   * value: "micro"
   * @const
   */
  "micro": "micro",

  /**
   * value: "retired"
   * @const
   */
  "retired": "retired"
};
var _default = InvertersSummaryByEnvoyOrSiteResponseMicroInverters;
exports["default"] = _default;