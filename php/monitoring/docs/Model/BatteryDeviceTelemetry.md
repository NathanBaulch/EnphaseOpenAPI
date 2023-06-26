# # BatteryDeviceTelemetry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | System ID. | [optional]
**serial_number** | **string** | Device serial number. | [optional]
**granularity** | [**\EnphaseOpenAPI\Monitoring\Model\TelemetryGranularityEnum**](TelemetryGranularityEnum.md) |  | [optional]
**total_devices** | **int** | Shall always be 1 since this is telemetry from individual micros. | [optional]
**start_at** | **int** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response. | [optional]
**end_at** | **int** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response. | [optional]
**items** | **string** | List key &#39;intervals&#39;. | [optional]
**intervals** | [**\EnphaseOpenAPI\Monitoring\Model\BatteryDeviceTelemetryIntervalsInner[]**](BatteryDeviceTelemetryIntervalsInner.md) |  | [optional]
**last_reported_time** | **int** | Last reported timestamp. | [optional]
**last_reported_soc** | **string** | Last reported soc percentage. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
