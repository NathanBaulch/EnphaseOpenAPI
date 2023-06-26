"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchUsersResponse = _interopRequireDefault(require("../model/SearchUsersResponse"));
var _ServerError = _interopRequireDefault(require("../model/ServerError"));
var _TooManyRequestsError = _interopRequireDefault(require("../model/TooManyRequestsError"));
var _UnprocessableEntityError = _interopRequireDefault(require("../model/UnprocessableEntityError"));
var _User = _interopRequireDefault(require("../model/User"));
var _UserExpandEnum = _interopRequireDefault(require("../model/UserExpandEnum"));
var _UserParams = _interopRequireDefault(require("../model/UserParams"));
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
* Users service.
* @module api/UsersApi
* @version 4.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns the requested user
   * You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches.
   * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
   * @param {Number} userId Enlighten ID of the user. System-generated.
   * @param {Object} opts Optional parameters
   * @param {module:model/UserExpandEnum} [expand] Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  _createClass(UsersApi, [{
    key: "getActivationUserWithHttpInfo",
    value: function getActivationUserWithHttpInfo(activationId, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling getActivationUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getActivationUser");
      }
      var pathParams = {
        'activation_id': activationId,
        'user_id': userId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/activations/{activation_id}/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns the requested user
     * You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @param {Number} userId Enlighten ID of the user. System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserExpandEnum} opts.expand Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
  }, {
    key: "getActivationUser",
    value: function getActivationUser(activationId, userId, opts) {
      return this.getActivationUserWithHttpInfo(activationId, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Return the current logged in user detail
     * Return the current logged in user detail. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserExpandEnum} [expand] Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
  }, {
    key: "getSelfUserWithHttpInfo",
    value: function getSelfUserWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/self', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Return the current logged in user detail
     * Return the current logged in user detail. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserExpandEnum} opts.expand Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
  }, {
    key: "getSelfUser",
    value: function getSelfUser(opts) {
      return this.getSelfUserWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns the requested user
     * You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserExpandEnum} [expand] Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
  }, {
    key: "getUserWithHttpInfo",
    value: function getUserWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUser");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns the requested user
     * You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserExpandEnum} opts.expand Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
  }, {
    key: "getUser",
    value: function getUser(userId, opts) {
      return this.getUserWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Search user
     * Returns the user ID for the given email ID only if the user exists.
     * @param {Object} opts Optional parameters
     * @param {String} [email] Email address of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchUsersResponse} and HTTP response
     */
  }, {
    key: "searchUsersWithHttpInfo",
    value: function searchUsersWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'email': opts['email']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchUsersResponse["default"];
      return this.apiClient.callApi('/users/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Search user
     * Returns the user ID for the given email ID only if the user exists.
     * @param {Object} opts Optional parameters
     * @param {String} opts.email Email address of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchUsersResponse}
     */
  }, {
    key: "searchUsers",
    value: function searchUsers(opts) {
      return this.searchUsersWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update user
     * You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. When 'company_id' is passed in the body param or the user company_id is already defined, we will not consider the 'enlighten_view' field value and the user will become an enlighten manager. You may change a user's company if you have access to the user, the old company, and the new company.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @param {Number} userId Enlighten ID of the user. System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserParams} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
  }, {
    key: "updateActivationUserWithHttpInfo",
    value: function updateActivationUserWithHttpInfo(activationId, userId, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling updateActivationUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateActivationUser");
      }
      var pathParams = {
        'activation_id': activationId,
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/activations/{activation_id}/users/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update user
     * You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. When 'company_id' is passed in the body param or the user company_id is already defined, we will not consider the 'enlighten_view' field value and the user will become an enlighten manager. You may change a user's company if you have access to the user, the old company, and the new company.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @param {Number} userId Enlighten ID of the user. System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserParams} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
  }, {
    key: "updateActivationUser",
    value: function updateActivationUser(activationId, userId, opts) {
      return this.updateActivationUserWithHttpInfo(activationId, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update user
     * You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. 'company_id' is an optional field. When you passing a 'company_id', the user become an enlighten manager and we will not consider 'enlighten_view' field value. You may change a user's company if you have access to the user, the old company, and the new company.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserParams} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
  }, {
    key: "updateUserWithHttpInfo",
    value: function updateUserWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update user
     * You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. 'company_id' is an optional field. When you passing a 'company_id', the user become an enlighten manager and we will not consider 'enlighten_view' field value. You may change a user's company if you have access to the user, the old company, and the new company.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserParams} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
  }, {
    key: "updateUser",
    value: function updateUser(userId, opts) {
      return this.updateUserWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return UsersApi;
}();
exports["default"] = UsersApi;