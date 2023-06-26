"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ArraysInventoryDetailsInner = _interopRequireDefault(require("./ArraysInventoryDetailsInner"));
var _ArraysLayersInner = _interopRequireDefault(require("./ArraysLayersInner"));
var _ModelArray = _interopRequireDefault(require("./ModelArray"));
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
 * The Arrays model module.
 * @module model/Arrays
 * @version 4.0
 */
var Arrays = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Arrays</code>.
   * @alias module:model/Arrays
   */
  function Arrays() {
    _classCallCheck(this, Arrays);
    Arrays.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Arrays, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Arrays</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Arrays} obj Optional instance to populate.
     * @return {module:model/Arrays} The populated <code>Arrays</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Arrays();
        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }
        if (data.hasOwnProperty('angle')) {
          obj['angle'] = _ApiClient["default"].convertToType(data['angle'], 'Number');
        }
        if (data.hasOwnProperty('arrays')) {
          obj['arrays'] = _ApiClient["default"].convertToType(data['arrays'], [_ModelArray["default"]]);
        }
        if (data.hasOwnProperty('inventory')) {
          obj['inventory'] = _ApiClient["default"].convertToType(data['inventory'], ['String']);
        }
        if (data.hasOwnProperty('inventory_details')) {
          obj['inventory_details'] = _ApiClient["default"].convertToType(data['inventory_details'], [_ArraysInventoryDetailsInner["default"]]);
        }
        if (data.hasOwnProperty('layers')) {
          obj['layers'] = _ApiClient["default"].convertToType(data['layers'], [_ArraysLayersInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Arrays</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Arrays</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['arrays']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['arrays'])) {
          throw new Error("Expected the field `arrays` to be an array in the JSON data but got " + data['arrays']);
        }
        // validate the optional field `arrays` (array)
        var _iterator = _createForOfIteratorHelper(data['arrays']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _ModelArray["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is an array
      if (!Array.isArray(data['inventory'])) {
        throw new Error("Expected the field `inventory` to be an array in the JSON data but got " + data['inventory']);
      }
      if (data['inventory_details']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['inventory_details'])) {
          throw new Error("Expected the field `inventory_details` to be an array in the JSON data but got " + data['inventory_details']);
        }
        // validate the optional field `inventory_details` (array)
        var _iterator2 = _createForOfIteratorHelper(data['inventory_details']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _ArraysInventoryDetailsInner["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['layers']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['layers'])) {
          throw new Error("Expected the field `layers` to be an array in the JSON data but got " + data['layers']);
        }
        // validate the optional field `layers` (array)
        var _iterator3 = _createForOfIteratorHelper(data['layers']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            _ArraysLayersInner["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      return true;
    }
  }]);
  return Arrays;
}();
/**
 * System ID.
 * @member {Number} system_id
 */
Arrays.prototype['system_id'] = undefined;

/**
 * System created Epoch time.
 * @member {Number} created_at
 */
Arrays.prototype['created_at'] = undefined;

/**
 * System updated Epoch time.
 * @member {Number} updated_at
 */
Arrays.prototype['updated_at'] = undefined;

/**
 * Angle of the system.
 * @member {Number} angle
 */
Arrays.prototype['angle'] = undefined;

/**
 * @member {Array.<module:model/ModelArray>} arrays
 */
Arrays.prototype['arrays'] = undefined;

/**
 * List of active inverter serial numbers.
 * @member {Array.<String>} inventory
 */
Arrays.prototype['inventory'] = undefined;

/**
 * @member {Array.<module:model/ArraysInventoryDetailsInner>} inventory_details
 */
Arrays.prototype['inventory_details'] = undefined;

/**
 * @member {Array.<module:model/ArraysLayersInner>} layers
 */
Arrays.prototype['layers'] = undefined;
var _default = Arrays;
exports["default"] = _default;