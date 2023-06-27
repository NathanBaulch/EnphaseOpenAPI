<a id="__pageTop"></a>
# commissioning.apis.tags.arrays_api.ArraysApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_system_array**](#delete_system_array) | **delete** /partner/systems/{system_id}/arrays/{array_id} | Delete an array by ID
[**get_system_array**](#get_system_array) | **get** /partner/systems/{system_id}/arrays/{array_id} | Fetch array details by ID
[**get_system_arrays**](#get_system_arrays) | **get** /partner/systems/{system_id}/arrays | Fetch particular system Array details
[**update_system_array**](#update_system_array) | **put** /partner/systems/{system_id}/arrays/{array_id} | Update particular system array details
[**update_system_arrays**](#update_system_arrays) | **put** /partner/systems/{system_id}/arrays | Update all arrays for system

# **delete_system_array**
<a id="delete_system_array"></a>
> DeleteSystemArrayResponse delete_system_array(system_idarray_id)

Delete an array by ID

Delete an array by ID.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import arrays_api
from commissioning.model.delete_system_array_response import DeleteSystemArrayResponse
from commissioning.model.too_many_requests_error import TooManyRequestsError
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
    api_instance = arrays_api.ArraysApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
        'array_id': 1,
    }
    try:
        # Delete an array by ID
        api_response = api_instance.delete_system_array(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling ArraysApi->delete_system_array: %s\n" % e)
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
array_id | ArrayIdSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# ArrayIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#delete_system_array.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#delete_system_array.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#delete_system_array.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#delete_system_array.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#delete_system_array.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#delete_system_array.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#delete_system_array.ApiResponseFor501) | Not Implemented

#### delete_system_array.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**DeleteSystemArrayResponse**](../../models/DeleteSystemArrayResponse.md) |  | 


#### delete_system_array.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### delete_system_array.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### delete_system_array.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### delete_system_array.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### delete_system_array.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### delete_system_array.ApiResponseFor501
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

# **get_system_array**
<a id="get_system_array"></a>
> SystemArray get_system_array(system_idarray_id)

Fetch array details by ID

Fetch array details by ID.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import arrays_api
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.unprocessable_entity_error import UnprocessableEntityError
from commissioning.model.system_array import SystemArray
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
    api_instance = arrays_api.ArraysApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
        'array_id': 1,
    }
    try:
        # Fetch array details by ID
        api_response = api_instance.get_system_array(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling ArraysApi->get_system_array: %s\n" % e)
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
array_id | ArrayIdSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# ArrayIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_system_array.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#get_system_array.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#get_system_array.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_array.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#get_system_array.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#get_system_array.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#get_system_array.ApiResponseFor501) | Not Implemented

#### get_system_array.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemArray**](../../models/SystemArray.md) |  | 


#### get_system_array.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_array.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_array.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_array.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### get_system_array.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_array.ApiResponseFor501
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

# **get_system_arrays**
<a id="get_system_arrays"></a>
> SystemArrays get_system_arrays(system_id)

Fetch particular system Array details

Fetch particular system Array details.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import arrays_api
from commissioning.model.system_arrays import SystemArrays
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
    api_instance = arrays_api.ArraysApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Fetch particular system Array details
        api_response = api_instance.get_system_arrays(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling ArraysApi->get_system_arrays: %s\n" % e)
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
200 | [ApiResponseFor200](#get_system_arrays.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#get_system_arrays.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#get_system_arrays.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_arrays.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_system_arrays.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#get_system_arrays.ApiResponseFor501) | Not Implemented

#### get_system_arrays.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemArrays**](../../models/SystemArrays.md) |  | 


#### get_system_arrays.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_arrays.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_arrays.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_arrays.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_arrays.ApiResponseFor501
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

# **update_system_array**
<a id="update_system_array"></a>
> SystemArray update_system_array(system_idarray_id)

Update particular system array details

Update particular system array details. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall in arrays, the top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import arrays_api
from commissioning.model.array_params import ArrayParams
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.unprocessable_entity_error import UnprocessableEntityError
from commissioning.model.system_array import SystemArray
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
    api_instance = arrays_api.ArraysApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
        'array_id': 1,
    }
    try:
        # Update particular system array details
        api_response = api_instance.update_system_array(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling ArraysApi->update_system_array: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
        'array_id': 1,
    }
    body = ArrayParams(
        id=1,
        label="label_example",
        angle=1,
        tilt="tilt_example",
        provisioned_envoy="provisioned_envoy_example",
        left=1,
        top=1,
        modules=[
            dict(
                id=1,
                left=1,
                top=1,
                angle=1,
                serial_num="serial_num_example",
            )
        ],
    )
    try:
        # Update particular system array details
        api_response = api_instance.update_system_array(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling ArraysApi->update_system_array: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationText, Unset] | optional, default is unset |
path_params | RequestPathParams | |
content_type | str | optional, default is 'application/text' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationText
Type | Description  | Notes
------------- | ------------- | -------------
[**ArrayParams**](../../models/ArrayParams.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
system_id | SystemIdSchema | | 
array_id | ArrayIdSchema | | 

# SystemIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

# ArrayIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#update_system_array.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#update_system_array.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#update_system_array.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#update_system_array.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#update_system_array.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#update_system_array.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#update_system_array.ApiResponseFor501) | Not Implemented

#### update_system_array.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemArray**](../../models/SystemArray.md) |  | 


#### update_system_array.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_array.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_array.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_array.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### update_system_array.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### update_system_array.ApiResponseFor501
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

# **update_system_arrays**
<a id="update_system_arrays"></a>
> SystemArrays update_system_arrays(system_id)

Update all arrays for system

Update all arrays for system. The angle, left, and top fields in the request parameter must be of integer type. Enlighten will rearrange the top and left values of the modules to fit the modules properly and avoid overlap. Therefore, the top and left values in the response may be slightly different from the top and left values passed in the request parameters. In array level, top and left is the total size of the modules inside that array. Overall the arrays top and left values should not overlap. In the module level, the size of a panel is 100 units long in the x axis and 200 units long in the y axis. Please pass the left and top values in the request parameter in multiples of 100 and 200 respectively.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import arrays_api
from commissioning.model.update_system_arrays_request import UpdateSystemArraysRequest
from commissioning.model.system_arrays import SystemArrays
from commissioning.model.too_many_requests_error import TooManyRequestsError
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
    api_instance = arrays_api.ArraysApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Update all arrays for system
        api_response = api_instance.update_system_arrays(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling ArraysApi->update_system_arrays: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    body = UpdateSystemArraysRequest(
        angle=1,
        arrays=[
            ArrayParams(
                id=1,
                label="label_example",
                angle=1,
                tilt="tilt_example",
                provisioned_envoy="provisioned_envoy_example",
                left=1,
                top=1,
                modules=[
                    dict(
                        id=1,
                        left=1,
                        top=1,
                        angle=1,
                        serial_num="serial_num_example",
                    )
                ],
            )
        ],
    )
    try:
        # Update all arrays for system
        api_response = api_instance.update_system_arrays(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling ArraysApi->update_system_arrays: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationText, Unset] | optional, default is unset |
path_params | RequestPathParams | |
content_type | str | optional, default is 'application/text' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationText
Type | Description  | Notes
------------- | ------------- | -------------
[**UpdateSystemArraysRequest**](../../models/UpdateSystemArraysRequest.md) |  | 


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
200 | [ApiResponseFor200](#update_system_arrays.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#update_system_arrays.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#update_system_arrays.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#update_system_arrays.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#update_system_arrays.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#update_system_arrays.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#update_system_arrays.ApiResponseFor501) | Not Implemented

#### update_system_arrays.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemArrays**](../../models/SystemArrays.md) |  | 


#### update_system_arrays.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_arrays.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_arrays.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_arrays.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### update_system_arrays.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### update_system_arrays.ApiResponseFor501
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

