<a id="__pageTop"></a>
# monitoring.apis.tags.streaming_api.StreamingApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stream_system_live_data**](#stream_system_live_data) | **get** /systems/{system_id}/live_data | Site Level Live Status

# **stream_system_live_data**
<a id="stream_system_live_data"></a>
> StreamSystemLiveDataResponse stream_system_live_data(system_id)

Site Level Live Status

API users can get real time live status data on demand for a given system. User can retrieve real time power for PV Production, Grid Import/Export, Consumption, Battery Charge/Discharge, and Generator. Users can also retrieve Grid Status, Battery Mode, and Battery State of Charge. User will receive the stream for a duration of 30 seconds by default and can configure the time in seconds by passing 'duration' as a header parameter with a minimum value of 30 and maximum value of 300.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import monitoring
from monitoring.apis.tags import streaming_api
from monitoring.model.stream_system_live_data_response import StreamSystemLiveDataResponse
from monitoring.model.stream_system_live_data_error import StreamSystemLiveDataError
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
    api_instance = streaming_api.StreamingApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    header_params = {
    }
    try:
        # Site Level Live Status
        api_response = api_instance.stream_system_live_data(
            path_params=path_params,
            header_params=header_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling StreamingApi->stream_system_live_data: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    header_params = {
        'duration': 30,
    }
    try:
        # Site Level Live Status
        api_response = api_instance.stream_system_live_data(
            path_params=path_params,
            header_params=header_params,
        )
        pprint(api_response)
    except monitoring.ApiException as e:
        print("Exception when calling StreamingApi->stream_system_live_data: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
header_params | RequestHeaderParams | |
path_params | RequestPathParams | |
accept_content_types | typing.Tuple[str] | default is ('text/event-stream', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### header_params
#### RequestHeaderParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
duration | DurationSchema | | optional

# DurationSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

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
200 | [ApiResponseFor200](#stream_system_live_data.ApiResponseFor200) | successful operation
401 | [ApiResponseFor401](#stream_system_live_data.ApiResponseFor401) | User will get 401 in the below cases. Response content type is application/json. NOT_AUTHENTICATED - API key is missing UNAUTHORIZED - Access token is invalid UNAUTHORIZED - Access token has expired NOT_AUTHENTICATED - API Key is invalid UNAUTHORIZED - Application is not authorized to access the requested resource
403 | [ApiResponseFor403](#stream_system_live_data.ApiResponseFor403) | User is not authorized. Response content type is application/json.
429 | [ApiResponseFor429](#stream_system_live_data.ApiResponseFor429) | Too Many Requests. Response content type is application/json.
461 | [ApiResponseFor461](#stream_system_live_data.ApiResponseFor461) | Duration is less than 30 seconds. Response content type is application/json.
462 | [ApiResponseFor462](#stream_system_live_data.ApiResponseFor462) | Duration is greater then 300 seconds. Response content type is application/json.
463 | [ApiResponseFor463](#stream_system_live_data.ApiResponseFor463) | Duration is not integer. Response content type is application/json.
466 | [ApiResponseFor466](#stream_system_live_data.ApiResponseFor466) | Envoy must be active and envoy version must be at least 6.0.0. Response content type is application/json.
468 | [ApiResponseFor468](#stream_system_live_data.ApiResponseFor468) | System ID does not exist. Response content type is application/json.
472 | [ApiResponseFor472](#stream_system_live_data.ApiResponseFor472) | For Ensemble sites, live stream will be supported in the following cases: If site has an active battery or active system controller, then site must have active production meter and active consumption meter. Otherwise, site must have active production meter. Response content type is application/json.
550 | [ApiResponseFor550](#stream_system_live_data.ApiResponseFor550) | Service unreachable. Response content type is application/json.
551 | [ApiResponseFor551](#stream_system_live_data.ApiResponseFor551) | Service unreachable. Response content type is application/json.
552 | [ApiResponseFor552](#stream_system_live_data.ApiResponseFor552) | Unable to connect. Response content type is application/json.

#### stream_system_live_data.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataResponse**](../../models/StreamSystemLiveDataResponse.md) |  | 


#### stream_system_live_data.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor403
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor403ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor403ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor461
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor461ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor461ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor462
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor462ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor462ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor463
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor463ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor463ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor466
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor466ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor466ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor468
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor468ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor468ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor472
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor472ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor472ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor550
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor550ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor550ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor551
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor551ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor551ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


#### stream_system_live_data.ApiResponseFor552
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor552ResponseBodyTextEventStream, ] |  |
headers | Unset | headers were not defined |

# SchemaFor552ResponseBodyTextEventStream
Type | Description  | Notes
------------- | ------------- | -------------
[**StreamSystemLiveDataError**](../../models/StreamSystemLiveDataError.md) |  | 


### Authorization

[OAuth2](../../../README.md#OAuth2), [ApiKey](../../../README.md#ApiKey)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

