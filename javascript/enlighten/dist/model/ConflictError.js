"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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

    /**
     * Validates the JSON data with respect to <code>ConflictError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConflictError</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ConflictError.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
        throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['message'])) {
        throw new Error("Expected the field `message` to be an array in the JSON data but got " + data['message']);
      }
      // ensure the json data is a string
      if (data['period'] && !(typeof data['period'] === 'string' || data['period'] instanceof String)) {
        throw new Error("Expected the field `period` to be a primitive type in the JSON string but got " + data['period']);
      }
      return true;
    }
  }]);
  return ConflictError;
}();
ConflictError.RequiredProperties = ["reason", "message", "period", "period_start", "period_end", "limit"];

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