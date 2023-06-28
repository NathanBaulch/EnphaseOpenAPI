# TheEnphaseMonitoringApi.StreamingApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**streamSystemLiveData**](StreamingApi.md#streamSystemLiveData) | **GET** /systems/{system_id}/live_data | Site Level Live Status



## streamSystemLiveData

> StreamSystemLiveDataResponse streamSystemLiveData(systemId, opts)

Site Level Live Status

API users can get real time live status data on demand for a given system. User can retrieve real time power for PV Production, Grid Import/Export, Consumption, Battery Charge/Discharge, and Generator. Users can also retrieve Grid Status, Battery Mode, and Battery State of Charge. User will receive the stream for a duration of 30 seconds by default and can configure the time in seconds by passing &#39;duration&#39; as a header parameter with a minimum value of 30 and maximum value of 300.

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

let apiInstance = new TheEnphaseMonitoringApi.StreamingApi();
let systemId = 56; // Number | Unique numeric ID of the system.
let opts = {
  'duration': 56 // Number | Duration of the stream in seconds. Default=30, Min=30, Max=300, e.g=30.
};
apiInstance.streamSystemLiveData(systemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| Unique numeric ID of the system. | 
 **duration** | **Number**| Duration of the stream in seconds. Default&#x3D;30, Min&#x3D;30, Max&#x3D;300, e.g&#x3D;30. | [optional] 

### Return type

[**StreamSystemLiveDataResponse**](StreamSystemLiveDataResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

