<a id="__pageTop"></a>
# commissioning.apis.tags.meters_api.MetersApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_system_meter**](#get_system_meter) | **get** /systems/{system_id}/meters/{serial_number} | Returns the requested meter detail.
[**set_activation_meter_status**](#set_activation_meter_status) | **post** /activations/{activation_id}/meters/{serial_number}/meter_control | Enable or Disable the meters.
[**update_system_meter**](#update_system_meter) | **put** /systems/{system_id}/meters/{serial_number} | Update the operational date of a meter by serial number.

# **get_system_meter**
<a id="get_system_meter"></a>
> GetSystemMeterResponse get_system_meter(system_idserial_number)

Returns the requested meter detail.

Returns the requested meter by serial number. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import meters_api
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.get_system_meter_response import GetSystemMeterResponse
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
    api_instance = meters_api.MetersApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
        'serial_number': "serial_number_example",
    }
    try:
        # Returns the requested meter detail.
        api_response = api_instance.get_system_meter(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling MetersApi->get_system_meter: %s\n" % e)
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
serial_number | SerialNumberSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SerialNumberSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_meter.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#get_system_meter.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#get_system_meter.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_meter.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_system_meter.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#get_system_meter.ApiResponseFor501) | Not Implemented

#### get_system_meter.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**GetSystemMeterResponse**](../../models/GetSystemMeterResponse.md) |  | 


#### get_system_meter.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_meter.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_meter.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_meter.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_meter.ApiResponseFor501
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

# **set_activation_meter_status**
<a id="set_activation_meter_status"></a>
> SetActivationMeterStatusResponse set_activation_meter_status(activation_idserial_number)

Enable or Disable the meters.

Enable or Disable the meters. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import meters_api
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.set_activation_meter_status_response import SetActivationMeterStatusResponse
from commissioning.model.unprocessable_entity_error import UnprocessableEntityError
from commissioning.model.set_activation_meter_status_request import SetActivationMeterStatusRequest
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
    api_instance = meters_api.MetersApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'activation_id': 1,
        'serial_number': "serial_number_example",
    }
    try:
        # Enable or Disable the meters.
        api_response = api_instance.set_activation_meter_status(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling MetersApi->set_activation_meter_status: %s\n" % e)

    # example passing only optional values
    path_params = {
        'activation_id': 1,
        'serial_number': "serial_number_example",
    }
    body = SetActivationMeterStatusRequest(
        status=SystemMeterStatusEnum("enabled"),
    )
    try:
        # Enable or Disable the meters.
        api_response = api_instance.set_activation_meter_status(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling MetersApi->set_activation_meter_status: %s\n" % e)
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
[**SetActivationMeterStatusRequest**](../../models/SetActivationMeterStatusRequest.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
activation_id | ActivationIdSchema | | 
serial_number | SerialNumberSchema | | 

# ActivationIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SerialNumberSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#set_activation_meter_status.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#set_activation_meter_status.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#set_activation_meter_status.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#set_activation_meter_status.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#set_activation_meter_status.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#set_activation_meter_status.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#set_activation_meter_status.ApiResponseFor501) | Not Implemented

#### set_activation_meter_status.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SetActivationMeterStatusResponse**](../../models/SetActivationMeterStatusResponse.md) |  | 


#### set_activation_meter_status.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### set_activation_meter_status.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### set_activation_meter_status.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### set_activation_meter_status.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### set_activation_meter_status.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### set_activation_meter_status.ApiResponseFor501
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

# **update_system_meter**
<a id="update_system_meter"></a>
> UpdateSystemMeterResponse update_system_meter(system_idserial_number)

Update the operational date of a meter by serial number.

Update the operational date of a meter. You must have access to the requested system and meter; otherwise a 401 is returned.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import meters_api
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.unprocessable_entity_error import UnprocessableEntityError
from commissioning.model.update_system_meter_response import UpdateSystemMeterResponse
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
    api_instance = meters_api.MetersApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
        'serial_number': "serial_number_example",
    }
    query_params = {
    }
    try:
        # Update the operational date of a meter by serial number.
        api_response = api_instance.update_system_meter(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling MetersApi->update_system_meter: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
        'serial_number': "serial_number_example",
    }
    query_params = {
        'operational_date': "1970-01-01",
    }
    try:
        # Update the operational date of a meter by serial number.
        api_response = api_instance.update_system_meter(
            path_params=path_params,
            query_params=query_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling MetersApi->update_system_meter: %s\n" % e)
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
operational_date | OperationalDateSchema | | optional


# OperationalDateSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str, date,  | str,  |  | value must conform to RFC-3339 full-date YYYY-MM-DD

### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
system_id | SystemIdSchema | | 
serial_number | SerialNumberSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# SerialNumberSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#update_system_meter.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#update_system_meter.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#update_system_meter.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#update_system_meter.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#update_system_meter.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#update_system_meter.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#update_system_meter.ApiResponseFor501) | Not Implemented

#### update_system_meter.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UpdateSystemMeterResponse**](../../models/UpdateSystemMeterResponse.md) |  | 


#### update_system_meter.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_meter.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_meter.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_meter.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### update_system_meter.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### update_system_meter.ApiResponseFor501
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

