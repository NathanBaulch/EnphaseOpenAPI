# OpenAPI\Client\PvModelsApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPvManufacturerModels()**](PvModelsApi.md#getPvManufacturerModels) | **GET** /pv_manufacturers/{pv_manufacturer_id}/pv_models | Returns PV module manufacturers |


## `getPvManufacturerModels()`

```php
getPvManufacturerModels($pv_manufacturer_id): \OpenAPI\Client\Model\GetPvManufacturerModelsResponse
```

Returns PV module manufacturers

Returns information about the PV modules known in Enlighten.

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


$apiInstance = new OpenAPI\Client\Api\PvModelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$pv_manufacturer_id = 56; // int | Pv manufacturer ID.

try {
    $result = $apiInstance->getPvManufacturerModels($pv_manufacturer_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PvModelsApi->getPvManufacturerModels: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pv_manufacturer_id** | **int**| Pv manufacturer ID. | |

### Return type

[**\OpenAPI\Client\Model\GetPvManufacturerModelsResponse**](../Model/GetPvManufacturerModelsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
