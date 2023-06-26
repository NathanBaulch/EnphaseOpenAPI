# \MetersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSystemMeter**](MetersApi.md#GetSystemMeter) | **Get** /systems/{system_id}/meters/{serial_number} | Returns the requested meter detail.
[**SetActivationMeterStatus**](MetersApi.md#SetActivationMeterStatus) | **Post** /activations/{activation_id}/meters/{serial_number}/meter_control | Enable or Disable the meters.
[**UpdateSystemMeter**](MetersApi.md#UpdateSystemMeter) | **Put** /systems/{system_id}/meters/{serial_number} | Update the operational date of a meter by serial number.



## GetSystemMeter

> GetSystemMeterResponse GetSystemMeter(ctx, systemId, serialNumber).Execute()

Returns the requested meter detail.



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
    systemId := int32(56) // int32 | System ID.
    serialNumber := "serialNumber_example" // string | Meter serial number.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.MetersApi.GetSystemMeter(context.Background(), systemId, serialNumber).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MetersApi.GetSystemMeter``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemMeter`: GetSystemMeterResponse
    fmt.Fprintf(os.Stdout, "Response from `MetersApi.GetSystemMeter`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | System ID. | 
**serialNumber** | **string** | Meter serial number. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemMeterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**GetSystemMeterResponse**](GetSystemMeterResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetActivationMeterStatus

> SetActivationMeterStatusResponse SetActivationMeterStatus(ctx, activationId, serialNumber).Params(params).Execute()

Enable or Disable the meters.



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
    serialNumber := "serialNumber_example" // string | Meter serial number.
    params := *openapiclient.NewSetActivationMeterStatusRequest() // SetActivationMeterStatusRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.MetersApi.SetActivationMeterStatus(context.Background(), activationId, serialNumber).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MetersApi.SetActivationMeterStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetActivationMeterStatus`: SetActivationMeterStatusResponse
    fmt.Fprintf(os.Stdout, "Response from `MetersApi.SetActivationMeterStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Activation ID. | 
**serialNumber** | **string** | Meter serial number. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetActivationMeterStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **params** | [**SetActivationMeterStatusRequest**](SetActivationMeterStatusRequest.md) |  | 

### Return type

[**SetActivationMeterStatusResponse**](SetActivationMeterStatusResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSystemMeter

> UpdateSystemMeterResponse UpdateSystemMeter(ctx, systemId, serialNumber).OperationalDate(operationalDate).Execute()

Update the operational date of a meter by serial number.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/commissioning"
)

func main() {
    systemId := int32(56) // int32 | System ID.
    serialNumber := "serialNumber_example" // string | Meter serial number.
    operationalDate := time.Now() // string | Operational date in the following format YYYY-MM-DD. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.MetersApi.UpdateSystemMeter(context.Background(), systemId, serialNumber).OperationalDate(operationalDate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MetersApi.UpdateSystemMeter``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSystemMeter`: UpdateSystemMeterResponse
    fmt.Fprintf(os.Stdout, "Response from `MetersApi.UpdateSystemMeter`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | System ID. | 
**serialNumber** | **string** | Meter serial number. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSystemMeterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **operationalDate** | **string** | Operational date in the following format YYYY-MM-DD. | 

### Return type

[**UpdateSystemMeterResponse**](UpdateSystemMeterResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

