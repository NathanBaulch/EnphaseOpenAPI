# OpenAPI\Client\UsersApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getActivationUser()**](UsersApi.md#getActivationUser) | **GET** /activations/{activation_id}/users/{user_id} | Returns the requested user |
| [**getSelfUser()**](UsersApi.md#getSelfUser) | **GET** /users/self | Return the current logged in user detail |
| [**getUser()**](UsersApi.md#getUser) | **GET** /users/{user_id} | Returns the requested user |
| [**searchUsers()**](UsersApi.md#searchUsers) | **GET** /users/search | Search user |
| [**updateActivationUser()**](UsersApi.md#updateActivationUser) | **PUT** /activations/{activation_id}/users/{user_id} | Update user |
| [**updateUser()**](UsersApi.md#updateUser) | **PUT** /users/{user_id} | Update user |


## `getActivationUser()`

```php
getActivationUser($activation_id, $user_id, $expand): \OpenAPI\Client\Model\User
```

Returns the requested user

You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Enlighten ID of the activation(system). System-generated.
$user_id = 56; // int | Enlighten ID of the user. System-generated.
$expand = new \OpenAPI\Client\Model\UserExpandEnum(); // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response.

try {
    $result = $apiInstance->getActivationUser($activation_id, $user_id, $expand);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getActivationUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Enlighten ID of the activation(system). System-generated. | |
| **user_id** | **int**| Enlighten ID of the user. System-generated. | |
| **expand** | [**UserExpandEnum**](../Model/.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information not include in the response. | [optional] |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSelfUser()`

```php
getSelfUser($expand): \OpenAPI\Client\Model\User
```

Return the current logged in user detail

Return the current logged in user detail. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = new \OpenAPI\Client\Model\UserExpandEnum(); // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.

try {
    $result = $apiInstance->getSelfUser($expand);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getSelfUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | [**UserExpandEnum**](../Model/.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUser()`

```php
getUser($user_id, $expand): \OpenAPI\Client\Model\User
```

Returns the requested user

You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 56; // int | User ID.
$expand = new \OpenAPI\Client\Model\UserExpandEnum(); // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.

try {
    $result = $apiInstance->getUser($user_id, $expand);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **int**| User ID. | |
| **expand** | [**UserExpandEnum**](../Model/.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `searchUsers()`

```php
searchUsers($email): \OpenAPI\Client\Model\SearchUsersResponse
```

Search user

Returns the user ID for the given email ID only if the user exists.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$email = 'email_example'; // string | Email address of the user.

try {
    $result = $apiInstance->searchUsers($email);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->searchUsers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **email** | **string**| Email address of the user. | [optional] |

### Return type

[**\OpenAPI\Client\Model\SearchUsersResponse**](../Model/SearchUsersResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateActivationUser()`

```php
updateActivationUser($activation_id, $user_id, $params): \OpenAPI\Client\Model\User
```

Update user

You must have access to the requested activation and user; otherwise a 401 is returned. The user is requested in the scope of an activation, then it must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. When 'company_id' is passed in the body param or the user company_id is already defined, we will not consider the 'enlighten_view' field value and the user will become an enlighten manager. You may change a user's company if you have access to the user, the old company, and the new company.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Enlighten ID of the activation(system). System-generated.
$user_id = 56; // int | Enlighten ID of the user. System-generated.
$params = new \OpenAPI\Client\Model\UserParams(); // \OpenAPI\Client\Model\UserParams

try {
    $result = $apiInstance->updateActivationUser($activation_id, $user_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->updateActivationUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Enlighten ID of the activation(system). System-generated. | |
| **user_id** | **int**| Enlighten ID of the user. System-generated. | |
| **params** | **\OpenAPI\Client\Model\UserParams**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateUser()`

```php
updateUser($user_id, $params): \OpenAPI\Client\Model\User
```

Update user

You must have permission to view the user. You can view yourself, users you created, and users who belong to your company or its branches. In all other cases, a 401 is returned. 'company_id' is an optional field. When you passing a 'company_id', the user become an enlighten manager and we will not consider 'enlighten_view' field value. You may change a user's company if you have access to the user, the old company, and the new company.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 56; // int | User ID.
$params = new \OpenAPI\Client\Model\UserParams(); // \OpenAPI\Client\Model\UserParams

try {
    $result = $apiInstance->updateUser($user_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->updateUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **int**| User ID. | |
| **params** | **\OpenAPI\Client\Model\UserParams**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
