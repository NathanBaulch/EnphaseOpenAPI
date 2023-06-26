"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DeleteActivationResponse = _interopRequireDefault(require("../model/DeleteActivationResponse"));
var _GetActivationOpsProductionModeResponse = _interopRequireDefault(require("../model/GetActivationOpsProductionModeResponse"));
var _GetPartnerActivationsResponse = _interopRequireDefault(require("../model/GetPartnerActivationsResponse"));
var _GrantActivationUserAccessResponse = _interopRequireDefault(require("../model/GrantActivationUserAccessResponse"));
var _RevokeActivationUserAccessResponse = _interopRequireDefault(require("../model/RevokeActivationUserAccessResponse"));
var _ServerError = _interopRequireDefault(require("../model/ServerError"));
var _SetActivationOpsProductionModeRequest = _interopRequireDefault(require("../model/SetActivationOpsProductionModeRequest"));
var _SetActivationOpsProductionModeResponse = _interopRequireDefault(require("../model/SetActivationOpsProductionModeResponse"));
var _System = _interopRequireDefault(require("../model/System"));
var _SystemExpandEnum = _interopRequireDefault(require("../model/SystemExpandEnum"));
var _SystemParams = _interopRequireDefault(require("../model/SystemParams"));
var _SystemStageEnum = _interopRequireDefault(require("../model/SystemStageEnum"));
var _TooManyRequestsError = _interopRequireDefault(require("../model/TooManyRequestsError"));
var _UnprocessableEntityError = _interopRequireDefault(require("../model/UnprocessableEntityError"));
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
* Activations service.
* @module api/ActivationsApi
* @version 4.0
*/
var ActivationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ActivationsApi. 
  * @alias module:api/ActivationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActivationsApi(apiClient) {
    _classCallCheck(this, ActivationsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create new activation
   * Create new activation.
   * @param {Object} opts Optional parameters
   * @param {module:model/SystemParams} [params] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/System} and HTTP response
   */
  _createClass(ActivationsApi, [{
    key: "createPartnerActivationWithHttpInfo",
    value: function createPartnerActivationWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['params'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _System["default"];
      return this.apiClient.callApi('/partner/activations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create new activation
     * Create new activation.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemParams} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/System}
     */
  }, {
    key: "createPartnerActivation",
    value: function createPartnerActivation(opts) {
      return this.createPartnerActivationWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete an activation by ID
     * To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it.
     * @param {Number} id Enlighten ID of the activation(system).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteActivationResponse} and HTTP response
     */
  }, {
    key: "deleteActivationWithHttpInfo",
    value: function deleteActivationWithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteActivation");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteActivationResponse["default"];
      return this.apiClient.callApi('/activations/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an activation by ID
     * To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it.
     * @param {Number} id Enlighten ID of the activation(system).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteActivationResponse}
     */
  }, {
    key: "deleteActivation",
    value: function deleteActivation(id) {
      return this.deleteActivationWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get production mode
     * Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetActivationOpsProductionModeResponse} and HTTP response
     */
  }, {
    key: "getActivationOpsProductionModeWithHttpInfo",
    value: function getActivationOpsProductionModeWithHttpInfo(activationId) {
      var postBody = null;
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling getActivationOpsProductionMode");
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
      var returnType = _GetActivationOpsProductionModeResponse["default"];
      return this.apiClient.callApi('/activations/{activation_id}/ops/production_mode', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get production mode
     * Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetActivationOpsProductionModeResponse}
     */
  }, {
    key: "getActivationOpsProductionMode",
    value: function getActivationOpsProductionMode(activationId) {
      return this.getActivationOpsProductionModeWithHttpInfo(activationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieves an Activation by ID
     * By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner's name within the system hash, the response includes detailed information about the owner by using expand=owner. You can also expand the owner's company by using expand=owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand=host will include details about the system host. You can also expand the host's company by using expand=host.company. The response now includes information about the host and the company he belongs to.
     * @param {Number} id Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemExpandEnum} [expand] Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/System} and HTTP response
     */
  }, {
    key: "getPartnerActivationWithHttpInfo",
    value: function getPartnerActivationWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPartnerActivation");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _System["default"];
      return this.apiClient.callApi('/partner/activations/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieves an Activation by ID
     * By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner's name within the system hash, the response includes detailed information about the owner by using expand=owner. You can also expand the owner's company by using expand=owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand=host will include details about the system host. You can also expand the host's company by using expand=host.company. The response now includes information about the host and the company he belongs to.
     * @param {Number} id Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemExpandEnum} opts.expand Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/System}
     */
  }, {
    key: "getPartnerActivation",
    value: function getPartnerActivation(id, opts) {
      return this.getPartnerActivationWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List of Activations
     * Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn't exist, API will return an empty array.
     * @param {Object} opts Optional parameters
     * @param {String} [next] If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field.
     * @param {Number} [limit] There is a limit to the number of activations which can be returned at one time.
     * @param {module:model/SystemStageEnum} [stage] Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems.
     * @param {String} [reference] Filter activations by company reference.
     * @param {Number} [installerId] Filter activations by installer ID.
     * @param {String} [systemName] Filter activations by system name.
     * @param {String} [address] Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation.
     * @param {String} [region] Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'.
     * @param {String} [search] Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPartnerActivationsResponse} and HTTP response
     */
  }, {
    key: "getPartnerActivationsWithHttpInfo",
    value: function getPartnerActivationsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'next': opts['next'],
        'limit': opts['limit'],
        'stage': opts['stage'],
        'reference': opts['reference'],
        'installer_id': opts['installerId'],
        'system_name': opts['systemName'],
        'address': opts['address'],
        'region': opts['region'],
        'search': opts['search']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetPartnerActivationsResponse["default"];
      return this.apiClient.callApi('/partner/activations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List of Activations
     * Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn't exist, API will return an empty array.
     * @param {Object} opts Optional parameters
     * @param {String} opts.next If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field.
     * @param {Number} opts.limit There is a limit to the number of activations which can be returned at one time.
     * @param {module:model/SystemStageEnum} opts.stage Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems.
     * @param {String} opts.reference Filter activations by company reference.
     * @param {Number} opts.installerId Filter activations by installer ID.
     * @param {String} opts.systemName Filter activations by system name.
     * @param {String} opts.address Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation.
     * @param {String} opts.region Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'.
     * @param {String} opts.search Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPartnerActivationsResponse}
     */
  }, {
    key: "getPartnerActivations",
    value: function getPartnerActivations(opts) {
      return this.getPartnerActivationsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Grant Access
     * Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.
     * @param {Number} activationId Enlighten ID of the activation(system).
     * @param {Number} userId Enlighten ID of the user which you want to grant access.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GrantActivationUserAccessResponse} and HTTP response
     */
  }, {
    key: "grantActivationUserAccessWithHttpInfo",
    value: function grantActivationUserAccessWithHttpInfo(activationId, userId) {
      var postBody = null;
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling grantActivationUserAccess");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling grantActivationUserAccess");
      }
      var pathParams = {
        'activation_id': activationId,
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GrantActivationUserAccessResponse["default"];
      return this.apiClient.callApi('/activations/{activation_id}/users/{user_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Grant Access
     * Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.
     * @param {Number} activationId Enlighten ID of the activation(system).
     * @param {Number} userId Enlighten ID of the user which you want to grant access.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GrantActivationUserAccessResponse}
     */
  }, {
    key: "grantActivationUserAccess",
    value: function grantActivationUserAccess(activationId, userId) {
      return this.grantActivationUserAccessWithHttpInfo(activationId, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Revoke Access
     * Revokes a user's permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.
     * @param {Number} activationId Enlighten ID of the activation(system).
     * @param {Number} userId Enlighten ID of the user which you want to revoke the access.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RevokeActivationUserAccessResponse} and HTTP response
     */
  }, {
    key: "revokeActivationUserAccessWithHttpInfo",
    value: function revokeActivationUserAccessWithHttpInfo(activationId, userId) {
      var postBody = null;
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling revokeActivationUserAccess");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling revokeActivationUserAccess");
      }
      var pathParams = {
        'activation_id': activationId,
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RevokeActivationUserAccessResponse["default"];
      return this.apiClient.callApi('/activations/{activation_id}/users/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Revoke Access
     * Revokes a user's permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.
     * @param {Number} activationId Enlighten ID of the activation(system).
     * @param {Number} userId Enlighten ID of the user which you want to revoke the access.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RevokeActivationUserAccessResponse}
     */
  }, {
    key: "revokeActivationUserAccess",
    value: function revokeActivationUserAccess(activationId, userId) {
      return this.revokeActivationUserAccessWithHttpInfo(activationId, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Set production mode
     * Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SetActivationOpsProductionModeRequest} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SetActivationOpsProductionModeResponse} and HTTP response
     */
  }, {
    key: "setActivationOpsProductionModeWithHttpInfo",
    value: function setActivationOpsProductionModeWithHttpInfo(activationId, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling setActivationOpsProductionMode");
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
      var returnType = _SetActivationOpsProductionModeResponse["default"];
      return this.apiClient.callApi('/activations/{activation_id}/ops/production_mode', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Set production mode
     * Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.
     * @param {Number} activationId Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SetActivationOpsProductionModeRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SetActivationOpsProductionModeResponse}
     */
  }, {
    key: "setActivationOpsProductionMode",
    value: function setActivationOpsProductionMode(activationId, opts) {
      return this.setActivationOpsProductionModeWithHttpInfo(activationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an activation.
     * Update an activation.
     * @param {Number} id Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemParams} [params] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/System} and HTTP response
     */
  }, {
    key: "updatePartnerActivationWithHttpInfo",
    value: function updatePartnerActivationWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['params'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePartnerActivation");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _System["default"];
      return this.apiClient.callApi('/partner/activations/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update an activation.
     * Update an activation.
     * @param {Number} id Enlighten ID of the activation(system). System-generated.
     * @param {Object} opts Optional parameters
     * @param {module:model/SystemParams} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/System}
     */
  }, {
    key: "updatePartnerActivation",
    value: function updatePartnerActivation(id, opts) {
      return this.updatePartnerActivationWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return ActivationsApi;
}();
exports["default"] = ActivationsApi;