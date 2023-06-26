# EnphaseOpenAPI.Commissioning.Model.SystemEstimate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int** | System this estimate is for. | [optional] 
**DegradeFactor** | **string** | Annual production degradation factor for the system, from year 0 of the system&#39;s life. Must be 0.0% or higher. Default 0.5%. | [optional] 
**MonthEstimates** | **List&lt;string&gt;** | Estimated monthly production of the system, in kWh. A value for each month must be provided, and must be greater than 0. Send an empty array if you need to remove monthly estimates. Default empty array. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

