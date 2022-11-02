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
 * The NotFoundError model module.
 * @module model/NotFoundError
 * @version 2.0
 */
var NotFoundError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NotFoundError</code>.
   * @alias module:model/NotFoundError
   * @param reason {String} 
   */
  function NotFoundError(reason) {
    _classCallCheck(this, NotFoundError);
    NotFoundError.initialize(this, reason);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(NotFoundError, null, [{
    key: "initialize",
    value: function initialize(obj, reason) {
      obj['reason'] = reason;
    }

    /**
     * Constructs a <code>NotFoundError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotFoundError} obj Optional instance to populate.
     * @return {module:model/NotFoundError} The populated <code>NotFoundError</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotFoundError();
        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }
        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], ['String']);
        }
        if (data.hasOwnProperty('errorMessages')) {
          obj['errorMessages'] = _ApiClient["default"].convertToType(data['errorMessages'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return NotFoundError;
}();
/**
 * @member {String} reason
 */
NotFoundError.prototype['reason'] = undefined;

/**
 * @member {Array.<String>} message
 */
NotFoundError.prototype['message'] = undefined;

/**
 * @member {Array.<String>} errorMessages
 */
NotFoundError.prototype['errorMessages'] = undefined;
var _default = NotFoundError;
exports["default"] = _default;