"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Meta = _interopRequireDefault(require("./Meta"));
var _StatsResponseIntervalsInner = _interopRequireDefault(require("./StatsResponseIntervalsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * The Enlighten Systems API
                                                                                                                                                                                                                                                                                                                                                                                               * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 2.0
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
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
   * @param intervals {Array.<module:model/StatsResponseIntervalsInner>} A list of intervals between the requested start and end times.
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
          obj['intervals'] = _ApiClient["default"].convertToType(data['intervals'], [_StatsResponseIntervalsInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StatsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StatsResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(StatsResponse.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `meta`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['meta']) {
        // data not null
        _Meta["default"].validateJSON(data['meta']);
      }
      if (data['intervals']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['intervals'])) {
          throw new Error("Expected the field `intervals` to be an array in the JSON data but got " + data['intervals']);
        }
        // validate the optional field `intervals` (array)
        var _iterator2 = _createForOfIteratorHelper(data['intervals']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _StatsResponseIntervalsInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      return true;
    }
  }]);
  return StatsResponse;
}();
StatsResponse.RequiredProperties = ["system_id", "total_devices", "meta", "intervals"];

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
 * @member {Array.<module:model/StatsResponseIntervalsInner>} intervals
 */
StatsResponse.prototype['intervals'] = undefined;
var _default = StatsResponse;
exports["default"] = _default;