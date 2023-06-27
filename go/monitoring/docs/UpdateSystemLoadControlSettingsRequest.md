# UpdateSystemLoadControlSettingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the dry contact. Name cannot be changed. It is only used to identify the dry contact that needs to be updated. | 
**LoadName** | Pointer to **string** | Load Name of the load. Load Name cannot be changed. It is only used to identify the dry contact that needs to be updated. | [optional] 
**Mode** | Pointer to **string** | Mode. Available values are \&quot;Scheduled\&quot;, \&quot;Basic\&quot;, \&quot;Advanced_BatteryPowered\&quot;, \&quot;Manual_always_not_powered\&quot;, \&quot;Manual_always_powered\&quot;, \&quot;Advanced_GeneratorPowered\&quot;. | [optional] 
**SocLow** | Pointer to **int32** | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. It can be between 10 to 90. | [optional] 
**EssentialStartTime** | Pointer to **int32** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**EssentialEndTime** | Pointer to **int32** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 

## Methods

### NewUpdateSystemLoadControlSettingsRequest

`func NewUpdateSystemLoadControlSettingsRequest(name string, ) *UpdateSystemLoadControlSettingsRequest`

NewUpdateSystemLoadControlSettingsRequest instantiates a new UpdateSystemLoadControlSettingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateSystemLoadControlSettingsRequestWithDefaults

`func NewUpdateSystemLoadControlSettingsRequestWithDefaults() *UpdateSystemLoadControlSettingsRequest`

NewUpdateSystemLoadControlSettingsRequestWithDefaults instantiates a new UpdateSystemLoadControlSettingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UpdateSystemLoadControlSettingsRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateSystemLoadControlSettingsRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateSystemLoadControlSettingsRequest) SetName(v string)`

SetName sets Name field to given value.


### GetLoadName

`func (o *UpdateSystemLoadControlSettingsRequest) GetLoadName() string`

GetLoadName returns the LoadName field if non-nil, zero value otherwise.

### GetLoadNameOk

`func (o *UpdateSystemLoadControlSettingsRequest) GetLoadNameOk() (*string, bool)`

GetLoadNameOk returns a tuple with the LoadName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoadName

`func (o *UpdateSystemLoadControlSettingsRequest) SetLoadName(v string)`

SetLoadName sets LoadName field to given value.

### HasLoadName

`func (o *UpdateSystemLoadControlSettingsRequest) HasLoadName() bool`

HasLoadName returns a boolean if a field has been set.

### GetMode

`func (o *UpdateSystemLoadControlSettingsRequest) GetMode() string`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *UpdateSystemLoadControlSettingsRequest) GetModeOk() (*string, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *UpdateSystemLoadControlSettingsRequest) SetMode(v string)`

SetMode sets Mode field to given value.

### HasMode

`func (o *UpdateSystemLoadControlSettingsRequest) HasMode() bool`

HasMode returns a boolean if a field has been set.

### GetSocLow

`func (o *UpdateSystemLoadControlSettingsRequest) GetSocLow() int32`

GetSocLow returns the SocLow field if non-nil, zero value otherwise.

### GetSocLowOk

`func (o *UpdateSystemLoadControlSettingsRequest) GetSocLowOk() (*int32, bool)`

GetSocLowOk returns a tuple with the SocLow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSocLow

`func (o *UpdateSystemLoadControlSettingsRequest) SetSocLow(v int32)`

SetSocLow sets SocLow field to given value.

### HasSocLow

`func (o *UpdateSystemLoadControlSettingsRequest) HasSocLow() bool`

HasSocLow returns a boolean if a field has been set.

### GetEssentialStartTime

`func (o *UpdateSystemLoadControlSettingsRequest) GetEssentialStartTime() int32`

GetEssentialStartTime returns the EssentialStartTime field if non-nil, zero value otherwise.

### GetEssentialStartTimeOk

`func (o *UpdateSystemLoadControlSettingsRequest) GetEssentialStartTimeOk() (*int32, bool)`

GetEssentialStartTimeOk returns a tuple with the EssentialStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEssentialStartTime

`func (o *UpdateSystemLoadControlSettingsRequest) SetEssentialStartTime(v int32)`

SetEssentialStartTime sets EssentialStartTime field to given value.

### HasEssentialStartTime

`func (o *UpdateSystemLoadControlSettingsRequest) HasEssentialStartTime() bool`

HasEssentialStartTime returns a boolean if a field has been set.

### GetEssentialEndTime

`func (o *UpdateSystemLoadControlSettingsRequest) GetEssentialEndTime() int32`

GetEssentialEndTime returns the EssentialEndTime field if non-nil, zero value otherwise.

### GetEssentialEndTimeOk

`func (o *UpdateSystemLoadControlSettingsRequest) GetEssentialEndTimeOk() (*int32, bool)`

GetEssentialEndTimeOk returns a tuple with the EssentialEndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEssentialEndTime

`func (o *UpdateSystemLoadControlSettingsRequest) SetEssentialEndTime(v int32)`

SetEssentialEndTime sets EssentialEndTime field to given value.

### HasEssentialEndTime

`func (o *UpdateSystemLoadControlSettingsRequest) HasEssentialEndTime() bool`

HasEssentialEndTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


