# EnphaseOpenAPI.Enlighten.Model.ConsumptionLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartDate** | **DateTime** | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | 
**SystemId** | **int** | The identifier of the system. | 
**Consumption** | **List&lt;int&gt;** | An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period. | 
**Meta** | [**Meta**](Meta.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

