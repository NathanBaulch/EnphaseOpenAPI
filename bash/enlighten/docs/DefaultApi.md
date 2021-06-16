# DefaultApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumptionLifetime**](DefaultApi.md#consumptionLifetime) | **GET** /systems/{system_id}/consumption_lifetime | 
[**consumptionStats**](DefaultApi.md#consumptionStats) | **GET** /systems/{system_id}/consumption_stats | 
[**energyLifetime**](DefaultApi.md#energyLifetime) | **GET** /systems/{system_id}/energy_lifetime | 
[**envoys**](DefaultApi.md#envoys) | **GET** /systems/{system_id}/envoys | 
[**inventory**](DefaultApi.md#inventory) | **GET** /systems/{system_id}/inventory | 
[**invertersSummaryByEnvoyOrSite**](DefaultApi.md#invertersSummaryByEnvoyOrSite) | **GET** /systems/inverters_summary_by_envoy_or_site | 
[**monthlyProduction**](DefaultApi.md#monthlyProduction) | **GET** /systems/{system_id}/monthly_production | 
[**productionMeterReadings**](DefaultApi.md#productionMeterReadings) | **GET** /systems/{system_id}/production_meter_readings | 
[**rgmStats**](DefaultApi.md#rgmStats) | **GET** /systems/{system_id}/rgm_stats | 
[**searchSystemId**](DefaultApi.md#searchSystemId) | **GET** /systems/search_system_id | 
[**stats**](DefaultApi.md#stats) | **GET** /systems/{system_id}/stats | 
[**summary**](DefaultApi.md#summary) | **GET** /systems/{system_id}/summary | 
[**systems**](DefaultApi.md#systems) | **GET** /systems | 



## consumptionLifetime



Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter,
returns '204' - No Content. If you don't have permission to view consumption data, the response code is '401'.

The time series includes one entry for each day from the 'start_date' to the 'end_date'. There are no gaps in the time series. If the response includes trailing zeroes, such as
[909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system's status in the 'meta' attribute of the response to determine when the system
last reported and whether it has communication or metering problems.

### Example

```bash
 consumptionLifetime  user_id=value system_id=value  start_date=value  end_date=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]
 **startDate** | **string** | The date on which to start the time series. Defaults to the system's operational date. | [optional] [default to null]
 **endDate** | **string** | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional] [default to null]

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## consumptionStats



Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals
are 15 minutes in length and start at the top of the hour.

Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed
by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.

If the system doesn't have any consumption meters installed, the response includes an empty intervals array.

If you don't have permission to view consumption data, the response code is '401'.

Under some conditions, data for a given period may be temporarily unavailable.

### Example

```bash
 consumptionStats  user_id=value system_id=value  start_at=value  end_at=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]
 **startAt** | **integer** | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago,
the response includes an empty intervals list. If the start is earlier than the system's 'operational_date', the response data begins with the first interval of the 'operational_date'. | [optional] [default to null]
 **endAt** | **integer** | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with
the last reported interval. | [optional] [default to null]

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## energyLifetime



Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.

The time series includes one entry for each day from the 'start_date' to the 'end_date'. There are no gaps in the time series. If the response includes trailing zeroes, such as
'[909, 4970, 0, 0, 0]', then no energy has been reported for the last days in the series. You can check the system's status in the 'meta' attribute of the response to determine when the
system last reported and whether it has communication or production problems.

If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as
measured by the meter. This is called the \"merged time series\". In addition, the response includes the attribute 'meter_start_date', to indicate where in the time series the meter
measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter 'production=all' to the request.

### Example

```bash
 energyLifetime  user_id=value system_id=value  start_date=value  end_date=value  production=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]
 **startDate** | **string** | The date on which to start the time series. Defaults to the system's operational date. | [optional] [default to null]
 **endDate** | **string** | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional] [default to null]
 **production** | **string** | When 'all', returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | [optional] [default to null]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## envoys



Returns a listing of all active Envoys currently deployed on the system.

### Example

```bash
 envoys  user_id=value system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## inventory



Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \"Active\" does not imply that the device is currently
reporting, producing, or measuring energy.

### Example

```bash
 inventory  user_id=value system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## invertersSummaryByEnvoyOrSite



Returns the summary along with the energy produced on the system over its lifetime.

### Example

```bash
 invertersSummaryByEnvoyOrSite  user_id=value  site_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **siteId** | **integer** | The identifier of the system. | [default to null]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## monthlyProduction



This endpoint is deprecated and will be removed in a future release. Use 'production_meter_readings' or 'energy_lifetime' instead.

Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system,
measurements come from the meter; otherwise, measurements come from the microinverters.

This endpoint can return a response of Data Temporarily Unavailable.

### Example

```bash
 monthlyProduction  user_id=value system_id=value  start_date=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]
 **startDate** | **string** | Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a 'start_date' of 2011-07-20 returns data through 2011-06-19. When the
start date is the first of a calendar month, the end end date is the last day of that month. | [optional] [default to null]

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## productionMeterReadings



Returns the last known \"odometer\" reading of each revenue-grade production meter on the system as of the requested time.

This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. 'read_at' is the time at which the
reading was taken, and is always less than or equal to the requested 'end_at'. Commonly, the reading will be within 30 minutes of the requested 'end_at'; however, larger deltas can occur and
do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when
'end_at' is close to the current time. Meters that have been retired from a system will show an 'end_at' that doesn't change, and that eventually is far away from the current time.

### Example

```bash
 productionMeterReadings  user_id=value system_id=value  end_at=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]
 **endAt** | **integer** |  | [optional] [default to null]

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## rgmStats



Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of
intervals. Intervals are 15 minutes in length and start at the top of the hour.

Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed
by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.

If the system doesn't have any revenue-grade meters installed, the response includes an empty intervals array.

Under some conditions, data for a given period may be temporarily unavailable.

### Example

```bash
 rgmStats  user_id=value system_id=value  start_at=value  end_at=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]
 **startAt** | **integer** | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago,
the response includes an empty intervals list. If the start is earlier than the system's 'operational_date', the response data begins with the first interval of the 'operational_date'. | [optional] [default to null]
 **endAt** | **integer** | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with
the last reported interval. | [optional] [default to null]

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## searchSystemId



Get system ID by envoy serial number.

### Example

```bash
 searchSystemId  user_id=value  serial_num=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **serialNum** | **string** | Serial number of the envoy. | [default to null]

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## stats



Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of
intervals. Intervals are 5 minutes in length and start at the top of the hour.

Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed
by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.

The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a
gap, because the microinverters do not produce at night.

Sometimes a request cannot be processed because the requested dates are invalid for the the system in question. Examples include asking for stats starting at a time that is later than the
system's last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is '422' and the response body includes an error reason
as well as the parameters used to process the request.

If the system doesn't have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.

### Example

```bash
 stats  user_id=value system_id=value  start_at=value  end_at=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]
 **startAt** | **integer** | Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today,
the response includes an empty intervals list. If the start is earlier than the system's 'operational_date', the response data begins with the 'operational_date'. | [optional] [default to null]
 **endAt** | **integer** | End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last
reported interval. | [optional] [default to null]

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## summary



Returns summary information for the specified system.

### Example

```bash
 summary  user_id=value system_id=value  summary_date=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **systemId** | **integer** |  | [default to null]
 **summaryDate** | **string** | Start of reporting period. If no 'summary_date' is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested
day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and '422' status. | [optional] [default to null]

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## systems



Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full
list, use the 'next' attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.

### Example

```bash
 systems  user_id=value  next=value  limit=value  system_id=value  Specify as:  system_id[]=value1 system_id[]=value2 system_id[]=...  system_name=value  Specify as:  system_name[]=value1 system_name[]=value2 system_name[]=...  status=value  Specify as:  status[]=value1 status[]=value2 status[]=...  reference=value  Specify as:  reference[]=value1 reference[]=value2 reference[]=...  installer=value  Specify as:  installer[]=value1 installer[]=value2 installer[]=...  connection_type=value  Specify as:  connection_type[]=value1 connection_type[]=value2 connection_type[]=...
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** |  | [default to null]
 **next** | **string** |  | [optional] [default to null]
 **limit** | **integer** |  | [optional] [default to 100]
 **systemId** | **integer** |  | [optional] [default to null]
 **systemIdLeft_Square_BracketRight_Square_Bracket** | [**array[integer]**](integer.md) |  | [optional] [default to null]
 **systemName** | **string** |  | [optional] [default to null]
 **systemNameLeft_Square_BracketRight_Square_Bracket** | [**array[string]**](string.md) |  | [optional] [default to null]
 **status** | [**Status**](.md) |  | [optional] [default to null]
 **statusLeft_Square_BracketRight_Square_Bracket** | [**array[Status]**](Status.md) |  | [optional] [default to null]
 **reference** | **string** |  | [optional] [default to null]
 **referenceLeft_Square_BracketRight_Square_Bracket** | [**array[string]**](string.md) |  | [optional] [default to null]
 **installer** | **string** |  | [optional] [default to null]
 **installerLeft_Square_BracketRight_Square_Bracket** | [**array[string]**](string.md) |  | [optional] [default to null]
 **connectionType** | [**ConnectionType**](.md) |  | [optional] [default to null]
 **connectionTypeLeft_Square_BracketRight_Square_Bracket** | [**array[ConnectionType]**](ConnectionType.md) |  | [optional] [default to null]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

