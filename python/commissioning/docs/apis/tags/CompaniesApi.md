<a id="__pageTop"></a>
# commissioning.apis.tags.companies_api.CompaniesApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_company_user**](#create_company_user) | **post** /companies/{company_id}/users | Create company user
[**get_company_user**](#get_company_user) | **get** /companies/{company_id}/users/{user_id} | Returns the requested user
[**get_company_users**](#get_company_users) | **get** /companies/{company_id}/users | Get all users with in a company
[**get_self_company_authorized_subcontractors**](#get_self_company_authorized_subcontractors) | **get** /companies/self/authorized_subcontractors | User&#x27;s company and its authorized subcontractors.
[**get_self_company_branches**](#get_self_company_branches) | **get** /companies/self/branches | User&#x27;s company and its branches
[**update_company_user**](#update_company_user) | **put** /companies/{company_id}/users/{user_id} | Update company user

# **create_company_user**
<a id="create_company_user"></a>
> User create_company_user(company_id)

Create company user

Create a company user. When the user is created in the context of a company, then the user is belongs to that company. Otherwise, the user does not belong to a company. Email, first name, and last name are mandatory fields in the user. Any unneeded fields passed in the request parameter will be skipped and not stored. Pass body param in 'application/x-www-form-urlencoded' format, in this endpoint, key will be 'user' and value will be a JSON dictionary of user fields.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import companies_api
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.user import User
from commissioning.model.unprocessable_entity_error import UnprocessableEntityError
from commissioning.model.create_company_user_request import CreateCompanyUserRequest
from commissioning.model.server_error import ServerError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with commissioning.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = companies_api.CompaniesApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'company_id': 1,
    }
    try:
        # Create company user
        api_response = api_instance.create_company_user(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling CompaniesApi->create_company_user: %s\n" % e)

    # example passing only optional values
    path_params = {
        'company_id': 1,
    }
    body = CreateCompanyUserRequest(
        email="email_example",
        enlighten_emails=True,
        first_name="first_name_example",
        last_name="last_name_example",
        phone="phone_example",
    )
    try:
        # Create company user
        api_response = api_instance.create_company_user(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling CompaniesApi->create_company_user: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationJson, Unset] | optional, default is unset |
path_params | RequestPathParams | |
content_type | str | optional, default is 'application/json' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**CreateCompanyUserRequest**](../../models/CreateCompanyUserRequest.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
company_id | CompanyIdSchema | | 

# CompanyIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
201 | [ApiResponseFor201](#create_company_user.ApiResponseFor201) | Created
401 | [ApiResponseFor401](#create_company_user.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#create_company_user.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#create_company_user.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#create_company_user.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#create_company_user.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#create_company_user.ApiResponseFor501) | Not Implemented

#### create_company_user.ApiResponseFor201
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor201ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor201ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**User**](../../models/User.md) |  | 


#### create_company_user.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### create_company_user.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### create_company_user.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### create_company_user.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### create_company_user.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### create_company_user.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **get_company_user**
<a id="get_company_user"></a>
> User get_company_user(company_iduser_id)

Returns the requested user

Returns the requested user. If the user is requested in the scope of a company, then two conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. Company details are provided in the response only if 'expand' parameter is passed in the URL with value as company. Otherwise, company information will not be provided in the response.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import companies_api
from commissioning.model.user_expand_enum import UserExpandEnum
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.user import User
from commissioning.model.unprocessable_entity_error import UnprocessableEntityError
from commissioning.model.server_error import ServerError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with commissioning.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = companies_api.CompaniesApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'company_id': 1,
        'user_id': 1,
    }
    query_params = {
    }
    try:
        # Returns the requested user
        api_response = api_instance.get_company_user(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling CompaniesApi->get_company_user: %s\n" % e)

    # example passing only optional values
    path_params = {
        'company_id': 1,
        'user_id': 1,
    }
    query_params = {
        'expand': UserExpandEnum("company"),
    }
    try:
        # Returns the requested user
        api_response = api_instance.get_company_user(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling CompaniesApi->get_company_user: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
query_params | RequestQueryParams | |
path_params | RequestPathParams | |
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### query_params
#### RequestQueryParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
expand | ExpandSchema | | optional


# ExpandSchema
Type | Description  | Notes
------------- | ------------- | -------------
[**UserExpandEnum**](../../models/UserExpandEnum.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
company_id | CompanyIdSchema | | 
user_id | UserIdSchema | | 

# CompanyIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_company_user.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#get_company_user.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#get_company_user.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_company_user.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_company_user.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#get_company_user.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#get_company_user.ApiResponseFor501) | Not Implemented

#### get_company_user.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**User**](../../models/User.md) |  | 


#### get_company_user.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_company_user.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_company_user.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_company_user.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### get_company_user.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_company_user.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **get_company_users**
<a id="get_company_users"></a>
> GetCompanyUsersResponse get_company_users(company_id)

Get all users with in a company

Returns the users in the given company.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import companies_api
from commissioning.model.get_company_users_response import GetCompanyUsersResponse
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.server_error import ServerError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with commissioning.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = companies_api.CompaniesApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'company_id': 1,
    }
    try:
        # Get all users with in a company
        api_response = api_instance.get_company_users(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling CompaniesApi->get_company_users: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
path_params | RequestPathParams | |
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
company_id | CompanyIdSchema | | 

# CompanyIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_company_users.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#get_company_users.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#get_company_users.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_company_users.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_company_users.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#get_company_users.ApiResponseFor501) | Not Implemented

#### get_company_users.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetCompanyUsersResponse**](../../models/GetCompanyUsersResponse.md) |  | 


#### get_company_users.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_company_users.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_company_users.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_company_users.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_company_users.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **get_self_company_authorized_subcontractors**
<a id="get_self_company_authorized_subcontractors"></a>
> GetSelfCompanyAuthorizedSubcontractorsResponse get_self_company_authorized_subcontractors()

User's company and its authorized subcontractors.

Returns all the authorized subcontractors of a given company, if any.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import companies_api
from commissioning.model.get_self_company_authorized_subcontractors_response import GetSelfCompanyAuthorizedSubcontractorsResponse
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.server_error import ServerError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with commissioning.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = companies_api.CompaniesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # User's company and its authorized subcontractors.
        api_response = api_instance.get_self_company_authorized_subcontractors()
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling CompaniesApi->get_self_company_authorized_subcontractors: %s\n" % e)
```
### Parameters
This endpoint does not need any parameter.

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_self_company_authorized_subcontractors.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#get_self_company_authorized_subcontractors.ApiResponseFor401) | Unauthorized
405 | [ApiResponseFor405](#get_self_company_authorized_subcontractors.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_self_company_authorized_subcontractors.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#get_self_company_authorized_subcontractors.ApiResponseFor501) | Not Implemented

#### get_self_company_authorized_subcontractors.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSelfCompanyAuthorizedSubcontractorsResponse**](../../models/GetSelfCompanyAuthorizedSubcontractorsResponse.md) |  | 


#### get_self_company_authorized_subcontractors.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_self_company_authorized_subcontractors.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_self_company_authorized_subcontractors.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_self_company_authorized_subcontractors.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **get_self_company_branches**
<a id="get_self_company_branches"></a>
> GetSelfCompanyBranchesResponse get_self_company_branches()

User's company and its branches

Returns information about the API user's company and its branches, if any.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import companies_api
from commissioning.model.get_self_company_branches_response import GetSelfCompanyBranchesResponse
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.server_error import ServerError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with commissioning.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = companies_api.CompaniesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # User's company and its branches
        api_response = api_instance.get_self_company_branches()
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling CompaniesApi->get_self_company_branches: %s\n" % e)
```
### Parameters
This endpoint does not need any parameter.

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_self_company_branches.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#get_self_company_branches.ApiResponseFor401) | Unauthorized
405 | [ApiResponseFor405](#get_self_company_branches.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_self_company_branches.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#get_self_company_branches.ApiResponseFor501) | Not Implemented

#### get_self_company_branches.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSelfCompanyBranchesResponse**](../../models/GetSelfCompanyBranchesResponse.md) |  | 


#### get_self_company_branches.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_self_company_branches.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_self_company_branches.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_self_company_branches.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **update_company_user**
<a id="update_company_user"></a>
> User update_company_user(company_iduser_id)

Update company user

Updates a user. You may change a user's company if you have access to the user, the old company, and the new company. The user is requested in the scope of a company, then three conditions apply. 1) You must have access to the requested company; otherwise a 401 is returned. 2) The user must belong to the requested company; otherwise a 401 is returned. 3) Requested user must be created by API user (or) it must belong to your company or its branches.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import companies_api
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.user import User
from commissioning.model.unprocessable_entity_error import UnprocessableEntityError
from commissioning.model.update_company_user_request import UpdateCompanyUserRequest
from commissioning.model.server_error import ServerError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = commissioning.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with commissioning.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = companies_api.CompaniesApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'company_id': 1,
        'user_id': 1,
    }
    try:
        # Update company user
        api_response = api_instance.update_company_user(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling CompaniesApi->update_company_user: %s\n" % e)

    # example passing only optional values
    path_params = {
        'company_id': 1,
        'user_id': 1,
    }
    body = UpdateCompanyUserRequest(
        company_id=1,
        email="email_example",
        enlighten_emails=True,
        first_name="first_name_example",
        last_name="last_name_example",
        phone="phone_example",
    )
    try:
        # Update company user
        api_response = api_instance.update_company_user(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling CompaniesApi->update_company_user: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationJson, Unset] | optional, default is unset |
path_params | RequestPathParams | |
content_type | str | optional, default is 'application/json' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UpdateCompanyUserRequest**](../../models/UpdateCompanyUserRequest.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
company_id | CompanyIdSchema | | 
user_id | UserIdSchema | | 

# CompanyIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#update_company_user.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#update_company_user.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#update_company_user.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#update_company_user.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#update_company_user.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#update_company_user.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#update_company_user.ApiResponseFor501) | Not Implemented

#### update_company_user.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**User**](../../models/User.md) |  | 


#### update_company_user.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_company_user.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_company_user.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_company_user.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### update_company_user.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### update_company_user.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

