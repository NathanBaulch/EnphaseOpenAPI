# EnphaseOpenAPI.Commissioning.Api.CompaniesApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateCompanyUser**](CompaniesApi.md#createcompanyuser) | **POST** /companies/{company_id}/users | Create company user |
| [**GetCompanyUser**](CompaniesApi.md#getcompanyuser) | **GET** /companies/{company_id}/users/{user_id} | Returns the requested user |
| [**GetCompanyUsers**](CompaniesApi.md#getcompanyusers) | **GET** /companies/{company_id}/users | Get all users with in a company |
| [**GetSelfCompanyAuthorizedSubcontractors**](CompaniesApi.md#getselfcompanyauthorizedsubcontractors) | **GET** /companies/self/authorized_subcontractors | User&#39;s company and its authorized subcontractors. |
| [**GetSelfCompanyBranches**](CompaniesApi.md#getselfcompanybranches) | **GET** /companies/self/branches | User&#39;s company and its branches |
| [**UpdateCompanyUser**](CompaniesApi.md#updatecompanyuser) | **PUT** /companies/{company_id}/users/{user_id} | Update company user |

<a id="createcompanyuser"></a>
# **CreateCompanyUser**
> User CreateCompanyUser (int companyId, CreateCompanyUserRequest _params = null)

Create company user

Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class CreateCompanyUserExample
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

            var apiInstance = new CompaniesApi(config);
            var companyId = 56;  // int | Company ID.
            var _params = new CreateCompanyUserRequest(); // CreateCompanyUserRequest |  (optional) 

            try
            {
                // Create company user
                User result = apiInstance.CreateCompanyUser(companyId, _params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CompaniesApi.CreateCompanyUser: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateCompanyUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create company user
    ApiResponse<User> response = apiInstance.CreateCompanyUserWithHttpInfo(companyId, _params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CompaniesApi.CreateCompanyUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | Company ID. |  |
| **_params** | [**CreateCompanyUserRequest**](CreateCompanyUserRequest.md) |  | [optional]  |

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
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode. |  -  |
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcompanyuser"></a>
# **GetCompanyUser**
> User GetCompanyUser (int companyId, int userId, UserExpandEnum? expand = null)

Returns the requested user

Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetCompanyUserExample
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

            var apiInstance = new CompaniesApi(config);
            var companyId = 56;  // int | Company ID.
            var userId = 56;  // int | User ID.
            var expand = (UserExpandEnum) "company";  // UserExpandEnum? | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. (optional) 

            try
            {
                // Returns the requested user
                User result = apiInstance.GetCompanyUser(companyId, userId, expand);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CompaniesApi.GetCompanyUser: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCompanyUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Returns the requested user
    ApiResponse<User> response = apiInstance.GetCompanyUserWithHttpInfo(companyId, userId, expand);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CompaniesApi.GetCompanyUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | Company ID. |  |
| **userId** | **int** | User ID. |  |
| **expand** | **UserExpandEnum?** | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional]  |

### Return type

[**User**](User.md)

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

<a id="getcompanyusers"></a>
# **GetCompanyUsers**
> GetCompanyUsersResponse GetCompanyUsers (int companyId)

Get all users with in a company

Returns the users in the given company.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetCompanyUsersExample
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

            var apiInstance = new CompaniesApi(config);
            var companyId = 56;  // int | Company ID.

            try
            {
                // Get all users with in a company
                GetCompanyUsersResponse result = apiInstance.GetCompanyUsers(companyId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CompaniesApi.GetCompanyUsers: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCompanyUsersWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get all users with in a company
    ApiResponse<GetCompanyUsersResponse> response = apiInstance.GetCompanyUsersWithHttpInfo(companyId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CompaniesApi.GetCompanyUsersWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | Company ID. |  |

### Return type

[**GetCompanyUsersResponse**](GetCompanyUsersResponse.md)

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

<a id="getselfcompanyauthorizedsubcontractors"></a>
# **GetSelfCompanyAuthorizedSubcontractors**
> GetSelfCompanyAuthorizedSubcontractorsResponse GetSelfCompanyAuthorizedSubcontractors ()

User's company and its authorized subcontractors.

Returns all the authorized subcontractors of a given company, if any.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetSelfCompanyAuthorizedSubcontractorsExample
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

            var apiInstance = new CompaniesApi(config);

            try
            {
                // User's company and its authorized subcontractors.
                GetSelfCompanyAuthorizedSubcontractorsResponse result = apiInstance.GetSelfCompanyAuthorizedSubcontractors();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CompaniesApi.GetSelfCompanyAuthorizedSubcontractors: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSelfCompanyAuthorizedSubcontractorsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // User's company and its authorized subcontractors.
    ApiResponse<GetSelfCompanyAuthorizedSubcontractorsResponse> response = apiInstance.GetSelfCompanyAuthorizedSubcontractorsWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CompaniesApi.GetSelfCompanyAuthorizedSubcontractorsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**GetSelfCompanyAuthorizedSubcontractorsResponse**](GetSelfCompanyAuthorizedSubcontractorsResponse.md)

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
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getselfcompanybranches"></a>
# **GetSelfCompanyBranches**
> GetSelfCompanyBranchesResponse GetSelfCompanyBranches ()

User's company and its branches

Returns information about the API user's company and its branches, if any.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class GetSelfCompanyBranchesExample
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

            var apiInstance = new CompaniesApi(config);

            try
            {
                // User's company and its branches
                GetSelfCompanyBranchesResponse result = apiInstance.GetSelfCompanyBranches();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CompaniesApi.GetSelfCompanyBranches: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSelfCompanyBranchesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // User's company and its branches
    ApiResponse<GetSelfCompanyBranchesResponse> response = apiInstance.GetSelfCompanyBranchesWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CompaniesApi.GetSelfCompanyBranchesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**GetSelfCompanyBranchesResponse**](GetSelfCompanyBranchesResponse.md)

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
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatecompanyuser"></a>
# **UpdateCompanyUser**
> User UpdateCompanyUser (int companyId, int userId, UpdateCompanyUserRequest _params = null)

Update company user

Updates a user. You may change a user's company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using EnphaseOpenAPI.Commissioning.Api;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Model;

namespace Example
{
    public class UpdateCompanyUserExample
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

            var apiInstance = new CompaniesApi(config);
            var companyId = 56;  // int | Company ID.
            var userId = 56;  // int | User ID.
            var _params = new UpdateCompanyUserRequest(); // UpdateCompanyUserRequest |  (optional) 

            try
            {
                // Update company user
                User result = apiInstance.UpdateCompanyUser(companyId, userId, _params);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CompaniesApi.UpdateCompanyUser: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateCompanyUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update company user
    ApiResponse<User> response = apiInstance.UpdateCompanyUserWithHttpInfo(companyId, userId, _params);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CompaniesApi.UpdateCompanyUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **companyId** | **int** | Company ID. |  |
| **userId** | **int** | User ID. |  |
| **_params** | [**UpdateCompanyUserRequest**](UpdateCompanyUserRequest.md) |  | [optional]  |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **422** | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode. |  -  |
| **429** | Too Many Requests |  -  |
| **501** | Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

