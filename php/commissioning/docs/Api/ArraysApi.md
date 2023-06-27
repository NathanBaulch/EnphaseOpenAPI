# EnphaseOpenAPI\Commissioning\ArraysApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**deleteSystemArray()**](ArraysApi.md#deleteSystemArray) | **DELETE** /partner/systems/{system_id}/arrays/{array_id} | Delete an array by ID |
| [**getSystemArray()**](ArraysApi.md#getSystemArray) | **GET** /partner/systems/{system_id}/arrays/{array_id} | Fetch array details by ID |
| [**getSystemArrays()**](ArraysApi.md#getSystemArrays) | **GET** /partner/systems/{system_id}/arrays | Fetch particular system Array details |
| [**updateSystemArray()**](ArraysApi.md#updateSystemArray) | **PUT** /partner/systems/{system_id}/arrays/{array_id} | Update particular system array details |
| [**updateSystemArrays()**](ArraysApi.md#updateSystemArrays) | **PUT** /partner/systems/{system_id}/arrays | Update all arrays for system |


## `deleteSystemArray()`

```php
deleteSystemArray($system_id, $array_id): \EnphaseOpenAPI\Commissioning\Model\DeleteSystemArrayResponse
```

Delete an array by ID

Delete an array by ID.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ArraysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | System ID.
$array_id = 56; // int | Array ID.

try {
    $result = $apiInstance->deleteSystemArray($system_id, $array_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ArraysApi->deleteSystemArray: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| System ID. | |
| **array_id** | **int**| Array ID. | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\DeleteSystemArrayResponse**](../Model/DeleteSystemArrayResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemArray()`

```php
getSystemArray($system_id, $array_id): \EnphaseOpenAPI\Commissioning\Model\SystemArray
```

Fetch array details by ID

Fetch array details by ID.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ArraysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | System ID.
$array_id = 56; // int | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Fetch particular system Array details' endpoint.

try {
    $result = $apiInstance->getSystemArray($system_id, $array_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ArraysApi->getSystemArray: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| System ID. | |
| **array_id** | **int**| Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Fetch particular system Array details&#39; endpoint. | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\SystemArray**](../Model/SystemArray.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemArrays()`

```php
getSystemArrays($system_id): \EnphaseOpenAPI\Commissioning\Model\SystemArrays
```

Fetch particular system Array details

Fetch particular system Array details.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ArraysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | System ID.

try {
    $result = $apiInstance->getSystemArrays($system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ArraysApi->getSystemArrays: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| System ID. | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\SystemArrays**](../Model/SystemArrays.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSystemArray()`

```php
updateSystemArray($system_id, $array_id, $params): \EnphaseOpenAPI\Commissioning\Model\SystemArray
```

Update particular system array details

Update particular system array details. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall in arrays, the top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ArraysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | System ID.
$array_id = 56; // int | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Update all Arrays' endpoint.
$params = new \EnphaseOpenAPI\Commissioning\Model\ArrayParams(); // \EnphaseOpenAPI\Commissioning\Model\ArrayParams

try {
    $result = $apiInstance->updateSystemArray($system_id, $array_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ArraysApi->updateSystemArray: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| System ID. | |
| **array_id** | **int**| Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Update all Arrays&#39; endpoint. | |
| **params** | **\EnphaseOpenAPI\Commissioning\Model\ArrayParams**|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\SystemArray**](../Model/SystemArray.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/text`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSystemArrays()`

```php
updateSystemArrays($system_id, $params): \EnphaseOpenAPI\Commissioning\Model\SystemArrays
```

Update all arrays for system

Update all arrays for system. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall the arrays top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\ArraysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | System ID.
$params = new \EnphaseOpenAPI\Commissioning\Model\UpdateSystemArraysRequest(); // \EnphaseOpenAPI\Commissioning\Model\UpdateSystemArraysRequest

try {
    $result = $apiInstance->updateSystemArrays($system_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ArraysApi->updateSystemArrays: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| System ID. | |
| **params** | [**\EnphaseOpenAPI\Commissioning\Model\UpdateSystemArraysRequest**](../Model/UpdateSystemArraysRequest.md)|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\SystemArrays**](../Model/SystemArrays.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/text`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
