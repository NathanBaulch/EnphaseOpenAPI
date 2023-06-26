# GetSystemLoadControlSettingsResponseLoadControlDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the dry contact. | [optional] 
**LoadName** | Pointer to **string** | Name of the load. | [optional] 
**OwnerCanOverride** | Pointer to **string** | HOs ability to override the load control settings. | [optional] 
**Config** | Pointer to **string** | Enabled/disabled. | [optional] 
**SocLow** | Pointer to **int32** | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. | [optional] 
**SocHigh** | Pointer to **int32** | Applicable for advanced mode. Load powers off when battery reaches soc_low. The load will be powered on when the battery soc reaches soc_high. | [optional] 
**EssentialStartTime** | Pointer to **int32** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**EssentialEndTime** | Pointer to **int32** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 

## Methods

### NewGetSystemLoadControlSettingsResponseLoadControlDataInner

`func NewGetSystemLoadControlSettingsResponseLoadControlDataInner() *GetSystemLoadControlSettingsResponseLoadControlDataInner`

NewGetSystemLoadControlSettingsResponseLoadControlDataInner instantiates a new GetSystemLoadControlSettingsResponseLoadControlDataInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemLoadControlSettingsResponseLoadControlDataInnerWithDefaults

`func NewGetSystemLoadControlSettingsResponseLoadControlDataInnerWithDefaults() *GetSystemLoadControlSettingsResponseLoadControlDataInner`

NewGetSystemLoadControlSettingsResponseLoadControlDataInnerWithDefaults instantiates a new GetSystemLoadControlSettingsResponseLoadControlDataInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetLoadName

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetLoadName() string`

GetLoadName returns the LoadName field if non-nil, zero value otherwise.

### GetLoadNameOk

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetLoadNameOk() (*string, bool)`

GetLoadNameOk returns a tuple with the LoadName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoadName

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) SetLoadName(v string)`

SetLoadName sets LoadName field to given value.

### HasLoadName

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) HasLoadName() bool`

HasLoadName returns a boolean if a field has been set.

### GetOwnerCanOverride

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetOwnerCanOverride() string`

GetOwnerCanOverride returns the OwnerCanOverride field if non-nil, zero value otherwise.

### GetOwnerCanOverrideOk

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetOwnerCanOverrideOk() (*string, bool)`

GetOwnerCanOverrideOk returns a tuple with the OwnerCanOverride field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCanOverride

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) SetOwnerCanOverride(v string)`

SetOwnerCanOverride sets OwnerCanOverride field to given value.

### HasOwnerCanOverride

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) HasOwnerCanOverride() bool`

HasOwnerCanOverride returns a boolean if a field has been set.

### GetConfig

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetConfig() string`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetConfigOk() (*string, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) SetConfig(v string)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetSocLow

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetSocLow() int32`

GetSocLow returns the SocLow field if non-nil, zero value otherwise.

### GetSocLowOk

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetSocLowOk() (*int32, bool)`

GetSocLowOk returns a tuple with the SocLow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSocLow

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) SetSocLow(v int32)`

SetSocLow sets SocLow field to given value.

### HasSocLow

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) HasSocLow() bool`

HasSocLow returns a boolean if a field has been set.

### GetSocHigh

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetSocHigh() int32`

GetSocHigh returns the SocHigh field if non-nil, zero value otherwise.

### GetSocHighOk

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetSocHighOk() (*int32, bool)`

GetSocHighOk returns a tuple with the SocHigh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSocHigh

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) SetSocHigh(v int32)`

SetSocHigh sets SocHigh field to given value.

### HasSocHigh

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) HasSocHigh() bool`

HasSocHigh returns a boolean if a field has been set.

### GetEssentialStartTime

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetEssentialStartTime() int32`

GetEssentialStartTime returns the EssentialStartTime field if non-nil, zero value otherwise.

### GetEssentialStartTimeOk

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetEssentialStartTimeOk() (*int32, bool)`

GetEssentialStartTimeOk returns a tuple with the EssentialStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEssentialStartTime

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) SetEssentialStartTime(v int32)`

SetEssentialStartTime sets EssentialStartTime field to given value.

### HasEssentialStartTime

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) HasEssentialStartTime() bool`

HasEssentialStartTime returns a boolean if a field has been set.

### GetEssentialEndTime

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetEssentialEndTime() int32`

GetEssentialEndTime returns the EssentialEndTime field if non-nil, zero value otherwise.

### GetEssentialEndTimeOk

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) GetEssentialEndTimeOk() (*int32, bool)`

GetEssentialEndTimeOk returns a tuple with the EssentialEndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEssentialEndTime

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) SetEssentialEndTime(v int32)`

SetEssentialEndTime sets EssentialEndTime field to given value.

### HasEssentialEndTime

`func (o *GetSystemLoadControlSettingsResponseLoadControlDataInner) HasEssentialEndTime() bool`

HasEssentialEndTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


