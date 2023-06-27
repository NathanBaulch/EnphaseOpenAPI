# StreamSystemLiveData550ResponseError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **int32** | 550 | [optional] 
**Details** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Message** | Pointer to **string** | Service unreachable, please try again. | [optional] 
**Status** | Pointer to **string** | SERVICE_UNREACHABLE | [optional] 

## Methods

### NewStreamSystemLiveData550ResponseError

`func NewStreamSystemLiveData550ResponseError() *StreamSystemLiveData550ResponseError`

NewStreamSystemLiveData550ResponseError instantiates a new StreamSystemLiveData550ResponseError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamSystemLiveData550ResponseErrorWithDefaults

`func NewStreamSystemLiveData550ResponseErrorWithDefaults() *StreamSystemLiveData550ResponseError`

NewStreamSystemLiveData550ResponseErrorWithDefaults instantiates a new StreamSystemLiveData550ResponseError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *StreamSystemLiveData550ResponseError) GetCode() int32`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *StreamSystemLiveData550ResponseError) GetCodeOk() (*int32, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *StreamSystemLiveData550ResponseError) SetCode(v int32)`

SetCode sets Code field to given value.

### HasCode

`func (o *StreamSystemLiveData550ResponseError) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDetails

`func (o *StreamSystemLiveData550ResponseError) GetDetails() []map[string]interface{}`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *StreamSystemLiveData550ResponseError) GetDetailsOk() (*[]map[string]interface{}, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *StreamSystemLiveData550ResponseError) SetDetails(v []map[string]interface{})`

SetDetails sets Details field to given value.

### HasDetails

`func (o *StreamSystemLiveData550ResponseError) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetMessage

`func (o *StreamSystemLiveData550ResponseError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *StreamSystemLiveData550ResponseError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *StreamSystemLiveData550ResponseError) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *StreamSystemLiveData550ResponseError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetStatus

`func (o *StreamSystemLiveData550ResponseError) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StreamSystemLiveData550ResponseError) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StreamSystemLiveData550ResponseError) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *StreamSystemLiveData550ResponseError) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


