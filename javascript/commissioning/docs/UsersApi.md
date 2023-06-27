# TheEnphaseCommissioningApi.UsersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivationUser**](UsersApi.md#getActivationUser) | **GET** /activations/{activation_id}/users/{user_id} | Returns the requested user
[**getSelfUser**](UsersApi.md#getSelfUser) | **GET** /partner/users/self | Return the current logged in user detail
[**getUser**](UsersApi.md#getUser) | **GET** /partner/users/{user_id} | Returns the requested user
[**searchUsers**](UsersApi.md#searchUsers) | **GET** /users/search | Search user
[**updateActivationUser**](UsersApi.md#updateActivationUser) | **PUT** /activations/{activation_id}/users/{user_id} | Update user
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{user_id} | Update user



## getActivationUser

> User getActivationUser(activationId, userId, opts)

Returns the requested user

You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches.

### Example

```javascript
import TheEnphaseCommissioningApi from 'the_enphase_commissioning_api';
let defaultClient = TheEnphaseCommissioningApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseCommissioningApi.UsersApi();
let activationId = 56; // Number | Enlighten ID of the activation(system). System-generated.
let userId = 56; // Number | Enlighten ID of the user. System-generated.
let opts = {
  'expand': new TheEnphaseCommissioningApi.UserExpandEnum() // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response.
};
apiInstance.getActivationUser(activationId, userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Enlighten ID of the activation(system). System-generated. | 
 **userId** | **Number**| Enlighten ID of the user. System-generated. | 
 **expand** | [**UserExpandEnum**](.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSelfUser

> User getSelfUser(opts)

Return the current logged in user detail

Return the current logged in user detail. Company details are provided in the response only if &#39;expand&#39; parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example

```javascript
import TheEnphaseCommissioningApi from 'the_enphase_commissioning_api';
let defaultClient = TheEnphaseCommissioningApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseCommissioningApi.UsersApi();
let opts = {
  'expand': new TheEnphaseCommissioningApi.UserExpandEnum() // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
};
apiInstance.getSelfUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expand** | [**UserExpandEnum**](.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> User getUser(userId, opts)

Returns the requested user

You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. Company details are provided in the response only if &#39;expand&#39; parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example

```javascript
import TheEnphaseCommissioningApi from 'the_enphase_commissioning_api';
let defaultClient = TheEnphaseCommissioningApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseCommissioningApi.UsersApi();
let userId = 56; // Number | User ID.
let opts = {
  'expand': new TheEnphaseCommissioningApi.UserExpandEnum() // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.
};
apiInstance.getUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| User ID. | 
 **expand** | [**UserExpandEnum**](.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchUsers

> SearchUsersResponse searchUsers(opts)

Search user

Returns the user ID for the given email ID only if the user exists.

### Example

```javascript
import TheEnphaseCommissioningApi from 'the_enphase_commissioning_api';
let defaultClient = TheEnphaseCommissioningApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseCommissioningApi.UsersApi();
let opts = {
  'email': "email_example" // String | Email address of the user.
};
apiInstance.searchUsers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address of the user. | [optional] 

### Return type

[**SearchUsersResponse**](SearchUsersResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateActivationUser

> User updateActivationUser(activationId, userId, opts)

Update user

You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. When &#39;company_id&#39; is passed in the body param or the user company_id is already defined, we will not consider the &#39;enlighten_view&#39; field value and the user will become an enlighten manager. You may change a user&#39;s company if you have access to the user, the old company, and the new company.

### Example

```javascript
import TheEnphaseCommissioningApi from 'the_enphase_commissioning_api';
let defaultClient = TheEnphaseCommissioningApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseCommissioningApi.UsersApi();
let activationId = 56; // Number | Enlighten ID of the activation(system). System-generated.
let userId = 56; // Number | Enlighten ID of the user. System-generated.
let opts = {
  'params': new TheEnphaseCommissioningApi.UserParams() // UserParams | 
};
apiInstance.updateActivationUser(activationId, userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Enlighten ID of the activation(system). System-generated. | 
 **userId** | **Number**| Enlighten ID of the user. System-generated. | 
 **params** | **UserParams**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUser

> User updateUser(userId, opts)

Update user

You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. &#39;company_id&#39; is an optional field. When you passing a &#39;company_id&#39;, the user become an enlighten manager and we will not consider &#39;enlighten_view&#39; field value. You may change a user&#39;s company if you have access to the user, the old company, and the new company.

### Example

```javascript
import TheEnphaseCommissioningApi from 'the_enphase_commissioning_api';
let defaultClient = TheEnphaseCommissioningApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TheEnphaseCommissioningApi.UsersApi();
let userId = 56; // Number | User ID.
let opts = {
  'params': new TheEnphaseCommissioningApi.UserParams() // UserParams | 
};
apiInstance.updateUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| User ID. | 
 **params** | **UserParams**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

