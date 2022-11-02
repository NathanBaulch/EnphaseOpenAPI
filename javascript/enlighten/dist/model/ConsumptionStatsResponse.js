"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConsumptionStatsResponseIntervals = _interopRequireDefault(require("./ConsumptionStatsResponseIntervals"));
var _Meta = _interopRequireDefault(require("./Meta"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ConsumptionStatsResponse model module.
 * @module model/ConsumptionStatsResponse
 * @version 2.0
 */
var ConsumptionStatsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConsumptionStatsResponse</code>.
   * @alias module:model/ConsumptionStatsResponse
   * @param systemId {Number} Enlighten ID for this system.
   * @param totalDevices {Number} Number of active consumption meters for this system.
   * @param meta {module:model/Meta} 
   * @param intervals {Array.<module:model/ConsumptionStatsResponseIntervals>} A list of intervals between the requested start and end times.
   */
  function ConsumptionStatsResponse(systemId, totalDevices, meta, intervals) {
    _classCallCheck(this, ConsumptionStatsResponse);
    ConsumptionStatsResponse.initialize(this, systemId, totalDevices, meta, intervals);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConsumptionStatsResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systemId, totalDevices, meta, intervals) {
      obj['system_id'] = systemId;
      obj['total_devices'] = totalDevices;
      obj['meta'] = meta;
      obj['intervals'] = intervals;
    }

    /**
     * Constructs a <code>ConsumptionStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsumptionStatsResponse} obj Optional instance to populate.
     * @return {module:model/ConsumptionStatsResponse} The populated <code>ConsumptionStatsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConsumptionStatsResponse();
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
          obj['intervals'] = _ApiClient["default"].convertToType(data['intervals'], [_ConsumptionStatsResponseIntervals["default"]]);
        }
      }
      return obj;
    }
  }]);
  return ConsumptionStatsResponse;
}();
/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */
ConsumptionStatsResponse.prototype['system_id'] = undefined;

/**
 * Number of active consumption meters for this system.
 * @member {Number} total_devices
 */
ConsumptionStatsResponse.prototype['total_devices'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
ConsumptionStatsResponse.prototype['meta'] = undefined;

/**
 * A list of intervals between the requested start and end times.
 * @member {Array.<module:model/ConsumptionStatsResponseIntervals>} intervals
 */
ConsumptionStatsResponse.prototype['intervals'] = undefined;
var _default = ConsumptionStatsResponse;
exports["default"] = _default;