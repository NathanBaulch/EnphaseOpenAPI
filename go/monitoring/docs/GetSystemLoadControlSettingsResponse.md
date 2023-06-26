# GetSystemLoadControlSettingsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** |  | [optional] 
**LoadControlData** | Pointer to [**[]GetSystemLoadControlSettingsResponseLoadControlDataInner**](GetSystemLoadControlSettingsResponseLoadControlDataInner.md) | Load control data for all the configured loads. | [optional] 

## Methods

### NewGetSystemLoadControlSettingsResponse

`func NewGetSystemLoadControlSettingsResponse() *GetSystemLoadControlSettingsResponse`

NewGetSystemLoadControlSettingsResponse instantiates a new GetSystemLoadControlSettingsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemLoadControlSettingsResponseWithDefaults

`func NewGetSystemLoadControlSettingsResponseWithDefaults() *GetSystemLoadControlSettingsResponse`

NewGetSystemLoadControlSettingsResponseWithDefaults instantiates a new GetSystemLoadControlSettingsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemLoadControlSettingsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemLoadControlSettingsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemLoadControlSettingsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemLoadControlSettingsResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetLoadControlData

`func (o *GetSystemLoadControlSettingsResponse) GetLoadControlData() []GetSystemLoadControlSettingsResponseLoadControlDataInner`

GetLoadControlData returns the LoadControlData field if non-nil, zero value otherwise.

### GetLoadControlDataOk

`func (o *GetSystemLoadControlSettingsResponse) GetLoadControlDataOk() (*[]GetSystemLoadControlSettingsResponseLoadControlDataInner, bool)`

GetLoadControlDataOk returns a tuple with the LoadControlData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoadControlData

`func (o *GetSystemLoadControlSettingsResponse) SetLoadControlData(v []GetSystemLoadControlSettingsResponseLoadControlDataInner)`

SetLoadControlData sets LoadControlData field to given value.

### HasLoadControlData

`func (o *GetSystemLoadControlSettingsResponse) HasLoadControlData() bool`

HasLoadControlData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


