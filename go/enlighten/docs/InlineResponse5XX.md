# InlineResponse5XX

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorCode** | **int32** |  | 
**ErrorMessages** | **[]string** |  | 

## Methods

### NewInlineResponse5XX

`func NewInlineResponse5XX(errorCode int32, errorMessages []string, ) *InlineResponse5XX`

NewInlineResponse5XX instantiates a new InlineResponse5XX object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse5XXWithDefaults

`func NewInlineResponse5XXWithDefaults() *InlineResponse5XX`

NewInlineResponse5XXWithDefaults instantiates a new InlineResponse5XX object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorCode

`func (o *InlineResponse5XX) GetErrorCode() int32`

GetErrorCode returns the ErrorCode field if non-nil, zero value otherwise.

### GetErrorCodeOk

`func (o *InlineResponse5XX) GetErrorCodeOk() (*int32, bool)`

GetErrorCodeOk returns a tuple with the ErrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCode

`func (o *InlineResponse5XX) SetErrorCode(v int32)`

SetErrorCode sets ErrorCode field to given value.


### GetErrorMessages

`func (o *InlineResponse5XX) GetErrorMessages() []string`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *InlineResponse5XX) GetErrorMessagesOk() (*[]string, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *InlineResponse5XX) SetErrorMessages(v []string)`

SetErrorMessages sets ErrorMessages field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


