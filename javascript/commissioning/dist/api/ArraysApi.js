"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ArrayParams = _interopRequireDefault(require("../model/ArrayParams"));
var _Arrays = _interopRequireDefault(require("../model/Arrays"));
var _DeleteSystemArrayResponse = _interopRequireDefault(require("../model/DeleteSystemArrayResponse"));
var _ModelArray = _interopRequireDefault(require("../model/ModelArray"));
var _ServerError = _interopRequireDefault(require("../model/ServerError"));
var _TooManyRequestsError = _interopRequireDefault(require("../model/TooManyRequestsError"));
var _UnprocessableEntityError = _interopRequireDefault(require("../model/UnprocessableEntityError"));
var _UpdateSystemArraysRequest = _interopRequireDefault(require("../model/UpdateSystemArraysRequest"));
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
* Arrays service.
* @module api/ArraysApi
* @version 4.0
*/
var ArraysApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ArraysApi. 
  * @alias module:api/ArraysApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ArraysApi(apiClient) {
    _classCallCheck(this, ArraysApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Delete an array by ID
   * Delete an array by ID.
   * @param {Number} systemId System ID.
   * @param {Number} id Array ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteSystemArrayResponse} and HTTP response
   */
  _createClass(ArraysApi, [{
    key: "deleteSystemArrayWithHttpInfo",
    value: function deleteSystemArrayWithHttpInfo(systemId, id) {
      var postBody = null;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling deleteSystemArray");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSystemArray");
      }
      var pathParams = {
        'system_id': systemId,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteSystemArrayResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/arrays/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an array by ID
     * Delete an array by ID.
     * @param {Number} systemId System ID.
     * @param {Number} id Array ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteSystemArrayResponse}
     */
  }, {
    key: "deleteSystemArray",
    value: function deleteSystemArray(systemId, id) {
      return this.deleteSystemArrayWithHttpInfo(systemId, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Fetch array details by ID
     * Fetch array details by ID.
     * @param {Number} systemId System ID.
     * @param {Number} id Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Fetch particular system Array details' endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelArray} and HTTP response
     */
  }, {
    key: "getSystemArrayWithHttpInfo",
    value: function getSystemArrayWithHttpInfo(systemId, id) {
      var postBody = null;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling getSystemArray");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSystemArray");
      }
      var pathParams = {
        'system_id': systemId,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelArray["default"];
      return this.apiClient.callApi('/systems/{system_id}/arrays/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Fetch array details by ID
     * Fetch array details by ID.
     * @param {Number} systemId System ID.
     * @param {Number} id Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Fetch particular system Array details' endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelArray}
     */
  }, {
    key: "getSystemArray",
    value: function getSystemArray(systemId, id) {
      return this.getSystemArrayWithHttpInfo(systemId, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Fetch particular system Array details
     * Fetch particular system Array details.
     * @param {Number} systemId System ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Arrays} and HTTP response
     */
  }, {
    key: "getSystemArraysWithHttpInfo",
    value: function getSystemArraysWithHttpInfo(systemId) {
      var postBody = null;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling getSystemArrays");
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
      var returnType = _Arrays["default"];
      return this.apiClient.callApi('/systems/{system_id}/arrays', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Fetch particular system Array details
     * Fetch particular system Array details.
     * @param {Number} systemId System ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Arrays}
     */
  }, {
    key: "getSystemArrays",
    value: function getSystemArrays(systemId) {
      return this.getSystemArraysWithHttpInfo(systemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update particular system array details
     * Update particular system array details. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall in arrays, the top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.
     * @param {Number} systemId System ID.
     * @param {Number} id Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Update all Arrays' endpoint.
     * @param {Object} opts Optional parameters
     * @param {module:model/ArrayParams} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelArray} and HTTP response
     */
  }, {
    key: "updateSystemArrayWithHttpInfo",
    value: function updateSystemArrayWithHttpInfo(systemId, id, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling updateSystemArray");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSystemArray");
      }
      var pathParams = {
        'system_id': systemId,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/text'];
      var accepts = ['application/json'];
      var returnType = _ModelArray["default"];
      return this.apiClient.callApi('/systems/{system_id}/arrays/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update particular system array details
     * Update particular system array details. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall in arrays, the top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.
     * @param {Number} systemId System ID.
     * @param {Number} id Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Update all Arrays' endpoint.
     * @param {Object} opts Optional parameters
     * @param {module:model/ArrayParams} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelArray}
     */
  }, {
    key: "updateSystemArray",
    value: function updateSystemArray(systemId, id, opts) {
      return this.updateSystemArrayWithHttpInfo(systemId, id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update all arrays for system
     * Update all arrays for system. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall the arrays top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.
     * @param {Number} systemId System ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateSystemArraysRequest} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Arrays} and HTTP response
     */
  }, {
    key: "updateSystemArraysWithHttpInfo",
    value: function updateSystemArraysWithHttpInfo(systemId, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling updateSystemArrays");
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
      var returnType = _Arrays["default"];
      return this.apiClient.callApi('/systems/{system_id}/arrays', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update all arrays for system
     * Update all arrays for system. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall the arrays top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.
     * @param {Number} systemId System ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateSystemArraysRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Arrays}
     */
  }, {
    key: "updateSystemArrays",
    value: function updateSystemArrays(systemId, opts) {
      return this.updateSystemArraysWithHttpInfo(systemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return ArraysApi;
}();
exports["default"] = ArraysApi;