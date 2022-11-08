# enlighten.DefaultApi

All URIs are relative to *https://api.enphaseenergy.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumption_lifetime**](DefaultApi.md#consumption_lifetime) | **GET** /systems/{system_id}/consumption_lifetime | 
[**consumption_stats**](DefaultApi.md#consumption_stats) | **GET** /systems/{system_id}/consumption_stats | 
[**energy_lifetime**](DefaultApi.md#energy_lifetime) | **GET** /systems/{system_id}/energy_lifetime | 
[**envoys**](DefaultApi.md#envoys) | **GET** /systems/{system_id}/envoys | 
[**inventory**](DefaultApi.md#inventory) | **GET** /systems/{system_id}/inventory | 
[**inverters_summary_by_envoy_or_site**](DefaultApi.md#inverters_summary_by_envoy_or_site) | **GET** /systems/inverters_summary_by_envoy_or_site | 
[**monthly_production**](DefaultApi.md#monthly_production) | **GET** /systems/{system_id}/monthly_production | 
[**production_meter_readings**](DefaultApi.md#production_meter_readings) | **GET** /systems/{system_id}/production_meter_readings | 
[**rgm_stats**](DefaultApi.md#rgm_stats) | **GET** /systems/{system_id}/rgm_stats | 
[**search_system_id**](DefaultApi.md#search_system_id) | **GET** /systems/search_system_id | 
[**stats**](DefaultApi.md#stats) | **GET** /systems/{system_id}/stats | 
[**summary**](DefaultApi.md#summary) | **GET** /systems/{system_id}/summary | 
[**systems**](DefaultApi.md#systems) | **GET** /systems | 


# **consumption_lifetime**
> ConsumptionLifetimeResponse consumption_lifetime(user_id, system_id)



Returns a time series of energy consumption as measured by the consumption meter installed on the specified system. All measurements are in Watt-hours. If the system does not have a meter, returns `204` - No Content. If you don't have permission to view consumption data, the response code is `401`.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as [909, 4970, 0, 0, 0], then no data has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or metering problems.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 
    start_date = dateutil_parser('Fri Jul 01 10:00:00 AEST 2016').date() # date | The date on which to start the time series. Defaults to the system's operational date. (optional)
    end_date = dateutil_parser('Sun Jul 31 10:00:00 AEST 2016').date() # date | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.consumption_lifetime(user_id, system_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->consumption_lifetime: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.consumption_lifetime(user_id, system_id, start_date=start_date, end_date=end_date)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->consumption_lifetime: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |
 **start_date** | **date**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional]
 **end_date** | **date**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional]

### Return type

[**ConsumptionLifetimeResponse**](ConsumptionLifetimeResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumption_stats**
> ConsumptionStatsResponse consumption_stats(user_id, system_id)



Returns consumption as measured by the consumption meter installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any consumption meters installed, the response includes an empty intervals array.  If you don't have permission to view consumption data, the response code is `401`.  Under some conditions, data for a given period may be temporarily unavailable.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 
    start_at = 1448946000 # int | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`. (optional)
    end_at = 1449011615 # int | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.consumption_stats(user_id, system_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->consumption_stats: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.consumption_stats(user_id, system_id, start_at=start_at, end_at=end_at)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->consumption_stats: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |
 **start_at** | **int**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional]
 **end_at** | **int**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional]

### Return type

[**ConsumptionStatsResponse**](ConsumptionStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **energy_lifetime**
> EnergyLifetimeResponse energy_lifetime(user_id, system_id)



Returns a time series of energy produced on the system over its lifetime. All measurements are in Watt-hours.  The time series includes one entry for each day from the `start_date` to the `end_date`. There are no gaps in the time series. If the response includes trailing zeroes, such as `[909, 4970, 0, 0, 0]`, then no energy has been reported for the last days in the series. You can check the system's status in the `meta` attribute of the response to determine when the system last reported and whether it has communication or production problems.  If the system has a meter, the time series includes data as measured by the microinverters until the first full day after the meter has been installed, when it switches to using the data as measured by the meter. This is called the \"merged time series\". In addition, the response includes the attribute `meter_start_date`, to indicate where in the time series the meter measurements begin to be used. You can retrieve the complete time series from the meter and from the microinverters by adding the parameter `production=all` to the request.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 
    start_date = dateutil_parser('Tue Jan 01 11:00:00 AEDT 2013').date() # date | The date on which to start the time series. Defaults to the system's operational date. (optional)
    end_date = dateutil_parser('Sun Jan 06 11:00:00 AEDT 2013').date() # date | The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. (optional)
    production = "all" # str | When `all`, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. (optional) if omitted the server will use the default value of "all"

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.energy_lifetime(user_id, system_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->energy_lifetime: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.energy_lifetime(user_id, system_id, start_date=start_date, end_date=end_date, production=production)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->energy_lifetime: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |
 **start_date** | **date**| The date on which to start the time series. Defaults to the system&#39;s operational date. | [optional]
 **end_date** | **date**| The last date to include in the time series. Defaults to yesterday or the last day the system reported, whichever is earlier. | [optional]
 **production** | **str**| When &#x60;all&#x60;, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored. | [optional] if omitted the server will use the default value of "all"

### Return type

[**EnergyLifetimeResponse**](EnergyLifetimeResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **envoys**
> EnvoysResponse envoys(user_id, system_id)



Returns a listing of all active Envoys currently deployed on the system.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.envoys(user_id, system_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->envoys: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |

### Return type

[**EnvoysResponse**](EnvoysResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory**
> InventoryResponse inventory(user_id, system_id)



Returns a listing of active devices on the given system. A device is considered active if it has not been retired in Enlighten. \"Active\" does not imply that the device is currently reporting, producing, or measuring energy.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.inventory(user_id, system_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->inventory: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |

### Return type

[**InventoryResponse**](InventoryResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inverters_summary_by_envoy_or_site**
> [InvertersSummaryByEnvoyOrSiteResponse] inverters_summary_by_envoy_or_site(user_id, site_id)



Returns the summary along with the energy produced on the system over its lifetime.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    site_id = 66 # int | The identifier of the system.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.inverters_summary_by_envoy_or_site(user_id, site_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->inverters_summary_by_envoy_or_site: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **site_id** | **int**| The identifier of the system. |

### Return type

[**[InvertersSummaryByEnvoyOrSiteResponse]**](InvertersSummaryByEnvoyOrSiteResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **monthly_production**
> MonthlyProductionResponse monthly_production(user_id, system_id, start_date)



This endpoint is deprecated and will be removed in a future release. Use `production_meter_readings` or `energy_lifetime` instead.  Returns the energy production of the system for the month starting on the given date. The start date must be at least one month ago. If a meter or meters are installed on the system, measurements come from the meter; otherwise, measurements come from the microinverters.  This endpoint can return a response of Data Temporarily Unavailable.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 
    start_date = dateutil_parser('Fri Jul 01 10:00:00 AEST 2011').date() # date | Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a `start_date` of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end date is the last day of that month.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.monthly_production(user_id, system_id, start_date)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->monthly_production: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |
 **start_date** | **date**| Start date for reporting period. The reporting period ends on the previous day of the next month; for example, a &#x60;start_date&#x60; of 2011-07-20 returns data through 2011-06-19. When the start date is the first of a calendar month, the end date is the last day of that month. |

### Return type

[**MonthlyProductionResponse**](MonthlyProductionResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **production_meter_readings**
> ProductionMeterReadingsResponse production_meter_readings(user_id, system_id)



Returns the last known \"odometer\" reading of each revenue-grade production meter on the system as of the requested time.  This endpoint includes entries for every production meter on the requested system, regardless of whether the meter is currently in service or retired. `read_at` is the time at which the reading was taken, and is always less than or equal to the requested `end_at`. Commonly, the reading will be within 30 minutes of the requested `end_at`; however, larger deltas can occur and do not necessarily mean there is a problem with the meter or the system it is on. Systems that are configured to report infrequently can show large deltas on all meters, especially when `end_at` is close to the current time. Meters that have been retired from a system will show an `end_at` that doesn't change, and that eventually is far away from the current time.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 
    end_at = 1473901755 # int |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.production_meter_readings(user_id, system_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->production_meter_readings: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.production_meter_readings(user_id, system_id, end_at=end_at)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->production_meter_readings: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |
 **end_at** | **int**|  | [optional]

### Return type

[**ProductionMeterReadingsResponse**](ProductionMeterReadingsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rgm_stats**
> RgmStatsResponse rgm_stats(user_id, system_id)



Returns performance statistics as measured by the revenue-grade meters installed on the specified system. If the total duration requested is more than one month, returns one month of intervals. Intervals are 15 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 15-minute marks are rounded down. For example, a request for 08:01, 08:08, 08:11, or 08:14 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 15 minutes after the requested start date.  If the system doesn't have any revenue-grade meters installed, the response includes an empty intervals array.  Under some conditions, data for a given period may be temporarily unavailable.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 
    start_at = 1381474800 # int | Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the first interval of the `operational_date`. (optional)
    end_at = 1381561200 # int | End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.rgm_stats(user_id, system_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->rgm_stats: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.rgm_stats(user_id, system_id, start_at=start_at, end_at=end_at)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->rgm_stats: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |
 **start_at** | **int**| Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the first interval of the &#x60;operational_date&#x60;. | [optional]
 **end_at** | **int**| End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval. | [optional]

### Return type

[**RgmStatsResponse**](RgmStatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_system_id**
> SearchSystemIdResponse search_system_id(user_id, serial_num)



Get system ID by envoy serial number.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    serial_num = "23435345345" # str | Serial number of the envoy.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.search_system_id(user_id, serial_num)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->search_system_id: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **serial_num** | **str**| Serial number of the envoy. |

### Return type

[**SearchSystemIdResponse**](SearchSystemIdResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stats**
> StatsResponse stats(user_id, system_id)



Returns performance statistics for the specified system as reported by microinverters installed on the system. If the total duration requested is more than one day, returns one day of intervals. Intervals are 5 minutes in length and start at the top of the hour.  Requests for times that do not fall on the 5-minute marks are rounded down. For example, a request for 08:01, 08:02, 08:03, or 08:04 is treated as a request for 08:00. Intervals are listed by their end dates; therefore, the first interval returned is 5 minutes after the requested start date.  The response includes intervals that have been reported for the requested period. Gaps in reporting are not filled with 0-value intervals. The dark hours on a system are an example of such a gap, because the microinverters do not produce at night.  Sometimes a request cannot be processed because the requested dates are invalid for the system in question. Examples include asking for stats starting at a time that is later than the system's last reported interval, or asking for stats before a system has started production. In cases such as these, the response code is `422` and the response body includes an error reason as well as the parameters used to process the request.  If the system doesn't have any microinverters installed, the response includes an empty intervals array. Under some conditions, data for a given period may be temporarily unavailable.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 
    start_at = 1381496100 # int | Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system's `operational_date`, the response data begins with the `operational_date`. (optional)
    end_at = 1381497600 # int | End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.stats(user_id, system_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->stats: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.stats(user_id, system_id, start_at=start_at, end_at=end_at)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->stats: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |
 **start_at** | **int**| Start of reporting period in Unix epoch time. If no start is specified, defaults to midnight today, in the timezone of the system. If the start date is earlier than one year ago today, the response includes an empty intervals list. If the start is earlier than the system&#39;s &#x60;operational_date&#x60;, the response data begins with the &#x60;operational_date&#x60;. | [optional]
 **end_at** | **int**| End of reporting period in Unix epoch time. If no end is specified, the assumed end is now. If the end is later than the last reporting interval the response data ends with the last reported interval. | [optional]

### Return type

[**StatsResponse**](StatsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **summary**
> SummaryResponse summary(user_id, system_id)



Returns summary information for the specified system.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    system_id = 66 # int | 
    summary_date = dateutil_parser('Fri Sep 17 10:00:00 AEST 2010').date() # date | Start of reporting period. If no `summary_date` is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and `422` status. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.summary(user_id, system_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->summary: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.summary(user_id, system_id, summary_date=summary_date)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->summary: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **system_id** | **int**|  |
 **summary_date** | **date**| Start of reporting period. If no &#x60;summary_date&#x60; is provided, the start is the current day at midnight site-local time. Otherwise, the start is midnight site-local time of the requested day. If the requested date cannot be parsed or is in the future, the response includes an informative error message and &#x60;422&#x60; status. | [optional]

### Return type

[**SummaryResponse**](SummaryResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **systems**
> SystemsResponse systems(user_id)



Returns a list of systems for which the user can make API requests. There is a limit to the number of systems that can be returned at one time. If the first request does not return a full list, use the `next` attribute in the response body to request the next page of systems. By default, systems are returned in batches of 100. The maximum page size is 1000.

### Example

* Api Key Authentication (ApiKey):

```python
import time
import enlighten
from enlighten.api import default_api
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
    user_id = "4d6a51330a" # str | 
    next = "4d5467784d5445770a" # str |  (optional)
    limit = 100 # int |  (optional) if omitted the server will use the default value of 100
    system_id = 67 # int |  (optional)
    system_id2 = [67] # [int] |  (optional)
    system_name = "Green" # str |  (optional)
    system_name2 = ["Green"] # [str] |  (optional)
    status = Status("power") # Status |  (optional)
    status2 = [
        Status("["comm","micro"]"),
    ] # [Status] |  (optional)
    reference = "reference_example" # str |  (optional)
    reference2 = [
        "reference[]_example",
    ] # [str] |  (optional)
    installer = "installer_example" # str |  (optional)
    installer2 = [
        "installer[]_example",
    ] # [str] |  (optional)
    connection_type = ConnectionType("ethernet") # ConnectionType |  (optional)
    connection_type2 = [
        ConnectionType("["ethernet"]"),
    ] # [ConnectionType] |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.systems(user_id)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->systems: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.systems(user_id, next=next, limit=limit, system_id=system_id, system_id2=system_id2, system_name=system_name, system_name2=system_name2, status=status, status2=status2, reference=reference, reference2=reference2, installer=installer, installer2=installer2, connection_type=connection_type, connection_type2=connection_type2)
        pprint(api_response)
    except enlighten.ApiException as e:
        print("Exception when calling DefaultApi->systems: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  |
 **next** | **str**|  | [optional]
 **limit** | **int**|  | [optional] if omitted the server will use the default value of 100
 **system_id** | **int**|  | [optional]
 **system_id2** | **[int]**|  | [optional]
 **system_name** | **str**|  | [optional]
 **system_name2** | **[str]**|  | [optional]
 **status** | **Status**|  | [optional]
 **status2** | [**[Status]**](Status.md)|  | [optional]
 **reference** | **str**|  | [optional]
 **reference2** | **[str]**|  | [optional]
 **installer** | **str**|  | [optional]
 **installer2** | **[str]**|  | [optional]
 **connection_type** | **ConnectionType**|  | [optional]
 **connection_type2** | [**[ConnectionType]**](ConnectionType.md)|  | [optional]

### Return type

[**SystemsResponse**](SystemsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Client error |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Server error |  -  |
**503** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

