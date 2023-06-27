# EnphaseOpenAPI.Monitoring.Api.StreamingAPIsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**StreamSystemLiveData**](StreamingAPIsApi.md#streamsystemlivedata) | **GET** /systems/{system_id}/live_data | Site Level Live Status |

<a id="streamsystemlivedata"></a>
# **StreamSystemLiveData**
> StreamSystemLiveDataResponse StreamSystemLiveData (int systemId, int? duration = null)

Site Level Live Status

API users can get real time live status data on demand for a given system. User can retrieve real time power for PV Production, Grid Import/Export, Consumption, Battery Charge/Discharge, and Generator. Users can also retrieve Grid Status, Battery Mode, and Battery State of Charge. User will receive the stream for a duration of 30 seconds by default and can configure the time in seconds by passing 'duration' as a header parameter with a minimum value of 30 and maximum value of 300.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Monitoring.Api;
using EnphaseOpenAPI.Monitoring.Client;
using EnphaseOpenAPI.Monitoring.Model;

namespace Example
{
    public class StreamSystemLiveDataExample
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

            var apiInstance = new StreamingAPIsApi(config);
            var systemId = 56;  // int | Unique numeric ID of the system.
            var duration = 56;  // int? | Duration of the stream in seconds. Default=30, Min=30, Max=300, e.g=30. (optional) 

            try
            {
                // Site Level Live Status
                StreamSystemLiveDataResponse result = apiInstance.StreamSystemLiveData(systemId, duration);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StreamingAPIsApi.StreamSystemLiveData: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the StreamSystemLiveDataWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Site Level Live Status
    ApiResponse<StreamSystemLiveDataResponse> response = apiInstance.StreamSystemLiveDataWithHttpInfo(systemId, duration);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling StreamingAPIsApi.StreamSystemLiveDataWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | Unique numeric ID of the system. |  |
| **duration** | **int?** | Duration of the stream in seconds. Default&#x3D;30, Min&#x3D;30, Max&#x3D;300, e.g&#x3D;30. | [optional]  |

### Return type

[**StreamSystemLiveDataResponse**](StreamSystemLiveDataResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **401** | User will get 401 in the below cases. Response content type is application/json. NOT_AUTHENTICATED - API key is missing UNAUTHORIZED - Access token is invalid UNAUTHORIZED - Access token has expired NOT_AUTHENTICATED - API Key is invalid UNAUTHORIZED - Application is not authorized to access the requested resource |  -  |
| **403** | User is not authorized. Response content type is application/json. |  -  |
| **429** | Too Many Requests. Response content type is application/json. |  -  |
| **461** | Duration is less than 30 seconds. Response content type is application/json. |  -  |
| **462** | Duration is greater then 300 seconds. Response content type is application/json. |  -  |
| **463** | Duration is not integer. Response content type is application/json. |  -  |
| **466** | Envoy must be active and envoy version must be at least 6.0.0. Response content type is application/json. |  -  |
| **468** | System ID does not exist. Response content type is application/json. |  -  |
| **472** | For Ensemble sites, live stream will be supported in the following cases: If site has an active battery or active system controller, then site must have active production meter and active consumption meter. Otherwise, site must have active production meter. Response content type is application/json. |  -  |
| **550** | Service unreachable. Response content type is application/json. |  -  |
| **551** | Service unreachable. Response content type is application/json. |  -  |
| **552** | Unable to connect. Response content type is application/json. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

