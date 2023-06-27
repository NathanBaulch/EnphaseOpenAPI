"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Address = _interopRequireDefault(require("./Address"));
var _GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner = _interopRequireDefault(require("./GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner"));
var _SystemInternetConnectionEnum = _interopRequireDefault(require("./SystemInternetConnectionEnum"));
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
 * The GetPartnerActivationsResponseSystemsInner model module.
 * @module model/GetPartnerActivationsResponseSystemsInner
 * @version 4.0
 */
var GetPartnerActivationsResponseSystemsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPartnerActivationsResponseSystemsInner</code>.
   * @alias module:model/GetPartnerActivationsResponseSystemsInner
   */
  function GetPartnerActivationsResponseSystemsInner() {
    _classCallCheck(this, GetPartnerActivationsResponseSystemsInner);
    GetPartnerActivationsResponseSystemsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetPartnerActivationsResponseSystemsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>GetPartnerActivationsResponseSystemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPartnerActivationsResponseSystemsInner} obj Optional instance to populate.
     * @return {module:model/GetPartnerActivationsResponseSystemsInner} The populated <code>GetPartnerActivationsResponseSystemsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPartnerActivationsResponseSystemsInner();
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
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }
        if (data.hasOwnProperty('owner_id')) {
          obj['owner_id'] = _ApiClient["default"].convertToType(data['owner_id'], 'Number');
        }
        if (data.hasOwnProperty('host')) {
          obj['host'] = _ApiClient["default"].convertToType(data['host'], 'String');
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
        if (data.hasOwnProperty('address')) {
          obj['address'] = _Address["default"].constructFromObject(data['address']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetPartnerActivationsResponseSystemsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetPartnerActivationsResponseSystemsInner</code>.
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
      // ensure the json data is a string
      if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
        throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
      }
      // ensure the json data is a string
      if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
        throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
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
      // validate the optional field `address`
      if (data['address']) {
        // data not null
        _Address["default"].validateJSON(data['address']);
      }
      return true;
    }
  }]);
  return GetPartnerActivationsResponseSystemsInner;
}();
/**
 * Enlighten ID of this system. System-generated.
 * @member {Number} system_id
 */
GetPartnerActivationsResponseSystemsInner.prototype['system_id'] = undefined;

/**
 * Name of the system.
 * @member {String} system_name
 */
GetPartnerActivationsResponseSystemsInner.prototype['system_name'] = undefined;

/**
 * @member {module:model/SystemTypeEnum} system_type
 */
GetPartnerActivationsResponseSystemsInner.prototype['system_type'] = undefined;

/**
 * System's status.
 * @member {String} status
 */
GetPartnerActivationsResponseSystemsInner.prototype['status'] = undefined;

/**
 * System's timezone.
 * @member {String} timezone
 */
GetPartnerActivationsResponseSystemsInner.prototype['timezone'] = undefined;

/**
 * What stage of the activation process this activation is in. System-generated.
 * @member {Number} stage
 */
GetPartnerActivationsResponseSystemsInner.prototype['stage'] = undefined;

/**
 * @member {module:model/SystemInternetConnectionEnum} internet_connection
 */
GetPartnerActivationsResponseSystemsInner.prototype['internet_connection'] = undefined;

/**
 * Whether the system is leased. Default false.
 * @member {Boolean} lease
 */
GetPartnerActivationsResponseSystemsInner.prototype['lease'] = undefined;

/**
 * Whether this system is permitted to operate. Default true.
 * @member {Boolean} operational
 */
GetPartnerActivationsResponseSystemsInner.prototype['operational'] = undefined;

/**
 * Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself.
 * @member {String} owner
 */
GetPartnerActivationsResponseSystemsInner.prototype['owner'] = undefined;

/**
 * Enlighten ID of this system owner. System-generated.
 * @member {Number} owner_id
 */
GetPartnerActivationsResponseSystemsInner.prototype['owner_id'] = undefined;

/**
 * Name of the system host.
 * @member {String} host
 */
GetPartnerActivationsResponseSystemsInner.prototype['host'] = undefined;

/**
 * Enlighten ID of this system host. System-generated.
 * @member {Number} host_id
 */
GetPartnerActivationsResponseSystemsInner.prototype['host_id'] = undefined;

/**
 * Name of the installer.
 * @member {String} installer_name
 */
GetPartnerActivationsResponseSystemsInner.prototype['installer_name'] = undefined;

/**
 * Enlighten ID of the installer of this system.
 * @member {Number} installer_id
 */
GetPartnerActivationsResponseSystemsInner.prototype['installer_id'] = undefined;

/**
 * Name of the maintainer.
 * @member {String} maintainer_name
 */
GetPartnerActivationsResponseSystemsInner.prototype['maintainer_name'] = undefined;

/**
 * Enlighten ID of the maintainer of this system.
 * @member {Number} maintainer_id
 */
GetPartnerActivationsResponseSystemsInner.prototype['maintainer_id'] = undefined;

/**
 * List of sub-contractors of this system.
 * @member {Array.<module:model/GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner>} authorized_subcontractors
 */
GetPartnerActivationsResponseSystemsInner.prototype['authorized_subcontractors'] = undefined;

/**
 * URI for this activation.
 * @member {String} uri
 */
GetPartnerActivationsResponseSystemsInner.prototype['uri'] = undefined;

/**
 * Activation last updated timestamp.
 * @member {Number} updated_at
 */
GetPartnerActivationsResponseSystemsInner.prototype['updated_at'] = undefined;

/**
 * Identifier of this system as provided by the calling user's company. This attribute is not present if the calling user's company does not have a reference for this system.
 * @member {String} reference
 */
GetPartnerActivationsResponseSystemsInner.prototype['reference'] = undefined;

/**
 * Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system.
 * @member {Array.<String>} other_references
 */
GetPartnerActivationsResponseSystemsInner.prototype['other_references'] = undefined;

/**
 * @member {module:model/Address} address
 */
GetPartnerActivationsResponseSystemsInner.prototype['address'] = undefined;
var _default = GetPartnerActivationsResponseSystemsInner;
exports["default"] = _default;