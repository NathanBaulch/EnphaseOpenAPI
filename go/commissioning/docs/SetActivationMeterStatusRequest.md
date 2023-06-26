# SetActivationMeterStatusRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to [**SystemMeterStatusEnum**](SystemMeterStatusEnum.md) |  | [optional] 

## Methods

### NewSetActivationMeterStatusRequest

`func NewSetActivationMeterStatusRequest() *SetActivationMeterStatusRequest`

NewSetActivationMeterStatusRequest instantiates a new SetActivationMeterStatusRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetActivationMeterStatusRequestWithDefaults

`func NewSetActivationMeterStatusRequestWithDefaults() *SetActivationMeterStatusRequest`

NewSetActivationMeterStatusRequestWithDefaults instantiates a new SetActivationMeterStatusRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SetActivationMeterStatusRequest) GetStatus() SystemMeterStatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SetActivationMeterStatusRequest) GetStatusOk() (*SystemMeterStatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SetActivationMeterStatusRequest) SetStatus(v SystemMeterStatusEnum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SetActivationMeterStatusRequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


