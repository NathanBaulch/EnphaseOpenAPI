# EnphaseOpenAPI.Monitoring.Model.GetSystemEnergyExportLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | Unique numeric ID of the system. | [optional] 
**StartDate** | **DateTimeOffset** | When no start_date parameter is specified on the request, defaults to the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, the same is included in the response. | [optional] 
**Export** | **List&lt;int&gt;** | An array of export measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional] 
**Meta** | [**Meta**](Meta.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

