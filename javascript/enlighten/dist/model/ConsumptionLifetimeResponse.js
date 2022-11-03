"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Meta = _interopRequireDefault(require("./Meta"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ConsumptionLifetimeResponse model module.
 * @module model/ConsumptionLifetimeResponse
 * @version 2.0
 */
var ConsumptionLifetimeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConsumptionLifetimeResponse</code>.
   * @alias module:model/ConsumptionLifetimeResponse
   * @param startDate {Date} When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
   * @param consumption {Array.<Number>} An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period.
   * @param meta {module:model/Meta} 
   */
  function ConsumptionLifetimeResponse(startDate, consumption, meta) {
    _classCallCheck(this, ConsumptionLifetimeResponse);
    ConsumptionLifetimeResponse.initialize(this, startDate, consumption, meta);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConsumptionLifetimeResponse, null, [{
    key: "initialize",
    value: function initialize(obj, startDate, consumption, meta) {
      obj['start_date'] = startDate;
      obj['consumption'] = consumption;
      obj['meta'] = meta;
    }

    /**
     * Constructs a <code>ConsumptionLifetimeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsumptionLifetimeResponse} obj Optional instance to populate.
     * @return {module:model/ConsumptionLifetimeResponse} The populated <code>ConsumptionLifetimeResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConsumptionLifetimeResponse();
        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }
        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }
        if (data.hasOwnProperty('consumption')) {
          obj['consumption'] = _ApiClient["default"].convertToType(data['consumption'], ['Number']);
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConsumptionLifetimeResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConsumptionLifetimeResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ConsumptionLifetimeResponse.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is an array
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!Array.isArray(data['consumption'])) {
        throw new Error("Expected the field `consumption` to be an array in the JSON data but got " + data['consumption']);
      }
      // validate the optional field `meta`
      if (data['meta']) {
        // data not null
        _Meta["default"].validateJSON(data['meta']);
      }
      return true;
    }
  }]);
  return ConsumptionLifetimeResponse;
}();
ConsumptionLifetimeResponse.RequiredProperties = ["start_date", "consumption", "meta"];

/**
 * When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
 * @member {Date} start_date
 */
ConsumptionLifetimeResponse.prototype['start_date'] = undefined;

/**
 * The identifier of the system.
 * @member {Number} system_id
 */
ConsumptionLifetimeResponse.prototype['system_id'] = undefined;

/**
 * An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period.
 * @member {Array.<Number>} consumption
 */
ConsumptionLifetimeResponse.prototype['consumption'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
ConsumptionLifetimeResponse.prototype['meta'] = undefined;
var _default = ConsumptionLifetimeResponse;
exports["default"] = _default;