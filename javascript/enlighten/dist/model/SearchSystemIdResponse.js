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
 * The SearchSystemIdResponse model module.
 * @module model/SearchSystemIdResponse
 * @version 2.0
 */
var SearchSystemIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchSystemIdResponse</code>.
   * @alias module:model/SearchSystemIdResponse
   * @param systemId {Number} The Enlighten ID of the system.
   */
  function SearchSystemIdResponse(systemId) {
    _classCallCheck(this, SearchSystemIdResponse);

    SearchSystemIdResponse.initialize(this, systemId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchSystemIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj, systemId) {
      obj['system_id'] = systemId;
    }
    /**
     * Constructs a <code>SearchSystemIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchSystemIdResponse} obj Optional instance to populate.
     * @return {module:model/SearchSystemIdResponse} The populated <code>SearchSystemIdResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchSystemIdResponse();

        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SearchSystemIdResponse;
}();
/**
 * The Enlighten ID of the system.
 * @member {Number} system_id
 */


SearchSystemIdResponse.prototype['system_id'] = undefined;
var _default = SearchSystemIdResponse;
exports["default"] = _default;