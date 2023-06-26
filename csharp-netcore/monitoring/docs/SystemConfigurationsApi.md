# EnphaseOpenAPI.Monitoring.Api.SystemConfigurationsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetSystemBatterySettings**](SystemConfigurationsApi.md#getsystembatterysettings) | **GET** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system |
| [**GetSystemGridStatusSettings**](SystemConfigurationsApi.md#getsystemgridstatussettings) | **GET** /systems/config/{system_id}/grid_status | Returns the current grid status settings of a system |
| [**GetSystemLoadControlSettings**](SystemConfigurationsApi.md#getsystemloadcontrolsettings) | **GET** /systems/config/{system_id}/load_control | Returns the current load control settings of a system |
| [**GetSystemStormGuardSettings**](SystemConfigurationsApi.md#getsystemstormguardsettings) | **GET** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system |

<a id="getsystembatterysettings"></a>
# **GetSystemBatterySettings**
> GetSystemBatterySettingsResponse GetSystemBatterySettings (int systemId)

Returns the current battery settings of a system

Returns the current battery settings of a system.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemBatterySettingsExample
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

            var apiInstance = new SystemConfigurationsApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.

            try
            {
                // Returns the current battery settings of a system
                GetSystemBatterySettingsResponse result = apiInstance.GetSystemBatterySettings(systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemConfigurationsApi.GetSystemBatterySettings: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemBatterySettingsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Returns the current battery settings of a system
    ApiResponse<GetSystemBatterySettingsResponse> response = apiInstance.GetSystemBatterySettingsWithHttpInfo(systemId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemConfigurationsApi.GetSystemBatterySettingsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |

### Return type

[**GetSystemBatterySettingsResponse**](GetSystemBatterySettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | battery_settings |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemgridstatussettings"></a>
# **GetSystemGridStatusSettings**
> GetSystemGridStatusSettingsResponse GetSystemGridStatusSettings (int systemId)

Returns the current grid status settings of a system

Returns the current grid status settings of a system.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemGridStatusSettingsExample
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

            var apiInstance = new SystemConfigurationsApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.

            try
            {
                // Returns the current grid status settings of a system
                GetSystemGridStatusSettingsResponse result = apiInstance.GetSystemGridStatusSettings(systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemConfigurationsApi.GetSystemGridStatusSettings: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemGridStatusSettingsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Returns the current grid status settings of a system
    ApiResponse<GetSystemGridStatusSettingsResponse> response = apiInstance.GetSystemGridStatusSettingsWithHttpInfo(systemId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemConfigurationsApi.GetSystemGridStatusSettingsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |

### Return type

[**GetSystemGridStatusSettingsResponse**](GetSystemGridStatusSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | grid_status |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemloadcontrolsettings"></a>
# **GetSystemLoadControlSettings**
> GetSystemLoadControlSettingsResponse GetSystemLoadControlSettings (int systemId)

Returns the current load control settings of a system

Returns the current load control settings of a system.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemLoadControlSettingsExample
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

            var apiInstance = new SystemConfigurationsApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.

            try
            {
                // Returns the current load control settings of a system
                GetSystemLoadControlSettingsResponse result = apiInstance.GetSystemLoadControlSettings(systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemConfigurationsApi.GetSystemLoadControlSettings: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemLoadControlSettingsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Returns the current load control settings of a system
    ApiResponse<GetSystemLoadControlSettingsResponse> response = apiInstance.GetSystemLoadControlSettingsWithHttpInfo(systemId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemConfigurationsApi.GetSystemLoadControlSettingsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |

### Return type

[**GetSystemLoadControlSettingsResponse**](GetSystemLoadControlSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | load_control |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsystemstormguardsettings"></a>
# **GetSystemStormGuardSettings**
> GetSystemStormGuardSettingsResponse GetSystemStormGuardSettings (int systemId)

Returns the current storm guard settings of a system

Returns the current storm guard settings of a system.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class GetSystemStormGuardSettingsExample
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

            var apiInstance = new SystemConfigurationsApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.

            try
            {
                // Returns the current storm guard settings of a system
                GetSystemStormGuardSettingsResponse result = apiInstance.GetSystemStormGuardSettings(systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SystemConfigurationsApi.GetSystemStormGuardSettings: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemStormGuardSettingsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Returns the current storm guard settings of a system
    ApiResponse<GetSystemStormGuardSettingsResponse> response = apiInstance.GetSystemStormGuardSettingsWithHttpInfo(systemId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SystemConfigurationsApi.GetSystemStormGuardSettingsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |

### Return type

[**GetSystemStormGuardSettingsResponse**](GetSystemStormGuardSettingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | storm_guard |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable Entity |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

