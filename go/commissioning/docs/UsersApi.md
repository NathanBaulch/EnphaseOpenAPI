# \UsersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetActivationUser**](UsersApi.md#GetActivationUser) | **Get** /activations/{activation_id}/users/{user_id} | Returns the requested user
[**GetSelfUser**](UsersApi.md#GetSelfUser) | **Get** /users/self | Return the current logged in user detail
[**GetUser**](UsersApi.md#GetUser) | **Get** /users/{user_id} | Returns the requested user
[**SearchUsers**](UsersApi.md#SearchUsers) | **Get** /users/search | Search user
[**UpdateActivationUser**](UsersApi.md#UpdateActivationUser) | **Put** /activations/{activation_id}/users/{user_id} | Update user
[**UpdateUser**](UsersApi.md#UpdateUser) | **Put** /users/{user_id} | Update user



## GetActivationUser

> User GetActivationUser(ctx, activationId, userId).Expand(expand).Execute()

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
    activationId := int32(56) // int32 | Enlighten ID of the activation(system). System-generated.
    userId := int32(56) // int32 | Enlighten ID of the user. System-generated.
    expand := openapiclient.UserExpandEnum("company") // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UsersApi.GetActivationUser(context.Background(), activationId, userId).Expand(expand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UsersApi.GetActivationUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivationUser`: User
    fmt.Fprintf(os.Stdout, "Response from `UsersApi.GetActivationUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Enlighten ID of the activation(system). System-generated. | 
**userId** | **int32** | Enlighten ID of the user. System-generated. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivationUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **expand** | [**UserExpandEnum**](UserExpandEnum.md) | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response. | 

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


## GetSelfUser

> User GetSelfUser(ctx).Expand(expand).Execute()

Return the current logged in user detail



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
    expand := openapiclient.UserExpandEnum("company") // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UsersApi.GetSelfUser(context.Background()).Expand(expand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UsersApi.GetSelfUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSelfUser`: User
    fmt.Fprintf(os.Stdout, "Response from `UsersApi.GetSelfUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSelfUserRequest struct via the builder pattern


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


## GetUser

> User GetUser(ctx, userId).Expand(expand).Execute()

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
    userId := int32(56) // int32 | User ID.
    expand := openapiclient.UserExpandEnum("company") // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UsersApi.GetUser(context.Background(), userId).Expand(expand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UsersApi.GetUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUser`: User
    fmt.Fprintf(os.Stdout, "Response from `UsersApi.GetUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **int32** | User ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserRequest struct via the builder pattern


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


## SearchUsers

> SearchUsersResponse SearchUsers(ctx).Email(email).Execute()

Search user



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
    email := "email_example" // string | Email address of the user. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UsersApi.SearchUsers(context.Background()).Email(email).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UsersApi.SearchUsers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchUsers`: SearchUsersResponse
    fmt.Fprintf(os.Stdout, "Response from `UsersApi.SearchUsers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchUsersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **string** | Email address of the user. | 

### Return type

[**SearchUsersResponse**](SearchUsersResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateActivationUser

> User UpdateActivationUser(ctx, activationId, userId).Params(params).Execute()

Update user



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
    activationId := int32(56) // int32 | Enlighten ID of the activation(system). System-generated.
    userId := int32(56) // int32 | Enlighten ID of the user. System-generated.
    params := UserParams(987) // UserParams |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UsersApi.UpdateActivationUser(context.Background(), activationId, userId).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UsersApi.UpdateActivationUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateActivationUser`: User
    fmt.Fprintf(os.Stdout, "Response from `UsersApi.UpdateActivationUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Enlighten ID of the activation(system). System-generated. | 
**userId** | **int32** | Enlighten ID of the user. System-generated. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateActivationUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **params** | **UserParams** |  | 

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


## UpdateUser

> User UpdateUser(ctx, userId).Params(params).Execute()

Update user



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
    userId := int32(56) // int32 | User ID.
    params := UserParams(987) // UserParams |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UsersApi.UpdateUser(context.Background(), userId).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UsersApi.UpdateUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateUser`: User
    fmt.Fprintf(os.Stdout, "Response from `UsersApi.UpdateUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **int32** | User ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **params** | **UserParams** |  | 

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

