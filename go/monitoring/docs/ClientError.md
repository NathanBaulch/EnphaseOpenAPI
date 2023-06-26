# ClientError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | Error type. | [optional] 
**Details** | Pointer to **string** | Error details. | [optional] 
**Code** | Pointer to **int32** | Error code. | [optional] 

## Methods

### NewClientError

`func NewClientError() *ClientError`

NewClientError instantiates a new ClientError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientErrorWithDefaults

`func NewClientErrorWithDefaults() *ClientError`

NewClientErrorWithDefaults instantiates a new ClientError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ClientError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ClientError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ClientError) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ClientError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetDetails

`func (o *ClientError) GetDetails() string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *ClientError) GetDetailsOk() (*string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *ClientError) SetDetails(v string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *ClientError) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetCode

`func (o *ClientError) GetCode() int32`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ClientError) GetCodeOk() (*int32, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ClientError) SetCode(v int32)`

SetCode sets Code field to given value.

### HasCode

`func (o *ClientError) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


