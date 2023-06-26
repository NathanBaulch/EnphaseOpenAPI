# # GetSystemRgmStatsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | System ID. | [optional]
**total_devices** | **int** | Number of active revenue-grade meters for this system. | [optional]
**meta** | [**\EnphaseOpenAPI\Monitoring\Model\Meta**](Meta.md) |  | [optional]
**intervals** | [**\EnphaseOpenAPI\Monitoring\Model\GetSystemRgmStatsResponseIntervalsInner[]**](GetSystemRgmStatsResponseIntervalsInner.md) | A list of intervals between the requested start and end times. | [optional]
**meter_intervals** | [**\EnphaseOpenAPI\Monitoring\Model\GetSystemRgmStatsResponseMeterIntervalsInner[]**](GetSystemRgmStatsResponseMeterIntervalsInner.md) | A list of intervals of a meter between the requested start and end times. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
