# \DefaultApi

All URIs are relative to *https://api.enphaseenergy.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ConsumptionLifetime**](DefaultApi.md#ConsumptionLifetime) | **Get** /systems/{system_id}/consumption_lifetime | 
[**ConsumptionStats**](DefaultApi.md#ConsumptionStats) | **Get** /systems/{system_id}/consumption_stats | 
[**EnergyLifetime**](DefaultApi.md#EnergyLifetime) | **Get** /systems/{system_id}/energy_lifetime | 
[**Envoys**](DefaultApi.md#Envoys) | **Get** /systems/{system_id}/envoys | 
[**Inventory**](DefaultApi.md#Inventory) | **Get** /systems/{system_id}/inventory | 
[**InvertersSummaryByEnvoyOrSite**](DefaultApi.md#InvertersSummaryByEnvoyOrSite) | **Get** /systems/inverters_summary_by_envoy_or_site | 
[**MonthlyProduction**](DefaultApi.md#MonthlyProduction) | **Get** /systems/{system_id}/monthly_production | 
[**ProductionMeterReadings**](DefaultApi.md#ProductionMeterReadings) | **Get** /systems/{system_id}/production_meter_readings | 
[**RgmStats**](DefaultApi.md#RgmStats) | **Get** /systems/{system_id}/rgm_stats | 
[**SearchSystemId**](DefaultApi.md#SearchSystemId) | **Get** /systems/search_system_id | 
[**Stats**](DefaultApi.md#Stats) | **Get** /systems/{system_id}/stats | 
[**Summary**](DefaultApi.md#Summary) | **Get** /systems/{system_id}/summary | 
[**Systems**](DefaultApi.md#Systems) | **Get** /systems | 



## ConsumptionLifetime

> ConsumptionLifetime ConsumptionLifetime(ctx, systemId).UserId(userId).StartDate(startDate).EndDate(endDate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 
    startDate := time.Now() // string | The date on which to start the time series. Defaults to the system's operational date. (optional)
    endDate := time.Now() // string | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.ConsumptionLifetime(context.Background(), systemId).UserId(userId).StartDate(startDate).EndDate(endDate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ConsumptionLifetime``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ConsumptionLifetime`: ConsumptionLifetime
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ConsumptionLifetime`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiConsumptionLifetimeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 

 **startDate** | **string** | The date on which to start the time series. Defaults to the system&#39;s operational date. | 
 **endDate** | **string** | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | 

### Return type

[**ConsumptionLifetime**](ConsumptionLifetime.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ConsumptionStats

> ConsumptionStats ConsumptionStats(ctx, systemId).UserId(userId).StartAt(startAt).EndAt(endAt).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 
    startAt := int64(1448946000) // int64 | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`. (optional)
    endAt := int64(1449011615) // int64 | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.ConsumptionStats(context.Background(), systemId).UserId(userId).StartAt(startAt).EndAt(endAt).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ConsumptionStats``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ConsumptionStats`: ConsumptionStats
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ConsumptionStats`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiConsumptionStatsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 

 **startAt** | **int64** | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | 
 **endAt** | **int64** | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | 

### Return type

[**ConsumptionStats**](ConsumptionStats.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EnergyLifetime

> EnergyLifetime EnergyLifetime(ctx, systemId).UserId(userId).StartDate(startDate).EndDate(endDate).Production(production).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 
    startDate := time.Now() // string | The date on which to start the time series. Defaults to the system's operational date. (optional)
    endDate := time.Now() // string | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. (optional)
    production := "all" // string | When `all`, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.EnergyLifetime(context.Background(), systemId).UserId(userId).StartDate(startDate).EndDate(endDate).Production(production).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.EnergyLifetime``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EnergyLifetime`: EnergyLifetime
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.EnergyLifetime`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiEnergyLifetimeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 

 **startDate** | **string** | The date on which to start the time series. Defaults to the system&#39;s operational date. | 
 **endDate** | **string** | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | 
 **production** | **string** | When &#x60;all&#x60;, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | 

### Return type

[**EnergyLifetime**](EnergyLifetime.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Envoys

> Envoys Envoys(ctx, systemId).UserId(userId).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.Envoys(context.Background(), systemId).UserId(userId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.Envoys``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Envoys`: Envoys
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.Envoys`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiEnvoysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 


### Return type

[**Envoys**](Envoys.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Inventory

> Inventory Inventory(ctx, systemId).UserId(userId).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.Inventory(context.Background(), systemId).UserId(userId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.Inventory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Inventory`: Inventory
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.Inventory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 


### Return type

[**Inventory**](Inventory.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InvertersSummaryByEnvoyOrSite

> []InvertersSummaryByEnvoyOrSite InvertersSummaryByEnvoyOrSite(ctx).UserId(userId).SiteId(siteId).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    siteId := int32(66) // int32 | The identifier of the system.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.InvertersSummaryByEnvoyOrSite(context.Background()).UserId(userId).SiteId(siteId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.InvertersSummaryByEnvoyOrSite``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `InvertersSummaryByEnvoyOrSite`: []InvertersSummaryByEnvoyOrSite
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.InvertersSummaryByEnvoyOrSite`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiInvertersSummaryByEnvoyOrSiteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 
 **siteId** | **int32** | The identifier of the system. | 

### Return type

[**[]InvertersSummaryByEnvoyOrSite**](InvertersSummaryByEnvoyOrSite.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MonthlyProduction

> MonthlyProduction MonthlyProduction(ctx, systemId).UserId(userId).StartDate(startDate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 
    startDate := time.Now() // string | Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a `start_date` of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.MonthlyProduction(context.Background(), systemId).UserId(userId).StartDate(startDate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.MonthlyProduction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MonthlyProduction`: MonthlyProduction
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.MonthlyProduction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiMonthlyProductionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 

 **startDate** | **string** | Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a &#x60;start_date&#x60; of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month. | 

### Return type

[**MonthlyProduction**](MonthlyProduction.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProductionMeterReadings

> ProductionMeterReadings ProductionMeterReadings(ctx, systemId).UserId(userId).EndAt(endAt).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 
    endAt := int64(1473901755) // int64 |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.ProductionMeterReadings(context.Background(), systemId).UserId(userId).EndAt(endAt).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ProductionMeterReadings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProductionMeterReadings`: ProductionMeterReadings
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ProductionMeterReadings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiProductionMeterReadingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 

 **endAt** | **int64** |  | 

### Return type

[**ProductionMeterReadings**](ProductionMeterReadings.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RgmStats

> RgmStats RgmStats(ctx, systemId).UserId(userId).StartAt(startAt).EndAt(endAt).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 
    startAt := int64(1381474800) // int64 | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`. (optional)
    endAt := int64(1381561200) // int64 | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.RgmStats(context.Background(), systemId).UserId(userId).StartAt(startAt).EndAt(endAt).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.RgmStats``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RgmStats`: RgmStats
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.RgmStats`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRgmStatsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 

 **startAt** | **int64** | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | 
 **endAt** | **int64** | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | 

### Return type

[**RgmStats**](RgmStats.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchSystemId

> SearchSystemId SearchSystemId(ctx).UserId(userId).SerialNum(serialNum).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    serialNum := "23435345345" // string | Serial number of the envoy.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.SearchSystemId(context.Background()).UserId(userId).SerialNum(serialNum).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.SearchSystemId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchSystemId`: SearchSystemId
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.SearchSystemId`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchSystemIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 
 **serialNum** | **string** | Serial number of the envoy. | 

### Return type

[**SearchSystemId**](SearchSystemId.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Stats

> Stats Stats(ctx, systemId).UserId(userId).StartAt(startAt).EndAt(endAt).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 
    startAt := int64(1381496100) // int64 | Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the `operational_date`. (optional)
    endAt := int64(1381497600) // int64 | End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.Stats(context.Background(), systemId).UserId(userId).StartAt(startAt).EndAt(endAt).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.Stats``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Stats`: Stats
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.Stats`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiStatsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 

 **startAt** | **int64** | Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the &#x60;operational_date&#x60;. | 
 **endAt** | **int64** | End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval. | 

### Return type

[**Stats**](Stats.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Summary

> Summary Summary(ctx, systemId).UserId(userId).SummaryDate(summaryDate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    systemId := int32(66) // int32 | 
    summaryDate := time.Now() // string | Start of reporting period. If no `summary_date` is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and `422` status. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.Summary(context.Background(), systemId).UserId(userId).SummaryDate(summaryDate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.Summary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Summary`: Summary
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.Summary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 

 **summaryDate** | **string** | Start of reporting period. If no &#x60;summary_date&#x60; is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and &#x60;422&#x60; status. | 

### Return type

[**Summary**](Summary.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Systems

> Systems Systems(ctx).UserId(userId).Next(next).Limit(limit).SystemId(systemId).SystemId2(systemId2).SystemName(systemName).SystemName2(systemName2).Status(status).Status2(status2).Reference(reference).Reference2(reference2).Installer(installer).Installer2(installer2).ConnectionType(connectionType).ConnectionType2(connectionType2).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "4d6a51330a" // string | 
    next := "4d5467784d5445770a" // string |  (optional)
    limit := int32(100) // int32 |  (optional) (default to 100)
    systemId := int32(67) // int32 |  (optional)
    systemId2 := []int32{int32(123)} // []int32 |  (optional)
    systemName := "Green" // string |  (optional)
    systemName2 := []string{"Inner_example"} // []string |  (optional)
    status := openapiclient.Status("comm") // Status |  (optional)
    status2 := []openapiclient.Status{openapiclient.Status("comm")} // []Status |  (optional)
    reference := "reference_example" // string |  (optional)
    reference2 := []string{"Inner_example"} // []string |  (optional)
    installer := "installer_example" // string |  (optional)
    installer2 := []string{"Inner_example"} // []string |  (optional)
    connectionType := openapiclient.ConnectionType("ethernet") // ConnectionType |  (optional)
    connectionType2 := []openapiclient.ConnectionType{openapiclient.ConnectionType("ethernet")} // []ConnectionType |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.Systems(context.Background()).UserId(userId).Next(next).Limit(limit).SystemId(systemId).SystemId2(systemId2).SystemName(systemName).SystemName2(systemName2).Status(status).Status2(status2).Reference(reference).Reference2(reference2).Installer(installer).Installer2(installer2).ConnectionType(connectionType).ConnectionType2(connectionType2).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.Systems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Systems`: Systems
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.Systems`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSystemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | 
 **next** | **string** |  | 
 **limit** | **int32** |  | [default to 100]
 **systemId** | **int32** |  | 
 **systemId2** | **[]int32** |  | 
 **systemName** | **string** |  | 
 **systemName2** | **[]string** |  | 
 **status** | [**Status**](Status.md) |  | 
 **status2** | [**[]Status**](Status.md) |  | 
 **reference** | **string** |  | 
 **reference2** | **[]string** |  | 
 **installer** | **string** |  | 
 **installer2** | **[]string** |  | 
 **connectionType** | [**ConnectionType**](ConnectionType.md) |  | 
 **connectionType2** | [**[]ConnectionType**](ConnectionType.md) |  | 

### Return type

[**Systems**](Systems.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

