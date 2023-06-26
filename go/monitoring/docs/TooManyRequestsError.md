# TooManyRequestsError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | Error type. | [optional] 
**Details** | Pointer to **string** | Error details. | [optional] 
**Code** | Pointer to **int32** | Error code. | [optional] 
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

### GetMessage

`func (o *TooManyRequestsError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TooManyRequestsError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TooManyRequestsError) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TooManyRequestsError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetDetails

`func (o *TooManyRequestsError) GetDetails() string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *TooManyRequestsError) GetDetailsOk() (*string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *TooManyRequestsError) SetDetails(v string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *TooManyRequestsError) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetCode

`func (o *TooManyRequestsError) GetCode() int32`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TooManyRequestsError) GetCodeOk() (*int32, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TooManyRequestsError) SetCode(v int32)`

SetCode sets Code field to given value.

### HasCode

`func (o *TooManyRequestsError) HasCode() bool`

HasCode returns a boolean if a field has been set.

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


