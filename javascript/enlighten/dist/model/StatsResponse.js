"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Meta = _interopRequireDefault(require("./Meta"));
var _StatsResponseIntervals = _interopRequireDefault(require("./StatsResponseIntervals"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The StatsResponse model module.
 * @module model/StatsResponse
 * @version 2.0
 */
var StatsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StatsResponse</code>.
   * @alias module:model/StatsResponse
   * @param systemId {Number} Enlighten ID for this system.
   * @param totalDevices {Number} Number of active microinverters for this system.
   * @param meta {module:model/Meta} 
   * @param intervals {Array.<module:model/StatsResponseIntervals>} A list of intervals between the requested start and end times.
   */
  function StatsResponse(systemId, totalDevices, meta, intervals) {
    _classCallCheck(this, StatsResponse);
    StatsResponse.initialize(this, systemId, totalDevices, meta, intervals);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(StatsResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systemId, totalDevices, meta, intervals) {
      obj['system_id'] = systemId;
      obj['total_devices'] = totalDevices;
      obj['meta'] = meta;
      obj['intervals'] = intervals;
    }

    /**
     * Constructs a <code>StatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatsResponse} obj Optional instance to populate.
     * @return {module:model/StatsResponse} The populated <code>StatsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StatsResponse();
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
          obj['intervals'] = _ApiClient["default"].convertToType(data['intervals'], [_StatsResponseIntervals["default"]]);
        }
      }
      return obj;
    }
  }]);
  return StatsResponse;
}();
/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */
StatsResponse.prototype['system_id'] = undefined;

/**
 * Number of active microinverters for this system.
 * @member {Number} total_devices
 */
StatsResponse.prototype['total_devices'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
StatsResponse.prototype['meta'] = undefined;

/**
 * A list of intervals between the requested start and end times.
 * @member {Array.<module:model/StatsResponseIntervals>} intervals
 */
StatsResponse.prototype['intervals'] = undefined;
var _default = StatsResponse;
exports["default"] = _default;