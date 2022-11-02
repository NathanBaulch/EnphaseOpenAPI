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
 * The ConflictError model module.
 * @module model/ConflictError
 * @version 2.0
 */
var ConflictError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConflictError</code>.
   * @alias module:model/ConflictError
   * @param reason {String} 
   * @param message {Array.<String>} 
   * @param period {module:model/ConflictError.PeriodEnum} 
   * @param periodStart {Number} 
   * @param periodEnd {Number} 
   * @param limit {Number} 
   */
  function ConflictError(reason, message, period, periodStart, periodEnd, limit) {
    _classCallCheck(this, ConflictError);
    ConflictError.initialize(this, reason, message, period, periodStart, periodEnd, limit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConflictError, null, [{
    key: "initialize",
    value: function initialize(obj, reason, message, period, periodStart, periodEnd, limit) {
      obj['reason'] = reason;
      obj['message'] = message;
      obj['period'] = period;
      obj['period_start'] = periodStart;
      obj['period_end'] = periodEnd;
      obj['limit'] = limit;
    }

    /**
     * Constructs a <code>ConflictError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConflictError} obj Optional instance to populate.
     * @return {module:model/ConflictError} The populated <code>ConflictError</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConflictError();
        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }
        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], ['String']);
        }
        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'String');
        }
        if (data.hasOwnProperty('period_start')) {
          obj['period_start'] = _ApiClient["default"].convertToType(data['period_start'], 'Number');
        }
        if (data.hasOwnProperty('period_end')) {
          obj['period_end'] = _ApiClient["default"].convertToType(data['period_end'], 'Number');
        }
        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ConflictError;
}();
/**
 * @member {String} reason
 */
ConflictError.prototype['reason'] = undefined;

/**
 * @member {Array.<String>} message
 */
ConflictError.prototype['message'] = undefined;

/**
 * @member {module:model/ConflictError.PeriodEnum} period
 */
ConflictError.prototype['period'] = undefined;

/**
 * @member {Number} period_start
 */
ConflictError.prototype['period_start'] = undefined;

/**
 * @member {Number} period_end
 */
ConflictError.prototype['period_end'] = undefined;

/**
 * @member {Number} limit
 */
ConflictError.prototype['limit'] = undefined;

/**
 * Allowed values for the <code>period</code> property.
 * @enum {String}
 * @readonly
 */
ConflictError['PeriodEnum'] = {
  /**
   * value: "hour"
   * @const
   */
  "hour": "hour",
  /**
   * value: "minute"
   * @const
   */
  "minute": "minute",
  /**
   * value: "second"
   * @const
   */
  "second": "second"
};
var _default = ConflictError;
exports["default"] = _default;