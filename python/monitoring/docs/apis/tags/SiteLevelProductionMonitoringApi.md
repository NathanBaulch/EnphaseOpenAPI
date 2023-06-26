<a id="__pageTop"></a>
# monitoring.apis.tags.site_level_production_monitoring_api.SiteLevelProductionMonitoringApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_system_energy_lifetime**](#get_system_energy_lifetime) | **get** /systems/{system_id}/energy_lifetime | energy_lifetime
[**get_system_production_meter_readings**](#get_system_production_meter_readings) | **get** /systems/{system_id}/production_meter_readings | production_meter_readings
[**get_system_production_meter_telemetry**](#get_system_production_meter_telemetry) | **get** /systems/{system_id}/telemetry/production_meter | Retrieves telemetry for all production meters for a system
[**get_system_production_micro_telemetry**](#get_system_production_micro_telemetry) | **get** /systems/{system_id}/telemetry/production_micro | Retrieves telemetry for all production micros for a system
[**get_system_rgm_stats**](#get_system_rgm_stats) | **get** /systems/{system_id}/rgm_stats | rgm_stats

# **get_system_energy_lifetime**
<a id="get_system_energy_lifetime"></a>
> GetSystemEnergyLifetimeResponse get_system_energy_lifetime(system_id)

energy_lifetime

Returns a daily time series of energy produced by the system over its lifetime. All measurements are in Watt hours. The time series includes one entry for each day from the start_date to the end_date with no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no energy has been reported for the last days in the series. If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed. Later, it switches to using the data as measured by the meter. This is called the \"merged time series\". The attribute 'meter_start_date' indicates the time when the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter production=all to the request.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_production_monitoring_api
from monitoring.model.get_system_energy_lifetime_response import GetSystemEnergyLifetimeResponse
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.data_temporarily_unavailable_error import DataTemporarilyUnavailableError
from monitoring.model.too_many_requests_error import TooManyRequestsError
from monitoring.model.system_energy_lifetime_production_enum import SystemEnergyLifetimeProductionEnum
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
    api_instance = site_level_production_monitoring_api.SiteLevelProductionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # energy_lifetime
        api_response = api_instance.get_system_energy_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_energy_lifetime: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_date': "1970-01-01",
        'end_date': "1970-01-01",
        'production': SystemEnergyLifetimeProductionEnum("all"),
    }
    try:
        # energy_lifetime
        api_response = api_instance.get_system_energy_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_energy_lifetime: %s\n" % e)
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
production | ProductionSchema | | optional


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

# ProductionSchema
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemEnergyLifetimeProductionEnum**](../../models/SystemEnergyLifetimeProductionEnum.md) |  | 


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
200 | [ApiResponseFor200](#get_system_energy_lifetime.ApiResponseFor200) | When the query parameters include \&quot;production&#x3D;all\&quot;, returns meter and microinverter-measured time series.
401 | [ApiResponseFor401](#get_system_energy_lifetime.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_energy_lifetime.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_energy_lifetime.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_energy_lifetime.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_energy_lifetime.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_energy_lifetime.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_energy_lifetime.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_energy_lifetime.ApiResponseFor501) | Not Implemented

#### get_system_energy_lifetime.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemEnergyLifetimeResponse**](../../models/GetSystemEnergyLifetimeResponse.md) |  | 


#### get_system_energy_lifetime.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_lifetime.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_lifetime.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_lifetime.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_energy_lifetime.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_energy_lifetime.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_energy_lifetime.ApiResponseFor500
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

#### get_system_energy_lifetime.ApiResponseFor501
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

# **get_system_production_meter_readings**
<a id="get_system_production_meter_readings"></a>
> GetSystemProductionMeterReadingsResponse get_system_production_meter_readings(system_id)

production_meter_readings

Returns the last known reading of each production meter on the system as of the requested time, regardless of whether the meter is currently in service or retired. Read_at is the time at which the reading was taken, and is always less than or equal to the requested end_at. Commonly, the reading will be within 30 minutes of the requested end_at. However, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system. Systems that are configured to report infrequently can show large deltas on all meters, especially when end_at is close to the current time. Meters that have been retired from a system will show an end_at that doesn't change, and that eventually is far away from the current time.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_production_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.get_system_production_meter_readings_response import GetSystemProductionMeterReadingsResponse
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
    api_instance = site_level_production_monitoring_api.SiteLevelProductionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # production_meter_readings
        api_response = api_instance.get_system_production_meter_readings(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_production_meter_readings: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'end_at': 1,
    }
    try:
        # production_meter_readings
        api_response = api_instance.get_system_production_meter_readings(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_production_meter_readings: %s\n" % e)
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
end_at | EndAtSchema | | optional


# EndAtSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | value must be a 64 bit integer

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
200 | [ApiResponseFor200](#get_system_production_meter_readings.ApiResponseFor200) | production_meter_readings
401 | [ApiResponseFor401](#get_system_production_meter_readings.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_production_meter_readings.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_production_meter_readings.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_production_meter_readings.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_production_meter_readings.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_production_meter_readings.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_production_meter_readings.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_production_meter_readings.ApiResponseFor501) | Not Implemented

#### get_system_production_meter_readings.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemProductionMeterReadingsResponse**](../../models/GetSystemProductionMeterReadingsResponse.md) |  | 


#### get_system_production_meter_readings.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_meter_readings.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_meter_readings.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_meter_readings.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_production_meter_readings.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_meter_readings.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_production_meter_readings.ApiResponseFor500
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

#### get_system_production_meter_readings.ApiResponseFor501
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

# **get_system_production_meter_telemetry**
<a id="get_system_production_meter_telemetry"></a>
> GetSystemProductionMeterTelemetryResponse get_system_production_meter_telemetry(system_id)

Retrieves telemetry for all production meters for a system

Retrieves telemetry for all the production meters of a system. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 1 interval will appear in response. If granularity is day, maximum 96 intervals, and if granularity is week, maximum 672 intervals, will appear in response where each interval is of 15 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_production_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.telemetry_granularity_enum import TelemetryGranularityEnum
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.get_system_production_meter_telemetry_response import GetSystemProductionMeterTelemetryResponse
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
    api_instance = site_level_production_monitoring_api.SiteLevelProductionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # Retrieves telemetry for all production meters for a system
        api_response = api_instance.get_system_production_meter_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_production_meter_telemetry: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_at': 1,
        'granularity': TelemetryGranularityEnum("15mins"),
    }
    try:
        # Retrieves telemetry for all production meters for a system
        api_response = api_instance.get_system_production_meter_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_production_meter_telemetry: %s\n" % e)
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
200 | [ApiResponseFor200](#get_system_production_meter_telemetry.ApiResponseFor200) | Telemetry for all production meters.
401 | [ApiResponseFor401](#get_system_production_meter_telemetry.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_production_meter_telemetry.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_production_meter_telemetry.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_production_meter_telemetry.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_production_meter_telemetry.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_production_meter_telemetry.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_production_meter_telemetry.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_production_meter_telemetry.ApiResponseFor501) | Not Implemented

#### get_system_production_meter_telemetry.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemProductionMeterTelemetryResponse**](../../models/GetSystemProductionMeterTelemetryResponse.md) |  | 


#### get_system_production_meter_telemetry.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_meter_telemetry.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_meter_telemetry.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_meter_telemetry.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_production_meter_telemetry.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_meter_telemetry.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_production_meter_telemetry.ApiResponseFor500
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

#### get_system_production_meter_telemetry.ApiResponseFor501
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

# **get_system_production_micro_telemetry**
<a id="get_system_production_micro_telemetry"></a>
> GetSystemProductionMicroTelemetryResponse get_system_production_micro_telemetry(system_id)

Retrieves telemetry for all production micros for a system

Retrieves telemetry for all the production micros of a system. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at. The end_at is calculated as the minimum of the time of the request and (start time + granularity). The meaning of granularity is as follows:  If granularity is 15mins, maximum 3 intervals will appear in response. If granularity is day, maximum 288 intervals will appear in response where each interval is of 5 mins duration.  The requested start date must be within 2 years from current date. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_production_monitoring_api
from monitoring.model.get_system_production_micro_telemetry_response import GetSystemProductionMicroTelemetryResponse
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
    api_instance = site_level_production_monitoring_api.SiteLevelProductionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # Retrieves telemetry for all production micros for a system
        api_response = api_instance.get_system_production_micro_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_production_micro_telemetry: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_at': 1,
        'granularity': TelemetryGranularityEnum("15mins"),
    }
    try:
        # Retrieves telemetry for all production micros for a system
        api_response = api_instance.get_system_production_micro_telemetry(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_production_micro_telemetry: %s\n" % e)
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
200 | [ApiResponseFor200](#get_system_production_micro_telemetry.ApiResponseFor200) | Telemetry for all production micros.
401 | [ApiResponseFor401](#get_system_production_micro_telemetry.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_production_micro_telemetry.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_production_micro_telemetry.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_production_micro_telemetry.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_production_micro_telemetry.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_production_micro_telemetry.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_production_micro_telemetry.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_production_micro_telemetry.ApiResponseFor501) | Not Implemented

#### get_system_production_micro_telemetry.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemProductionMicroTelemetryResponse**](../../models/GetSystemProductionMicroTelemetryResponse.md) |  | 


#### get_system_production_micro_telemetry.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_micro_telemetry.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_micro_telemetry.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_micro_telemetry.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_production_micro_telemetry.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_production_micro_telemetry.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_production_micro_telemetry.ApiResponseFor500
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

#### get_system_production_micro_telemetry.ApiResponseFor501
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

# **get_system_rgm_stats**
<a id="get_system_rgm_stats"></a>
> GetSystemRgmStatsResponse get_system_rgm_stats(system_id)

rgm_stats

Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one week, returns one week of intervals. Intervals are 15 minutes in length and start at the top of the hour. Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 (in epoch format) is treated as a request for 08:00 (in epoch format). Intervals are listed by their end times in epoch format. The requested date range in one API hit cannot be more than 7 days and the requested start at must be within 2 years from current time. If the start_at specified is earlier than the system's first reported date, then midnight of the system's first reported date is considered as start_at.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import site_level_production_monitoring_api
from monitoring.model.not_implemented_error import NotImplementedError
from monitoring.model.internal_server_error import InternalServerError
from monitoring.model.client_error import ClientError
from monitoring.model.get_system_rgm_stats_response import GetSystemRgmStatsResponse
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
    api_instance = site_level_production_monitoring_api.SiteLevelProductionMonitoringApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    query_params = {
    }
    try:
        # rgm_stats
        api_response = api_instance.get_system_rgm_stats(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_rgm_stats: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    query_params = {
        'start_at': 1,
        'end_at': 1,
    }
    try:
        # rgm_stats
        api_response = api_instance.get_system_rgm_stats(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling SiteLevelProductionMonitoringApi->get_system_rgm_stats: %s\n" % e)
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
end_at | EndAtSchema | | optional


# StartAtSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | value must be a 64 bit integer

# EndAtSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | value must be a 64 bit integer

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
200 | [ApiResponseFor200](#get_system_rgm_stats.ApiResponseFor200) | rgm_stats
401 | [ApiResponseFor401](#get_system_rgm_stats.ApiResponseFor401) | Unauthorized
403 | [ApiResponseFor403](#get_system_rgm_stats.ApiResponseFor403) | Forbidden
404 | [ApiResponseFor404](#get_system_rgm_stats.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_rgm_stats.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_rgm_stats.ApiResponseFor422) | Unprocessable Entity
429 | [ApiResponseFor429](#get_system_rgm_stats.ApiResponseFor429) | Too Many Requests
500 | [ApiResponseFor500](#get_system_rgm_stats.ApiResponseFor500) | Internal Server Error
501 | [ApiResponseFor501](#get_system_rgm_stats.ApiResponseFor501) | Not Implemented

#### get_system_rgm_stats.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemRgmStatsResponse**](../../models/GetSystemRgmStatsResponse.md) |  | 


#### get_system_rgm_stats.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_rgm_stats.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_rgm_stats.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_rgm_stats.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MethodNotAllowedError**](../../models/MethodNotAllowedError.md) |  | 


#### get_system_rgm_stats.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### get_system_rgm_stats.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_rgm_stats.ApiResponseFor500
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

#### get_system_rgm_stats.ApiResponseFor501
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

