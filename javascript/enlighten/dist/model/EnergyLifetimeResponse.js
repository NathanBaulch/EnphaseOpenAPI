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
 * The EnergyLifetimeResponse model module.
 * @module model/EnergyLifetimeResponse
 * @version 2.0
 */
var EnergyLifetimeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnergyLifetimeResponse</code>.
   * @alias module:model/EnergyLifetimeResponse
   * @param startDate {Date} When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
   * @param systemId {Number} The identifier of the system.
   * @param production {Array.<Number>} An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty.
   * @param meta {module:model/Meta} 
   */
  function EnergyLifetimeResponse(startDate, systemId, production, meta) {
    _classCallCheck(this, EnergyLifetimeResponse);
    EnergyLifetimeResponse.initialize(this, startDate, systemId, production, meta);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(EnergyLifetimeResponse, null, [{
    key: "initialize",
    value: function initialize(obj, startDate, systemId, production, meta) {
      obj['start_date'] = startDate;
      obj['system_id'] = systemId;
      obj['production'] = production;
      obj['meta'] = meta;
    }

    /**
     * Constructs a <code>EnergyLifetimeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnergyLifetimeResponse} obj Optional instance to populate.
     * @return {module:model/EnergyLifetimeResponse} The populated <code>EnergyLifetimeResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnergyLifetimeResponse();
        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }
        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }
        if (data.hasOwnProperty('production')) {
          obj['production'] = _ApiClient["default"].convertToType(data['production'], ['Number']);
        }
        if (data.hasOwnProperty('micro_production')) {
          obj['micro_production'] = _ApiClient["default"].convertToType(data['micro_production'], ['Number']);
        }
        if (data.hasOwnProperty('meter_production')) {
          obj['meter_production'] = _ApiClient["default"].convertToType(data['meter_production'], ['Number']);
        }
        if (data.hasOwnProperty('meter_start_date')) {
          obj['meter_start_date'] = _ApiClient["default"].convertToType(data['meter_start_date'], 'Date');
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnergyLifetimeResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnergyLifetimeResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(EnergyLifetimeResponse.RequiredProperties),
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
      if (!Array.isArray(data['production'])) {
        throw new Error("Expected the field `production` to be an array in the JSON data but got " + data['production']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['micro_production'])) {
        throw new Error("Expected the field `micro_production` to be an array in the JSON data but got " + data['micro_production']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['meter_production'])) {
        throw new Error("Expected the field `meter_production` to be an array in the JSON data but got " + data['meter_production']);
      }
      // validate the optional field `meta`
      if (data['meta']) {
        // data not null
        _Meta["default"].validateJSON(data['meta']);
      }
      return true;
    }
  }]);
  return EnergyLifetimeResponse;
}();
EnergyLifetimeResponse.RequiredProperties = ["start_date", "system_id", "production", "meta"];

/**
 * When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
 * @member {Date} start_date
 */
EnergyLifetimeResponse.prototype['start_date'] = undefined;

/**
 * The identifier of the system.
 * @member {Number} system_id
 */
EnergyLifetimeResponse.prototype['system_id'] = undefined;

/**
 * An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty.
 * @member {Array.<Number>} production
 */
EnergyLifetimeResponse.prototype['production'] = undefined;

/**
 * @member {Array.<Number>} micro_production
 */
EnergyLifetimeResponse.prototype['micro_production'] = undefined;

/**
 * @member {Array.<Number>} meter_production
 */
EnergyLifetimeResponse.prototype['meter_production'] = undefined;

/**
 * The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter.
 * @member {Date} meter_start_date
 */
EnergyLifetimeResponse.prototype['meter_start_date'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
EnergyLifetimeResponse.prototype['meta'] = undefined;
var _default = EnergyLifetimeResponse;
exports["default"] = _default;