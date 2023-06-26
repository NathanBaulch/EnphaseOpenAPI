# \ArraysApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteSystemArray**](ArraysApi.md#DeleteSystemArray) | **Delete** /systems/{system_id}/arrays/{id} | Delete an array by ID
[**GetSystemArray**](ArraysApi.md#GetSystemArray) | **Get** /systems/{system_id}/arrays/{id} | Fetch array details by ID
[**GetSystemArrays**](ArraysApi.md#GetSystemArrays) | **Get** /systems/{system_id}/arrays | Fetch particular system Array details
[**UpdateSystemArray**](ArraysApi.md#UpdateSystemArray) | **Put** /systems/{system_id}/arrays/{id} | Update particular system array details
[**UpdateSystemArrays**](ArraysApi.md#UpdateSystemArrays) | **Put** /systems/{system_id}/arrays | Update all arrays for system



## DeleteSystemArray

> DeleteSystemArrayResponse DeleteSystemArray(ctx, systemId, id).Execute()

Delete an array by ID



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
    id := int32(56) // int32 | Array ID.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ArraysApi.DeleteSystemArray(context.Background(), systemId, id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArraysApi.DeleteSystemArray``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSystemArray`: DeleteSystemArrayResponse
    fmt.Fprintf(os.Stdout, "Response from `ArraysApi.DeleteSystemArray`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | System ID. | 
**id** | **int32** | Array ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSystemArrayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**DeleteSystemArrayResponse**](DeleteSystemArrayResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemArray

> Array GetSystemArray(ctx, systemId, id).Execute()

Fetch array details by ID



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
    id := int32(56) // int32 | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Fetch particular system Array details' endpoint.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ArraysApi.GetSystemArray(context.Background(), systemId, id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArraysApi.GetSystemArray``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemArray`: Array
    fmt.Fprintf(os.Stdout, "Response from `ArraysApi.GetSystemArray`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | System ID. | 
**id** | **int32** | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Fetch particular system Array details&#39; endpoint. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemArrayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Array**](Array.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSystemArrays

> Arrays GetSystemArrays(ctx, systemId).Execute()

Fetch particular system Array details



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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ArraysApi.GetSystemArrays(context.Background(), systemId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArraysApi.GetSystemArrays``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSystemArrays`: Arrays
    fmt.Fprintf(os.Stdout, "Response from `ArraysApi.GetSystemArrays`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | System ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSystemArraysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Arrays**](Arrays.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSystemArray

> Array UpdateSystemArray(ctx, systemId, id).Params(params).Execute()

Update particular system array details



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
    id := int32(56) // int32 | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Update all Arrays' endpoint.
    params := ArrayParams(987) // ArrayParams |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ArraysApi.UpdateSystemArray(context.Background(), systemId, id).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArraysApi.UpdateSystemArray``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSystemArray`: Array
    fmt.Fprintf(os.Stdout, "Response from `ArraysApi.UpdateSystemArray`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | System ID. | 
**id** | **int32** | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Update all Arrays&#39; endpoint. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSystemArrayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **params** | **ArrayParams** |  | 

### Return type

[**Array**](Array.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSystemArrays

> Arrays UpdateSystemArrays(ctx, systemId).Params(params).Execute()

Update all arrays for system



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
    params := *openapiclient.NewUpdateSystemArraysRequest(int32(123), []openapiclient.ArrayParams{*openapiclient.NewArrayParams("Label_example", int32(123), "Tilt_example", "ProvisionedEnvoy_example", int32(123), int32(123), []openapiclient.ArrayParamsModulesInner{*openapiclient.NewArrayParamsModulesInner(int32(123), int32(123), int32(123), "SerialNum_example")})}) // UpdateSystemArraysRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ArraysApi.UpdateSystemArrays(context.Background(), systemId).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArraysApi.UpdateSystemArrays``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSystemArrays`: Arrays
    fmt.Fprintf(os.Stdout, "Response from `ArraysApi.UpdateSystemArrays`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**systemId** | **int32** | System ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSystemArraysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **params** | [**UpdateSystemArraysRequest**](UpdateSystemArraysRequest.md) |  | 

### Return type

[**Arrays**](Arrays.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

