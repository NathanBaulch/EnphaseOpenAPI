# OpenAPI\Client\MetersApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getSystemMeter()**](MetersApi.md#getSystemMeter) | **GET** /systems/{system_id}/meters/{serial_number} | Returns the requested meter detail. |
| [**setActivationMeterStatus()**](MetersApi.md#setActivationMeterStatus) | **POST** /activations/{activation_id}/meters/{serial_number}/meter_control | Enable or Disable the meters. |
| [**updateSystemMeter()**](MetersApi.md#updateSystemMeter) | **PUT** /systems/{system_id}/meters/{serial_number} | Update the operational date of a meter by serial number. |


## `getSystemMeter()`

```php
getSystemMeter($system_id, $serial_number): \OpenAPI\Client\Model\GetSystemMeterResponse
```

Returns the requested meter detail.

Returns the requested meter by serial number. You must have access to the requested system and meter; otherwise a 401 is returned.

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


$apiInstance = new OpenAPI\Client\Api\MetersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | System ID.
$serial_number = 'serial_number_example'; // string | Meter serial number.

try {
    $result = $apiInstance->getSystemMeter($system_id, $serial_number);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MetersApi->getSystemMeter: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| System ID. | |
| **serial_number** | **string**| Meter serial number. | |

### Return type

[**\OpenAPI\Client\Model\GetSystemMeterResponse**](../Model/GetSystemMeterResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `setActivationMeterStatus()`

```php
setActivationMeterStatus($activation_id, $serial_number, $params): \OpenAPI\Client\Model\SetActivationMeterStatusResponse
```

Enable or Disable the meters.

Enable or Disable the meters. You must have access to the requested system and meter; otherwise a 401 is returned.

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


$apiInstance = new OpenAPI\Client\Api\MetersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Activation ID.
$serial_number = 'serial_number_example'; // string | Meter serial number.
$params = new \OpenAPI\Client\Model\SetActivationMeterStatusRequest(); // \OpenAPI\Client\Model\SetActivationMeterStatusRequest

try {
    $result = $apiInstance->setActivationMeterStatus($activation_id, $serial_number, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MetersApi->setActivationMeterStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Activation ID. | |
| **serial_number** | **string**| Meter serial number. | |
| **params** | [**\OpenAPI\Client\Model\SetActivationMeterStatusRequest**](../Model/SetActivationMeterStatusRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\SetActivationMeterStatusResponse**](../Model/SetActivationMeterStatusResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSystemMeter()`

```php
updateSystemMeter($system_id, $serial_number, $operational_date): \OpenAPI\Client\Model\UpdateSystemMeterResponse
```

Update the operational date of a meter by serial number.

Update the operational date of a meter. You must have access to the requested system and meter; otherwise a 401 is returned.

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


$apiInstance = new OpenAPI\Client\Api\MetersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | System ID.
$serial_number = 'serial_number_example'; // string | Meter serial number.
$operational_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Operational date in the following format YYYY-MM-DD.

try {
    $result = $apiInstance->updateSystemMeter($system_id, $serial_number, $operational_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MetersApi->updateSystemMeter: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| System ID. | |
| **serial_number** | **string**| Meter serial number. | |
| **operational_date** | **\DateTime**| Operational date in the following format YYYY-MM-DD. | [optional] |

### Return type

[**\OpenAPI\Client\Model\UpdateSystemMeterResponse**](../Model/UpdateSystemMeterResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
