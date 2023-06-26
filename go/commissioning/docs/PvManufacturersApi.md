# \PvManufacturersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPvManufacturers**](PvManufacturersApi.md#GetPvManufacturers) | **Get** /pv_manufacturers | Returns PV module manufacturers



## GetPvManufacturers

> GetPvManufacturersResponse GetPvManufacturers(ctx).Execute()

Returns PV module manufacturers



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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PvManufacturersApi.GetPvManufacturers(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PvManufacturersApi.GetPvManufacturers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPvManufacturers`: GetPvManufacturersResponse
    fmt.Fprintf(os.Stdout, "Response from `PvManufacturersApi.GetPvManufacturers`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPvManufacturersRequest struct via the builder pattern


### Return type

[**GetPvManufacturersResponse**](GetPvManufacturersResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

