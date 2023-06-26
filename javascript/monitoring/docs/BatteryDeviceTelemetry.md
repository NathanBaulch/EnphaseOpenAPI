# TheEnphaseMonitoringApi.BatteryDeviceTelemetry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **Number** | System ID. | [optional] 
**serialNumber** | **String** | Device serial number. | [optional] 
**granularity** | [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) |  | [optional] 
**totalDevices** | **Number** | Shall always be 1 since this is telemetry from individual micros. | [optional] 
**startAt** | **Number** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response. | [optional] 
**endAt** | **Number** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response. | [optional] 
**items** | **String** | List key &#39;intervals&#39;. | [optional] 
**intervals** | [**[BatteryDeviceTelemetryIntervalsInner]**](BatteryDeviceTelemetryIntervalsInner.md) |  | [optional] 
**lastReportedTime** | **Number** | Last reported timestamp. | [optional] 
**lastReportedSoc** | **String** | Last reported soc percentage. | [optional] 


