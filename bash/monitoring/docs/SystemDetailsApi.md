# SystemDetailsApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvertersSummaryByEnvoyOrSite**](SystemDetailsApi.md#getInvertersSummaryByEnvoyOrSite) | **GET** /systems/inverters_summary_by_envoy_or_site | inverters_summary_by_envoy_or_site
[**getSystem**](SystemDetailsApi.md#getSystem) | **GET** /systems/{system_id} | Retrieves a System by ID
[**getSystemDevices**](SystemDetailsApi.md#getSystemDevices) | **GET** /systems/{system_id}/devices | Retrieves devices for a given system
[**getSystemSummary**](SystemDetailsApi.md#getSystemSummary) | **GET** /systems/{system_id}/summary | Retrieves a system summary
[**getSystems**](SystemDetailsApi.md#getSystems) | **GET** /systems | Fetch systems
[**retrieveSystemId**](SystemDetailsApi.md#retrieveSystemId) | **GET** /systems/retrieve_system_id | Retrieve system for a given envoy serial number
[**searchSystems**](SystemDetailsApi.md#searchSystems) | **POST** /systems/search | Search and filter systems



## getInvertersSummaryByEnvoyOrSite

inverters_summary_by_envoy_or_site

Returns the microinverters summary based on the specified active envoy serial number or system.

### Example

```bash
 getInvertersSummaryByEnvoyOrSite  site_id=value  envoy_serial_number=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **integer** | Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site. | [optional] [default to null]
 **envoySerialNumber** | **string** | Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response. | [optional] [default to null]

### Return type

[**array[GetInvertersSummaryByEnvoyOrSiteResponseInner]**](GetInvertersSummaryByEnvoyOrSiteResponseInner.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystem

Retrieves a System by ID

Retrieves a system by ID.

### Example

```bash
 getSystem system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]

### Return type

[**SystemDetails**](SystemDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemDevices

Retrieves devices for a given system

Retrieves devices for a given system. Only devices that are active will be returned in the response.

### Example

```bash
 getSystemDevices system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]

### Return type

[**GetSystemDevicesResponse**](GetSystemDevicesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystemSummary

Retrieves a system summary

Returns system summary based on the specified system ID.

### Example

```bash
 getSystemSummary system_id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]

### Return type

[**GetSystemSummaryResponse**](GetSystemSummaryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getSystems

Fetch systems

Returns a list of systems for which the user can make API requests. By default, systems are returned in batches of 10. The maximum size is 100.

### Example

```bash
 getSystems  page=value  size=value  sort_by=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **integer** | Page to be returned. Default=1, Min=1. For example, if page is set to 2, 2nd page is returned. | [optional] [default to null]
 **size** | **integer** | Maximum number of records shown per page. Default=10, Min=1, Max=100.  For example, if set to 5, 5 records are shown per page. | [optional] [default to null]
 **sortBy** | [**SystemSortByEnum**](.md) | Returns list of systems sorted by <sort_by> field. To get ASC order sorted list, user sort_by = <key>. To get DESC order sorted list, use sort_by = (-)<key>. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID. | [optional] [default to null]

### Return type

[**GetSystemsResponse**](GetSystemsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## retrieveSystemId

Retrieve system for a given envoy serial number

Get system ID by passing envoy serial number. If the serial number of a retired envoy is passed in the request param, a 404 Not Found response will be returned.

### Example

```bash
 retrieveSystemId  serial_num=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNum** | **string** | Envoy serial number. | [default to null]

### Return type

[**RetrieveSystemIdResponse**](RetrieveSystemIdResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## searchSystems

Search and filter systems

Search and filter systems. Provide only valid values in request parameters. Empty and invalid values will be ignored. Invalid keys will be rejected.

### Example

```bash
 searchSystems  page=value  size=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **integer** | Page to be returned. Default=1, Min=1, e.g=2. | [optional] [default to null]
 **size** | **integer** | Maximum number of records shown per page. Default=10, Min=1, Max=1000, e.g=5. | [optional] [default to null]
 **params** | [**SearchSystemsRequest**](SearchSystemsRequest.md) |  | [optional]

### Return type

[**SearchSystemsResponse**](SearchSystemsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

