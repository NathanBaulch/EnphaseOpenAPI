# StreamSystemLiveData466ResponseError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **int32** | 466 | [optional] 
**Details** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Message** | Pointer to **string** | Envoy must be active and envoy version must be at least 6.0.0. | [optional] 
**Status** | Pointer to **string** | UNSUPPORTED_ENVOY | [optional] 

## Methods

### NewStreamSystemLiveData466ResponseError

`func NewStreamSystemLiveData466ResponseError() *StreamSystemLiveData466ResponseError`

NewStreamSystemLiveData466ResponseError instantiates a new StreamSystemLiveData466ResponseError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamSystemLiveData466ResponseErrorWithDefaults

`func NewStreamSystemLiveData466ResponseErrorWithDefaults() *StreamSystemLiveData466ResponseError`

NewStreamSystemLiveData466ResponseErrorWithDefaults instantiates a new StreamSystemLiveData466ResponseError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *StreamSystemLiveData466ResponseError) GetCode() int32`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *StreamSystemLiveData466ResponseError) GetCodeOk() (*int32, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *StreamSystemLiveData466ResponseError) SetCode(v int32)`

SetCode sets Code field to given value.

### HasCode

`func (o *StreamSystemLiveData466ResponseError) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDetails

`func (o *StreamSystemLiveData466ResponseError) GetDetails() []map[string]interface{}`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *StreamSystemLiveData466ResponseError) GetDetailsOk() (*[]map[string]interface{}, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *StreamSystemLiveData466ResponseError) SetDetails(v []map[string]interface{})`

SetDetails sets Details field to given value.

### HasDetails

`func (o *StreamSystemLiveData466ResponseError) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetMessage

`func (o *StreamSystemLiveData466ResponseError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *StreamSystemLiveData466ResponseError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *StreamSystemLiveData466ResponseError) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *StreamSystemLiveData466ResponseError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetStatus

`func (o *StreamSystemLiveData466ResponseError) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StreamSystemLiveData466ResponseError) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StreamSystemLiveData466ResponseError) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *StreamSystemLiveData466ResponseError) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


