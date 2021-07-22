"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConsumptionStatsResponseIntervals model module.
 * @module model/ConsumptionStatsResponseIntervals
 * @version 2.0
 */
var ConsumptionStatsResponseIntervals = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConsumptionStatsResponseIntervals</code>.
   * @alias module:model/ConsumptionStatsResponseIntervals
   * @param endAt {Number} End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
   * @param enwh {Number} Energy consumed during this interval, in Watt-hours.
   * @param devicesReporting {Number} Number of consumption meters that reported data for this interval at the time of the request.
   */
  function ConsumptionStatsResponseIntervals(endAt, enwh, devicesReporting) {
    _classCallCheck(this, ConsumptionStatsResponseIntervals);

    ConsumptionStatsResponseIntervals.initialize(this, endAt, enwh, devicesReporting);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConsumptionStatsResponseIntervals, null, [{
    key: "initialize",
    value: function initialize(obj, endAt, enwh, devicesReporting) {
      obj['end_at'] = endAt;
      obj['enwh'] = enwh;
      obj['devices_reporting'] = devicesReporting;
    }
    /**
     * Constructs a <code>ConsumptionStatsResponseIntervals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsumptionStatsResponseIntervals} obj Optional instance to populate.
     * @return {module:model/ConsumptionStatsResponseIntervals} The populated <code>ConsumptionStatsResponseIntervals</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConsumptionStatsResponseIntervals();

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }

        if (data.hasOwnProperty('enwh')) {
          obj['enwh'] = _ApiClient["default"].convertToType(data['enwh'], 'Number');
        }

        if (data.hasOwnProperty('devices_reporting')) {
          obj['devices_reporting'] = _ApiClient["default"].convertToType(data['devices_reporting'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ConsumptionStatsResponseIntervals;
}();
/**
 * End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Number} end_at
 */


ConsumptionStatsResponseIntervals.prototype['end_at'] = undefined;
/**
 * Energy consumed during this interval, in Watt-hours.
 * @member {Number} enwh
 */

ConsumptionStatsResponseIntervals.prototype['enwh'] = undefined;
/**
 * Number of consumption meters that reported data for this interval at the time of the request.
 * @member {Number} devices_reporting
 */

ConsumptionStatsResponseIntervals.prototype['devices_reporting'] = undefined;
var _default = ConsumptionStatsResponseIntervals;
exports["default"] = _default;