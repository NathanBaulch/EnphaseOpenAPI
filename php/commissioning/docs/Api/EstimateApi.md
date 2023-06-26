# EnphaseOpenAPI\Commissioning\EstimateApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getActivationEstimate()**](EstimateApi.md#getActivationEstimate) | **GET** /activations/{activation_id}/estimate | Returns the estimate for this system. |
| [**updateActivationEstimate()**](EstimateApi.md#updateActivationEstimate) | **PUT** /activations/{activation_id}/estimate | Update the estimate for this system. |


## `getActivationEstimate()`

```php
getActivationEstimate($activation_id): \EnphaseOpenAPI\Commissioning\Model\SystemEstimate
```

Returns the estimate for this system.

Provides access to production estimates for a system. An estimate includes the annual degradation factor for the system as well as estimated production, in kWh, for each month. By default degrade_factor value is 0.5 and month_estimates value is an empty array.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\EstimateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Activation ID.

try {
    $result = $apiInstance->getActivationEstimate($activation_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EstimateApi->getActivationEstimate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Activation ID. | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\SystemEstimate**](../Model/SystemEstimate.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateActivationEstimate()`

```php
updateActivationEstimate($activation_id, $params): \EnphaseOpenAPI\Commissioning\Model\SystemEstimate
```

Update the estimate for this system.

Updates the estimate for this system.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\EstimateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activation_id = 56; // int | Activation ID.
$params = new \EnphaseOpenAPI\Commissioning\Model\UpdateActivationEstimateRequest(); // \EnphaseOpenAPI\Commissioning\Model\UpdateActivationEstimateRequest

try {
    $result = $apiInstance->updateActivationEstimate($activation_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EstimateApi->updateActivationEstimate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activation_id** | **int**| Activation ID. | |
| **params** | [**\EnphaseOpenAPI\Commissioning\Model\UpdateActivationEstimateRequest**](../Model/UpdateActivationEstimateRequest.md)|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\SystemEstimate**](../Model/SystemEstimate.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
