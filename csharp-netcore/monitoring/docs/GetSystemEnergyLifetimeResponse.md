# EnphaseOpenAPI.Monitoring.Model.GetSystemEnergyLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | System ID. | [optional] 
**StartDate** | **DateTimeOffset** | When no start_date parameter is specified on the request, this is the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, it is included here in the response. | [optional] 
**MeterStartDate** | **DateTimeOffset** | First day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. | [optional] 
**Production** | **List&lt;int&gt;** | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional] 
**MicroProduction** | **List&lt;int&gt;** |  | [optional] 
**MeterProduction** | **List&lt;int&gt;** |  | [optional] 
**Meta** | [**Meta**](Meta.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

