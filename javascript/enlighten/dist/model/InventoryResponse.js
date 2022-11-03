"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _InventoryResponseEnvoysInner = _interopRequireDefault(require("./InventoryResponseEnvoysInner"));
var _InventoryResponseMetersInner = _interopRequireDefault(require("./InventoryResponseMetersInner"));
var _Meta = _interopRequireDefault(require("./Meta"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InventoryResponse model module.
 * @module model/InventoryResponse
 * @version 2.0
 */
var InventoryResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InventoryResponse</code>.
   * @alias module:model/InventoryResponse
   * @param systemId {Number} Enlighten ID for this system.
   * @param inverters {Array.<module:model/InventoryResponseEnvoysInner>} A list of inverters on this system, including serial and model numbers.
   * @param meters {Array.<module:model/InventoryResponseMetersInner>} A list of meters on this system, including serial number, manufacturer, and model number.
   * @param meta {module:model/Meta} 
   */
  function InventoryResponse(systemId, inverters, meters, meta) {
    _classCallCheck(this, InventoryResponse);
    InventoryResponse.initialize(this, systemId, inverters, meters, meta);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InventoryResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systemId, inverters, meters, meta) {
      obj['system_id'] = systemId;
      obj['inverters'] = inverters;
      obj['meters'] = meters;
      obj['meta'] = meta;
    }

    /**
     * Constructs a <code>InventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InventoryResponse} obj Optional instance to populate.
     * @return {module:model/InventoryResponse} The populated <code>InventoryResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InventoryResponse();
        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }
        if (data.hasOwnProperty('envoys')) {
          obj['envoys'] = _ApiClient["default"].convertToType(data['envoys'], [_InventoryResponseEnvoysInner["default"]]);
        }
        if (data.hasOwnProperty('inverters')) {
          obj['inverters'] = _ApiClient["default"].convertToType(data['inverters'], [_InventoryResponseEnvoysInner["default"]]);
        }
        if (data.hasOwnProperty('meters')) {
          obj['meters'] = _ApiClient["default"].convertToType(data['meters'], [_InventoryResponseMetersInner["default"]]);
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InventoryResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InventoryResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(InventoryResponse.RequiredProperties),
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
      if (data['envoys']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['envoys'])) {
          throw new Error("Expected the field `envoys` to be an array in the JSON data but got " + data['envoys']);
        }
        // validate the optional field `envoys` (array)
        var _iterator2 = _createForOfIteratorHelper(data['envoys']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _InventoryResponseEnvoysInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['inverters']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['inverters'])) {
          throw new Error("Expected the field `inverters` to be an array in the JSON data but got " + data['inverters']);
        }
        // validate the optional field `inverters` (array)
        var _iterator3 = _createForOfIteratorHelper(data['inverters']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _InventoryResponseEnvoysInner["default"].validateJsonObject(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      if (data['meters']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['meters'])) {
          throw new Error("Expected the field `meters` to be an array in the JSON data but got " + data['meters']);
        }
        // validate the optional field `meters` (array)
        var _iterator4 = _createForOfIteratorHelper(data['meters']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item2 = _step4.value;
            _InventoryResponseMetersInner["default"].validateJsonObject(_item2);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
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
  return InventoryResponse;
}();
InventoryResponse.RequiredProperties = ["system_id", "inverters", "meters", "meta"];

/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */
InventoryResponse.prototype['system_id'] = undefined;

/**
 * A list of Envoys on this system, including serial number.
 * @member {Array.<module:model/InventoryResponseEnvoysInner>} envoys
 */
InventoryResponse.prototype['envoys'] = undefined;

/**
 * A list of inverters on this system, including serial and model numbers.
 * @member {Array.<module:model/InventoryResponseEnvoysInner>} inverters
 */
InventoryResponse.prototype['inverters'] = undefined;

/**
 * A list of meters on this system, including serial number, manufacturer, and model number.
 * @member {Array.<module:model/InventoryResponseMetersInner>} meters
 */
InventoryResponse.prototype['meters'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
InventoryResponse.prototype['meta'] = undefined;
var _default = InventoryResponse;
exports["default"] = _default;