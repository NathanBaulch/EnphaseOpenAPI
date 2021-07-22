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
 * The RgmStatsResponseIntervals1 model module.
 * @module model/RgmStatsResponseIntervals1
 * @version 2.0
 */
var RgmStatsResponseIntervals1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RgmStatsResponseIntervals1</code>.
   * @alias module:model/RgmStatsResponseIntervals1
   * @param channel {Number} The reporting channel identifier.
   * @param endAt {Number} End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
   * @param whDel {Number} Energy delivered during this interval, in Watt-hours.
   * @param currW {Number} Energy delivered during this interval, in Watts.
   */
  function RgmStatsResponseIntervals1(channel, endAt, whDel, currW) {
    _classCallCheck(this, RgmStatsResponseIntervals1);

    RgmStatsResponseIntervals1.initialize(this, channel, endAt, whDel, currW);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RgmStatsResponseIntervals1, null, [{
    key: "initialize",
    value: function initialize(obj, channel, endAt, whDel, currW) {
      obj['channel'] = channel;
      obj['end_at'] = endAt;
      obj['wh_del'] = whDel;
      obj['curr_w'] = currW;
    }
    /**
     * Constructs a <code>RgmStatsResponseIntervals1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RgmStatsResponseIntervals1} obj Optional instance to populate.
     * @return {module:model/RgmStatsResponseIntervals1} The populated <code>RgmStatsResponseIntervals1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RgmStatsResponseIntervals1();

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _ApiClient["default"].convertToType(data['channel'], 'Number');
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }

        if (data.hasOwnProperty('wh_del')) {
          obj['wh_del'] = _ApiClient["default"].convertToType(data['wh_del'], 'Number');
        }

        if (data.hasOwnProperty('curr_w')) {
          obj['curr_w'] = _ApiClient["default"].convertToType(data['curr_w'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RgmStatsResponseIntervals1;
}();
/**
 * The reporting channel identifier.
 * @member {Number} channel
 */


RgmStatsResponseIntervals1.prototype['channel'] = undefined;
/**
 * End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Number} end_at
 */

RgmStatsResponseIntervals1.prototype['end_at'] = undefined;
/**
 * Energy delivered during this interval, in Watt-hours.
 * @member {Number} wh_del
 */

RgmStatsResponseIntervals1.prototype['wh_del'] = undefined;
/**
 * Energy delivered during this interval, in Watts.
 * @member {Number} curr_w
 */

RgmStatsResponseIntervals1.prototype['curr_w'] = undefined;
var _default = RgmStatsResponseIntervals1;
exports["default"] = _default;