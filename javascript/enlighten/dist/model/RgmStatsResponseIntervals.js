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
 * The RgmStatsResponseIntervals model module.
 * @module model/RgmStatsResponseIntervals
 * @version 2.0
 */
var RgmStatsResponseIntervals = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RgmStatsResponseIntervals</code>.
   * @alias module:model/RgmStatsResponseIntervals
   * @param endAt {Number} End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
   * @param whDel {Number} Energy delivered during this interval, in Watt-hours.
   * @param devicesReporting {Number} Number of revenue-grade meters that reported data for this interval at the time of the request.
   */
  function RgmStatsResponseIntervals(endAt, whDel, devicesReporting) {
    _classCallCheck(this, RgmStatsResponseIntervals);
    RgmStatsResponseIntervals.initialize(this, endAt, whDel, devicesReporting);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RgmStatsResponseIntervals, null, [{
    key: "initialize",
    value: function initialize(obj, endAt, whDel, devicesReporting) {
      obj['end_at'] = endAt;
      obj['wh_del'] = whDel;
      obj['devices_reporting'] = devicesReporting;
    }

    /**
     * Constructs a <code>RgmStatsResponseIntervals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RgmStatsResponseIntervals} obj Optional instance to populate.
     * @return {module:model/RgmStatsResponseIntervals} The populated <code>RgmStatsResponseIntervals</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RgmStatsResponseIntervals();
        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }
        if (data.hasOwnProperty('wh_del')) {
          obj['wh_del'] = _ApiClient["default"].convertToType(data['wh_del'], 'Number');
        }
        if (data.hasOwnProperty('devices_reporting')) {
          obj['devices_reporting'] = _ApiClient["default"].convertToType(data['devices_reporting'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return RgmStatsResponseIntervals;
}();
/**
 * End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Number} end_at
 */
RgmStatsResponseIntervals.prototype['end_at'] = undefined;

/**
 * Energy delivered during this interval, in Watt-hours.
 * @member {Number} wh_del
 */
RgmStatsResponseIntervals.prototype['wh_del'] = undefined;

/**
 * Number of revenue-grade meters that reported data for this interval at the time of the request.
 * @member {Number} devices_reporting
 */
RgmStatsResponseIntervals.prototype['devices_reporting'] = undefined;
var _default = RgmStatsResponseIntervals;
exports["default"] = _default;