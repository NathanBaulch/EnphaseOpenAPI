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
 * The EnvoysResponseEnvoys model module.
 * @module model/EnvoysResponseEnvoys
 * @version 2.0
 */
var EnvoysResponseEnvoys = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnvoysResponseEnvoys</code>.
   * @alias module:model/EnvoysResponseEnvoys
   * @param envoyId {Number} The Enlighten ID of the Envoy.
   * @param lastReportAt {Number} The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the `datetime_format` query parameter is `iso8601`, `last_report_at` is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null.
   * @param name {String} The human-friendly name of this Envoy.
   * @param partNumber {String} The Enphase part number of this Envoy.
   * @param serialNumber {String} The serial number of this Envoy.
   * @param status {module:model/EnvoysResponseEnvoys.StatusEnum} The current status of this Envoy. * `normal` - The Envoy is operating normally. * `comm` - The Envoy is not communicating to Enlighten.
   */
  function EnvoysResponseEnvoys(envoyId, lastReportAt, name, partNumber, serialNumber, status) {
    _classCallCheck(this, EnvoysResponseEnvoys);

    EnvoysResponseEnvoys.initialize(this, envoyId, lastReportAt, name, partNumber, serialNumber, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnvoysResponseEnvoys, null, [{
    key: "initialize",
    value: function initialize(obj, envoyId, lastReportAt, name, partNumber, serialNumber, status) {
      obj['envoy_id'] = envoyId;
      obj['last_report_at'] = lastReportAt;
      obj['name'] = name;
      obj['part_number'] = partNumber;
      obj['serial_number'] = serialNumber;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>EnvoysResponseEnvoys</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvoysResponseEnvoys} obj Optional instance to populate.
     * @return {module:model/EnvoysResponseEnvoys} The populated <code>EnvoysResponseEnvoys</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnvoysResponseEnvoys();

        if (data.hasOwnProperty('envoy_id')) {
          obj['envoy_id'] = _ApiClient["default"].convertToType(data['envoy_id'], 'Number');
        }

        if (data.hasOwnProperty('last_report_at')) {
          obj['last_report_at'] = _ApiClient["default"].convertToType(data['last_report_at'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('part_number')) {
          obj['part_number'] = _ApiClient["default"].convertToType(data['part_number'], 'String');
        }

        if (data.hasOwnProperty('serial_number')) {
          obj['serial_number'] = _ApiClient["default"].convertToType(data['serial_number'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EnvoysResponseEnvoys;
}();
/**
 * The Enlighten ID of the Envoy.
 * @member {Number} envoy_id
 */


EnvoysResponseEnvoys.prototype['envoy_id'] = undefined;
/**
 * The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the `datetime_format` query parameter is `iso8601`, `last_report_at` is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null.
 * @member {Number} last_report_at
 */

EnvoysResponseEnvoys.prototype['last_report_at'] = undefined;
/**
 * The human-friendly name of this Envoy.
 * @member {String} name
 */

EnvoysResponseEnvoys.prototype['name'] = undefined;
/**
 * The Enphase part number of this Envoy.
 * @member {String} part_number
 */

EnvoysResponseEnvoys.prototype['part_number'] = undefined;
/**
 * The serial number of this Envoy.
 * @member {String} serial_number
 */

EnvoysResponseEnvoys.prototype['serial_number'] = undefined;
/**
 * The current status of this Envoy. * `normal` - The Envoy is operating normally. * `comm` - The Envoy is not communicating to Enlighten.
 * @member {module:model/EnvoysResponseEnvoys.StatusEnum} status
 */

EnvoysResponseEnvoys.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

EnvoysResponseEnvoys['StatusEnum'] = {
  /**
   * value: "normal"
   * @const
   */
  "normal": "normal",

  /**
   * value: "comm"
   * @const
   */
  "comm": "comm"
};
var _default = EnvoysResponseEnvoys;
exports["default"] = _default;