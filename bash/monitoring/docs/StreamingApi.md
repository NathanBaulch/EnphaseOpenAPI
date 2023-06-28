# StreamingApi

All URIs are relative to */api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**streamSystemLiveData**](StreamingApi.md#streamSystemLiveData) | **GET** /systems/{system_id}/live_data | Site Level Live Status



## streamSystemLiveData

Site Level Live Status

API users can get real time live status data on demand for a given system.
User can retrieve real time power for PV Production, Grid Import/Export, Consumption, Battery Charge/Discharge, and Generator.
Users can also retrieve Grid Status, Battery Mode, and Battery State of Charge.
User will receive the stream for a duration of 30 seconds by default and can configure the time in seconds by passing 'duration' as a header parameter with a minimum value of 30 and maximum value of 300.

### Example

```bash
 streamSystemLiveData system_id=value duration:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **integer** | Unique numeric ID of the system. | [default to null]
 **duration** | **integer** | Duration of the stream in seconds. Default=30, Min=30, Max=300, e.g=30. | [optional] [default to null]

### Return type

[**StreamSystemLiveDataResponse**](StreamSystemLiveDataResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

