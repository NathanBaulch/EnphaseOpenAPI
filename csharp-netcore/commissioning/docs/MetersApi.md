# EnphaseOpenAPI.Commissioning.Api.MetersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetSystemMeter**](MetersApi.md#getsystemmeter) | **GET** /systems/{system_id}/meters/{serial_number} | Returns the requested meter detail. |
| [**SetActivationMeterStatus**](MetersApi.md#setactivationmeterstatus) | **POST** /activations/{activation_id}/meters/{serial_number}/meter_control | Enable or Disable the meters. |
| [**UpdateSystemMeter**](MetersApi.md#updatesystemmeter) | **PUT** /systems/{system_id}/meters/{serial_number} | Update the operational date of a meter by serial number. |

<a id="getsystemmeter"></a>
# **GetSystemMeter**
> GetSystemMeterResponse GetSystemMeter (int systemId, string serialNumber)

Returns the requested meter detail.

Returns the requested meter by serial number. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetSystemMeterExample
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

            var apiInstance = new MetersApi(config);
            var systemId = 56;  // int | System ID.
            var serialNumber = "serialNumber_example";  // string | Meter serial number.

            try
            {
                // Returns the requested meter detail.
                GetSystemMeterResponse result = apiInstance.GetSystemMeter(systemId, serialNumber);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MetersApi.GetSystemMeter: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemMeterWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Returns the requested meter detail.
    ApiResponse<GetSystemMeterResponse> response = apiInstance.GetSystemMeterWithHttpInfo(systemId, serialNumber);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MetersApi.GetSystemMeterWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | System ID. |  |
| **serialNumber** | **string** | Meter serial number. |  |

### Return type

[**GetSystemMeterResponse**](GetSystemMeterResponse.md)

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

<a id="setactivationmeterstatus"></a>
# **SetActivationMeterStatus**
> SetActivationMeterStatusResponse SetActivationMeterStatus (int activationId, string serialNumber, SetActivationMeterStatusRequest? _params = null)

Enable or Disable the meters.

Enable or Disable the meters. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class SetActivationMeterStatusExample
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

            var apiInstance = new MetersApi(config);
            var activationId = 56;  // int | Activation ID.
            var serialNumber = "serialNumber_example";  // string | Meter serial number.
            var _params = new SetActivationMeterStatusRequest?(); // SetActivationMeterStatusRequest? |  (optional) 

            try
            {
                // Enable or Disable the meters.
                SetActivationMeterStatusResponse result = apiInstance.SetActivationMeterStatus(activationId, serialNumber, _params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MetersApi.SetActivationMeterStatus: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SetActivationMeterStatusWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Enable or Disable the meters.
    ApiResponse<SetActivationMeterStatusResponse> response = apiInstance.SetActivationMeterStatusWithHttpInfo(activationId, serialNumber, _params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MetersApi.SetActivationMeterStatusWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Activation ID. |  |
| **serialNumber** | **string** | Meter serial number. |  |
| **_params** | [**SetActivationMeterStatusRequest?**](SetActivationMeterStatusRequest?.md) |  | [optional]  |

### Return type

[**SetActivationMeterStatusResponse**](SetActivationMeterStatusResponse.md)

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

<a id="updatesystemmeter"></a>
# **UpdateSystemMeter**
> UpdateSystemMeterResponse UpdateSystemMeter (int systemId, string serialNumber, DateTimeOffset? operationalDate = null)

Update the operational date of a meter by serial number.

Update the operational date of a meter. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class UpdateSystemMeterExample
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

            var apiInstance = new MetersApi(config);
            var systemId = 56;  // int | System ID.
            var serialNumber = "serialNumber_example";  // string | Meter serial number.
            var operationalDate = DateTime.Parse("2013-10-20");  // DateTimeOffset? | Operational date in the following format YYYY-MM-DD. (optional) 

            try
            {
                // Update the operational date of a meter by serial number.
                UpdateSystemMeterResponse result = apiInstance.UpdateSystemMeter(systemId, serialNumber, operationalDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MetersApi.UpdateSystemMeter: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSystemMeterWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update the operational date of a meter by serial number.
    ApiResponse<UpdateSystemMeterResponse> response = apiInstance.UpdateSystemMeterWithHttpInfo(systemId, serialNumber, operationalDate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MetersApi.UpdateSystemMeterWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | System ID. |  |
| **serialNumber** | **string** | Meter serial number. |  |
| **operationalDate** | **DateTimeOffset?** | Operational date in the following format YYYY-MM-DD. | [optional]  |

### Return type

[**UpdateSystemMeterResponse**](UpdateSystemMeterResponse.md)

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
| **422** | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode. |  -  |
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

