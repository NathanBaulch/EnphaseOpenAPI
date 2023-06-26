<a id="__pageTop"></a>
# monitoring.apis.tags.device_level_production_monitoring_api.DeviceLevelProductionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_system_acb_device_telemetry**](#get_system_acb_device_telemetry) | **get** /systems/{system_id}/devices/acbs/{serial_no}/telemetry | Retrieves telemetry for single ACB
[**get_system_encharge_device_telemetry**](#get_system_encharge_device_telemetry) | **get** /systems/{system_id}/devices/encharges/{serial_no}/telemetry | Retrieves telemetry for single Encharge
[**get_system_micro_device_telemetry**](#get_system_micro_device_telemetry) | **get** /systems/{system_id}/devices/micros/{serial_no}/telemetry | Retrieves telemetry for single micro/pcu

# **get_system_acb_device_telemetry**
<a id="get_system_acb_device_telemetry"></a>
> BatteryDeviceTelemetry get_system_acb_device_telemetry(system_idserial_no)

Retrieves telemetry for single ACB

Retrieves telemetry for single ACB. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import device_level_production_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.telemetry_granularity_enum import TelemetryGranularityEnum
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.battery_device_telemetry import BatteryDeviceTelemetry
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
    api_instance = device_level_production_monitoring_api.DeviceLevelProductionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
        'serial_no': "serial_no_example",
    }
    query_params = {
    }
    try:
        # Retrieves telemetry for single ACB
        api_response = api_instance.get_system_acb_device_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling DeviceLevelProductionMonitoringApi->get_system_acb_device_telemetry: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
        'serial_no': "serial_no_example",
    }
    query_params = {
        'start_at': 1,
        'granularity': TelemetryGranularityEnum("15mins"),
    }
    try:
        # Retrieves telemetry for single ACB
        api_response = api_instance.get_system_acb_device_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling DeviceLevelProductionMonitoringApi->get_system_acb_device_telemetry: %s\n" % e)
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
start_at | StartAtSchema | | optional
granularity | GranularitySchema | | optional


# StartAtSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | value must be a 64 bit integer

# GranularitySchema
Type | Description  | Notes
------------- | ------------- | -------------
[**TelemetryGranularityEnum**](../../models/TelemetryGranularityEnum.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
system_id | SystemIdSchema | | 
serial_no | SerialNoSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SerialNoSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_acb_device_telemetry.ApiResponseFor200) | Telemetry for the ACB.
401 | [ApiResponseFor401](#get_system_acb_device_telemetry.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_acb_device_telemetry.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_acb_device_telemetry.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_acb_device_telemetry.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_acb_device_telemetry.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_acb_device_telemetry.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_acb_device_telemetry.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_acb_device_telemetry.ApiResponseFor501) | Not Implemented

#### get_system_acb_device_telemetry.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**BatteryDeviceTelemetry**](../../models/BatteryDeviceTelemetry.md) |  | 


#### get_system_acb_device_telemetry.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_acb_device_telemetry.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_acb_device_telemetry.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_acb_device_telemetry.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_acb_device_telemetry.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_acb_device_telemetry.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_acb_device_telemetry.ApiResponseFor500
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

#### get_system_acb_device_telemetry.ApiResponseFor501
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

# **get_system_encharge_device_telemetry**
<a id="get_system_encharge_device_telemetry"></a>
> BatteryDeviceTelemetry get_system_encharge_device_telemetry(system_idserial_no)

Retrieves telemetry for single Encharge

Retrieves telemetry for single Encharge. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import device_level_production_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.telemetry_granularity_enum import TelemetryGranularityEnum
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.battery_device_telemetry import BatteryDeviceTelemetry
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
    api_instance = device_level_production_monitoring_api.DeviceLevelProductionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
        'serial_no': "serial_no_example",
    }
    query_params = {
    }
    try:
        # Retrieves telemetry for single Encharge
        api_response = api_instance.get_system_encharge_device_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling DeviceLevelProductionMonitoringApi->get_system_encharge_device_telemetry: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
        'serial_no': "serial_no_example",
    }
    query_params = {
        'start_at': 1,
        'granularity': TelemetryGranularityEnum("15mins"),
    }
    try:
        # Retrieves telemetry for single Encharge
        api_response = api_instance.get_system_encharge_device_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling DeviceLevelProductionMonitoringApi->get_system_encharge_device_telemetry: %s\n" % e)
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
start_at | StartAtSchema | | optional
granularity | GranularitySchema | | optional


# StartAtSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | value must be a 64 bit integer

# GranularitySchema
Type | Description  | Notes
------------- | ------------- | -------------
[**TelemetryGranularityEnum**](../../models/TelemetryGranularityEnum.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
system_id | SystemIdSchema | | 
serial_no | SerialNoSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SerialNoSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_encharge_device_telemetry.ApiResponseFor200) | Telemetry for the Encharge.
401 | [ApiResponseFor401](#get_system_encharge_device_telemetry.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_encharge_device_telemetry.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_encharge_device_telemetry.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_encharge_device_telemetry.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_encharge_device_telemetry.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_encharge_device_telemetry.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_encharge_device_telemetry.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_encharge_device_telemetry.ApiResponseFor501) | Not Implemented

#### get_system_encharge_device_telemetry.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**BatteryDeviceTelemetry**](../../models/BatteryDeviceTelemetry.md) |  | 


#### get_system_encharge_device_telemetry.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_encharge_device_telemetry.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_encharge_device_telemetry.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_encharge_device_telemetry.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_encharge_device_telemetry.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_encharge_device_telemetry.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_encharge_device_telemetry.ApiResponseFor500
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

#### get_system_encharge_device_telemetry.ApiResponseFor501
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

# **get_system_micro_device_telemetry**
<a id="get_system_micro_device_telemetry"></a>
> GetSystemMicroDeviceTelemetryResponse get_system_micro_device_telemetry(system_idserial_no)

Retrieves telemetry for single micro/pcu

Retrieves telemetry for single micro/pcu. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import device_level_production_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.telemetry_granularity_enum import TelemetryGranularityEnum
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.get_system_micro_device_telemetry_response import GetSystemMicroDeviceTelemetryResponse
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
    api_instance = device_level_production_monitoring_api.DeviceLevelProductionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
        'serial_no': "serial_no_example",
    }
    query_params = {
    }
    try:
        # Retrieves telemetry for single micro/pcu
        api_response = api_instance.get_system_micro_device_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling DeviceLevelProductionMonitoringApi->get_system_micro_device_telemetry: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
        'serial_no': "serial_no_example",
    }
    query_params = {
        'start_at': 1,
        'granularity': TelemetryGranularityEnum("15mins"),
    }
    try:
        # Retrieves telemetry for single micro/pcu
        api_response = api_instance.get_system_micro_device_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling DeviceLevelProductionMonitoringApi->get_system_micro_device_telemetry: %s\n" % e)
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
start_at | StartAtSchema | | optional
granularity | GranularitySchema | | optional


# StartAtSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | value must be a 64 bit integer

# GranularitySchema
Type | Description  | Notes
------------- | ------------- | -------------
[**TelemetryGranularityEnum**](../../models/TelemetryGranularityEnum.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
system_id | SystemIdSchema | | 
serial_no | SerialNoSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SerialNoSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_micro_device_telemetry.ApiResponseFor200) | Telemetry for micro.
401 | [ApiResponseFor401](#get_system_micro_device_telemetry.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_micro_device_telemetry.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_micro_device_telemetry.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_micro_device_telemetry.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_micro_device_telemetry.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_micro_device_telemetry.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_micro_device_telemetry.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_micro_device_telemetry.ApiResponseFor501) | Not Implemented

#### get_system_micro_device_telemetry.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemMicroDeviceTelemetryResponse**](../../models/GetSystemMicroDeviceTelemetryResponse.md) |  | 


#### get_system_micro_device_telemetry.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_micro_device_telemetry.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_micro_device_telemetry.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_micro_device_telemetry.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_micro_device_telemetry.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_micro_device_telemetry.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_micro_device_telemetry.ApiResponseFor500
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

#### get_system_micro_device_telemetry.ApiResponseFor501
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

