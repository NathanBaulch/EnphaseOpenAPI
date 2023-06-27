# LoadControlSettingsLoadControlDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the dry contact. | [optional] 
**LoadName** | Pointer to **string** | Name of the load. | [optional] 
**OwnerCanOverride** | Pointer to **string** | HOs ability to override the load control settings. | [optional] 
**Mode** | Pointer to **string** | Current load control configuration. | [optional] 
**SocLow** | Pointer to **int32** | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. | [optional] 
**SocHigh** | Pointer to **int32** | Applicable for advanced mode. Load powers off when battery reaches soc_low. The load will be powered on when the battery soc reaches soc_high. | [optional] 
**Status** | Pointer to **string** | Available values are enabled, disabled. | [optional] 
**EssentialStartTime** | Pointer to **int32** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**EssentialEndTime** | Pointer to **int32** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 

## Methods

### NewLoadControlSettingsLoadControlDataInner

`func NewLoadControlSettingsLoadControlDataInner() *LoadControlSettingsLoadControlDataInner`

NewLoadControlSettingsLoadControlDataInner instantiates a new LoadControlSettingsLoadControlDataInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadControlSettingsLoadControlDataInnerWithDefaults

`func NewLoadControlSettingsLoadControlDataInnerWithDefaults() *LoadControlSettingsLoadControlDataInner`

NewLoadControlSettingsLoadControlDataInnerWithDefaults instantiates a new LoadControlSettingsLoadControlDataInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *LoadControlSettingsLoadControlDataInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LoadControlSettingsLoadControlDataInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LoadControlSettingsLoadControlDataInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LoadControlSettingsLoadControlDataInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetLoadName

`func (o *LoadControlSettingsLoadControlDataInner) GetLoadName() string`

GetLoadName returns the LoadName field if non-nil, zero value otherwise.

### GetLoadNameOk

`func (o *LoadControlSettingsLoadControlDataInner) GetLoadNameOk() (*string, bool)`

GetLoadNameOk returns a tuple with the LoadName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoadName

`func (o *LoadControlSettingsLoadControlDataInner) SetLoadName(v string)`

SetLoadName sets LoadName field to given value.

### HasLoadName

`func (o *LoadControlSettingsLoadControlDataInner) HasLoadName() bool`

HasLoadName returns a boolean if a field has been set.

### GetOwnerCanOverride

`func (o *LoadControlSettingsLoadControlDataInner) GetOwnerCanOverride() string`

GetOwnerCanOverride returns the OwnerCanOverride field if non-nil, zero value otherwise.

### GetOwnerCanOverrideOk

`func (o *LoadControlSettingsLoadControlDataInner) GetOwnerCanOverrideOk() (*string, bool)`

GetOwnerCanOverrideOk returns a tuple with the OwnerCanOverride field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCanOverride

`func (o *LoadControlSettingsLoadControlDataInner) SetOwnerCanOverride(v string)`

SetOwnerCanOverride sets OwnerCanOverride field to given value.

### HasOwnerCanOverride

`func (o *LoadControlSettingsLoadControlDataInner) HasOwnerCanOverride() bool`

HasOwnerCanOverride returns a boolean if a field has been set.

### GetMode

`func (o *LoadControlSettingsLoadControlDataInner) GetMode() string`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *LoadControlSettingsLoadControlDataInner) GetModeOk() (*string, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *LoadControlSettingsLoadControlDataInner) SetMode(v string)`

SetMode sets Mode field to given value.

### HasMode

`func (o *LoadControlSettingsLoadControlDataInner) HasMode() bool`

HasMode returns a boolean if a field has been set.

### GetSocLow

`func (o *LoadControlSettingsLoadControlDataInner) GetSocLow() int32`

GetSocLow returns the SocLow field if non-nil, zero value otherwise.

### GetSocLowOk

`func (o *LoadControlSettingsLoadControlDataInner) GetSocLowOk() (*int32, bool)`

GetSocLowOk returns a tuple with the SocLow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSocLow

`func (o *LoadControlSettingsLoadControlDataInner) SetSocLow(v int32)`

SetSocLow sets SocLow field to given value.

### HasSocLow

`func (o *LoadControlSettingsLoadControlDataInner) HasSocLow() bool`

HasSocLow returns a boolean if a field has been set.

### GetSocHigh

`func (o *LoadControlSettingsLoadControlDataInner) GetSocHigh() int32`

GetSocHigh returns the SocHigh field if non-nil, zero value otherwise.

### GetSocHighOk

`func (o *LoadControlSettingsLoadControlDataInner) GetSocHighOk() (*int32, bool)`

GetSocHighOk returns a tuple with the SocHigh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSocHigh

`func (o *LoadControlSettingsLoadControlDataInner) SetSocHigh(v int32)`

SetSocHigh sets SocHigh field to given value.

### HasSocHigh

`func (o *LoadControlSettingsLoadControlDataInner) HasSocHigh() bool`

HasSocHigh returns a boolean if a field has been set.

### GetStatus

`func (o *LoadControlSettingsLoadControlDataInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *LoadControlSettingsLoadControlDataInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *LoadControlSettingsLoadControlDataInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *LoadControlSettingsLoadControlDataInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetEssentialStartTime

`func (o *LoadControlSettingsLoadControlDataInner) GetEssentialStartTime() int32`

GetEssentialStartTime returns the EssentialStartTime field if non-nil, zero value otherwise.

### GetEssentialStartTimeOk

`func (o *LoadControlSettingsLoadControlDataInner) GetEssentialStartTimeOk() (*int32, bool)`

GetEssentialStartTimeOk returns a tuple with the EssentialStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEssentialStartTime

`func (o *LoadControlSettingsLoadControlDataInner) SetEssentialStartTime(v int32)`

SetEssentialStartTime sets EssentialStartTime field to given value.

### HasEssentialStartTime

`func (o *LoadControlSettingsLoadControlDataInner) HasEssentialStartTime() bool`

HasEssentialStartTime returns a boolean if a field has been set.

### GetEssentialEndTime

`func (o *LoadControlSettingsLoadControlDataInner) GetEssentialEndTime() int32`

GetEssentialEndTime returns the EssentialEndTime field if non-nil, zero value otherwise.

### GetEssentialEndTimeOk

`func (o *LoadControlSettingsLoadControlDataInner) GetEssentialEndTimeOk() (*int32, bool)`

GetEssentialEndTimeOk returns a tuple with the EssentialEndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEssentialEndTime

`func (o *LoadControlSettingsLoadControlDataInner) SetEssentialEndTime(v int32)`

SetEssentialEndTime sets EssentialEndTime field to given value.

### HasEssentialEndTime

`func (o *LoadControlSettingsLoadControlDataInner) HasEssentialEndTime() bool`

HasEssentialEndTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


