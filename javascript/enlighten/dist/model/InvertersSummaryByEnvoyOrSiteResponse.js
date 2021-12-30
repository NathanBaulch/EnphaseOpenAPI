"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvertersSummaryByEnvoyOrSiteResponseMicroInverters = _interopRequireDefault(require("./InvertersSummaryByEnvoyOrSiteResponseMicroInverters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InvertersSummaryByEnvoyOrSiteResponse model module.
 * @module model/InvertersSummaryByEnvoyOrSiteResponse
 * @version 2.0
 */
var InvertersSummaryByEnvoyOrSiteResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvertersSummaryByEnvoyOrSiteResponse</code>.
   * @alias module:model/InvertersSummaryByEnvoyOrSiteResponse
   * @param signalStrength {Number} 
   * @param microInverters {Array.<module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInverters>} A list of active inverters on this system, including serial and model numbers.
   */
  function InvertersSummaryByEnvoyOrSiteResponse(signalStrength, microInverters) {
    _classCallCheck(this, InvertersSummaryByEnvoyOrSiteResponse);

    InvertersSummaryByEnvoyOrSiteResponse.initialize(this, signalStrength, microInverters);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvertersSummaryByEnvoyOrSiteResponse, null, [{
    key: "initialize",
    value: function initialize(obj, signalStrength, microInverters) {
      obj['signal_strength'] = signalStrength;
      obj['micro_inverters'] = microInverters;
    }
    /**
     * Constructs a <code>InvertersSummaryByEnvoyOrSiteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvertersSummaryByEnvoyOrSiteResponse} obj Optional instance to populate.
     * @return {module:model/InvertersSummaryByEnvoyOrSiteResponse} The populated <code>InvertersSummaryByEnvoyOrSiteResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvertersSummaryByEnvoyOrSiteResponse();

        if (data.hasOwnProperty('signal_strength')) {
          obj['signal_strength'] = _ApiClient["default"].convertToType(data['signal_strength'], 'Number');
        }

        if (data.hasOwnProperty('micro_inverters')) {
          obj['micro_inverters'] = _ApiClient["default"].convertToType(data['micro_inverters'], [_InvertersSummaryByEnvoyOrSiteResponseMicroInverters["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InvertersSummaryByEnvoyOrSiteResponse;
}();
/**
 * @member {Number} signal_strength
 */


InvertersSummaryByEnvoyOrSiteResponse.prototype['signal_strength'] = undefined;
/**
 * A list of active inverters on this system, including serial and model numbers.
 * @member {Array.<module:model/InvertersSummaryByEnvoyOrSiteResponseMicroInverters>} micro_inverters
 */

InvertersSummaryByEnvoyOrSiteResponse.prototype['micro_inverters'] = undefined;
var _default = InvertersSummaryByEnvoyOrSiteResponse;
exports["default"] = _default;