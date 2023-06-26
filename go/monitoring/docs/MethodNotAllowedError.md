# MethodNotAllowedError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **[]string** |  | [optional] 

## Methods

### NewMethodNotAllowedError

`func NewMethodNotAllowedError() *MethodNotAllowedError`

NewMethodNotAllowedError instantiates a new MethodNotAllowedError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMethodNotAllowedErrorWithDefaults

`func NewMethodNotAllowedErrorWithDefaults() *MethodNotAllowedError`

NewMethodNotAllowedErrorWithDefaults instantiates a new MethodNotAllowedError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReason

`func (o *MethodNotAllowedError) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *MethodNotAllowedError) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *MethodNotAllowedError) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *MethodNotAllowedError) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetMessage

`func (o *MethodNotAllowedError) GetMessage() []string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *MethodNotAllowedError) GetMessageOk() (*[]string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *MethodNotAllowedError) SetMessage(v []string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *MethodNotAllowedError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


