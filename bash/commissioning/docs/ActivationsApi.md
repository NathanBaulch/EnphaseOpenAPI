# ActivationsApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPartnerActivation**](ActivationsApi.md#createPartnerActivation) | **POST** /partner/activations | Create new activation
[**deleteActivation**](ActivationsApi.md#deleteActivation) | **DELETE** /activations/{id} | Delete an activation by ID
[**getActivationOpsProductionMode**](ActivationsApi.md#getActivationOpsProductionMode) | **GET** /activations/{activation_id}/ops/production_mode | Get production mode
[**getPartnerActivation**](ActivationsApi.md#getPartnerActivation) | **GET** /partner/activations/{id} | Retrieves an Activation by ID
[**getPartnerActivations**](ActivationsApi.md#getPartnerActivations) | **GET** /partner/activations | List of Activations
[**grantActivationUserAccess**](ActivationsApi.md#grantActivationUserAccess) | **POST** /activations/{activation_id}/users/{user_id} | Grant Access
[**revokeActivationUserAccess**](ActivationsApi.md#revokeActivationUserAccess) | **DELETE** /activations/{activation_id}/users/{user_id} | Revoke Access
[**setActivationOpsProductionMode**](ActivationsApi.md#setActivationOpsProductionMode) | **POST** /activations/{activation_id}/ops/production_mode | Set production mode
[**updatePartnerActivation**](ActivationsApi.md#updatePartnerActivation) | **PUT** /partner/activations/{id} | Update an activation.



## createPartnerActivation

Create new activation

Create new activation.

### Example

```bash
 createPartnerActivation
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **SystemParams** |  | [optional]

### Return type

[**System**](System.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteActivation

Delete an activation by ID

To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it.

### Example

```bash
 deleteActivation id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **integer** | Enlighten ID of the activation(system). | [default to null]

### Return type

[**DeleteActivationResponse**](DeleteActivationResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getActivationOpsProductionMode

Get production mode

Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

### Example

```bash
 getActivationOpsProductionMode activation_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **integer** | Enlighten ID of the activation(system). System-generated. | [default to null]

### Return type

[**GetActivationOpsProductionModeResponse**](GetActivationOpsProductionModeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getPartnerActivation

Retrieves an Activation by ID

By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner's name within the system hash, the response includes detailed information about the owner by using expand=owner. You can also expand the owner's company by using expand=owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand=host will include details about the system host. You can also expand the host's company by using expand=host.company. The response now includes information about the host and the company he belongs to.

### Example

```bash
 getPartnerActivation id=value  expand=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **integer** | Enlighten ID of the activation(system). System-generated. | [default to null]
 **expand** | [**SystemExpandEnum**](.md) | Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand. | [optional] [default to null]

### Return type

[**System**](System.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getPartnerActivations

List of Activations

Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn't exist, API will return an empty array.

### Example

```bash
 getPartnerActivations  next=value  limit=value  stage=value  reference=value  installer_id=value  system_name=value  address=value  region=value  search=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next** | **string** | If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field. | [optional] [default to null]
 **limit** | **integer** | There is a limit to the number of activations which can be returned at one time. | [optional] [default to null]
 **stage** | [**SystemStageEnum**](.md) | Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems. | [optional] [default to null]
 **reference** | **string** | Filter activations by company reference. | [optional] [default to null]
 **installerId** | **integer** | Filter activations by installer ID. | [optional] [default to null]
 **systemName** | **string** | Filter activations by system name. | [optional] [default to null]
 **address** | **string** | Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation. | [optional] [default to null]
 **region** | **string** | Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'. | [optional] [default to null]
 **search** | **string** | Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation. | [optional] [default to null]

### Return type

[**GetPartnerActivationsResponse**](GetPartnerActivationsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## grantActivationUserAccess

Grant Access

Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

### Example

```bash
 grantActivationUserAccess activation_id=value user_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **integer** | Enlighten ID of the activation(system). | [default to null]
 **userId** | **integer** | Enlighten ID of the user which you want to grant access. | [default to null]

### Return type

[**GrantActivationUserAccessResponse**](GrantActivationUserAccessResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## revokeActivationUserAccess

Revoke Access

Revokes a user's permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

### Example

```bash
 revokeActivationUserAccess activation_id=value user_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **integer** | Enlighten ID of the activation(system). | [default to null]
 **userId** | **integer** | Enlighten ID of the user which you want to revoke the access. | [default to null]

### Return type

[**RevokeActivationUserAccessResponse**](RevokeActivationUserAccessResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## setActivationOpsProductionMode

Set production mode

Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

### Example

```bash
 setActivationOpsProductionMode activation_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **integer** | Enlighten ID of the activation(system). System-generated. | [default to null]
 **params** | [**SetActivationOpsProductionModeRequest**](SetActivationOpsProductionModeRequest.md) |  | [optional]

### Return type

[**SetActivationOpsProductionModeResponse**](SetActivationOpsProductionModeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updatePartnerActivation

Update an activation.

Update an activation.

### Example

```bash
 updatePartnerActivation id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **integer** | Enlighten ID of the activation(system). System-generated. | [default to null]
 **params** | **SystemParams** |  | [optional]

### Return type

[**System**](System.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
