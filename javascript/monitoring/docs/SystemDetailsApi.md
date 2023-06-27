# TheEnphaseMonitoringApi.SystemDetailsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvertersSummaryByEnvoyOrSite**](SystemDetailsApi.md#getInvertersSummaryByEnvoyOrSite) | **GET** /systems/inverters_summary_by_envoy_or_site | inverters_summary_by_envoy_or_site
[**getSystem**](SystemDetailsApi.md#getSystem) | **GET** /systems/{system_id} | Retrieves a System by ID
[**getSystemDevices**](SystemDetailsApi.md#getSystemDevices) | **GET** /systems/{system_id}/devices | Retrieves devices for a given system
[**getSystemSummary**](SystemDetailsApi.md#getSystemSummary) | **GET** /systems/{system_id}/summary | Retrieves a system summary
[**getSystems**](SystemDetailsApi.md#getSystems) | **GET** /systems | Fetch systems
[**retrieveSystemId**](SystemDetailsApi.md#retrieveSystemId) | **GET** /systems/retrieve_system_id | Retrieve system for a given envoy serial number
[**searchSystems**](SystemDetailsApi.md#searchSystems) | **POST** /systems/search | Search and filter systems



## getInvertersSummaryByEnvoyOrSite

> [GetInvertersSummaryByEnvoyOrSiteResponseInner] getInvertersSummaryByEnvoyOrSite(opts)

inverters_summary_by_envoy_or_site

Returns the microinverters summary based on the specified active envoy serial number or system.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemDetailsApi();
let opts = {
  'siteId': 56, // Number | Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site.
  'envoySerialNumber': "envoySerialNumber_example" // String | Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response.
};
apiInstance.getInvertersSummaryByEnvoyOrSite(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **Number**| Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site. | [optional] 
 **envoySerialNumber** | **String**| Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response. | [optional] 

### Return type

[**[GetInvertersSummaryByEnvoyOrSiteResponseInner]**](GetInvertersSummaryByEnvoyOrSiteResponseInner.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystem

> SystemDetails getSystem(systemId)

Retrieves a System by ID

Retrieves a system by ID.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemDetailsApi();
let systemId = 56; // Number | Unique numeric ID of the system.
apiInstance.getSystem(systemId).then((data) => {
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

[**SystemDetails**](SystemDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemDevices

> GetSystemDevicesResponse getSystemDevices(systemId)

Retrieves devices for a given system

Retrieves devices for a given system. Only devices that are active will be returned in the response.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemDetailsApi();
let systemId = 56; // Number | Unique numeric ID of the system.
apiInstance.getSystemDevices(systemId).then((data) => {
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

[**GetSystemDevicesResponse**](GetSystemDevicesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemSummary

> GetSystemSummaryResponse getSystemSummary(systemId)

Retrieves a system summary

Returns system summary based on the specified system ID.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemDetailsApi();
let systemId = 56; // Number | Unique numeric ID of the system.
apiInstance.getSystemSummary(systemId).then((data) => {
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

[**GetSystemSummaryResponse**](GetSystemSummaryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystems

> GetSystemsResponse getSystems(opts)

Fetch systems

Returns a list of systems for which the user can make API requests. By default, systems are returned in batches of 10. The maximum size is 100.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemDetailsApi();
let opts = {
  'page': 56, // Number | Page to be returned. Default=1, Min=1. For example, if page is set to 2, 2nd page is returned.
  'size': 56, // Number | Maximum number of records shown per page. Default=10, Min=1, Max=100.  For example, if set to 5, 5 records are shown per page.
  'sortBy': new TheEnphaseMonitoringApi.SystemSortByEnum() // SystemSortByEnum | Returns list of systems sorted by <sort_by> field. To get ASC order sorted list, user sort_by = <key>. To get DESC order sorted list, use sort_by = (-)<key>. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID.
};
apiInstance.getSystems(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page to be returned. Default&#x3D;1, Min&#x3D;1. For example, if page is set to 2, 2nd page is returned. | [optional] 
 **size** | **Number**| Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100.  For example, if set to 5, 5 records are shown per page. | [optional] 
 **sortBy** | [**SystemSortByEnum**](.md)| Returns list of systems sorted by &lt;sort_by&gt; field. To get ASC order sorted list, user sort_by &#x3D; &lt;key&gt;. To get DESC order sorted list, use sort_by &#x3D; (-)&lt;key&gt;. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID. | [optional] 

### Return type

[**GetSystemsResponse**](GetSystemsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveSystemId

> RetrieveSystemIdResponse retrieveSystemId(serialNum)

Retrieve system for a given envoy serial number

Get system ID by passing envoy serial number. If the serial number of a retired envoy is passed in the request param, a 404 Not Found response will be returned.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemDetailsApi();
let serialNum = "serialNum_example"; // String | Envoy serial number.
apiInstance.retrieveSystemId(serialNum).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNum** | **String**| Envoy serial number. | 

### Return type

[**RetrieveSystemIdResponse**](RetrieveSystemIdResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchSystems

> SearchSystemsResponse searchSystems(opts)

Search and filter systems

Search and filter systems. Provide only valid values in request parameters. Empty and invalid values will be ignored. Invalid keys will be rejected.

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

let apiInstance = new TheEnphaseMonitoringApi.SystemDetailsApi();
let opts = {
  'page': 56, // Number | Page to be returned. Default=1, Min=1, e.g=2.
  'size': 56, // Number | Maximum number of records shown per page. Default=10, Min=1, Max=1000, e.g=5.
  'params': new TheEnphaseMonitoringApi.SearchSystemsRequest() // SearchSystemsRequest | 
};
apiInstance.searchSystems(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page to be returned. Default&#x3D;1, Min&#x3D;1, e.g&#x3D;2. | [optional] 
 **size** | **Number**| Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;1000, e.g&#x3D;5. | [optional] 
 **params** | [**SearchSystemsRequest**](SearchSystemsRequest.md)|  | [optional] 

### Return type

[**SearchSystemsResponse**](SearchSystemsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

