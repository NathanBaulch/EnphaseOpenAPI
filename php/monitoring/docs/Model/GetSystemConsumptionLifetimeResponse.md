# # GetSystemConsumptionLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | Unique numeric ID of the system. | [optional]
**start_date** | **\DateTime** | When no start_date parameter is specified on the request, defaults to the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, the same is included in the response. | [optional]
**consumption** | **int[]** | An array of consumption measurements in Wh, one for each day since consumption metering began, or one for each day of the requested period. | [optional]
**meta** | [**\EnphaseOpenAPI\Monitoring\Model\Meta**](Meta.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)