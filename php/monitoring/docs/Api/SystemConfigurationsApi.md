# OpenAPI\Client\SystemConfigurationsApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getSystemBatterySettings()**](SystemConfigurationsApi.md#getSystemBatterySettings) | **GET** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system |
| [**getSystemGridStatusSettings()**](SystemConfigurationsApi.md#getSystemGridStatusSettings) | **GET** /systems/config/{system_id}/grid_status | Returns the current grid status settings of a system |
| [**getSystemLoadControlSettings()**](SystemConfigurationsApi.md#getSystemLoadControlSettings) | **GET** /systems/config/{system_id}/load_control | Returns the current load control settings of a system |
| [**getSystemStormGuardSettings()**](SystemConfigurationsApi.md#getSystemStormGuardSettings) | **GET** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system |


## `getSystemBatterySettings()`

```php
getSystemBatterySettings($system_id): \OpenAPI\Client\Model\GetSystemBatterySettingsResponse
```

Returns the current battery settings of a system

Returns the current battery settings of a system.

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


$apiInstance = new OpenAPI\Client\Api\SystemConfigurationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.

try {
    $result = $apiInstance->getSystemBatterySettings($system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemConfigurationsApi->getSystemBatterySettings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |

### Return type

[**\OpenAPI\Client\Model\GetSystemBatterySettingsResponse**](../Model/GetSystemBatterySettingsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemGridStatusSettings()`

```php
getSystemGridStatusSettings($system_id): \OpenAPI\Client\Model\GetSystemGridStatusSettingsResponse
```

Returns the current grid status settings of a system

Returns the current grid status settings of a system.

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


$apiInstance = new OpenAPI\Client\Api\SystemConfigurationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.

try {
    $result = $apiInstance->getSystemGridStatusSettings($system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemConfigurationsApi->getSystemGridStatusSettings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |

### Return type

[**\OpenAPI\Client\Model\GetSystemGridStatusSettingsResponse**](../Model/GetSystemGridStatusSettingsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemLoadControlSettings()`

```php
getSystemLoadControlSettings($system_id): \OpenAPI\Client\Model\GetSystemLoadControlSettingsResponse
```

Returns the current load control settings of a system

Returns the current load control settings of a system.

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


$apiInstance = new OpenAPI\Client\Api\SystemConfigurationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.

try {
    $result = $apiInstance->getSystemLoadControlSettings($system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemConfigurationsApi->getSystemLoadControlSettings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |

### Return type

[**\OpenAPI\Client\Model\GetSystemLoadControlSettingsResponse**](../Model/GetSystemLoadControlSettingsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemStormGuardSettings()`

```php
getSystemStormGuardSettings($system_id): \OpenAPI\Client\Model\GetSystemStormGuardSettingsResponse
```

Returns the current storm guard settings of a system

Returns the current storm guard settings of a system.

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


$apiInstance = new OpenAPI\Client\Api\SystemConfigurationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.

try {
    $result = $apiInstance->getSystemStormGuardSettings($system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemConfigurationsApi->getSystemStormGuardSettings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |

### Return type

[**\OpenAPI\Client\Model\GetSystemStormGuardSettingsResponse**](../Model/GetSystemStormGuardSettingsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
