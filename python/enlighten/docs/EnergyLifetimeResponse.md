# EnergyLifetimeResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **date** | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | 
**system_id** | **int** | The identifier of the system. | 
**production** | **[int]** | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | 
**meta** | [**Meta**](Meta.md) |  | 
**micro_production** | **[int]** |  | [optional] 
**meter_production** | **[int]** |  | [optional] 
**meter_start_date** | **date** | The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


