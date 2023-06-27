# EnphaseOpenAPI\Monitoring\SystemConfigurationsApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getSystemBatterySettings()**](SystemConfigurationsApi.md#getSystemBatterySettings) | **GET** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system |
| [**getSystemGridStatusSettings()**](SystemConfigurationsApi.md#getSystemGridStatusSettings) | **GET** /systems/config/{system_id}/grid_status | Returns the current grid status of a system. |
| [**getSystemLoadControlSettings()**](SystemConfigurationsApi.md#getSystemLoadControlSettings) | **GET** /systems/config/{system_id}/load_control | Returns the current load control settings of a system |
| [**getSystemStormGuardSettings()**](SystemConfigurationsApi.md#getSystemStormGuardSettings) | **GET** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system |
| [**updateSystemBatterySettings()**](SystemConfigurationsApi.md#updateSystemBatterySettings) | **PUT** /systems/config/{system_id}/battery_settings | Updates the current battery settings of a system |
| [**updateSystemLoadControlSettings()**](SystemConfigurationsApi.md#updateSystemLoadControlSettings) | **PUT** /systems/config/{system_id}/load_control | Updates the current load control settings of a system |
| [**updateSystemStormGuardSettings()**](SystemConfigurationsApi.md#updateSystemStormGuardSettings) | **PUT** /systems/config/{system_id}/storm_guard | Updates the current storm guard settings of a system |


## `getSystemBatterySettings()`

```php
getSystemBatterySettings($system_id): \EnphaseOpenAPI\Monitoring\Model\BatterySettings
```

Returns the current battery settings of a system

Returns the current battery settings of a system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemConfigurationsApi(
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

[**\EnphaseOpenAPI\Monitoring\Model\BatterySettings**](../Model/BatterySettings.md)

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
getSystemGridStatusSettings($system_id): \EnphaseOpenAPI\Monitoring\Model\GetSystemGridStatusSettingsResponse
```

Returns the current grid status of a system.

Returns the current grid status of a system. Please note that the status returned in the response is not real-time and is updated only after the IQ Gateway sends a new report to the Enphase cloud.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemConfigurationsApi(
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

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemGridStatusSettingsResponse**](../Model/GetSystemGridStatusSettingsResponse.md)

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
getSystemLoadControlSettings($system_id): \EnphaseOpenAPI\Monitoring\Model\LoadControlSettings
```

Returns the current load control settings of a system

Returns the current load control settings of a system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemConfigurationsApi(
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

[**\EnphaseOpenAPI\Monitoring\Model\LoadControlSettings**](../Model/LoadControlSettings.md)

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
getSystemStormGuardSettings($system_id): \EnphaseOpenAPI\Monitoring\Model\StormGuardSettings
```

Returns the current storm guard settings of a system

Returns the current storm guard settings of a system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemConfigurationsApi(
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

[**\EnphaseOpenAPI\Monitoring\Model\StormGuardSettings**](../Model/StormGuardSettings.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSystemBatterySettings()`

```php
updateSystemBatterySettings($system_id, $battery_settings): \EnphaseOpenAPI\Monitoring\Model\BatterySettings
```

Updates the current battery settings of a system

Updates the current battery settings of a system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemConfigurationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$battery_settings = new \EnphaseOpenAPI\Monitoring\Model\UpdateSystemBatterySettingsRequest(); // \EnphaseOpenAPI\Monitoring\Model\UpdateSystemBatterySettingsRequest

try {
    $result = $apiInstance->updateSystemBatterySettings($system_id, $battery_settings);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemConfigurationsApi->updateSystemBatterySettings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **battery_settings** | [**\EnphaseOpenAPI\Monitoring\Model\UpdateSystemBatterySettingsRequest**](../Model/UpdateSystemBatterySettingsRequest.md)|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\BatterySettings**](../Model/BatterySettings.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSystemLoadControlSettings()`

```php
updateSystemLoadControlSettings($system_id, $update_system_load_control_settings_request): \EnphaseOpenAPI\Monitoring\Model\LoadControlSettings
```

Updates the current load control settings of a system

Updates the current load control settings of a system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemConfigurationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$update_system_load_control_settings_request = new \EnphaseOpenAPI\Monitoring\Model\UpdateSystemLoadControlSettingsRequest(); // \EnphaseOpenAPI\Monitoring\Model\UpdateSystemLoadControlSettingsRequest

try {
    $result = $apiInstance->updateSystemLoadControlSettings($system_id, $update_system_load_control_settings_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemConfigurationsApi->updateSystemLoadControlSettings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **update_system_load_control_settings_request** | [**\EnphaseOpenAPI\Monitoring\Model\UpdateSystemLoadControlSettingsRequest**](../Model/UpdateSystemLoadControlSettingsRequest.md)|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\LoadControlSettings**](../Model/LoadControlSettings.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSystemStormGuardSettings()`

```php
updateSystemStormGuardSettings($system_id, $storm_guard): \EnphaseOpenAPI\Monitoring\Model\StormGuardSettings
```

Updates the current storm guard settings of a system

Updates the current storm guard status of a system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Monitoring\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemConfigurationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$storm_guard = new \EnphaseOpenAPI\Monitoring\Model\UpdateSystemStormGuardSettingsRequest(); // \EnphaseOpenAPI\Monitoring\Model\UpdateSystemStormGuardSettingsRequest

try {
    $result = $apiInstance->updateSystemStormGuardSettings($system_id, $storm_guard);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemConfigurationsApi->updateSystemStormGuardSettings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **storm_guard** | [**\EnphaseOpenAPI\Monitoring\Model\UpdateSystemStormGuardSettingsRequest**](../Model/UpdateSystemStormGuardSettingsRequest.md)|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\StormGuardSettings**](../Model/StormGuardSettings.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
