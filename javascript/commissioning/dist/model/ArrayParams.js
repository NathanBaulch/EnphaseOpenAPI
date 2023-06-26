"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ArrayParamsModulesInner = _interopRequireDefault(require("./ArrayParamsModulesInner"));
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
 * The ArrayParams model module.
 * @module model/ArrayParams
 * @version 4.0
 */
var ArrayParams = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ArrayParams</code>.
   * @alias module:model/ArrayParams
   * @param label {String} Name of the array.
   * @param angle {Number} Angle of the array. Rotate the array clockwise by the given value.
   * @param tilt {String} Tilt of the array.
   * @param provisionedEnvoy {String} Provisioned envoy.
   * @param left {Number} Left axis position of array. Increase the value to move the array to the right, and decrease to move it to the left.
   * @param top {Number} Top axis position of array. Increase the value to move the array up, and decrease to move it down.
   * @param modules {Array.<module:model/ArrayParamsModulesInner>} 
   */
  function ArrayParams(label, angle, tilt, provisionedEnvoy, left, top, modules) {
    _classCallCheck(this, ArrayParams);
    ArrayParams.initialize(this, label, angle, tilt, provisionedEnvoy, left, top, modules);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ArrayParams, null, [{
    key: "initialize",
    value: function initialize(obj, label, angle, tilt, provisionedEnvoy, left, top, modules) {
      obj['label'] = label;
      obj['angle'] = angle;
      obj['tilt'] = tilt;
      obj['provisioned_envoy'] = provisionedEnvoy;
      obj['left'] = left;
      obj['top'] = top;
      obj['modules'] = modules;
    }

    /**
     * Constructs a <code>ArrayParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArrayParams} obj Optional instance to populate.
     * @return {module:model/ArrayParams} The populated <code>ArrayParams</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ArrayParams();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
        if (data.hasOwnProperty('angle')) {
          obj['angle'] = _ApiClient["default"].convertToType(data['angle'], 'Number');
        }
        if (data.hasOwnProperty('tilt')) {
          obj['tilt'] = _ApiClient["default"].convertToType(data['tilt'], 'String');
        }
        if (data.hasOwnProperty('provisioned_envoy')) {
          obj['provisioned_envoy'] = _ApiClient["default"].convertToType(data['provisioned_envoy'], 'String');
        }
        if (data.hasOwnProperty('left')) {
          obj['left'] = _ApiClient["default"].convertToType(data['left'], 'Number');
        }
        if (data.hasOwnProperty('top')) {
          obj['top'] = _ApiClient["default"].convertToType(data['top'], 'Number');
        }
        if (data.hasOwnProperty('modules')) {
          obj['modules'] = _ApiClient["default"].convertToType(data['modules'], [_ArrayParamsModulesInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArrayParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArrayParams</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ArrayParams.RequiredProperties),
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
      if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
        throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
      }
      // ensure the json data is a string
      if (data['tilt'] && !(typeof data['tilt'] === 'string' || data['tilt'] instanceof String)) {
        throw new Error("Expected the field `tilt` to be a primitive type in the JSON string but got " + data['tilt']);
      }
      // ensure the json data is a string
      if (data['provisioned_envoy'] && !(typeof data['provisioned_envoy'] === 'string' || data['provisioned_envoy'] instanceof String)) {
        throw new Error("Expected the field `provisioned_envoy` to be a primitive type in the JSON string but got " + data['provisioned_envoy']);
      }
      if (data['modules']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['modules'])) {
          throw new Error("Expected the field `modules` to be an array in the JSON data but got " + data['modules']);
        }
        // validate the optional field `modules` (array)
        var _iterator2 = _createForOfIteratorHelper(data['modules']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _ArrayParamsModulesInner["default"].validateJSON(item);
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
  return ArrayParams;
}();
ArrayParams.RequiredProperties = ["label", "angle", "tilt", "provisioned_envoy", "left", "top", "modules"];

/**
 * ID of the array. ID cannot be changed. It is only used to identify the array that needs to be updated.
 * @member {Number} id
 */
ArrayParams.prototype['id'] = undefined;

/**
 * Name of the array.
 * @member {String} label
 */
ArrayParams.prototype['label'] = undefined;

/**
 * Angle of the array. Rotate the array clockwise by the given value.
 * @member {Number} angle
 */
ArrayParams.prototype['angle'] = undefined;

/**
 * Tilt of the array.
 * @member {String} tilt
 */
ArrayParams.prototype['tilt'] = undefined;

/**
 * Provisioned envoy.
 * @member {String} provisioned_envoy
 */
ArrayParams.prototype['provisioned_envoy'] = undefined;

/**
 * Left axis position of array. Increase the value to move the array to the right, and decrease to move it to the left.
 * @member {Number} left
 */
ArrayParams.prototype['left'] = undefined;

/**
 * Top axis position of array. Increase the value to move the array up, and decrease to move it down.
 * @member {Number} top
 */
ArrayParams.prototype['top'] = undefined;

/**
 * @member {Array.<module:model/ArrayParamsModulesInner>} modules
 */
ArrayParams.prototype['modules'] = undefined;
var _default = ArrayParams;
exports["default"] = _default;