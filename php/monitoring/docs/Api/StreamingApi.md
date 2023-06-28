# EnphaseOpenAPI\Monitoring\StreamingApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**streamSystemLiveData()**](StreamingApi.md#streamSystemLiveData) | **GET** /systems/{system_id}/live_data | Site Level Live Status |


## `streamSystemLiveData()`

```php
streamSystemLiveData($system_id, $duration): \EnphaseOpenAPI\Monitoring\Model\StreamSystemLiveDataResponse
```

Site Level Live Status

API users can get real time live status data on demand for a given system. User can retrieve real time power for PV Production, Grid Import/Export, Consumption, Battery Charge/Discharge, and Generator. Users can also retrieve Grid Status, Battery Mode, and Battery State of Charge. User will receive the stream for a duration of 30 seconds by default and can configure the time in seconds by passing 'duration' as a header parameter with a minimum value of 30 and maximum value of 300.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\StreamingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$duration = 56; // int | Duration of the stream in seconds. Default=30, Min=30, Max=300, e.g=30.

try {
    $result = $apiInstance->streamSystemLiveData($system_id, $duration);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StreamingApi->streamSystemLiveData: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **duration** | **int**| Duration of the stream in seconds. Default&#x3D;30, Min&#x3D;30, Max&#x3D;300, e.g&#x3D;30. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\StreamSystemLiveDataResponse**](../Model/StreamSystemLiveDataResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/event-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
