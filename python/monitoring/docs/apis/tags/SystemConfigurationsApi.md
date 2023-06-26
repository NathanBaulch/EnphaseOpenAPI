<a id="__pageTop"></a>
# monitoring.apis.tags.system_configurations_api.SystemConfigurationsApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_system_battery_settings**](#get_system_battery_settings) | **get** /systems/config/{system_id}/battery_settings | Returns the current battery settings of a system
[**get_system_grid_status_settings**](#get_system_grid_status_settings) | **get** /systems/config/{system_id}/grid_status | Returns the current grid status settings of a system
[**get_system_load_control_settings**](#get_system_load_control_settings) | **get** /systems/config/{system_id}/load_control | Returns the current load control settings of a system
[**get_system_storm_guard_settings**](#get_system_storm_guard_settings) | **get** /systems/config/{system_id}/storm_guard | Returns the current storm guard settings of a system

# **get_system_battery_settings**
<a id="get_system_battery_settings"></a>
> GetSystemBatterySettingsResponse get_system_battery_settings(system_id)

Returns the current battery settings of a system

Returns the current battery settings of a system.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_configurations_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.get_system_battery_settings_response import GetSystemBatterySettingsResponse
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
    api_instance = system_configurations_api.SystemConfigurationsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Returns the current battery settings of a system
        api_response = api_instance.get_system_battery_settings(
            path_params=path_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemConfigurationsApi->get_system_battery_settings: %s\n" % e)
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
200 | [ApiResponseFor200](#get_system_battery_settings.ApiResponseFor200) | battery_settings
401 | [ApiResponseFor401](#get_system_battery_settings.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_battery_settings.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_battery_settings.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_battery_settings.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_battery_settings.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_battery_settings.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_battery_settings.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_battery_settings.ApiResponseFor501) | Not Implemented

#### get_system_battery_settings.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemBatterySettingsResponse**](../../models/GetSystemBatterySettingsResponse.md) |  | 


#### get_system_battery_settings.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_settings.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_settings.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_settings.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_battery_settings.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_settings.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_battery_settings.ApiResponseFor500
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

#### get_system_battery_settings.ApiResponseFor501
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

# **get_system_grid_status_settings**
<a id="get_system_grid_status_settings"></a>
> GetSystemGridStatusSettingsResponse get_system_grid_status_settings(system_id)

Returns the current grid status settings of a system

Returns the current grid status settings of a system.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_configurations_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.get_system_grid_status_settings_response import GetSystemGridStatusSettingsResponse
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
    api_instance = system_configurations_api.SystemConfigurationsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Returns the current grid status settings of a system
        api_response = api_instance.get_system_grid_status_settings(
            path_params=path_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemConfigurationsApi->get_system_grid_status_settings: %s\n" % e)
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
200 | [ApiResponseFor200](#get_system_grid_status_settings.ApiResponseFor200) | grid_status
401 | [ApiResponseFor401](#get_system_grid_status_settings.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_grid_status_settings.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_grid_status_settings.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_grid_status_settings.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_grid_status_settings.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_grid_status_settings.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_grid_status_settings.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_grid_status_settings.ApiResponseFor501) | Not Implemented

#### get_system_grid_status_settings.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemGridStatusSettingsResponse**](../../models/GetSystemGridStatusSettingsResponse.md) |  | 


#### get_system_grid_status_settings.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_grid_status_settings.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_grid_status_settings.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_grid_status_settings.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_grid_status_settings.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_grid_status_settings.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_grid_status_settings.ApiResponseFor500
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

#### get_system_grid_status_settings.ApiResponseFor501
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

# **get_system_load_control_settings**
<a id="get_system_load_control_settings"></a>
> GetSystemLoadControlSettingsResponse get_system_load_control_settings(system_id)

Returns the current load control settings of a system

Returns the current load control settings of a system.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_configurations_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.get_system_load_control_settings_response import GetSystemLoadControlSettingsResponse
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
    api_instance = system_configurations_api.SystemConfigurationsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Returns the current load control settings of a system
        api_response = api_instance.get_system_load_control_settings(
            path_params=path_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemConfigurationsApi->get_system_load_control_settings: %s\n" % e)
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
200 | [ApiResponseFor200](#get_system_load_control_settings.ApiResponseFor200) | load_control
401 | [ApiResponseFor401](#get_system_load_control_settings.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_load_control_settings.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_load_control_settings.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_load_control_settings.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_load_control_settings.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_load_control_settings.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_load_control_settings.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_load_control_settings.ApiResponseFor501) | Not Implemented

#### get_system_load_control_settings.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemLoadControlSettingsResponse**](../../models/GetSystemLoadControlSettingsResponse.md) |  | 


#### get_system_load_control_settings.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_load_control_settings.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_load_control_settings.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_load_control_settings.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_load_control_settings.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_load_control_settings.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_load_control_settings.ApiResponseFor500
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

#### get_system_load_control_settings.ApiResponseFor501
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

# **get_system_storm_guard_settings**
<a id="get_system_storm_guard_settings"></a>
> GetSystemStormGuardSettingsResponse get_system_storm_guard_settings(system_id)

Returns the current storm guard settings of a system

Returns the current storm guard settings of a system.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import system_configurations_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.get_system_storm_guard_settings_response import GetSystemStormGuardSettingsResponse
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
    api_instance = system_configurations_api.SystemConfigurationsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Returns the current storm guard settings of a system
        api_response = api_instance.get_system_storm_guard_settings(
            path_params=path_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SystemConfigurationsApi->get_system_storm_guard_settings: %s\n" % e)
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
200 | [ApiResponseFor200](#get_system_storm_guard_settings.ApiResponseFor200) | storm_guard
401 | [ApiResponseFor401](#get_system_storm_guard_settings.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_storm_guard_settings.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_storm_guard_settings.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_storm_guard_settings.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_storm_guard_settings.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_storm_guard_settings.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_storm_guard_settings.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_storm_guard_settings.ApiResponseFor501) | Not Implemented

#### get_system_storm_guard_settings.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemStormGuardSettingsResponse**](../../models/GetSystemStormGuardSettingsResponse.md) |  | 


#### get_system_storm_guard_settings.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_storm_guard_settings.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_storm_guard_settings.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_storm_guard_settings.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_storm_guard_settings.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_storm_guard_settings.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_storm_guard_settings.ApiResponseFor500
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

#### get_system_storm_guard_settings.ApiResponseFor501
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

