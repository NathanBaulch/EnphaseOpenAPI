# CompaniesApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompanyUser**](CompaniesApi.md#createCompanyUser) | **POST** /companies/{company_id}/users | Create company user
[**getCompanyUser**](CompaniesApi.md#getCompanyUser) | **GET** /companies/{company_id}/users/{user_id} | Returns the requested user
[**getCompanyUsers**](CompaniesApi.md#getCompanyUsers) | **GET** /companies/{company_id}/users | Get all users with in a company
[**getSelfCompanyAuthorizedSubcontractors**](CompaniesApi.md#getSelfCompanyAuthorizedSubcontractors) | **GET** /companies/self/authorized_subcontractors | User&#39;s company and its authorized subcontractors.
[**getSelfCompanyBranches**](CompaniesApi.md#getSelfCompanyBranches) | **GET** /companies/self/branches | User&#39;s company and its branches
[**updateCompanyUser**](CompaniesApi.md#updateCompanyUser) | **PUT** /companies/{company_id}/users/{user_id} | Update company user



## createCompanyUser

Create company user

Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company.
Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored.
Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.

### Example

```bash
 createCompanyUser company_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **integer** | Company ID. | [default to null]
 **params** | [**CreateCompanyUserRequest**](CreateCompanyUserRequest.md) |  | [optional]

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getCompanyUser

Returns the requested user

Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example

```bash
 getCompanyUser company_id=value user_id=value  expand=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **integer** | Company ID. | [default to null]
 **userId** | **integer** | User ID. | [default to null]
 **expand** | [**UserExpandEnum**](.md) | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] [default to null]

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getCompanyUsers

Get all users with in a company

Returns the users in the given company.

### Example

```bash
 getCompanyUsers company_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **integer** | Company ID. | [default to null]

### Return type

[**GetCompanyUsersResponse**](GetCompanyUsersResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSelfCompanyAuthorizedSubcontractors

User's company and its authorized subcontractors.

Returns all the authorized subcontractors of a given company, if any.

### Example

```bash
 getSelfCompanyAuthorizedSubcontractors
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSelfCompanyAuthorizedSubcontractorsResponse**](GetSelfCompanyAuthorizedSubcontractorsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSelfCompanyBranches

User's company and its branches

Returns information about the API user's company and its branches, if any.

### Example

```bash
 getSelfCompanyBranches
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSelfCompanyBranchesResponse**](GetSelfCompanyBranchesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateCompanyUser

Update company user

Updates a user. You may change a user's company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches.

### Example

```bash
 updateCompanyUser company_id=value user_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **integer** | Company ID. | [default to null]
 **userId** | **integer** | User ID. | [default to null]
 **params** | [**UpdateCompanyUserRequest**](UpdateCompanyUserRequest.md) |  | [optional]

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

