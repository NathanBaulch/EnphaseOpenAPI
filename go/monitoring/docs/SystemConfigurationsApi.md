# \SystemConfigurationsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSystemBatterySettings**](SystemConfigurationsApi.md#GetSystemBatterySettings) | **Get** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system
[**GetSystemGridStatusSettings**](SystemConfigurationsApi.md#GetSystemGridStatusSettings) | **Get** /systems/config/{system_id}/grid_status | Returns the current grid status settings of a system
[**GetSystemLoadControlSettings**](SystemConfigurationsApi.md#GetSystemLoadControlSettings) | **Get** /systems/config/{system_id}/load_control | Returns the current load control settings of a system
[**GetSystemStormGuardSettings**](SystemConfigurationsApi.md#GetSystemStormGuardSettings) | **Get** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system



## GetSystemBatterySettings

> GetSystemBatterySettingsResponse GetSystemBatterySettings(ctx, systemId).Execute()

Returns the current battery settings of a system



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/monitoring"
)

func main() {
    systemId := int32(56) // int32 | Unique numeric ID of the system.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SystemConfigurationsApi.GetSystemBatterySettings(context.Background(), systemId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemConfigurationsApi.GetSystemBatterySettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemBatterySettings`: GetSystemBatterySettingsResponse
    fmt.Fprintf(os.Stdout, "Response from `SystemConfigurationsApi.GetSystemBatterySettings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemBatterySettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetSystemBatterySettingsResponse**](GetSystemBatterySettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemGridStatusSettings

> GetSystemGridStatusSettingsResponse GetSystemGridStatusSettings(ctx, systemId).Execute()

Returns the current grid status settings of a system



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/monitoring"
)

func main() {
    systemId := int32(56) // int32 | Unique numeric ID of the system.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SystemConfigurationsApi.GetSystemGridStatusSettings(context.Background(), systemId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemConfigurationsApi.GetSystemGridStatusSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemGridStatusSettings`: GetSystemGridStatusSettingsResponse
    fmt.Fprintf(os.Stdout, "Response from `SystemConfigurationsApi.GetSystemGridStatusSettings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemGridStatusSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetSystemGridStatusSettingsResponse**](GetSystemGridStatusSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemLoadControlSettings

> GetSystemLoadControlSettingsResponse GetSystemLoadControlSettings(ctx, systemId).Execute()

Returns the current load control settings of a system



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/monitoring"
)

func main() {
    systemId := int32(56) // int32 | Unique numeric ID of the system.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SystemConfigurationsApi.GetSystemLoadControlSettings(context.Background(), systemId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemConfigurationsApi.GetSystemLoadControlSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemLoadControlSettings`: GetSystemLoadControlSettingsResponse
    fmt.Fprintf(os.Stdout, "Response from `SystemConfigurationsApi.GetSystemLoadControlSettings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemLoadControlSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetSystemLoadControlSettingsResponse**](GetSystemLoadControlSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemStormGuardSettings

> GetSystemStormGuardSettingsResponse GetSystemStormGuardSettings(ctx, systemId).Execute()

Returns the current storm guard settings of a system



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/monitoring"
)

func main() {
    systemId := int32(56) // int32 | Unique numeric ID of the system.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SystemConfigurationsApi.GetSystemStormGuardSettings(context.Background(), systemId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemConfigurationsApi.GetSystemStormGuardSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemStormGuardSettings`: GetSystemStormGuardSettingsResponse
    fmt.Fprintf(os.Stdout, "Response from `SystemConfigurationsApi.GetSystemStormGuardSettings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemStormGuardSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetSystemStormGuardSettingsResponse**](GetSystemStormGuardSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

