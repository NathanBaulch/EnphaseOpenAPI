# UpdateSystemBatterySettingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatteryMode** | Pointer to **string** | To update battery mode of the system (case sensitive). Available values are Savings Mode, Self-consumption, Full Backup. | [optional] 
**ReserveSoc** | Pointer to **int32** | Reserve soc for the current mode. Cannot be less than vls. | [optional] 
**EnergyIndependence** | Pointer to **string** | Energy independence after peak hours \&quot;enabled\&quot;/\&quot;disabled\&quot;. Enabled: Battery will discharge to save money during peak hours when electricity rates are high. Once that is done, energy independence is prioritized. This will increase the energy self-sufficiency until the reserve soc is hit. Battery will charge from solar in the morning to get ready for the next period. Disabled: Battery will discharge only during peak hours when electricity rates are high. During other times, battery will be idle or will charge from solar in the morning to get ready for the next period. | [optional] 

## Methods

### NewUpdateSystemBatterySettingsRequest

`func NewUpdateSystemBatterySettingsRequest() *UpdateSystemBatterySettingsRequest`

NewUpdateSystemBatterySettingsRequest instantiates a new UpdateSystemBatterySettingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateSystemBatterySettingsRequestWithDefaults

`func NewUpdateSystemBatterySettingsRequestWithDefaults() *UpdateSystemBatterySettingsRequest`

NewUpdateSystemBatterySettingsRequestWithDefaults instantiates a new UpdateSystemBatterySettingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatteryMode

`func (o *UpdateSystemBatterySettingsRequest) GetBatteryMode() string`

GetBatteryMode returns the BatteryMode field if non-nil, zero value otherwise.

### GetBatteryModeOk

`func (o *UpdateSystemBatterySettingsRequest) GetBatteryModeOk() (*string, bool)`

GetBatteryModeOk returns a tuple with the BatteryMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatteryMode

`func (o *UpdateSystemBatterySettingsRequest) SetBatteryMode(v string)`

SetBatteryMode sets BatteryMode field to given value.

### HasBatteryMode

`func (o *UpdateSystemBatterySettingsRequest) HasBatteryMode() bool`

HasBatteryMode returns a boolean if a field has been set.

### GetReserveSoc

`func (o *UpdateSystemBatterySettingsRequest) GetReserveSoc() int32`

GetReserveSoc returns the ReserveSoc field if non-nil, zero value otherwise.

### GetReserveSocOk

`func (o *UpdateSystemBatterySettingsRequest) GetReserveSocOk() (*int32, bool)`

GetReserveSocOk returns a tuple with the ReserveSoc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReserveSoc

`func (o *UpdateSystemBatterySettingsRequest) SetReserveSoc(v int32)`

SetReserveSoc sets ReserveSoc field to given value.

### HasReserveSoc

`func (o *UpdateSystemBatterySettingsRequest) HasReserveSoc() bool`

HasReserveSoc returns a boolean if a field has been set.

### GetEnergyIndependence

`func (o *UpdateSystemBatterySettingsRequest) GetEnergyIndependence() string`

GetEnergyIndependence returns the EnergyIndependence field if non-nil, zero value otherwise.

### GetEnergyIndependenceOk

`func (o *UpdateSystemBatterySettingsRequest) GetEnergyIndependenceOk() (*string, bool)`

GetEnergyIndependenceOk returns a tuple with the EnergyIndependence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergyIndependence

`func (o *UpdateSystemBatterySettingsRequest) SetEnergyIndependence(v string)`

SetEnergyIndependence sets EnergyIndependence field to given value.

### HasEnergyIndependence

`func (o *UpdateSystemBatterySettingsRequest) HasEnergyIndependence() bool`

HasEnergyIndependence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


