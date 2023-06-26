# EnphaseOpenAPI.Monitoring.Model.BatteryDeviceTelemetry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | System ID. | [optional] 
**SerialNumber** | **string** | Device serial number. | [optional] 
**Granularity** | **TelemetryGranularityEnum** |  | [optional] 
**TotalDevices** | **int** | Shall always be 1 since this is telemetry from individual micros. | [optional] 
**StartAt** | **long** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response. | [optional] 
**EndAt** | **long** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response. | [optional] 
**Items** | **string** | List key &#39;intervals&#39;. | [optional] 
**Intervals** | [**List&lt;BatteryDeviceTelemetryIntervalsInner&gt;**](BatteryDeviceTelemetryIntervalsInner.md) |  | [optional] 
**LastReportedTime** | **int** | Last reported timestamp. | [optional] 
**LastReportedSoc** | **string** | Last reported soc percentage. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

