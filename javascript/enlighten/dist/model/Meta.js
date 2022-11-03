"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Status = _interopRequireDefault(require("./Status"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Meta model module.
 * @module model/Meta
 * @version 2.0
 */
var Meta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Meta</code>.
   * Information about the system that you can use to ascertain the timeliness of the production data included in the response.
   * @alias module:model/Meta
   * @param status {module:model/Status} 
   * @param lastReportAt {Number} 
   * @param lastEnergyAt {Number} 
   * @param operationalAt {Number} 
   */
  function Meta(status, lastReportAt, lastEnergyAt, operationalAt) {
    _classCallCheck(this, Meta);
    Meta.initialize(this, status, lastReportAt, lastEnergyAt, operationalAt);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Meta, null, [{
    key: "initialize",
    value: function initialize(obj, status, lastReportAt, lastEnergyAt, operationalAt) {
      obj['status'] = status;
      obj['last_report_at'] = lastReportAt;
      obj['last_energy_at'] = lastEnergyAt;
      obj['operational_at'] = operationalAt;
    }

    /**
     * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Meta} obj Optional instance to populate.
     * @return {module:model/Meta} The populated <code>Meta</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Meta();
        if (data.hasOwnProperty('status')) {
          obj['status'] = _Status["default"].constructFromObject(data['status']);
        }
        if (data.hasOwnProperty('last_report_at')) {
          obj['last_report_at'] = _ApiClient["default"].convertToType(data['last_report_at'], 'Number');
        }
        if (data.hasOwnProperty('last_energy_at')) {
          obj['last_energy_at'] = _ApiClient["default"].convertToType(data['last_energy_at'], 'Number');
        }
        if (data.hasOwnProperty('operational_at')) {
          obj['operational_at'] = _ApiClient["default"].convertToType(data['operational_at'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Meta</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Meta</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Meta.RequiredProperties),
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
      return true;
    }
  }]);
  return Meta;
}();
Meta.RequiredProperties = ["status", "last_report_at", "last_energy_at", "operational_at"];

/**
 * @member {module:model/Status} status
 */
Meta.prototype['status'] = undefined;

/**
 * @member {Number} last_report_at
 */
Meta.prototype['last_report_at'] = undefined;

/**
 * @member {Number} last_energy_at
 */
Meta.prototype['last_energy_at'] = undefined;

/**
 * @member {Number} operational_at
 */
Meta.prototype['operational_at'] = undefined;
var _default = Meta;
exports["default"] = _default;