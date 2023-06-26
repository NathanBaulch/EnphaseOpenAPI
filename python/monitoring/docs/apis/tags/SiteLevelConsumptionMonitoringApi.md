<a id="__pageTop"></a>
# monitoring.apis.tags.site_level_consumption_monitoring_api.SiteLevelConsumptionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_system_battery_lifetime**](#get_system_battery_lifetime) | **get** /systems/{system_id}/battery_lifetime | battery_lifetime
[**get_system_battery_telemetry**](#get_system_battery_telemetry) | **get** /systems/{system_id}/telemetry/battery | Retrieves telemetry for all batteries for a system
[**get_system_consumption_lifetime**](#get_system_consumption_lifetime) | **get** /systems/{system_id}/consumption_lifetime | consumption_lifetime
[**get_system_consumption_meter_telemetry**](#get_system_consumption_meter_telemetry) | **get** /systems/{system_id}/telemetry/consumption_meter | Retrieves telemetry for all consumption meters for a system
[**get_system_energy_export_lifetime**](#get_system_energy_export_lifetime) | **get** /systems/{system_id}/energy_export_lifetime | export_lifetime
[**get_system_energy_export_telemetry**](#get_system_energy_export_telemetry) | **get** /systems/{system_id}/energy_export_telemetry | Retrieves energy exported to grid in regular intervals
[**get_system_energy_import_lifetime**](#get_system_energy_import_lifetime) | **get** /systems/{system_id}/energy_import_lifetime | import_lifetime
[**get_system_energy_import_telemetry**](#get_system_energy_import_telemetry) | **get** /systems/{system_id}/energy_import_telemetry | Retrieves energy imported from grid in regular intervals

# **get_system_battery_lifetime**
<a id="get_system_battery_lifetime"></a>
> GetSystemBatteryLifetimeResponse get_system_battery_lifetime(system_id)

battery_lifetime

Returns a daily time series of energy charged into the batteries and energy discharged from the batteries for a system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been charged/discharged for the last days in the series.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_consumption_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.get_system_battery_lifetime_response import GetSystemBatteryLifetimeResponse
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
    api_instance = site_level_consumption_monitoring_api.SiteLevelConsumptionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # battery_lifetime
        api_response = api_instance.get_system_battery_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_battery_lifetime: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_date': "1970-01-01",
        'end_date': "1970-01-01",
    }
    try:
        # battery_lifetime
        api_response = api_instance.get_system_battery_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_battery_lifetime: %s\n" % e)
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
start_date | StartDateSchema | | optional
end_date | EndDateSchema | | optional


# StartDateSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD

# EndDateSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD

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
200 | [ApiResponseFor200](#get_system_battery_lifetime.ApiResponseFor200) | battery_lifetime
401 | [ApiResponseFor401](#get_system_battery_lifetime.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_battery_lifetime.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_battery_lifetime.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_battery_lifetime.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_battery_lifetime.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_battery_lifetime.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_battery_lifetime.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_battery_lifetime.ApiResponseFor501) | Not Implemented

#### get_system_battery_lifetime.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemBatteryLifetimeResponse**](../../models/GetSystemBatteryLifetimeResponse.md) |  | 


#### get_system_battery_lifetime.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_lifetime.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_lifetime.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_lifetime.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_battery_lifetime.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_lifetime.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_battery_lifetime.ApiResponseFor500
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

#### get_system_battery_lifetime.ApiResponseFor501
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

# **get_system_battery_telemetry**
<a id="get_system_battery_telemetry"></a>
> GetSystemBatteryTelemetryResponse get_system_battery_telemetry(system_id)

Retrieves telemetry for all batteries for a system

Retrieves telemetry for all the batteries of a system. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_consumption_monitoring_api
from monitoring.model.get_system_battery_telemetry_response import GetSystemBatteryTelemetryResponse
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.telemetry_granularity_enum import TelemetryGranularityEnum
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
    api_instance = site_level_consumption_monitoring_api.SiteLevelConsumptionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # Retrieves telemetry for all batteries for a system
        api_response = api_instance.get_system_battery_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_battery_telemetry: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_at': 1,
        'granularity': TelemetryGranularityEnum("15mins"),
    }
    try:
        # Retrieves telemetry for all batteries for a system
        api_response = api_instance.get_system_battery_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_battery_telemetry: %s\n" % e)
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

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_battery_telemetry.ApiResponseFor200) | Telemetry for batteries.
401 | [ApiResponseFor401](#get_system_battery_telemetry.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_battery_telemetry.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_battery_telemetry.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_battery_telemetry.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_battery_telemetry.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_battery_telemetry.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_battery_telemetry.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_battery_telemetry.ApiResponseFor501) | Not Implemented

#### get_system_battery_telemetry.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemBatteryTelemetryResponse**](../../models/GetSystemBatteryTelemetryResponse.md) |  | 


#### get_system_battery_telemetry.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_telemetry.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_telemetry.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_telemetry.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_battery_telemetry.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_battery_telemetry.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_battery_telemetry.ApiResponseFor500
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

#### get_system_battery_telemetry.ApiResponseFor501
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

# **get_system_consumption_lifetime**
<a id="get_system_consumption_lifetime"></a>
> GetSystemConsumptionLifetimeResponse get_system_consumption_lifetime(system_id)

consumption_lifetime

Returns a daily time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last three days.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_consumption_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.get_system_consumption_lifetime_response import GetSystemConsumptionLifetimeResponse
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
    api_instance = site_level_consumption_monitoring_api.SiteLevelConsumptionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # consumption_lifetime
        api_response = api_instance.get_system_consumption_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_consumption_lifetime: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_date': "1970-01-01",
        'end_date': "1970-01-01",
    }
    try:
        # consumption_lifetime
        api_response = api_instance.get_system_consumption_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_consumption_lifetime: %s\n" % e)
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
start_date | StartDateSchema | | optional
end_date | EndDateSchema | | optional


# StartDateSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD

# EndDateSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD

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
200 | [ApiResponseFor200](#get_system_consumption_lifetime.ApiResponseFor200) | consumption_lifetime
401 | [ApiResponseFor401](#get_system_consumption_lifetime.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_consumption_lifetime.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_consumption_lifetime.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_consumption_lifetime.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_consumption_lifetime.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_consumption_lifetime.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_consumption_lifetime.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_consumption_lifetime.ApiResponseFor501) | Not Implemented

#### get_system_consumption_lifetime.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemConsumptionLifetimeResponse**](../../models/GetSystemConsumptionLifetimeResponse.md) |  | 


#### get_system_consumption_lifetime.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_consumption_lifetime.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_consumption_lifetime.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_consumption_lifetime.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_consumption_lifetime.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_consumption_lifetime.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_consumption_lifetime.ApiResponseFor500
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

#### get_system_consumption_lifetime.ApiResponseFor501
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

# **get_system_consumption_meter_telemetry**
<a id="get_system_consumption_meter_telemetry"></a>
> GetSystemConsumptionMeterTelemetryResponse get_system_consumption_meter_telemetry(system_id)

Retrieves telemetry for all consumption meters for a system

Retrieves telemetry for all the consumption meters of a system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_consumption_monitoring_api
from monitoring.model.get_system_consumption_meter_telemetry_response import GetSystemConsumptionMeterTelemetryResponse
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.telemetry_granularity_enum import TelemetryGranularityEnum
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
    api_instance = site_level_consumption_monitoring_api.SiteLevelConsumptionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # Retrieves telemetry for all consumption meters for a system
        api_response = api_instance.get_system_consumption_meter_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_consumption_meter_telemetry: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_at': 1,
        'granularity': TelemetryGranularityEnum("15mins"),
    }
    try:
        # Retrieves telemetry for all consumption meters for a system
        api_response = api_instance.get_system_consumption_meter_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_consumption_meter_telemetry: %s\n" % e)
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

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_consumption_meter_telemetry.ApiResponseFor200) | Telemetry for all consumption meters.
401 | [ApiResponseFor401](#get_system_consumption_meter_telemetry.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_consumption_meter_telemetry.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_consumption_meter_telemetry.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_consumption_meter_telemetry.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_consumption_meter_telemetry.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_consumption_meter_telemetry.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_consumption_meter_telemetry.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_consumption_meter_telemetry.ApiResponseFor501) | Not Implemented

#### get_system_consumption_meter_telemetry.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemConsumptionMeterTelemetryResponse**](../../models/GetSystemConsumptionMeterTelemetryResponse.md) |  | 


#### get_system_consumption_meter_telemetry.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_consumption_meter_telemetry.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_consumption_meter_telemetry.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_consumption_meter_telemetry.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_consumption_meter_telemetry.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_consumption_meter_telemetry.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_consumption_meter_telemetry.ApiResponseFor500
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

#### get_system_consumption_meter_telemetry.ApiResponseFor501
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

# **get_system_energy_export_lifetime**
<a id="get_system_energy_export_lifetime"></a>
> GetSystemEnergyExportLifetimeResponse get_system_energy_export_lifetime(system_id)

export_lifetime

Returns a daily time series of energy exported to the grid by the system over its lifetime. All measurements are in Watt-hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been exported for the last days in the series.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_consumption_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.get_system_energy_export_lifetime_response import GetSystemEnergyExportLifetimeResponse
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
    api_instance = site_level_consumption_monitoring_api.SiteLevelConsumptionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # export_lifetime
        api_response = api_instance.get_system_energy_export_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_energy_export_lifetime: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_date': "1970-01-01",
        'end_date': "1970-01-01",
    }
    try:
        # export_lifetime
        api_response = api_instance.get_system_energy_export_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_energy_export_lifetime: %s\n" % e)
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
start_date | StartDateSchema | | optional
end_date | EndDateSchema | | optional


# StartDateSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD

# EndDateSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD

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
200 | [ApiResponseFor200](#get_system_energy_export_lifetime.ApiResponseFor200) | export_lifetime
401 | [ApiResponseFor401](#get_system_energy_export_lifetime.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_energy_export_lifetime.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_energy_export_lifetime.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_energy_export_lifetime.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_energy_export_lifetime.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_energy_export_lifetime.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_energy_export_lifetime.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_energy_export_lifetime.ApiResponseFor501) | Not Implemented

#### get_system_energy_export_lifetime.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemEnergyExportLifetimeResponse**](../../models/GetSystemEnergyExportLifetimeResponse.md) |  | 


#### get_system_energy_export_lifetime.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_export_lifetime.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_export_lifetime.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_export_lifetime.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_energy_export_lifetime.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_export_lifetime.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_energy_export_lifetime.ApiResponseFor500
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

#### get_system_energy_export_lifetime.ApiResponseFor501
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

# **get_system_energy_export_telemetry**
<a id="get_system_energy_export_telemetry"></a>
> GetSystemEnergyExportTelemetryResponse get_system_energy_export_telemetry(system_id)

Retrieves energy exported to grid in regular intervals

Retrieves energy exported to grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system’s first reported date, then midnight of the system’s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_consumption_monitoring_api
from monitoring.model.get_system_energy_export_telemetry_response import GetSystemEnergyExportTelemetryResponse
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.telemetry_granularity_enum import TelemetryGranularityEnum
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
    api_instance = site_level_consumption_monitoring_api.SiteLevelConsumptionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # Retrieves energy exported to grid in regular intervals
        api_response = api_instance.get_system_energy_export_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_energy_export_telemetry: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_at': 1,
        'granularity': TelemetryGranularityEnum("15mins"),
    }
    try:
        # Retrieves energy exported to grid in regular intervals
        api_response = api_instance.get_system_energy_export_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_energy_export_telemetry: %s\n" % e)
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

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_energy_export_telemetry.ApiResponseFor200) | Telemetry for all production micros.
401 | [ApiResponseFor401](#get_system_energy_export_telemetry.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_energy_export_telemetry.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_energy_export_telemetry.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_energy_export_telemetry.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_energy_export_telemetry.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_energy_export_telemetry.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_energy_export_telemetry.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_energy_export_telemetry.ApiResponseFor501) | Not Implemented

#### get_system_energy_export_telemetry.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemEnergyExportTelemetryResponse**](../../models/GetSystemEnergyExportTelemetryResponse.md) |  | 


#### get_system_energy_export_telemetry.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_export_telemetry.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_export_telemetry.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_export_telemetry.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_energy_export_telemetry.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_export_telemetry.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_energy_export_telemetry.ApiResponseFor500
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

#### get_system_energy_export_telemetry.ApiResponseFor501
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

# **get_system_energy_import_lifetime**
<a id="get_system_energy_import_lifetime"></a>
> GetSystemEnergyImportLifetimeResponse get_system_energy_import_lifetime(system_id)

import_lifetime

Returns a daily time series of energy imported to the grid by the system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response contains trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been imported for the last days in the series.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_consumption_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.get_system_energy_import_lifetime_response import GetSystemEnergyImportLifetimeResponse
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
    api_instance = site_level_consumption_monitoring_api.SiteLevelConsumptionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # import_lifetime
        api_response = api_instance.get_system_energy_import_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_energy_import_lifetime: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_date': "1970-01-01",
        'end_date': "1970-01-01",
    }
    try:
        # import_lifetime
        api_response = api_instance.get_system_energy_import_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_energy_import_lifetime: %s\n" % e)
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
start_date | StartDateSchema | | optional
end_date | EndDateSchema | | optional


# StartDateSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD

# EndDateSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD

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
200 | [ApiResponseFor200](#get_system_energy_import_lifetime.ApiResponseFor200) | import_lifetime
401 | [ApiResponseFor401](#get_system_energy_import_lifetime.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_energy_import_lifetime.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_energy_import_lifetime.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_energy_import_lifetime.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_energy_import_lifetime.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_energy_import_lifetime.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_energy_import_lifetime.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_energy_import_lifetime.ApiResponseFor501) | Not Implemented

#### get_system_energy_import_lifetime.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemEnergyImportLifetimeResponse**](../../models/GetSystemEnergyImportLifetimeResponse.md) |  | 


#### get_system_energy_import_lifetime.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_import_lifetime.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_import_lifetime.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_import_lifetime.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_energy_import_lifetime.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_import_lifetime.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_energy_import_lifetime.ApiResponseFor500
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

#### get_system_energy_import_lifetime.ApiResponseFor501
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

# **get_system_energy_import_telemetry**
<a id="get_system_energy_import_telemetry"></a>
> GetSystemEnergyImportTelemetryResponse get_system_energy_import_telemetry(system_id)

Retrieves energy imported from grid in regular intervals

Retrieves energy imported from grid in regular intervals. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system’s first reported date, then midnight of the system’s first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 intervals will appear in response. If granularity is day, maximum 96 intervals will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_consumption_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.telemetry_granularity_enum import TelemetryGranularityEnum
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.get_system_energy_import_telemetry_response import GetSystemEnergyImportTelemetryResponse
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
    api_instance = site_level_consumption_monitoring_api.SiteLevelConsumptionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # Retrieves energy imported from grid in regular intervals
        api_response = api_instance.get_system_energy_import_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_energy_import_telemetry: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_at': 1,
        'granularity': TelemetryGranularityEnum("15mins"),
    }
    try:
        # Retrieves energy imported from grid in regular intervals
        api_response = api_instance.get_system_energy_import_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelConsumptionMonitoringApi->get_system_energy_import_telemetry: %s\n" % e)
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

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_energy_import_telemetry.ApiResponseFor200) | Telemetry for all production micros.
401 | [ApiResponseFor401](#get_system_energy_import_telemetry.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_energy_import_telemetry.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_energy_import_telemetry.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_energy_import_telemetry.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_energy_import_telemetry.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_energy_import_telemetry.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_energy_import_telemetry.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_energy_import_telemetry.ApiResponseFor501) | Not Implemented

#### get_system_energy_import_telemetry.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemEnergyImportTelemetryResponse**](../../models/GetSystemEnergyImportTelemetryResponse.md) |  | 


#### get_system_energy_import_telemetry.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_import_telemetry.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_import_telemetry.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_import_telemetry.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_energy_import_telemetry.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_import_telemetry.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_energy_import_telemetry.ApiResponseFor500
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

#### get_system_energy_import_telemetry.ApiResponseFor501
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

