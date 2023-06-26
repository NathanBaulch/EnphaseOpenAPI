# SystemConfigurationsApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemBatterySettings**](SystemConfigurationsApi.md#getSystemBatterySettings) | **GET** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system
[**getSystemGridStatusSettings**](SystemConfigurationsApi.md#getSystemGridStatusSettings) | **GET** /systems/config/{system_id}/grid_status | Returns the current grid status settings of a system
[**getSystemLoadControlSettings**](SystemConfigurationsApi.md#getSystemLoadControlSettings) | **GET** /systems/config/{system_id}/load_control | Returns the current load control settings of a system
[**getSystemStormGuardSettings**](SystemConfigurationsApi.md#getSystemStormGuardSettings) | **GET** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system



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

[**GetSystemBatterySettingsResponse**](GetSystemBatterySettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemGridStatusSettings

Returns the current grid status settings of a system

Returns the current grid status settings of a system.

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

[**GetSystemLoadControlSettingsResponse**](GetSystemLoadControlSettingsResponse.md)

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

[**GetSystemStormGuardSettingsResponse**](GetSystemStormGuardSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

