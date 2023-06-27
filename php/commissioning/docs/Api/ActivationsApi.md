# EnphaseOpenAPI\Commissioning\ActivationsApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createPartnerActivation()**](ActivationsApi.md#createPartnerActivation) | **POST** /partner/activations | Create new activation |
| [**deleteActivation()**](ActivationsApi.md#deleteActivation) | **DELETE** /partner/activations/{activation_id} | Delete an activation by ID |
| [**getActivationOpsProductionMode()**](ActivationsApi.md#getActivationOpsProductionMode) | **GET** /activations/{activation_id}/ops/production_mode | Get production mode |
| [**getPartnerActivation()**](ActivationsApi.md#getPartnerActivation) | **GET** /partner/activations/{activation_id} | Retrieves an Activation by ID |
| [**getPartnerActivations()**](ActivationsApi.md#getPartnerActivations) | **GET** /partner/activations | List of Activations |
| [**grantActivationUserAccess()**](ActivationsApi.md#grantActivationUserAccess) | **POST** /activations/{activation_id}/users/{user_id} | Grant Access |
| [**revokeActivationUserAccess()**](ActivationsApi.md#revokeActivationUserAccess) | **DELETE** /activations/{activation_id}/users/{user_id} | Revoke Access |
| [**setActivationOpsProductionMode()**](ActivationsApi.md#setActivationOpsProductionMode) | **POST** /activations/{activation_id}/ops/production_mode | Set production mode |
| [**updatePartnerActivation()**](ActivationsApi.md#updatePartnerActivation) | **PUT** /partner/activations/{activation_id} | Update an activation. |


## `createPartnerActivation()`

```php
createPartnerActivation($params): \EnphaseOpenAPI\Commissioning\Model\System
```

Create new activation

Create new activation.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$params = new \EnphaseOpenAPI\Commissioning\Model\SystemParams(); // \EnphaseOpenAPI\Commissioning\Model\SystemParams

try {
    $result = $apiInstance->createPartnerActivation($params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->createPartnerActivation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **params** | **\EnphaseOpenAPI\Commissioning\Model\SystemParams**|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\System**](../Model/System.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteActivation()`

```php
deleteActivation($activation_id): \EnphaseOpenAPI\Commissioning\Model\DeleteActivationResponse
```

Delete an activation by ID

To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Enlighten ID of the activation(system).

try {
    $result = $apiInstance->deleteActivation($activation_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->deleteActivation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Enlighten ID of the activation(system). | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\DeleteActivationResponse**](../Model/DeleteActivationResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getActivationOpsProductionMode()`

```php
getActivationOpsProductionMode($activation_id): \EnphaseOpenAPI\Commissioning\Model\GetActivationOpsProductionModeResponse
```

Get production mode

Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Enlighten ID of the activation(system). System-generated.

try {
    $result = $apiInstance->getActivationOpsProductionMode($activation_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->getActivationOpsProductionMode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Enlighten ID of the activation(system). System-generated. | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\GetActivationOpsProductionModeResponse**](../Model/GetActivationOpsProductionModeResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPartnerActivation()`

```php
getPartnerActivation($activation_id, $expand): \EnphaseOpenAPI\Commissioning\Model\System
```

Retrieves an Activation by ID

By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner's name within the system hash, the response includes detailed information about the owner by using expand=owner. You can also expand the owner's company by using expand=owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand=host will include details about the system host. You can also expand the host's company by using expand=host.company. The response now includes information about the host and the company he belongs to.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Enlighten ID of the activation(system). System-generated.
$expand = new \EnphaseOpenAPI\Commissioning\Model\SystemExpandEnum(); // SystemExpandEnum | Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand.

try {
    $result = $apiInstance->getPartnerActivation($activation_id, $expand);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->getPartnerActivation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Enlighten ID of the activation(system). System-generated. | |
| **expand** | [**SystemExpandEnum**](../Model/.md)| Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand. | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\System**](../Model/System.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPartnerActivations()`

```php
getPartnerActivations($next, $limit, $stage, $reference, $installer_id, $system_name, $address, $region, $search): \EnphaseOpenAPI\Commissioning\Model\GetPartnerActivationsResponse
```

List of Activations

Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn't exist, API will return an empty array.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$next = 'next_example'; // string | If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field.
$limit = 56; // int | There is a limit to the number of activations which can be returned at one time.
$stage = new \EnphaseOpenAPI\Commissioning\Model\SystemStageEnum(); // SystemStageEnum | Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value.
$reference = 'reference_example'; // string | Filter activations by company reference.
$installer_id = 56; // int | Filter activations by installer ID.
$system_name = 'system_name_example'; // string | Filter activations by system name.
$address = 'address_example'; // string | Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation.
$region = 'region_example'; // string | Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'.
$search = 'search_example'; // string | Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation.

try {
    $result = $apiInstance->getPartnerActivations($next, $limit, $stage, $reference, $installer_id, $system_name, $address, $region, $search);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->getPartnerActivations: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **next** | **string**| If the first request does not return a full list, use the &#39;next&#39; attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the &#39;next&#39; field. | [optional] |
| **limit** | **int**| There is a limit to the number of activations which can be returned at one time. | [optional] |
| **stage** | [**SystemStageEnum**](../Model/.md)| Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage&#x3D;1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value. | [optional] |
| **reference** | **string**| Filter activations by company reference. | [optional] |
| **installer_id** | **int**| Filter activations by installer ID. | [optional] |
| **system_name** | **string**| Filter activations by system name. | [optional] |
| **address** | **string**| Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation. | [optional] |
| **region** | **string**| Filter activations by region. Provide two latitude, longitude values to find activations between them. Format &#39;latitude1,longitude1,latitude2,longitude2&#39; e.g value &#39;44.968046,-94.420307,44.33328,-89.132008&#39;. | [optional] |
| **search** | **string**| Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation. | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\GetPartnerActivationsResponse**](../Model/GetPartnerActivationsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `grantActivationUserAccess()`

```php
grantActivationUserAccess($activation_id, $user_id): \EnphaseOpenAPI\Commissioning\Model\GrantActivationUserAccessResponse
```

Grant Access

Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Enlighten ID of the activation(system).
$user_id = 56; // int | Enlighten ID of the user which you want to grant access.

try {
    $result = $apiInstance->grantActivationUserAccess($activation_id, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->grantActivationUserAccess: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Enlighten ID of the activation(system). | |
| **user_id** | **int**| Enlighten ID of the user which you want to grant access. | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\GrantActivationUserAccessResponse**](../Model/GrantActivationUserAccessResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `revokeActivationUserAccess()`

```php
revokeActivationUserAccess($activation_id, $user_id): \EnphaseOpenAPI\Commissioning\Model\RevokeActivationUserAccessResponse
```

Revoke Access

Revokes a user's permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Enlighten ID of the activation(system).
$user_id = 56; // int | Enlighten ID of the user which you want to revoke the access.

try {
    $result = $apiInstance->revokeActivationUserAccess($activation_id, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->revokeActivationUserAccess: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Enlighten ID of the activation(system). | |
| **user_id** | **int**| Enlighten ID of the user which you want to revoke the access. | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\RevokeActivationUserAccessResponse**](../Model/RevokeActivationUserAccessResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `setActivationOpsProductionMode()`

```php
setActivationOpsProductionMode($activation_id, $params): \EnphaseOpenAPI\Commissioning\Model\SetActivationOpsProductionModeResponse
```

Set production mode

Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Enlighten ID of the activation(system). System-generated.
$params = new \EnphaseOpenAPI\Commissioning\Model\SetActivationOpsProductionModeRequest(); // \EnphaseOpenAPI\Commissioning\Model\SetActivationOpsProductionModeRequest

try {
    $result = $apiInstance->setActivationOpsProductionMode($activation_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->setActivationOpsProductionMode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Enlighten ID of the activation(system). System-generated. | |
| **params** | [**\EnphaseOpenAPI\Commissioning\Model\SetActivationOpsProductionModeRequest**](../Model/SetActivationOpsProductionModeRequest.md)|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\SetActivationOpsProductionModeResponse**](../Model/SetActivationOpsProductionModeResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updatePartnerActivation()`

```php
updatePartnerActivation($activation_id, $params): \EnphaseOpenAPI\Commissioning\Model\System
```

Update an activation.

Update an activation.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ActivationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Enlighten ID of the activation(system). System-generated.
$params = new \EnphaseOpenAPI\Commissioning\Model\SystemParams(); // \EnphaseOpenAPI\Commissioning\Model\SystemParams

try {
    $result = $apiInstance->updatePartnerActivation($activation_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActivationsApi->updatePartnerActivation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Enlighten ID of the activation(system). System-generated. | |
| **params** | **\EnphaseOpenAPI\Commissioning\Model\SystemParams**|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\System**](../Model/System.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
