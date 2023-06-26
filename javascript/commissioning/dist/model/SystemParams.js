"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SystemArrayTypeEnum = _interopRequireDefault(require("./SystemArrayTypeEnum"));
var _SystemAttachmentTypeEnum = _interopRequireDefault(require("./SystemAttachmentTypeEnum"));
var _SystemInternetConnectionEnum = _interopRequireDefault(require("./SystemInternetConnectionEnum"));
var _SystemParamsAddress = _interopRequireDefault(require("./SystemParamsAddress"));
var _SystemParamsEnchargeInner = _interopRequireDefault(require("./SystemParamsEnchargeInner"));
var _SystemParamsEnpowerInner = _interopRequireDefault(require("./SystemParamsEnpowerInner"));
var _SystemSourceEnum = _interopRequireDefault(require("./SystemSourceEnum"));
var _SystemTypeEnum = _interopRequireDefault(require("./SystemTypeEnum"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * The Enphase Commissioning API
                                                                                                                                                                                                                                                                                                                                                                                               * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 4.0
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The SystemParams model module.
 * @module model/SystemParams
 * @version 4.0
 */
var SystemParams = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemParams</code>.
   * @alias module:model/SystemParams
   * @param systemName {String} Name of the system. Limit 255 characters.
   */
  function SystemParams(systemName) {
    _classCallCheck(this, SystemParams);
    SystemParams.initialize(this, systemName);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SystemParams, null, [{
    key: "initialize",
    value: function initialize(obj, systemName) {
      obj['system_name'] = systemName;
    }

    /**
     * Constructs a <code>SystemParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemParams} obj Optional instance to populate.
     * @return {module:model/SystemParams} The populated <code>SystemParams</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemParams();
        if (data.hasOwnProperty('system_name')) {
          obj['system_name'] = _ApiClient["default"].convertToType(data['system_name'], 'String');
        }
        if (data.hasOwnProperty('system_type')) {
          obj['system_type'] = _SystemTypeEnum["default"].constructFromObject(data['system_type']);
        }
        if (data.hasOwnProperty('internet_connection')) {
          obj['internet_connection'] = _SystemInternetConnectionEnum["default"].constructFromObject(data['internet_connection']);
        }
        if (data.hasOwnProperty('lease')) {
          obj['lease'] = _ApiClient["default"].convertToType(data['lease'], 'Boolean');
        }
        if (data.hasOwnProperty('operational')) {
          obj['operational'] = _ApiClient["default"].convertToType(data['operational'], 'Boolean');
        }
        if (data.hasOwnProperty('owner_id')) {
          obj['owner_id'] = _ApiClient["default"].convertToType(data['owner_id'], 'Number');
        }
        if (data.hasOwnProperty('host_id')) {
          obj['host_id'] = _ApiClient["default"].convertToType(data['host_id'], 'Number');
        }
        if (data.hasOwnProperty('installer_id')) {
          obj['installer_id'] = _ApiClient["default"].convertToType(data['installer_id'], 'Number');
        }
        if (data.hasOwnProperty('allow_public_access')) {
          obj['allow_public_access'] = _ApiClient["default"].convertToType(data['allow_public_access'], 'Boolean');
        }
        if (data.hasOwnProperty('interconnect_date')) {
          obj['interconnect_date'] = _ApiClient["default"].convertToType(data['interconnect_date'], 'Date');
        }
        if (data.hasOwnProperty('source')) {
          obj['source'] = _SystemSourceEnum["default"].constructFromObject(data['source']);
        }
        if (data.hasOwnProperty('array_type')) {
          obj['array_type'] = _SystemArrayTypeEnum["default"].constructFromObject(data['array_type']);
        }
        if (data.hasOwnProperty('attachment_type')) {
          obj['attachment_type'] = _SystemAttachmentTypeEnum["default"].constructFromObject(data['attachment_type']);
        }
        if (data.hasOwnProperty('ensemble_envoy')) {
          obj['ensemble_envoy'] = _ApiClient["default"].convertToType(data['ensemble_envoy'], 'String');
        }
        if (data.hasOwnProperty('grid_profile')) {
          obj['grid_profile'] = _ApiClient["default"].convertToType(data['grid_profile'], 'String');
        }
        if (data.hasOwnProperty('requested_profile')) {
          obj['requested_profile'] = _ApiClient["default"].convertToType(data['requested_profile'], 'String');
        }
        if (data.hasOwnProperty('requested_report_freq')) {
          obj['requested_report_freq'] = _ApiClient["default"].convertToType(data['requested_report_freq'], 'String');
        }
        if (data.hasOwnProperty('voltage')) {
          obj['voltage'] = _ApiClient["default"].convertToType(data['voltage'], 'String');
        }
        if (data.hasOwnProperty('envoy_serial_numbers')) {
          obj['envoy_serial_numbers'] = _ApiClient["default"].convertToType(data['envoy_serial_numbers'], ['String']);
        }
        if (data.hasOwnProperty('pv_manufacturer')) {
          obj['pv_manufacturer'] = _ApiClient["default"].convertToType(data['pv_manufacturer'], 'Number');
        }
        if (data.hasOwnProperty('pv_manufacturer_name')) {
          obj['pv_manufacturer_name'] = _ApiClient["default"].convertToType(data['pv_manufacturer_name'], 'String');
        }
        if (data.hasOwnProperty('pv_model')) {
          obj['pv_model'] = _ApiClient["default"].convertToType(data['pv_model'], 'Number');
        }
        if (data.hasOwnProperty('pv_model_name')) {
          obj['pv_model_name'] = _ApiClient["default"].convertToType(data['pv_model_name'], 'String');
        }
        if (data.hasOwnProperty('pv_module_power_rating')) {
          obj['pv_module_power_rating'] = _ApiClient["default"].convertToType(data['pv_module_power_rating'], 'Number');
        }
        if (data.hasOwnProperty('pv_module_type')) {
          obj['pv_module_type'] = _ApiClient["default"].convertToType(data['pv_module_type'], 'Number');
        }
        if (data.hasOwnProperty('expected_envoy_count')) {
          obj['expected_envoy_count'] = _ApiClient["default"].convertToType(data['expected_envoy_count'], 'Number');
        }
        if (data.hasOwnProperty('expected_pcu_count')) {
          obj['expected_pcu_count'] = _ApiClient["default"].convertToType(data['expected_pcu_count'], 'Number');
        }
        if (data.hasOwnProperty('expected_acb_count')) {
          obj['expected_acb_count'] = _ApiClient["default"].convertToType(data['expected_acb_count'], 'Number');
        }
        if (data.hasOwnProperty('expected_nsr_count')) {
          obj['expected_nsr_count'] = _ApiClient["default"].convertToType(data['expected_nsr_count'], 'Number');
        }
        if (data.hasOwnProperty('expected_meter_count')) {
          obj['expected_meter_count'] = _ApiClient["default"].convertToType(data['expected_meter_count'], 'Number');
        }
        if (data.hasOwnProperty('expected_encharge_count')) {
          obj['expected_encharge_count'] = _ApiClient["default"].convertToType(data['expected_encharge_count'], 'Number');
        }
        if (data.hasOwnProperty('expected_enpower_count')) {
          obj['expected_enpower_count'] = _ApiClient["default"].convertToType(data['expected_enpower_count'], 'Number');
        }
        if (data.hasOwnProperty('reference')) {
          obj['reference'] = _ApiClient["default"].convertToType(data['reference'], 'String');
        }
        if (data.hasOwnProperty('encharge')) {
          obj['encharge'] = _ApiClient["default"].convertToType(data['encharge'], [_SystemParamsEnchargeInner["default"]]);
        }
        if (data.hasOwnProperty('enpower')) {
          obj['enpower'] = _ApiClient["default"].convertToType(data['enpower'], [_SystemParamsEnpowerInner["default"]]);
        }
        if (data.hasOwnProperty('address')) {
          obj['address'] = _SystemParamsAddress["default"].constructFromObject(data['address']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SystemParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SystemParams</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(SystemParams.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['system_name'] && !(typeof data['system_name'] === 'string' || data['system_name'] instanceof String)) {
        throw new Error("Expected the field `system_name` to be a primitive type in the JSON string but got " + data['system_name']);
      }
      // ensure the json data is a string
      if (data['ensemble_envoy'] && !(typeof data['ensemble_envoy'] === 'string' || data['ensemble_envoy'] instanceof String)) {
        throw new Error("Expected the field `ensemble_envoy` to be a primitive type in the JSON string but got " + data['ensemble_envoy']);
      }
      // ensure the json data is a string
      if (data['grid_profile'] && !(typeof data['grid_profile'] === 'string' || data['grid_profile'] instanceof String)) {
        throw new Error("Expected the field `grid_profile` to be a primitive type in the JSON string but got " + data['grid_profile']);
      }
      // ensure the json data is a string
      if (data['requested_profile'] && !(typeof data['requested_profile'] === 'string' || data['requested_profile'] instanceof String)) {
        throw new Error("Expected the field `requested_profile` to be a primitive type in the JSON string but got " + data['requested_profile']);
      }
      // ensure the json data is a string
      if (data['requested_report_freq'] && !(typeof data['requested_report_freq'] === 'string' || data['requested_report_freq'] instanceof String)) {
        throw new Error("Expected the field `requested_report_freq` to be a primitive type in the JSON string but got " + data['requested_report_freq']);
      }
      // ensure the json data is a string
      if (data['voltage'] && !(typeof data['voltage'] === 'string' || data['voltage'] instanceof String)) {
        throw new Error("Expected the field `voltage` to be a primitive type in the JSON string but got " + data['voltage']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['envoy_serial_numbers'])) {
        throw new Error("Expected the field `envoy_serial_numbers` to be an array in the JSON data but got " + data['envoy_serial_numbers']);
      }
      // ensure the json data is a string
      if (data['pv_manufacturer_name'] && !(typeof data['pv_manufacturer_name'] === 'string' || data['pv_manufacturer_name'] instanceof String)) {
        throw new Error("Expected the field `pv_manufacturer_name` to be a primitive type in the JSON string but got " + data['pv_manufacturer_name']);
      }
      // ensure the json data is a string
      if (data['pv_model_name'] && !(typeof data['pv_model_name'] === 'string' || data['pv_model_name'] instanceof String)) {
        throw new Error("Expected the field `pv_model_name` to be a primitive type in the JSON string but got " + data['pv_model_name']);
      }
      // ensure the json data is a string
      if (data['reference'] && !(typeof data['reference'] === 'string' || data['reference'] instanceof String)) {
        throw new Error("Expected the field `reference` to be a primitive type in the JSON string but got " + data['reference']);
      }
      if (data['encharge']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['encharge'])) {
          throw new Error("Expected the field `encharge` to be an array in the JSON data but got " + data['encharge']);
        }
        // validate the optional field `encharge` (array)
        var _iterator2 = _createForOfIteratorHelper(data['encharge']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _SystemParamsEnchargeInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['enpower']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['enpower'])) {
          throw new Error("Expected the field `enpower` to be an array in the JSON data but got " + data['enpower']);
        }
        // validate the optional field `enpower` (array)
        var _iterator3 = _createForOfIteratorHelper(data['enpower']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _SystemParamsEnpowerInner["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      // validate the optional field `address`
      if (data['address']) {
        // data not null
        _SystemParamsAddress["default"].validateJSON(data['address']);
      }
      return true;
    }
  }]);
  return SystemParams;
}();
SystemParams.RequiredProperties = ["system_name"];

/**
 * Name of the system. Limit 255 characters.
 * @member {String} system_name
 */
SystemParams.prototype['system_name'] = undefined;

/**
 * @member {module:model/SystemTypeEnum} system_type
 */
SystemParams.prototype['system_type'] = undefined;

/**
 * @member {module:model/SystemInternetConnectionEnum} internet_connection
 */
SystemParams.prototype['internet_connection'] = undefined;

/**
 * Whether the system is leased. Default false.
 * @member {Boolean} lease
 */
SystemParams.prototype['lease'] = undefined;

/**
 * Whether this system is permitted to operate. Default true.
 * @member {Boolean} operational
 */
SystemParams.prototype['operational'] = undefined;

/**
 * Enlighten ID of the system owner. Owner must be an Enlighten user. Optional. If the user of the API is a self-installer, the owner must be himself. If the user of the API is an installer then use the Search user API to get the owner user ID. If the owner not exist in the enlighten then use Create home owner API to create it newly.
 * @member {Number} owner_id
 */
SystemParams.prototype['owner_id'] = undefined;

/**
 * Enlighten ID of the system host. System host must be an Enlighten user. Optional. If the user of the API is an installer then use the Search user API to get the host user ID. If the host not exist in the enlighten then use Create home owner API to create it newly.
 * @member {Number} host_id
 */
SystemParams.prototype['host_id'] = undefined;

/**
 * Enlighten ID of the installer of this system. Defaults to current user's company ID.
 * @member {Number} installer_id
 */
SystemParams.prototype['installer_id'] = undefined;

/**
 * When true, the system will be eligible to appear in the public systems lists of Enphase and the system's installer. Default true.
 * @member {Boolean} allow_public_access
 */
SystemParams.prototype['allow_public_access'] = undefined;

/**
 * When the system was approved to connect to the grid.
 * @member {Date} interconnect_date
 */
SystemParams.prototype['interconnect_date'] = undefined;

/**
 * @member {module:model/SystemSourceEnum} source
 */
SystemParams.prototype['source'] = undefined;

/**
 * @member {module:model/SystemArrayTypeEnum} array_type
 */
SystemParams.prototype['array_type'] = undefined;

/**
 * @member {module:model/SystemAttachmentTypeEnum} attachment_type
 */
SystemParams.prototype['attachment_type'] = undefined;

/**
 * Specifies serial number of ensemble envoy in multi envoy system.
 * @member {String} ensemble_envoy
 */
SystemParams.prototype['ensemble_envoy'] = undefined;

/**
 * Grid profile to set on this system's microinverters. See GridProfiles API for how to retrieve a list of known profiles.
 * @member {String} grid_profile
 */
SystemParams.prototype['grid_profile'] = undefined;

/**
 * @member {String} requested_profile
 */
SystemParams.prototype['requested_profile'] = undefined;

/**
 * @member {String} requested_report_freq
 */
SystemParams.prototype['requested_report_freq'] = undefined;

/**
 * Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists & installer's country is not inside North America, or if the system's country is not inside North America, then the voltage value would be null.
 * @member {String} voltage
 */
SystemParams.prototype['voltage'] = undefined;

/**
 * A list of Envoys installed on this system.
 * @member {Array.<String>} envoy_serial_numbers
 */
SystemParams.prototype['envoy_serial_numbers'] = undefined;

/**
 * Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs.
 * @member {Number} pv_manufacturer
 */
SystemParams.prototype['pv_manufacturer'] = undefined;

/**
 * Name of the Custom PV module manufacturer associated with the system.
 * @member {String} pv_manufacturer_name
 */
SystemParams.prototype['pv_manufacturer_name'] = undefined;

/**
 * Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs.
 * @member {Number} pv_model
 */
SystemParams.prototype['pv_model'] = undefined;

/**
 * Name of the Custom PV module model associated with the system.
 * @member {String} pv_model_name
 */
SystemParams.prototype['pv_model_name'] = undefined;

/**
 * Power rating (in W) of the PV module installed on the system.
 * @member {Number} pv_module_power_rating
 */
SystemParams.prototype['pv_module_power_rating'] = undefined;

/**
 * Type ID of the PV module installed on the system. 1 -> 'Mono-facial', 2 -> 'Bi-facial', 3 -> 'Split cell', 4 -> 'Other'.
 * @member {Number} pv_module_type
 */
SystemParams.prototype['pv_module_type'] = undefined;

/**
 * Total envoys the system is supposed to have.
 * @member {Number} expected_envoy_count
 */
SystemParams.prototype['expected_envoy_count'] = undefined;

/**
 * Total PCUs the system is supposed to have.
 * @member {Number} expected_pcu_count
 */
SystemParams.prototype['expected_pcu_count'] = undefined;

/**
 * Total acbs the system is supposed to have.
 * @member {Number} expected_acb_count
 */
SystemParams.prototype['expected_acb_count'] = undefined;

/**
 * Total nsrs the system is supposed to have.
 * @member {Number} expected_nsr_count
 */
SystemParams.prototype['expected_nsr_count'] = undefined;

/**
 * Total meters the system is supposed to have.
 * @member {Number} expected_meter_count
 */
SystemParams.prototype['expected_meter_count'] = undefined;

/**
 * Total encharges the system is supposed to have.
 * @member {Number} expected_encharge_count
 */
SystemParams.prototype['expected_encharge_count'] = undefined;

/**
 * Total enpowers the system is supposed to have.
 * @member {Number} expected_enpower_count
 */
SystemParams.prototype['expected_enpower_count'] = undefined;

/**
 * Identifier of this system as provided by the calling user's company. This attribute is not present if the calling user's company does not have a reference for this system. This value should be alphanumeric.
 * @member {String} reference
 */
SystemParams.prototype['reference'] = undefined;

/**
 * Encharge detail.
 * @member {Array.<module:model/SystemParamsEnchargeInner>} encharge
 */
SystemParams.prototype['encharge'] = undefined;

/**
 * Enpower detail.
 * @member {Array.<module:model/SystemParamsEnpowerInner>} enpower
 */
SystemParams.prototype['enpower'] = undefined;

/**
 * @member {module:model/SystemParamsAddress} address
 */
SystemParams.prototype['address'] = undefined;
var _default = SystemParams;
exports["default"] = _default;