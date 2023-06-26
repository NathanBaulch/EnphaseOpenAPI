# \TariffApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSystemTariffSettings**](TariffApi.md#GetSystemTariffSettings) | **Get** /systems/config/{system_id}/tariff | Get tariff for a system
[**UpdateSystemTariffSettings**](TariffApi.md#UpdateSystemTariffSettings) | **Put** /systems/config/{system_id}/tariff | Update tariff for a system



## GetSystemTariffSettings

> TariffSettings GetSystemTariffSettings(ctx, systemId).Execute()

Get tariff for a system



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
    systemId := int32(56) // int32 | Unique numeric ID of the system.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TariffApi.GetSystemTariffSettings(context.Background(), systemId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TariffApi.GetSystemTariffSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemTariffSettings`: TariffSettings
    fmt.Fprintf(os.Stdout, "Response from `TariffApi.GetSystemTariffSettings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemTariffSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TariffSettings**](TariffSettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSystemTariffSettings

> UpdateSystemTariffSettingsResponse UpdateSystemTariffSettings(ctx, systemId).Params(params).Execute()

Update tariff for a system

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
    systemId := int32(56) // int32 | Unique numeric ID of the system.
    params := TariffSettings(987) // TariffSettings |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TariffApi.UpdateSystemTariffSettings(context.Background(), systemId).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TariffApi.UpdateSystemTariffSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSystemTariffSettings`: UpdateSystemTariffSettingsResponse
    fmt.Fprintf(os.Stdout, "Response from `TariffApi.UpdateSystemTariffSettings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSystemTariffSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **params** | **TariffSettings** |  | 

### Return type

[**UpdateSystemTariffSettingsResponse**](UpdateSystemTariffSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

