# OpenAPI\Client\DeviceLevelProductionMonitoringApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getSystemAcbDeviceTelemetry()**](DeviceLevelProductionMonitoringApi.md#getSystemAcbDeviceTelemetry) | **GET** /systems/{system_id}/devices/acbs/{serial_no}/telemetry | Retrieves telemetry for single ACB |
| [**getSystemEnchargeDeviceTelemetry()**](DeviceLevelProductionMonitoringApi.md#getSystemEnchargeDeviceTelemetry) | **GET** /systems/{system_id}/devices/encharges/{serial_no}/telemetry | Retrieves telemetry for single Encharge |
| [**getSystemMicroDeviceTelemetry()**](DeviceLevelProductionMonitoringApi.md#getSystemMicroDeviceTelemetry) | **GET** /systems/{system_id}/devices/micros/{serial_no}/telemetry | Retrieves telemetry for single micro/pcu |


## `getSystemAcbDeviceTelemetry()`

```php
getSystemAcbDeviceTelemetry($system_id, $serial_no, $start_at, $granularity): \OpenAPI\Client\Model\BatteryDeviceTelemetry
```

Retrieves telemetry for single ACB

Retrieves telemetry for single ACB. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

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


$apiInstance = new OpenAPI\Client\Api\DeviceLevelProductionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$serial_no = 'serial_no_example'; // string | Serial number of the acb.
$start_at = 56; // int | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
$granularity = new \OpenAPI\Client\Model\TelemetryGranularityEnum(); // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.

try {
    $result = $apiInstance->getSystemAcbDeviceTelemetry($system_id, $serial_no, $start_at, $granularity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceLevelProductionMonitoringApi->getSystemAcbDeviceTelemetry: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **serial_no** | **string**| Serial number of the acb. | |
| **start_at** | **int**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] |
| **granularity** | [**TelemetryGranularityEnum**](../Model/.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] |

### Return type

[**\OpenAPI\Client\Model\BatteryDeviceTelemetry**](../Model/BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemEnchargeDeviceTelemetry()`

```php
getSystemEnchargeDeviceTelemetry($system_id, $serial_no, $start_at, $granularity): \OpenAPI\Client\Model\BatteryDeviceTelemetry
```

Retrieves telemetry for single Encharge

Retrieves telemetry for single Encharge. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

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


$apiInstance = new OpenAPI\Client\Api\DeviceLevelProductionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$serial_no = 'serial_no_example'; // string | Serial number of the Encharge.
$start_at = 56; // int | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
$granularity = new \OpenAPI\Client\Model\TelemetryGranularityEnum(); // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.

try {
    $result = $apiInstance->getSystemEnchargeDeviceTelemetry($system_id, $serial_no, $start_at, $granularity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceLevelProductionMonitoringApi->getSystemEnchargeDeviceTelemetry: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **serial_no** | **string**| Serial number of the Encharge. | |
| **start_at** | **int**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] |
| **granularity** | [**TelemetryGranularityEnum**](../Model/.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] |

### Return type

[**\OpenAPI\Client\Model\BatteryDeviceTelemetry**](../Model/BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemMicroDeviceTelemetry()`

```php
getSystemMicroDeviceTelemetry($system_id, $serial_no, $start_at, $granularity): \OpenAPI\Client\Model\GetSystemMicroDeviceTelemetryResponse
```

Retrieves telemetry for single micro/pcu

Retrieves telemetry for single micro/pcu. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

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


$apiInstance = new OpenAPI\Client\Api\DeviceLevelProductionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$serial_no = 'serial_no_example'; // string | Serial number of the individual solar Microinverter.
$start_at = 56; // int | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
$granularity = new \OpenAPI\Client\Model\TelemetryGranularityEnum(); // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.

try {
    $result = $apiInstance->getSystemMicroDeviceTelemetry($system_id, $serial_no, $start_at, $granularity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceLevelProductionMonitoringApi->getSystemMicroDeviceTelemetry: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **serial_no** | **string**| Serial number of the individual solar Microinverter. | |
| **start_at** | **int**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] |
| **granularity** | [**TelemetryGranularityEnum**](../Model/.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetSystemMicroDeviceTelemetryResponse**](../Model/GetSystemMicroDeviceTelemetryResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
