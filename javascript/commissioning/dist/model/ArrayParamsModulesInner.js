"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
                                                                                                                                                                                                                                                                                                                                                                                               * The Enphase Commissioning API
                                                                                                                                                                                                                                                                                                                                                                                               * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 4.0
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The ArrayParamsModulesInner model module.
 * @module model/ArrayParamsModulesInner
 * @version 4.0
 */
var ArrayParamsModulesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ArrayParamsModulesInner</code>.
   * @alias module:model/ArrayParamsModulesInner
   * @param left {Number} Left axis position of module w.r.t Array. Increase the value to move the module to the right, and decrease to move it to the left.
   * @param top {Number} Top axis position of module w.r.t Array. Increase the value to move the module up, and decrease to move it down.
   * @param angle {Number} Angle of the module. Rotate the module clockwise by the given value w.r.t array angle. For example to rotate the array clockwise by 90 degrees pass 90.
   * @param serialNum {String} Inverter serial number mapped with this module.
   */
  function ArrayParamsModulesInner(left, top, angle, serialNum) {
    _classCallCheck(this, ArrayParamsModulesInner);
    ArrayParamsModulesInner.initialize(this, left, top, angle, serialNum);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ArrayParamsModulesInner, null, [{
    key: "initialize",
    value: function initialize(obj, left, top, angle, serialNum) {
      obj['left'] = left;
      obj['top'] = top;
      obj['angle'] = angle;
      obj['serial_num'] = serialNum;
    }

    /**
     * Constructs a <code>ArrayParamsModulesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArrayParamsModulesInner} obj Optional instance to populate.
     * @return {module:model/ArrayParamsModulesInner} The populated <code>ArrayParamsModulesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ArrayParamsModulesInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('left')) {
          obj['left'] = _ApiClient["default"].convertToType(data['left'], 'Number');
        }
        if (data.hasOwnProperty('top')) {
          obj['top'] = _ApiClient["default"].convertToType(data['top'], 'Number');
        }
        if (data.hasOwnProperty('angle')) {
          obj['angle'] = _ApiClient["default"].convertToType(data['angle'], 'Number');
        }
        if (data.hasOwnProperty('serial_num')) {
          obj['serial_num'] = _ApiClient["default"].convertToType(data['serial_num'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArrayParamsModulesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArrayParamsModulesInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ArrayParamsModulesInner.RequiredProperties),
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
      if (data['serial_num'] && !(typeof data['serial_num'] === 'string' || data['serial_num'] instanceof String)) {
        throw new Error("Expected the field `serial_num` to be a primitive type in the JSON string but got " + data['serial_num']);
      }
      return true;
    }
  }]);
  return ArrayParamsModulesInner;
}();
ArrayParamsModulesInner.RequiredProperties = ["left", "top", "angle", "serial_num"];

/**
 * ID of the module. ID cannot be changed. It is only used to identify the array that needs to be updated.
 * @member {Number} id
 */
ArrayParamsModulesInner.prototype['id'] = undefined;

/**
 * Left axis position of module w.r.t Array. Increase the value to move the module to the right, and decrease to move it to the left.
 * @member {Number} left
 */
ArrayParamsModulesInner.prototype['left'] = undefined;

/**
 * Top axis position of module w.r.t Array. Increase the value to move the module up, and decrease to move it down.
 * @member {Number} top
 */
ArrayParamsModulesInner.prototype['top'] = undefined;

/**
 * Angle of the module. Rotate the module clockwise by the given value w.r.t array angle. For example to rotate the array clockwise by 90 degrees pass 90.
 * @member {Number} angle
 */
ArrayParamsModulesInner.prototype['angle'] = undefined;

/**
 * Inverter serial number mapped with this module.
 * @member {String} serial_num
 */
ArrayParamsModulesInner.prototype['serial_num'] = undefined;
var _default = ArrayParamsModulesInner;
exports["default"] = _default;