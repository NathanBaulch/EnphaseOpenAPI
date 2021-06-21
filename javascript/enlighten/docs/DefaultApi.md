# TheEnlightenSystemsApi.DefaultApi

All URIs are relative to *https://api.enphaseenergy.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumptionLifetime**](DefaultApi.md#consumptionLifetime) | **GET** /systems/{system_id}/consumption_lifetime | 
[**consumptionStats**](DefaultApi.md#consumptionStats) | **GET** /systems/{system_id}/consumption_stats | 
[**energyLifetime**](DefaultApi.md#energyLifetime) | **GET** /systems/{system_id}/energy_lifetime | 
[**envoys**](DefaultApi.md#envoys) | **GET** /systems/{system_id}/envoys | 
[**inventory**](DefaultApi.md#inventory) | **GET** /systems/{system_id}/inventory | 
[**invertersSummaryByEnvoyOrSite**](DefaultApi.md#invertersSummaryByEnvoyOrSite) | **GET** /systems/inverters_summary_by_envoy_or_site | 
[**monthlyProduction**](DefaultApi.md#monthlyProduction) | **GET** /systems/{system_id}/monthly_production | 
[**productionMeterReadings**](DefaultApi.md#productionMeterReadings) | **GET** /systems/{system_id}/production_meter_readings | 
[**rgmStats**](DefaultApi.md#rgmStats) | **GET** /systems/{system_id}/rgm_stats | 
[**searchSystemId**](DefaultApi.md#searchSystemId) | **GET** /systems/search_system_id | 
[**stats**](DefaultApi.md#stats) | **GET** /systems/{system_id}/stats | 
[**summary**](DefaultApi.md#summary) | **GET** /systems/{system_id}/summary | 
[**systems**](DefaultApi.md#systems) | **GET** /systems | 



## consumptionLifetime

> ConsumptionLifetimeResponse consumptionLifetime(userId, systemId, opts)



Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter, returns &#x60;204&#x60; - No Content. If you don&#39;t have permission to view consumption data, the response code is &#x60;401&#x60;.  The time series includes one entry for each day from the &#x60;start_date&#x60; to the &#x60;end_date&#x60;. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system&#39;s status in the &#x60;meta&#x60; attribute of the response to determine when the system last reported and whether it has communication or metering problems.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
let opts = {
  'startDate': Fri Jul 01 10:00:00 AEST 2016, // Date | The date on which to start the time series. Defaults to the system's operational date.
  'endDate': Sun Jul 31 10:00:00 AEST 2016 // Date | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
};
apiInstance.consumptionLifetime(userId, systemId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 
 **startDate** | **Date**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional] 
 **endDate** | **Date**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional] 

### Return type

[**ConsumptionLifetimeResponse**](ConsumptionLifetimeResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## consumptionStats

> ConsumptionStatsResponse consumptionStats(userId, systemId, opts)



Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn&#39;t have any consumption meters installed, the response includes an empty intervals array.  If you don&#39;t have permission to view consumption data, the response code is &#x60;401&#x60;.  Under some conditions, data for a given period may be temporarily unavailable.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
let opts = {
  'startAt': 1448946000, // Number | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
  'endAt': 1449011615 // Number | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
};
apiInstance.consumptionStats(userId, systemId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 
 **startAt** | **Number**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional] 
 **endAt** | **Number**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional] 

### Return type

[**ConsumptionStatsResponse**](ConsumptionStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## energyLifetime

> EnergyLifetimeResponse energyLifetime(userId, systemId, opts)



Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.  The time series includes one entry for each day from the &#x60;start_date&#x60; to the &#x60;end_date&#x60;. There are no gaps in the time series. If the response includes trailing zeroes, such as &#x60;[909, 4970, 0, 0, 0]&#x60;, then no energy has been reported for the last days in the series. You can check the system&#39;s status in the &#x60;meta&#x60; attribute of the response to determine when the system last reported and whether it has communication or production problems.  If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as measured by the meter. This is called the \&quot;merged time series\&quot;. In addition, the response includes the attribute &#x60;meter_start_date&#x60;, to indicate where in the time series the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter &#x60;production&#x3D;all&#x60; to the request.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
let opts = {
  'startDate': Tue Jan 01 11:00:00 AEDT 2013, // Date | The date on which to start the time series. Defaults to the system's operational date.
  'endDate': Sun Jan 06 11:00:00 AEDT 2013, // Date | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
  'production': all // String | When `all`, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored.
};
apiInstance.energyLifetime(userId, systemId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 
 **startDate** | **Date**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional] 
 **endDate** | **Date**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional] 
 **production** | **String**| When &#x60;all&#x60;, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | [optional] 

### Return type

[**EnergyLifetimeResponse**](EnergyLifetimeResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## envoys

> EnvoysResponse envoys(userId, systemId)



Returns a listing of all active Envoys currently deployed on the system.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
apiInstance.envoys(userId, systemId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 

### Return type

[**EnvoysResponse**](EnvoysResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inventory

> InventoryResponse inventory(userId, systemId)



Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \&quot;Active\&quot; does not imply that the device is currently reporting, producing, or measuring energy.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
apiInstance.inventory(userId, systemId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 

### Return type

[**InventoryResponse**](InventoryResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invertersSummaryByEnvoyOrSite

> [InvertersSummaryByEnvoyOrSiteResponse] invertersSummaryByEnvoyOrSite(userId, siteId)



Returns the summary along with the energy produced on the system over its lifetime.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let siteId = 66; // Number | The identifier of the system.
apiInstance.invertersSummaryByEnvoyOrSite(userId, siteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **siteId** | **Number**| The identifier of the system. | 

### Return type

[**[InvertersSummaryByEnvoyOrSiteResponse]**](InvertersSummaryByEnvoyOrSiteResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## monthlyProduction

> MonthlyProductionResponse monthlyProduction(userId, systemId, startDate)



This endpoint is deprecated and will be removed in a future release. Use &#x60;production_meter_readings&#x60; or &#x60;energy_lifetime&#x60; instead.  Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system, measurements come from the meter; otherwise, measurements come from the microinverters.  This endpoint can return a response of Data Temporarily Unavailable.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
let startDate = Fri Jul 01 10:00:00 AEST 2011; // Date | Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a `start_date` of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month.
apiInstance.monthlyProduction(userId, systemId, startDate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 
 **startDate** | **Date**| Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a &#x60;start_date&#x60; of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month. | 

### Return type

[**MonthlyProductionResponse**](MonthlyProductionResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productionMeterReadings

> ProductionMeterReadingsResponse productionMeterReadings(userId, systemId, opts)



Returns the last known \&quot;odometer\&quot; reading of each revenue-grade production meter on the system as of the requested time.  This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. &#x60;read_at&#x60; is the time at which the reading was taken, and is always less than or equal to the requested &#x60;end_at&#x60;. Commonly, the reading will be within 30 minutes of the requested &#x60;end_at&#x60;; however, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when &#x60;end_at&#x60; is close to the current time. Meters that have been retired from a system will show an &#x60;end_at&#x60; that doesn&#39;t change, and that eventually is far away from the current time.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
let opts = {
  'endAt': 1473901755 // Number | 
};
apiInstance.productionMeterReadings(userId, systemId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 
 **endAt** | **Number**|  | [optional] 

### Return type

[**ProductionMeterReadingsResponse**](ProductionMeterReadingsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rgmStats

> RgmStatsResponse rgmStats(userId, systemId, opts)



Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn&#39;t have any revenue-grade meters installed, the response includes an empty intervals array.  Under some conditions, data for a given period may be temporarily unavailable.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
let opts = {
  'startAt': 1381474800, // Number | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
  'endAt': 1381561200 // Number | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.
};
apiInstance.rgmStats(userId, systemId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 
 **startAt** | **Number**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional] 
 **endAt** | **Number**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional] 

### Return type

[**RgmStatsResponse**](RgmStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchSystemId

> SearchSystemIdResponse searchSystemId(userId, serialNum)



Get system ID by envoy serial number.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let serialNum = 23435345345; // String | Serial number of the envoy.
apiInstance.searchSystemId(userId, serialNum, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **serialNum** | **String**| Serial number of the envoy. | 

### Return type

[**SearchSystemIdResponse**](SearchSystemIdResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stats

> StatsResponse stats(userId, systemId, opts)



Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of intervals. Intervals are 5 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.  The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a gap, because the microinverters do not produce at night.  Sometimes a request cannot be processed because the requested dates are invalid for the the system in question. Examples include asking for stats starting at a time that is later than the system&#39;s last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is &#x60;422&#x60; and the response body includes an error reason as well as the parameters used to process the request.  If the system doesn&#39;t have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
let opts = {
  'startAt': 1381496100, // Number | Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the `operational_date`.
  'endAt': 1381497600 // Number | End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval.
};
apiInstance.stats(userId, systemId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 
 **startAt** | **Number**| Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the &#x60;operational_date&#x60;. | [optional] 
 **endAt** | **Number**| End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval. | [optional] 

### Return type

[**StatsResponse**](StatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## summary

> SummaryResponse summary(userId, systemId, opts)



Returns summary information for the specified system.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let systemId = 66; // Number | 
let opts = {
  'summaryDate': Fri Sep 17 10:00:00 AEST 2010 // Date | Start of reporting period. If no `summary_date` is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and `422` status.
};
apiInstance.summary(userId, systemId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **systemId** | **Number**|  | 
 **summaryDate** | **Date**| Start of reporting period. If no &#x60;summary_date&#x60; is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and &#x60;422&#x60; status. | [optional] 

### Return type

[**SummaryResponse**](SummaryResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## systems

> SystemsResponse systems(userId, opts)



Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full list, use the &#x60;next&#x60; attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.

### Example

```javascript
import TheEnlightenSystemsApi from 'the_enlighten_systems_api';
let defaultClient = TheEnlightenSystemsApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnlightenSystemsApi.DefaultApi();
let userId = 4d6a51330a; // String | 
let opts = {
  'next': 4d5467784d5445770a, // String | 
  'limit': 100, // Number | 
  'systemId': 67, // Number | 
  'systemId2': [67], // [Number] | 
  'systemName': Green, // String | 
  'systemName2': ["Green"], // [String] | 
  'status': power, // Status | 
  'status2': ["comm","micro"], // [Status] | 
  'reference': "reference_example", // String | 
  'reference2': ["null"], // [String] | 
  'installer': "installer_example", // String | 
  'installer2': ["null"], // [String] | 
  'connectionType': new TheEnlightenSystemsApi.ConnectionType(), // ConnectionType | 
  'connectionType2': ["ethernet"] // [ConnectionType] | 
};
apiInstance.systems(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **next** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] [default to 100]
 **systemId** | **Number**|  | [optional] 
 **systemId2** | [**[Number]**](Number.md)|  | [optional] 
 **systemName** | **String**|  | [optional] 
 **systemName2** | [**[String]**](String.md)|  | [optional] 
 **status** | [**Status**](.md)|  | [optional] 
 **status2** | [**[Status]**](Status.md)|  | [optional] 
 **reference** | **String**|  | [optional] 
 **reference2** | [**[String]**](String.md)|  | [optional] 
 **installer** | **String**|  | [optional] 
 **installer2** | [**[String]**](String.md)|  | [optional] 
 **connectionType** | [**ConnectionType**](.md)|  | [optional] 
 **connectionType2** | [**[ConnectionType]**](ConnectionType.md)|  | [optional] 

### Return type

[**SystemsResponse**](SystemsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

