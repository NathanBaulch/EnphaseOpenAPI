"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InventoryResponseMeters model module.
 * @module model/InventoryResponseMeters
 * @version 2.0
 */
var InventoryResponseMeters = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InventoryResponseMeters</code>.
   * @alias module:model/InventoryResponseMeters
   * @param sn {String} 
   * @param manufacturer {String} 
   * @param model {String} 
   */
  function InventoryResponseMeters(sn, manufacturer, model) {
    _classCallCheck(this, InventoryResponseMeters);

    InventoryResponseMeters.initialize(this, sn, manufacturer, model);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InventoryResponseMeters, null, [{
    key: "initialize",
    value: function initialize(obj, sn, manufacturer, model) {
      obj['sn'] = sn;
      obj['manufacturer'] = manufacturer;
      obj['model'] = model;
    }
    /**
     * Constructs a <code>InventoryResponseMeters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InventoryResponseMeters} obj Optional instance to populate.
     * @return {module:model/InventoryResponseMeters} The populated <code>InventoryResponseMeters</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InventoryResponseMeters();

        if (data.hasOwnProperty('sn')) {
          obj['sn'] = _ApiClient["default"].convertToType(data['sn'], 'String');
        }

        if (data.hasOwnProperty('manufacturer')) {
          obj['manufacturer'] = _ApiClient["default"].convertToType(data['manufacturer'], 'String');
        }

        if (data.hasOwnProperty('model')) {
          obj['model'] = _ApiClient["default"].convertToType(data['model'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InventoryResponseMeters;
}();
/**
 * @member {String} sn
 */


InventoryResponseMeters.prototype['sn'] = undefined;
/**
 * @member {String} manufacturer
 */

InventoryResponseMeters.prototype['manufacturer'] = undefined;
/**
 * @member {String} model
 */

InventoryResponseMeters.prototype['model'] = undefined;
var _default = InventoryResponseMeters;
exports["default"] = _default;