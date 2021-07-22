"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Meta = _interopRequireDefault(require("./Meta"));

var _ProductionMeterReadingsResponseMeterReadings = _interopRequireDefault(require("./ProductionMeterReadingsResponseMeterReadings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProductionMeterReadingsResponse model module.
 * @module model/ProductionMeterReadingsResponse
 * @version 2.0
 */
var ProductionMeterReadingsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductionMeterReadingsResponse</code>.
   * @alias module:model/ProductionMeterReadingsResponse
   * @param systemId {Number} 
   * @param meterReadings {Array.<module:model/ProductionMeterReadingsResponseMeterReadings>} 
   * @param meta {module:model/Meta} 
   */
  function ProductionMeterReadingsResponse(systemId, meterReadings, meta) {
    _classCallCheck(this, ProductionMeterReadingsResponse);

    ProductionMeterReadingsResponse.initialize(this, systemId, meterReadings, meta);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProductionMeterReadingsResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systemId, meterReadings, meta) {
      obj['system_id'] = systemId;
      obj['meter_readings'] = meterReadings;
      obj['meta'] = meta;
    }
    /**
     * Constructs a <code>ProductionMeterReadingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductionMeterReadingsResponse} obj Optional instance to populate.
     * @return {module:model/ProductionMeterReadingsResponse} The populated <code>ProductionMeterReadingsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductionMeterReadingsResponse();

        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }

        if (data.hasOwnProperty('meter_readings')) {
          obj['meter_readings'] = _ApiClient["default"].convertToType(data['meter_readings'], [_ProductionMeterReadingsResponseMeterReadings["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
  }]);

  return ProductionMeterReadingsResponse;
}();
/**
 * @member {Number} system_id
 */


ProductionMeterReadingsResponse.prototype['system_id'] = undefined;
/**
 * @member {Array.<module:model/ProductionMeterReadingsResponseMeterReadings>} meter_readings
 */

ProductionMeterReadingsResponse.prototype['meter_readings'] = undefined;
/**
 * @member {module:model/Meta} meta
 */

ProductionMeterReadingsResponse.prototype['meta'] = undefined;
var _default = ProductionMeterReadingsResponse;
exports["default"] = _default;