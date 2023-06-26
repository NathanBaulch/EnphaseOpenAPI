"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ServerError = _interopRequireDefault(require("../model/ServerError"));
var _SystemEstimate = _interopRequireDefault(require("../model/SystemEstimate"));
var _TooManyRequestsError = _interopRequireDefault(require("../model/TooManyRequestsError"));
var _UnprocessableEntityError = _interopRequireDefault(require("../model/UnprocessableEntityError"));
var _UpdateActivationEstimateRequest = _interopRequireDefault(require("../model/UpdateActivationEstimateRequest"));
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
* Estimate service.
* @module api/EstimateApi
* @version 4.0
*/
var EstimateApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EstimateApi. 
  * @alias module:api/EstimateApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EstimateApi(apiClient) {
    _classCallCheck(this, EstimateApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns the estimate for this system.
   * Provides access to production estimates for a system. An estimate includes the annual degradation factor for the system as well as estimated production, in kWh, for each month. By default degrade_factor value is 0.5 and month_estimates value is an empty array.
   * @param {Number} activationId Activation ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SystemEstimate} and HTTP response
   */
  _createClass(EstimateApi, [{
    key: "getActivationEstimateWithHttpInfo",
    value: function getActivationEstimateWithHttpInfo(activationId) {
      var postBody = null;
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling getActivationEstimate");
      }
      var pathParams = {
        'activation_id': activationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SystemEstimate["default"];
      return this.apiClient.callApi('/activations/{activation_id}/estimate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns the estimate for this system.
     * Provides access to production estimates for a system. An estimate includes the annual degradation factor for the system as well as estimated production, in kWh, for each month. By default degrade_factor value is 0.5 and month_estimates value is an empty array.
     * @param {Number} activationId Activation ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SystemEstimate}
     */
  }, {
    key: "getActivationEstimate",
    value: function getActivationEstimate(activationId) {
      return this.getActivationEstimateWithHttpInfo(activationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update the estimate for this system.
     * Updates the estimate for this system.
     * @param {Number} activationId Activation ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateActivationEstimateRequest} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SystemEstimate} and HTTP response
     */
  }, {
    key: "updateActivationEstimateWithHttpInfo",
    value: function updateActivationEstimateWithHttpInfo(activationId, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling updateActivationEstimate");
      }
      var pathParams = {
        'activation_id': activationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SystemEstimate["default"];
      return this.apiClient.callApi('/activations/{activation_id}/estimate', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update the estimate for this system.
     * Updates the estimate for this system.
     * @param {Number} activationId Activation ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateActivationEstimateRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SystemEstimate}
     */
  }, {
    key: "updateActivationEstimate",
    value: function updateActivationEstimate(activationId, opts) {
      return this.updateActivationEstimateWithHttpInfo(activationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return EstimateApi;
}();
exports["default"] = EstimateApi;