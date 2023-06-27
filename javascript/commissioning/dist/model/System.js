"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Address = _interopRequireDefault(require("./Address"));
var _GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner = _interopRequireDefault(require("./GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner"));
var _SystemArrayTypeEnum = _interopRequireDefault(require("./SystemArrayTypeEnum"));
var _SystemAttachmentTypeEnum = _interopRequireDefault(require("./SystemAttachmentTypeEnum"));
var _SystemEnchargeInner = _interopRequireDefault(require("./SystemEnchargeInner"));
var _SystemEnpowerInner = _interopRequireDefault(require("./SystemEnpowerInner"));
var _SystemHost = _interopRequireDefault(require("./SystemHost"));
var _SystemInternetConnectionEnum = _interopRequireDefault(require("./SystemInternetConnectionEnum"));
var _SystemOwner = _interopRequireDefault(require("./SystemOwner"));
var _SystemProductionModeEnum = _interopRequireDefault(require("./SystemProductionModeEnum"));
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
 * The System model module.
 * @module model/System
 * @version 4.0
 */
var System = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>System</code>.
   * @alias module:model/System
   */
  function System() {
    _classCallCheck(this, System);
    System.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(System, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>System</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/System} obj Optional instance to populate.
     * @return {module:model/System} The populated <code>System</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new System();
        if (data.hasOwnProperty('system_id')) {
          obj['system_id'] = _ApiClient["default"].convertToType(data['system_id'], 'Number');
        }
        if (data.hasOwnProperty('system_name')) {
          obj['system_name'] = _ApiClient["default"].convertToType(data['system_name'], 'String');
        }
        if (data.hasOwnProperty('system_type')) {
          obj['system_type'] = _SystemTypeEnum["default"].constructFromObject(data['system_type']);
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }
        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _ApiClient["default"].convertToType(data['stage'], 'Number');
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
        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _SystemOwner["default"].constructFromObject(data['owner']);
        }
        if (data.hasOwnProperty('owner_id')) {
          obj['owner_id'] = _ApiClient["default"].convertToType(data['owner_id'], 'Number');
        }
        if (data.hasOwnProperty('host')) {
          obj['host'] = _SystemHost["default"].constructFromObject(data['host']);
        }
        if (data.hasOwnProperty('host_id')) {
          obj['host_id'] = _ApiClient["default"].convertToType(data['host_id'], 'Number');
        }
        if (data.hasOwnProperty('installer_name')) {
          obj['installer_name'] = _ApiClient["default"].convertToType(data['installer_name'], 'String');
        }
        if (data.hasOwnProperty('installer_id')) {
          obj['installer_id'] = _ApiClient["default"].convertToType(data['installer_id'], 'Number');
        }
        if (data.hasOwnProperty('maintainer_name')) {
          obj['maintainer_name'] = _ApiClient["default"].convertToType(data['maintainer_name'], 'String');
        }
        if (data.hasOwnProperty('maintainer_id')) {
          obj['maintainer_id'] = _ApiClient["default"].convertToType(data['maintainer_id'], 'Number');
        }
        if (data.hasOwnProperty('authorized_subcontractors')) {
          obj['authorized_subcontractors'] = _ApiClient["default"].convertToType(data['authorized_subcontractors'], [_GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner["default"]]);
        }
        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }
        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }
        if (data.hasOwnProperty('reference')) {
          obj['reference'] = _ApiClient["default"].convertToType(data['reference'], 'String');
        }
        if (data.hasOwnProperty('other_references')) {
          obj['other_references'] = _ApiClient["default"].convertToType(data['other_references'], ['String']);
        }
        if (data.hasOwnProperty('allow_public_access')) {
          obj['allow_public_access'] = _ApiClient["default"].convertToType(data['allow_public_access'], 'Boolean');
        }
        if (data.hasOwnProperty('interconnect_date')) {
          obj['interconnect_date'] = _ApiClient["default"].convertToType(data['interconnect_date'], 'Date');
        }
        if (data.hasOwnProperty('installer_support_email')) {
          obj['installer_support_email'] = _ApiClient["default"].convertToType(data['installer_support_email'], 'String');
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
        if (data.hasOwnProperty('production_mode')) {
          obj['production_mode'] = _SystemProductionModeEnum["default"].constructFromObject(data['production_mode']);
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
        if (data.hasOwnProperty('expected_envoy_count')) {
          obj['expected_envoy_count'] = _ApiClient["default"].convertToType(data['expected_envoy_count'], 'Number');
        }
        if (data.hasOwnProperty('expected_pcu_count')) {
          obj['expected_pcu_count'] = _ApiClient["default"].convertToType(data['expected_pcu_count'], 'Number');
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
        if (data.hasOwnProperty('encharge')) {
          obj['encharge'] = _ApiClient["default"].convertToType(data['encharge'], [_SystemEnchargeInner["default"]]);
        }
        if (data.hasOwnProperty('enpower')) {
          obj['enpower'] = _ApiClient["default"].convertToType(data['enpower'], [_SystemEnpowerInner["default"]]);
        }
        if (data.hasOwnProperty('address')) {
          obj['address'] = _Address["default"].constructFromObject(data['address']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>System</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>System</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['system_name'] && !(typeof data['system_name'] === 'string' || data['system_name'] instanceof String)) {
        throw new Error("Expected the field `system_name` to be a primitive type in the JSON string but got " + data['system_name']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
        throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
      }
      // validate the optional field `owner`
      if (data['owner']) {
        // data not null
        _SystemOwner["default"].validateJSON(data['owner']);
      }
      // validate the optional field `host`
      if (data['host']) {
        // data not null
        _SystemHost["default"].validateJSON(data['host']);
      }
      // ensure the json data is a string
      if (data['installer_name'] && !(typeof data['installer_name'] === 'string' || data['installer_name'] instanceof String)) {
        throw new Error("Expected the field `installer_name` to be a primitive type in the JSON string but got " + data['installer_name']);
      }
      // ensure the json data is a string
      if (data['maintainer_name'] && !(typeof data['maintainer_name'] === 'string' || data['maintainer_name'] instanceof String)) {
        throw new Error("Expected the field `maintainer_name` to be a primitive type in the JSON string but got " + data['maintainer_name']);
      }
      if (data['authorized_subcontractors']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['authorized_subcontractors'])) {
          throw new Error("Expected the field `authorized_subcontractors` to be an array in the JSON data but got " + data['authorized_subcontractors']);
        }
        // validate the optional field `authorized_subcontractors` (array)
        var _iterator = _createForOfIteratorHelper(data['authorized_subcontractors']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
        throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
      }
      // ensure the json data is a string
      if (data['reference'] && !(typeof data['reference'] === 'string' || data['reference'] instanceof String)) {
        throw new Error("Expected the field `reference` to be a primitive type in the JSON string but got " + data['reference']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['other_references'])) {
        throw new Error("Expected the field `other_references` to be an array in the JSON data but got " + data['other_references']);
      }
      // ensure the json data is a string
      if (data['installer_support_email'] && !(typeof data['installer_support_email'] === 'string' || data['installer_support_email'] instanceof String)) {
        throw new Error("Expected the field `installer_support_email` to be a primitive type in the JSON string but got " + data['installer_support_email']);
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
            var _item = _step2.value;
            _SystemEnchargeInner["default"].validateJSON(_item);
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
            var _item2 = _step3.value;
            _SystemEnpowerInner["default"].validateJSON(_item2);
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
        _Address["default"].validateJSON(data['address']);
      }
      return true;
    }
  }]);
  return System;
}();
/**
 * Enlighten ID of this system. System-generated.
 * @member {Number} system_id
 */
System.prototype['system_id'] = undefined;

/**
 * Name of the system.
 * @member {String} system_name
 */
System.prototype['system_name'] = undefined;

/**
 * @member {module:model/SystemTypeEnum} system_type
 */
System.prototype['system_type'] = undefined;

/**
 * System's status.
 * @member {String} status
 */
System.prototype['status'] = undefined;

/**
 * System's timezone.
 * @member {String} timezone
 */
System.prototype['timezone'] = undefined;

/**
 * What stage of the activation process this activation is in. System-generated.
 * @member {Number} stage
 */
System.prototype['stage'] = undefined;

/**
 * @member {module:model/SystemInternetConnectionEnum} internet_connection
 */
System.prototype['internet_connection'] = undefined;

/**
 * Whether the system is leased. Default false.
 * @member {Boolean} lease
 */
System.prototype['lease'] = undefined;

/**
 * Whether this system is permitted to operate. Default true.
 * @member {Boolean} operational
 */
System.prototype['operational'] = undefined;

/**
 * @member {module:model/SystemOwner} owner
 */
System.prototype['owner'] = undefined;

/**
 * Enlighten ID of this system owner. System-generated. This field is optional.
 * @member {Number} owner_id
 */
System.prototype['owner_id'] = undefined;

/**
 * @member {module:model/SystemHost} host
 */
System.prototype['host'] = undefined;

/**
 * Enlighten ID of this system host. System-generated. This field is optional.
 * @member {Number} host_id
 */
System.prototype['host_id'] = undefined;

/**
 * Name of the installer.
 * @member {String} installer_name
 */
System.prototype['installer_name'] = undefined;

/**
 * Enlighten ID of the installer of this system. Defaults to current user's company ID.
 * @member {Number} installer_id
 */
System.prototype['installer_id'] = undefined;

/**
 * Name of the maintainer.
 * @member {String} maintainer_name
 */
System.prototype['maintainer_name'] = undefined;

/**
 * The Enlighten ID of the maintainer of this system. Defaults to current user's company ID.
 * @member {Number} maintainer_id
 */
System.prototype['maintainer_id'] = undefined;

/**
 * List of sub-contractors of this system.
 * @member {Array.<module:model/GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner>} authorized_subcontractors
 */
System.prototype['authorized_subcontractors'] = undefined;

/**
 * URI for this activation.
 * @member {String} uri
 */
System.prototype['uri'] = undefined;

/**
 * Activation last updated timestamp.
 * @member {Number} updated_at
 */
System.prototype['updated_at'] = undefined;

/**
 * Identifier of this system as provided by the calling user's company. This attribute is not present if the calling user's company does not have a reference for this system.
 * @member {String} reference
 */
System.prototype['reference'] = undefined;

/**
 * Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system.
 * @member {Array.<String>} other_references
 */
System.prototype['other_references'] = undefined;

/**
 * When true, the system will be eligible to appear in the public systems lists of Enphase and the system's installer. Default true.
 * @member {Boolean} allow_public_access
 */
System.prototype['allow_public_access'] = undefined;

/**
 * When the system was approved to connect to the grid.
 * @member {Date} interconnect_date
 */
System.prototype['interconnect_date'] = undefined;

/**
 * Installer support email.
 * @member {String} installer_support_email
 */
System.prototype['installer_support_email'] = undefined;

/**
 * @member {module:model/SystemSourceEnum} source
 */
System.prototype['source'] = undefined;

/**
 * @member {module:model/SystemArrayTypeEnum} array_type
 */
System.prototype['array_type'] = undefined;

/**
 * @member {module:model/SystemAttachmentTypeEnum} attachment_type
 */
System.prototype['attachment_type'] = undefined;

/**
 * Specifies serial number of ensemble envoy in multi envoy system.
 * @member {String} ensemble_envoy
 */
System.prototype['ensemble_envoy'] = undefined;

/**
 * @member {module:model/SystemProductionModeEnum} production_mode
 */
System.prototype['production_mode'] = undefined;

/**
 * Grid profile to set on this system's microinverters. See GridProfiles API for how to retrieve a list of known profiles.
 * @member {String} grid_profile
 */
System.prototype['grid_profile'] = undefined;

/**
 * @member {String} requested_profile
 */
System.prototype['requested_profile'] = undefined;

/**
 * @member {String} requested_report_freq
 */
System.prototype['requested_report_freq'] = undefined;

/**
 * Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists & installer's country is not inside North America, or if the system's country is not inside North America, then the voltage value would be null.
 * @member {String} voltage
 */
System.prototype['voltage'] = undefined;

/**
 * A list of Envoys installed on this system.
 * @member {Array.<String>} envoy_serial_numbers
 */
System.prototype['envoy_serial_numbers'] = undefined;

/**
 * Total envoys the system is supposed to have.
 * @member {Number} expected_envoy_count
 */
System.prototype['expected_envoy_count'] = undefined;

/**
 * Total PCUs the system is supposed to have.
 * @member {Number} expected_pcu_count
 */
System.prototype['expected_pcu_count'] = undefined;

/**
 * Total nsrs the system is supposed to have.
 * @member {Number} expected_nsr_count
 */
System.prototype['expected_nsr_count'] = undefined;

/**
 * Total meters the system is supposed to have.
 * @member {Number} expected_meter_count
 */
System.prototype['expected_meter_count'] = undefined;

/**
 * Total encharges the system is supposed to have.
 * @member {Number} expected_encharge_count
 */
System.prototype['expected_encharge_count'] = undefined;

/**
 * Total enpowers the system is supposed to have.
 * @member {Number} expected_enpower_count
 */
System.prototype['expected_enpower_count'] = undefined;

/**
 * Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs.
 * @member {Number} pv_manufacturer
 */
System.prototype['pv_manufacturer'] = undefined;

/**
 * Name of the Custom PV module manufacturer associated with the system.
 * @member {String} pv_manufacturer_name
 */
System.prototype['pv_manufacturer_name'] = undefined;

/**
 * Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs.
 * @member {Number} pv_model
 */
System.prototype['pv_model'] = undefined;

/**
 * Name of the Custom PV module model associated with the system.
 * @member {String} pv_model_name
 */
System.prototype['pv_model_name'] = undefined;

/**
 * Power rating (in W) of the PV module installed on the system.
 * @member {Number} pv_module_power_rating
 */
System.prototype['pv_module_power_rating'] = undefined;

/**
 * Type ID of the PV module installed on the system. 1 -> 'Mono-facial', 2 -> 'Bi-facial', 3 -> 'Split cell', 4 -> 'Other'.
 * @member {Number} pv_module_type
 */
System.prototype['pv_module_type'] = undefined;

/**
 * Encharge detail.
 * @member {Array.<module:model/SystemEnchargeInner>} encharge
 */
System.prototype['encharge'] = undefined;

/**
 * Enpower detail.
 * @member {Array.<module:model/SystemEnpowerInner>} enpower
 */
System.prototype['enpower'] = undefined;

/**
 * @member {module:model/Address} address
 */
System.prototype['address'] = undefined;
var _default = System;
exports["default"] = _default;