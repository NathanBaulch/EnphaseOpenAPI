# TheEnphaseMonitoringApi.DeviceLevelProductionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemAcbDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getSystemAcbDeviceTelemetry) | **GET** /systems/{system_id}/devices/acbs/{serial_no}/telemetry | Retrieves telemetry for single ACB
[**getSystemEnchargeDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getSystemEnchargeDeviceTelemetry) | **GET** /systems/{system_id}/devices/encharges/{serial_no}/telemetry | Retrieves telemetry for single Encharge
[**getSystemMicroDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getSystemMicroDeviceTelemetry) | **GET** /systems/{system_id}/devices/micros/{serial_no}/telemetry | Retrieves telemetry for single micro/pcu



## getSystemAcbDeviceTelemetry

> BatteryDeviceTelemetry getSystemAcbDeviceTelemetry(systemId, serialNo, opts)

Retrieves telemetry for single ACB

Retrieves telemetry for single ACB. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

```javascript
import TheEnphaseMonitoringApi from 'the_enphase_monitoring_api';
let defaultClient = TheEnphaseMonitoringApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseMonitoringApi.DeviceLevelProductionMonitoringApi();
let systemId = 56; // Number | Unique numeric ID of the system.
let serialNo = "serialNo_example"; // String | Serial number of the acb.
let opts = {
  'startAt': 789, // Number | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
  'granularity': new TheEnphaseMonitoringApi.TelemetryGranularityEnum() // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
};
apiInstance.getSystemAcbDeviceTelemetry(systemId, serialNo, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| Unique numeric ID of the system. | 
 **serialNo** | **String**| Serial number of the acb. | 
 **startAt** | **Number**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] 
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] 

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemEnchargeDeviceTelemetry

> BatteryDeviceTelemetry getSystemEnchargeDeviceTelemetry(systemId, serialNo, opts)

Retrieves telemetry for single Encharge

Retrieves telemetry for single Encharge. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

```javascript
import TheEnphaseMonitoringApi from 'the_enphase_monitoring_api';
let defaultClient = TheEnphaseMonitoringApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseMonitoringApi.DeviceLevelProductionMonitoringApi();
let systemId = 56; // Number | Unique numeric ID of the system.
let serialNo = "serialNo_example"; // String | Serial number of the Encharge.
let opts = {
  'startAt': 789, // Number | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
  'granularity': new TheEnphaseMonitoringApi.TelemetryGranularityEnum() // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
};
apiInstance.getSystemEnchargeDeviceTelemetry(systemId, serialNo, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| Unique numeric ID of the system. | 
 **serialNo** | **String**| Serial number of the Encharge. | 
 **startAt** | **Number**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] 
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] 

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemMicroDeviceTelemetry

> GetSystemMicroDeviceTelemetryResponse getSystemMicroDeviceTelemetry(systemId, serialNo, opts)

Retrieves telemetry for single micro/pcu

Retrieves telemetry for single micro/pcu. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then midnight of the system&#39;s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

```javascript
import TheEnphaseMonitoringApi from 'the_enphase_monitoring_api';
let defaultClient = TheEnphaseMonitoringApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseMonitoringApi.DeviceLevelProductionMonitoringApi();
let systemId = 56; // Number | Unique numeric ID of the system.
let serialNo = "serialNo_example"; // String | Serial number of the individual solar Microinverter.
let opts = {
  'startAt': 789, // Number | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
  'granularity': new TheEnphaseMonitoringApi.TelemetryGranularityEnum() // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.
};
apiInstance.getSystemMicroDeviceTelemetry(systemId, serialNo, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| Unique numeric ID of the system. | 
 **serialNo** | **String**| Serial number of the individual solar Microinverter. | 
 **startAt** | **Number**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] 
 **granularity** | [**TelemetryGranularityEnum**](.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] 

### Return type

[**GetSystemMicroDeviceTelemetryResponse**](GetSystemMicroDeviceTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

