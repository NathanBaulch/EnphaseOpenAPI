# # GetSystemRgmStatsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | System ID. | [optional]
**total_devices** | **int** | Number of active revenue-grade meters for this system. | [optional]
**meta** | [**\OpenAPI\Client\Model\Meta**](Meta.md) |  | [optional]
**intervals** | [**\OpenAPI\Client\Model\GetSystemRgmStatsResponseIntervalsInner[]**](GetSystemRgmStatsResponseIntervalsInner.md) | A list of intervals between the requested start and end times. | [optional]
**meter_intervals** | [**\OpenAPI\Client\Model\GetSystemRgmStatsResponseMeterIntervalsInner[]**](GetSystemRgmStatsResponseMeterIntervalsInner.md) | A list of intervals of a meter between the requested start and end times. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
