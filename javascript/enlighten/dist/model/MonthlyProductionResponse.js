"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Meta = _interopRequireDefault(require("./Meta"));
var _MonthlyProductionResponseMeterReadingsInner = _interopRequireDefault(require("./MonthlyProductionResponseMeterReadingsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The MonthlyProductionResponse model module.
 * @module model/MonthlyProductionResponse
 * @version 2.0
 */
var MonthlyProductionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MonthlyProductionResponse</code>.
   * @alias module:model/MonthlyProductionResponse
   * @param systemId {Number} Enlighten ID for this system.
   * @param startDate {Date} First day included in the reporting period. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
   * @param endDate {Date} Last day included in the reporting period.
   * @param productionWh {Number} Total production for the requested period in Watt-hours.
   * @param meterReadings {Array.<module:model/MonthlyProductionResponseMeterReadingsInner>} If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty.
   * @param meta {module:model/Meta} 
   */
  function MonthlyProductionResponse(systemId, startDate, endDate, productionWh, meterReadings, meta) {
    _classCallCheck(this, MonthlyProductionResponse);
    MonthlyProductionResponse.initialize(this, systemId, startDate, endDate, productionWh, meterReadings, meta);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(MonthlyProductionResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systemId, startDate, endDate, productionWh, meterReadings, meta) {
      obj['system_id'] = systemId;
      obj['start_date'] = startDate;
      obj['end_date'] = endDate;
      obj['production_wh'] = productionWh;
      obj['meter_readings'] = meterReadings;
      obj['meta'] = meta;
    }

    /**
     * Constructs a <code>MonthlyProductionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MonthlyProductionResponse} obj Optional instance to populate.
     * @return {module:model/MonthlyProductionResponse} The populated <code>MonthlyProductionResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MonthlyProductionResponse();
        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }
        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }
        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }
        if (data.hasOwnProperty('production_wh')) {
          obj['production_wh'] = _ApiClient["default"].convertToType(data['production_wh'], 'Number');
        }
        if (data.hasOwnProperty('meter_readings')) {
          obj['meter_readings'] = _ApiClient["default"].convertToType(data['meter_readings'], [_MonthlyProductionResponseMeterReadingsInner["default"]]);
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MonthlyProductionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MonthlyProductionResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(MonthlyProductionResponse.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['meter_readings']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['meter_readings'])) {
          throw new Error("Expected the field `meter_readings` to be an array in the JSON data but got " + data['meter_readings']);
        }
        // validate the optional field `meter_readings` (array)
        var _iterator2 = _createForOfIteratorHelper(data['meter_readings']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _MonthlyProductionResponseMeterReadingsInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // validate the optional field `meta`
      if (data['meta']) {
        // data not null
        _Meta["default"].validateJSON(data['meta']);
      }
      return true;
    }
  }]);
  return MonthlyProductionResponse;
}();
MonthlyProductionResponse.RequiredProperties = ["system_id", "start_date", "end_date", "production_wh", "meter_readings", "meta"];

/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */
MonthlyProductionResponse.prototype['system_id'] = undefined;

/**
 * First day included in the reporting period. The format is `YYYY-mm-dd` unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
 * @member {Date} start_date
 */
MonthlyProductionResponse.prototype['start_date'] = undefined;

/**
 * Last day included in the reporting period.
 * @member {Date} end_date
 */
MonthlyProductionResponse.prototype['end_date'] = undefined;

/**
 * Total production for the requested period in Watt-hours.
 * @member {Number} production_wh
 */
MonthlyProductionResponse.prototype['production_wh'] = undefined;

/**
 * If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty.
 * @member {Array.<module:model/MonthlyProductionResponseMeterReadingsInner>} meter_readings
 */
MonthlyProductionResponse.prototype['meter_readings'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
MonthlyProductionResponse.prototype['meta'] = undefined;
var _default = MonthlyProductionResponse;
exports["default"] = _default;