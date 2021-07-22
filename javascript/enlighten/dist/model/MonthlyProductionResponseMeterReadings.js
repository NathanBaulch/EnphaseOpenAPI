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
 * The MonthlyProductionResponseMeterReadings model module.
 * @module model/MonthlyProductionResponseMeterReadings
 * @version 2.0
 */
var MonthlyProductionResponseMeterReadings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MonthlyProductionResponseMeterReadings</code>.
   * @alias module:model/MonthlyProductionResponseMeterReadings
   * @param serialNumber {String} 
   * @param start {Number} 
   * @param end {Number} 
   */
  function MonthlyProductionResponseMeterReadings(serialNumber, start, end) {
    _classCallCheck(this, MonthlyProductionResponseMeterReadings);

    MonthlyProductionResponseMeterReadings.initialize(this, serialNumber, start, end);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MonthlyProductionResponseMeterReadings, null, [{
    key: "initialize",
    value: function initialize(obj, serialNumber, start, end) {
      obj['serial_number'] = serialNumber;
      obj['start'] = start;
      obj['end'] = end;
    }
    /**
     * Constructs a <code>MonthlyProductionResponseMeterReadings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MonthlyProductionResponseMeterReadings} obj Optional instance to populate.
     * @return {module:model/MonthlyProductionResponseMeterReadings} The populated <code>MonthlyProductionResponseMeterReadings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MonthlyProductionResponseMeterReadings();

        if (data.hasOwnProperty('serial_number')) {
          obj['serial_number'] = _ApiClient["default"].convertToType(data['serial_number'], 'String');
        }

        if (data.hasOwnProperty('start')) {
          obj['start'] = _ApiClient["default"].convertToType(data['start'], 'Number');
        }

        if (data.hasOwnProperty('end')) {
          obj['end'] = _ApiClient["default"].convertToType(data['end'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return MonthlyProductionResponseMeterReadings;
}();
/**
 * @member {String} serial_number
 */


MonthlyProductionResponseMeterReadings.prototype['serial_number'] = undefined;
/**
 * @member {Number} start
 */

MonthlyProductionResponseMeterReadings.prototype['start'] = undefined;
/**
 * @member {Number} end
 */

MonthlyProductionResponseMeterReadings.prototype['end'] = undefined;
var _default = MonthlyProductionResponseMeterReadings;
exports["default"] = _default;