# \ActivationsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreatePartnerActivation**](ActivationsApi.md#CreatePartnerActivation) | **Post** /partner/activations | Create new activation
[**DeleteActivation**](ActivationsApi.md#DeleteActivation) | **Delete** /partner/activations/{activation_id} | Delete an activation by ID
[**GetActivationOpsProductionMode**](ActivationsApi.md#GetActivationOpsProductionMode) | **Get** /activations/{activation_id}/ops/production_mode | Get production mode
[**GetPartnerActivation**](ActivationsApi.md#GetPartnerActivation) | **Get** /partner/activations/{activation_id} | Retrieves an Activation by ID
[**GetPartnerActivations**](ActivationsApi.md#GetPartnerActivations) | **Get** /partner/activations | List of Activations
[**GrantActivationUserAccess**](ActivationsApi.md#GrantActivationUserAccess) | **Post** /activations/{activation_id}/users/{user_id} | Grant Access
[**RevokeActivationUserAccess**](ActivationsApi.md#RevokeActivationUserAccess) | **Delete** /activations/{activation_id}/users/{user_id} | Revoke Access
[**SetActivationOpsProductionMode**](ActivationsApi.md#SetActivationOpsProductionMode) | **Post** /activations/{activation_id}/ops/production_mode | Set production mode
[**UpdatePartnerActivation**](ActivationsApi.md#UpdatePartnerActivation) | **Put** /partner/activations/{activation_id} | Update an activation.



## CreatePartnerActivation

> Activation CreatePartnerActivation(ctx).Params(params).Execute()

Create new activation



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
    params := SystemParams(987) // SystemParams |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivationsApi.CreatePartnerActivation(context.Background()).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivationsApi.CreatePartnerActivation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePartnerActivation`: Activation
    fmt.Fprintf(os.Stdout, "Response from `ActivationsApi.CreatePartnerActivation`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePartnerActivationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **SystemParams** |  | 

### Return type

[**Activation**](Activation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteActivation

> DeleteActivationResponse DeleteActivation(ctx, activationId).Execute()

Delete an activation by ID



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
    activationId := int32(56) // int32 | Enlighten ID of the activation(system).

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivationsApi.DeleteActivation(context.Background(), activationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivationsApi.DeleteActivation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivation`: DeleteActivationResponse
    fmt.Fprintf(os.Stdout, "Response from `ActivationsApi.DeleteActivation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Enlighten ID of the activation(system). | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteActivationResponse**](DeleteActivationResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivationOpsProductionMode

> GetActivationOpsProductionModeResponse GetActivationOpsProductionMode(ctx, activationId).Execute()

Get production mode



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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivationsApi.GetActivationOpsProductionMode(context.Background(), activationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivationsApi.GetActivationOpsProductionMode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivationOpsProductionMode`: GetActivationOpsProductionModeResponse
    fmt.Fprintf(os.Stdout, "Response from `ActivationsApi.GetActivationOpsProductionMode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Enlighten ID of the activation(system). System-generated. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivationOpsProductionModeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetActivationOpsProductionModeResponse**](GetActivationOpsProductionModeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPartnerActivation

> Activation GetPartnerActivation(ctx, activationId).Expand(expand).Execute()

Retrieves an Activation by ID



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
    expand := openapiclient.SystemExpandEnum("owner") // SystemExpandEnum | Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivationsApi.GetPartnerActivation(context.Background(), activationId).Expand(expand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivationsApi.GetPartnerActivation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPartnerActivation`: Activation
    fmt.Fprintf(os.Stdout, "Response from `ActivationsApi.GetPartnerActivation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Enlighten ID of the activation(system). System-generated. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPartnerActivationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | [**SystemExpandEnum**](SystemExpandEnum.md) | Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand. | 

### Return type

[**Activation**](Activation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPartnerActivations

> GetPartnerActivationsResponse GetPartnerActivations(ctx).Next(next).Limit(limit).Stage(stage).Reference(reference).InstallerId(installerId).SystemName(systemName).Address(address).Region(region).Search(search).Execute()

List of Activations



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
    next := "next_example" // string | If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field. (optional)
    limit := int32(56) // int32 | There is a limit to the number of activations which can be returned at one time. (optional)
    stage := openapiclient.SystemStageEnum("1") // SystemStageEnum | Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value. (optional)
    reference := "reference_example" // string | Filter activations by company reference. (optional)
    installerId := int32(56) // int32 | Filter activations by installer ID. (optional)
    systemName := "systemName_example" // string | Filter activations by system name. (optional)
    address := "address_example" // string | Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation. (optional)
    region := "region_example" // string | Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'. (optional)
    search := "search_example" // string | Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivationsApi.GetPartnerActivations(context.Background()).Next(next).Limit(limit).Stage(stage).Reference(reference).InstallerId(installerId).SystemName(systemName).Address(address).Region(region).Search(search).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivationsApi.GetPartnerActivations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPartnerActivations`: GetPartnerActivationsResponse
    fmt.Fprintf(os.Stdout, "Response from `ActivationsApi.GetPartnerActivations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPartnerActivationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next** | **string** | If the first request does not return a full list, use the &#39;next&#39; attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the &#39;next&#39; field. | 
 **limit** | **int32** | There is a limit to the number of activations which can be returned at one time. | 
 **stage** | [**SystemStageEnum**](SystemStageEnum.md) | Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage&#x3D;1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value. | 
 **reference** | **string** | Filter activations by company reference. | 
 **installerId** | **int32** | Filter activations by installer ID. | 
 **systemName** | **string** | Filter activations by system name. | 
 **address** | **string** | Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation. | 
 **region** | **string** | Filter activations by region. Provide two latitude, longitude values to find activations between them. Format &#39;latitude1,longitude1,latitude2,longitude2&#39; e.g value &#39;44.968046,-94.420307,44.33328,-89.132008&#39;. | 
 **search** | **string** | Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation. | 

### Return type

[**GetPartnerActivationsResponse**](GetPartnerActivationsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GrantActivationUserAccess

> GrantActivationUserAccessResponse GrantActivationUserAccess(ctx, activationId, userId).Execute()

Grant Access



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
    activationId := int32(56) // int32 | Enlighten ID of the activation(system).
    userId := int32(56) // int32 | Enlighten ID of the user which you want to grant access.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivationsApi.GrantActivationUserAccess(context.Background(), activationId, userId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivationsApi.GrantActivationUserAccess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GrantActivationUserAccess`: GrantActivationUserAccessResponse
    fmt.Fprintf(os.Stdout, "Response from `ActivationsApi.GrantActivationUserAccess`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Enlighten ID of the activation(system). | 
**userId** | **int32** | Enlighten ID of the user which you want to grant access. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGrantActivationUserAccessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**GrantActivationUserAccessResponse**](GrantActivationUserAccessResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RevokeActivationUserAccess

> RevokeActivationUserAccessResponse RevokeActivationUserAccess(ctx, activationId, userId).Execute()

Revoke Access



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
    activationId := int32(56) // int32 | Enlighten ID of the activation(system).
    userId := int32(56) // int32 | Enlighten ID of the user which you want to revoke the access.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivationsApi.RevokeActivationUserAccess(context.Background(), activationId, userId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivationsApi.RevokeActivationUserAccess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RevokeActivationUserAccess`: RevokeActivationUserAccessResponse
    fmt.Fprintf(os.Stdout, "Response from `ActivationsApi.RevokeActivationUserAccess`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Enlighten ID of the activation(system). | 
**userId** | **int32** | Enlighten ID of the user which you want to revoke the access. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRevokeActivationUserAccessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**RevokeActivationUserAccessResponse**](RevokeActivationUserAccessResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetActivationOpsProductionMode

> SetActivationOpsProductionModeResponse SetActivationOpsProductionMode(ctx, activationId).Params(params).Execute()

Set production mode



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
    params := *openapiclient.NewSetActivationOpsProductionModeRequest(openapiclient.SystemProductionModeEnum("true")) // SetActivationOpsProductionModeRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivationsApi.SetActivationOpsProductionMode(context.Background(), activationId).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivationsApi.SetActivationOpsProductionMode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetActivationOpsProductionMode`: SetActivationOpsProductionModeResponse
    fmt.Fprintf(os.Stdout, "Response from `ActivationsApi.SetActivationOpsProductionMode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Enlighten ID of the activation(system). System-generated. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetActivationOpsProductionModeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **params** | [**SetActivationOpsProductionModeRequest**](SetActivationOpsProductionModeRequest.md) |  | 

### Return type

[**SetActivationOpsProductionModeResponse**](SetActivationOpsProductionModeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdatePartnerActivation

> Activation UpdatePartnerActivation(ctx, activationId).Params(params).Execute()

Update an activation.



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
    params := SystemParams(987) // SystemParams |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivationsApi.UpdatePartnerActivation(context.Background(), activationId).Params(params).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivationsApi.UpdatePartnerActivation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdatePartnerActivation`: Activation
    fmt.Fprintf(os.Stdout, "Response from `ActivationsApi.UpdatePartnerActivation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activationId** | **int32** | Enlighten ID of the activation(system). System-generated. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePartnerActivationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **params** | **SystemParams** |  | 

### Return type

[**Activation**](Activation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

