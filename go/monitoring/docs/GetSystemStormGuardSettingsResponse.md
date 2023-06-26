# GetSystemStormGuardSettingsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** |  | [optional] 
**StormGuardStatus** | Pointer to **string** | Overrides your battery profile to full backup mode when a severe weather condition alert is issued in the locality. | [optional] 
**StormAlert** | Pointer to **bool** | True if severe weather condition alert is issued in the locality. | [optional] 

## Methods

### NewGetSystemStormGuardSettingsResponse

`func NewGetSystemStormGuardSettingsResponse() *GetSystemStormGuardSettingsResponse`

NewGetSystemStormGuardSettingsResponse instantiates a new GetSystemStormGuardSettingsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemStormGuardSettingsResponseWithDefaults

`func NewGetSystemStormGuardSettingsResponseWithDefaults() *GetSystemStormGuardSettingsResponse`

NewGetSystemStormGuardSettingsResponseWithDefaults instantiates a new GetSystemStormGuardSettingsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemStormGuardSettingsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemStormGuardSettingsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemStormGuardSettingsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemStormGuardSettingsResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetStormGuardStatus

`func (o *GetSystemStormGuardSettingsResponse) GetStormGuardStatus() string`

GetStormGuardStatus returns the StormGuardStatus field if non-nil, zero value otherwise.

### GetStormGuardStatusOk

`func (o *GetSystemStormGuardSettingsResponse) GetStormGuardStatusOk() (*string, bool)`

GetStormGuardStatusOk returns a tuple with the StormGuardStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStormGuardStatus

`func (o *GetSystemStormGuardSettingsResponse) SetStormGuardStatus(v string)`

SetStormGuardStatus sets StormGuardStatus field to given value.

### HasStormGuardStatus

`func (o *GetSystemStormGuardSettingsResponse) HasStormGuardStatus() bool`

HasStormGuardStatus returns a boolean if a field has been set.

### GetStormAlert

`func (o *GetSystemStormGuardSettingsResponse) GetStormAlert() bool`

GetStormAlert returns the StormAlert field if non-nil, zero value otherwise.

### GetStormAlertOk

`func (o *GetSystemStormGuardSettingsResponse) GetStormAlertOk() (*bool, bool)`

GetStormAlertOk returns a tuple with the StormAlert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStormAlert

`func (o *GetSystemStormGuardSettingsResponse) SetStormAlert(v bool)`

SetStormAlert sets StormAlert field to given value.

### HasStormAlert

`func (o *GetSystemStormGuardSettingsResponse) HasStormAlert() bool`

HasStormAlert returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


