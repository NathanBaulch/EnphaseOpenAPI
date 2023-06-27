# EnphaseOpenAPI\Commissioning\TariffApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getSystemTariffSettings()**](TariffApi.md#getSystemTariffSettings) | **GET** /systems/config/{system_id}/tariff | Get tariff for a system |
| [**updateSystemTariffSettings()**](TariffApi.md#updateSystemTariffSettings) | **PUT** /systems/config/{system_id}/tariff | Update tariff for a system |


## `getSystemTariffSettings()`

```php
getSystemTariffSettings($system_id): \EnphaseOpenAPI\Commissioning\Model\TariffSettings
```

Get tariff for a system

Get tariff for a system.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\TariffApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.

try {
    $result = $apiInstance->getSystemTariffSettings($system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TariffApi->getSystemTariffSettings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\TariffSettings**](../Model/TariffSettings.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSystemTariffSettings()`

```php
updateSystemTariffSettings($system_id, $params): \EnphaseOpenAPI\Commissioning\Model\UpdateSystemTariffSettingsResponse
```

Update tariff for a system

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\TariffApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$params = new \EnphaseOpenAPI\Commissioning\Model\TariffSettings(); // \EnphaseOpenAPI\Commissioning\Model\TariffSettings

try {
    $result = $apiInstance->updateSystemTariffSettings($system_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TariffApi->updateSystemTariffSettings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **params** | **\EnphaseOpenAPI\Commissioning\Model\TariffSettings**|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\UpdateSystemTariffSettingsResponse**](../Model/UpdateSystemTariffSettingsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/text`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)