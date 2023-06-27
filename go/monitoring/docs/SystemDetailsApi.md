# \SystemDetailsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetInvertersSummaryByEnvoyOrSite**](SystemDetailsApi.md#GetInvertersSummaryByEnvoyOrSite) | **Get** /systems/inverters_summary_by_envoy_or_site | inverters_summary_by_envoy_or_site
[**GetSystem**](SystemDetailsApi.md#GetSystem) | **Get** /systems/{system_id} | Retrieves a System by ID
[**GetSystemDevices**](SystemDetailsApi.md#GetSystemDevices) | **Get** /systems/{system_id}/devices | Retrieves devices for a given system
[**GetSystemSummary**](SystemDetailsApi.md#GetSystemSummary) | **Get** /systems/{system_id}/summary | Retrieves a system summary
[**GetSystems**](SystemDetailsApi.md#GetSystems) | **Get** /systems | Fetch systems
[**RetrieveSystemId**](SystemDetailsApi.md#RetrieveSystemId) | **Get** /systems/retrieve_system_id | Retrieve system for a given envoy serial number
[**SearchSystems**](SystemDetailsApi.md#SearchSystems) | **Post** /systems/search | Search and filter systems



## GetInvertersSummaryByEnvoyOrSite

> []GetInvertersSummaryByEnvoyOrSiteResponseInner GetInvertersSummaryByEnvoyOrSite(ctx).SiteId(siteId).EnvoySerialNumber(envoySerialNumber).Execute()

inverters_summary_by_envoy_or_site



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
    siteId := int32(56) // int32 | Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site. (optional)
    envoySerialNumber := "envoySerialNumber_example" // string | Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SystemDetailsApi.GetInvertersSummaryByEnvoyOrSite(context.Background()).SiteId(siteId).EnvoySerialNumber(envoySerialNumber).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemDetailsApi.GetInvertersSummaryByEnvoyOrSite``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInvertersSummaryByEnvoyOrSite`: []GetInvertersSummaryByEnvoyOrSiteResponseInner
    fmt.Fprintf(os.Stdout, "Response from `SystemDetailsApi.GetInvertersSummaryByEnvoyOrSite`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInvertersSummaryByEnvoyOrSiteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **int32** | Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site. | 
 **envoySerialNumber** | **string** | Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response. | 

### Return type

[**[]GetInvertersSummaryByEnvoyOrSiteResponseInner**](GetInvertersSummaryByEnvoyOrSiteResponseInner.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystem

> SystemDetails GetSystem(ctx, systemId).Execute()

Retrieves a System by ID



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
    resp, r, err := apiClient.SystemDetailsApi.GetSystem(context.Background(), systemId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemDetailsApi.GetSystem``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystem`: SystemDetails
    fmt.Fprintf(os.Stdout, "Response from `SystemDetailsApi.GetSystem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SystemDetails**](SystemDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemDevices

> GetSystemDevicesResponse GetSystemDevices(ctx, systemId).Execute()

Retrieves devices for a given system



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
    resp, r, err := apiClient.SystemDetailsApi.GetSystemDevices(context.Background(), systemId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemDetailsApi.GetSystemDevices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemDevices`: GetSystemDevicesResponse
    fmt.Fprintf(os.Stdout, "Response from `SystemDetailsApi.GetSystemDevices`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemDevicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetSystemDevicesResponse**](GetSystemDevicesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemSummary

> GetSystemSummaryResponse GetSystemSummary(ctx, systemId).Execute()

Retrieves a system summary



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
    resp, r, err := apiClient.SystemDetailsApi.GetSystemSummary(context.Background(), systemId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemDetailsApi.GetSystemSummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemSummary`: GetSystemSummaryResponse
    fmt.Fprintf(os.Stdout, "Response from `SystemDetailsApi.GetSystemSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetSystemSummaryResponse**](GetSystemSummaryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystems

> GetSystemsResponse GetSystems(ctx).Page(page).Size(size).SortBy(sortBy).Execute()

Fetch systems



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
    page := int32(56) // int32 | Page to be returned. Default=1, Min=1. For example, if page is set to 2, 2nd page is returned. (optional)
    size := int32(56) // int32 | Maximum number of records shown per page. Default=10, Min=1, Max=100.  For example, if set to 5, 5 records are shown per page. (optional)
    sortBy := openapiclient.SystemSortByEnum("id") // SystemSortByEnum | Returns list of systems sorted by <sort_by> field. To get ASC order sorted list, user sort_by = <key>. To get DESC order sorted list, use sort_by = (-)<key>. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SystemDetailsApi.GetSystems(context.Background()).Page(page).Size(size).SortBy(sortBy).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemDetailsApi.GetSystems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystems`: GetSystemsResponse
    fmt.Fprintf(os.Stdout, "Response from `SystemDetailsApi.GetSystems`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Page to be returned. Default&#x3D;1, Min&#x3D;1. For example, if page is set to 2, 2nd page is returned. | 
 **size** | **int32** | Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100.  For example, if set to 5, 5 records are shown per page. | 
 **sortBy** | [**SystemSortByEnum**](SystemSortByEnum.md) | Returns list of systems sorted by &lt;sort_by&gt; field. To get ASC order sorted list, user sort_by &#x3D; &lt;key&gt;. To get DESC order sorted list, use sort_by &#x3D; (-)&lt;key&gt;. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID. | 

### Return type

[**GetSystemsResponse**](GetSystemsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveSystemId

> RetrieveSystemIdResponse RetrieveSystemId(ctx).SerialNum(serialNum).Execute()

Retrieve system for a given envoy serial number



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
    serialNum := "serialNum_example" // string | Envoy serial number.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SystemDetailsApi.RetrieveSystemId(context.Background()).SerialNum(serialNum).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemDetailsApi.RetrieveSystemId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RetrieveSystemId`: RetrieveSystemIdResponse
    fmt.Fprintf(os.Stdout, "Response from `SystemDetailsApi.RetrieveSystemId`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveSystemIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNum** | **string** | Envoy serial number. | 

### Return type

[**RetrieveSystemIdResponse**](RetrieveSystemIdResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchSystems

> SearchSystemsResponse SearchSystems(ctx).Page(page).Size(size).Params(params).Execute()

Search and filter systems



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
    page := int32(56) // int32 | Page to be returned. Default=1, Min=1, e.g=2. (optional)
    size := int32(56) // int32 | Maximum number of records shown per page. Default=10, Min=1, Max=1000, e.g=5. (optional)
    params := *openapiclient.NewSearchSystemsRequest(*openapiclient.NewSearchSystemsRequestSystem()) // SearchSystemsRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SystemDetailsApi.SearchSystems(context.Background()).Page(page).Size(size).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SystemDetailsApi.SearchSystems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchSystems`: SearchSystemsResponse
    fmt.Fprintf(os.Stdout, "Response from `SystemDetailsApi.SearchSystems`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchSystemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Page to be returned. Default&#x3D;1, Min&#x3D;1, e.g&#x3D;2. | 
 **size** | **int32** | Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;1000, e.g&#x3D;5. | 
 **params** | [**SearchSystemsRequest**](SearchSystemsRequest.md) |  | 

### Return type

[**SearchSystemsResponse**](SearchSystemsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

