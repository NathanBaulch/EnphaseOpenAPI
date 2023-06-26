# EnphaseOpenAPI.Monitoring.Model.GetSystemBatteryTelemetryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | Unique numeric ID of the system. | [optional] 
**Granularity** | **TelemetryGranularityEnum** |  | [optional] 
**TotalDevices** | **int** | Number of batteries in the site. | [optional] 
**StartAt** | **long** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] 
**EndAt** | **long** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response. | [optional] 
**Items** | **string** | List key &#39;intervals&#39;. | [optional] 
**Intervals** | [**List&lt;GetSystemBatteryTelemetryResponseIntervalsInner&gt;**](GetSystemBatteryTelemetryResponseIntervalsInner.md) |  | [optional] 
**LastReportedAggregateSoc** | **string** | Last reported aggregate soc percentage. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

