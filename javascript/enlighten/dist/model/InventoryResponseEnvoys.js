"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InventoryResponseEnvoys model module.
 * @module model/InventoryResponseEnvoys
 * @version 2.0
 */
var InventoryResponseEnvoys = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InventoryResponseEnvoys</code>.
   * @alias module:model/InventoryResponseEnvoys
   * @param sn {String} 
   * @param model {String} 
   * @param sku {String} 
   */
  function InventoryResponseEnvoys(sn, model, sku) {
    _classCallCheck(this, InventoryResponseEnvoys);
    InventoryResponseEnvoys.initialize(this, sn, model, sku);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InventoryResponseEnvoys, null, [{
    key: "initialize",
    value: function initialize(obj, sn, model, sku) {
      obj['sn'] = sn;
      obj['model'] = model;
      obj['sku'] = sku;
    }

    /**
     * Constructs a <code>InventoryResponseEnvoys</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InventoryResponseEnvoys} obj Optional instance to populate.
     * @return {module:model/InventoryResponseEnvoys} The populated <code>InventoryResponseEnvoys</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InventoryResponseEnvoys();
        if (data.hasOwnProperty('sn')) {
          obj['sn'] = _ApiClient["default"].convertToType(data['sn'], 'String');
        }
        if (data.hasOwnProperty('model')) {
          obj['model'] = _ApiClient["default"].convertToType(data['model'], 'String');
        }
        if (data.hasOwnProperty('sku')) {
          obj['sku'] = _ApiClient["default"].convertToType(data['sku'], 'String');
        }
      }
      return obj;
    }
  }]);
  return InventoryResponseEnvoys;
}();
/**
 * @member {String} sn
 */
InventoryResponseEnvoys.prototype['sn'] = undefined;

/**
 * @member {String} model
 */
InventoryResponseEnvoys.prototype['model'] = undefined;

/**
 * @member {String} sku
 */
InventoryResponseEnvoys.prototype['sku'] = undefined;
var _default = InventoryResponseEnvoys;
exports["default"] = _default;