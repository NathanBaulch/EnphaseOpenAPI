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
 * The ServerError model module.
 * @module model/ServerError
 * @version 2.0
 */
var ServerError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServerError</code>.
   * @alias module:model/ServerError
   * @param errorCode {Number} 
   * @param errorMessages {Array.<String>} 
   */
  function ServerError(errorCode, errorMessages) {
    _classCallCheck(this, ServerError);
    ServerError.initialize(this, errorCode, errorMessages);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ServerError, null, [{
    key: "initialize",
    value: function initialize(obj, errorCode, errorMessages) {
      obj['errorCode'] = errorCode;
      obj['errorMessages'] = errorMessages;
    }

    /**
     * Constructs a <code>ServerError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServerError} obj Optional instance to populate.
     * @return {module:model/ServerError} The populated <code>ServerError</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServerError();
        if (data.hasOwnProperty('errorCode')) {
          obj['errorCode'] = _ApiClient["default"].convertToType(data['errorCode'], 'Number');
        }
        if (data.hasOwnProperty('errorMessages')) {
          obj['errorMessages'] = _ApiClient["default"].convertToType(data['errorMessages'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return ServerError;
}();
/**
 * @member {Number} errorCode
 */
ServerError.prototype['errorCode'] = undefined;

/**
 * @member {Array.<String>} errorMessages
 */
ServerError.prototype['errorMessages'] = undefined;
var _default = ServerError;
exports["default"] = _default;