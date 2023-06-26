# TariffSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tariff** | Pointer to [**TariffSettingsTariff**](TariffSettingsTariff.md) |  | [optional] 
**Task** | Pointer to [**UpdateSystemTariffSettingsResponseTask**](UpdateSystemTariffSettingsResponseTask.md) |  | [optional] 

## Methods

### NewTariffSettings

`func NewTariffSettings() *TariffSettings`

NewTariffSettings instantiates a new TariffSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTariffSettingsWithDefaults

`func NewTariffSettingsWithDefaults() *TariffSettings`

NewTariffSettingsWithDefaults instantiates a new TariffSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTariff

`func (o *TariffSettings) GetTariff() TariffSettingsTariff`

GetTariff returns the Tariff field if non-nil, zero value otherwise.

### GetTariffOk

`func (o *TariffSettings) GetTariffOk() (*TariffSettingsTariff, bool)`

GetTariffOk returns a tuple with the Tariff field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTariff

`func (o *TariffSettings) SetTariff(v TariffSettingsTariff)`

SetTariff sets Tariff field to given value.

### HasTariff

`func (o *TariffSettings) HasTariff() bool`

HasTariff returns a boolean if a field has been set.

### GetTask

`func (o *TariffSettings) GetTask() UpdateSystemTariffSettingsResponseTask`

GetTask returns the Task field if non-nil, zero value otherwise.

### GetTaskOk

`func (o *TariffSettings) GetTaskOk() (*UpdateSystemTariffSettingsResponseTask, bool)`

GetTaskOk returns a tuple with the Task field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTask

`func (o *TariffSettings) SetTask(v UpdateSystemTariffSettingsResponseTask)`

SetTask sets Task field to given value.

### HasTask

`func (o *TariffSettings) HasTask() bool`

HasTask returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


