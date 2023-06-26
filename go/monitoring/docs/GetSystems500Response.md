# GetSystems500Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **[]string** |  | [optional] 
**ErrorCode** | Pointer to **int32** | Error code. | [optional] 
**ErrorMessages** | Pointer to **[]string** | Error messages. | [optional] 

## Methods

### NewGetSystems500Response

`func NewGetSystems500Response() *GetSystems500Response`

NewGetSystems500Response instantiates a new GetSystems500Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystems500ResponseWithDefaults

`func NewGetSystems500ResponseWithDefaults() *GetSystems500Response`

NewGetSystems500ResponseWithDefaults instantiates a new GetSystems500Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReason

`func (o *GetSystems500Response) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *GetSystems500Response) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *GetSystems500Response) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *GetSystems500Response) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetMessage

`func (o *GetSystems500Response) GetMessage() []string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetSystems500Response) GetMessageOk() (*[]string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetSystems500Response) SetMessage(v []string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetSystems500Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetErrorCode

`func (o *GetSystems500Response) GetErrorCode() int32`

GetErrorCode returns the ErrorCode field if non-nil, zero value otherwise.

### GetErrorCodeOk

`func (o *GetSystems500Response) GetErrorCodeOk() (*int32, bool)`

GetErrorCodeOk returns a tuple with the ErrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCode

`func (o *GetSystems500Response) SetErrorCode(v int32)`

SetErrorCode sets ErrorCode field to given value.

### HasErrorCode

`func (o *GetSystems500Response) HasErrorCode() bool`

HasErrorCode returns a boolean if a field has been set.

### GetErrorMessages

`func (o *GetSystems500Response) GetErrorMessages() []string`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *GetSystems500Response) GetErrorMessagesOk() (*[]string, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *GetSystems500Response) SetErrorMessages(v []string)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *GetSystems500Response) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


