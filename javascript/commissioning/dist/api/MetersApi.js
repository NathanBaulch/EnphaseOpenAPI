"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetSystemMeterResponse = _interopRequireDefault(require("../model/GetSystemMeterResponse"));
var _ServerError = _interopRequireDefault(require("../model/ServerError"));
var _SetActivationMeterStatusRequest = _interopRequireDefault(require("../model/SetActivationMeterStatusRequest"));
var _SetActivationMeterStatusResponse = _interopRequireDefault(require("../model/SetActivationMeterStatusResponse"));
var _TooManyRequestsError = _interopRequireDefault(require("../model/TooManyRequestsError"));
var _UnprocessableEntityError = _interopRequireDefault(require("../model/UnprocessableEntityError"));
var _UpdateSystemMeterResponse = _interopRequireDefault(require("../model/UpdateSystemMeterResponse"));
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
* Meters service.
* @module api/MetersApi
* @version 4.0
*/
var MetersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MetersApi. 
  * @alias module:api/MetersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MetersApi(apiClient) {
    _classCallCheck(this, MetersApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns the requested meter detail.
   * Returns the requested meter by serial number. You must have access to the requested system and meter; otherwise a 401 is returned.
   * @param {Number} systemId System ID.
   * @param {String} serialNumber Meter serial number.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSystemMeterResponse} and HTTP response
   */
  _createClass(MetersApi, [{
    key: "getSystemMeterWithHttpInfo",
    value: function getSystemMeterWithHttpInfo(systemId, serialNumber) {
      var postBody = null;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling getSystemMeter");
      }
      // verify the required parameter 'serialNumber' is set
      if (serialNumber === undefined || serialNumber === null) {
        throw new Error("Missing the required parameter 'serialNumber' when calling getSystemMeter");
      }
      var pathParams = {
        'system_id': systemId,
        'serial_number': serialNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetSystemMeterResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/meters/{serial_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns the requested meter detail.
     * Returns the requested meter by serial number. You must have access to the requested system and meter; otherwise a 401 is returned.
     * @param {Number} systemId System ID.
     * @param {String} serialNumber Meter serial number.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSystemMeterResponse}
     */
  }, {
    key: "getSystemMeter",
    value: function getSystemMeter(systemId, serialNumber) {
      return this.getSystemMeterWithHttpInfo(systemId, serialNumber).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Enable or Disable the meters.
     * Enable or Disable the meters. You must have access to the requested system and meter; otherwise a 401 is returned.
     * @param {Number} activationId Activation ID.
     * @param {String} serialNumber Meter serial number.
     * @param {Object} opts Optional parameters
     * @param {module:model/SetActivationMeterStatusRequest} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SetActivationMeterStatusResponse} and HTTP response
     */
  }, {
    key: "setActivationMeterStatusWithHttpInfo",
    value: function setActivationMeterStatusWithHttpInfo(activationId, serialNumber, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling setActivationMeterStatus");
      }
      // verify the required parameter 'serialNumber' is set
      if (serialNumber === undefined || serialNumber === null) {
        throw new Error("Missing the required parameter 'serialNumber' when calling setActivationMeterStatus");
      }
      var pathParams = {
        'activation_id': activationId,
        'serial_number': serialNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SetActivationMeterStatusResponse["default"];
      return this.apiClient.callApi('/activations/{activation_id}/meters/{serial_number}/meter_control', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Enable or Disable the meters.
     * Enable or Disable the meters. You must have access to the requested system and meter; otherwise a 401 is returned.
     * @param {Number} activationId Activation ID.
     * @param {String} serialNumber Meter serial number.
     * @param {Object} opts Optional parameters
     * @param {module:model/SetActivationMeterStatusRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SetActivationMeterStatusResponse}
     */
  }, {
    key: "setActivationMeterStatus",
    value: function setActivationMeterStatus(activationId, serialNumber, opts) {
      return this.setActivationMeterStatusWithHttpInfo(activationId, serialNumber, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update the operational date of a meter by serial number.
     * Update the operational date of a meter. You must have access to the requested system and meter; otherwise a 401 is returned.
     * @param {Number} systemId System ID.
     * @param {String} serialNumber Meter serial number.
     * @param {Object} opts Optional parameters
     * @param {Date} [operationalDate] Operational date in the following format YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateSystemMeterResponse} and HTTP response
     */
  }, {
    key: "updateSystemMeterWithHttpInfo",
    value: function updateSystemMeterWithHttpInfo(systemId, serialNumber, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling updateSystemMeter");
      }
      // verify the required parameter 'serialNumber' is set
      if (serialNumber === undefined || serialNumber === null) {
        throw new Error("Missing the required parameter 'serialNumber' when calling updateSystemMeter");
      }
      var pathParams = {
        'system_id': systemId,
        'serial_number': serialNumber
      };
      var queryParams = {
        'operational_date': opts['operationalDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UpdateSystemMeterResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/meters/{serial_number}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update the operational date of a meter by serial number.
     * Update the operational date of a meter. You must have access to the requested system and meter; otherwise a 401 is returned.
     * @param {Number} systemId System ID.
     * @param {String} serialNumber Meter serial number.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.operationalDate Operational date in the following format YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateSystemMeterResponse}
     */
  }, {
    key: "updateSystemMeter",
    value: function updateSystemMeter(systemId, serialNumber, opts) {
      return this.updateSystemMeterWithHttpInfo(systemId, serialNumber, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return MetersApi;
}();
exports["default"] = MetersApi;