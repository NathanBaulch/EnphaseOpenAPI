# # EnergyLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **\DateTime** | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. |
**system_id** | **int** | The identifier of the system. |
**production** | **int[]** | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. |
**micro_production** | **int[]** |  | [optional]
**meter_production** | **int[]** |  | [optional]
**meter_start_date** | **\DateTime** | The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. | [optional]
**meta** | [**\OpenAPI\Client\Model\Meta**](Meta.md) |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
