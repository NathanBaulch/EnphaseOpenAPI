<a id="__pageTop"></a>
# commissioning.apis.tags.estimate_api.EstimateApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_activation_estimate**](#get_activation_estimate) | **get** /activations/{activation_id}/estimate | Returns the estimate for this system.
[**update_activation_estimate**](#update_activation_estimate) | **put** /activations/{activation_id}/estimate | Update the estimate for this system.

# **get_activation_estimate**
<a id="get_activation_estimate"></a>
> SystemEstimate get_activation_estimate(activation_id)

Returns the estimate for this system.

Provides access to production estimates for a system. An estimate includes the annual degradation factor for the system as well as estimated production, in kWh, for each month. By default degrade_factor value is 0.5 and month_estimates value is an empty array.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import estimate_api
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.system_estimate import SystemEstimate
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
    api_instance = estimate_api.EstimateApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'activation_id': 1,
    }
    try:
        # Returns the estimate for this system.
        api_response = api_instance.get_activation_estimate(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling EstimateApi->get_activation_estimate: %s\n" % e)
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
activation_id | ActivationIdSchema | | 

# ActivationIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_activation_estimate.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#get_activation_estimate.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#get_activation_estimate.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_activation_estimate.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_activation_estimate.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#get_activation_estimate.ApiResponseFor501) | Not Implemented

#### get_activation_estimate.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemEstimate**](../../models/SystemEstimate.md) |  | 


#### get_activation_estimate.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_activation_estimate.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_activation_estimate.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_activation_estimate.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_activation_estimate.ApiResponseFor501
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

# **update_activation_estimate**
<a id="update_activation_estimate"></a>
> SystemEstimate update_activation_estimate(activation_id)

Update the estimate for this system.

Updates the estimate for this system.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import estimate_api
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.update_activation_estimate_request import UpdateActivationEstimateRequest
from commissioning.model.unprocessable_entity_error import UnprocessableEntityError
from commissioning.model.system_estimate import SystemEstimate
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
    api_instance = estimate_api.EstimateApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'activation_id': 1,
    }
    try:
        # Update the estimate for this system.
        api_response = api_instance.update_activation_estimate(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling EstimateApi->update_activation_estimate: %s\n" % e)

    # example passing only optional values
    path_params = {
        'activation_id': 1,
    }
    body = UpdateActivationEstimateRequest(
        degrade_factor="degrade_factor_example",
        month_estimates=[
            "month_estimates_example"
        ],
    )
    try:
        # Update the estimate for this system.
        api_response = api_instance.update_activation_estimate(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling EstimateApi->update_activation_estimate: %s\n" % e)
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
[**UpdateActivationEstimateRequest**](../../models/UpdateActivationEstimateRequest.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
activation_id | ActivationIdSchema | | 

# ActivationIdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#update_activation_estimate.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#update_activation_estimate.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#update_activation_estimate.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#update_activation_estimate.ApiResponseFor405) | Method Not Allowed
422 | [ApiResponseFor422](#update_activation_estimate.ApiResponseFor422) | Unprocessable entity. The body contains error information in a hash of errorMessages and an optional errorCode.
429 | [ApiResponseFor429](#update_activation_estimate.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#update_activation_estimate.ApiResponseFor501) | Not Implemented

#### update_activation_estimate.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**SystemEstimate**](../../models/SystemEstimate.md) |  | 


#### update_activation_estimate.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_activation_estimate.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_activation_estimate.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_activation_estimate.ApiResponseFor422
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor422ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor422ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UnprocessableEntityError**](../../models/UnprocessableEntityError.md) |  | 


#### update_activation_estimate.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### update_activation_estimate.ApiResponseFor501
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

