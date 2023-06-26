# EnphaseOpenAPI.Monitoring.Api.SiteLevelConsumptionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetSystemBatteryLifetime**](SiteLevelConsumptionMonitoringApi.md#getsystembatterylifetime) | **GET** /systems/{system_id}/battery_lifetime | battery_lifetime |
| [**GetSystemBatteryTelemetry**](SiteLevelConsumptionMonitoringApi.md#getsystembatterytelemetry) | **GET** /systems/{system_id}/telemetry/battery | Retrieves telemetry for all batteries for a system |
| [**GetSystemConsumptionLifetime**](SiteLevelConsumptionMonitoringApi.md#getsystemconsumptionlifetime) | **GET** /systems/{system_id}/consumption_lifetime | consumption_lifetime |
| [**GetSystemConsumptionMeterTelemetry**](SiteLevelConsumptionMonitoringApi.md#getsystemconsumptionmetertelemetry) | **GET** /systems/{system_id}/telemetry/consumption_meter | Retrieves telemetry for all consumption meters for a system |
| [**GetSystemEnergyExportLifetime**](SiteLevelConsumptionMonitoringApi.md#getsystemenergyexportlifetime) | **GET** /systems/{system_id}/energy_export_lifetime | export_lifetime |
| [**GetSystemEnergyExportTelemetry**](SiteLevelConsumptionMonitoringApi.md#getsystemenergyexporttelemetry) | **GET** /systems/{system_id}/energy_export_telemetry | Retrieves energy exported to grid in regular intervals |
| [**GetSystemEnergyImportLifetime**](SiteLevelConsumptionMonitoringApi.md#getsystemenergyimportlifetime) | **GET** /systems/{system_id}/energy_import_lifetime | import_lifetime |
| [**GetSystemEnergyImportTelemetry**](SiteLevelConsumptionMonitoringApi.md#getsystemenergyimporttelemetry) | **GET** /systems/{system_id}/energy_import_telemetry | Retrieves energy imported from grid in regular intervals |

<a id="getsystembatterylifetime"></a>
# **GetSystemBatteryLifetime**
> GetSystemBatteryLifetimeResponse GetSystemBatteryLifetime (int systemId, DateTimeOffset? startDate = null, DateTimeOffset? endDate = null)

battery_lifetime

Returns a daily time series of energy charged into the batteries and energy discharged from the batteries for a system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been charged/discharged for the last days in the series.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemBatteryLifetimeExample
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

            var apiInstance = new SiteLevelConsumptionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional) 
            var endDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional) 

            try
            {
                // battery_lifetime
                GetSystemBatteryLifetimeResponse result = apiInstance.GetSystemBatteryLifetime(systemId, startDate, endDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemBatteryLifetime: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemBatteryLifetimeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // battery_lifetime
    ApiResponse<GetSystemBatteryLifetimeResponse> response = apiInstance.GetSystemBatteryLifetimeWithHttpInfo(systemId, startDate, endDate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemBatteryLifetimeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **startDate** | **DateTimeOffset?** | Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional]  |
| **endDate** | **DateTimeOffset?** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional]  |

### Return type

[**GetSystemBatteryLifetimeResponse**](GetSystemBatteryLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | battery_lifetime |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystembatterytelemetry"></a>
# **GetSystemBatteryTelemetry**
> GetSystemBatteryTelemetryResponse GetSystemBatteryTelemetry (int systemId, long? startAt = null, TelemetryGranularityEnum? granularity = null)

Retrieves telemetry for all batteries for a system

Retrieves telemetry for all the batteries of a system. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemBatteryTelemetryExample
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

            var apiInstance = new SiteLevelConsumptionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startAt = 789L;  // long? | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional) 
            var granularity = (TelemetryGranularityEnum) "15mins";  // TelemetryGranularityEnum? | Granularity of the telemetry data. Default is 'day'. (optional) 

            try
            {
                // Retrieves telemetry for all batteries for a system
                GetSystemBatteryTelemetryResponse result = apiInstance.GetSystemBatteryTelemetry(systemId, startAt, granularity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemBatteryTelemetry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemBatteryTelemetryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves telemetry for all batteries for a system
    ApiResponse<GetSystemBatteryTelemetryResponse> response = apiInstance.GetSystemBatteryTelemetryWithHttpInfo(systemId, startAt, granularity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemBatteryTelemetryWithHttpInfo: " + e.Message);
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

[**GetSystemBatteryTelemetryResponse**](GetSystemBatteryTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Telemetry for batteries. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemconsumptionlifetime"></a>
# **GetSystemConsumptionLifetime**
> GetSystemConsumptionLifetimeResponse GetSystemConsumptionLifetime (int systemId, DateTimeOffset? startDate = null, DateTimeOffset? endDate = null)

consumption_lifetime

Returns a daily time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last three days.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemConsumptionLifetimeExample
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

            var apiInstance = new SiteLevelConsumptionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional) 
            var endDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional) 

            try
            {
                // consumption_lifetime
                GetSystemConsumptionLifetimeResponse result = apiInstance.GetSystemConsumptionLifetime(systemId, startDate, endDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemConsumptionLifetime: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemConsumptionLifetimeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // consumption_lifetime
    ApiResponse<GetSystemConsumptionLifetimeResponse> response = apiInstance.GetSystemConsumptionLifetimeWithHttpInfo(systemId, startDate, endDate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemConsumptionLifetimeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **startDate** | **DateTimeOffset?** | Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional]  |
| **endDate** | **DateTimeOffset?** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional]  |

### Return type

[**GetSystemConsumptionLifetimeResponse**](GetSystemConsumptionLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | consumption_lifetime |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemconsumptionmetertelemetry"></a>
# **GetSystemConsumptionMeterTelemetry**
> GetSystemConsumptionMeterTelemetryResponse GetSystemConsumptionMeterTelemetry (int systemId, long? startAt = null, TelemetryGranularityEnum? granularity = null)

Retrieves telemetry for all consumption meters for a system

Retrieves telemetry for all the consumption meters of a system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemConsumptionMeterTelemetryExample
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

            var apiInstance = new SiteLevelConsumptionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startAt = 789L;  // long? | Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional) 
            var granularity = (TelemetryGranularityEnum) "15mins";  // TelemetryGranularityEnum? | Granularity of the telemetry data. Default is 'day'. (optional) 

            try
            {
                // Retrieves telemetry for all consumption meters for a system
                GetSystemConsumptionMeterTelemetryResponse result = apiInstance.GetSystemConsumptionMeterTelemetry(systemId, startAt, granularity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemConsumptionMeterTelemetry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemConsumptionMeterTelemetryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves telemetry for all consumption meters for a system
    ApiResponse<GetSystemConsumptionMeterTelemetryResponse> response = apiInstance.GetSystemConsumptionMeterTelemetryWithHttpInfo(systemId, startAt, granularity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemConsumptionMeterTelemetryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **startAt** | **long?** | Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]  |
| **granularity** | **TelemetryGranularityEnum?** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional]  |

### Return type

[**GetSystemConsumptionMeterTelemetryResponse**](GetSystemConsumptionMeterTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Telemetry for all consumption meters. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemenergyexportlifetime"></a>
# **GetSystemEnergyExportLifetime**
> GetSystemEnergyExportLifetimeResponse GetSystemEnergyExportLifetime (int systemId, DateTimeOffset? startDate = null, DateTimeOffset? endDate = null)

export_lifetime

Returns a daily time series of energy exported to the grid by the system over its lifetime. All measurements are in Watt-hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been exported for the last days in the series.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemEnergyExportLifetimeExample
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

            var apiInstance = new SiteLevelConsumptionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional) 
            var endDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional) 

            try
            {
                // export_lifetime
                GetSystemEnergyExportLifetimeResponse result = apiInstance.GetSystemEnergyExportLifetime(systemId, startDate, endDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportLifetime: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemEnergyExportLifetimeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // export_lifetime
    ApiResponse<GetSystemEnergyExportLifetimeResponse> response = apiInstance.GetSystemEnergyExportLifetimeWithHttpInfo(systemId, startDate, endDate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportLifetimeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **startDate** | **DateTimeOffset?** | Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional]  |
| **endDate** | **DateTimeOffset?** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional]  |

### Return type

[**GetSystemEnergyExportLifetimeResponse**](GetSystemEnergyExportLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | export_lifetime |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemenergyexporttelemetry"></a>
# **GetSystemEnergyExportTelemetry**
> GetSystemEnergyExportTelemetryResponse GetSystemEnergyExportTelemetry (int systemId, long? startAt = null, TelemetryGranularityEnum? granularity = null)

Retrieves energy exported to grid in regular intervals

Retrieves energy exported to grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system’s first reported date, then midnight of the system’s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemEnergyExportTelemetryExample
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

            var apiInstance = new SiteLevelConsumptionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startAt = 789L;  // long? | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional) 
            var granularity = (TelemetryGranularityEnum) "15mins";  // TelemetryGranularityEnum? | Granularity of the telemetry data. Default is 'day'. (optional) 

            try
            {
                // Retrieves energy exported to grid in regular intervals
                GetSystemEnergyExportTelemetryResponse result = apiInstance.GetSystemEnergyExportTelemetry(systemId, startAt, granularity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportTelemetry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemEnergyExportTelemetryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves energy exported to grid in regular intervals
    ApiResponse<GetSystemEnergyExportTelemetryResponse> response = apiInstance.GetSystemEnergyExportTelemetryWithHttpInfo(systemId, startAt, granularity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemEnergyExportTelemetryWithHttpInfo: " + e.Message);
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

[**GetSystemEnergyExportTelemetryResponse**](GetSystemEnergyExportTelemetryResponse.md)

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

<a id="getsystemenergyimportlifetime"></a>
# **GetSystemEnergyImportLifetime**
> GetSystemEnergyImportLifetimeResponse GetSystemEnergyImportLifetime (int systemId, DateTimeOffset? startDate = null, DateTimeOffset? endDate = null)

import_lifetime

Returns a daily time series of energy imported to the grid by the system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been imported for the last days in the series.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemEnergyImportLifetimeExample
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

            var apiInstance = new SiteLevelConsumptionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | Requested start date of the time series data. Defaults to the system's operational date. If the start_date is earlier than the system's operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. (optional) 
            var endDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. (optional) 

            try
            {
                // import_lifetime
                GetSystemEnergyImportLifetimeResponse result = apiInstance.GetSystemEnergyImportLifetime(systemId, startDate, endDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportLifetime: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemEnergyImportLifetimeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // import_lifetime
    ApiResponse<GetSystemEnergyImportLifetimeResponse> response = apiInstance.GetSystemEnergyImportLifetimeWithHttpInfo(systemId, startDate, endDate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportLifetimeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **startDate** | **DateTimeOffset?** | Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format. | [optional]  |
| **endDate** | **DateTimeOffset?** | End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format. | [optional]  |

### Return type

[**GetSystemEnergyImportLifetimeResponse**](GetSystemEnergyImportLifetimeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | import_lifetime |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemenergyimporttelemetry"></a>
# **GetSystemEnergyImportTelemetry**
> GetSystemEnergyImportTelemetryResponse GetSystemEnergyImportTelemetry (int systemId, long? startAt = null, TelemetryGranularityEnum? granularity = null)

Retrieves energy imported from grid in regular intervals

Retrieves energy imported from grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system’s first reported date, then midnight of the system’s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemEnergyImportTelemetryExample
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

            var apiInstance = new SiteLevelConsumptionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var startAt = 789L;  // long? | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional) 
            var granularity = (TelemetryGranularityEnum) "15mins";  // TelemetryGranularityEnum? | Granularity of the telemetry data. Default is 'day'. (optional) 

            try
            {
                // Retrieves energy imported from grid in regular intervals
                GetSystemEnergyImportTelemetryResponse result = apiInstance.GetSystemEnergyImportTelemetry(systemId, startAt, granularity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportTelemetry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemEnergyImportTelemetryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves energy imported from grid in regular intervals
    ApiResponse<GetSystemEnergyImportTelemetryResponse> response = apiInstance.GetSystemEnergyImportTelemetryWithHttpInfo(systemId, startAt, granularity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SiteLevelConsumptionMonitoringApi.GetSystemEnergyImportTelemetryWithHttpInfo: " + e.Message);
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

[**GetSystemEnergyImportTelemetryResponse**](GetSystemEnergyImportTelemetryResponse.md)

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

