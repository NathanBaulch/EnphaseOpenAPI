# \GridProfilesApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetGridProfiles**](GridProfilesApi.md#GetGridProfiles) | **Get** /partner/grid_profiles | Lists the available profiles



## GetGridProfiles

> GetGridProfilesResponse GetGridProfiles(ctx).Execute()

Lists the available profiles



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
    resp, r, err := apiClient.GridProfilesApi.GetGridProfiles(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `GridProfilesApi.GetGridProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGridProfiles`: GetGridProfilesResponse
    fmt.Fprintf(os.Stdout, "Response from `GridProfilesApi.GetGridProfiles`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetGridProfilesRequest struct via the builder pattern


### Return type

[**GetGridProfilesResponse**](GetGridProfilesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

