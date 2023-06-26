# UpdateActivationEstimateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DegradeFactor** | **string** | Annual production degradation factor for the system, from year 0 of the system&#39;s life. Must be 0.0% or higher. | 
**MonthEstimates** | **[]string** | Estimated monthly production of the system, in kWh. A value for each month must be provided, and must be greater than 0. Send an empty array if you need to remove monthly estimates. | 

## Methods

### NewUpdateActivationEstimateRequest

`func NewUpdateActivationEstimateRequest(degradeFactor string, monthEstimates []string, ) *UpdateActivationEstimateRequest`

NewUpdateActivationEstimateRequest instantiates a new UpdateActivationEstimateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateActivationEstimateRequestWithDefaults

`func NewUpdateActivationEstimateRequestWithDefaults() *UpdateActivationEstimateRequest`

NewUpdateActivationEstimateRequestWithDefaults instantiates a new UpdateActivationEstimateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDegradeFactor

`func (o *UpdateActivationEstimateRequest) GetDegradeFactor() string`

GetDegradeFactor returns the DegradeFactor field if non-nil, zero value otherwise.

### GetDegradeFactorOk

`func (o *UpdateActivationEstimateRequest) GetDegradeFactorOk() (*string, bool)`

GetDegradeFactorOk returns a tuple with the DegradeFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDegradeFactor

`func (o *UpdateActivationEstimateRequest) SetDegradeFactor(v string)`

SetDegradeFactor sets DegradeFactor field to given value.


### GetMonthEstimates

`func (o *UpdateActivationEstimateRequest) GetMonthEstimates() []string`

GetMonthEstimates returns the MonthEstimates field if non-nil, zero value otherwise.

### GetMonthEstimatesOk

`func (o *UpdateActivationEstimateRequest) GetMonthEstimatesOk() (*[]string, bool)`

GetMonthEstimatesOk returns a tuple with the MonthEstimates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthEstimates

`func (o *UpdateActivationEstimateRequest) SetMonthEstimates(v []string)`

SetMonthEstimates sets MonthEstimates field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


