# SiteLevelConsumptionMonitoringApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemBatteryLifetime**](SiteLevelConsumptionMonitoringApi.md#getSystemBatteryLifetime) | **GET** /systems/{system_id}/battery_lifetime | battery_lifetime
[**getSystemBatteryTelemetry**](SiteLevelConsumptionMonitoringApi.md#getSystemBatteryTelemetry) | **GET** /systems/{system_id}/telemetry/battery | Retrieves telemetry for all batteries for a system
[**getSystemConsumptionLifetime**](SiteLevelConsumptionMonitoringApi.md#getSystemConsumptionLifetime) | **GET** /systems/{system_id}/consumption_lifetime | consumption_lifetime
[**getSystemConsumptionMeterTelemetry**](SiteLevelConsumptionMonitoringApi.md#getSystemConsumptionMeterTelemetry) | **GET** /systems/{system_id}/telemetry/consumption_meter | Retrieves telemetry for all consumption meters for a system
[**getSystemEnergyExportLifetime**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyExportLifetime) | **GET** /systems/{system_id}/energy_export_lifetime | export_lifetime
[**getSystemEnergyExportTelemetry**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyExportTelemetry) | **GET** /systems/{system_id}/energy_export_telemetry | Retrieves energy exported to grid in regular intervals
[**getSystemEnergyImportLifetime**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyImportLifetime) | **GET** /systems/{system_id}/energy_import_lifetime | import_lifetime
[**getSystemEnergyImportTelemetry**](SiteLevelConsumptionMonitoringApi.md#getSystemEnergyImportTelemetry) | **GET** /systems/{system_id}/energy_import_telemetry | Retrieves energy imported from grid in regular intervals



## getSystemBatteryLifetime

battery_lifetime

Returns a daily time series of energy charged into the batteries and energy discharged from the batteries for a system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been charged/discharged for the last days in the series.

### Example

```bash
 getSystemBatteryLifetime system_id=value  start_date=value  end_date=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startDate** | **string** | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]

### Return type

[**GetSystemBatteryLifetimeResponse**](GetSystemBatteryLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemBatteryTelemetry

Retrieves telemetry for all batteries for a system

Retrieves telemetry for all the batteries of a system.
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
 getSystemBatteryTelemetry system_id=value  start_at=value  granularity=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startAt** | **integer** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] [default to null]
 **granularity** | [**TelemetryGranularityEnum**](.md) | Granularity of the telemetry data. Default is 'day'. | [optional] [default to null]

### Return type

[**GetSystemBatteryTelemetryResponse**](GetSystemBatteryTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemConsumptionLifetime

consumption_lifetime

Returns a daily time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt hours.
The time series includes one entry for each day from the start_date to the end_date. There are no gaps in the time series.
If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last three days.

### Example

```bash
 getSystemConsumptionLifetime system_id=value  start_date=value  end_date=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startDate** | **string** | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]

### Return type

[**GetSystemConsumptionLifetimeResponse**](GetSystemConsumptionLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemConsumptionMeterTelemetry

Retrieves telemetry for all consumption meters for a system

Retrieves telemetry for all the consumption meters of a system.
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
 getSystemConsumptionMeterTelemetry system_id=value  start_at=value  granularity=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startAt** | **integer** | Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] [default to null]
 **granularity** | [**TelemetryGranularityEnum**](.md) | Granularity of the telemetry data. Default is 'day'. | [optional] [default to null]

### Return type

[**GetSystemConsumptionMeterTelemetryResponse**](GetSystemConsumptionMeterTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemEnergyExportLifetime

export_lifetime

Returns a daily time series of energy exported to the grid by the system over its lifetime. All measurements are in Watt-hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been exported for the last days in the series.

### Example

```bash
 getSystemEnergyExportLifetime system_id=value  start_date=value  end_date=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startDate** | **string** | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]

### Return type

[**GetSystemEnergyExportLifetimeResponse**](GetSystemEnergyExportLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemEnergyExportTelemetry

Retrieves energy exported to grid in regular intervals

Retrieves energy exported to grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system’s first reported date, then midnight of the system’s first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date.

### Example

```bash
 getSystemEnergyExportTelemetry system_id=value  start_at=value  granularity=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startAt** | **integer** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] [default to null]
 **granularity** | [**TelemetryGranularityEnum**](.md) | Granularity of the telemetry data. Default is 'day'. | [optional] [default to null]

### Return type

[**GetSystemEnergyExportTelemetryResponse**](GetSystemEnergyExportTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemEnergyImportLifetime

import_lifetime

Returns a daily time series of energy imported to the grid by the system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been imported for the last days in the series.

### Example

```bash
 getSystemEnergyImportLifetime system_id=value  start_date=value  end_date=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startDate** | **string** | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]

### Return type

[**GetSystemEnergyImportLifetimeResponse**](GetSystemEnergyImportLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemEnergyImportTelemetry

Retrieves energy imported from grid in regular intervals

Retrieves energy imported from grid in regular intervals.
If no start_at is specified, defaults to midnight today, in the timezone of the system.
If the start_at specified is earlier than the system’s first reported date, then midnight of the system’s first reported date is considered as start_at.
The end_at is calculated as the minimum of the time of the request and (start time + granularity).
The meaning of granularity is as follows:

If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.

The requested start date must be within 2 years from current date.

### Example

```bash
 getSystemEnergyImportTelemetry system_id=value  start_at=value  granularity=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startAt** | **integer** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] [default to null]
 **granularity** | [**TelemetryGranularityEnum**](.md) | Granularity of the telemetry data. Default is 'day'. | [optional] [default to null]

### Return type

[**GetSystemEnergyImportTelemetryResponse**](GetSystemEnergyImportTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

