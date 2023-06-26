# TheEnphaseCommissioningApi.MetersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemMeter**](MetersApi.md#getSystemMeter) | **GET** /systems/{system_id}/meters/{serial_number} | Returns the requested meter detail.
[**setActivationMeterStatus**](MetersApi.md#setActivationMeterStatus) | **POST** /activations/{activation_id}/meters/{serial_number}/meter_control | Enable or Disable the meters.
[**updateSystemMeter**](MetersApi.md#updateSystemMeter) | **PUT** /systems/{system_id}/meters/{serial_number} | Update the operational date of a meter by serial number.



## getSystemMeter

> GetSystemMeterResponse getSystemMeter(systemId, serialNumber)

Returns the requested meter detail.

Returns the requested meter by serial number. You must have access to the requested system and meter; otherwise a 401 is returned.

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

let apiInstance = new TheEnphaseCommissioningApi.MetersApi();
let systemId = 56; // Number | System ID.
let serialNumber = "serialNumber_example"; // String | Meter serial number.
apiInstance.getSystemMeter(systemId, serialNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| System ID. | 
 **serialNumber** | **String**| Meter serial number. | 

### Return type

[**GetSystemMeterResponse**](GetSystemMeterResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setActivationMeterStatus

> SetActivationMeterStatusResponse setActivationMeterStatus(activationId, serialNumber, opts)

Enable or Disable the meters.

Enable or Disable the meters. You must have access to the requested system and meter; otherwise a 401 is returned.

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

let apiInstance = new TheEnphaseCommissioningApi.MetersApi();
let activationId = 56; // Number | Activation ID.
let serialNumber = "serialNumber_example"; // String | Meter serial number.
let opts = {
  'params': new TheEnphaseCommissioningApi.SetActivationMeterStatusRequest() // SetActivationMeterStatusRequest | 
};
apiInstance.setActivationMeterStatus(activationId, serialNumber, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Activation ID. | 
 **serialNumber** | **String**| Meter serial number. | 
 **params** | [**SetActivationMeterStatusRequest**](SetActivationMeterStatusRequest.md)|  | [optional] 

### Return type

[**SetActivationMeterStatusResponse**](SetActivationMeterStatusResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSystemMeter

> UpdateSystemMeterResponse updateSystemMeter(systemId, serialNumber, opts)

Update the operational date of a meter by serial number.

Update the operational date of a meter. You must have access to the requested system and meter; otherwise a 401 is returned.

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

let apiInstance = new TheEnphaseCommissioningApi.MetersApi();
let systemId = 56; // Number | System ID.
let serialNumber = "serialNumber_example"; // String | Meter serial number.
let opts = {
  'operationalDate': new Date("2013-10-20") // Date | Operational date in the following format YYYY-MM-DD.
};
apiInstance.updateSystemMeter(systemId, serialNumber, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| System ID. | 
 **serialNumber** | **String**| Meter serial number. | 
 **operationalDate** | **Date**| Operational date in the following format YYYY-MM-DD. | [optional] 

### Return type

[**UpdateSystemMeterResponse**](UpdateSystemMeterResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

