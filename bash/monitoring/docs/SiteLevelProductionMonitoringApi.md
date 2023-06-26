# SiteLevelProductionMonitoringApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemEnergyLifetime**](SiteLevelProductionMonitoringApi.md#getSystemEnergyLifetime) | **GET** /systems/{system_id}/energy_lifetime | energy_lifetime
[**getSystemProductionMeterReadings**](SiteLevelProductionMonitoringApi.md#getSystemProductionMeterReadings) | **GET** /systems/{system_id}/production_meter_readings | production_meter_readings
[**getSystemProductionMeterTelemetry**](SiteLevelProductionMonitoringApi.md#getSystemProductionMeterTelemetry) | **GET** /systems/{system_id}/telemetry/production_meter | Retrieves telemetry for all production meters for a system
[**getSystemProductionMicroTelemetry**](SiteLevelProductionMonitoringApi.md#getSystemProductionMicroTelemetry) | **GET** /systems/{system_id}/telemetry/production_micro | Retrieves telemetry for all production micros for a system
[**getSystemRgmStats**](SiteLevelProductionMonitoringApi.md#getSystemRgmStats) | **GET** /systems/{system_id}/rgm_stats | rgm_stats



## getSystemEnergyLifetime

energy_lifetime

Returns a daily time series of energy produced by the system over its lifetime. All measurements are in Watt hours.
The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series.
If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been reported for the last days in the series.
If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed.
Later, it switches to using the data as measured by the meter. This is called the \"merged time series\".
The attribute 'meter_start_date' indicates the time when the meter measurements begin to be used.
You can retrieve the complete time series from the meter and from the microinverters by adding the parameter production=all to the request.

### Example

```bash
 getSystemEnergyLifetime system_id=value  start_date=value  end_date=value  production=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startDate** | **string** | Start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]
 **endDate** | **string** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional] [default to null]
 **production** | [**SystemEnergyLifetimeProductionEnum**](.md) | When 'all', returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | [optional] [default to null]

### Return type

[**GetSystemEnergyLifetimeResponse**](GetSystemEnergyLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemProductionMeterReadings

production_meter_readings

Returns the last known reading of each production meter on the system as of the requested time, regardless of whether the meter is currently in service or retired.
Read_at is the time at which the reading was taken, and is always less than or equal to the requested end_at. Commonly, the reading will be within 30 minutes of the requested end_at.
However, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system.
Systems that are configured to report infrequently can show large deltas on all meters, especially when end_at is close to the current time.
Meters that have been retired from a system will show an end_at that doesn't change, and that eventually is far away from the current time.

### Example

```bash
 getSystemProductionMeterReadings system_id=value  end_at=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **endAt** | **integer** | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional] [default to null]

### Return type

[**GetSystemProductionMeterReadingsResponse**](GetSystemProductionMeterReadingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemProductionMeterTelemetry

Retrieves telemetry for all production meters for a system

Retrieves telemetry for all the production meters of a system.
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
 getSystemProductionMeterTelemetry system_id=value  start_at=value  granularity=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startAt** | **integer** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] [default to null]
 **granularity** | [**TelemetryGranularityEnum**](.md) | Granularity of the telemetry data. Default is 'day'. | [optional] [default to null]

### Return type

[**GetSystemProductionMeterTelemetryResponse**](GetSystemProductionMeterTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemProductionMicroTelemetry

Retrieves telemetry for all production micros for a system

Retrieves telemetry for all the production micros of a system.
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
 getSystemProductionMicroTelemetry system_id=value  start_at=value  granularity=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startAt** | **integer** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] [default to null]
 **granularity** | [**TelemetryGranularityEnum**](.md) | Granularity of the telemetry data. Default is 'day'. | [optional] [default to null]

### Return type

[**GetSystemProductionMicroTelemetryResponse**](GetSystemProductionMicroTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemRgmStats

rgm_stats

Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one week, returns one week of intervals.
Intervals are 15 minutes in length and start at the top of the hour.
Requests for times that do not fall on the 15-minute marks are rounded down.
For example, a request for 08:01, 08:08, 08:11, or 08:14 (in epoch format) is treated as a request for 08:00 (in epoch format). Intervals are listed by their end times in epoch format.
The requested date range in one API hit cannot be more than 7 days and the requested start at must be within 2 years from current time.
If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.

### Example

```bash
 getSystemRgmStats system_id=value  start_at=value  end_at=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **startAt** | **integer** | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's operational_date, the response data begins at midnight of the first reported interval date. | [optional] [default to null]
 **endAt** | **integer** | End of reporting period in Unix epoch time. If no end is specified, default to the time of the request or (start time + 1 week), whichever is earlier. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional] [default to null]

### Return type

[**GetSystemRgmStatsResponse**](GetSystemRgmStatsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

