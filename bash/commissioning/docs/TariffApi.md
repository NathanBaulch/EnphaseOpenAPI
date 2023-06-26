# TariffApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemTariffSettings**](TariffApi.md#getSystemTariffSettings) | **GET** /systems/config/{system_id}/tariff | Get tariff for a system
[**updateSystemTariffSettings**](TariffApi.md#updateSystemTariffSettings) | **PUT** /systems/config/{system_id}/tariff | Update tariff for a system



## getSystemTariffSettings

Get tariff for a system

Get tariff for a system.

### Example

```bash
 getSystemTariffSettings system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]

### Return type

[**TariffSettings**](TariffSettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateSystemTariffSettings

Update tariff for a system

### Example

```bash
 updateSystemTariffSettings system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **params** | **TariffSettings** |  | [optional]

### Return type

[**UpdateSystemTariffSettingsResponse**](UpdateSystemTariffSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

