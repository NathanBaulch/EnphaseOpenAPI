"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InventoryResponseEnvoys = _interopRequireDefault(require("./InventoryResponseEnvoys"));

var _InventoryResponseMeters = _interopRequireDefault(require("./InventoryResponseMeters"));

var _Meta = _interopRequireDefault(require("./Meta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
   * @param inverters {Array.<module:model/InventoryResponseEnvoys>} A list of inverters on this system, including serial and model numbers.
   * @param meters {Array.<module:model/InventoryResponseMeters>} A list of meters on this system, including serial number, manufacturer, and model number.
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
          obj['envoys'] = _ApiClient["default"].convertToType(data['envoys'], [_InventoryResponseEnvoys["default"]]);
        }

        if (data.hasOwnProperty('inverters')) {
          obj['inverters'] = _ApiClient["default"].convertToType(data['inverters'], [_InventoryResponseEnvoys["default"]]);
        }

        if (data.hasOwnProperty('meters')) {
          obj['meters'] = _ApiClient["default"].convertToType(data['meters'], [_InventoryResponseMeters["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
  }]);

  return InventoryResponse;
}();
/**
 * Enlighten ID for this system.
 * @member {Number} system_id
 */


InventoryResponse.prototype['system_id'] = undefined;
/**
 * A list of Envoys on this system, including serial number.
 * @member {Array.<module:model/InventoryResponseEnvoys>} envoys
 */

InventoryResponse.prototype['envoys'] = undefined;
/**
 * A list of inverters on this system, including serial and model numbers.
 * @member {Array.<module:model/InventoryResponseEnvoys>} inverters
 */

InventoryResponse.prototype['inverters'] = undefined;
/**
 * A list of meters on this system, including serial number, manufacturer, and model number.
 * @member {Array.<module:model/InventoryResponseMeters>} meters
 */

InventoryResponse.prototype['meters'] = undefined;
/**
 * @member {module:model/Meta} meta
 */

InventoryResponse.prototype['meta'] = undefined;
var _default = InventoryResponse;
exports["default"] = _default;