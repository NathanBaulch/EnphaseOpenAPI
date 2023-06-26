# EnphaseOpenAPI\Commissioning\HomeOwnerApi

All URIs are relative to https://api.enphaseenergy.com/api/v4, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createUser()**](HomeOwnerApi.md#createUser) | **POST** /users | Create Home owner |


## `createUser()`

```php
createUser($params): \EnphaseOpenAPI\Commissioning\Model\User
```

Create Home owner

Create a home owner user. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields. Using this API to create both homeowner as well as a company user. If you want to create company user, then pass company_id inside the user object.

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


$apiInstance = new EnphaseOpenAPI\Commissioning\Api\HomeOwnerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$params = new \EnphaseOpenAPI\Commissioning\Model\CreateUserRequest(); // \EnphaseOpenAPI\Commissioning\Model\CreateUserRequest

try {
    $result = $apiInstance->createUser($params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HomeOwnerApi->createUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **params** | [**\EnphaseOpenAPI\Commissioning\Model\CreateUserRequest**](../Model/CreateUserRequest.md)|  | [optional] |

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
