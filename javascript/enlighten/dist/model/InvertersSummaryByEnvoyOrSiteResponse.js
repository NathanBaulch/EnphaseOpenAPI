"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner = _interopRequireDefault(require("./InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InvertersSummaryByEnvoyOrSiteResponse model module.
 * @module model/InvertersSummaryByEnvoyOrSiteResponse
 * @version 2.0
 */
var InvertersSummaryByEnvoyOrSiteResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvertersSummaryByEnvoyOrSiteResponse</code>.
   * @alias module:model/InvertersSummaryByEnvoyOrSiteResponse
   * @param signalStrength {Number} 
   * @param microInverters {Array.<module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner>} A list of active inverters on this system, including serial and model numbers.
   */
  function InvertersSummaryByEnvoyOrSiteResponse(signalStrength, microInverters) {
    _classCallCheck(this, InvertersSummaryByEnvoyOrSiteResponse);
    InvertersSummaryByEnvoyOrSiteResponse.initialize(this, signalStrength, microInverters);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InvertersSummaryByEnvoyOrSiteResponse, null, [{
    key: "initialize",
    value: function initialize(obj, signalStrength, microInverters) {
      obj['signal_strength'] = signalStrength;
      obj['micro_inverters'] = microInverters;
    }

    /**
     * Constructs a <code>InvertersSummaryByEnvoyOrSiteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvertersSummaryByEnvoyOrSiteResponse} obj Optional instance to populate.
     * @return {module:model/InvertersSummaryByEnvoyOrSiteResponse} The populated <code>InvertersSummaryByEnvoyOrSiteResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvertersSummaryByEnvoyOrSiteResponse();
        if (data.hasOwnProperty('signal_strength')) {
          obj['signal_strength'] = _ApiClient["default"].convertToType(data['signal_strength'], 'Number');
        }
        if (data.hasOwnProperty('micro_inverters')) {
          obj['micro_inverters'] = _ApiClient["default"].convertToType(data['micro_inverters'], [_InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvertersSummaryByEnvoyOrSiteResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvertersSummaryByEnvoyOrSiteResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(InvertersSummaryByEnvoyOrSiteResponse.RequiredProperties),
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
      if (data['micro_inverters']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['micro_inverters'])) {
          throw new Error("Expected the field `micro_inverters` to be an array in the JSON data but got " + data['micro_inverters']);
        }
        // validate the optional field `micro_inverters` (array)
        var _iterator2 = _createForOfIteratorHelper(data['micro_inverters']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner["default"].validateJsonObject(item);
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
  return InvertersSummaryByEnvoyOrSiteResponse;
}();
InvertersSummaryByEnvoyOrSiteResponse.RequiredProperties = ["signal_strength", "micro_inverters"];

/**
 * @member {Number} signal_strength
 */
InvertersSummaryByEnvoyOrSiteResponse.prototype['signal_strength'] = undefined;

/**
 * A list of active inverters on this system, including serial and model numbers.
 * @member {Array.<module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner>} micro_inverters
 */
InvertersSummaryByEnvoyOrSiteResponse.prototype['micro_inverters'] = undefined;
var _default = InvertersSummaryByEnvoyOrSiteResponse;
exports["default"] = _default;