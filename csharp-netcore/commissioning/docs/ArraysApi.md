# EnphaseOpenAPI.Commissioning.Api.ArraysApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**DeleteSystemArray**](ArraysApi.md#deletesystemarray) | **DELETE** /systems/{system_id}/arrays/{id} | Delete an array by ID |
| [**GetSystemArray**](ArraysApi.md#getsystemarray) | **GET** /systems/{system_id}/arrays/{id} | Fetch array details by ID |
| [**GetSystemArrays**](ArraysApi.md#getsystemarrays) | **GET** /systems/{system_id}/arrays | Fetch particular system Array details |
| [**UpdateSystemArray**](ArraysApi.md#updatesystemarray) | **PUT** /systems/{system_id}/arrays/{id} | Update particular system array details |
| [**UpdateSystemArrays**](ArraysApi.md#updatesystemarrays) | **PUT** /systems/{system_id}/arrays | Update all arrays for system |

<a id="deletesystemarray"></a>
# **DeleteSystemArray**
> DeleteSystemArrayResponse DeleteSystemArray (int systemId, int id)

Delete an array by ID

Delete an array by ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class DeleteSystemArrayExample
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

            var apiInstance = new ArraysApi(config);
            var systemId = 56;  // int | System ID.
            var id = 56;  // int | Array ID.

            try
            {
                // Delete an array by ID
                DeleteSystemArrayResponse result = apiInstance.DeleteSystemArray(systemId, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ArraysApi.DeleteSystemArray: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteSystemArrayWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an array by ID
    ApiResponse<DeleteSystemArrayResponse> response = apiInstance.DeleteSystemArrayWithHttpInfo(systemId, id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ArraysApi.DeleteSystemArrayWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | System ID. |  |
| **id** | **int** | Array ID. |  |

### Return type

[**DeleteSystemArrayResponse**](DeleteSystemArrayResponse.md)

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

<a id="getsystemarray"></a>
# **GetSystemArray**
> Array GetSystemArray (int systemId, int id)

Fetch array details by ID

Fetch array details by ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetSystemArrayExample
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

            var apiInstance = new ArraysApi(config);
            var systemId = 56;  // int | System ID.
            var id = 56;  // int | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Fetch particular system Array details' endpoint.

            try
            {
                // Fetch array details by ID
                Array result = apiInstance.GetSystemArray(systemId, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ArraysApi.GetSystemArray: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemArrayWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch array details by ID
    ApiResponse<Array> response = apiInstance.GetSystemArrayWithHttpInfo(systemId, id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ArraysApi.GetSystemArrayWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | System ID. |  |
| **id** | **int** | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Fetch particular system Array details&#39; endpoint. |  |

### Return type

[**Array**](Array.md)

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

<a id="getsystemarrays"></a>
# **GetSystemArrays**
> Arrays GetSystemArrays (int systemId)

Fetch particular system Array details

Fetch particular system Array details.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetSystemArraysExample
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

            var apiInstance = new ArraysApi(config);
            var systemId = 56;  // int | System ID.

            try
            {
                // Fetch particular system Array details
                Arrays result = apiInstance.GetSystemArrays(systemId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ArraysApi.GetSystemArrays: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSystemArraysWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch particular system Array details
    ApiResponse<Arrays> response = apiInstance.GetSystemArraysWithHttpInfo(systemId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ArraysApi.GetSystemArraysWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | System ID. |  |

### Return type

[**Arrays**](Arrays.md)

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

<a id="updatesystemarray"></a>
# **UpdateSystemArray**
> Array UpdateSystemArray (int systemId, int id, ArrayParams _params = null)

Update particular system array details

Update particular system array details. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall in arrays, the top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class UpdateSystemArrayExample
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

            var apiInstance = new ArraysApi(config);
            var systemId = 56;  // int | System ID.
            var id = 56;  // int | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as 'Update all Arrays' endpoint.
            var _params = new ArrayParams();  // ArrayParams |  (optional) 

            try
            {
                // Update particular system array details
                Array result = apiInstance.UpdateSystemArray(systemId, id, _params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ArraysApi.UpdateSystemArray: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSystemArrayWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update particular system array details
    ApiResponse<Array> response = apiInstance.UpdateSystemArrayWithHttpInfo(systemId, id, _params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ArraysApi.UpdateSystemArrayWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | System ID. |  |
| **id** | **int** | Array ID. If an empty value is passed in the Array ID, this endpoint behaves as &#39;Update all Arrays&#39; endpoint. |  |
| **_params** | **ArrayParams** |  | [optional]  |

### Return type

[**Array**](Array.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/text
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

<a id="updatesystemarrays"></a>
# **UpdateSystemArrays**
> Arrays UpdateSystemArrays (int systemId, UpdateSystemArraysRequest _params = null)

Update all arrays for system

Update all arrays for system. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall the arrays top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class UpdateSystemArraysExample
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

            var apiInstance = new ArraysApi(config);
            var systemId = 56;  // int | System ID.
            var _params = new UpdateSystemArraysRequest(); // UpdateSystemArraysRequest |  (optional) 

            try
            {
                // Update all arrays for system
                Arrays result = apiInstance.UpdateSystemArrays(systemId, _params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ArraysApi.UpdateSystemArrays: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSystemArraysWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update all arrays for system
    ApiResponse<Arrays> response = apiInstance.UpdateSystemArraysWithHttpInfo(systemId, _params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ArraysApi.UpdateSystemArraysWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **systemId** | **int** | System ID. |  |
| **_params** | [**UpdateSystemArraysRequest**](UpdateSystemArraysRequest.md) |  | [optional]  |

### Return type

[**Arrays**](Arrays.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/text
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

