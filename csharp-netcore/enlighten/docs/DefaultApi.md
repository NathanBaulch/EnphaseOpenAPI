# EnphaseOpenAPI.Enlighten.Api.DefaultApi

All URIs are relative to *https://api.enphaseenergy.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ConsumptionLifetime**](DefaultApi.md#consumptionlifetime) | **GET** /systems/{system_id}/consumption_lifetime | 
[**ConsumptionStats**](DefaultApi.md#consumptionstats) | **GET** /systems/{system_id}/consumption_stats | 
[**EnergyLifetime**](DefaultApi.md#energylifetime) | **GET** /systems/{system_id}/energy_lifetime | 
[**Envoys**](DefaultApi.md#envoys) | **GET** /systems/{system_id}/envoys | 
[**Inventory**](DefaultApi.md#inventory) | **GET** /systems/{system_id}/inventory | 
[**InvertersSummaryByEnvoyOrSite**](DefaultApi.md#inverterssummarybyenvoyorsite) | **GET** /systems/inverters_summary_by_envoy_or_site | 
[**MonthlyProduction**](DefaultApi.md#monthlyproduction) | **GET** /systems/{system_id}/monthly_production | 
[**ProductionMeterReadings**](DefaultApi.md#productionmeterreadings) | **GET** /systems/{system_id}/production_meter_readings | 
[**RgmStats**](DefaultApi.md#rgmstats) | **GET** /systems/{system_id}/rgm_stats | 
[**SearchSystemId**](DefaultApi.md#searchsystemid) | **GET** /systems/search_system_id | 
[**Stats**](DefaultApi.md#stats) | **GET** /systems/{system_id}/stats | 
[**Summary**](DefaultApi.md#summary) | **GET** /systems/{system_id}/summary | 
[**Systems**](DefaultApi.md#systems) | **GET** /systems | 


<a name="consumptionlifetime"></a>
# **ConsumptionLifetime**
> ConsumptionLifetime ConsumptionLifetime (string userId, int systemId, DateTime? startDate = null, DateTime? endDate = null)



Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter, returns `204` - No Content. If you don't have permission to view consumption data, the response code is `401`.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or metering problems.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class ConsumptionLifetimeExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 
            var startDate = Fri Jul 01 10:00:00 AEST 2016;  // DateTime? | The date on which to start the time series. Defaults to the system's operational date. (optional) 
            var endDate = Sun Jul 31 10:00:00 AEST 2016;  // DateTime? | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. (optional) 

            try
            {
                ConsumptionLifetime result = apiInstance.ConsumptionLifetime(userId, systemId, startDate, endDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ConsumptionLifetime: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 
 **startDate** | **DateTime?**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional] 
 **endDate** | **DateTime?**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional] 

### Return type

[**ConsumptionLifetime**](ConsumptionLifetime.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="consumptionstats"></a>
# **ConsumptionStats**
> ConsumptionStats ConsumptionStats (string userId, int systemId, int? startAt = null, int? endAt = null)



Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any consumption meters installed, the response includes an empty intervals array.  If you don't have permission to view consumption data, the response code is `401`.  Under some conditions, data for a given period may be temporarily unavailable.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class ConsumptionStatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 
            var startAt = 1448946000;  // int? | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`. (optional) 
            var endAt = 1449011615;  // int? | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. (optional) 

            try
            {
                ConsumptionStats result = apiInstance.ConsumptionStats(userId, systemId, startAt, endAt);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ConsumptionStats: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 
 **startAt** | **int?**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional] 
 **endAt** | **int?**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional] 

### Return type

[**ConsumptionStats**](ConsumptionStats.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="energylifetime"></a>
# **EnergyLifetime**
> EnergyLifetime EnergyLifetime (string userId, int systemId, DateTime? startDate = null, DateTime? endDate = null, string production = null)



Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as `[909, 4970, 0, 0, 0]`, then no energy has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or production problems.  If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as measured by the meter. This is called the \"merged time series\". In addition, the response includes the attribute `meter_start_date`, to indicate where in the time series the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter `production=all` to the request.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class EnergyLifetimeExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 
            var startDate = Tue Jan 01 11:00:00 AEDT 2013;  // DateTime? | The date on which to start the time series. Defaults to the system's operational date. (optional) 
            var endDate = Sun Jan 06 11:00:00 AEDT 2013;  // DateTime? | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. (optional) 
            var production = all;  // string | When `all`, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. (optional) 

            try
            {
                EnergyLifetime result = apiInstance.EnergyLifetime(userId, systemId, startDate, endDate, production);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.EnergyLifetime: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 
 **startDate** | **DateTime?**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional] 
 **endDate** | **DateTime?**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional] 
 **production** | **string**| When &#x60;all&#x60;, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | [optional] 

### Return type

[**EnergyLifetime**](EnergyLifetime.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **204** | No Content |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="envoys"></a>
# **Envoys**
> Envoys Envoys (string userId, int systemId)



Returns a listing of all active Envoys currently deployed on the system.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class EnvoysExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 

            try
            {
                Envoys result = apiInstance.Envoys(userId, systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.Envoys: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 

### Return type

[**Envoys**](Envoys.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="inventory"></a>
# **Inventory**
> Inventory Inventory (string userId, int systemId)



Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \"Active\" does not imply that the device is currently reporting, producing, or measuring energy.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class InventoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 

            try
            {
                Inventory result = apiInstance.Inventory(userId, systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.Inventory: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 

### Return type

[**Inventory**](Inventory.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="inverterssummarybyenvoyorsite"></a>
# **InvertersSummaryByEnvoyOrSite**
> List&lt;InvertersSummaryByEnvoyOrSite&gt; InvertersSummaryByEnvoyOrSite (string userId, int siteId)



Returns the summary along with the energy produced on the system over its lifetime.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class InvertersSummaryByEnvoyOrSiteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var siteId = 66;  // int | The identifier of the system.

            try
            {
                List<InvertersSummaryByEnvoyOrSite> result = apiInstance.InvertersSummaryByEnvoyOrSite(userId, siteId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.InvertersSummaryByEnvoyOrSite: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **siteId** | **int**| The identifier of the system. | 

### Return type

[**List&lt;InvertersSummaryByEnvoyOrSite&gt;**](InvertersSummaryByEnvoyOrSite.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="monthlyproduction"></a>
# **MonthlyProduction**
> MonthlyProduction MonthlyProduction (string userId, int systemId, DateTime? startDate = null)



This endpoint is deprecated and will be removed in a future release. Use `production_meter_readings` or `energy_lifetime` instead.  Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system, measurements come from the meter; otherwise, measurements come from the microinverters.  This endpoint can return a response of Data Temporarily Unavailable.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class MonthlyProductionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 
            var startDate = Fri Jul 01 10:00:00 AEST 2011;  // DateTime? | Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a `start_date` of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month. (optional) 

            try
            {
                MonthlyProduction result = apiInstance.MonthlyProduction(userId, systemId, startDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.MonthlyProduction: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 
 **startDate** | **DateTime?**| Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a &#x60;start_date&#x60; of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end end date is the last day of that month. | [optional] 

### Return type

[**MonthlyProduction**](MonthlyProduction.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="productionmeterreadings"></a>
# **ProductionMeterReadings**
> ProductionMeterReadings ProductionMeterReadings (string userId, int systemId, int? endAt = null)



Returns the last known \"odometer\" reading of each revenue-grade production meter on the system as of the requested time.  This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. `read_at` is the time at which the reading was taken, and is always less than or equal to the requested `end_at`. Commonly, the reading will be within 30 minutes of the requested `end_at`; however, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when `end_at` is close to the current time. Meters that have been retired from a system will show an `end_at` that doesn't change, and that eventually is far away from the current time.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class ProductionMeterReadingsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 
            var endAt = 1473901755;  // int? |  (optional) 

            try
            {
                ProductionMeterReadings result = apiInstance.ProductionMeterReadings(userId, systemId, endAt);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ProductionMeterReadings: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 
 **endAt** | **int?**|  | [optional] 

### Return type

[**ProductionMeterReadings**](ProductionMeterReadings.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="rgmstats"></a>
# **RgmStats**
> RgmStats RgmStats (string userId, int systemId, int? startAt = null, int? endAt = null)



Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any revenue-grade meters installed, the response includes an empty intervals array.  Under some conditions, data for a given period may be temporarily unavailable.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class RgmStatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 
            var startAt = 1381474800;  // int? | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`. (optional) 
            var endAt = 1381561200;  // int? | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. (optional) 

            try
            {
                RgmStats result = apiInstance.RgmStats(userId, systemId, startAt, endAt);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.RgmStats: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 
 **startAt** | **int?**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional] 
 **endAt** | **int?**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional] 

### Return type

[**RgmStats**](RgmStats.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchsystemid"></a>
# **SearchSystemId**
> SearchSystemId SearchSystemId (string userId, string serialNum)



Get system ID by envoy serial number.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class SearchSystemIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var serialNum = 23435345345;  // string | Serial number of the envoy.

            try
            {
                SearchSystemId result = apiInstance.SearchSystemId(userId, serialNum);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.SearchSystemId: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **serialNum** | **string**| Serial number of the envoy. | 

### Return type

[**SearchSystemId**](SearchSystemId.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **404** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="stats"></a>
# **Stats**
> Stats Stats (string userId, int systemId, int? startAt = null, int? endAt = null)



Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of intervals. Intervals are 5 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.  The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a gap, because the microinverters do not produce at night.  Sometimes a request cannot be processed because the requested dates are invalid for the the system in question. Examples include asking for stats starting at a time that is later than the system's last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is `422` and the response body includes an error reason as well as the parameters used to process the request.  If the system doesn't have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class StatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 
            var startAt = 1381496100;  // int? | Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the `operational_date`. (optional) 
            var endAt = 1381497600;  // int? | End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval. (optional) 

            try
            {
                Stats result = apiInstance.Stats(userId, systemId, startAt, endAt);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.Stats: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 
 **startAt** | **int?**| Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the &#x60;operational_date&#x60;. | [optional] 
 **endAt** | **int?**| End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval. | [optional] 

### Return type

[**Stats**](Stats.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="summary"></a>
# **Summary**
> Summary Summary (string userId, int systemId, DateTime? summaryDate = null)



Returns summary information for the specified system.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class SummaryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var systemId = 66;  // int | 
            var summaryDate = Fri Sep 17 10:00:00 AEST 2010;  // DateTime? | Start of reporting period. If no `summary_date` is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and `422` status. (optional) 

            try
            {
                Summary result = apiInstance.Summary(userId, systemId, summaryDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.Summary: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **systemId** | **int**|  | 
 **summaryDate** | **DateTime?**| Start of reporting period. If no &#x60;summary_date&#x60; is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and &#x60;422&#x60; status. | [optional] 

### Return type

[**Summary**](Summary.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="systems"></a>
# **Systems**
> Systems Systems (string userId, string next = null, int? limit = null, int? systemId = null, List<int> systemId2 = null, string systemName = null, List<string> systemName2 = null, Status? status = null, List<Status> status2 = null, string reference = null, List<string> reference2 = null, string installer = null, List<string> installer2 = null, ConnectionType? connectionType = null, List<ConnectionType> connectionType2 = null)



Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full list, use the `next` attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Enlighten.Api;
using EnphaseOpenAPI.Enlighten.Client;
using EnphaseOpenAPI.Enlighten.Model;

namespace Example
{
    public class SystemsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.enphaseenergy.com/api/v2";
            // Configure API key authorization: ApiKey
            config.AddApiKey("key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("key", "Bearer");

            var apiInstance = new DefaultApi(config);
            var userId = 4d6a51330a;  // string | 
            var next = 4d5467784d5445770a;  // string |  (optional) 
            var limit = 100;  // int? |  (optional)  (default to 100)
            var systemId = 67;  // int? |  (optional) 
            var systemId2 = new List<int>(); // List<int> |  (optional) 
            var systemName = Green;  // string |  (optional) 
            var systemName2 = new List<string>(); // List<string> |  (optional) 
            var status = power;  // Status? |  (optional) 
            var status2 = new List<Status>(); // List<Status> |  (optional) 
            var reference = reference_example;  // string |  (optional) 
            var reference2 = new List<string>(); // List<string> |  (optional) 
            var installer = installer_example;  // string |  (optional) 
            var installer2 = new List<string>(); // List<string> |  (optional) 
            var connectionType = ;  // ConnectionType? |  (optional) 
            var connectionType2 = new List<ConnectionType>(); // List<ConnectionType> |  (optional) 

            try
            {
                Systems result = apiInstance.Systems(userId, next, limit, systemId, systemId2, systemName, systemName2, status, status2, reference, reference2, installer, installer2, connectionType, connectionType2);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.Systems: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  | 
 **next** | **string**|  | [optional] 
 **limit** | **int?**|  | [optional] [default to 100]
 **systemId** | **int?**|  | [optional] 
 **systemId2** | [**List&lt;int&gt;**](int.md)|  | [optional] 
 **systemName** | **string**|  | [optional] 
 **systemName2** | [**List&lt;string&gt;**](string.md)|  | [optional] 
 **status** | **Status?**|  | [optional] 
 **status2** | [**List&lt;Status&gt;**](Status.md)|  | [optional] 
 **reference** | **string**|  | [optional] 
 **reference2** | [**List&lt;string&gt;**](string.md)|  | [optional] 
 **installer** | **string**|  | [optional] 
 **installer2** | [**List&lt;string&gt;**](string.md)|  | [optional] 
 **connectionType** | **ConnectionType?**|  | [optional] 
 **connectionType2** | [**List&lt;ConnectionType&gt;**](ConnectionType.md)|  | [optional] 

### Return type

[**Systems**](Systems.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Client error |  -  |
| **409** | Conflict |  -  |
| **422** | Client error |  -  |
| **500** | Server error |  -  |
| **503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

