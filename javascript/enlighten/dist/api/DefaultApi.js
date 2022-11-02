"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ClientError = _interopRequireDefault(require("../model/ClientError"));
var _ConflictError = _interopRequireDefault(require("../model/ConflictError"));
var _ConnectionType = _interopRequireDefault(require("../model/ConnectionType"));
var _ConsumptionLifetimeResponse = _interopRequireDefault(require("../model/ConsumptionLifetimeResponse"));
var _ConsumptionStatsResponse = _interopRequireDefault(require("../model/ConsumptionStatsResponse"));
var _EnergyLifetimeResponse = _interopRequireDefault(require("../model/EnergyLifetimeResponse"));
var _EnvoysResponse = _interopRequireDefault(require("../model/EnvoysResponse"));
var _InventoryResponse = _interopRequireDefault(require("../model/InventoryResponse"));
var _InvertersSummaryByEnvoyOrSiteResponse = _interopRequireDefault(require("../model/InvertersSummaryByEnvoyOrSiteResponse"));
var _MonthlyProductionResponse = _interopRequireDefault(require("../model/MonthlyProductionResponse"));
var _NotFoundError = _interopRequireDefault(require("../model/NotFoundError"));
var _ProductionMeterReadingsResponse = _interopRequireDefault(require("../model/ProductionMeterReadingsResponse"));
var _RgmStatsResponse = _interopRequireDefault(require("../model/RgmStatsResponse"));
var _SearchSystemIdResponse = _interopRequireDefault(require("../model/SearchSystemIdResponse"));
var _ServerError = _interopRequireDefault(require("../model/ServerError"));
var _StatsResponse = _interopRequireDefault(require("../model/StatsResponse"));
var _Status = _interopRequireDefault(require("../model/Status"));
var _SummaryResponse = _interopRequireDefault(require("../model/SummaryResponse"));
var _SystemsResponse = _interopRequireDefault(require("../model/SystemsResponse"));
var _UnprocessableEntityError = _interopRequireDefault(require("../model/UnprocessableEntityError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Default service.
* @module api/DefaultApi
* @version 2.0
*/
var DefaultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter, returns `204` - No Content. If you don't have permission to view consumption data, the response code is `401`.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or metering problems.
   * @param {String} userId 
   * @param {Number} systemId 
   * @param {Object} opts Optional parameters
   * @param {Date} opts.startDate The date on which to start the time series. Defaults to the system's operational date.
   * @param {Date} opts.endDate The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConsumptionLifetimeResponse} and HTTP response
   */
  _createClass(DefaultApi, [{
    key: "consumptionLifetimeWithHttpInfo",
    value: function consumptionLifetimeWithHttpInfo(userId, systemId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling consumptionLifetime");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling consumptionLifetime");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId,
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConsumptionLifetimeResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/consumption_lifetime', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter, returns `204` - No Content. If you don't have permission to view consumption data, the response code is `401`.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or metering problems.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate The date on which to start the time series. Defaults to the system's operational date.
     * @param {Date} opts.endDate The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConsumptionLifetimeResponse}
     */
  }, {
    key: "consumptionLifetime",
    value: function consumptionLifetime(userId, systemId, opts) {
      return this.consumptionLifetimeWithHttpInfo(userId, systemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any consumption meters installed, the response includes an empty intervals array.  If you don't have permission to view consumption data, the response code is `401`.  Under some conditions, data for a given period may be temporarily unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
     * @param {Number} opts.endAt End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConsumptionStatsResponse} and HTTP response
     */
  }, {
    key: "consumptionStatsWithHttpInfo",
    value: function consumptionStatsWithHttpInfo(userId, systemId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling consumptionStats");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling consumptionStats");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId,
        'start_at': opts['startAt'],
        'end_at': opts['endAt']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConsumptionStatsResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/consumption_stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any consumption meters installed, the response includes an empty intervals array.  If you don't have permission to view consumption data, the response code is `401`.  Under some conditions, data for a given period may be temporarily unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
     * @param {Number} opts.endAt End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConsumptionStatsResponse}
     */
  }, {
    key: "consumptionStats",
    value: function consumptionStats(userId, systemId, opts) {
      return this.consumptionStatsWithHttpInfo(userId, systemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as `[909, 4970, 0, 0, 0]`, then no energy has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or production problems.  If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as measured by the meter. This is called the \"merged time series\". In addition, the response includes the attribute `meter_start_date`, to indicate where in the time series the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter `production=all` to the request.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate The date on which to start the time series. Defaults to the system's operational date.
     * @param {Date} opts.endDate The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
     * @param {module:model/String} opts.production When `all`, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnergyLifetimeResponse} and HTTP response
     */
  }, {
    key: "energyLifetimeWithHttpInfo",
    value: function energyLifetimeWithHttpInfo(userId, systemId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling energyLifetime");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling energyLifetime");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId,
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'production': opts['production']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EnergyLifetimeResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/energy_lifetime', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as `[909, 4970, 0, 0, 0]`, then no energy has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or production problems.  If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as measured by the meter. This is called the \"merged time series\". In addition, the response includes the attribute `meter_start_date`, to indicate where in the time series the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter `production=all` to the request.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate The date on which to start the time series. Defaults to the system's operational date.
     * @param {Date} opts.endDate The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
     * @param {module:model/String} opts.production When `all`, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnergyLifetimeResponse}
     */
  }, {
    key: "energyLifetime",
    value: function energyLifetime(userId, systemId, opts) {
      return this.energyLifetimeWithHttpInfo(userId, systemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a listing of all active Envoys currently deployed on the system.
     * @param {String} userId 
     * @param {Number} systemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvoysResponse} and HTTP response
     */
  }, {
    key: "envoysWithHttpInfo",
    value: function envoysWithHttpInfo(userId, systemId) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling envoys");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling envoys");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EnvoysResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/envoys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a listing of all active Envoys currently deployed on the system.
     * @param {String} userId 
     * @param {Number} systemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvoysResponse}
     */
  }, {
    key: "envoys",
    value: function envoys(userId, systemId) {
      return this.envoysWithHttpInfo(userId, systemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \"Active\" does not imply that the device is currently reporting, producing, or measuring energy.
     * @param {String} userId 
     * @param {Number} systemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InventoryResponse} and HTTP response
     */
  }, {
    key: "inventoryWithHttpInfo",
    value: function inventoryWithHttpInfo(userId, systemId) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling inventory");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling inventory");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InventoryResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/inventory', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \"Active\" does not imply that the device is currently reporting, producing, or measuring energy.
     * @param {String} userId 
     * @param {Number} systemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InventoryResponse}
     */
  }, {
    key: "inventory",
    value: function inventory(userId, systemId) {
      return this.inventoryWithHttpInfo(userId, systemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns the summary along with the energy produced on the system over its lifetime.
     * @param {String} userId 
     * @param {Number} siteId The identifier of the system.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InvertersSummaryByEnvoyOrSiteResponse>} and HTTP response
     */
  }, {
    key: "invertersSummaryByEnvoyOrSiteWithHttpInfo",
    value: function invertersSummaryByEnvoyOrSiteWithHttpInfo(userId, siteId) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling invertersSummaryByEnvoyOrSite");
      }
      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw new Error("Missing the required parameter 'siteId' when calling invertersSummaryByEnvoyOrSite");
      }
      var pathParams = {};
      var queryParams = {
        'user_id': userId,
        'site_id': siteId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InvertersSummaryByEnvoyOrSiteResponse["default"]];
      return this.apiClient.callApi('/systems/inverters_summary_by_envoy_or_site', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns the summary along with the energy produced on the system over its lifetime.
     * @param {String} userId 
     * @param {Number} siteId The identifier of the system.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InvertersSummaryByEnvoyOrSiteResponse>}
     */
  }, {
    key: "invertersSummaryByEnvoyOrSite",
    value: function invertersSummaryByEnvoyOrSite(userId, siteId) {
      return this.invertersSummaryByEnvoyOrSiteWithHttpInfo(userId, siteId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * This endpoint is deprecated and will be removed in a future release. Use `production_meter_readings` or `energy_lifetime` instead.  Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system, measurements come from the meter; otherwise, measurements come from the microinverters.  This endpoint can return a response of Data Temporarily Unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Date} startDate Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a `start_date` of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MonthlyProductionResponse} and HTTP response
     */
  }, {
    key: "monthlyProductionWithHttpInfo",
    value: function monthlyProductionWithHttpInfo(userId, systemId, startDate) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling monthlyProduction");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling monthlyProduction");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling monthlyProduction");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId,
        'start_date': startDate
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MonthlyProductionResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/monthly_production', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * This endpoint is deprecated and will be removed in a future release. Use `production_meter_readings` or `energy_lifetime` instead.  Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system, measurements come from the meter; otherwise, measurements come from the microinverters.  This endpoint can return a response of Data Temporarily Unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Date} startDate Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a `start_date` of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MonthlyProductionResponse}
     */
  }, {
    key: "monthlyProduction",
    value: function monthlyProduction(userId, systemId, startDate) {
      return this.monthlyProductionWithHttpInfo(userId, systemId, startDate).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns the last known \"odometer\" reading of each revenue-grade production meter on the system as of the requested time.  This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. `read_at` is the time at which the reading was taken, and is always less than or equal to the requested `end_at`. Commonly, the reading will be within 30 minutes of the requested `end_at`; however, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when `end_at` is close to the current time. Meters that have been retired from a system will show an `end_at` that doesn't change, and that eventually is far away from the current time.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.endAt 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductionMeterReadingsResponse} and HTTP response
     */
  }, {
    key: "productionMeterReadingsWithHttpInfo",
    value: function productionMeterReadingsWithHttpInfo(userId, systemId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling productionMeterReadings");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling productionMeterReadings");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId,
        'end_at': opts['endAt']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProductionMeterReadingsResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/production_meter_readings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns the last known \"odometer\" reading of each revenue-grade production meter on the system as of the requested time.  This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. `read_at` is the time at which the reading was taken, and is always less than or equal to the requested `end_at`. Commonly, the reading will be within 30 minutes of the requested `end_at`; however, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when `end_at` is close to the current time. Meters that have been retired from a system will show an `end_at` that doesn't change, and that eventually is far away from the current time.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.endAt 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductionMeterReadingsResponse}
     */
  }, {
    key: "productionMeterReadings",
    value: function productionMeterReadings(userId, systemId, opts) {
      return this.productionMeterReadingsWithHttpInfo(userId, systemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any revenue-grade meters installed, the response includes an empty intervals array.  Under some conditions, data for a given period may be temporarily unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
     * @param {Number} opts.endAt End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RgmStatsResponse} and HTTP response
     */
  }, {
    key: "rgmStatsWithHttpInfo",
    value: function rgmStatsWithHttpInfo(userId, systemId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling rgmStats");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling rgmStats");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId,
        'start_at': opts['startAt'],
        'end_at': opts['endAt']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RgmStatsResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/rgm_stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any revenue-grade meters installed, the response includes an empty intervals array.  Under some conditions, data for a given period may be temporarily unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
     * @param {Number} opts.endAt End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RgmStatsResponse}
     */
  }, {
    key: "rgmStats",
    value: function rgmStats(userId, systemId, opts) {
      return this.rgmStatsWithHttpInfo(userId, systemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get system ID by envoy serial number.
     * @param {String} userId 
     * @param {String} serialNum Serial number of the envoy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchSystemIdResponse} and HTTP response
     */
  }, {
    key: "searchSystemIdWithHttpInfo",
    value: function searchSystemIdWithHttpInfo(userId, serialNum) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling searchSystemId");
      }
      // verify the required parameter 'serialNum' is set
      if (serialNum === undefined || serialNum === null) {
        throw new Error("Missing the required parameter 'serialNum' when calling searchSystemId");
      }
      var pathParams = {};
      var queryParams = {
        'user_id': userId,
        'serial_num': serialNum
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchSystemIdResponse["default"];
      return this.apiClient.callApi('/systems/search_system_id', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get system ID by envoy serial number.
     * @param {String} userId 
     * @param {String} serialNum Serial number of the envoy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchSystemIdResponse}
     */
  }, {
    key: "searchSystemId",
    value: function searchSystemId(userId, serialNum) {
      return this.searchSystemIdWithHttpInfo(userId, serialNum).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of intervals. Intervals are 5 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.  The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a gap, because the microinverters do not produce at night.  Sometimes a request cannot be processed because the requested dates are invalid for the the system in question. Examples include asking for stats starting at a time that is later than the system's last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is `422` and the response body includes an error reason as well as the parameters used to process the request.  If the system doesn't have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the `operational_date`.
     * @param {Number} opts.endAt End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StatsResponse} and HTTP response
     */
  }, {
    key: "statsWithHttpInfo",
    value: function statsWithHttpInfo(userId, systemId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling stats");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling stats");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId,
        'start_at': opts['startAt'],
        'end_at': opts['endAt']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StatsResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of intervals. Intervals are 5 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.  The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a gap, because the microinverters do not produce at night.  Sometimes a request cannot be processed because the requested dates are invalid for the the system in question. Examples include asking for stats starting at a time that is later than the system's last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is `422` and the response body includes an error reason as well as the parameters used to process the request.  If the system doesn't have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the `operational_date`.
     * @param {Number} opts.endAt End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatsResponse}
     */
  }, {
    key: "stats",
    value: function stats(userId, systemId, opts) {
      return this.statsWithHttpInfo(userId, systemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns summary information for the specified system.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.summaryDate Start of reporting period. If no `summary_date` is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and `422` status.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SummaryResponse} and HTTP response
     */
  }, {
    key: "summaryWithHttpInfo",
    value: function summaryWithHttpInfo(userId, systemId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling summary");
      }
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling summary");
      }
      var pathParams = {
        'system_id': systemId
      };
      var queryParams = {
        'user_id': userId,
        'summary_date': opts['summaryDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SummaryResponse["default"];
      return this.apiClient.callApi('/systems/{system_id}/summary', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns summary information for the specified system.
     * @param {String} userId 
     * @param {Number} systemId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.summaryDate Start of reporting period. If no `summary_date` is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and `422` status.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SummaryResponse}
     */
  }, {
    key: "summary",
    value: function summary(userId, systemId, opts) {
      return this.summaryWithHttpInfo(userId, systemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full list, use the `next` attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.next 
     * @param {Number} opts.limit  (default to 100)
     * @param {Number} opts.systemId 
     * @param {Array.<Number>} opts.systemId2 
     * @param {String} opts.systemName 
     * @param {Array.<String>} opts.systemName2 
     * @param {module:model/Status} opts.status 
     * @param {Array.<module:model/Status>} opts.status2 
     * @param {String} opts.reference 
     * @param {Array.<String>} opts.reference2 
     * @param {String} opts.installer 
     * @param {Array.<String>} opts.installer2 
     * @param {module:model/ConnectionType} opts.connectionType 
     * @param {Array.<module:model/ConnectionType>} opts.connectionType2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SystemsResponse} and HTTP response
     */
  }, {
    key: "systemsWithHttpInfo",
    value: function systemsWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling systems");
      }
      var pathParams = {};
      var queryParams = {
        'user_id': userId,
        'next': opts['next'],
        'limit': opts['limit'],
        'system_id': opts['systemId'],
        'system_id[]': this.apiClient.buildCollectionParam(opts['systemId2'], 'multi'),
        'system_name': opts['systemName'],
        'system_name[]': this.apiClient.buildCollectionParam(opts['systemName2'], 'multi'),
        'status': opts['status'],
        'status[]': this.apiClient.buildCollectionParam(opts['status2'], 'multi'),
        'reference': opts['reference'],
        'reference[]': this.apiClient.buildCollectionParam(opts['reference2'], 'multi'),
        'installer': opts['installer'],
        'installer[]': this.apiClient.buildCollectionParam(opts['installer2'], 'multi'),
        'connection_type': opts['connectionType'],
        'connection_type[]': this.apiClient.buildCollectionParam(opts['connectionType2'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SystemsResponse["default"];
      return this.apiClient.callApi('/systems', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full list, use the `next` attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.next 
     * @param {Number} opts.limit  (default to 100)
     * @param {Number} opts.systemId 
     * @param {Array.<Number>} opts.systemId2 
     * @param {String} opts.systemName 
     * @param {Array.<String>} opts.systemName2 
     * @param {module:model/Status} opts.status 
     * @param {Array.<module:model/Status>} opts.status2 
     * @param {String} opts.reference 
     * @param {Array.<String>} opts.reference2 
     * @param {String} opts.installer 
     * @param {Array.<String>} opts.installer2 
     * @param {module:model/ConnectionType} opts.connectionType 
     * @param {Array.<module:model/ConnectionType>} opts.connectionType2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SystemsResponse}
     */
  }, {
    key: "systems",
    value: function systems(userId, opts) {
      return this.systemsWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return DefaultApi;
}();
exports["default"] = DefaultApi;