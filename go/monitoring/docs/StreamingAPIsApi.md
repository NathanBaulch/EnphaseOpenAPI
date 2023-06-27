# \StreamingAPIsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**StreamSystemLiveData**](StreamingAPIsApi.md#StreamSystemLiveData) | **Get** /systems/{system_id}/live_data | Site Level Live Status



## StreamSystemLiveData

> StreamSystemLiveDataResponse StreamSystemLiveData(ctx, systemId).Duration(duration).Execute()

Site Level Live Status



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
    duration := int32(56) // int32 | Duration of the stream in seconds. Default=30, Min=30, Max=300, e.g=30. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StreamingAPIsApi.StreamSystemLiveData(context.Background(), systemId).Duration(duration).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StreamingAPIsApi.StreamSystemLiveData``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StreamSystemLiveData`: StreamSystemLiveDataResponse
    fmt.Fprintf(os.Stdout, "Response from `StreamingAPIsApi.StreamSystemLiveData`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | Unique numeric ID of the system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStreamSystemLiveDataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **duration** | **int32** | Duration of the stream in seconds. Default&#x3D;30, Min&#x3D;30, Max&#x3D;300, e.g&#x3D;30. | 

### Return type

[**StreamSystemLiveDataResponse**](StreamSystemLiveDataResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

