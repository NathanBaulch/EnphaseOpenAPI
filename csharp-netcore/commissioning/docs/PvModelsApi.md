# EnphaseOpenAPI.Commissioning.Api.PvModelsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetPvManufacturerModels**](PvModelsApi.md#getpvmanufacturermodels) | **GET** /pv_manufacturers/{pv_manufacturer_id}/pv_models | Returns PV module manufacturers |

<a id="getpvmanufacturermodels"></a>
# **GetPvManufacturerModels**
> GetPvManufacturerModelsResponse GetPvManufacturerModels (int pvManufacturerId)

Returns PV module manufacturers

Returns information about the PV modules known in Enlighten.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetPvManufacturerModelsExample
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

            var apiInstance = new PvModelsApi(config);
            var pvManufacturerId = 56;  // int | Pv manufacturer ID.

            try
            {
                // Returns PV module manufacturers
                GetPvManufacturerModelsResponse result = apiInstance.GetPvManufacturerModels(pvManufacturerId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PvModelsApi.GetPvManufacturerModels: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPvManufacturerModelsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Returns PV module manufacturers
    ApiResponse<GetPvManufacturerModelsResponse> response = apiInstance.GetPvManufacturerModelsWithHttpInfo(pvManufacturerId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PvModelsApi.GetPvManufacturerModelsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **pvManufacturerId** | **int** | Pv manufacturer ID. |  |

### Return type

[**GetPvManufacturerModelsResponse**](GetPvManufacturerModelsResponse.md)

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

