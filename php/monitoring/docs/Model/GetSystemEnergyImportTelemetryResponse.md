# # GetSystemEnergyImportTelemetryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | Unique numeric ID of the system. | [optional]
**granularity** | **string** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional]
**total_devices** | **int** | Number of consumption meters in the site. | [optional]
**start_at** | **int** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional]
**end_at** | **int** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response. | [optional]
**items** | **string** | List key &#39;intervals&#39;. | [optional]
**intervals** | **\EnphaseOpenAPI\Monitoring\Model\GetSystemEnergyImportTelemetryResponseIntervalsInnerInner[][]** | An array of telemetry objects. | [optional]
**meta** | [**\EnphaseOpenAPI\Monitoring\Model\Meta**](Meta.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)