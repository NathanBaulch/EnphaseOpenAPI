# EnphaseOpenAPI.Monitoring.Api.SystemDetailsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetInvertersSummaryByEnvoyOrSite**](SystemDetailsApi.md#getinverterssummarybyenvoyorsite) | **GET** /systems/inverters_summary_by_envoy_or_site | inverters_summary_by_envoy_or_site |
| [**GetSystem**](SystemDetailsApi.md#getsystem) | **GET** /systems/{system_id} | Retrieves a System by ID |
| [**GetSystemDevices**](SystemDetailsApi.md#getsystemdevices) | **GET** /systems/{system_id}/devices | Retrieves devices for a given system |
| [**GetSystemSummary**](SystemDetailsApi.md#getsystemsummary) | **GET** /systems/{system_id}/summary | Retrieves a system summary |
| [**GetSystems**](SystemDetailsApi.md#getsystems) | **GET** /systems | Fetch systems |
| [**RetrieveSystemId**](SystemDetailsApi.md#retrievesystemid) | **GET** /systems/retrieve_system_id | Retrieve system for a given envoy serial number |
| [**SearchSystems**](SystemDetailsApi.md#searchsystems) | **POST** /systems/search | Search and filter systems |

<a id="getinverterssummarybyenvoyorsite"></a>
# **GetInvertersSummaryByEnvoyOrSite**
> List&lt;GetInvertersSummaryByEnvoyOrSiteResponseInner&gt; GetInvertersSummaryByEnvoyOrSite (int? siteId = null, string envoySerialNumber = null)

inverters_summary_by_envoy_or_site

Returns the microinverters summary based on the specified active envoy serial number or system.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetInvertersSummaryByEnvoyOrSiteExample
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

            var apiInstance = new SystemDetailsApi(config);
            var siteId = 56;  // int? | Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site. (optional) 
            var envoySerialNumber = "envoySerialNumber_example";  // string | Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response. (optional) 

            try
            {
                // inverters_summary_by_envoy_or_site
                List<GetInvertersSummaryByEnvoyOrSiteResponseInner> result = apiInstance.GetInvertersSummaryByEnvoyOrSite(siteId, envoySerialNumber);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemDetailsApi.GetInvertersSummaryByEnvoyOrSite: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetInvertersSummaryByEnvoyOrSiteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // inverters_summary_by_envoy_or_site
    ApiResponse<List<GetInvertersSummaryByEnvoyOrSiteResponseInner>> response = apiInstance.GetInvertersSummaryByEnvoyOrSiteWithHttpInfo(siteId, envoySerialNumber);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemDetailsApi.GetInvertersSummaryByEnvoyOrSiteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **siteId** | **int?** | Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site. | [optional]  |
| **envoySerialNumber** | **string** | Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response. | [optional]  |

### Return type

[**List&lt;GetInvertersSummaryByEnvoyOrSiteResponseInner&gt;**](GetInvertersSummaryByEnvoyOrSiteResponseInner.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | inverters_summary_by_envoy_or_site |  -  |
| **401** | Unauthorized |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystem"></a>
# **GetSystem**
> System GetSystem (int systemId)

Retrieves a System by ID

Retrieves a system by ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemExample
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

            var apiInstance = new SystemDetailsApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.

            try
            {
                // Retrieves a System by ID
                System result = apiInstance.GetSystem(systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemDetailsApi.GetSystem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a System by ID
    ApiResponse<System> response = apiInstance.GetSystemWithHttpInfo(systemId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemDetailsApi.GetSystemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |

### Return type

[**System**](System.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | System fetched. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemdevices"></a>
# **GetSystemDevices**
> GetSystemDevicesResponse GetSystemDevices (int systemId)

Retrieves devices for a given system

Retrieves devices for a given system. Only devices that are active will be returned in the response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemDevicesExample
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

            var apiInstance = new SystemDetailsApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.

            try
            {
                // Retrieves devices for a given system
                GetSystemDevicesResponse result = apiInstance.GetSystemDevices(systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemDetailsApi.GetSystemDevices: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemDevicesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves devices for a given system
    ApiResponse<GetSystemDevicesResponse> response = apiInstance.GetSystemDevicesWithHttpInfo(systemId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemDetailsApi.GetSystemDevicesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |

### Return type

[**GetSystemDevicesResponse**](GetSystemDevicesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of devices. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemsummary"></a>
# **GetSystemSummary**
> GetSystemSummaryResponse GetSystemSummary (int systemId)

Retrieves a system summary

Returns system summary based on the specified system ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemSummaryExample
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

            var apiInstance = new SystemDetailsApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.

            try
            {
                // Retrieves a system summary
                GetSystemSummaryResponse result = apiInstance.GetSystemSummary(systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemDetailsApi.GetSystemSummary: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemSummaryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a system summary
    ApiResponse<GetSystemSummaryResponse> response = apiInstance.GetSystemSummaryWithHttpInfo(systemId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemDetailsApi.GetSystemSummaryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |

### Return type

[**GetSystemSummaryResponse**](GetSystemSummaryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | System summary fetched. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystems"></a>
# **GetSystems**
> GetSystemsResponse GetSystems (int? page = null, int? size = null, SystemSortByEnum? sortBy = null)

Fetch systems

Returns a list of systems for which the user can make API requests. By default, systems are returned in batches of 10. The maximum size is 100.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemsExample
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

            var apiInstance = new SystemDetailsApi(config);
            var page = 56;  // int? | Page to be returned. Default=1, Min=1. For example, if page is set to 2, 2nd page is returned. (optional) 
            var size = 56;  // int? | Maximum number of records shown per page. Default=10, Min=1, Max=100.  For example, if set to 5, 5 records are shown per page. (optional) 
            var sortBy = (SystemSortByEnum) "id";  // SystemSortByEnum? | Returns list of systems sorted by <sort_by> field. To get ASC order sorted list, user sort_by = <key>. To get DESC order sorted list, use sort_by = (-)<key>. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID. (optional) 

            try
            {
                // Fetch systems
                GetSystemsResponse result = apiInstance.GetSystems(page, size, sortBy);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemDetailsApi.GetSystems: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch systems
    ApiResponse<GetSystemsResponse> response = apiInstance.GetSystemsWithHttpInfo(page, size, sortBy);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemDetailsApi.GetSystemsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int?** | Page to be returned. Default&#x3D;1, Min&#x3D;1. For example, if page is set to 2, 2nd page is returned. | [optional]  |
| **size** | **int?** | Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100.  For example, if set to 5, 5 records are shown per page. | [optional]  |
| **sortBy** | **SystemSortByEnum?** | Returns list of systems sorted by &lt;sort_by&gt; field. To get ASC order sorted list, user sort_by &#x3D; &lt;key&gt;. To get DESC order sorted list, use sort_by &#x3D; (-)&lt;key&gt;. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID. | [optional]  |

### Return type

[**GetSystemsResponse**](GetSystemsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of systems. |  -  |
| **401** | Unauthorized |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrievesystemid"></a>
# **RetrieveSystemId**
> RetrieveSystemIdResponse RetrieveSystemId (string serialNum)

Retrieve system for a given envoy serial number

Get system ID by passing envoy serial number. If the serial number of a retired envoy is passed in the request param, a 404 Not Found response will be returned.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class RetrieveSystemIdExample
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

            var apiInstance = new SystemDetailsApi(config);
            var serialNum = "serialNum_example";  // string | Envoy serial number.

            try
            {
                // Retrieve system for a given envoy serial number
                RetrieveSystemIdResponse result = apiInstance.RetrieveSystemId(serialNum);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemDetailsApi.RetrieveSystemId: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveSystemIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve system for a given envoy serial number
    ApiResponse<RetrieveSystemIdResponse> response = apiInstance.RetrieveSystemIdWithHttpInfo(serialNum);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemDetailsApi.RetrieveSystemIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **serialNum** | **string** | Envoy serial number. |  |

### Return type

[**RetrieveSystemIdResponse**](RetrieveSystemIdResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | retrieve_system_id |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="searchsystems"></a>
# **SearchSystems**
> SearchSystemsResponse SearchSystems (int? page = null, int? size = null, SearchSystemsRequest _params = null)

Search and filter systems

Search and filter systems. Provide only valid values in request parameters. Empty and invalid values will be ignored. Invalid keys will be rejected.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class SearchSystemsExample
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

            var apiInstance = new SystemDetailsApi(config);
            var page = 56;  // int? | Page to be returned. Default=1, Min=1, e.g=2. (optional) 
            var size = 56;  // int? | Maximum number of records shown per page. Default=10, Min=1, Max=1000, e.g=5. (optional) 
            var _params = new SearchSystemsRequest(); // SearchSystemsRequest |  (optional) 

            try
            {
                // Search and filter systems
                SearchSystemsResponse result = apiInstance.SearchSystems(page, size, _params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemDetailsApi.SearchSystems: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SearchSystemsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Search and filter systems
    ApiResponse<SearchSystemsResponse> response = apiInstance.SearchSystemsWithHttpInfo(page, size, _params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemDetailsApi.SearchSystemsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int?** | Page to be returned. Default&#x3D;1, Min&#x3D;1, e.g&#x3D;2. | [optional]  |
| **size** | **int?** | Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;1000, e.g&#x3D;5. | [optional]  |
| **_params** | [**SearchSystemsRequest**](SearchSystemsRequest.md) |  | [optional]  |

### Return type

[**SearchSystemsResponse**](SearchSystemsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of systems. |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

