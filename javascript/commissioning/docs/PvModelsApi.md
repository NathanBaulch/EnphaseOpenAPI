# TheEnphaseCommissioningApi.PvModelsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPvManufacturerModels**](PvModelsApi.md#getPvManufacturerModels) | **GET** /pv_manufacturers/{pv_manufacturer_id}/pv_models | Returns PV module manufacturers



## getPvManufacturerModels

> GetPvManufacturerModelsResponse getPvManufacturerModels(pvManufacturerId)

Returns PV module manufacturers

Returns information about the PV modules known in Enlighten.

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

let apiInstance = new TheEnphaseCommissioningApi.PvModelsApi();
let pvManufacturerId = 56; // Number | Pv manufacturer ID.
apiInstance.getPvManufacturerModels(pvManufacturerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pvManufacturerId** | **Number**| Pv manufacturer ID. | 

### Return type

[**GetPvManufacturerModelsResponse**](GetPvManufacturerModelsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

