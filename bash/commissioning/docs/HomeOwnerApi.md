# HomeOwnerApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](HomeOwnerApi.md#createUser) | **POST** /users | Create Home owner



## createUser

Create Home owner

Create a home owner user. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored.
Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.
Using this API to create both homeowner as well as a company user. If you want to create company user, then pass company_id inside the user object.

### Example

```bash
 createUser
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**CreateUserRequest**](CreateUserRequest.md) |  | [optional]

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

