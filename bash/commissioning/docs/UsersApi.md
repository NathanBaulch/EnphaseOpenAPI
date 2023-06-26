# UsersApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivationUser**](UsersApi.md#getActivationUser) | **GET** /activations/{activation_id}/users/{user_id} | Returns the requested user
[**getSelfUser**](UsersApi.md#getSelfUser) | **GET** /users/self | Return the current logged in user detail
[**getUser**](UsersApi.md#getUser) | **GET** /users/{user_id} | Returns the requested user
[**searchUsers**](UsersApi.md#searchUsers) | **GET** /users/search | Search user
[**updateActivationUser**](UsersApi.md#updateActivationUser) | **PUT** /activations/{activation_id}/users/{user_id} | Update user
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{user_id} | Update user



## getActivationUser

Returns the requested user

You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches.

### Example

```bash
 getActivationUser activation_id=value user_id=value  expand=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **integer** | Enlighten ID of the activation(system). System-generated. | [default to null]
 **userId** | **integer** | Enlighten ID of the user. System-generated. | [default to null]
 **expand** | [**UserExpandEnum**](.md) | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response. | [optional] [default to null]

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSelfUser

Return the current logged in user detail

Return the current logged in user detail. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example

```bash
 getSelfUser  expand=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expand** | [**UserExpandEnum**](.md) | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] [default to null]

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getUser

Returns the requested user

You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example

```bash
 getUser user_id=value  expand=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **integer** | User ID. | [default to null]
 **expand** | [**UserExpandEnum**](.md) | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] [default to null]

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## searchUsers

Search user

Returns the user ID for the given email ID only if the user exists.

### Example

```bash
 searchUsers  email=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **string** | Email address of the user. | [optional] [default to null]

### Return type

[**SearchUsersResponse**](SearchUsersResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateActivationUser

Update user

You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. When 'company_id' is passed in the body param or the user company_id is already defined, we will not consider the 'enlighten_view' field value and the user will become an enlighten manager. You may change a user's company if you have access to the user, the old company, and the new company.

### Example

```bash
 updateActivationUser activation_id=value user_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **integer** | Enlighten ID of the activation(system). System-generated. | [default to null]
 **userId** | **integer** | Enlighten ID of the user. System-generated. | [default to null]
 **params** | **UserParams** |  | [optional]

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateUser

Update user

You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. 'company_id' is an optional field. When you passing a 'company_id', the user become an enlighten manager and we will not consider 'enlighten_view' field value. You may change a user's company if you have access to the user, the old company, and the new company.

### Example

```bash
 updateUser user_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **integer** | User ID. | [default to null]
 **params** | **UserParams** |  | [optional]

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

