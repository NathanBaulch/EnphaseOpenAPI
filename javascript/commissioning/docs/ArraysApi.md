# TheEnphaseCommissioningApi.ArraysApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSystemArray**](ArraysApi.md#deleteSystemArray) | **DELETE** /partner/systems/{system_id}/arrays/{array_id} | Delete an array by ID
[**getSystemArray**](ArraysApi.md#getSystemArray) | **GET** /partner/systems/{system_id}/arrays/{array_id} | Fetch array details by ID
[**getSystemArrays**](ArraysApi.md#getSystemArrays) | **GET** /partner/systems/{system_id}/arrays | Fetch particular system Array details
[**updateSystemArray**](ArraysApi.md#updateSystemArray) | **PUT** /partner/systems/{system_id}/arrays/{array_id} | Update particular system array details
[**updateSystemArrays**](ArraysApi.md#updateSystemArrays) | **PUT** /partner/systems/{system_id}/arrays | Update all arrays for system



## deleteSystemArray

> DeleteSystemArrayResponse deleteSystemArray(systemId, arrayId)

Delete an array by ID

Delete an array by ID.

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

let apiInstance = new TheEnphaseCommissioningApi.ArraysApi();
let systemId = 56; // Number | System ID.
let arrayId = 56; // Number | Array ID.
apiInstance.deleteSystemArray(systemId, arrayId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| System ID. | 
 **arrayId** | **Number**| Array ID. | 

### Return type

[**DeleteSystemArrayResponse**](DeleteSystemArrayResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemArray

> ModelArray getSystemArray(systemId, arrayId)

Fetch array details by ID

Fetch array details by ID.

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

let apiInstance = new TheEnphaseCommissioningApi.ArraysApi();
let systemId = 56; // Number | System ID.
let arrayId = 56; // Number | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Fetch particular system Array details' endpoint.
apiInstance.getSystemArray(systemId, arrayId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| System ID. | 
 **arrayId** | **Number**| Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Fetch particular system Array details&#39; endpoint. | 

### Return type

[**ModelArray**](ModelArray.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemArrays

> Arrays getSystemArrays(systemId)

Fetch particular system Array details

Fetch particular system Array details.

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

let apiInstance = new TheEnphaseCommissioningApi.ArraysApi();
let systemId = 56; // Number | System ID.
apiInstance.getSystemArrays(systemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| System ID. | 

### Return type

[**Arrays**](Arrays.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSystemArray

> ModelArray updateSystemArray(systemId, arrayId, opts)

Update particular system array details

Update particular system array details. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall in arrays, the top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

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

let apiInstance = new TheEnphaseCommissioningApi.ArraysApi();
let systemId = 56; // Number | System ID.
let arrayId = 56; // Number | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Update all Arrays' endpoint.
let opts = {
  'params': new TheEnphaseCommissioningApi.ArrayParams() // ArrayParams | 
};
apiInstance.updateSystemArray(systemId, arrayId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| System ID. | 
 **arrayId** | **Number**| Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Update all Arrays&#39; endpoint. | 
 **params** | **ArrayParams**|  | [optional] 

### Return type

[**ModelArray**](ModelArray.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json


## updateSystemArrays

> Arrays updateSystemArrays(systemId, opts)

Update all arrays for system

Update all arrays for system. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall the arrays top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

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

let apiInstance = new TheEnphaseCommissioningApi.ArraysApi();
let systemId = 56; // Number | System ID.
let opts = {
  'params': new TheEnphaseCommissioningApi.UpdateSystemArraysRequest() // UpdateSystemArraysRequest | 
};
apiInstance.updateSystemArrays(systemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **Number**| System ID. | 
 **params** | [**UpdateSystemArraysRequest**](UpdateSystemArraysRequest.md)|  | [optional] 

### Return type

[**Arrays**](Arrays.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json

