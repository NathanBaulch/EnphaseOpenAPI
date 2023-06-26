# \CompaniesApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCompanyUser**](CompaniesApi.md#CreateCompanyUser) | **Post** /companies/{company_id}/users | Create company user
[**GetCompanyUser**](CompaniesApi.md#GetCompanyUser) | **Get** /companies/{company_id}/users/{user_id} | Returns the requested user
[**GetCompanyUsers**](CompaniesApi.md#GetCompanyUsers) | **Get** /companies/{company_id}/users | Get all users with in a company
[**GetSelfCompanyBranches**](CompaniesApi.md#GetSelfCompanyBranches) | **Get** /companies/self/branches | User&#39;s company and its branches
[**UpdateCompanyUser**](CompaniesApi.md#UpdateCompanyUser) | **Put** /companies/{company_id}/users/{user_id} | Update company user



## CreateCompanyUser

> User CreateCompanyUser(ctx, companyId).Params(params).Execute()

Create company user



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
    companyId := int32(56) // int32 | Company ID.
    params := *openapiclient.NewCreateCompanyUserRequest("Email_example", "FirstName_example", "LastName_example") // CreateCompanyUserRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CompaniesApi.CreateCompanyUser(context.Background(), companyId).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CompaniesApi.CreateCompanyUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCompanyUser`: User
    fmt.Fprintf(os.Stdout, "Response from `CompaniesApi.CreateCompanyUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**companyId** | **int32** | Company ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateCompanyUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **params** | [**CreateCompanyUserRequest**](CreateCompanyUserRequest.md) |  | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompanyUser

> User GetCompanyUser(ctx, companyId, userId).Expand(expand).Execute()

Returns the requested user



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
    companyId := int32(56) // int32 | Company ID.
    userId := int32(56) // int32 | User ID.
    expand := openapiclient.UserExpandEnum("company") // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CompaniesApi.GetCompanyUser(context.Background(), companyId, userId).Expand(expand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CompaniesApi.GetCompanyUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompanyUser`: User
    fmt.Fprintf(os.Stdout, "Response from `CompaniesApi.GetCompanyUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**companyId** | **int32** | Company ID. | 
**userId** | **int32** | User ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompanyUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **expand** | [**UserExpandEnum**](UserExpandEnum.md) | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompanyUsers

> GetCompanyUsersResponse GetCompanyUsers(ctx, companyId).Execute()

Get all users with in a company



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
    companyId := int32(56) // int32 | Company ID.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CompaniesApi.GetCompanyUsers(context.Background(), companyId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CompaniesApi.GetCompanyUsers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompanyUsers`: GetCompanyUsersResponse
    fmt.Fprintf(os.Stdout, "Response from `CompaniesApi.GetCompanyUsers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**companyId** | **int32** | Company ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompanyUsersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetCompanyUsersResponse**](GetCompanyUsersResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSelfCompanyBranches

> GetSelfCompanyBranchesResponse GetSelfCompanyBranches(ctx).Execute()

User's company and its branches



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
    resp, r, err := apiClient.CompaniesApi.GetSelfCompanyBranches(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CompaniesApi.GetSelfCompanyBranches``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSelfCompanyBranches`: GetSelfCompanyBranchesResponse
    fmt.Fprintf(os.Stdout, "Response from `CompaniesApi.GetSelfCompanyBranches`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetSelfCompanyBranchesRequest struct via the builder pattern


### Return type

[**GetSelfCompanyBranchesResponse**](GetSelfCompanyBranchesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCompanyUser

> User UpdateCompanyUser(ctx, companyId, userId).Params(params).Execute()

Update company user



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
    companyId := int32(56) // int32 | Company ID.
    userId := int32(56) // int32 | User ID.
    params := *openapiclient.NewUpdateCompanyUserRequest() // UpdateCompanyUserRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CompaniesApi.UpdateCompanyUser(context.Background(), companyId, userId).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CompaniesApi.UpdateCompanyUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateCompanyUser`: User
    fmt.Fprintf(os.Stdout, "Response from `CompaniesApi.UpdateCompanyUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**companyId** | **int32** | Company ID. | 
**userId** | **int32** | User ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCompanyUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **params** | [**UpdateCompanyUserRequest**](UpdateCompanyUserRequest.md) |  | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

