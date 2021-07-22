"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Meta = _interopRequireDefault(require("./Meta"));

var _MonthlyProductionResponseMeterReadings = _interopRequireDefault(require("./MonthlyProductionResponseMeterReadings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MonthlyProductionResponse model module.
 * @module model/MonthlyProductionResponse
 * @version 2.0
 */
var MonthlyProductionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MonthlyProductionResponse</code>.
   * @alias module:model/MonthlyProductionResponse
   * @param systemId {Number} Enlighten ID for this system.
   * @param startDate {Date} First day included in the reporting period. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
   * @param endDate {Date} Last day included in the reporting period.
   * @param productionWh {Number} Total production for the requested period in Watt-hours.
   * @param meterReadings {Array.<module:model/MonthlyProductionResponseMeterReadings>} If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty.
   * @param meta {module:model/Meta} 
   */
  function MonthlyProductionResponse(systemId, startDate, endDate, productionWh, meterReadings, meta) {
    _classCallCheck(this, MonthlyProductionResponse);

    MonthlyProductionResponse.initialize(this, systemId, startDate, endDate, productionWh, meterReadings, meta);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MonthlyProductionResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systemId, startDate, endDate, productionWh, meterReadings, meta) {
      obj['system_id'] = systemId;
      obj['start_date'] = startDate;
      obj['end_date'] = endDate;
      obj['production_wh'] = productionWh;
      obj['meter_readings'] = meterReadings;
      obj['meta'] = meta;
    }
    /**
     * Constructs a <code>MonthlyProductionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MonthlyProductionResponse} obj Optional instance to populate.
     * @return {module:model/MonthlyProductionResponse} The populated <code>MonthlyProductionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MonthlyProductionResponse();

        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }

        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }

        if (data.hasOwnProperty('production_wh')) {
          obj['production_wh'] = _ApiClient["default"].convertToType(data['production_wh'], 'Number');
        }

        if (data.hasOwnProperty('meter_readings')) {
          obj['meter_readings'] = _ApiClient["default"].convertToType(data['meter_readings'], [_MonthlyProductionResponseMeterReadings["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
  }]);

  return MonthlyProductionResponse;
}();
/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */


MonthlyProductionResponse.prototype['system_id'] = undefined;
/**
 * First day included in the reporting period. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Date} start_date
 */

MonthlyProductionResponse.prototype['start_date'] = undefined;
/**
 * Last day included in the reporting period.
 * @member {Date} end_date
 */

MonthlyProductionResponse.prototype['end_date'] = undefined;
/**
 * Total production for the requested period in Watt-hours.
 * @member {Number} production_wh
 */

MonthlyProductionResponse.prototype['production_wh'] = undefined;
/**
 * If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty.
 * @member {Array.<module:model/MonthlyProductionResponseMeterReadings>} meter_readings
 */

MonthlyProductionResponse.prototype['meter_readings'] = undefined;
/**
 * @member {module:model/Meta} meta
 */

MonthlyProductionResponse.prototype['meta'] = undefined;
var _default = MonthlyProductionResponse;
exports["default"] = _default;