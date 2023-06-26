# \PvModelsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPvManufacturerModels**](PvModelsApi.md#GetPvManufacturerModels) | **Get** /pv_manufacturers/{pv_manufacturer_id}/pv_models | Returns PV module manufacturers



## GetPvManufacturerModels

> GetPvManufacturerModelsResponse GetPvManufacturerModels(ctx, pvManufacturerId).Execute()

Returns PV module manufacturers



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
    pvManufacturerId := int32(56) // int32 | Pv manufacturer ID.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PvModelsApi.GetPvManufacturerModels(context.Background(), pvManufacturerId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PvModelsApi.GetPvManufacturerModels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPvManufacturerModels`: GetPvManufacturerModelsResponse
    fmt.Fprintf(os.Stdout, "Response from `PvModelsApi.GetPvManufacturerModels`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pvManufacturerId** | **int32** | Pv manufacturer ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPvManufacturerModelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetPvManufacturerModelsResponse**](GetPvManufacturerModelsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

