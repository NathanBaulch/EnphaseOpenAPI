# EnphaseOpenAPI.Commissioning.Api.EstimateApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetActivationEstimate**](EstimateApi.md#getactivationestimate) | **GET** /activations/{activation_id}/estimate | Returns the estimate for this system. |
| [**UpdateActivationEstimate**](EstimateApi.md#updateactivationestimate) | **PUT** /activations/{activation_id}/estimate | Update the estimate for this system. |

<a id="getactivationestimate"></a>
# **GetActivationEstimate**
> SystemEstimate GetActivationEstimate (int activationId)

Returns the estimate for this system.

Provides access to production estimates for a system. An estimate includes the annual degradation factor for the system as well as estimated production, in kWh, for each month. By default degrade_factor value is 0.5 and month_estimates value is an empty array.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetActivationEstimateExample
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

            var apiInstance = new EstimateApi(config);
            var activationId = 56;  // int | Activation ID.

            try
            {
                // Returns the estimate for this system.
                SystemEstimate result = apiInstance.GetActivationEstimate(activationId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EstimateApi.GetActivationEstimate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetActivationEstimateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Returns the estimate for this system.
    ApiResponse<SystemEstimate> response = apiInstance.GetActivationEstimateWithHttpInfo(activationId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EstimateApi.GetActivationEstimateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Activation ID. |  |

### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateactivationestimate"></a>
# **UpdateActivationEstimate**
> SystemEstimate UpdateActivationEstimate (int activationId, UpdateActivationEstimateRequest _params = null)

Update the estimate for this system.

Updates the estimate for this system.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class UpdateActivationEstimateExample
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

            var apiInstance = new EstimateApi(config);
            var activationId = 56;  // int | Activation ID.
            var _params = new UpdateActivationEstimateRequest(); // UpdateActivationEstimateRequest |  (optional) 

            try
            {
                // Update the estimate for this system.
                SystemEstimate result = apiInstance.UpdateActivationEstimate(activationId, _params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EstimateApi.UpdateActivationEstimate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateActivationEstimateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update the estimate for this system.
    ApiResponse<SystemEstimate> response = apiInstance.UpdateActivationEstimateWithHttpInfo(activationId, _params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EstimateApi.UpdateActivationEstimateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Activation ID. |  |
| **_params** | [**UpdateActivationEstimateRequest**](UpdateActivationEstimateRequest.md) |  | [optional]  |

### Return type

[**SystemEstimate**](SystemEstimate.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode. |  -  |
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

