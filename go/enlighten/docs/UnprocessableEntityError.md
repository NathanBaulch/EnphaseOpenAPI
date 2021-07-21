# UnprocessableEntityError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**ErrorMessages** | Pointer to **[]string** |  | [optional] 
**Start** | Pointer to **string** |  | [optional] 
**End** | Pointer to **string** |  | [optional] 

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


