# SystemEstimate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | System this estimate is for. | [optional] 
**DegradeFactor** | Pointer to **string** | Annual production degradation factor for the system, from year 0 of the system&#39;s life. Must be 0.0% or higher. Default 0.5%. | [optional] 
**MonthEstimates** | Pointer to **[]string** | Estimated monthly production of the system, in kWh. A value for each month must be provided, and must be greater than 0. Send an empty array if you need to remove monthly estimates. Default empty array. | [optional] 

## Methods

### NewSystemEstimate

`func NewSystemEstimate() *SystemEstimate`

NewSystemEstimate instantiates a new SystemEstimate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemEstimateWithDefaults

`func NewSystemEstimateWithDefaults() *SystemEstimate`

NewSystemEstimateWithDefaults instantiates a new SystemEstimate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *SystemEstimate) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *SystemEstimate) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *SystemEstimate) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *SystemEstimate) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetDegradeFactor

`func (o *SystemEstimate) GetDegradeFactor() string`

GetDegradeFactor returns the DegradeFactor field if non-nil, zero value otherwise.

### GetDegradeFactorOk

`func (o *SystemEstimate) GetDegradeFactorOk() (*string, bool)`

GetDegradeFactorOk returns a tuple with the DegradeFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDegradeFactor

`func (o *SystemEstimate) SetDegradeFactor(v string)`

SetDegradeFactor sets DegradeFactor field to given value.

### HasDegradeFactor

`func (o *SystemEstimate) HasDegradeFactor() bool`

HasDegradeFactor returns a boolean if a field has been set.

### GetMonthEstimates

`func (o *SystemEstimate) GetMonthEstimates() []string`

GetMonthEstimates returns the MonthEstimates field if non-nil, zero value otherwise.

### GetMonthEstimatesOk

`func (o *SystemEstimate) GetMonthEstimatesOk() (*[]string, bool)`

GetMonthEstimatesOk returns a tuple with the MonthEstimates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthEstimates

`func (o *SystemEstimate) SetMonthEstimates(v []string)`

SetMonthEstimates sets MonthEstimates field to given value.

### HasMonthEstimates

`func (o *SystemEstimate) HasMonthEstimates() bool`

HasMonthEstimates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


