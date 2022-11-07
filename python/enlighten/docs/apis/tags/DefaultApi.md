<a name="__pageTop"></a>
# enlighten.apis.tags.default_api.DefaultApi

All URIs are relative to *https://api.enphaseenergy.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumption_lifetime**](#consumption_lifetime) | **get** /systems/{system_id}/consumption_lifetime | 
[**consumption_stats**](#consumption_stats) | **get** /systems/{system_id}/consumption_stats | 
[**energy_lifetime**](#energy_lifetime) | **get** /systems/{system_id}/energy_lifetime | 
[**envoys**](#envoys) | **get** /systems/{system_id}/envoys | 
[**inventory**](#inventory) | **get** /systems/{system_id}/inventory | 
[**inverters_summary_by_envoy_or_site**](#inverters_summary_by_envoy_or_site) | **get** /systems/inverters_summary_by_envoy_or_site | 
[**monthly_production**](#monthly_production) | **get** /systems/{system_id}/monthly_production | 
[**production_meter_readings**](#production_meter_readings) | **get** /systems/{system_id}/production_meter_readings | 
[**rgm_stats**](#rgm_stats) | **get** /systems/{system_id}/rgm_stats | 
[**search_system_id**](#search_system_id) | **get** /systems/search_system_id | 
[**stats**](#stats) | **get** /systems/{system_id}/stats | 
[**summary**](#summary) | **get** /systems/{system_id}/summary | 
[**systems**](#systems) | **get** /systems | 

# **consumption_lifetime**
<a name="consumption_lifetime"></a>
> ConsumptionLifetimeResponse consumption_lifetime(user_idsystem_id)



Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter, returns `204` - No Content. If you don't have permission to view consumption data, the response code is `401`.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or metering problems.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.consumption_lifetime_response import ConsumptionLifetimeResponse
from enlighten.model.server_error import ServerError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.consumption_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->consumption_lifetime: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
        'start_date': "Fri Jul 01 10:00:00 AEST 2016",
        'end_date': "Sun Jul 31 10:00:00 AEST 2016",
    }
    try:
        api_response = api_instance.consumption_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->consumption_lifetime: %s\n" % e)
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
user_id | UserIdSchema | | 
start_date | StartDateSchema | | optional
end_date | EndDateSchema | | optional


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

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
200 | [ApiResponseFor200](#consumption_lifetime.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#consumption_lifetime.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#consumption_lifetime.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#consumption_lifetime.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#consumption_lifetime.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#consumption_lifetime.ApiResponseFor503) | Server error

#### consumption_lifetime.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConsumptionLifetimeResponse**](../../models/ConsumptionLifetimeResponse.md) |  | 


#### consumption_lifetime.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### consumption_lifetime.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### consumption_lifetime.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### consumption_lifetime.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### consumption_lifetime.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **consumption_stats**
<a name="consumption_stats"></a>
> ConsumptionStatsResponse consumption_stats(user_idsystem_id)



Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any consumption meters installed, the response includes an empty intervals array.  If you don't have permission to view consumption data, the response code is `401`.  Under some conditions, data for a given period may be temporarily unavailable.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.consumption_stats_response import ConsumptionStatsResponse
from enlighten.model.server_error import ServerError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.consumption_stats(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->consumption_stats: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
        'start_at': 1448946000,
        'end_at': 1449011615,
    }
    try:
        api_response = api_instance.consumption_stats(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->consumption_stats: %s\n" % e)
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
user_id | UserIdSchema | | 
start_at | StartAtSchema | | optional
end_at | EndAtSchema | | optional


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

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
200 | [ApiResponseFor200](#consumption_stats.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#consumption_stats.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#consumption_stats.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#consumption_stats.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#consumption_stats.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#consumption_stats.ApiResponseFor503) | Server error

#### consumption_stats.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConsumptionStatsResponse**](../../models/ConsumptionStatsResponse.md) |  | 


#### consumption_stats.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### consumption_stats.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### consumption_stats.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### consumption_stats.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### consumption_stats.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **energy_lifetime**
<a name="energy_lifetime"></a>
> EnergyLifetimeResponse energy_lifetime(user_idsystem_id)



Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as `[909, 4970, 0, 0, 0]`, then no energy has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or production problems.  If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as measured by the meter. This is called the \"merged time series\". In addition, the response includes the attribute `meter_start_date`, to indicate where in the time series the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter `production=all` to the request.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.server_error import ServerError
from enlighten.model.energy_lifetime_response import EnergyLifetimeResponse
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.energy_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->energy_lifetime: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
        'start_date': "Tue Jan 01 11:00:00 AEDT 2013",
        'end_date': "Sun Jan 06 11:00:00 AEDT 2013",
        'production': "all",
    }
    try:
        api_response = api_instance.energy_lifetime(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->energy_lifetime: %s\n" % e)
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
user_id | UserIdSchema | | 
start_date | StartDateSchema | | optional
end_date | EndDateSchema | | optional
production | ProductionSchema | | optional


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

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

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | must be one of ["all", ] 

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
200 | [ApiResponseFor200](#energy_lifetime.ApiResponseFor200) | OK
204 | [ApiResponseFor204](#energy_lifetime.ApiResponseFor204) | No Content
401 | [ApiResponseFor401](#energy_lifetime.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#energy_lifetime.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#energy_lifetime.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#energy_lifetime.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#energy_lifetime.ApiResponseFor503) | Server error

#### energy_lifetime.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**EnergyLifetimeResponse**](../../models/EnergyLifetimeResponse.md) |  | 


#### energy_lifetime.ApiResponseFor204
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | Unset | body was not defined |
headers | Unset | headers were not defined |

#### energy_lifetime.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### energy_lifetime.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### energy_lifetime.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### energy_lifetime.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### energy_lifetime.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **envoys**
<a name="envoys"></a>
> EnvoysResponse envoys(user_idsystem_id)



Returns a listing of all active Envoys currently deployed on the system.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.server_error import ServerError
from enlighten.model.envoys_response import EnvoysResponse
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.envoys(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->envoys: %s\n" % e)
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
user_id | UserIdSchema | | 


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

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
200 | [ApiResponseFor200](#envoys.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#envoys.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#envoys.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#envoys.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#envoys.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#envoys.ApiResponseFor503) | Server error

#### envoys.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**EnvoysResponse**](../../models/EnvoysResponse.md) |  | 


#### envoys.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### envoys.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### envoys.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### envoys.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### envoys.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **inventory**
<a name="inventory"></a>
> InventoryResponse inventory(user_idsystem_id)



Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \"Active\" does not imply that the device is currently reporting, producing, or measuring energy.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.server_error import ServerError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from enlighten.model.inventory_response import InventoryResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.inventory(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->inventory: %s\n" % e)
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
user_id | UserIdSchema | | 


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

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
200 | [ApiResponseFor200](#inventory.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#inventory.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#inventory.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#inventory.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#inventory.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#inventory.ApiResponseFor503) | Server error

#### inventory.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**InventoryResponse**](../../models/InventoryResponse.md) |  | 


#### inventory.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### inventory.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### inventory.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### inventory.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### inventory.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **inverters_summary_by_envoy_or_site**
<a name="inverters_summary_by_envoy_or_site"></a>
> [InvertersSummaryByEnvoyOrSiteResponse] inverters_summary_by_envoy_or_site(user_idsite_id)



Returns the summary along with the energy produced on the system over its lifetime.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.inverters_summary_by_envoy_or_site_response import InvertersSummaryByEnvoyOrSiteResponse
from enlighten.model.server_error import ServerError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    query_params = {
        'user_id': "4d6a51330a",
        'site_id': 66,
    }
    try:
        api_response = api_instance.inverters_summary_by_envoy_or_site(
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->inverters_summary_by_envoy_or_site: %s\n" % e)
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
user_id | UserIdSchema | | 
site_id | SiteIdSchema | | 


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

# SiteIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#inverters_summary_by_envoy_or_site.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#inverters_summary_by_envoy_or_site.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#inverters_summary_by_envoy_or_site.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#inverters_summary_by_envoy_or_site.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#inverters_summary_by_envoy_or_site.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#inverters_summary_by_envoy_or_site.ApiResponseFor503) | Server error

#### inverters_summary_by_envoy_or_site.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**InvertersSummaryByEnvoyOrSiteResponse**]({{complexTypePrefix}}InvertersSummaryByEnvoyOrSiteResponse.md) | [**InvertersSummaryByEnvoyOrSiteResponse**]({{complexTypePrefix}}InvertersSummaryByEnvoyOrSiteResponse.md) | [**InvertersSummaryByEnvoyOrSiteResponse**]({{complexTypePrefix}}InvertersSummaryByEnvoyOrSiteResponse.md) |  | 

#### inverters_summary_by_envoy_or_site.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### inverters_summary_by_envoy_or_site.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### inverters_summary_by_envoy_or_site.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### inverters_summary_by_envoy_or_site.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### inverters_summary_by_envoy_or_site.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **monthly_production**
<a name="monthly_production"></a>
> MonthlyProductionResponse monthly_production(user_idsystem_idstart_date)



This endpoint is deprecated and will be removed in a future release. Use `production_meter_readings` or `energy_lifetime` instead.  Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system, measurements come from the meter; otherwise, measurements come from the microinverters.  This endpoint can return a response of Data Temporarily Unavailable.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.server_error import ServerError
from enlighten.model.monthly_production_response import MonthlyProductionResponse
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
        'start_date': "Fri Jul 01 10:00:00 AEST 2011",
    }
    try:
        api_response = api_instance.monthly_production(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->monthly_production: %s\n" % e)
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
user_id | UserIdSchema | | 
start_date | StartDateSchema | | 


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

# StartDateSchema

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
200 | [ApiResponseFor200](#monthly_production.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#monthly_production.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#monthly_production.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#monthly_production.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#monthly_production.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#monthly_production.ApiResponseFor503) | Server error

#### monthly_production.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**MonthlyProductionResponse**](../../models/MonthlyProductionResponse.md) |  | 


#### monthly_production.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### monthly_production.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### monthly_production.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### monthly_production.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### monthly_production.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **production_meter_readings**
<a name="production_meter_readings"></a>
> ProductionMeterReadingsResponse production_meter_readings(user_idsystem_id)



Returns the last known \"odometer\" reading of each revenue-grade production meter on the system as of the requested time.  This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. `read_at` is the time at which the reading was taken, and is always less than or equal to the requested `end_at`. Commonly, the reading will be within 30 minutes of the requested `end_at`; however, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when `end_at` is close to the current time. Meters that have been retired from a system will show an `end_at` that doesn't change, and that eventually is far away from the current time.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.production_meter_readings_response import ProductionMeterReadingsResponse
from enlighten.model.server_error import ServerError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.production_meter_readings(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->production_meter_readings: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
        'end_at': 1473901755,
    }
    try:
        api_response = api_instance.production_meter_readings(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->production_meter_readings: %s\n" % e)
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
user_id | UserIdSchema | | 
end_at | EndAtSchema | | optional


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

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
200 | [ApiResponseFor200](#production_meter_readings.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#production_meter_readings.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#production_meter_readings.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#production_meter_readings.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#production_meter_readings.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#production_meter_readings.ApiResponseFor503) | Server error

#### production_meter_readings.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ProductionMeterReadingsResponse**](../../models/ProductionMeterReadingsResponse.md) |  | 


#### production_meter_readings.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### production_meter_readings.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### production_meter_readings.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### production_meter_readings.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### production_meter_readings.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **rgm_stats**
<a name="rgm_stats"></a>
> RgmStatsResponse rgm_stats(user_idsystem_id)



Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any revenue-grade meters installed, the response includes an empty intervals array.  Under some conditions, data for a given period may be temporarily unavailable.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.rgm_stats_response import RgmStatsResponse
from enlighten.model.server_error import ServerError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.rgm_stats(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->rgm_stats: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
        'start_at': 1381474800,
        'end_at': 1381561200,
    }
    try:
        api_response = api_instance.rgm_stats(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->rgm_stats: %s\n" % e)
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
user_id | UserIdSchema | | 
start_at | StartAtSchema | | optional
end_at | EndAtSchema | | optional


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

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
200 | [ApiResponseFor200](#rgm_stats.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#rgm_stats.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#rgm_stats.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#rgm_stats.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#rgm_stats.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#rgm_stats.ApiResponseFor503) | Server error

#### rgm_stats.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**RgmStatsResponse**](../../models/RgmStatsResponse.md) |  | 


#### rgm_stats.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### rgm_stats.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### rgm_stats.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### rgm_stats.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### rgm_stats.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **search_system_id**
<a name="search_system_id"></a>
> SearchSystemIdResponse search_system_id(user_idserial_num)



Get system ID by envoy serial number.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.server_error import ServerError
from enlighten.model.not_found_error import NotFoundError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from enlighten.model.search_system_id_response import SearchSystemIdResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    query_params = {
        'user_id': "4d6a51330a",
        'serial_num': "23435345345",
    }
    try:
        api_response = api_instance.search_system_id(
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->search_system_id: %s\n" % e)
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
user_id | UserIdSchema | | 
serial_num | SerialNumSchema | | 


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

# SerialNumSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#search_system_id.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#search_system_id.ApiResponseFor401) | Client error
404 | [ApiResponseFor404](#search_system_id.ApiResponseFor404) | Not Found
409 | [ApiResponseFor409](#search_system_id.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#search_system_id.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#search_system_id.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#search_system_id.ApiResponseFor503) | Server error

#### search_system_id.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SearchSystemIdResponse**](../../models/SearchSystemIdResponse.md) |  | 


#### search_system_id.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### search_system_id.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**NotFoundError**](../../models/NotFoundError.md) |  | 


#### search_system_id.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### search_system_id.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### search_system_id.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### search_system_id.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **stats**
<a name="stats"></a>
> StatsResponse stats(user_idsystem_id)



Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of intervals. Intervals are 5 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.  The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a gap, because the microinverters do not produce at night.  Sometimes a request cannot be processed because the requested dates are invalid for the system in question. Examples include asking for stats starting at a time that is later than the system's last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is `422` and the response body includes an error reason as well as the parameters used to process the request.  If the system doesn't have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.stats_response import StatsResponse
from enlighten.model.server_error import ServerError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.stats(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->stats: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
        'start_at': 1381496100,
        'end_at': 1381497600,
    }
    try:
        api_response = api_instance.stats(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->stats: %s\n" % e)
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
user_id | UserIdSchema | | 
start_at | StartAtSchema | | optional
end_at | EndAtSchema | | optional


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

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
200 | [ApiResponseFor200](#stats.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#stats.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#stats.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#stats.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#stats.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#stats.ApiResponseFor503) | Server error

#### stats.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**StatsResponse**](../../models/StatsResponse.md) |  | 


#### stats.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### stats.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### stats.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### stats.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### stats.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **summary**
<a name="summary"></a>
> SummaryResponse summary(user_idsystem_id)



Returns summary information for the specified system.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.summary_response import SummaryResponse
from enlighten.model.server_error import ServerError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.summary(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->summary: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 66,
    }
    query_params = {
        'user_id': "4d6a51330a",
        'summary_date': "Fri Sep 17 10:00:00 AEST 2010",
    }
    try:
        api_response = api_instance.summary(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->summary: %s\n" % e)
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
user_id | UserIdSchema | | 
summary_date | SummaryDateSchema | | optional


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

# SummaryDateSchema

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
200 | [ApiResponseFor200](#summary.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#summary.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#summary.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#summary.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#summary.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#summary.ApiResponseFor503) | Server error

#### summary.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SummaryResponse**](../../models/SummaryResponse.md) |  | 


#### summary.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### summary.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### summary.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### summary.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### summary.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **systems**
<a name="systems"></a>
> SystemsResponse systems(user_id)



Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full list, use the `next` attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.

### Example

* Api Key Authentication (ApiKey):
```python
import enlighten
from enlighten.apis.tags import default_api
from enlighten.model.connection_type import ConnectionType
from enlighten.model.status import Status
from enlighten.model.server_error import ServerError
from enlighten.model.client_error import ClientError
from enlighten.model.conflict_error import ConflictError
from enlighten.model.unprocessable_entity_error import UnprocessableEntityError
from enlighten.model.systems_response import SystemsResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.enphaseenergy.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = enlighten.Configuration(
    host = "https://api.enphaseenergy.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'
# Enter a context with an instance of the API client
with enlighten.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    query_params = {
        'user_id': "4d6a51330a",
    }
    try:
        api_response = api_instance.systems(
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->systems: %s\n" % e)

    # example passing only optional values
    query_params = {
        'user_id': "4d6a51330a",
        'next': "4d5467784d5445770a",
        'limit': 100,
        'system_id': 67,
        'system_id[]': [67],
        'system_name': "Green",
        'system_name[]': ["Green"],
        'status': Status("power"),
        'status[]': ["comm","micro"],
        'reference': "reference_example",
        'reference[]': [
        "reference[]_example"
    ],
        'installer': "installer_example",
        'installer[]': [
        "installer[]_example"
    ],
        'connection_type': ConnectionType("ethernet"),
        'connection_type[]': ["ethernet"],
    }
    try:
        api_response = api_instance.systems(
            query_params=query_params,
        )
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->systems: %s\n" % e)
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
user_id | UserIdSchema | | 
next | NextSchema | | optional
limit | LimitSchema | | optional
system_id | SystemIdSchema | | optional
system_id[] | SystemIdSchema | | optional
system_name | SystemNameSchema | | optional
system_name[] | SystemNameSchema | | optional
status | StatusSchema | | optional
status[] | StatusSchema | | optional
reference | ReferenceSchema | | optional
reference[] | ReferenceSchema | | optional
installer | InstallerSchema | | optional
installer[] | InstallerSchema | | optional
connection_type | ConnectionTypeSchema | | optional
connection_type[] | ConnectionTypeSchema | | optional


# UserIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

# NextSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

# LimitSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | if omitted the server will use the default value of 100

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SystemNameSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

# SystemNameSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  |  | 

# StatusSchema
Type | Description  | Notes
------------- | ------------- | -------------
[**Status**](../../models/Status.md) |  | 


# StatusSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**Status**]({{complexTypePrefix}}Status.md) | [**Status**]({{complexTypePrefix}}Status.md) | [**Status**]({{complexTypePrefix}}Status.md) |  | 

# ReferenceSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

# ReferenceSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  |  | 

# InstallerSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

# InstallerSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  |  | 

# ConnectionTypeSchema
Type | Description  | Notes
------------- | ------------- | -------------
[**ConnectionType**](../../models/ConnectionType.md) |  | 


# ConnectionTypeSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**ConnectionType**]({{complexTypePrefix}}ConnectionType.md) | [**ConnectionType**]({{complexTypePrefix}}ConnectionType.md) | [**ConnectionType**]({{complexTypePrefix}}ConnectionType.md) |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#systems.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#systems.ApiResponseFor401) | Client error
409 | [ApiResponseFor409](#systems.ApiResponseFor409) | Conflict
422 | [ApiResponseFor422](#systems.ApiResponseFor422) | Unprocessable Entity
500 | [ApiResponseFor500](#systems.ApiResponseFor500) | Server error
503 | [ApiResponseFor503](#systems.ApiResponseFor503) | Server error

#### systems.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemsResponse**](../../models/SystemsResponse.md) |  | 


#### systems.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ClientError**](../../models/ClientError.md) |  | 


#### systems.ApiResponseFor409
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor409ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor409ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ConflictError**](../../models/ConflictError.md) |  | 


#### systems.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### systems.ApiResponseFor500
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor500ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor500ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### systems.ApiResponseFor503
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor503ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor503ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


### Authorization

[ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

