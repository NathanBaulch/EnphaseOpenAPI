"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnvoysResponseEnvoys = _interopRequireDefault(require("./EnvoysResponseEnvoys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EnvoysResponse model module.
 * @module model/EnvoysResponse
 * @version 2.0
 */
var EnvoysResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnvoysResponse</code>.
   * @alias module:model/EnvoysResponse
   * @param systemId {Number} The identifier of the system.
   * @param envoys {Array.<module:model/EnvoysResponseEnvoys>} A list of active Envoys on this system.
   */
  function EnvoysResponse(systemId, envoys) {
    _classCallCheck(this, EnvoysResponse);

    EnvoysResponse.initialize(this, systemId, envoys);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnvoysResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systemId, envoys) {
      obj['system_id'] = systemId;
      obj['envoys'] = envoys;
    }
    /**
     * Constructs a <code>EnvoysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvoysResponse} obj Optional instance to populate.
     * @return {module:model/EnvoysResponse} The populated <code>EnvoysResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnvoysResponse();

        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }

        if (data.hasOwnProperty('envoys')) {
          obj['envoys'] = _ApiClient["default"].convertToType(data['envoys'], [_EnvoysResponseEnvoys["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EnvoysResponse;
}();
/**
 * The identifier of the system.
 * @member {Number} system_id
 */


EnvoysResponse.prototype['system_id'] = undefined;
/**
 * A list of active Envoys on this system.
 * @member {Array.<module:model/EnvoysResponseEnvoys>} envoys
 */

EnvoysResponse.prototype['envoys'] = undefined;
var _default = EnvoysResponse;
exports["default"] = _default;