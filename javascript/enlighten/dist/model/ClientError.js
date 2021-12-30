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
 * The ClientError model module.
 * @module model/ClientError
 * @version 2.0
 */
var ClientError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ClientError</code>.
   * @alias module:model/ClientError
   * @param reason {String} 
   * @param message {Array.<String>} 
   */
  function ClientError(reason, message) {
    _classCallCheck(this, ClientError);

    ClientError.initialize(this, reason, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientError, null, [{
    key: "initialize",
    value: function initialize(obj, reason, message) {
      obj['reason'] = reason;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>ClientError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientError} obj Optional instance to populate.
     * @return {module:model/ClientError} The populated <code>ClientError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientError();

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ClientError;
}();
/**
 * @member {String} reason
 */


ClientError.prototype['reason'] = undefined;
/**
 * @member {Array.<String>} message
 */

ClientError.prototype['message'] = undefined;
var _default = ClientError;
exports["default"] = _default;