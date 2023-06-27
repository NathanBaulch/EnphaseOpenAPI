<a id="__pageTop"></a>
# monitoring.apis.tags.system_details_api.SystemDetailsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_inverters_summary_by_envoy_or_site**](#get_inverters_summary_by_envoy_or_site) | **get** /systems/inverters_summary_by_envoy_or_site | inverters_summary_by_envoy_or_site
[**get_system**](#get_system) | **get** /systems/{system_id} | Retrieves a System by ID
[**get_system_devices**](#get_system_devices) | **get** /systems/{system_id}/devices | Retrieves devices for a given system
[**get_system_summary**](#get_system_summary) | **get** /systems/{system_id}/summary | Retrieves a system summary
[**get_systems**](#get_systems) | **get** /systems | Fetch systems
[**retrieve_system_id**](#retrieve_system_id) | **get** /systems/retrieve_system_id | Retrieve system for a given envoy serial number
[**search_systems**](#search_systems) | **post** /systems/search | Search and filter systems

# **get_inverters_summary_by_envoy_or_site**
<a id="get_inverters_summary_by_envoy_or_site"></a>
> GetInvertersSummaryByEnvoyOrSiteResponse get_inverters_summary_by_envoy_or_site()

inverters_summary_by_envoy_or_site

Returns the microinverters summary based on the specified active envoy serial number or system.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_details_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.get_inverters_summary_by_envoy_or_site_response import GetInvertersSummaryByEnvoyOrSiteResponse
from monitoring.model.method_not_allowed_error import MethodNotAllowedError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with monitoring.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = system_details_api.SystemDetailsApi(api_client)

    # example passing only optional values
    query_params = {
        'site_id': 1,
        'envoy_serial_number': "envoy_serial_number_example",
    }
    try:
        # inverters_summary_by_envoy_or_site
        api_response = api_instance.get_inverters_summary_by_envoy_or_site(
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemDetailsApi->get_inverters_summary_by_envoy_or_site: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
query_params | RequestQueryParams | |
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### query_params
#### RequestQueryParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
site_id | SiteIdSchema | | optional
envoy_serial_number | EnvoySerialNumberSchema | | optional


# SiteIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# EnvoySerialNumberSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_inverters_summary_by_envoy_or_site.ApiResponseFor200) | inverters_summary_by_envoy_or_site
401 | [ApiResponseFor401](#get_inverters_summary_by_envoy_or_site.ApiResponseFor401) | Unauthorized
405 | [ApiResponseFor405](#get_inverters_summary_by_envoy_or_site.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_inverters_summary_by_envoy_or_site.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_inverters_summary_by_envoy_or_site.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_inverters_summary_by_envoy_or_site.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_inverters_summary_by_envoy_or_site.ApiResponseFor501) | Not Implemented

#### get_inverters_summary_by_envoy_or_site.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetInvertersSummaryByEnvoyOrSiteResponse**](../../models/GetInvertersSummaryByEnvoyOrSiteResponse.md) |  | 


#### get_inverters_summary_by_envoy_or_site.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_inverters_summary_by_envoy_or_site.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_inverters_summary_by_envoy_or_site.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_inverters_summary_by_envoy_or_site.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_inverters_summary_by_envoy_or_site.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### oneOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[InternalServerError]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) |  | 
[DataTemporarilyUnavailableError]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) |  | 

#### get_inverters_summary_by_envoy_or_site.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**NotImplementedError**](../../models/NotImplementedError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **get_system**
<a id="get_system"></a>
> SystemDetails get_system(system_id)

Retrieves a System by ID

Retrieves a system by ID.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_details_api
from monitoring.model.system_details import SystemDetails
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.method_not_allowed_error import MethodNotAllowedError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with monitoring.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = system_details_api.SystemDetailsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Retrieves a System by ID
        api_response = api_instance.get_system(
            path_params=path_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemDetailsApi->get_system: %s\n" % e)
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
system_id | SystemIdSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system.ApiResponseFor200) | System fetched.
401 | [ApiResponseFor401](#get_system.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_system.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system.ApiResponseFor501) | Not Implemented

#### get_system.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemDetails**](../../models/SystemDetails.md) |  | 


#### get_system.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### oneOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[InternalServerError]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) |  | 
[DataTemporarilyUnavailableError]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) |  | 

#### get_system.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**NotImplementedError**](../../models/NotImplementedError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **get_system_devices**
<a id="get_system_devices"></a>
> GetSystemDevicesResponse get_system_devices(system_id)

Retrieves devices for a given system

Retrieves devices for a given system. Only devices that are active will be returned in the response.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_details_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.get_system_devices_response import GetSystemDevicesResponse
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.method_not_allowed_error import MethodNotAllowedError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with monitoring.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = system_details_api.SystemDetailsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Retrieves devices for a given system
        api_response = api_instance.get_system_devices(
            path_params=path_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemDetailsApi->get_system_devices: %s\n" % e)
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
system_id | SystemIdSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_devices.ApiResponseFor200) | List of devices.
401 | [ApiResponseFor401](#get_system_devices.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_devices.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_devices.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_devices.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_system_devices.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_devices.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_devices.ApiResponseFor501) | Not Implemented

#### get_system_devices.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemDevicesResponse**](../../models/GetSystemDevicesResponse.md) |  | 


#### get_system_devices.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_devices.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_devices.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_devices.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_devices.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_devices.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### oneOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[InternalServerError]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) |  | 
[DataTemporarilyUnavailableError]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) |  | 

#### get_system_devices.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**NotImplementedError**](../../models/NotImplementedError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **get_system_summary**
<a id="get_system_summary"></a>
> GetSystemSummaryResponse get_system_summary(system_id)

Retrieves a system summary

Returns system summary based on the specified system ID.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_details_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.get_system_summary_response import GetSystemSummaryResponse
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.method_not_allowed_error import MethodNotAllowedError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with monitoring.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = system_details_api.SystemDetailsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Retrieves a system summary
        api_response = api_instance.get_system_summary(
            path_params=path_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemDetailsApi->get_system_summary: %s\n" % e)
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
system_id | SystemIdSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_summary.ApiResponseFor200) | System summary fetched.
401 | [ApiResponseFor401](#get_system_summary.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_summary.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_summary.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_summary.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_system_summary.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_summary.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_summary.ApiResponseFor501) | Not Implemented

#### get_system_summary.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemSummaryResponse**](../../models/GetSystemSummaryResponse.md) |  | 


#### get_system_summary.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_summary.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_summary.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_summary.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_summary.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_summary.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### oneOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[InternalServerError]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) |  | 
[DataTemporarilyUnavailableError]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) |  | 

#### get_system_summary.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**NotImplementedError**](../../models/NotImplementedError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **get_systems**
<a id="get_systems"></a>
> GetSystemsResponse get_systems()

Fetch systems

Returns a list of systems for which the user can make API requests. By default, systems are returned in batches of 10. The maximum size is 100.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_details_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.system_sort_by_enum import SystemSortByEnum
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.get_systems_response import GetSystemsResponse
from monitoring.model.method_not_allowed_error import MethodNotAllowedError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with monitoring.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = system_details_api.SystemDetailsApi(api_client)

    # example passing only optional values
    query_params = {
        'page': 1,
        'size': 1,
        'sort_by': SystemSortByEnum("id"),
    }
    try:
        # Fetch systems
        api_response = api_instance.get_systems(
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemDetailsApi->get_systems: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
query_params | RequestQueryParams | |
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### query_params
#### RequestQueryParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
page | PageSchema | | optional
size | SizeSchema | | optional
sort_by | SortBySchema | | optional


# PageSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SizeSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SortBySchema
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemSortByEnum**](../../models/SystemSortByEnum.md) |  | 


### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_systems.ApiResponseFor200) | List of systems.
401 | [ApiResponseFor401](#get_systems.ApiResponseFor401) | Unauthorized
405 | [ApiResponseFor405](#get_systems.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_systems.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_systems.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_systems.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_systems.ApiResponseFor501) | Not Implemented

#### get_systems.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemsResponse**](../../models/GetSystemsResponse.md) |  | 


#### get_systems.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_systems.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_systems.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_systems.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_systems.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### oneOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[InternalServerError]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) |  | 
[DataTemporarilyUnavailableError]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) |  | 

#### get_systems.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**NotImplementedError**](../../models/NotImplementedError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **retrieve_system_id**
<a id="retrieve_system_id"></a>
> RetrieveSystemIdResponse retrieve_system_id(serial_num)

Retrieve system for a given envoy serial number

Get system ID by passing envoy serial number. If the serial number of a retired envoy is passed in the request param, a 404 Not Found response will be returned.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_details_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.method_not_allowed_error import MethodNotAllowedError
from monitoring.model.retrieve_system_id_response import RetrieveSystemIdResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with monitoring.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = system_details_api.SystemDetailsApi(api_client)

    # example passing only required values which don't have defaults set
    query_params = {
        'serial_num': "serial_num_example",
    }
    try:
        # Retrieve system for a given envoy serial number
        api_response = api_instance.retrieve_system_id(
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemDetailsApi->retrieve_system_id: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
query_params | RequestQueryParams | |
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### query_params
#### RequestQueryParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
serial_num | SerialNumSchema | | 


# SerialNumSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#retrieve_system_id.ApiResponseFor200) | retrieve_system_id
401 | [ApiResponseFor401](#retrieve_system_id.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#retrieve_system_id.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#retrieve_system_id.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#retrieve_system_id.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#retrieve_system_id.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#retrieve_system_id.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#retrieve_system_id.ApiResponseFor501) | Not Implemented

#### retrieve_system_id.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**RetrieveSystemIdResponse**](../../models/RetrieveSystemIdResponse.md) |  | 


#### retrieve_system_id.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### retrieve_system_id.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### retrieve_system_id.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### retrieve_system_id.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### retrieve_system_id.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### retrieve_system_id.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### oneOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[InternalServerError]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) |  | 
[DataTemporarilyUnavailableError]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) |  | 

#### retrieve_system_id.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**NotImplementedError**](../../models/NotImplementedError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **search_systems**
<a id="search_systems"></a>
> SearchSystemsResponse search_systems()

Search and filter systems

Search and filter systems. Provide only valid values in request parameters. Empty and invalid values will be ignored. Invalid keys will be rejected.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_details_api
from monitoring.model.search_systems_request import SearchSystemsRequest
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.search_systems_response import SearchSystemsResponse
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2
configuration = monitoring.Configuration(
    host = "https://api.enphaseenergy.com/api/v4",
    access_token = 'YOUR_ACCESS_TOKEN'
)

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with monitoring.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = system_details_api.SystemDetailsApi(api_client)

    # example passing only optional values
    query_params = {
        'page': 1,
        'size': 1,
    }
    body = SearchSystemsRequest(
        system=dict(
            ids=[
                1
            ],
            name="name_example",
            public_name=SystemPublicNameEnum("residential"),
            statuses=[
                SystemStatusEnum("deactivated")
            ],
            connection_type=SystemConnectionTypeEnum("wifi"),
        ),
        sort_by=SystemSortByEnum("id"),
    )
    try:
        # Search and filter systems
        api_response = api_instance.search_systems(
            query_params=query_params,
            body=body,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemDetailsApi->search_systems: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationJson, Unset] | optional, default is unset |
query_params | RequestQueryParams | |
content_type | str | optional, default is 'application/json' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SearchSystemsRequest**](../../models/SearchSystemsRequest.md) |  | 


### query_params
#### RequestQueryParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
page | PageSchema | | optional
size | SizeSchema | | optional


# PageSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SizeSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#search_systems.ApiResponseFor200) | List of systems.
401 | [ApiResponseFor401](#search_systems.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#search_systems.ApiResponseFor404) | Not Found
422 | [ApiResponseFor422](#search_systems.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#search_systems.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#search_systems.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#search_systems.ApiResponseFor501) | Not Implemented

#### search_systems.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SearchSystemsResponse**](../../models/SearchSystemsResponse.md) |  | 


#### search_systems.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### search_systems.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### search_systems.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### search_systems.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### search_systems.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader,  | frozendict.frozendict, str, decimal.Decimal, BoolClass, NoneClass, tuple, bytes, FileIO |  | 

### Composed Schemas (allOf/anyOf/oneOf/not)
#### oneOf
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[InternalServerError]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) | [**InternalServerError**]({{complexTypePrefix}}InternalServerError.md) |  | 
[DataTemporarilyUnavailableError]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) | [**DataTemporarilyUnavailableError**]({{complexTypePrefix}}DataTemporarilyUnavailableError.md) |  | 

#### search_systems.ApiResponseFor501
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor501ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor501ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**NotImplementedError**](../../models/NotImplementedError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

