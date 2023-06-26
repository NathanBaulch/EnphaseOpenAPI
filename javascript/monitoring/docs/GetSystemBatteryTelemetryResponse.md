# TheEnphaseMonitoringApi.GetSystemBatteryTelemetryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **Number** | Unique numeric ID of the system. | [optional] 
**granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) |  | [optional] 
**totalDevices** | **Number** | Number of batteries in the site. | [optional] 
**startAt** | **Number** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] 
**endAt** | **Number** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response. | [optional] 
**items** | **String** | List key &#39;intervals&#39;. | [optional] 
**intervals** | [**[GetSystemBatteryTelemetryResponseIntervalsInner]**](GetSystemBatteryTelemetryResponseIntervalsInner.md) |  | [optional] 
**lastReportedAggregateSoc** | **String** | Last reported aggregate soc percentage. | [optional] 


