# \EstimateApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetActivationEstimate**](EstimateApi.md#GetActivationEstimate) | **Get** /activations/{activation_id}/estimate | Returns the estimate for this system.
[**UpdateActivationEstimate**](EstimateApi.md#UpdateActivationEstimate) | **Put** /activations/{activation_id}/estimate | Update the estimate for this system.



## GetActivationEstimate

> SystemEstimate GetActivationEstimate(ctx, activationId).Execute()

Returns the estimate for this system.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/commissioning"
)

func main() {
    activationId := int32(56) // int32 | Activation ID.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EstimateApi.GetActivationEstimate(context.Background(), activationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EstimateApi.GetActivationEstimate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivationEstimate`: SystemEstimate
    fmt.Fprintf(os.Stdout, "Response from `EstimateApi.GetActivationEstimate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Activation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivationEstimateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateActivationEstimate

> SystemEstimate UpdateActivationEstimate(ctx, activationId).Params(params).Execute()

Update the estimate for this system.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/commissioning"
)

func main() {
    activationId := int32(56) // int32 | Activation ID.
    params := *openapiclient.NewUpdateActivationEstimateRequest("DegradeFactor_example", []string{"MonthEstimates_example"}) // UpdateActivationEstimateRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EstimateApi.UpdateActivationEstimate(context.Background(), activationId).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EstimateApi.UpdateActivationEstimate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateActivationEstimate`: SystemEstimate
    fmt.Fprintf(os.Stdout, "Response from `EstimateApi.UpdateActivationEstimate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Activation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateActivationEstimateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **params** | [**UpdateActivationEstimateRequest**](UpdateActivationEstimateRequest.md) |  | 

### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

