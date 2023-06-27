# SystemConfigurationsApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemBatterySettings**](SystemConfigurationsApi.md#getSystemBatterySettings) | **GET** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system
[**getSystemGridStatusSettings**](SystemConfigurationsApi.md#getSystemGridStatusSettings) | **GET** /systems/config/{system_id}/grid_status | Returns the current grid status of a system.
[**getSystemLoadControlSettings**](SystemConfigurationsApi.md#getSystemLoadControlSettings) | **GET** /systems/config/{system_id}/load_control | Returns the current load control settings of a system
[**getSystemStormGuardSettings**](SystemConfigurationsApi.md#getSystemStormGuardSettings) | **GET** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system
[**updateSystemBatterySettings**](SystemConfigurationsApi.md#updateSystemBatterySettings) | **PUT** /systems/config/{system_id}/battery_settings | Updates the current battery settings of a system
[**updateSystemLoadControlSettings**](SystemConfigurationsApi.md#updateSystemLoadControlSettings) | **PUT** /systems/config/{system_id}/load_control | Updates the current load control settings of a system
[**updateSystemStormGuardSettings**](SystemConfigurationsApi.md#updateSystemStormGuardSettings) | **PUT** /systems/config/{system_id}/storm_guard | Updates the current storm guard settings of a system



## getSystemBatterySettings

Returns the current battery settings of a system

Returns the current battery settings of a system.

### Example

```bash
 getSystemBatterySettings system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]

### Return type

[**BatterySettings**](BatterySettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemGridStatusSettings

Returns the current grid status of a system.

Returns the current grid status of a system.
Please note that the status returned in the response is not real-time and is updated only after the IQ Gateway sends a new report to the Enphase cloud.

### Example

```bash
 getSystemGridStatusSettings system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]

### Return type

[**GetSystemGridStatusSettingsResponse**](GetSystemGridStatusSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemLoadControlSettings

Returns the current load control settings of a system

Returns the current load control settings of a system.

### Example

```bash
 getSystemLoadControlSettings system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]

### Return type

[**LoadControlSettings**](LoadControlSettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemStormGuardSettings

Returns the current storm guard settings of a system

Returns the current storm guard settings of a system.

### Example

```bash
 getSystemStormGuardSettings system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]

### Return type

[**StormGuardSettings**](StormGuardSettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateSystemBatterySettings

Updates the current battery settings of a system

Updates the current battery settings of a system.

### Example

```bash
 updateSystemBatterySettings system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **batterySettings** | [**UpdateSystemBatterySettingsRequest**](UpdateSystemBatterySettingsRequest.md) |  | [optional]

### Return type

[**BatterySettings**](BatterySettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateSystemLoadControlSettings

Updates the current load control settings of a system

Updates the current load control settings of a system.

### Example

```bash
 updateSystemLoadControlSettings system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **updateSystemLoadControlSettingsRequest** | [**UpdateSystemLoadControlSettingsRequest**](UpdateSystemLoadControlSettingsRequest.md) |  | [optional]

### Return type

[**LoadControlSettings**](LoadControlSettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateSystemStormGuardSettings

Updates the current storm guard settings of a system

Updates the current storm guard status of a system.

### Example

```bash
 updateSystemStormGuardSettings system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **stormGuard** | [**UpdateSystemStormGuardSettingsRequest**](UpdateSystemStormGuardSettingsRequest.md) |  | [optional]

### Return type

[**StormGuardSettings**](StormGuardSettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

