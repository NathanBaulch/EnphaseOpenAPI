# ServerError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorCode** | **int32** |  | 
**ErrorMessages** | **[]string** |  | 

## Methods

### NewServerError

`func NewServerError(errorCode int32, errorMessages []string, ) *ServerError`

NewServerError instantiates a new ServerError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServerErrorWithDefaults

`func NewServerErrorWithDefaults() *ServerError`

NewServerErrorWithDefaults instantiates a new ServerError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorCode

`func (o *ServerError) GetErrorCode() int32`

GetErrorCode returns the ErrorCode field if non-nil, zero value otherwise.

### GetErrorCodeOk

`func (o *ServerError) GetErrorCodeOk() (*int32, bool)`

GetErrorCodeOk returns a tuple with the ErrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCode

`func (o *ServerError) SetErrorCode(v int32)`

SetErrorCode sets ErrorCode field to given value.


### GetErrorMessages

`func (o *ServerError) GetErrorMessages() []string`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *ServerError) GetErrorMessagesOk() (*[]string, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *ServerError) SetErrorMessages(v []string)`

SetErrorMessages sets ErrorMessages field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


