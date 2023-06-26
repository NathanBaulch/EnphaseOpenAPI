# EnphaseOpenAPI.Monitoring.Api.DeviceLevelProductionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetSystemAcbDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getsystemacbdevicetelemetry) | **GET** /systems/{system_id}/devices/acbs/{serial_no}/telemetry | Retrieves telemetry for single ACB |
| [**GetSystemEnchargeDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getsystemenchargedevicetelemetry) | **GET** /systems/{system_id}/devices/encharges/{serial_no}/telemetry | Retrieves telemetry for single Encharge |
| [**GetSystemMicroDeviceTelemetry**](DeviceLevelProductionMonitoringApi.md#getsystemmicrodevicetelemetry) | **GET** /systems/{system_id}/devices/micros/{serial_no}/telemetry | Retrieves telemetry for single micro/pcu |

<a id="getsystemacbdevicetelemetry"></a>
# **GetSystemAcbDeviceTelemetry**
> BatteryDeviceTelemetry GetSystemAcbDeviceTelemetry (int systemId, string serialNo, long? startAt = null, TelemetryGranularityEnum? granularity = null)

Retrieves telemetry for single ACB

Retrieves telemetry for single ACB. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemAcbDeviceTelemetryExample
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

            var apiInstance = new DeviceLevelProductionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var serialNo = "serialNo_example";  // string | Serial number of the acb.
            var startAt = 789L;  // long? | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional) 
            var granularity = (TelemetryGranularityEnum) "15mins";  // TelemetryGranularityEnum? | Granularity of the telemetry data. Default is 'day'. (optional) 

            try
            {
                // Retrieves telemetry for single ACB
                BatteryDeviceTelemetry result = apiInstance.GetSystemAcbDeviceTelemetry(systemId, serialNo, startAt, granularity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DeviceLevelProductionMonitoringApi.GetSystemAcbDeviceTelemetry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemAcbDeviceTelemetryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves telemetry for single ACB
    ApiResponse<BatteryDeviceTelemetry> response = apiInstance.GetSystemAcbDeviceTelemetryWithHttpInfo(systemId, serialNo, startAt, granularity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DeviceLevelProductionMonitoringApi.GetSystemAcbDeviceTelemetryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **serialNo** | **string** | Serial number of the acb. |  |
| **startAt** | **long?** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]  |
| **granularity** | **TelemetryGranularityEnum?** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional]  |

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Telemetry for the ACB. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemenchargedevicetelemetry"></a>
# **GetSystemEnchargeDeviceTelemetry**
> BatteryDeviceTelemetry GetSystemEnchargeDeviceTelemetry (int systemId, string serialNo, long? startAt = null, TelemetryGranularityEnum? granularity = null)

Retrieves telemetry for single Encharge

Retrieves telemetry for single Encharge. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemEnchargeDeviceTelemetryExample
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

            var apiInstance = new DeviceLevelProductionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var serialNo = "serialNo_example";  // string | Serial number of the Encharge.
            var startAt = 789L;  // long? | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional) 
            var granularity = (TelemetryGranularityEnum) "15mins";  // TelemetryGranularityEnum? | Granularity of the telemetry data. Default is 'day'. (optional) 

            try
            {
                // Retrieves telemetry for single Encharge
                BatteryDeviceTelemetry result = apiInstance.GetSystemEnchargeDeviceTelemetry(systemId, serialNo, startAt, granularity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DeviceLevelProductionMonitoringApi.GetSystemEnchargeDeviceTelemetry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemEnchargeDeviceTelemetryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves telemetry for single Encharge
    ApiResponse<BatteryDeviceTelemetry> response = apiInstance.GetSystemEnchargeDeviceTelemetryWithHttpInfo(systemId, serialNo, startAt, granularity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DeviceLevelProductionMonitoringApi.GetSystemEnchargeDeviceTelemetryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **serialNo** | **string** | Serial number of the Encharge. |  |
| **startAt** | **long?** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]  |
| **granularity** | **TelemetryGranularityEnum?** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional]  |

### Return type

[**BatteryDeviceTelemetry**](BatteryDeviceTelemetry.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Telemetry for the Encharge. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemmicrodevicetelemetry"></a>
# **GetSystemMicroDeviceTelemetry**
> GetSystemMicroDeviceTelemetryResponse GetSystemMicroDeviceTelemetry (int systemId, string serialNo, long? startAt = null, TelemetryGranularityEnum? granularity = null)

Retrieves telemetry for single micro/pcu

Retrieves telemetry for single micro/pcu. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemMicroDeviceTelemetryExample
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

            var apiInstance = new DeviceLevelProductionMonitoringApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var serialNo = "serialNo_example";  // string | Serial number of the individual solar Microinverter.
            var startAt = 789L;  // long? | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. (optional) 
            var granularity = (TelemetryGranularityEnum) "15mins";  // TelemetryGranularityEnum? | Granularity of the telemetry data. Default is 'day'. (optional) 

            try
            {
                // Retrieves telemetry for single micro/pcu
                GetSystemMicroDeviceTelemetryResponse result = apiInstance.GetSystemMicroDeviceTelemetry(systemId, serialNo, startAt, granularity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DeviceLevelProductionMonitoringApi.GetSystemMicroDeviceTelemetry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemMicroDeviceTelemetryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves telemetry for single micro/pcu
    ApiResponse<GetSystemMicroDeviceTelemetryResponse> response = apiInstance.GetSystemMicroDeviceTelemetryWithHttpInfo(systemId, serialNo, startAt, granularity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DeviceLevelProductionMonitoringApi.GetSystemMicroDeviceTelemetryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **serialNo** | **string** | Serial number of the individual solar Microinverter. |  |
| **startAt** | **long?** | Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]  |
| **granularity** | **TelemetryGranularityEnum?** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional]  |

### Return type

[**GetSystemMicroDeviceTelemetryResponse**](GetSystemMicroDeviceTelemetryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Telemetry for micro. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

