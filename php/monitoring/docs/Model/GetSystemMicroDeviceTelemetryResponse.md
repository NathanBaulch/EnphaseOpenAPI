# # GetSystemMicroDeviceTelemetryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | Unique numeric ID of the system. | [optional]
**serial_number** | **string** | Device serial number. | [optional]
**granularity** | [**\OpenAPI\Client\Model\TelemetryGranularityEnum**](TelemetryGranularityEnum.md) |  | [optional]
**total_devices** | **int** | Shall always be 1 since this is telemetry from individual micros. | [optional]
**start_at** | **int** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response. | [optional]
**end_at** | **int** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response. | [optional]
**items** | **string** | List key &#39;intervals&#39;. | [optional]
**intervals** | [**\OpenAPI\Client\Model\GetSystemMicroDeviceTelemetryResponseIntervalsInner[]**](GetSystemMicroDeviceTelemetryResponseIntervalsInner.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
