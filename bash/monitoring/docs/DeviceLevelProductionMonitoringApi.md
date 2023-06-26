# DeviceLevelProductionMonitoringApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemAcbDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getSystemAcbDeviceTelemetry) | **GET** /systems/{system_id}/devices/acbs/{serial_no}/telemetry | Retrieves telemetry for single ACB
[**getSystemEnchargeDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getSystemEnchargeDeviceTelemetry) | **GET** /systems/{system_id}/devices/encharges/{serial_no}/telemetry | Retrieves telemetry for single Encharge
[**getSystemMicroDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getSystemMicroDeviceTelemetry) | **GET** /systems/{system_id}/devices/micros/{serial_no}/telemetry | Retrieves telemetry for single micro/pcu



## getSystemAcbDeviceTelemetry

Retrieves telemetry for single ACB

Retrieves telemetry for single ACB.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 interval will appear in response.
If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

```bash
 getSystemAcbDeviceTelemetry system_id=value serial_no=value  start_at=value  granularity=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **serialNo** | **string** | Serial number of the acb. | [default to null]
 **startAt** | **integer** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] [default to null]
 **granularity** | [**TelemetryGranularityEnum**](.md) | Granularity of the telemetry data. Default is 'day'. | [optional] [default to null]

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemEnchargeDeviceTelemetry

Retrieves telemetry for single Encharge

Retrieves telemetry for single Encharge.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 interval will appear in response.
If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

```bash
 getSystemEnchargeDeviceTelemetry system_id=value serial_no=value  start_at=value  granularity=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **serialNo** | **string** | Serial number of the Encharge. | [default to null]
 **startAt** | **integer** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] [default to null]
 **granularity** | [**TelemetryGranularityEnum**](.md) | Granularity of the telemetry data. Default is 'day'. | [optional] [default to null]

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemMicroDeviceTelemetry

Retrieves telemetry for single micro/pcu

Retrieves telemetry for single micro/pcu.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.

The requested start date must be within 2 years from current date.
By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

```bash
 getSystemMicroDeviceTelemetry system_id=value serial_no=value  start_at=value  granularity=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **serialNo** | **string** | Serial number of the individual solar Microinverter. | [default to null]
 **startAt** | **integer** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] [default to null]
 **granularity** | [**TelemetryGranularityEnum**](.md) | Granularity of the telemetry data. Default is 'day'. | [optional] [default to null]

### Return type

[**GetSystemMicroDeviceTelemetryResponse**](GetSystemMicroDeviceTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

