# EstimateApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivationEstimate**](EstimateApi.md#getActivationEstimate) | **GET** /activations/{activation_id}/estimate | Returns the estimate for this system.
[**updateActivationEstimate**](EstimateApi.md#updateActivationEstimate) | **PUT** /activations/{activation_id}/estimate | Update the estimate for this system.



## getActivationEstimate

Returns the estimate for this system.

Provides access to production estimates for a system. An estimate includes the annual degradation factor for the system as well as estimated production, in kWh, for each month. By default degrade_factor value is 0.5 and month_estimates value is an empty array.

### Example

```bash
 getActivationEstimate activation_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **integer** | Activation ID. | [default to null]

### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateActivationEstimate

Update the estimate for this system.

Updates the estimate for this system.

### Example

```bash
 updateActivationEstimate activation_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **integer** | Activation ID. | [default to null]
 **params** | [**UpdateActivationEstimateRequest**](UpdateActivationEstimateRequest.md) |  | [optional]

### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

