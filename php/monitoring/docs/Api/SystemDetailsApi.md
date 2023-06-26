# EnphaseOpenAPI\Monitoring\SystemDetailsApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getInvertersSummaryByEnvoyOrSite()**](SystemDetailsApi.md#getInvertersSummaryByEnvoyOrSite) | **GET** /systems/inverters_summary_by_envoy_or_site | inverters_summary_by_envoy_or_site |
| [**getSystem()**](SystemDetailsApi.md#getSystem) | **GET** /systems/{system_id} | Retrieves a System by ID |
| [**getSystemDevices()**](SystemDetailsApi.md#getSystemDevices) | **GET** /systems/{system_id}/devices | Retrieves devices for a given system |
| [**getSystemSummary()**](SystemDetailsApi.md#getSystemSummary) | **GET** /systems/{system_id}/summary | Retrieves a system summary |
| [**getSystems()**](SystemDetailsApi.md#getSystems) | **GET** /systems | Fetch systems |
| [**retrieveSystemId()**](SystemDetailsApi.md#retrieveSystemId) | **GET** /systems/retrieve_system_id | Retrieve system for a given envoy serial number |
| [**searchSystems()**](SystemDetailsApi.md#searchSystems) | **POST** /systems/search | Search and filter systems |


## `getInvertersSummaryByEnvoyOrSite()`

```php
getInvertersSummaryByEnvoyOrSite($site_id, $envoy_serial_number): \EnphaseOpenAPI\Monitoring\Model\GetInvertersSummaryByEnvoyOrSiteResponseInner[]
```

inverters_summary_by_envoy_or_site

Returns the microinverters summary based on the specified active envoy serial number or system.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemDetailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$site_id = 56; // int | Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site.
$envoy_serial_number = 'envoy_serial_number_example'; // string | Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response.

try {
    $result = $apiInstance->getInvertersSummaryByEnvoyOrSite($site_id, $envoy_serial_number);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemDetailsApi->getInvertersSummaryByEnvoyOrSite: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **site_id** | **int**| Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site. | [optional] |
| **envoy_serial_number** | **string**| Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetInvertersSummaryByEnvoyOrSiteResponseInner[]**](../Model/GetInvertersSummaryByEnvoyOrSiteResponseInner.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystem()`

```php
getSystem($system_id): \EnphaseOpenAPI\Monitoring\Model\System
```

Retrieves a System by ID

Retrieves a system by ID.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemDetailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.

try {
    $result = $apiInstance->getSystem($system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemDetailsApi->getSystem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\System**](../Model/System.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemDevices()`

```php
getSystemDevices($system_id): \EnphaseOpenAPI\Monitoring\Model\GetSystemDevicesResponse
```

Retrieves devices for a given system

Retrieves devices for a given system. Only devices that are active will be returned in the response.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemDetailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.

try {
    $result = $apiInstance->getSystemDevices($system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemDetailsApi->getSystemDevices: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemDevicesResponse**](../Model/GetSystemDevicesResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemSummary()`

```php
getSystemSummary($system_id): \EnphaseOpenAPI\Monitoring\Model\GetSystemSummaryResponse
```

Retrieves a system summary

Returns system summary based on the specified system ID.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemDetailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$system_id = 56; // int | Unique numeric ID of the system.

try {
    $result = $apiInstance->getSystemSummary($system_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemDetailsApi->getSystemSummary: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **system_id** | **int**| Unique numeric ID of the system. | |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemSummaryResponse**](../Model/GetSystemSummaryResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystems()`

```php
getSystems($page, $size, $sort_by): \EnphaseOpenAPI\Monitoring\Model\GetSystemsResponse
```

Fetch systems

Returns a list of systems for which the user can make API requests. By default, systems are returned in batches of 10. The maximum size is 100.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemDetailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 56; // int | Page to be returned. Default=1, Min=1. For example, if page is set to 2, 2nd page is returned.
$size = 56; // int | Maximum number of records shown per page. Default=10, Min=1, Max=100.  For example, if set to 5, 5 records are shown per page.
$sort_by = new \EnphaseOpenAPI\Monitoring\Model\SystemSortByEnum(); // SystemSortByEnum | Returns list of systems sorted by <sort_by> field. To get ASC order sorted list, user sort_by = <key>. To get DESC order sorted list, use sort_by = (-)<key>. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID.

try {
    $result = $apiInstance->getSystems($page, $size, $sort_by);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemDetailsApi->getSystems: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Page to be returned. Default&#x3D;1, Min&#x3D;1. For example, if page is set to 2, 2nd page is returned. | [optional] |
| **size** | **int**| Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100.  For example, if set to 5, 5 records are shown per page. | [optional] |
| **sort_by** | [**SystemSortByEnum**](../Model/.md)| Returns list of systems sorted by &lt;sort_by&gt; field. To get ASC order sorted list, user sort_by &#x3D; &lt;key&gt;. To get DESC order sorted list, use sort_by &#x3D; (-)&lt;key&gt;. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID. | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\GetSystemsResponse**](../Model/GetSystemsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveSystemId()`

```php
retrieveSystemId($serial_num): \EnphaseOpenAPI\Monitoring\Model\RetrieveSystemIdResponse
```

Retrieve system for a given envoy serial number

Get system ID by passing envoy serial number. If the serial number of a retired envoy is passed in the request param, a 404 Not Found response will be returned.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemDetailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$serial_num = 'serial_num_example'; // string | Envoy serial number.

try {
    $result = $apiInstance->retrieveSystemId($serial_num);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemDetailsApi->retrieveSystemId: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **serial_num** | **string**| Envoy serial number. | |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\RetrieveSystemIdResponse**](../Model/RetrieveSystemIdResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `searchSystems()`

```php
searchSystems($page, $size, $params): \EnphaseOpenAPI\Monitoring\Model\SearchSystemsResponse
```

Search and filter systems

Search and filter systems. Provide only valid values in request parameters. Empty and invalid values will be ignored. Invalid keys will be rejected.

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


$apiInstance = new EnphaseOpenAPI\Monitoring\Api\SystemDetailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 56; // int | Page to be returned. Default=1, Min=1, e.g=2.
$size = 56; // int | Maximum number of records shown per page. Default=10, Min=1, Max=1000, e.g=5.
$params = new \EnphaseOpenAPI\Monitoring\Model\SearchSystemsRequest(); // \EnphaseOpenAPI\Monitoring\Model\SearchSystemsRequest

try {
    $result = $apiInstance->searchSystems($page, $size, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemDetailsApi->searchSystems: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Page to be returned. Default&#x3D;1, Min&#x3D;1, e.g&#x3D;2. | [optional] |
| **size** | **int**| Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;1000, e.g&#x3D;5. | [optional] |
| **params** | [**\EnphaseOpenAPI\Monitoring\Model\SearchSystemsRequest**](../Model/SearchSystemsRequest.md)|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Monitoring\Model\SearchSystemsResponse**](../Model/SearchSystemsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
