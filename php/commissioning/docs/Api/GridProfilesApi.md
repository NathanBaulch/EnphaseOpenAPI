# EnphaseOpenAPI\Commissioning\GridProfilesApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getGridProfiles()**](GridProfilesApi.md#getGridProfiles) | **GET** /grid_profiles | Lists the available profiles |


## `getGridProfiles()`

```php
getGridProfiles(): \EnphaseOpenAPI\Commissioning\Model\GetGridProfilesResponse
```

Lists the available profiles

Lists the available profiles.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\GridProfilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getGridProfiles();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GridProfilesApi->getGridProfiles: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\GetGridProfilesResponse**](../Model/GetGridProfilesResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
