# SetActivationMeterStatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSetActivationMeterStatusResponse

`func NewSetActivationMeterStatusResponse() *SetActivationMeterStatusResponse`

NewSetActivationMeterStatusResponse instantiates a new SetActivationMeterStatusResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetActivationMeterStatusResponseWithDefaults

`func NewSetActivationMeterStatusResponseWithDefaults() *SetActivationMeterStatusResponse`

NewSetActivationMeterStatusResponseWithDefaults instantiates a new SetActivationMeterStatusResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReason

`func (o *SetActivationMeterStatusResponse) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *SetActivationMeterStatusResponse) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *SetActivationMeterStatusResponse) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *SetActivationMeterStatusResponse) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetMessage

`func (o *SetActivationMeterStatusResponse) GetMessage() []string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SetActivationMeterStatusResponse) GetMessageOk() (*[]string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SetActivationMeterStatusResponse) SetMessage(v []string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SetActivationMeterStatusResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


