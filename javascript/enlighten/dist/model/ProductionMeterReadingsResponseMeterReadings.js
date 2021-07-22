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
 * The ProductionMeterReadingsResponseMeterReadings model module.
 * @module model/ProductionMeterReadingsResponseMeterReadings
 * @version 2.0
 */
var ProductionMeterReadingsResponseMeterReadings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductionMeterReadingsResponseMeterReadings</code>.
   * @alias module:model/ProductionMeterReadingsResponseMeterReadings
   * @param serialNumber {String} The serial number of the meter.
   * @param value {Number} The odometer reading, in Watt-hours.
   * @param readAt {Number} The time when the reading was taken, always prior or equal to the requested `end_at`.
   */
  function ProductionMeterReadingsResponseMeterReadings(serialNumber, value, readAt) {
    _classCallCheck(this, ProductionMeterReadingsResponseMeterReadings);

    ProductionMeterReadingsResponseMeterReadings.initialize(this, serialNumber, value, readAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProductionMeterReadingsResponseMeterReadings, null, [{
    key: "initialize",
    value: function initialize(obj, serialNumber, value, readAt) {
      obj['serial_number'] = serialNumber;
      obj['value'] = value;
      obj['read_at'] = readAt;
    }
    /**
     * Constructs a <code>ProductionMeterReadingsResponseMeterReadings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductionMeterReadingsResponseMeterReadings} obj Optional instance to populate.
     * @return {module:model/ProductionMeterReadingsResponseMeterReadings} The populated <code>ProductionMeterReadingsResponseMeterReadings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductionMeterReadingsResponseMeterReadings();

        if (data.hasOwnProperty('serial_number')) {
          obj['serial_number'] = _ApiClient["default"].convertToType(data['serial_number'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }

        if (data.hasOwnProperty('read_at')) {
          obj['read_at'] = _ApiClient["default"].convertToType(data['read_at'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProductionMeterReadingsResponseMeterReadings;
}();
/**
 * The serial number of the meter.
 * @member {String} serial_number
 */


ProductionMeterReadingsResponseMeterReadings.prototype['serial_number'] = undefined;
/**
 * The odometer reading, in Watt-hours.
 * @member {Number} value
 */

ProductionMeterReadingsResponseMeterReadings.prototype['value'] = undefined;
/**
 * The time when the reading was taken, always prior or equal to the requested `end_at`.
 * @member {Number} read_at
 */

ProductionMeterReadingsResponseMeterReadings.prototype['read_at'] = undefined;
var _default = ProductionMeterReadingsResponseMeterReadings;
exports["default"] = _default;