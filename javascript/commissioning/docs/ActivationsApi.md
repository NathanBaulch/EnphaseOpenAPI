# TheEnphaseCommissioningApi.ActivationsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPartnerActivation**](ActivationsApi.md#createPartnerActivation) | **POST** /partner/activations | Create new activation
[**deleteActivation**](ActivationsApi.md#deleteActivation) | **DELETE** /partner/activations/{activation_id} | Delete an activation by ID
[**getActivationOpsProductionMode**](ActivationsApi.md#getActivationOpsProductionMode) | **GET** /activations/{activation_id}/ops/production_mode | Get production mode
[**getPartnerActivation**](ActivationsApi.md#getPartnerActivation) | **GET** /partner/activations/{activation_id} | Retrieves an Activation by ID
[**getPartnerActivations**](ActivationsApi.md#getPartnerActivations) | **GET** /partner/activations | List of Activations
[**grantActivationUserAccess**](ActivationsApi.md#grantActivationUserAccess) | **POST** /activations/{activation_id}/users/{user_id} | Grant Access
[**revokeActivationUserAccess**](ActivationsApi.md#revokeActivationUserAccess) | **DELETE** /activations/{activation_id}/users/{user_id} | Revoke Access
[**setActivationOpsProductionMode**](ActivationsApi.md#setActivationOpsProductionMode) | **POST** /activations/{activation_id}/ops/production_mode | Set production mode
[**updatePartnerActivation**](ActivationsApi.md#updatePartnerActivation) | **PUT** /partner/activations/{activation_id} | Update an activation.



## createPartnerActivation

> Activation createPartnerActivation(opts)

Create new activation

Create new activation.

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

let apiInstance = new TheEnphaseCommissioningApi.ActivationsApi();
let opts = {
  'params': new TheEnphaseCommissioningApi.SystemParams() // SystemParams | 
};
apiInstance.createPartnerActivation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **SystemParams**|  | [optional] 

### Return type

[**Activation**](Activation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteActivation

> DeleteActivationResponse deleteActivation(activationId)

Delete an activation by ID

To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it.

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

let apiInstance = new TheEnphaseCommissioningApi.ActivationsApi();
let activationId = 56; // Number | Enlighten ID of the activation(system).
apiInstance.deleteActivation(activationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Enlighten ID of the activation(system). | 

### Return type

[**DeleteActivationResponse**](DeleteActivationResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivationOpsProductionMode

> GetActivationOpsProductionModeResponse getActivationOpsProductionMode(activationId)

Get production mode

Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

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

let apiInstance = new TheEnphaseCommissioningApi.ActivationsApi();
let activationId = 56; // Number | Enlighten ID of the activation(system). System-generated.
apiInstance.getActivationOpsProductionMode(activationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Enlighten ID of the activation(system). System-generated. | 

### Return type

[**GetActivationOpsProductionModeResponse**](GetActivationOpsProductionModeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPartnerActivation

> Activation getPartnerActivation(activationId, opts)

Retrieves an Activation by ID

By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner&#39;s name within the system hash, the response includes detailed information about the owner by using expand&#x3D;owner. You can also expand the owner&#39;s company by using expand&#x3D;owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand&#x3D;host will include details about the system host. You can also expand the host&#39;s company by using expand&#x3D;host.company. The response now includes information about the host and the company he belongs to.

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

let apiInstance = new TheEnphaseCommissioningApi.ActivationsApi();
let activationId = 56; // Number | Enlighten ID of the activation(system). System-generated.
let opts = {
  'expand': new TheEnphaseCommissioningApi.SystemExpandEnum() // SystemExpandEnum | Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand.
};
apiInstance.getPartnerActivation(activationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Enlighten ID of the activation(system). System-generated. | 
 **expand** | [**SystemExpandEnum**](.md)| Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand. | [optional] 

### Return type

[**Activation**](Activation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPartnerActivations

> GetPartnerActivationsResponse getPartnerActivations(opts)

List of Activations

Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the &#39;next&#39; attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn&#39;t exist, API will return an empty array.

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

let apiInstance = new TheEnphaseCommissioningApi.ActivationsApi();
let opts = {
  'next': "next_example", // String | If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field.
  'limit': 56, // Number | There is a limit to the number of activations which can be returned at one time.
  'stage': new TheEnphaseCommissioningApi.SystemStageEnum(), // SystemStageEnum | Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value.
  'reference': "reference_example", // String | Filter activations by company reference.
  'installerId': 56, // Number | Filter activations by installer ID.
  'systemName': "systemName_example", // String | Filter activations by system name.
  'address': "address_example", // String | Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation.
  'region': "region_example", // String | Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'.
  'search': "search_example" // String | Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation.
};
apiInstance.getPartnerActivations(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next** | **String**| If the first request does not return a full list, use the &#39;next&#39; attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the &#39;next&#39; field. | [optional] 
 **limit** | **Number**| There is a limit to the number of activations which can be returned at one time. | [optional] 
 **stage** | [**SystemStageEnum**](.md)| Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage&#x3D;1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value. | [optional] 
 **reference** | **String**| Filter activations by company reference. | [optional] 
 **installerId** | **Number**| Filter activations by installer ID. | [optional] 
 **systemName** | **String**| Filter activations by system name. | [optional] 
 **address** | **String**| Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation. | [optional] 
 **region** | **String**| Filter activations by region. Provide two latitude, longitude values to find activations between them. Format &#39;latitude1,longitude1,latitude2,longitude2&#39; e.g value &#39;44.968046,-94.420307,44.33328,-89.132008&#39;. | [optional] 
 **search** | **String**| Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation. | [optional] 

### Return type

[**GetPartnerActivationsResponse**](GetPartnerActivationsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## grantActivationUserAccess

> GrantActivationUserAccessResponse grantActivationUserAccess(activationId, userId)

Grant Access

Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

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

let apiInstance = new TheEnphaseCommissioningApi.ActivationsApi();
let activationId = 56; // Number | Enlighten ID of the activation(system).
let userId = 56; // Number | Enlighten ID of the user which you want to grant access.
apiInstance.grantActivationUserAccess(activationId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Enlighten ID of the activation(system). | 
 **userId** | **Number**| Enlighten ID of the user which you want to grant access. | 

### Return type

[**GrantActivationUserAccessResponse**](GrantActivationUserAccessResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeActivationUserAccess

> RevokeActivationUserAccessResponse revokeActivationUserAccess(activationId, userId)

Revoke Access

Revokes a user&#39;s permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

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

let apiInstance = new TheEnphaseCommissioningApi.ActivationsApi();
let activationId = 56; // Number | Enlighten ID of the activation(system).
let userId = 56; // Number | Enlighten ID of the user which you want to revoke the access.
apiInstance.revokeActivationUserAccess(activationId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Enlighten ID of the activation(system). | 
 **userId** | **Number**| Enlighten ID of the user which you want to revoke the access. | 

### Return type

[**RevokeActivationUserAccessResponse**](RevokeActivationUserAccessResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setActivationOpsProductionMode

> SetActivationOpsProductionModeResponse setActivationOpsProductionMode(activationId, opts)

Set production mode

Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

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

let apiInstance = new TheEnphaseCommissioningApi.ActivationsApi();
let activationId = 56; // Number | Enlighten ID of the activation(system). System-generated.
let opts = {
  'params': new TheEnphaseCommissioningApi.SetActivationOpsProductionModeRequest() // SetActivationOpsProductionModeRequest | 
};
apiInstance.setActivationOpsProductionMode(activationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Enlighten ID of the activation(system). System-generated. | 
 **params** | [**SetActivationOpsProductionModeRequest**](SetActivationOpsProductionModeRequest.md)|  | [optional] 

### Return type

[**SetActivationOpsProductionModeResponse**](SetActivationOpsProductionModeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePartnerActivation

> Activation updatePartnerActivation(activationId, opts)

Update an activation.

Update an activation.

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

let apiInstance = new TheEnphaseCommissioningApi.ActivationsApi();
let activationId = 56; // Number | Enlighten ID of the activation(system). System-generated.
let opts = {
  'params': new TheEnphaseCommissioningApi.SystemParams() // SystemParams | 
};
apiInstance.updatePartnerActivation(activationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| Enlighten ID of the activation(system). System-generated. | 
 **params** | **SystemParams**|  | [optional] 

### Return type

[**Activation**](Activation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

