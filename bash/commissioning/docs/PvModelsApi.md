# PvModelsApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPvManufacturerModels**](PvModelsApi.md#getPvManufacturerModels) | **GET** /pv_manufacturers/{pv_manufacturer_id}/pv_models | Returns PV module manufacturers



## getPvManufacturerModels

Returns PV module manufacturers

Returns information about the PV modules known in Enlighten.

### Example

```bash
 getPvManufacturerModels pv_manufacturer_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pvManufacturerId** | **integer** | Pv manufacturer ID. | [default to null]

### Return type

[**GetPvManufacturerModelsResponse**](GetPvManufacturerModelsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

