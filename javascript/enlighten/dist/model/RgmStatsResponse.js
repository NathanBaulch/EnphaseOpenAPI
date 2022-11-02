"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Meta = _interopRequireDefault(require("./Meta"));
var _RgmStatsResponseIntervals = _interopRequireDefault(require("./RgmStatsResponseIntervals"));
var _RgmStatsResponseMeterIntervals = _interopRequireDefault(require("./RgmStatsResponseMeterIntervals"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The RgmStatsResponse model module.
 * @module model/RgmStatsResponse
 * @version 2.0
 */
var RgmStatsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RgmStatsResponse</code>.
   * @alias module:model/RgmStatsResponse
   * @param systemId {Number} Enlighten ID for this system.
   * @param totalDevices {Number} Number of active revenue-grade meters for this system.
   * @param meta {module:model/Meta} 
   * @param intervals {Array.<module:model/RgmStatsResponseIntervals>} A list of intervals between the requested start and end times.
   * @param meterIntervals {Array.<module:model/RgmStatsResponseMeterIntervals>} A list of intervals of a meter between the requested start and end times.
   */
  function RgmStatsResponse(systemId, totalDevices, meta, intervals, meterIntervals) {
    _classCallCheck(this, RgmStatsResponse);
    RgmStatsResponse.initialize(this, systemId, totalDevices, meta, intervals, meterIntervals);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RgmStatsResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systemId, totalDevices, meta, intervals, meterIntervals) {
      obj['system_id'] = systemId;
      obj['total_devices'] = totalDevices;
      obj['meta'] = meta;
      obj['intervals'] = intervals;
      obj['meter_intervals'] = meterIntervals;
    }

    /**
     * Constructs a <code>RgmStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RgmStatsResponse} obj Optional instance to populate.
     * @return {module:model/RgmStatsResponse} The populated <code>RgmStatsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RgmStatsResponse();
        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }
        if (data.hasOwnProperty('total_devices')) {
          obj['total_devices'] = _ApiClient["default"].convertToType(data['total_devices'], 'Number');
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
        if (data.hasOwnProperty('intervals')) {
          obj['intervals'] = _ApiClient["default"].convertToType(data['intervals'], [_RgmStatsResponseIntervals["default"]]);
        }
        if (data.hasOwnProperty('meter_intervals')) {
          obj['meter_intervals'] = _ApiClient["default"].convertToType(data['meter_intervals'], [_RgmStatsResponseMeterIntervals["default"]]);
        }
      }
      return obj;
    }
  }]);
  return RgmStatsResponse;
}();
/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */
RgmStatsResponse.prototype['system_id'] = undefined;

/**
 * Number of active revenue-grade meters for this system.
 * @member {Number} total_devices
 */
RgmStatsResponse.prototype['total_devices'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
RgmStatsResponse.prototype['meta'] = undefined;

/**
 * A list of intervals between the requested start and end times.
 * @member {Array.<module:model/RgmStatsResponseIntervals>} intervals
 */
RgmStatsResponse.prototype['intervals'] = undefined;

/**
 * A list of intervals of a meter between the requested start and end times.
 * @member {Array.<module:model/RgmStatsResponseMeterIntervals>} meter_intervals
 */
RgmStatsResponse.prototype['meter_intervals'] = undefined;
var _default = RgmStatsResponse;
exports["default"] = _default;