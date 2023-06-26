# \SiteLevelProductionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSystemEnergyLifetime**](SiteLevelProductionMonitoringApi.md#GetSystemEnergyLifetime) | **Get** /systems/{system_id}/energy_lifetime | energy_lifetime
[**GetSystemProductionMeterReadings**](SiteLevelProductionMonitoringApi.md#GetSystemProductionMeterReadings) | **Get** /systems/{system_id}/production_meter_readings | production_meter_readings
[**GetSystemProductionMeterTelemetry**](SiteLevelProductionMonitoringApi.md#GetSystemProductionMeterTelemetry) | **Get** /systems/{system_id}/telemetry/production_meter | Retrieves telemetry for all production meters for a system
[**GetSystemProductionMicroTelemetry**](SiteLevelProductionMonitoringApi.md#GetSystemProductionMicroTelemetry) | **Get** /systems/{system_id}/telemetry/production_micro | Retrieves telemetry for all production micros for a system
[**GetSystemRgmStats**](SiteLevelProductionMonitoringApi.md#GetSystemRgmStats) | **Get** /systems/{system_id}/rgm_stats | rgm_stats



## GetSystemEnergyLifetime

> GetSystemEnergyLifetimeResponse GetSystemEnergyLifetime(ctx, systemId).StartDate(startDate).EndDate(endDate).Production(production).Execute()

energy_lifetime



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
    startDate := time.Now() // string | Start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional)
    endDate := time.Now() // string | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional)
    production := openapiclient.SystemEnergyLifetimeProductionEnum("all") // SystemEnergyLifetimeProductionEnum | When 'all', returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelProductionMonitoringApi.GetSystemEnergyLifetime(context.Background(), systemId).StartDate(startDate).EndDate(endDate).Production(production).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelProductionMonitoringApi.GetSystemEnergyLifetime``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemEnergyLifetime`: GetSystemEnergyLifetimeResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelProductionMonitoringApi.GetSystemEnergyLifetime`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemEnergyLifetimeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** | Start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | 
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | 
 **production** | [**SystemEnergyLifetimeProductionEnum**](SystemEnergyLifetimeProductionEnum.md) | When &#39;all&#39;, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | 

### Return type

[**GetSystemEnergyLifetimeResponse**](GetSystemEnergyLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemProductionMeterReadings

> GetSystemProductionMeterReadingsResponse GetSystemProductionMeterReadings(ctx, systemId).EndAt(endAt).Execute()

production_meter_readings



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
    endAt := int64(789) // int64 | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelProductionMonitoringApi.GetSystemProductionMeterReadings(context.Background(), systemId).EndAt(endAt).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelProductionMonitoringApi.GetSystemProductionMeterReadings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemProductionMeterReadings`: GetSystemProductionMeterReadingsResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelProductionMonitoringApi.GetSystemProductionMeterReadings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemProductionMeterReadingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **endAt** | **int64** | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | 

### Return type

[**GetSystemProductionMeterReadingsResponse**](GetSystemProductionMeterReadingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemProductionMeterTelemetry

> GetSystemProductionMeterTelemetryResponse GetSystemProductionMeterTelemetry(ctx, systemId).StartAt(startAt).Granularity(granularity).Execute()

Retrieves telemetry for all production meters for a system



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
    resp, r, err := apiClient.SiteLevelProductionMonitoringApi.GetSystemProductionMeterTelemetry(context.Background(), systemId).StartAt(startAt).Granularity(granularity).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelProductionMonitoringApi.GetSystemProductionMeterTelemetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemProductionMeterTelemetry`: GetSystemProductionMeterTelemetryResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelProductionMonitoringApi.GetSystemProductionMeterTelemetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemProductionMeterTelemetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startAt** | **int64** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | 
 **granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) | Granularity of the telemetry data. Default is &#39;day&#39;. | 

### Return type

[**GetSystemProductionMeterTelemetryResponse**](GetSystemProductionMeterTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemProductionMicroTelemetry

> GetSystemProductionMicroTelemetryResponse GetSystemProductionMicroTelemetry(ctx, systemId).StartAt(startAt).Granularity(granularity).Execute()

Retrieves telemetry for all production micros for a system



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
    resp, r, err := apiClient.SiteLevelProductionMonitoringApi.GetSystemProductionMicroTelemetry(context.Background(), systemId).StartAt(startAt).Granularity(granularity).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelProductionMonitoringApi.GetSystemProductionMicroTelemetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemProductionMicroTelemetry`: GetSystemProductionMicroTelemetryResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelProductionMonitoringApi.GetSystemProductionMicroTelemetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemProductionMicroTelemetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startAt** | **int64** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | 
 **granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) | Granularity of the telemetry data. Default is &#39;day&#39;. | 

### Return type

[**GetSystemProductionMicroTelemetryResponse**](GetSystemProductionMicroTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemRgmStats

> GetSystemRgmStatsResponse GetSystemRgmStats(ctx, systemId).StartAt(startAt).EndAt(endAt).Execute()

rgm_stats



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
    startAt := int64(789) // int64 | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's operational_date, the response data begins at midnight of the first reported interval date. (optional)
    endAt := int64(789) // int64 | End of reporting period in Unix epoch time. If no end is specified, default to the time of the request or (start time + 1 week), whichever is earlier. If the end is later than the last reported interval the response data ends with the last reported interval. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLevelProductionMonitoringApi.GetSystemRgmStats(context.Background(), systemId).StartAt(startAt).EndAt(endAt).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLevelProductionMonitoringApi.GetSystemRgmStats``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemRgmStats`: GetSystemRgmStatsResponse
    fmt.Fprintf(os.Stdout, "Response from `SiteLevelProductionMonitoringApi.GetSystemRgmStats`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemRgmStatsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startAt** | **int64** | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s operational_date, the response data begins at midnight of the first reported interval date. | 
 **endAt** | **int64** | End of reporting period in Unix epoch time. If no end is specified, default to the time of the request or (start time + 1 week), whichever is earlier. If the end is later than the last reported interval the response data ends with the last reported interval. | 

### Return type

[**GetSystemRgmStatsResponse**](GetSystemRgmStatsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

