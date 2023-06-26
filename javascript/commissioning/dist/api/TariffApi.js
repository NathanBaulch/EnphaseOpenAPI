"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ServerError = _interopRequireDefault(require("../model/ServerError"));
var _TariffSettings = _interopRequireDefault(require("../model/TariffSettings"));
var _TooManyRequestsError = _interopRequireDefault(require("../model/TooManyRequestsError"));
var _UpdateSystemTariffSettingsResponse = _interopRequireDefault(require("../model/UpdateSystemTariffSettingsResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
* Tariff service.
* @module api/TariffApi
* @version 4.0
*/
var TariffApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TariffApi. 
  * @alias module:api/TariffApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TariffApi(apiClient) {
    _classCallCheck(this, TariffApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Get tariff for a system
   * Get tariff for a system.
   * @param {Number} systemId Unique numeric ID of the system.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TariffSettings} and HTTP response
   */
  _createClass(TariffApi, [{
    key: "getSystemTariffSettingsWithHttpInfo",
    value: function getSystemTariffSettingsWithHttpInfo(systemId) {
      var postBody = null;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling getSystemTariffSettings");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TariffSettings["default"];
      return this.apiClient.callApi('/systems/config/{system_id}/tariff', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get tariff for a system
     * Get tariff for a system.
     * @param {Number} systemId Unique numeric ID of the system.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TariffSettings}
     */
  }, {
    key: "getSystemTariffSettings",
    value: function getSystemTariffSettings(systemId) {
      return this.getSystemTariffSettingsWithHttpInfo(systemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update tariff for a system
     * @param {Number} systemId Unique numeric ID of the system.
     * @param {Object} opts Optional parameters
     * @param {module:model/TariffSettings} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateSystemTariffSettingsResponse} and HTTP response
     */
  }, {
    key: "updateSystemTariffSettingsWithHttpInfo",
    value: function updateSystemTariffSettingsWithHttpInfo(systemId, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling updateSystemTariffSettings");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/text'];
      var accepts = ['application/json'];
      var returnType = _UpdateSystemTariffSettingsResponse["default"];
      return this.apiClient.callApi('/systems/config/{system_id}/tariff', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update tariff for a system
     * @param {Number} systemId Unique numeric ID of the system.
     * @param {Object} opts Optional parameters
     * @param {module:model/TariffSettings} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateSystemTariffSettingsResponse}
     */
  }, {
    key: "updateSystemTariffSettings",
    value: function updateSystemTariffSettings(systemId, opts) {
      return this.updateSystemTariffSettingsWithHttpInfo(systemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return TariffApi;
}();
exports["default"] = TariffApi;