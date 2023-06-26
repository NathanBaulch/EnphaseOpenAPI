# EnphaseOpenAPI.Commissioning.Api.HomeOwnerApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateUser**](HomeOwnerApi.md#createuser) | **POST** /users | Create Home owner |

<a id="createuser"></a>
# **CreateUser**
> User CreateUser (CreateUserRequest _params = null)

Create Home owner

Create a home owner user. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields. Using this API to create both homeowner as well as a company user. If you want to create company user, then pass company_id inside the user object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class CreateUserExample
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

            var apiInstance = new HomeOwnerApi(config);
            var _params = new CreateUserRequest(); // CreateUserRequest |  (optional) 

            try
            {
                // Create Home owner
                User result = apiInstance.CreateUser(_params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HomeOwnerApi.CreateUser: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Home owner
    ApiResponse<User> response = apiInstance.CreateUserWithHttpInfo(_params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HomeOwnerApi.CreateUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **_params** | [**CreateUserRequest**](CreateUserRequest.md) |  | [optional]  |

### Return type

[**User**](User.md)

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

