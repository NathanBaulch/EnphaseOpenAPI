# TheEnphaseCommissioningApi.EstimateApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivationEstimate**](EstimateApi.md#getActivationEstimate) | **GET** /activations/{activation_id}/estimate | Returns the estimate for this system.
[**updateActivationEstimate**](EstimateApi.md#updateActivationEstimate) | **PUT** /activations/{activation_id}/estimate | Update the estimate for this system.



## getActivationEstimate

> SystemEstimate getActivationEstimate(activationId)

Returns the estimate for this system.

Provides access to production estimates for a system. An estimate includes the annual degradation factor for the system as well as estimated production, in kWh, for each month. By default degrade_factor value is 0.5 and month_estimates value is an empty array.

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

let apiInstance = new TheEnphaseCommissioningApi.EstimateApi();
let activationId = 56; // Number | Activation ID.
apiInstance.getActivationEstimate(activationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Activation ID. | 

### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateActivationEstimate

> SystemEstimate updateActivationEstimate(activationId, opts)

Update the estimate for this system.

Updates the estimate for this system.

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

let apiInstance = new TheEnphaseCommissioningApi.EstimateApi();
let activationId = 56; // Number | Activation ID.
let opts = {
  'params': new TheEnphaseCommissioningApi.UpdateActivationEstimateRequest() // UpdateActivationEstimateRequest | 
};
apiInstance.updateActivationEstimate(activationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Activation ID. | 
 **params** | [**UpdateActivationEstimateRequest**](UpdateActivationEstimateRequest.md)|  | [optional] 

### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

