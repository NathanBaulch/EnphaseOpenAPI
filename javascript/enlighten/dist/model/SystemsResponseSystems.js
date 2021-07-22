"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConnectionType = _interopRequireDefault(require("./ConnectionType"));

var _Meta = _interopRequireDefault(require("./Meta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SystemsResponseSystems model module.
 * @module model/SystemsResponseSystems
 * @version 2.0
 */
var SystemsResponseSystems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemsResponseSystems</code>.
   * @alias module:model/SystemsResponseSystems
   * @param systemId {Number} The Enlighten ID of the system.
   * @param systemName {String} The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes.
   * @param systemPublicName {String} The display name of the system. Use this when displaying the system name on a public list or view.
   * @param country {String} The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference.
   * @param state {String} The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference.
   * @param city {String} The name of the city where the system is located.
   * @param postalCode {String} The postal code where the system is located.
   * @param timezone {String} The timezone of the system.
   * @param connectionType {module:model/ConnectionType} 
   * @param status {module:model/SystemsResponseSystems.StatusEnum} The current status of the system. You can find this and more in the `meta` property.
   * @param meta {module:model/Meta} 
   */
  function SystemsResponseSystems(systemId, systemName, systemPublicName, country, state, city, postalCode, timezone, connectionType, status, meta) {
    _classCallCheck(this, SystemsResponseSystems);

    SystemsResponseSystems.initialize(this, systemId, systemName, systemPublicName, country, state, city, postalCode, timezone, connectionType, status, meta);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemsResponseSystems, null, [{
    key: "initialize",
    value: function initialize(obj, systemId, systemName, systemPublicName, country, state, city, postalCode, timezone, connectionType, status, meta) {
      obj['system_id'] = systemId;
      obj['system_name'] = systemName;
      obj['system_public_name'] = systemPublicName;
      obj['country'] = country;
      obj['state'] = state;
      obj['city'] = city;
      obj['postal_code'] = postalCode;
      obj['timezone'] = timezone;
      obj['connection_type'] = connectionType;
      obj['status'] = status;
      obj['meta'] = meta;
    }
    /**
     * Constructs a <code>SystemsResponseSystems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemsResponseSystems} obj Optional instance to populate.
     * @return {module:model/SystemsResponseSystems} The populated <code>SystemsResponseSystems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemsResponseSystems();

        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }

        if (data.hasOwnProperty('system_name')) {
          obj['system_name'] = _ApiClient["default"].convertToType(data['system_name'], 'String');
        }

        if (data.hasOwnProperty('system_public_name')) {
          obj['system_public_name'] = _ApiClient["default"].convertToType(data['system_public_name'], 'String');
        }

        if (data.hasOwnProperty('reference')) {
          obj['reference'] = _ApiClient["default"].convertToType(data['reference'], 'String');
        }

        if (data.hasOwnProperty('other_references')) {
          obj['other_references'] = _ApiClient["default"].convertToType(data['other_references'], ['String']);
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('connection_type')) {
          obj['connection_type'] = _ConnectionType["default"].constructFromObject(data['connection_type']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
  }]);

  return SystemsResponseSystems;
}();
/**
 * The Enlighten ID of the system.
 * @member {Number} system_id
 */


SystemsResponseSystems.prototype['system_id'] = undefined;
/**
 * The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes.
 * @member {String} system_name
 */

SystemsResponseSystems.prototype['system_name'] = undefined;
/**
 * The display name of the system. Use this when displaying the system name on a public list or view.
 * @member {String} system_public_name
 */

SystemsResponseSystems.prototype['system_public_name'] = undefined;
/**
 * If the calling user belongs to a company and that company has provided its own identifiers for a system, that ID is included here. Otherwise, this attribute is not returned.
 * @member {String} reference
 */

SystemsResponseSystems.prototype['reference'] = undefined;
/**
 * If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned.
 * @member {Array.<String>} other_references
 */

SystemsResponseSystems.prototype['other_references'] = undefined;
/**
 * The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference.
 * @member {String} country
 */

SystemsResponseSystems.prototype['country'] = undefined;
/**
 * The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference.
 * @member {String} state
 */

SystemsResponseSystems.prototype['state'] = undefined;
/**
 * The name of the city where the system is located.
 * @member {String} city
 */

SystemsResponseSystems.prototype['city'] = undefined;
/**
 * The postal code where the system is located.
 * @member {String} postal_code
 */

SystemsResponseSystems.prototype['postal_code'] = undefined;
/**
 * The timezone of the system.
 * @member {String} timezone
 */

SystemsResponseSystems.prototype['timezone'] = undefined;
/**
 * @member {module:model/ConnectionType} connection_type
 */

SystemsResponseSystems.prototype['connection_type'] = undefined;
/**
 * The current status of the system. You can find this and more in the `meta` property.
 * @member {module:model/SystemsResponseSystems.StatusEnum} status
 */

SystemsResponseSystems.prototype['status'] = undefined;
/**
 * @member {module:model/Meta} meta
 */

SystemsResponseSystems.prototype['meta'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

SystemsResponseSystems['StatusEnum'] = {
  /**
   * value: "comm"
   * @const
   */
  "comm": "comm",

  /**
   * value: "power"
   * @const
   */
  "power": "power",

  /**
   * value: "meter"
   * @const
   */
  "meter": "meter",

  /**
   * value: "meter_issue"
   * @const
   */
  "meter_issue": "meter_issue",

  /**
   * value: "micro"
   * @const
   */
  "micro": "micro",

  /**
   * value: "battery"
   * @const
   */
  "battery": "battery",

  /**
   * value: "storage_idle"
   * @const
   */
  "storage_idle": "storage_idle",

  /**
   * value: "normal"
   * @const
   */
  "normal": "normal"
};
var _default = SystemsResponseSystems;
exports["default"] = _default;