# TheEnphaseMonitoringApi.SystemConfigurationsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemBatterySettings**](SystemConfigurationsApi.md#getSystemBatterySettings) | **GET** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system
[**getSystemGridStatusSettings**](SystemConfigurationsApi.md#getSystemGridStatusSettings) | **GET** /systems/config/{system_id}/grid_status | Returns the current grid status settings of a system
[**getSystemLoadControlSettings**](SystemConfigurationsApi.md#getSystemLoadControlSettings) | **GET** /systems/config/{system_id}/load_control | Returns the current load control settings of a system
[**getSystemStormGuardSettings**](SystemConfigurationsApi.md#getSystemStormGuardSettings) | **GET** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system



## getSystemBatterySettings

> GetSystemBatterySettingsResponse getSystemBatterySettings(systemId)

Returns the current battery settings of a system

Returns the current battery settings of a system.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemConfigurationsApi();
let systemId = 56; // Number | Unique numeric ID of the system.
apiInstance.getSystemBatterySettings(systemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| Unique numeric ID of the system. | 

### Return type

[**GetSystemBatterySettingsResponse**](GetSystemBatterySettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemGridStatusSettings

> GetSystemGridStatusSettingsResponse getSystemGridStatusSettings(systemId)

Returns the current grid status settings of a system

Returns the current grid status settings of a system.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemConfigurationsApi();
let systemId = 56; // Number | Unique numeric ID of the system.
apiInstance.getSystemGridStatusSettings(systemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| Unique numeric ID of the system. | 

### Return type

[**GetSystemGridStatusSettingsResponse**](GetSystemGridStatusSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemLoadControlSettings

> GetSystemLoadControlSettingsResponse getSystemLoadControlSettings(systemId)

Returns the current load control settings of a system

Returns the current load control settings of a system.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemConfigurationsApi();
let systemId = 56; // Number | Unique numeric ID of the system.
apiInstance.getSystemLoadControlSettings(systemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| Unique numeric ID of the system. | 

### Return type

[**GetSystemLoadControlSettingsResponse**](GetSystemLoadControlSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemStormGuardSettings

> GetSystemStormGuardSettingsResponse getSystemStormGuardSettings(systemId)

Returns the current storm guard settings of a system

Returns the current storm guard settings of a system.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemConfigurationsApi();
let systemId = 56; // Number | Unique numeric ID of the system.
apiInstance.getSystemStormGuardSettings(systemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| Unique numeric ID of the system. | 

### Return type

[**GetSystemStormGuardSettingsResponse**](GetSystemStormGuardSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

