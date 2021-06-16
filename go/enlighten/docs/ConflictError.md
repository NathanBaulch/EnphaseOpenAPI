# ConflictError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | **string** |  | 
**Message** | **[]string** |  | 
**Period** | **string** |  | 
**PeriodStart** | **int32** |  | 
**PeriodEnd** | **int32** |  | 
**Limit** | **int32** |  | 

## Methods

### NewConflictError

`func NewConflictError(reason string, message []string, period string, periodStart int32, periodEnd int32, limit int32, ) *ConflictError`

NewConflictError instantiates a new ConflictError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConflictErrorWithDefaults

`func NewConflictErrorWithDefaults() *ConflictError`

NewConflictErrorWithDefaults instantiates a new ConflictError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReason

`func (o *ConflictError) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ConflictError) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ConflictError) SetReason(v string)`

SetReason sets Reason field to given value.


### GetMessage

`func (o *ConflictError) GetMessage() []string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ConflictError) GetMessageOk() (*[]string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ConflictError) SetMessage(v []string)`

SetMessage sets Message field to given value.


### GetPeriod

`func (o *ConflictError) GetPeriod() string`

GetPeriod returns the Period field if non-nil, zero value otherwise.

### GetPeriodOk

`func (o *ConflictError) GetPeriodOk() (*string, bool)`

GetPeriodOk returns a tuple with the Period field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriod

`func (o *ConflictError) SetPeriod(v string)`

SetPeriod sets Period field to given value.


### GetPeriodStart

`func (o *ConflictError) GetPeriodStart() int32`

GetPeriodStart returns the PeriodStart field if non-nil, zero value otherwise.

### GetPeriodStartOk

`func (o *ConflictError) GetPeriodStartOk() (*int32, bool)`

GetPeriodStartOk returns a tuple with the PeriodStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodStart

`func (o *ConflictError) SetPeriodStart(v int32)`

SetPeriodStart sets PeriodStart field to given value.


### GetPeriodEnd

`func (o *ConflictError) GetPeriodEnd() int32`

GetPeriodEnd returns the PeriodEnd field if non-nil, zero value otherwise.

### GetPeriodEndOk

`func (o *ConflictError) GetPeriodEndOk() (*int32, bool)`

GetPeriodEndOk returns a tuple with the PeriodEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodEnd

`func (o *ConflictError) SetPeriodEnd(v int32)`

SetPeriodEnd sets PeriodEnd field to given value.


### GetLimit

`func (o *ConflictError) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ConflictError) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ConflictError) SetLimit(v int32)`

SetLimit sets Limit field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


