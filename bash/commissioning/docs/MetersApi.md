# MetersApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemMeter**](MetersApi.md#getSystemMeter) | **GET** /systems/{system_id}/meters/{serial_number} | Returns the requested meter detail.
[**setActivationMeterStatus**](MetersApi.md#setActivationMeterStatus) | **POST** /activations/{activation_id}/meters/{serial_number}/meter_control | Enable or Disable the meters.
[**updateSystemMeter**](MetersApi.md#updateSystemMeter) | **PUT** /systems/{system_id}/meters/{serial_number} | Update the operational date of a meter by serial number.



## getSystemMeter

Returns the requested meter detail.

Returns the requested meter by serial number. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example

```bash
 getSystemMeter system_id=value serial_number=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | System ID. | [default to null]
 **serialNumber** | **string** | Meter serial number. | [default to null]

### Return type

[**GetSystemMeterResponse**](GetSystemMeterResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## setActivationMeterStatus

Enable or Disable the meters.

Enable or Disable the meters. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example

```bash
 setActivationMeterStatus activation_id=value serial_number=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **integer** | Activation ID. | [default to null]
 **serialNumber** | **string** | Meter serial number. | [default to null]
 **params** | [**SetActivationMeterStatusRequest**](SetActivationMeterStatusRequest.md) |  | [optional]

### Return type

[**SetActivationMeterStatusResponse**](SetActivationMeterStatusResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateSystemMeter

Update the operational date of a meter by serial number.

Update the operational date of a meter. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example

```bash
 updateSystemMeter system_id=value serial_number=value  operational_date=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | System ID. | [default to null]
 **serialNumber** | **string** | Meter serial number. | [default to null]
 **operationalDate** | **string** | Operational date in the following format YYYY-MM-DD. | [optional] [default to null]

### Return type

[**UpdateSystemMeterResponse**](UpdateSystemMeterResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

