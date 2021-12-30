"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RgmStatsResponseIntervals = _interopRequireDefault(require("./RgmStatsResponseIntervals1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The RgmStatsResponseMeterIntervals model module.
 * @module model/RgmStatsResponseMeterIntervals
 * @version 2.0
 */
var RgmStatsResponseMeterIntervals = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RgmStatsResponseMeterIntervals</code>.
   * @alias module:model/RgmStatsResponseMeterIntervals
   * @param meterSerialNumber {String} Serial number of the revenue grade meter.
   * @param envoySerialNumber {String} Serial number of the reporting envoy.
   * @param intervals {Array.<module:model/RgmStatsResponseIntervals1>} Individual meter level interval.
   */
  function RgmStatsResponseMeterIntervals(meterSerialNumber, envoySerialNumber, intervals) {
    _classCallCheck(this, RgmStatsResponseMeterIntervals);

    RgmStatsResponseMeterIntervals.initialize(this, meterSerialNumber, envoySerialNumber, intervals);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RgmStatsResponseMeterIntervals, null, [{
    key: "initialize",
    value: function initialize(obj, meterSerialNumber, envoySerialNumber, intervals) {
      obj['meter_serial_number'] = meterSerialNumber;
      obj['envoy_serial_number'] = envoySerialNumber;
      obj['intervals'] = intervals;
    }
    /**
     * Constructs a <code>RgmStatsResponseMeterIntervals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RgmStatsResponseMeterIntervals} obj Optional instance to populate.
     * @return {module:model/RgmStatsResponseMeterIntervals} The populated <code>RgmStatsResponseMeterIntervals</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RgmStatsResponseMeterIntervals();

        if (data.hasOwnProperty('meter_serial_number')) {
          obj['meter_serial_number'] = _ApiClient["default"].convertToType(data['meter_serial_number'], 'String');
        }

        if (data.hasOwnProperty('envoy_serial_number')) {
          obj['envoy_serial_number'] = _ApiClient["default"].convertToType(data['envoy_serial_number'], 'String');
        }

        if (data.hasOwnProperty('intervals')) {
          obj['intervals'] = _ApiClient["default"].convertToType(data['intervals'], [_RgmStatsResponseIntervals["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RgmStatsResponseMeterIntervals;
}();
/**
 * Serial number of the revenue grade meter.
 * @member {String} meter_serial_number
 */


RgmStatsResponseMeterIntervals.prototype['meter_serial_number'] = undefined;
/**
 * Serial number of the reporting envoy.
 * @member {String} envoy_serial_number
 */

RgmStatsResponseMeterIntervals.prototype['envoy_serial_number'] = undefined;
/**
 * Individual meter level interval.
 * @member {Array.<module:model/RgmStatsResponseIntervals1>} intervals
 */

RgmStatsResponseMeterIntervals.prototype['intervals'] = undefined;
var _default = RgmStatsResponseMeterIntervals;
exports["default"] = _default;