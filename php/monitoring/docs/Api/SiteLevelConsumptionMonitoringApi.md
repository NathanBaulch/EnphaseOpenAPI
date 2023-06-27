# EnphaseOpenAPI\Monitoring\SiteLevelConsumptionMonitoringApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getSystemBatteryLifetime()**](SiteLevelConsumptionMonitoringApi.md#getSystemBatteryLifetime) | **GET** /systems/{system_id}/battery_lifetime | battery_lifetime |
| [**getSystemBatteryTelemetry()**](SiteLevelConsumptionMonitoringApi.md#getSystemBatteryTelemetry) | **GET** /systems/{system_id}/telemetry/battery | Retrieves telemetry for all batteries for a system |
| [**getSystemConsumptionLifetime()**](SiteLevelConsumptionMonitoringApi.md#getSystemConsumptionLifetime) | **GET** /systems/{system_id}/consumption_lifetime | consumption_lifetime |
| [**getSystemConsumptionMeterTelemetry()**](SiteLevelConsumptionMonitoringApi.md#getSystemConsumptionMeterTelemetry) | **GET** /systems/{system_id}/telemetry/consumption_meter | Retrieves telemetry for all consumption meters for a system |
| [**getSystemEnergyExportLifetime()**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyExportLifetime) | **GET** /systems/{system_id}/energy_export_lifetime | export_lifetime |
| [**getSystemEnergyExportTelemetry()**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyExportTelemetry) | **GET** /systems/{system_id}/energy_export_telemetry | Retrieves energy exported to grid in regular intervals |
| [**getSystemEnergyImportLifetime()**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyImportLifetime) | **GET** /systems/{system_id}/energy_import_lifetime | import_lifetime |
| [**getSystemEnergyImportTelemetry()**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyImportTelemetry) | **GET** /systems/{system_id}/energy_import_telemetry | Retrieves energy imported from grid in regular intervals |


## `getSystemBatteryLifetime()`

```php
getSystemBatteryLifetime($system_id, $start_date, $end_date): \EnphaseOpenAPI\Monitoring\Model\GetSystemBatteryLifetimeResponse
```

battery_lifetime

Returns a daily time series of energy charged into the batteries and energy discharged from the batteries for a system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been charged/discharged for the last days in the series.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SiteLevelConsumptionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$start_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.
$end_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.

try {
    $result = $apiInstance->getSystemBatteryLifetime($system_id, $start_date, $end_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLevelConsumptionMonitoringApi->getSystemBatteryLifetime: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **start_date** | **\DateTime**| Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional] |
| **end_date** | **\DateTime**| End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemBatteryLifetimeResponse**](../Model/GetSystemBatteryLifetimeResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemBatteryTelemetry()`

```php
getSystemBatteryTelemetry($system_id, $start_at, $granularity): \EnphaseOpenAPI\Monitoring\Model\GetSystemBatteryTelemetryResponse
```

Retrieves telemetry for all batteries for a system

Retrieves telemetry for all the batteries of a system. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SiteLevelConsumptionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$start_at = 56; // int | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
$granularity = new \EnphaseOpenAPI\Monitoring\Model\TelemetryGranularityEnum(); // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.

try {
    $result = $apiInstance->getSystemBatteryTelemetry($system_id, $start_at, $granularity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLevelConsumptionMonitoringApi->getSystemBatteryTelemetry: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **start_at** | **int**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] |
| **granularity** | [**TelemetryGranularityEnum**](../Model/.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemBatteryTelemetryResponse**](../Model/GetSystemBatteryTelemetryResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemConsumptionLifetime()`

```php
getSystemConsumptionLifetime($system_id, $start_date, $end_date): \EnphaseOpenAPI\Monitoring\Model\GetSystemConsumptionLifetimeResponse
```

consumption_lifetime

Returns a daily time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last three days.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SiteLevelConsumptionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$start_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.
$end_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.

try {
    $result = $apiInstance->getSystemConsumptionLifetime($system_id, $start_date, $end_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLevelConsumptionMonitoringApi->getSystemConsumptionLifetime: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **start_date** | **\DateTime**| Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional] |
| **end_date** | **\DateTime**| End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemConsumptionLifetimeResponse**](../Model/GetSystemConsumptionLifetimeResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemConsumptionMeterTelemetry()`

```php
getSystemConsumptionMeterTelemetry($system_id, $start_at, $granularity): \EnphaseOpenAPI\Monitoring\Model\GetSystemConsumptionMeterTelemetryResponse
```

Retrieves telemetry for all consumption meters for a system

Retrieves telemetry for all the consumption meters of a system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SiteLevelConsumptionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$start_at = 56; // int | Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
$granularity = new \EnphaseOpenAPI\Monitoring\Model\TelemetryGranularityEnum(); // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.

try {
    $result = $apiInstance->getSystemConsumptionMeterTelemetry($system_id, $start_at, $granularity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLevelConsumptionMonitoringApi->getSystemConsumptionMeterTelemetry: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **start_at** | **int**| Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] |
| **granularity** | [**TelemetryGranularityEnum**](../Model/.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemConsumptionMeterTelemetryResponse**](../Model/GetSystemConsumptionMeterTelemetryResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemEnergyExportLifetime()`

```php
getSystemEnergyExportLifetime($system_id, $start_date, $end_date): \EnphaseOpenAPI\Monitoring\Model\GetSystemEnergyExportLifetimeResponse
```

export_lifetime

Returns a daily time series of energy exported to the grid by the system over its lifetime. All measurements are in Watt-hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been exported for the last days in the series.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SiteLevelConsumptionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$start_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.
$end_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.

try {
    $result = $apiInstance->getSystemEnergyExportLifetime($system_id, $start_date, $end_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLevelConsumptionMonitoringApi->getSystemEnergyExportLifetime: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **start_date** | **\DateTime**| Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional] |
| **end_date** | **\DateTime**| End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemEnergyExportLifetimeResponse**](../Model/GetSystemEnergyExportLifetimeResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemEnergyExportTelemetry()`

```php
getSystemEnergyExportTelemetry($system_id, $start_at, $granularity): \EnphaseOpenAPI\Monitoring\Model\GetSystemEnergyExportTelemetryResponse
```

Retrieves energy exported to grid in regular intervals

Retrieves energy exported to grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SiteLevelConsumptionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$start_at = 56; // int | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
$granularity = new \EnphaseOpenAPI\Monitoring\Model\TelemetryGranularityEnum(); // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.

try {
    $result = $apiInstance->getSystemEnergyExportTelemetry($system_id, $start_at, $granularity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLevelConsumptionMonitoringApi->getSystemEnergyExportTelemetry: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **start_at** | **int**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] |
| **granularity** | [**TelemetryGranularityEnum**](../Model/.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemEnergyExportTelemetryResponse**](../Model/GetSystemEnergyExportTelemetryResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemEnergyImportLifetime()`

```php
getSystemEnergyImportLifetime($system_id, $start_date, $end_date): \EnphaseOpenAPI\Monitoring\Model\GetSystemEnergyImportLifetimeResponse
```

import_lifetime

Returns a daily time series of energy imported to the grid by the system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been imported for the last days in the series.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SiteLevelConsumptionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$start_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format.
$end_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format.

try {
    $result = $apiInstance->getSystemEnergyImportLifetime($system_id, $start_date, $end_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLevelConsumptionMonitoringApi->getSystemEnergyImportLifetime: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **start_date** | **\DateTime**| Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional] |
| **end_date** | **\DateTime**| End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemEnergyImportLifetimeResponse**](../Model/GetSystemEnergyImportLifetimeResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemEnergyImportTelemetry()`

```php
getSystemEnergyImportTelemetry($system_id, $start_at, $granularity): \EnphaseOpenAPI\Monitoring\Model\GetSystemEnergyImportTelemetryResponse
```

Retrieves energy imported from grid in regular intervals

Retrieves energy imported from grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SiteLevelConsumptionMonitoringApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.
$start_at = 56; // int | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
$granularity = new \EnphaseOpenAPI\Monitoring\Model\TelemetryGranularityEnum(); // TelemetryGranularityEnum | Granularity of the telemetry data. Default is 'day'.

try {
    $result = $apiInstance->getSystemEnergyImportTelemetry($system_id, $start_at, $granularity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLevelConsumptionMonitoringApi->getSystemEnergyImportTelemetry: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |
| **start_at** | **int**| Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] |
| **granularity** | [**TelemetryGranularityEnum**](../Model/.md)| Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemEnergyImportTelemetryResponse**](../Model/GetSystemEnergyImportTelemetryResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
