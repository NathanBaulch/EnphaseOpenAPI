"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCompanyUserRequest = _interopRequireDefault(require("../model/CreateCompanyUserRequest"));
var _GetCompanyUsersResponse = _interopRequireDefault(require("../model/GetCompanyUsersResponse"));
var _GetSelfCompanyAuthorizedSubcontractorsResponse = _interopRequireDefault(require("../model/GetSelfCompanyAuthorizedSubcontractorsResponse"));
var _GetSelfCompanyBranchesResponse = _interopRequireDefault(require("../model/GetSelfCompanyBranchesResponse"));
var _ServerError = _interopRequireDefault(require("../model/ServerError"));
var _TooManyRequestsError = _interopRequireDefault(require("../model/TooManyRequestsError"));
var _UnprocessableEntityError = _interopRequireDefault(require("../model/UnprocessableEntityError"));
var _UpdateCompanyUserRequest = _interopRequireDefault(require("../model/UpdateCompanyUserRequest"));
var _User = _interopRequireDefault(require("../model/User"));
var _UserExpandEnum = _interopRequireDefault(require("../model/UserExpandEnum"));
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
* Companies service.
* @module api/CompaniesApi
* @version 4.0
*/
var CompaniesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CompaniesApi. 
  * @alias module:api/CompaniesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CompaniesApi(apiClient) {
    _classCallCheck(this, CompaniesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create company user
   * Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.
   * @param {Number} companyId Company ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateCompanyUserRequest} [params] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  _createClass(CompaniesApi, [{
    key: "createCompanyUserWithHttpInfo",
    value: function createCompanyUserWithHttpInfo(companyId, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createCompanyUser");
      }
      var pathParams = {
        'company_id': companyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/companies/{company_id}/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create company user
     * Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.
     * @param {Number} companyId Company ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCompanyUserRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
  }, {
    key: "createCompanyUser",
    value: function createCompanyUser(companyId, opts) {
      return this.createCompanyUserWithHttpInfo(companyId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns the requested user
     * Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.
     * @param {Number} companyId Company ID.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserExpandEnum} [expand] Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
  }, {
    key: "getCompanyUserWithHttpInfo",
    value: function getCompanyUserWithHttpInfo(companyId, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCompanyUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getCompanyUser");
      }
      var pathParams = {
        'company_id': companyId,
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
      return this.apiClient.callApi('/companies/{company_id}/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns the requested user
     * Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.
     * @param {Number} companyId Company ID.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserExpandEnum} opts.expand Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
  }, {
    key: "getCompanyUser",
    value: function getCompanyUser(companyId, userId, opts) {
      return this.getCompanyUserWithHttpInfo(companyId, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get all users with in a company
     * Returns the users in the given company.
     * @param {Number} companyId Company ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCompanyUsersResponse} and HTTP response
     */
  }, {
    key: "getCompanyUsersWithHttpInfo",
    value: function getCompanyUsersWithHttpInfo(companyId) {
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCompanyUsers");
      }
      var pathParams = {
        'company_id': companyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetCompanyUsersResponse["default"];
      return this.apiClient.callApi('/companies/{company_id}/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get all users with in a company
     * Returns the users in the given company.
     * @param {Number} companyId Company ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCompanyUsersResponse}
     */
  }, {
    key: "getCompanyUsers",
    value: function getCompanyUsers(companyId) {
      return this.getCompanyUsersWithHttpInfo(companyId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * User's company and its authorized subcontractors.
     * Returns all the authorized subcontractors of a given company, if any.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSelfCompanyAuthorizedSubcontractorsResponse} and HTTP response
     */
  }, {
    key: "getSelfCompanyAuthorizedSubcontractorsWithHttpInfo",
    value: function getSelfCompanyAuthorizedSubcontractorsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetSelfCompanyAuthorizedSubcontractorsResponse["default"];
      return this.apiClient.callApi('/companies/self/authorized_subcontractors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * User's company and its authorized subcontractors.
     * Returns all the authorized subcontractors of a given company, if any.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSelfCompanyAuthorizedSubcontractorsResponse}
     */
  }, {
    key: "getSelfCompanyAuthorizedSubcontractors",
    value: function getSelfCompanyAuthorizedSubcontractors() {
      return this.getSelfCompanyAuthorizedSubcontractorsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * User's company and its branches
     * Returns information about the API user's company and its branches, if any.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSelfCompanyBranchesResponse} and HTTP response
     */
  }, {
    key: "getSelfCompanyBranchesWithHttpInfo",
    value: function getSelfCompanyBranchesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetSelfCompanyBranchesResponse["default"];
      return this.apiClient.callApi('/companies/self/branches', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * User's company and its branches
     * Returns information about the API user's company and its branches, if any.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSelfCompanyBranchesResponse}
     */
  }, {
    key: "getSelfCompanyBranches",
    value: function getSelfCompanyBranches() {
      return this.getSelfCompanyBranchesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update company user
     * Updates a user. You may change a user's company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches.
     * @param {Number} companyId Company ID.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateCompanyUserRequest} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
  }, {
    key: "updateCompanyUserWithHttpInfo",
    value: function updateCompanyUserWithHttpInfo(companyId, userId, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling updateCompanyUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateCompanyUser");
      }
      var pathParams = {
        'company_id': companyId,
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/companies/{company_id}/users/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update company user
     * Updates a user. You may change a user's company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches.
     * @param {Number} companyId Company ID.
     * @param {Number} userId User ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateCompanyUserRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
  }, {
    key: "updateCompanyUser",
    value: function updateCompanyUser(companyId, userId, opts) {
      return this.updateCompanyUserWithHttpInfo(companyId, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return CompaniesApi;
}();
exports["default"] = CompaniesApi;