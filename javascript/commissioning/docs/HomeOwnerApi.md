# TheEnphaseCommissioningApi.HomeOwnerApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](HomeOwnerApi.md#createUser) | **POST** /users | Create Home owner



## createUser

> User createUser(opts)

Create Home owner

Create a home owner user. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in &#39;application/x-www-form-urlencoded&#39; format, in this endpoint, key will be &#39;user&#39; and value will be a JSON dictionary of user fields. Using this API to create both homeowner as well as a company user. If you want to create company user, then pass company_id inside the user object.

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

let apiInstance = new TheEnphaseCommissioningApi.HomeOwnerApi();
let opts = {
  'params': new TheEnphaseCommissioningApi.CreateUserRequest() // CreateUserRequest | 
};
apiInstance.createUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**CreateUserRequest**](CreateUserRequest.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

