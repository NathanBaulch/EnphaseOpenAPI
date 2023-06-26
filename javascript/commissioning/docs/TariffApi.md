# TheEnphaseCommissioningApi.TariffApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemTariffSettings**](TariffApi.md#getSystemTariffSettings) | **GET** /systems/config/{system_id}/tariff | Get tariff for a system
[**updateSystemTariffSettings**](TariffApi.md#updateSystemTariffSettings) | **PUT** /systems/config/{system_id}/tariff | Update tariff for a system



## getSystemTariffSettings

> TariffSettings getSystemTariffSettings(systemId)

Get tariff for a system

Get tariff for a system.

### Example

```javascript
import TheEnphaseCommissioningApi from 'the_enphase_commissioning_api';
let defaultClient = TheEnphaseCommissioningApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseCommissioningApi.TariffApi();
let systemId = 56; // Number | Unique numeric ID of the system.
apiInstance.getSystemTariffSettings(systemId).then((data) => {
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

[**TariffSettings**](TariffSettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSystemTariffSettings

> UpdateSystemTariffSettingsResponse updateSystemTariffSettings(systemId, opts)

Update tariff for a system

### Example

```javascript
import TheEnphaseCommissioningApi from 'the_enphase_commissioning_api';
let defaultClient = TheEnphaseCommissioningApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseCommissioningApi.TariffApi();
let systemId = 56; // Number | Unique numeric ID of the system.
let opts = {
  'params': new TheEnphaseCommissioningApi.TariffSettings() // TariffSettings | 
};
apiInstance.updateSystemTariffSettings(systemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| Unique numeric ID of the system. | 
 **params** | **TariffSettings**|  | [optional] 

### Return type

[**UpdateSystemTariffSettingsResponse**](UpdateSystemTariffSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json

