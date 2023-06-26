# TheEnphaseMonitoringApi.GetSystemEnergyExportTelemetryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **Number** | Unique numeric ID of the system. | [optional] 
**granularity** | **String** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] 
**totalDevices** | **Number** | Number of production meters in the site. | [optional] 
**startAt** | **Number** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] 
**endAt** | **Number** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response. | [optional] 
**items** | **String** | List key &#39;intervals&#39;. | [optional] 
**intervals** | **[[GetSystemEnergyExportTelemetryResponseIntervalsInnerInner]]** | An array of telemetry objects. | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 


