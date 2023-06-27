# EnphaseOpenAPI\Commissioning\CompaniesApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createCompanyUser()**](CompaniesApi.md#createCompanyUser) | **POST** /companies/{company_id}/users | Create company user |
| [**getCompanyUser()**](CompaniesApi.md#getCompanyUser) | **GET** /companies/{company_id}/users/{user_id} | Returns the requested user |
| [**getCompanyUsers()**](CompaniesApi.md#getCompanyUsers) | **GET** /companies/{company_id}/users | Get all users with in a company |
| [**getSelfCompanyAuthorizedSubcontractors()**](CompaniesApi.md#getSelfCompanyAuthorizedSubcontractors) | **GET** /companies/self/authorized_subcontractors | User&#39;s company and its authorized subcontractors. |
| [**getSelfCompanyBranches()**](CompaniesApi.md#getSelfCompanyBranches) | **GET** /companies/self/branches | User&#39;s company and its branches |
| [**updateCompanyUser()**](CompaniesApi.md#updateCompanyUser) | **PUT** /companies/{company_id}/users/{user_id} | Update company user |


## `createCompanyUser()`

```php
createCompanyUser($company_id, $params): \EnphaseOpenAPI\Commissioning\Model\User
```

Create company user

Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\CompaniesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$company_id = 56; // int | Company ID.
$params = new \EnphaseOpenAPI\Commissioning\Model\CreateCompanyUserRequest(); // \EnphaseOpenAPI\Commissioning\Model\CreateCompanyUserRequest

try {
    $result = $apiInstance->createCompanyUser($company_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CompaniesApi->createCompanyUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **company_id** | **int**| Company ID. | |
| **params** | [**\EnphaseOpenAPI\Commissioning\Model\CreateCompanyUserRequest**](../Model/CreateCompanyUserRequest.md)|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\User**](../Model/User.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCompanyUser()`

```php
getCompanyUser($company_id, $user_id, $expand): \EnphaseOpenAPI\Commissioning\Model\User
```

Returns the requested user

Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\CompaniesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$company_id = 56; // int | Company ID.
$user_id = 56; // int | User ID.
$expand = new \EnphaseOpenAPI\Commissioning\Model\UserExpandEnum(); // UserExpandEnum | Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response.

try {
    $result = $apiInstance->getCompanyUser($company_id, $user_id, $expand);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CompaniesApi->getCompanyUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **company_id** | **int**| Company ID. | |
| **user_id** | **int**| User ID. | |
| **expand** | [**UserExpandEnum**](../Model/.md)| Passing expand params in the url with valid option, then the response will contain company object fields. Otherwise the company information will not be provided in the response. | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\User**](../Model/User.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCompanyUsers()`

```php
getCompanyUsers($company_id): \EnphaseOpenAPI\Commissioning\Model\GetCompanyUsersResponse
```

Get all users with in a company

Returns the users in the given company.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\CompaniesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$company_id = 56; // int | Company ID.

try {
    $result = $apiInstance->getCompanyUsers($company_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CompaniesApi->getCompanyUsers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **company_id** | **int**| Company ID. | |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\GetCompanyUsersResponse**](../Model/GetCompanyUsersResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSelfCompanyAuthorizedSubcontractors()`

```php
getSelfCompanyAuthorizedSubcontractors(): \EnphaseOpenAPI\Commissioning\Model\GetSelfCompanyAuthorizedSubcontractorsResponse
```

User's company and its authorized subcontractors.

Returns all the authorized subcontractors of a given company, if any.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\CompaniesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getSelfCompanyAuthorizedSubcontractors();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CompaniesApi->getSelfCompanyAuthorizedSubcontractors: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\GetSelfCompanyAuthorizedSubcontractorsResponse**](../Model/GetSelfCompanyAuthorizedSubcontractorsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSelfCompanyBranches()`

```php
getSelfCompanyBranches(): \EnphaseOpenAPI\Commissioning\Model\GetSelfCompanyBranchesResponse
```

User's company and its branches

Returns information about the API user's company and its branches, if any.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\CompaniesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getSelfCompanyBranches();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CompaniesApi->getSelfCompanyBranches: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\GetSelfCompanyBranchesResponse**](../Model/GetSelfCompanyBranchesResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateCompanyUser()`

```php
updateCompanyUser($company_id, $user_id, $params): \EnphaseOpenAPI\Commissioning\Model\User
```

Update company user

Updates a user. You may change a user's company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKey
$config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKey('key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = EnphaseOpenAPI\Commissioning\Configuration::getDefaultConfiguration()->setApiKeyPrefix('key', 'Bearer');


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\CompaniesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$company_id = 56; // int | Company ID.
$user_id = 56; // int | User ID.
$params = new \EnphaseOpenAPI\Commissioning\Model\UpdateCompanyUserRequest(); // \EnphaseOpenAPI\Commissioning\Model\UpdateCompanyUserRequest

try {
    $result = $apiInstance->updateCompanyUser($company_id, $user_id, $params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CompaniesApi->updateCompanyUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **company_id** | **int**| Company ID. | |
| **user_id** | **int**| User ID. | |
| **params** | [**\EnphaseOpenAPI\Commissioning\Model\UpdateCompanyUserRequest**](../Model/UpdateCompanyUserRequest.md)|  | [optional] |

### Return type

[**\EnphaseOpenAPI\Commissioning\Model\User**](../Model/User.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKey](../../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
