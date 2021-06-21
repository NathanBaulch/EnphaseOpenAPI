# EnphaseOpenAPI.Enlighten.Model.MonthlyProductionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | Enlighten ID for this system. | 
**StartDate** | **DateTime** | First day included in the reporting period. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**EndDate** | **DateTime** | Last day included in the reporting period. | 
**ProductionWh** | **int** | Total production for the requested period in Watt-hours. | 
**MeterReadings** | [**List&lt;MonthlyProductionResponseMeterReadings&gt;**](MonthlyProductionResponseMeterReadings.md) | If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty. | 
**Meta** | [**Meta**](Meta.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

