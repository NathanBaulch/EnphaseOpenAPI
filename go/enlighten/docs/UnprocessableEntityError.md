# UnprocessableEntityError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**ErrorMessages** | Pointer to **[]string** |  | [optional] 
**Start** | Pointer to **string** |  | [optional] 
**End** | Pointer to **string** |  | [optional] 
**StartAt** | Pointer to **int32** |  | [optional] 
**EndAt** | Pointer to **int32** |  | [optional] 
**FirstInterval** | Pointer to **int32** |  | [optional] 
**LastInterval** | Pointer to **int32** |  | [optional] 

## Methods

### NewUnprocessableEntityError

`func NewUnprocessableEntityError() *UnprocessableEntityError`

NewUnprocessableEntityError instantiates a new UnprocessableEntityError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnprocessableEntityErrorWithDefaults

`func NewUnprocessableEntityErrorWithDefaults() *UnprocessableEntityError`

NewUnprocessableEntityErrorWithDefaults instantiates a new UnprocessableEntityError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReason

`func (o *UnprocessableEntityError) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *UnprocessableEntityError) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *UnprocessableEntityError) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *UnprocessableEntityError) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetMessage

`func (o *UnprocessableEntityError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *UnprocessableEntityError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *UnprocessableEntityError) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *UnprocessableEntityError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetErrorMessages

`func (o *UnprocessableEntityError) GetErrorMessages() []string`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *UnprocessableEntityError) GetErrorMessagesOk() (*[]string, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *UnprocessableEntityError) SetErrorMessages(v []string)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *UnprocessableEntityError) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.

### GetStart

`func (o *UnprocessableEntityError) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *UnprocessableEntityError) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *UnprocessableEntityError) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *UnprocessableEntityError) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *UnprocessableEntityError) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *UnprocessableEntityError) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *UnprocessableEntityError) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *UnprocessableEntityError) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetStartAt

`func (o *UnprocessableEntityError) GetStartAt() int32`

GetStartAt returns the StartAt field if non-nil, zero value otherwise.

### GetStartAtOk

`func (o *UnprocessableEntityError) GetStartAtOk() (*int32, bool)`

GetStartAtOk returns a tuple with the StartAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartAt

`func (o *UnprocessableEntityError) SetStartAt(v int32)`

SetStartAt sets StartAt field to given value.

### HasStartAt

`func (o *UnprocessableEntityError) HasStartAt() bool`

HasStartAt returns a boolean if a field has been set.

### GetEndAt

`func (o *UnprocessableEntityError) GetEndAt() int32`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *UnprocessableEntityError) GetEndAtOk() (*int32, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *UnprocessableEntityError) SetEndAt(v int32)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *UnprocessableEntityError) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetFirstInterval

`func (o *UnprocessableEntityError) GetFirstInterval() int32`

GetFirstInterval returns the FirstInterval field if non-nil, zero value otherwise.

### GetFirstIntervalOk

`func (o *UnprocessableEntityError) GetFirstIntervalOk() (*int32, bool)`

GetFirstIntervalOk returns a tuple with the FirstInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstInterval

`func (o *UnprocessableEntityError) SetFirstInterval(v int32)`

SetFirstInterval sets FirstInterval field to given value.

### HasFirstInterval

`func (o *UnprocessableEntityError) HasFirstInterval() bool`

HasFirstInterval returns a boolean if a field has been set.

### GetLastInterval

`func (o *UnprocessableEntityError) GetLastInterval() int32`

GetLastInterval returns the LastInterval field if non-nil, zero value otherwise.

### GetLastIntervalOk

`func (o *UnprocessableEntityError) GetLastIntervalOk() (*int32, bool)`

GetLastIntervalOk returns a tuple with the LastInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastInterval

`func (o *UnprocessableEntityError) SetLastInterval(v int32)`

SetLastInterval sets LastInterval field to given value.

### HasLastInterval

`func (o *UnprocessableEntityError) HasLastInterval() bool`

HasLastInterval returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


