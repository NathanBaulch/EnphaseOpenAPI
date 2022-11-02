"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SystemsResponseSystems = _interopRequireDefault(require("./SystemsResponseSystems"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SystemsResponse model module.
 * @module model/SystemsResponse
 * @version 2.0
 */
var SystemsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemsResponse</code>.
   * @alias module:model/SystemsResponse
   * @param systems {Array.<module:model/SystemsResponseSystems>} 
   */
  function SystemsResponse(systems) {
    _classCallCheck(this, SystemsResponse);
    SystemsResponse.initialize(this, systems);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SystemsResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systems) {
      obj['systems'] = systems;
    }

    /**
     * Constructs a <code>SystemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemsResponse} obj Optional instance to populate.
     * @return {module:model/SystemsResponse} The populated <code>SystemsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemsResponse();
        if (data.hasOwnProperty('systems')) {
          obj['systems'] = _ApiClient["default"].convertToType(data['systems'], [_SystemsResponseSystems["default"]]);
        }
        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SystemsResponse;
}();
/**
 * @member {Array.<module:model/SystemsResponseSystems>} systems
 */
SystemsResponse.prototype['systems'] = undefined;

/**
 * @member {String} next
 */
SystemsResponse.prototype['next'] = undefined;
var _default = SystemsResponse;
exports["default"] = _default;