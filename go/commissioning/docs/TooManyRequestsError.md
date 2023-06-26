# TooManyRequestsError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | Pointer to **string** | Response code. | [optional] 
**Message** | Pointer to **[]string** |  | [optional] 
**Period** | Pointer to **string** | Quota exceeded for minute/month. | [optional] 
**PeriodStart** | Pointer to **int32** | Starting period timestamp. | [optional] 
**PeriodEnd** | Pointer to **int32** | Ending period timestamp. | [optional] 
**Limit** | Pointer to **int32** | Limit count for the period. | [optional] 

## Methods

### NewTooManyRequestsError

`func NewTooManyRequestsError() *TooManyRequestsError`

NewTooManyRequestsError instantiates a new TooManyRequestsError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTooManyRequestsErrorWithDefaults

`func NewTooManyRequestsErrorWithDefaults() *TooManyRequestsError`

NewTooManyRequestsErrorWithDefaults instantiates a new TooManyRequestsError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReason

`func (o *TooManyRequestsError) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *TooManyRequestsError) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *TooManyRequestsError) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *TooManyRequestsError) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetMessage

`func (o *TooManyRequestsError) GetMessage() []string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TooManyRequestsError) GetMessageOk() (*[]string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TooManyRequestsError) SetMessage(v []string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TooManyRequestsError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetPeriod

`func (o *TooManyRequestsError) GetPeriod() string`

GetPeriod returns the Period field if non-nil, zero value otherwise.

### GetPeriodOk

`func (o *TooManyRequestsError) GetPeriodOk() (*string, bool)`

GetPeriodOk returns a tuple with the Period field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriod

`func (o *TooManyRequestsError) SetPeriod(v string)`

SetPeriod sets Period field to given value.

### HasPeriod

`func (o *TooManyRequestsError) HasPeriod() bool`

HasPeriod returns a boolean if a field has been set.

### GetPeriodStart

`func (o *TooManyRequestsError) GetPeriodStart() int32`

GetPeriodStart returns the PeriodStart field if non-nil, zero value otherwise.

### GetPeriodStartOk

`func (o *TooManyRequestsError) GetPeriodStartOk() (*int32, bool)`

GetPeriodStartOk returns a tuple with the PeriodStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodStart

`func (o *TooManyRequestsError) SetPeriodStart(v int32)`

SetPeriodStart sets PeriodStart field to given value.

### HasPeriodStart

`func (o *TooManyRequestsError) HasPeriodStart() bool`

HasPeriodStart returns a boolean if a field has been set.

### GetPeriodEnd

`func (o *TooManyRequestsError) GetPeriodEnd() int32`

GetPeriodEnd returns the PeriodEnd field if non-nil, zero value otherwise.

### GetPeriodEndOk

`func (o *TooManyRequestsError) GetPeriodEndOk() (*int32, bool)`

GetPeriodEndOk returns a tuple with the PeriodEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodEnd

`func (o *TooManyRequestsError) SetPeriodEnd(v int32)`

SetPeriodEnd sets PeriodEnd field to given value.

### HasPeriodEnd

`func (o *TooManyRequestsError) HasPeriodEnd() bool`

HasPeriodEnd returns a boolean if a field has been set.

### GetLimit

`func (o *TooManyRequestsError) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *TooManyRequestsError) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *TooManyRequestsError) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *TooManyRequestsError) HasLimit() bool`

HasLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


