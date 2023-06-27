# EnphaseOpenAPI.Commissioning.Api.ActivationsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreatePartnerActivation**](ActivationsApi.md#createpartneractivation) | **POST** /partner/activations | Create new activation |
| [**DeleteActivation**](ActivationsApi.md#deleteactivation) | **DELETE** /partner/activations/{activation_id} | Delete an activation by ID |
| [**GetActivationOpsProductionMode**](ActivationsApi.md#getactivationopsproductionmode) | **GET** /activations/{activation_id}/ops/production_mode | Get production mode |
| [**GetPartnerActivation**](ActivationsApi.md#getpartneractivation) | **GET** /partner/activations/{activation_id} | Retrieves an Activation by ID |
| [**GetPartnerActivations**](ActivationsApi.md#getpartneractivations) | **GET** /partner/activations | List of Activations |
| [**GrantActivationUserAccess**](ActivationsApi.md#grantactivationuseraccess) | **POST** /activations/{activation_id}/users/{user_id} | Grant Access |
| [**RevokeActivationUserAccess**](ActivationsApi.md#revokeactivationuseraccess) | **DELETE** /activations/{activation_id}/users/{user_id} | Revoke Access |
| [**SetActivationOpsProductionMode**](ActivationsApi.md#setactivationopsproductionmode) | **POST** /activations/{activation_id}/ops/production_mode | Set production mode |
| [**UpdatePartnerActivation**](ActivationsApi.md#updatepartneractivation) | **PUT** /partner/activations/{activation_id} | Update an activation. |

<a id="createpartneractivation"></a>
# **CreatePartnerActivation**
> System CreatePartnerActivation (SystemParams _params = null)

Create new activation

Create new activation.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class CreatePartnerActivationExample
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

            var apiInstance = new ActivationsApi(config);
            var _params = new SystemParams();  // SystemParams |  (optional) 

            try
            {
                // Create new activation
                System result = apiInstance.CreatePartnerActivation(_params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ActivationsApi.CreatePartnerActivation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreatePartnerActivationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create new activation
    ApiResponse<System> response = apiInstance.CreatePartnerActivationWithHttpInfo(_params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ActivationsApi.CreatePartnerActivationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **_params** | **SystemParams** |  | [optional]  |

### Return type

[**System**](System.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode. |  -  |
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteactivation"></a>
# **DeleteActivation**
> DeleteActivationResponse DeleteActivation (int activationId)

Delete an activation by ID

To delete an activation, the activation stage must be less than 3 and there are no active devices associated with it.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class DeleteActivationExample
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

            var apiInstance = new ActivationsApi(config);
            var activationId = 56;  // int | Enlighten ID of the activation(system).

            try
            {
                // Delete an activation by ID
                DeleteActivationResponse result = apiInstance.DeleteActivation(activationId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ActivationsApi.DeleteActivation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteActivationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an activation by ID
    ApiResponse<DeleteActivationResponse> response = apiInstance.DeleteActivationWithHttpInfo(activationId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ActivationsApi.DeleteActivationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Enlighten ID of the activation(system). |  |

### Return type

[**DeleteActivationResponse**](DeleteActivationResponse.md)

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

<a id="getactivationopsproductionmode"></a>
# **GetActivationOpsProductionMode**
> GetActivationOpsProductionModeResponse GetActivationOpsProductionMode (int activationId)

Get production mode

Get production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetActivationOpsProductionModeExample
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

            var apiInstance = new ActivationsApi(config);
            var activationId = 56;  // int | Enlighten ID of the activation(system). System-generated.

            try
            {
                // Get production mode
                GetActivationOpsProductionModeResponse result = apiInstance.GetActivationOpsProductionMode(activationId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ActivationsApi.GetActivationOpsProductionMode: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetActivationOpsProductionModeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get production mode
    ApiResponse<GetActivationOpsProductionModeResponse> response = apiInstance.GetActivationOpsProductionModeWithHttpInfo(activationId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ActivationsApi.GetActivationOpsProductionModeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Enlighten ID of the activation(system). System-generated. |  |

### Return type

[**GetActivationOpsProductionModeResponse**](GetActivationOpsProductionModeResponse.md)

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

<a id="getpartneractivation"></a>
# **GetPartnerActivation**
> System GetPartnerActivation (int activationId, SystemExpandEnum? expand = null)

Retrieves an Activation by ID

By default, the body of the response looks like the example below. However, you can choose to retrieve more information about the activation using response expansion, for example instead of returning only the owner's name within the system hash, the response includes detailed information about the owner by using expand=owner. You can also expand the owner's company by using expand=owner.company. The response now includes information about the owner and the company he belongs to, if any. By using expand=host will include details about the system host. You can also expand the host's company by using expand=host.company. The response now includes information about the host and the company he belongs to.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetPartnerActivationExample
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

            var apiInstance = new ActivationsApi(config);
            var activationId = 56;  // int | Enlighten ID of the activation(system). System-generated.
            var expand = (SystemExpandEnum) "owner";  // SystemExpandEnum? | Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand. (optional) 

            try
            {
                // Retrieves an Activation by ID
                System result = apiInstance.GetPartnerActivation(activationId, expand);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ActivationsApi.GetPartnerActivation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPartnerActivationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves an Activation by ID
    ApiResponse<System> response = apiInstance.GetPartnerActivationWithHttpInfo(activationId, expand);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ActivationsApi.GetPartnerActivationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Enlighten ID of the activation(system). System-generated. |  |
| **expand** | **SystemExpandEnum?** | Retrieve more information about the activation. The expand query parameter is a comma-separated list of associations to expand. | [optional]  |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getpartneractivations"></a>
# **GetPartnerActivations**
> GetPartnerActivationsResponse GetPartnerActivations (string next = null, int? limit = null, SystemStageEnum? stage = null, string reference = null, int? installerId = null, string systemName = null, string address = null, string region = null, string search = null)

List of Activations

Returns a list of activations for which the user can make API requests. There is a limit to the number of activations which can be returned at one time. If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. Provide only valid filters. During filter the activations empty and invalid filter fields are ignored. In case the installer ID doesn't exist, API will return an empty array.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetPartnerActivationsExample
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

            var apiInstance = new ActivationsApi(config);
            var next = "next_example";  // string | If the first request does not return a full list, use the 'next' attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the 'next' field. (optional) 
            var limit = 56;  // int? | There is a limit to the number of activations which can be returned at one time. (optional) 
            var stage = (SystemStageEnum) "1";  // SystemStageEnum? | Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage=1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value. (optional) 
            var reference = "reference_example";  // string | Filter activations by company reference. (optional) 
            var installerId = 56;  // int? | Filter activations by installer ID. (optional) 
            var systemName = "systemName_example";  // string | Filter activations by system name. (optional) 
            var address = "address_example";  // string | Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation. (optional) 
            var region = "region_example";  // string | Filter activations by region. Provide two latitude, longitude values to find activations between them. Format 'latitude1,longitude1,latitude2,longitude2' e.g value '44.968046,-94.420307,44.33328,-89.132008'. (optional) 
            var search = "search_example";  // string | Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation. (optional) 

            try
            {
                // List of Activations
                GetPartnerActivationsResponse result = apiInstance.GetPartnerActivations(next, limit, stage, reference, installerId, systemName, address, region, search);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ActivationsApi.GetPartnerActivations: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPartnerActivationsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List of Activations
    ApiResponse<GetPartnerActivationsResponse> response = apiInstance.GetPartnerActivationsWithHttpInfo(next, limit, stage, reference, installerId, systemName, address, region, search);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ActivationsApi.GetPartnerActivationsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **next** | **string** | If the first request does not return a full list, use the &#39;next&#39; attribute in the response body to request the next page. By default, activations are returned in batches of 100. The maximum page size is 1000. If the returned list below the limit, then response does not include the &#39;next&#39; field. | [optional]  |
| **limit** | **int?** | There is a limit to the number of activations which can be returned at one time. | [optional]  |
| **stage** | **SystemStageEnum?** | Filter activations by stage. Passing in_progress alone will consider as you have passed all the 1,2,3,4 stages. Passing multiple stage values using comma to filter. E.g. stage&#x3D;1,2,3. Passing in_progress with any other combination will give you empty systems. This parameter searches for an exact match of the input value. | [optional]  |
| **reference** | **string** | Filter activations by company reference. | [optional]  |
| **installerId** | **int?** | Filter activations by installer ID. | [optional]  |
| **systemName** | **string** | Filter activations by system name. | [optional]  |
| **address** | **string** | Filter activations by address. This will perform a partial search and return if match found with street1, street2, country, state, zipcode of the activation. | [optional]  |
| **region** | **string** | Filter activations by region. Provide two latitude, longitude values to find activations between them. Format &#39;latitude1,longitude1,latitude2,longitude2&#39; e.g value &#39;44.968046,-94.420307,44.33328,-89.132008&#39;. | [optional]  |
| **search** | **string** | Filter activations by search. This will perform a partial search and return if match found with system_name, reference, system_id, street1 and street2, country, state, zipcode of the activation. | [optional]  |

### Return type

[**GetPartnerActivationsResponse**](GetPartnerActivationsResponse.md)

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
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode. |  -  |
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="grantactivationuseraccess"></a>
# **GrantActivationUserAccess**
> GrantActivationUserAccessResponse GrantActivationUserAccess (int activationId, int userId)

Grant Access

Gives a user permission to view this system. Response status 200 indicates the access was granted. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GrantActivationUserAccessExample
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

            var apiInstance = new ActivationsApi(config);
            var activationId = 56;  // int | Enlighten ID of the activation(system).
            var userId = 56;  // int | Enlighten ID of the user which you want to grant access.

            try
            {
                // Grant Access
                GrantActivationUserAccessResponse result = apiInstance.GrantActivationUserAccess(activationId, userId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ActivationsApi.GrantActivationUserAccess: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GrantActivationUserAccessWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Grant Access
    ApiResponse<GrantActivationUserAccessResponse> response = apiInstance.GrantActivationUserAccessWithHttpInfo(activationId, userId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ActivationsApi.GrantActivationUserAccessWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Enlighten ID of the activation(system). |  |
| **userId** | **int** | Enlighten ID of the user which you want to grant access. |  |

### Return type

[**GrantActivationUserAccessResponse**](GrantActivationUserAccessResponse.md)

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

<a id="revokeactivationuseraccess"></a>
# **RevokeActivationUserAccess**
> RevokeActivationUserAccessResponse RevokeActivationUserAccess (int activationId, int userId)

Revoke Access

Revokes a user's permission to view this system. Response status 200 indicates the access was revoked. The user must be the owner or the host of an activation the API user can manage (or) Users created by API user (or) Users who belong to your company or its branches. In all other cases you will get 401 response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class RevokeActivationUserAccessExample
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

            var apiInstance = new ActivationsApi(config);
            var activationId = 56;  // int | Enlighten ID of the activation(system).
            var userId = 56;  // int | Enlighten ID of the user which you want to revoke the access.

            try
            {
                // Revoke Access
                RevokeActivationUserAccessResponse result = apiInstance.RevokeActivationUserAccess(activationId, userId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ActivationsApi.RevokeActivationUserAccess: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RevokeActivationUserAccessWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Revoke Access
    ApiResponse<RevokeActivationUserAccessResponse> response = apiInstance.RevokeActivationUserAccessWithHttpInfo(activationId, userId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ActivationsApi.RevokeActivationUserAccessWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Enlighten ID of the activation(system). |  |
| **userId** | **int** | Enlighten ID of the user which you want to revoke the access. |  |

### Return type

[**RevokeActivationUserAccessResponse**](RevokeActivationUserAccessResponse.md)

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

<a id="setactivationopsproductionmode"></a>
# **SetActivationOpsProductionMode**
> SetActivationOpsProductionModeResponse SetActivationOpsProductionMode (int activationId, SetActivationOpsProductionModeRequest _params = null)

Set production mode

Enable or Disable production mode for a particular system. For that system stage must be greater than 2, Otherwise you will get 422.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class SetActivationOpsProductionModeExample
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

            var apiInstance = new ActivationsApi(config);
            var activationId = 56;  // int | Enlighten ID of the activation(system). System-generated.
            var _params = new SetActivationOpsProductionModeRequest(); // SetActivationOpsProductionModeRequest |  (optional) 

            try
            {
                // Set production mode
                SetActivationOpsProductionModeResponse result = apiInstance.SetActivationOpsProductionMode(activationId, _params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ActivationsApi.SetActivationOpsProductionMode: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SetActivationOpsProductionModeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Set production mode
    ApiResponse<SetActivationOpsProductionModeResponse> response = apiInstance.SetActivationOpsProductionModeWithHttpInfo(activationId, _params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ActivationsApi.SetActivationOpsProductionModeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Enlighten ID of the activation(system). System-generated. |  |
| **_params** | [**SetActivationOpsProductionModeRequest**](SetActivationOpsProductionModeRequest.md) |  | [optional]  |

### Return type

[**SetActivationOpsProductionModeResponse**](SetActivationOpsProductionModeResponse.md)

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

<a id="updatepartneractivation"></a>
# **UpdatePartnerActivation**
> System UpdatePartnerActivation (int activationId, SystemParams _params = null)

Update an activation.

Update an activation.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class UpdatePartnerActivationExample
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

            var apiInstance = new ActivationsApi(config);
            var activationId = 56;  // int | Enlighten ID of the activation(system). System-generated.
            var _params = new SystemParams();  // SystemParams |  (optional) 

            try
            {
                // Update an activation.
                System result = apiInstance.UpdatePartnerActivation(activationId, _params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ActivationsApi.UpdatePartnerActivation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdatePartnerActivationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an activation.
    ApiResponse<System> response = apiInstance.UpdatePartnerActivationWithHttpInfo(activationId, _params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ActivationsApi.UpdatePartnerActivationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **activationId** | **int** | Enlighten ID of the activation(system). System-generated. |  |
| **_params** | **SystemParams** |  | [optional]  |

### Return type

[**System**](System.md)

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
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode. |  -  |
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

