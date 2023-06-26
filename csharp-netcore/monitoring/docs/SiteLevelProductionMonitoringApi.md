# EnphaseOpenAPI.Monitoring.Api.SiteLevelProductionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetSystemEnergyLifetime**](SiteLevelProductionMonitoringApi.md#getsystemenergylifetime) | **GET** /systems/{system_id}/energy_lifetime | energy_lifetime |
| [**GetSystemProductionMeterReadings**](SiteLevelProductionMonitoringApi.md#getsystemproductionmeterreadings) | **GET** /systems/{system_id}/production_meter_readings | production_meter_readings |
| [**GetSystemProductionMeterTelemetry**](SiteLevelProductionMonitoringApi.md#getsystemproductionmetertelemetry) | **GET** /systems/{system_id}/telemetry/production_meter | Retrieves telemetry for all production meters for a system |
| [**GetSystemProductionMicroTelemetry**](SiteLevelProductionMonitoringApi.md#getsystemproductionmicrotelemetry) | **GET** /systems/{system_id}/telemetry/production_micro | Retrieves telemetry for all production micros for a system |
| [**GetSystemRgmStats**](SiteLevelProductionMonitoringApi.md#getsystemrgmstats) | **GET** /systems/{system_id}/rgm_stats | rgm_stats |

<a id="getsystemenergylifetime"></a>
# **GetSystemEnergyLifetime**
> GetSystemEnergyLifetimeResponse GetSystemEnergyLifetime (int systemId, DateTimeOffset? startDate = null, DateTimeOffset? endDate = null, SystemEnergyLifetimeProductionEnum? production = null)

energy_lifetime

Returns a daily time series of energy produced by the system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been reported for the last days in the series. If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed. Later, it switches to using the data as measured by the meter. This is called the \"merged time series\". The attribute 'meter_start_date' indicates the time when the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter production=all to the request.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemEnergyLifetimeExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v4";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new SiteLevelProductionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | Start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional) 
            var endDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional) 
            var production = (SystemEnergyLifetimeProductionEnum) "all";  // SystemEnergyLifetimeProductionEnum? | When 'all', returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. (optional) 

            try
            {
                // energy_lifetime
                GetSystemEnergyLifetimeResponse result = apiInstance.GetSystemEnergyLifetime(systemId, startDate, endDate, production);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemEnergyLifetime: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemEnergyLifetimeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // energy_lifetime
    ApiResponse<GetSystemEnergyLifetimeResponse> response = apiInstance.GetSystemEnergyLifetimeWithHttpInfo(systemId, startDate, endDate, production);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemEnergyLifetimeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **startDate** | **DateTimeOffset?** | Start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional]  |
| **endDate** | **DateTimeOffset?** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional]  |
| **production** | **SystemEnergyLifetimeProductionEnum?** | When &#39;all&#39;, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | [optional]  |

### Return type

[**GetSystemEnergyLifetimeResponse**](GetSystemEnergyLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | When the query parameters include \&quot;production&#x3D;all\&quot;, returns meter and microinverter-measured time series. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemproductionmeterreadings"></a>
# **GetSystemProductionMeterReadings**
> GetSystemProductionMeterReadingsResponse GetSystemProductionMeterReadings (int systemId, long? endAt = null)

production_meter_readings

Returns the last known reading of each production meter on the system as of the requested time, regardless of whether the meter is currently in service or retired. Read_at is the time at which the reading was taken, and is always less than or equal to the requested end_at. Commonly, the reading will be within 30 minutes of the requested end_at. However, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system. Systems that are configured to report infrequently can show large deltas on all meters, especially when end_at is close to the current time. Meters that have been retired from a system will show an end_at that doesn't change, and that eventually is far away from the current time.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemProductionMeterReadingsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v4";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new SiteLevelProductionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var endAt = 789L;  // long? | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. (optional) 

            try
            {
                // production_meter_readings
                GetSystemProductionMeterReadingsResponse result = apiInstance.GetSystemProductionMeterReadings(systemId, endAt);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemProductionMeterReadings: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemProductionMeterReadingsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // production_meter_readings
    ApiResponse<GetSystemProductionMeterReadingsResponse> response = apiInstance.GetSystemProductionMeterReadingsWithHttpInfo(systemId, endAt);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemProductionMeterReadingsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **endAt** | **long?** | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional]  |

### Return type

[**GetSystemProductionMeterReadingsResponse**](GetSystemProductionMeterReadingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | production_meter_readings |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemproductionmetertelemetry"></a>
# **GetSystemProductionMeterTelemetry**
> GetSystemProductionMeterTelemetryResponse GetSystemProductionMeterTelemetry (int systemId, long? startAt = null, TelemetryGranularityEnum? granularity = null)

Retrieves telemetry for all production meters for a system

Retrieves telemetry for all the production meters of a system. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemProductionMeterTelemetryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v4";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new SiteLevelProductionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startAt = 789L;  // long? | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional) 
            var granularity = (TelemetryGranularityEnum) "15mins";  // TelemetryGranularityEnum? | Granularity of the telemetry data. Default is 'day'. (optional) 

            try
            {
                // Retrieves telemetry for all production meters for a system
                GetSystemProductionMeterTelemetryResponse result = apiInstance.GetSystemProductionMeterTelemetry(systemId, startAt, granularity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemProductionMeterTelemetry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemProductionMeterTelemetryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves telemetry for all production meters for a system
    ApiResponse<GetSystemProductionMeterTelemetryResponse> response = apiInstance.GetSystemProductionMeterTelemetryWithHttpInfo(systemId, startAt, granularity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemProductionMeterTelemetryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **startAt** | **long?** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]  |
| **granularity** | **TelemetryGranularityEnum?** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional]  |

### Return type

[**GetSystemProductionMeterTelemetryResponse**](GetSystemProductionMeterTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Telemetry for all production meters. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemproductionmicrotelemetry"></a>
# **GetSystemProductionMicroTelemetry**
> GetSystemProductionMicroTelemetryResponse GetSystemProductionMicroTelemetry (int systemId, long? startAt = null, TelemetryGranularityEnum? granularity = null)

Retrieves telemetry for all production micros for a system

Retrieves telemetry for all the production micros of a system. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemProductionMicroTelemetryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v4";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new SiteLevelProductionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startAt = 789L;  // long? | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional) 
            var granularity = (TelemetryGranularityEnum) "15mins";  // TelemetryGranularityEnum? | Granularity of the telemetry data. Default is 'day'. (optional) 

            try
            {
                // Retrieves telemetry for all production micros for a system
                GetSystemProductionMicroTelemetryResponse result = apiInstance.GetSystemProductionMicroTelemetry(systemId, startAt, granularity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemProductionMicroTelemetry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemProductionMicroTelemetryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves telemetry for all production micros for a system
    ApiResponse<GetSystemProductionMicroTelemetryResponse> response = apiInstance.GetSystemProductionMicroTelemetryWithHttpInfo(systemId, startAt, granularity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemProductionMicroTelemetryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **startAt** | **long?** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]  |
| **granularity** | **TelemetryGranularityEnum?** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional]  |

### Return type

[**GetSystemProductionMicroTelemetryResponse**](GetSystemProductionMicroTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Telemetry for all production micros. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemrgmstats"></a>
# **GetSystemRgmStats**
> GetSystemRgmStatsResponse GetSystemRgmStats (int systemId, long? startAt = null, long? endAt = null)

rgm_stats

Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one week, returns one week of intervals. Intervals are 15 minutes in length and start at the top of the hour. Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 (in epoch format) is treated as a request for 08:00 (in epoch format). Intervals are listed by their end times in epoch format. The requested date range in one API hit cannot be more than 7 days and the requested start at must be within 2 years from current time. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemRgmStatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v4";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new SiteLevelProductionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startAt = 789L;  // long? | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's operational_date, the response data begins at midnight of the first reported interval date. (optional) 
            var endAt = 789L;  // long? | End of reporting period in Unix epoch time. If no end is specified, default to the time of the request or (start time + 1 week), whichever is earlier. If the end is later than the last reported interval the response data ends with the last reported interval. (optional) 

            try
            {
                // rgm_stats
                GetSystemRgmStatsResponse result = apiInstance.GetSystemRgmStats(systemId, startAt, endAt);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemRgmStats: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemRgmStatsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // rgm_stats
    ApiResponse<GetSystemRgmStatsResponse> response = apiInstance.GetSystemRgmStatsWithHttpInfo(systemId, startAt, endAt);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelProductionMonitoringApi.GetSystemRgmStatsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **startAt** | **long?** | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s operational_date, the response data begins at midnight of the first reported interval date. | [optional]  |
| **endAt** | **long?** | End of reporting period in Unix epoch time. If no end is specified, default to the time of the request or (start time + 1 week), whichever is earlier. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional]  |

### Return type

[**GetSystemRgmStatsResponse**](GetSystemRgmStatsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | rgm_stats |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

