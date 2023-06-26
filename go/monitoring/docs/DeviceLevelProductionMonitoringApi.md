# \DeviceLevelProductionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSystemAcbDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#GetSystemAcbDeviceTelemetry) | **Get** /systems/{system_id}/devices/acbs/{serial_no}/telemetry | Retrieves telemetry for single ACB
[**GetSystemEnchargeDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#GetSystemEnchargeDeviceTelemetry) | **Get** /systems/{system_id}/devices/encharges/{serial_no}/telemetry | Retrieves telemetry for single Encharge
[**GetSystemMicroDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#GetSystemMicroDeviceTelemetry) | **Get** /systems/{system_id}/devices/micros/{serial_no}/telemetry | Retrieves telemetry for single micro/pcu



## GetSystemAcbDeviceTelemetry

> BatteryDeviceTelemetry GetSystemAcbDeviceTelemetry(ctx, systemId, serialNo).StartAt(startAt).Granularity(granularity).Execute()

Retrieves telemetry for single ACB



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
    serialNo := "serialNo_example" // string | Serial number of the acb.
    startAt := int64(789) // int64 | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
    granularity := openapiclient.TelemetryGranularityEnum("15mins") // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DeviceLevelProductionMonitoringApi.GetSystemAcbDeviceTelemetry(context.Background(), systemId, serialNo).StartAt(startAt).Granularity(granularity).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DeviceLevelProductionMonitoringApi.GetSystemAcbDeviceTelemetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemAcbDeviceTelemetry`: BatteryDeviceTelemetry
    fmt.Fprintf(os.Stdout, "Response from `DeviceLevelProductionMonitoringApi.GetSystemAcbDeviceTelemetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 
**serialNo** | **string** | Serial number of the acb. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemAcbDeviceTelemetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **startAt** | **int64** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | 
 **granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) | Granularity of the telemetry data. Default is &#39;day&#39;. | 

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemEnchargeDeviceTelemetry

> BatteryDeviceTelemetry GetSystemEnchargeDeviceTelemetry(ctx, systemId, serialNo).StartAt(startAt).Granularity(granularity).Execute()

Retrieves telemetry for single Encharge



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
    serialNo := "serialNo_example" // string | Serial number of the Encharge.
    startAt := int64(789) // int64 | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
    granularity := openapiclient.TelemetryGranularityEnum("15mins") // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DeviceLevelProductionMonitoringApi.GetSystemEnchargeDeviceTelemetry(context.Background(), systemId, serialNo).StartAt(startAt).Granularity(granularity).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DeviceLevelProductionMonitoringApi.GetSystemEnchargeDeviceTelemetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemEnchargeDeviceTelemetry`: BatteryDeviceTelemetry
    fmt.Fprintf(os.Stdout, "Response from `DeviceLevelProductionMonitoringApi.GetSystemEnchargeDeviceTelemetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 
**serialNo** | **string** | Serial number of the Encharge. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemEnchargeDeviceTelemetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **startAt** | **int64** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | 
 **granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) | Granularity of the telemetry data. Default is &#39;day&#39;. | 

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemMicroDeviceTelemetry

> GetSystemMicroDeviceTelemetryResponse GetSystemMicroDeviceTelemetry(ctx, systemId, serialNo).StartAt(startAt).Granularity(granularity).Execute()

Retrieves telemetry for single micro/pcu



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
    serialNo := "serialNo_example" // string | Serial number of the individual solar Microinverter.
    startAt := int64(789) // int64 | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
    granularity := openapiclient.TelemetryGranularityEnum("15mins") // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DeviceLevelProductionMonitoringApi.GetSystemMicroDeviceTelemetry(context.Background(), systemId, serialNo).StartAt(startAt).Granularity(granularity).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DeviceLevelProductionMonitoringApi.GetSystemMicroDeviceTelemetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemMicroDeviceTelemetry`: GetSystemMicroDeviceTelemetryResponse
    fmt.Fprintf(os.Stdout, "Response from `DeviceLevelProductionMonitoringApi.GetSystemMicroDeviceTelemetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 
**serialNo** | **string** | Serial number of the individual solar Microinverter. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemMicroDeviceTelemetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **startAt** | **int64** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | 
 **granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) | Granularity of the telemetry data. Default is &#39;day&#39;. | 

### Return type

[**GetSystemMicroDeviceTelemetryResponse**](GetSystemMicroDeviceTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

