# LoadControlSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** |  | [optional] 
**LoadControlData** | Pointer to [**[]LoadControlSettingsLoadControlDataInner**](LoadControlSettingsLoadControlDataInner.md) | Load control data for all the configured loads. | [optional] 

## Methods

### NewLoadControlSettings

`func NewLoadControlSettings() *LoadControlSettings`

NewLoadControlSettings instantiates a new LoadControlSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadControlSettingsWithDefaults

`func NewLoadControlSettingsWithDefaults() *LoadControlSettings`

NewLoadControlSettingsWithDefaults instantiates a new LoadControlSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *LoadControlSettings) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *LoadControlSettings) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *LoadControlSettings) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *LoadControlSettings) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetLoadControlData

`func (o *LoadControlSettings) GetLoadControlData() []LoadControlSettingsLoadControlDataInner`

GetLoadControlData returns the LoadControlData field if non-nil, zero value otherwise.

### GetLoadControlDataOk

`func (o *LoadControlSettings) GetLoadControlDataOk() (*[]LoadControlSettingsLoadControlDataInner, bool)`

GetLoadControlDataOk returns a tuple with the LoadControlData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoadControlData

`func (o *LoadControlSettings) SetLoadControlData(v []LoadControlSettingsLoadControlDataInner)`

SetLoadControlData sets LoadControlData field to given value.

### HasLoadControlData

`func (o *LoadControlSettings) HasLoadControlData() bool`

HasLoadControlData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


