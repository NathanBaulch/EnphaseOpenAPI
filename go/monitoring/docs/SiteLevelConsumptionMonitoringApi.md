# \SiteLevelConsumptionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSystemBatteryLifetime**](SiteLevelConsumptionMonitoringApi.md#GetSystemBatteryLifetime) | **Get** /systems/{system_id}/battery_lifetime | battery_lifetime
[**GetSystemBatteryTelemetry**](SiteLevelConsumptionMonitoringApi.md#GetSystemBatteryTelemetry) | **Get** /systems/{system_id}/telemetry/battery | Retrieves telemetry for all batteries for a system
[**GetSystemConsumptionLifetime**](SiteLevelConsumptionMonitoringApi.md#GetSystemConsumptionLifetime) | **Get** /systems/{system_id}/consumption_lifetime | consumption_lifetime
[**GetSystemConsumptionMeterTelemetry**](SiteLevelConsumptionMonitoringApi.md#GetSystemConsumptionMeterTelemetry) | **Get** /systems/{system_id}/telemetry/consumption_meter | Retrieves telemetry for all consumption meters for a system
[**GetSystemEnergyExportLifetime**](SiteLevelConsumptionMonitoringApi.md#GetSystemEnergyExportLifetime) | **Get** /systems/{system_id}/energy_export_lifetime | export_lifetime
[**GetSystemEnergyExportTelemetry**](SiteLevelConsumptionMonitoringApi.md#GetSystemEnergyExportTelemetry) | **Get** /systems/{system_id}/energy_export_telemetry | Retrieves energy exported to grid in regular intervals
[**GetSystemEnergyImportLifetime**](SiteLevelConsumptionMonitoringApi.md#GetSystemEnergyImportLifetime) | **Get** /systems/{system_id}/energy_import_lifetime | import_lifetime
[**GetSystemEnergyImportTelemetry**](SiteLevelConsumptionMonitoringApi.md#GetSystemEnergyImportTelemetry) | **Get** /systems/{system_id}/energy_import_telemetry | Retrieves energy imported from grid in regular intervals



## GetSystemBatteryLifetime

> GetSystemBatteryLifetimeResponse GetSystemBatteryLifetime(ctx, systemId).StartDate(startDate).EndDate(endDate).Execute()

battery_lifetime



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/monitoring"
)

func main() {
    systemId := int32(56) // int32 | Unique numeric ID of the system.
    startDate := time.Now() // string | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional)
    endDate := time.Now() // string | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelConsumptionMonitoringApi.GetSystemBatteryLifetime(context.Background(), systemId).StartDate(startDate).EndDate(endDate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelConsumptionMonitoringApi.GetSystemBatteryLifetime``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemBatteryLifetime`: GetSystemBatteryLifetimeResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelConsumptionMonitoringApi.GetSystemBatteryLifetime`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemBatteryLifetimeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** | Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | 
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | 

### Return type

[**GetSystemBatteryLifetimeResponse**](GetSystemBatteryLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemBatteryTelemetry

> GetSystemBatteryTelemetryResponse GetSystemBatteryTelemetry(ctx, systemId).StartAt(startAt).Granularity(granularity).Execute()

Retrieves telemetry for all batteries for a system



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
    startAt := int64(789) // int64 | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
    granularity := openapiclient.TelemetryGranularityEnum("15mins") // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelConsumptionMonitoringApi.GetSystemBatteryTelemetry(context.Background(), systemId).StartAt(startAt).Granularity(granularity).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelConsumptionMonitoringApi.GetSystemBatteryTelemetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemBatteryTelemetry`: GetSystemBatteryTelemetryResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelConsumptionMonitoringApi.GetSystemBatteryTelemetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemBatteryTelemetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startAt** | **int64** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | 
 **granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) | Granularity of the telemetry data. Default is &#39;day&#39;. | 

### Return type

[**GetSystemBatteryTelemetryResponse**](GetSystemBatteryTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemConsumptionLifetime

> GetSystemConsumptionLifetimeResponse GetSystemConsumptionLifetime(ctx, systemId).StartDate(startDate).EndDate(endDate).Execute()

consumption_lifetime



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/monitoring"
)

func main() {
    systemId := int32(56) // int32 | Unique numeric ID of the system.
    startDate := time.Now() // string | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional)
    endDate := time.Now() // string | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelConsumptionMonitoringApi.GetSystemConsumptionLifetime(context.Background(), systemId).StartDate(startDate).EndDate(endDate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelConsumptionMonitoringApi.GetSystemConsumptionLifetime``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemConsumptionLifetime`: GetSystemConsumptionLifetimeResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelConsumptionMonitoringApi.GetSystemConsumptionLifetime`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemConsumptionLifetimeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** | Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | 
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | 

### Return type

[**GetSystemConsumptionLifetimeResponse**](GetSystemConsumptionLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemConsumptionMeterTelemetry

> GetSystemConsumptionMeterTelemetryResponse GetSystemConsumptionMeterTelemetry(ctx, systemId).StartAt(startAt).Granularity(granularity).Execute()

Retrieves telemetry for all consumption meters for a system



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
    startAt := int64(789) // int64 | Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
    granularity := openapiclient.TelemetryGranularityEnum("15mins") // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelConsumptionMonitoringApi.GetSystemConsumptionMeterTelemetry(context.Background(), systemId).StartAt(startAt).Granularity(granularity).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelConsumptionMonitoringApi.GetSystemConsumptionMeterTelemetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemConsumptionMeterTelemetry`: GetSystemConsumptionMeterTelemetryResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelConsumptionMonitoringApi.GetSystemConsumptionMeterTelemetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemConsumptionMeterTelemetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startAt** | **int64** | Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | 
 **granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) | Granularity of the telemetry data. Default is &#39;day&#39;. | 

### Return type

[**GetSystemConsumptionMeterTelemetryResponse**](GetSystemConsumptionMeterTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemEnergyExportLifetime

> GetSystemEnergyExportLifetimeResponse GetSystemEnergyExportLifetime(ctx, systemId).StartDate(startDate).EndDate(endDate).Execute()

export_lifetime



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/monitoring"
)

func main() {
    systemId := int32(56) // int32 | Unique numeric ID of the system.
    startDate := time.Now() // string | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional)
    endDate := time.Now() // string | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportLifetime(context.Background(), systemId).StartDate(startDate).EndDate(endDate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportLifetime``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemEnergyExportLifetime`: GetSystemEnergyExportLifetimeResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportLifetime`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemEnergyExportLifetimeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** | Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | 
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | 

### Return type

[**GetSystemEnergyExportLifetimeResponse**](GetSystemEnergyExportLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemEnergyExportTelemetry

> GetSystemEnergyExportTelemetryResponse GetSystemEnergyExportTelemetry(ctx, systemId).StartAt(startAt).Granularity(granularity).Execute()

Retrieves energy exported to grid in regular intervals



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
    startAt := int64(789) // int64 | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
    granularity := openapiclient.TelemetryGranularityEnum("15mins") // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportTelemetry(context.Background(), systemId).StartAt(startAt).Granularity(granularity).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportTelemetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemEnergyExportTelemetry`: GetSystemEnergyExportTelemetryResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportTelemetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemEnergyExportTelemetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startAt** | **int64** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | 
 **granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) | Granularity of the telemetry data. Default is &#39;day&#39;. | 

### Return type

[**GetSystemEnergyExportTelemetryResponse**](GetSystemEnergyExportTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemEnergyImportLifetime

> GetSystemEnergyImportLifetimeResponse GetSystemEnergyImportLifetime(ctx, systemId).StartDate(startDate).EndDate(endDate).Execute()

import_lifetime



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/NathanBaulch/EnphaseOpenAPI/monitoring"
)

func main() {
    systemId := int32(56) // int32 | Unique numeric ID of the system.
    startDate := time.Now() // string | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional)
    endDate := time.Now() // string | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportLifetime(context.Background(), systemId).StartDate(startDate).EndDate(endDate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportLifetime``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemEnergyImportLifetime`: GetSystemEnergyImportLifetimeResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportLifetime`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemEnergyImportLifetimeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** | Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | 
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | 

### Return type

[**GetSystemEnergyImportLifetimeResponse**](GetSystemEnergyImportLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemEnergyImportTelemetry

> GetSystemEnergyImportTelemetryResponse GetSystemEnergyImportTelemetry(ctx, systemId).StartAt(startAt).Granularity(granularity).Execute()

Retrieves energy imported from grid in regular intervals



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
    startAt := int64(789) // int64 | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional)
    granularity := openapiclient.TelemetryGranularityEnum("15mins") // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportTelemetry(context.Background(), systemId).StartAt(startAt).Granularity(granularity).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportTelemetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemEnergyImportTelemetry`: GetSystemEnergyImportTelemetryResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportTelemetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemEnergyImportTelemetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startAt** | **int64** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | 
 **granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) | Granularity of the telemetry data. Default is &#39;day&#39;. | 

### Return type

[**GetSystemEnergyImportTelemetryResponse**](GetSystemEnergyImportTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

