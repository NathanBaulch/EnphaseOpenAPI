"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The CreateUserRequest model module.
 * @module model/CreateUserRequest
 * @version 4.0
 */
var CreateUserRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateUserRequest</code>.
   * @alias module:model/CreateUserRequest
   * @param email {String} Email address of the user. Must be unique within Enlighten. Required.
   * @param firstName {String} User's first name. Required.
   * @param lastName {String} User's last name. Required.
   */
  function CreateUserRequest(email, firstName, lastName) {
    _classCallCheck(this, CreateUserRequest);
    CreateUserRequest.initialize(this, email, firstName, lastName);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateUserRequest, null, [{
    key: "initialize",
    value: function initialize(obj, email, firstName, lastName) {
      obj['email'] = email;
      obj['first_name'] = firstName;
      obj['last_name'] = lastName;
    }

    /**
     * Constructs a <code>CreateUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserRequest} obj Optional instance to populate.
     * @return {module:model/CreateUserRequest} The populated <code>CreateUserRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateUserRequest();
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('enlighten_emails')) {
          obj['enlighten_emails'] = _ApiClient["default"].convertToType(data['enlighten_emails'], 'Boolean');
        }
        if (data.hasOwnProperty('enlighten_view')) {
          obj['enlighten_view'] = _ApiClient["default"].convertToType(data['enlighten_view'], 'String');
        }
        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }
        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }
        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }
        if (data.hasOwnProperty('company_id')) {
          obj['company_id'] = _ApiClient["default"].convertToType(data['company_id'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateUserRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateUserRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateUserRequest.RequiredProperties),
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
      if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
        throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
      }
      // ensure the json data is a string
      if (data['enlighten_view'] && !(typeof data['enlighten_view'] === 'string' || data['enlighten_view'] instanceof String)) {
        throw new Error("Expected the field `enlighten_view` to be a primitive type in the JSON string but got " + data['enlighten_view']);
      }
      // ensure the json data is a string
      if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
        throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
      }
      // ensure the json data is a string
      if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
        throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
      }
      // ensure the json data is a string
      if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
        throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
      }
      return true;
    }
  }]);
  return CreateUserRequest;
}();
CreateUserRequest.RequiredProperties = ["email", "first_name", "last_name"];

/**
 * Email address of the user. Must be unique within Enlighten. Required.
 * @member {String} email
 */
CreateUserRequest.prototype['email'] = undefined;

/**
 * Whether the user receives automated emails from Enlighten. Default false.
 * @member {Boolean} enlighten_emails
 */
CreateUserRequest.prototype['enlighten_emails'] = undefined;

/**
 * Which view of Enlighten the user has. Options 'my' for MyEnlighten, 'manager' for Enlighten Manager. Default 'my'. Users who do not belong to companies should be set to 'my'. You must have an agreement with Enphase Energy to set a user to 'manager'. Company ID is required when enlighten_view is 'manager'.
 * @member {String} enlighten_view
 */
CreateUserRequest.prototype['enlighten_view'] = undefined;

/**
 * User's first name. Required.
 * @member {String} first_name
 */
CreateUserRequest.prototype['first_name'] = undefined;

/**
 * User's last name. Required.
 * @member {String} last_name
 */
CreateUserRequest.prototype['last_name'] = undefined;

/**
 * Telephone number of the user. Optional.
 * @member {String} phone
 */
CreateUserRequest.prototype['phone'] = undefined;

/**
 * Enlighten-generated ID of the company to which the user belongs, if any.
 * @member {Number} company_id
 */
CreateUserRequest.prototype['company_id'] = undefined;
var _default = CreateUserRequest;
exports["default"] = _default;