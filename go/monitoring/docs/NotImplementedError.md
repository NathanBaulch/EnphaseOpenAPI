# NotImplementedError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | Error type. | [optional] 
**Details** | Pointer to **string** | Error details. | [optional] 
**Code** | Pointer to **int32** | Error code. | [optional] 

## Methods

### NewNotImplementedError

`func NewNotImplementedError() *NotImplementedError`

NewNotImplementedError instantiates a new NotImplementedError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNotImplementedErrorWithDefaults

`func NewNotImplementedErrorWithDefaults() *NotImplementedError`

NewNotImplementedErrorWithDefaults instantiates a new NotImplementedError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *NotImplementedError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *NotImplementedError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *NotImplementedError) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *NotImplementedError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetDetails

`func (o *NotImplementedError) GetDetails() string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *NotImplementedError) GetDetailsOk() (*string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *NotImplementedError) SetDetails(v string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *NotImplementedError) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetCode

`func (o *NotImplementedError) GetCode() int32`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *NotImplementedError) GetCodeOk() (*int32, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *NotImplementedError) SetCode(v int32)`

SetCode sets Code field to given value.

### HasCode

`func (o *NotImplementedError) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


