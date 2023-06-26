<a id="__pageTop"></a>
# commissioning.apis.tags.tariff_api.TariffApi

All URIs are relative to *https://api.enphaseenergy.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_system_tariff_settings**](#get_system_tariff_settings) | **get** /systems/config/{system_id}/tariff | Get tariff for a system
[**update_system_tariff_settings**](#update_system_tariff_settings) | **put** /systems/config/{system_id}/tariff | Update tariff for a system

# **get_system_tariff_settings**
<a id="get_system_tariff_settings"></a>
> TariffSettings get_system_tariff_settings(system_id)

Get tariff for a system

Get tariff for a system.

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import tariff_api
from commissioning.model.tariff_settings import TariffSettings
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
    api_instance = tariff_api.TariffApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Get tariff for a system
        api_response = api_instance.get_system_tariff_settings(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling TariffApi->get_system_tariff_settings: %s\n" % e)
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
200 | [ApiResponseFor200](#get_system_tariff_settings.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#get_system_tariff_settings.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#get_system_tariff_settings.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#get_system_tariff_settings.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#get_system_tariff_settings.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#get_system_tariff_settings.ApiResponseFor501) | Not Implemented

#### get_system_tariff_settings.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TariffSettings**](../../models/TariffSettings.md) |  | 


#### get_system_tariff_settings.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_tariff_settings.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_tariff_settings.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### get_system_tariff_settings.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### get_system_tariff_settings.ApiResponseFor501
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

# **update_system_tariff_settings**
<a id="update_system_tariff_settings"></a>
> UpdateSystemTariffSettingsResponse update_system_tariff_settings(system_id)

Update tariff for a system

### Example

* OAuth Authentication (OAuth2):
* Api Key Authentication (ApiKey):
```python
import commissioning
from commissioning.apis.tags import tariff_api
from commissioning.model.tariff_settings import TariffSettings
from commissioning.model.too_many_requests_error import TooManyRequestsError
from commissioning.model.update_system_tariff_settings_response import UpdateSystemTariffSettingsResponse
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
    api_instance = tariff_api.TariffApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'system_id': 1,
    }
    try:
        # Update tariff for a system
        api_response = api_instance.update_system_tariff_settings(
            path_params=path_params,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling TariffApi->update_system_tariff_settings: %s\n" % e)

    # example passing only optional values
    path_params = {
        'system_id': 1,
    }
    body = TariffSettings(
        tariff=dict(
            currency_type=dict(
                code="code_example",
            ),
            single_rate=dict(
                rate="rate_example",
                sell="sell_example",
            ),
            seasons=TariffSeasons([
                dict(
                    id="id_example",
                    start="start_example",
                    days=[
                        dict(
                            id="id_example",
                            days="days_example",
                            must_charge_start=1,
                            must_charge_duration=1,
                            periods=[
                                dict(
                                    id="id_example",
                                    start="start_example",
                                    rate="rate_example",
                                    error=dict(),
                                )
                            ],
                        )
                    ],
                    enable_charge_from_grid=True,
                    enable_discharge_to_grid=True,
                )
            ]),
,
        ),
        task=dict(
            status="status_example",
            created_at="created_at_example",
        ),
    )
    try:
        # Update tariff for a system
        api_response = api_instance.update_system_tariff_settings(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except commissioning.ApiException as e:
        print("Exception when calling TariffApi->update_system_tariff_settings: %s\n" % e)
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
[**TariffSettings**](../../models/TariffSettings.md) |  | 


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
200 | [ApiResponseFor200](#update_system_tariff_settings.ApiResponseFor200) | OK
401 | [ApiResponseFor401](#update_system_tariff_settings.ApiResponseFor401) | Unauthorized
404 | [ApiResponseFor404](#update_system_tariff_settings.ApiResponseFor404) | Not Found
405 | [ApiResponseFor405](#update_system_tariff_settings.ApiResponseFor405) | Method Not Allowed
429 | [ApiResponseFor429](#update_system_tariff_settings.ApiResponseFor429) | Too Many Requests
501 | [ApiResponseFor501](#update_system_tariff_settings.ApiResponseFor501) | Not Implemented

#### update_system_tariff_settings.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**UpdateSystemTariffSettingsResponse**](../../models/UpdateSystemTariffSettingsResponse.md) |  | 


#### update_system_tariff_settings.ApiResponseFor401
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor401ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor401ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_tariff_settings.ApiResponseFor404
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor404ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor404ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_tariff_settings.ApiResponseFor405
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor405ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor405ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ServerError**](../../models/ServerError.md) |  | 


#### update_system_tariff_settings.ApiResponseFor429
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor429ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor429ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TooManyRequestsError**](../../models/TooManyRequestsError.md) |  | 


#### update_system_tariff_settings.ApiResponseFor501
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

