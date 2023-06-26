# # GetSystemEnergyLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **int** | System ID. | [optional]
**start_date** | **\DateTime** | When no start_date parameter is specified on the request, this is the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, it is included here in the response. | [optional]
**meter_start_date** | **\DateTime** | First day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. | [optional]
**production** | **int[]** | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional]
**micro_production** | **int[]** |  | [optional]
**meter_production** | **int[]** |  | [optional]
**meta** | [**\EnphaseOpenAPI\Monitoring\Model\Meta**](Meta.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
