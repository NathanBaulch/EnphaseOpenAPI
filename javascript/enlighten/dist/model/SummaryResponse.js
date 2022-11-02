"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Status = _interopRequireDefault(require("./Status"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SummaryResponse model module.
 * @module model/SummaryResponse
 * @version 2.0
 */
var SummaryResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SummaryResponse</code>.
   * @alias module:model/SummaryResponse
   * @param currentPower {Number} Current power production, in Watts. For historical requests, returns 0.
   * @param energyLifetime {Number} Energy produced in the lifetime of the system, excluding the requested day, in Watt-hours.
   * @param energyToday {Number} Energy produced on the requested day, in Watt-hours.
   * @param lastIntervalEndAt {Number} The last known time that the system produced energy. When a system has not been communicating for a length of time, the `last_report_at` can be recent, whereas the `last_interval_end_at` may be further back.
   * @param lastReportAt {Number} The last time an Envoy on this system reported. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
   * @param modules {Number} Number of active (not retired) modules. For historical requests, returns 0.
   * @param operationalAt {Number} The time at which this system became operational. Corresponds to the system's interconnect time, if one is specified. Otherwise, it is the system's first interval end time. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
   * @param sizeW {Number} The size of the system, in Watts. For historical requests, returns 0.
   * @param source {module:model/SummaryResponse.SourceEnum} Indicates whether the production of this system is measured by its microinverters (`microinverters`) or by revenue-grade meters (`meter`) installed on the system.
   * @param status {module:model/Status} 
   * @param summaryDate {Date} Effective date of the response. For historical requests, returns the date requested. For current requests, returns the current date. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
   * @param systemId {Number} The Enlighten ID of the system.
   */
  function SummaryResponse(currentPower, energyLifetime, energyToday, lastIntervalEndAt, lastReportAt, modules, operationalAt, sizeW, source, status, summaryDate, systemId) {
    _classCallCheck(this, SummaryResponse);
    SummaryResponse.initialize(this, currentPower, energyLifetime, energyToday, lastIntervalEndAt, lastReportAt, modules, operationalAt, sizeW, source, status, summaryDate, systemId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SummaryResponse, null, [{
    key: "initialize",
    value: function initialize(obj, currentPower, energyLifetime, energyToday, lastIntervalEndAt, lastReportAt, modules, operationalAt, sizeW, source, status, summaryDate, systemId) {
      obj['current_power'] = currentPower;
      obj['energy_lifetime'] = energyLifetime;
      obj['energy_today'] = energyToday;
      obj['last_interval_end_at'] = lastIntervalEndAt;
      obj['last_report_at'] = lastReportAt;
      obj['modules'] = modules;
      obj['operational_at'] = operationalAt;
      obj['size_w'] = sizeW;
      obj['source'] = source;
      obj['status'] = status;
      obj['summary_date'] = summaryDate;
      obj['system_id'] = systemId;
    }

    /**
     * Constructs a <code>SummaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SummaryResponse} obj Optional instance to populate.
     * @return {module:model/SummaryResponse} The populated <code>SummaryResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SummaryResponse();
        if (data.hasOwnProperty('current_power')) {
          obj['current_power'] = _ApiClient["default"].convertToType(data['current_power'], 'Number');
        }
        if (data.hasOwnProperty('energy_lifetime')) {
          obj['energy_lifetime'] = _ApiClient["default"].convertToType(data['energy_lifetime'], 'Number');
        }
        if (data.hasOwnProperty('energy_today')) {
          obj['energy_today'] = _ApiClient["default"].convertToType(data['energy_today'], 'Number');
        }
        if (data.hasOwnProperty('last_interval_end_at')) {
          obj['last_interval_end_at'] = _ApiClient["default"].convertToType(data['last_interval_end_at'], 'Number');
        }
        if (data.hasOwnProperty('last_report_at')) {
          obj['last_report_at'] = _ApiClient["default"].convertToType(data['last_report_at'], 'Number');
        }
        if (data.hasOwnProperty('modules')) {
          obj['modules'] = _ApiClient["default"].convertToType(data['modules'], 'Number');
        }
        if (data.hasOwnProperty('operational_at')) {
          obj['operational_at'] = _ApiClient["default"].convertToType(data['operational_at'], 'Number');
        }
        if (data.hasOwnProperty('size_w')) {
          obj['size_w'] = _ApiClient["default"].convertToType(data['size_w'], 'Number');
        }
        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _Status["default"].constructFromObject(data['status']);
        }
        if (data.hasOwnProperty('summary_date')) {
          obj['summary_date'] = _ApiClient["default"].convertToType(data['summary_date'], 'Date');
        }
        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SummaryResponse;
}();
/**
 * Current power production, in Watts. For historical requests, returns 0.
 * @member {Number} current_power
 */
SummaryResponse.prototype['current_power'] = undefined;

/**
 * Energy produced in the lifetime of the system, excluding the requested day, in Watt-hours.
 * @member {Number} energy_lifetime
 */
SummaryResponse.prototype['energy_lifetime'] = undefined;

/**
 * Energy produced on the requested day, in Watt-hours.
 * @member {Number} energy_today
 */
SummaryResponse.prototype['energy_today'] = undefined;

/**
 * The last known time that the system produced energy. When a system has not been communicating for a length of time, the `last_report_at` can be recent, whereas the `last_interval_end_at` may be further back.
 * @member {Number} last_interval_end_at
 */
SummaryResponse.prototype['last_interval_end_at'] = undefined;

/**
 * The last time an Envoy on this system reported. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Number} last_report_at
 */
SummaryResponse.prototype['last_report_at'] = undefined;

/**
 * Number of active (not retired) modules. For historical requests, returns 0.
 * @member {Number} modules
 */
SummaryResponse.prototype['modules'] = undefined;

/**
 * The time at which this system became operational. Corresponds to the system's interconnect time, if one is specified. Otherwise, it is the system's first interval end time. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Number} operational_at
 */
SummaryResponse.prototype['operational_at'] = undefined;

/**
 * The size of the system, in Watts. For historical requests, returns 0.
 * @member {Number} size_w
 */
SummaryResponse.prototype['size_w'] = undefined;

/**
 * Indicates whether the production of this system is measured by its microinverters (`microinverters`) or by revenue-grade meters (`meter`) installed on the system.
 * @member {module:model/SummaryResponse.SourceEnum} source
 */
SummaryResponse.prototype['source'] = undefined;

/**
 * @member {module:model/Status} status
 */
SummaryResponse.prototype['status'] = undefined;

/**
 * Effective date of the response. For historical requests, returns the date requested. For current requests, returns the current date. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Date} summary_date
 */
SummaryResponse.prototype['summary_date'] = undefined;

/**
 * The Enlighten ID of the system.
 * @member {Number} system_id
 */
SummaryResponse.prototype['system_id'] = undefined;

/**
 * Allowed values for the <code>source</code> property.
 * @enum {String}
 * @readonly
 */
SummaryResponse['SourceEnum'] = {
  /**
   * value: "microinverters"
   * @const
   */
  "microinverters": "microinverters",
  /**
   * value: "meter"
   * @const
   */
  "meter": "meter"
};
var _default = SummaryResponse;
exports["default"] = _default;