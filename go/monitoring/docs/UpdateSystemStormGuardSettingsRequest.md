# UpdateSystemStormGuardSettingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StormGuardStatus** | **string** | Overrides your battery profile to full backup mode when a severe weather condition alert is issued in the locality. Available values are enabled, disabled. | 

## Methods

### NewUpdateSystemStormGuardSettingsRequest

`func NewUpdateSystemStormGuardSettingsRequest(stormGuardStatus string, ) *UpdateSystemStormGuardSettingsRequest`

NewUpdateSystemStormGuardSettingsRequest instantiates a new UpdateSystemStormGuardSettingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateSystemStormGuardSettingsRequestWithDefaults

`func NewUpdateSystemStormGuardSettingsRequestWithDefaults() *UpdateSystemStormGuardSettingsRequest`

NewUpdateSystemStormGuardSettingsRequestWithDefaults instantiates a new UpdateSystemStormGuardSettingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStormGuardStatus

`func (o *UpdateSystemStormGuardSettingsRequest) GetStormGuardStatus() string`

GetStormGuardStatus returns the StormGuardStatus field if non-nil, zero value otherwise.

### GetStormGuardStatusOk

`func (o *UpdateSystemStormGuardSettingsRequest) GetStormGuardStatusOk() (*string, bool)`

GetStormGuardStatusOk returns a tuple with the StormGuardStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStormGuardStatus

`func (o *UpdateSystemStormGuardSettingsRequest) SetStormGuardStatus(v string)`

SetStormGuardStatus sets StormGuardStatus field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


