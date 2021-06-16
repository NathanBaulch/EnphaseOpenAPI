# OpenAPI\Client\DefaultApi

All URIs are relative to https://api.enphaseenergy.com/api/v2.

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumptionLifetime()**](DefaultApi.md#consumptionLifetime) | **GET** /systems/{system_id}/consumption_lifetime | 
[**consumptionStats()**](DefaultApi.md#consumptionStats) | **GET** /systems/{system_id}/consumption_stats | 
[**energyLifetime()**](DefaultApi.md#energyLifetime) | **GET** /systems/{system_id}/energy_lifetime | 
[**envoys()**](DefaultApi.md#envoys) | **GET** /systems/{system_id}/envoys | 
[**inventory()**](DefaultApi.md#inventory) | **GET** /systems/{system_id}/inventory | 
[**invertersSummaryByEnvoyOrSite()**](DefaultApi.md#invertersSummaryByEnvoyOrSite) | **GET** /systems/inverters_summary_by_envoy_or_site | 
[**monthlyProduction()**](DefaultApi.md#monthlyProduction) | **GET** /systems/{system_id}/monthly_production | 
[**productionMeterReadings()**](DefaultApi.md#productionMeterReadings) | **GET** /systems/{system_id}/production_meter_readings | 
[**rgmStats()**](DefaultApi.md#rgmStats) | **GET** /systems/{system_id}/rgm_stats | 
[**searchSystemId()**](DefaultApi.md#searchSystemId) | **GET** /systems/search_system_id | 
[**stats()**](DefaultApi.md#stats) | **GET** /systems/{system_id}/stats | 
[**summary()**](DefaultApi.md#summary) | **GET** /systems/{system_id}/summary | 
[**systems()**](DefaultApi.md#systems) | **GET** /systems | 


## `consumptionLifetime()`

```php
consumptionLifetime($user_id, $system_id, $start_date, $end_date): \OpenAPI\Client\Model\ConsumptionLifetime
```



Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter, returns `204` - No Content. If you don't have permission to view consumption data, the response code is `401`.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or metering problems.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int
$start_date = Fri Jul 01 10:00:00 AEST 2016; // \DateTime | The date on which to start the time series. Defaults to the system's operational date.
$end_date = Sun Jul 31 10:00:00 AEST 2016; // \DateTime | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.

try {
    $result = $apiInstance->consumptionLifetime($user_id, $system_id, $start_date, $end_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->consumptionLifetime: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |
 **start_date** | **\DateTime**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional]
 **end_date** | **\DateTime**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional]

### Return type

[**\OpenAPI\Client\Model\ConsumptionLifetime**](../Model/ConsumptionLifetime.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `consumptionStats()`

```php
consumptionStats($user_id, $system_id, $start_at, $end_at): \OpenAPI\Client\Model\ConsumptionStats
```



Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any consumption meters installed, the response includes an empty intervals array.  If you don't have permission to view consumption data, the response code is `401`.  Under some conditions, data for a given period may be temporarily unavailable.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int
$start_at = 1448946000; // int | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
$end_at = 1449011615; // int | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.

try {
    $result = $apiInstance->consumptionStats($user_id, $system_id, $start_at, $end_at);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->consumptionStats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |
 **start_at** | **int**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional]
 **end_at** | **int**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional]

### Return type

[**\OpenAPI\Client\Model\ConsumptionStats**](../Model/ConsumptionStats.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `energyLifetime()`

```php
energyLifetime($user_id, $system_id, $start_date, $end_date, $production): \OpenAPI\Client\Model\EnergyLifetime
```



Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as `[909, 4970, 0, 0, 0]`, then no energy has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or production problems.  If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as measured by the meter. This is called the \"merged time series\". In addition, the response includes the attribute `meter_start_date`, to indicate where in the time series the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter `production=all` to the request.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int
$start_date = Tue Jan 01 11:00:00 AEDT 2013; // \DateTime | The date on which to start the time series. Defaults to the system's operational date.
$end_date = Sun Jan 06 11:00:00 AEDT 2013; // \DateTime | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier.
$production = all; // string | When `all`, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored.

try {
    $result = $apiInstance->energyLifetime($user_id, $system_id, $start_date, $end_date, $production);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->energyLifetime: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |
 **start_date** | **\DateTime**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional]
 **end_date** | **\DateTime**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional]
 **production** | **string**| When &#x60;all&#x60;, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | [optional]

### Return type

[**\OpenAPI\Client\Model\EnergyLifetime**](../Model/EnergyLifetime.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `envoys()`

```php
envoys($user_id, $system_id): \OpenAPI\Client\Model\Envoys
```



Returns a listing of all active Envoys currently deployed on the system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int

try {
    $result = $apiInstance->envoys($user_id, $system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->envoys: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |

### Return type

[**\OpenAPI\Client\Model\Envoys**](../Model/Envoys.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `inventory()`

```php
inventory($user_id, $system_id): \OpenAPI\Client\Model\Inventory
```



Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \"Active\" does not imply that the device is currently reporting, producing, or measuring energy.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int

try {
    $result = $apiInstance->inventory($user_id, $system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->inventory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |

### Return type

[**\OpenAPI\Client\Model\Inventory**](../Model/Inventory.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `invertersSummaryByEnvoyOrSite()`

```php
invertersSummaryByEnvoyOrSite($user_id, $site_id): \OpenAPI\Client\Model\InvertersSummaryByEnvoyOrSite
```



Returns the summary along with the energy produced on the system over its lifetime.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$site_id = 66; // int | The identifier of the system.

try {
    $result = $apiInstance->invertersSummaryByEnvoyOrSite($user_id, $site_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->invertersSummaryByEnvoyOrSite: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **site_id** | **int**| The identifier of the system. |

### Return type

[**\OpenAPI\Client\Model\InvertersSummaryByEnvoyOrSite**](../Model/InvertersSummaryByEnvoyOrSite.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `monthlyProduction()`

```php
monthlyProduction($user_id, $system_id, $start_date): \OpenAPI\Client\Model\MonthlyProduction
```



This endpoint is deprecated and will be removed in a future release. Use `production_meter_readings` or `energy_lifetime` instead.  Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system, measurements come from the meter; otherwise, measurements come from the microinverters.  This endpoint can return a response of Data Temporarily Unavailable.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int
$start_date = Fri Jul 01 10:00:00 AEST 2011; // \DateTime | Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a `start_date` of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month.

try {
    $result = $apiInstance->monthlyProduction($user_id, $system_id, $start_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->monthlyProduction: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |
 **start_date** | **\DateTime**| Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a &#x60;start_date&#x60; of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month. | [optional]

### Return type

[**\OpenAPI\Client\Model\MonthlyProduction**](../Model/MonthlyProduction.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `productionMeterReadings()`

```php
productionMeterReadings($user_id, $system_id, $end_at): \OpenAPI\Client\Model\ProductionMeterReadings
```



Returns the last known \"odometer\" reading of each revenue-grade production meter on the system as of the requested time.  This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. `read_at` is the time at which the reading was taken, and is always less than or equal to the requested `end_at`. Commonly, the reading will be within 30 minutes of the requested `end_at`; however, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when `end_at` is close to the current time. Meters that have been retired from a system will show an `end_at` that doesn't change, and that eventually is far away from the current time.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int
$end_at = 1473901755; // int

try {
    $result = $apiInstance->productionMeterReadings($user_id, $system_id, $end_at);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->productionMeterReadings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |
 **end_at** | **int**|  | [optional]

### Return type

[**\OpenAPI\Client\Model\ProductionMeterReadings**](../Model/ProductionMeterReadings.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `rgmStats()`

```php
rgmStats($user_id, $system_id, $start_at, $end_at): \OpenAPI\Client\Model\RgmStats
```



Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any revenue-grade meters installed, the response includes an empty intervals array.  Under some conditions, data for a given period may be temporarily unavailable.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int
$start_at = 1381474800; // int | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`.
$end_at = 1381561200; // int | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval.

try {
    $result = $apiInstance->rgmStats($user_id, $system_id, $start_at, $end_at);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->rgmStats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |
 **start_at** | **int**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional]
 **end_at** | **int**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional]

### Return type

[**\OpenAPI\Client\Model\RgmStats**](../Model/RgmStats.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `searchSystemId()`

```php
searchSystemId($user_id, $serial_num): \OpenAPI\Client\Model\SearchSystemId
```



Get system ID by envoy serial number.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$serial_num = 23435345345; // string | Serial number of the envoy.

try {
    $result = $apiInstance->searchSystemId($user_id, $serial_num);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->searchSystemId: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **serial_num** | **string**| Serial number of the envoy. |

### Return type

[**\OpenAPI\Client\Model\SearchSystemId**](../Model/SearchSystemId.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `stats()`

```php
stats($user_id, $system_id, $start_at, $end_at): \OpenAPI\Client\Model\Stats
```



Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of intervals. Intervals are 5 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.  The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a gap, because the microinverters do not produce at night.  Sometimes a request cannot be processed because the requested dates are invalid for the the system in question. Examples include asking for stats starting at a time that is later than the system's last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is `422` and the response body includes an error reason as well as the parameters used to process the request.  If the system doesn't have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int
$start_at = 1381496100; // int | Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the `operational_date`.
$end_at = 1381497600; // int | End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval.

try {
    $result = $apiInstance->stats($user_id, $system_id, $start_at, $end_at);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->stats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |
 **start_at** | **int**| Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the &#x60;operational_date&#x60;. | [optional]
 **end_at** | **int**| End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval. | [optional]

### Return type

[**\OpenAPI\Client\Model\Stats**](../Model/Stats.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `summary()`

```php
summary($user_id, $system_id, $summary_date): \OpenAPI\Client\Model\Summary
```



Returns summary information for the specified system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$system_id = 66; // int
$summary_date = Fri Sep 17 10:00:00 AEST 2010; // \DateTime | Start of reporting period. If no `summary_date` is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and `422` status.

try {
    $result = $apiInstance->summary($user_id, $system_id, $summary_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->summary: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **system_id** | **int**|  |
 **summary_date** | **\DateTime**| Start of reporting period. If no &#x60;summary_date&#x60; is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and &#x60;422&#x60; status. | [optional]

### Return type

[**\OpenAPI\Client\Model\Summary**](../Model/Summary.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `systems()`

```php
systems($user_id, $next, $limit, $system_id, $system_id2, $system_name, $system_name2, $status, $status2, $reference, $reference2, $installer, $installer2, $connection_type, $connection_type2): \OpenAPI\Client\Model\Systems
```



Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full list, use the `next` attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 4d6a51330a; // string
$next = 4d5467784d5445770a; // string
$limit = 100; // int
$system_id = 67; // int
$system_id2 = [67]; // int[]
$system_name = Green; // string
$system_name2 = ["Green"]; // string[]
$status = power; // \OpenAPI\Client\Model\Status
$status2 = ["comm","micro"]; // \OpenAPI\Client\Model\Status[]
$reference = 'reference_example'; // string
$reference2 = array('reference_example'); // string[]
$installer = 'installer_example'; // string
$installer2 = array('installer_example'); // string[]
$connection_type = new \OpenAPI\Client\Model\\OpenAPI\Client\Model\ConnectionType(); // \OpenAPI\Client\Model\ConnectionType
$connection_type2 = ["ethernet"]; // \OpenAPI\Client\Model\ConnectionType[]

try {
    $result = $apiInstance->systems($user_id, $next, $limit, $system_id, $system_id2, $system_name, $system_name2, $status, $status2, $reference, $reference2, $installer, $installer2, $connection_type, $connection_type2);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->systems: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**|  |
 **next** | **string**|  | [optional]
 **limit** | **int**|  | [optional] [default to 100]
 **system_id** | **int**|  | [optional]
 **system_id2** | [**int[]**](../Model/int.md)|  | [optional]
 **system_name** | **string**|  | [optional]
 **system_name2** | [**string[]**](../Model/string.md)|  | [optional]
 **status** | [**\OpenAPI\Client\Model\Status**](../Model/.md)|  | [optional]
 **status2** | [**\OpenAPI\Client\Model\Status[]**](../Model/\OpenAPI\Client\Model\Status.md)|  | [optional]
 **reference** | **string**|  | [optional]
 **reference2** | [**string[]**](../Model/string.md)|  | [optional]
 **installer** | **string**|  | [optional]
 **installer2** | [**string[]**](../Model/string.md)|  | [optional]
 **connection_type** | [**\OpenAPI\Client\Model\ConnectionType**](../Model/.md)|  | [optional]
 **connection_type2** | [**\OpenAPI\Client\Model\ConnectionType[]**](../Model/\OpenAPI\Client\Model\ConnectionType.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Systems**](../Model/Systems.md)

### Authorization

[ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
