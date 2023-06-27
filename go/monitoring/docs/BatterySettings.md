# BatterySettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** |  | [optional] 
**BatteryMode** | Pointer to **string** | Current battery mode of the system. Available values are Savings Mode, Full Backup, and Self - Consumption. | [optional] 
**ReserveSoc** | Pointer to **int32** | Reserve soc for the current mode. | [optional] 
**EnergyIndependence** | Pointer to **string** | Energy independence after peak hours enabled/disabled. Enabled: Battery will discharge to save money during peak hours when electricity rates are high. Once that is done, energy independence is prioritized. This will increase the energy self-sufficiency until the reserve soc is hit. Battery will charge from solar in the morning to get ready for the next period. Disabled: Battery will discharge only during peak hours when electricity rates are high. During other times, battery will be idle or will charge from solar in the morning to get ready for the next period. | [optional] 
**ChargeFromGrid** | Pointer to **string** | Charge battery from grid enabled/disabled. Enabled: Battery may also charge from the grid when in full backup mode or when battery charge is below the reserve capacity in savings or self-consumption mode. | [optional] 
**BatteryShutdownLevel** | Pointer to **int32** | Level at which battery shutdowns to conserve energy. Battery restarts by using the conserved energy when the utility grid restores power or solar panels start producing energy. | [optional] 

## Methods

### NewBatterySettings

`func NewBatterySettings() *BatterySettings`

NewBatterySettings instantiates a new BatterySettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatterySettingsWithDefaults

`func NewBatterySettingsWithDefaults() *BatterySettings`

NewBatterySettingsWithDefaults instantiates a new BatterySettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *BatterySettings) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *BatterySettings) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *BatterySettings) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *BatterySettings) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetBatteryMode

`func (o *BatterySettings) GetBatteryMode() string`

GetBatteryMode returns the BatteryMode field if non-nil, zero value otherwise.

### GetBatteryModeOk

`func (o *BatterySettings) GetBatteryModeOk() (*string, bool)`

GetBatteryModeOk returns a tuple with the BatteryMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatteryMode

`func (o *BatterySettings) SetBatteryMode(v string)`

SetBatteryMode sets BatteryMode field to given value.

### HasBatteryMode

`func (o *BatterySettings) HasBatteryMode() bool`

HasBatteryMode returns a boolean if a field has been set.

### GetReserveSoc

`func (o *BatterySettings) GetReserveSoc() int32`

GetReserveSoc returns the ReserveSoc field if non-nil, zero value otherwise.

### GetReserveSocOk

`func (o *BatterySettings) GetReserveSocOk() (*int32, bool)`

GetReserveSocOk returns a tuple with the ReserveSoc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReserveSoc

`func (o *BatterySettings) SetReserveSoc(v int32)`

SetReserveSoc sets ReserveSoc field to given value.

### HasReserveSoc

`func (o *BatterySettings) HasReserveSoc() bool`

HasReserveSoc returns a boolean if a field has been set.

### GetEnergyIndependence

`func (o *BatterySettings) GetEnergyIndependence() string`

GetEnergyIndependence returns the EnergyIndependence field if non-nil, zero value otherwise.

### GetEnergyIndependenceOk

`func (o *BatterySettings) GetEnergyIndependenceOk() (*string, bool)`

GetEnergyIndependenceOk returns a tuple with the EnergyIndependence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergyIndependence

`func (o *BatterySettings) SetEnergyIndependence(v string)`

SetEnergyIndependence sets EnergyIndependence field to given value.

### HasEnergyIndependence

`func (o *BatterySettings) HasEnergyIndependence() bool`

HasEnergyIndependence returns a boolean if a field has been set.

### GetChargeFromGrid

`func (o *BatterySettings) GetChargeFromGrid() string`

GetChargeFromGrid returns the ChargeFromGrid field if non-nil, zero value otherwise.

### GetChargeFromGridOk

`func (o *BatterySettings) GetChargeFromGridOk() (*string, bool)`

GetChargeFromGridOk returns a tuple with the ChargeFromGrid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargeFromGrid

`func (o *BatterySettings) SetChargeFromGrid(v string)`

SetChargeFromGrid sets ChargeFromGrid field to given value.

### HasChargeFromGrid

`func (o *BatterySettings) HasChargeFromGrid() bool`

HasChargeFromGrid returns a boolean if a field has been set.

### GetBatteryShutdownLevel

`func (o *BatterySettings) GetBatteryShutdownLevel() int32`

GetBatteryShutdownLevel returns the BatteryShutdownLevel field if non-nil, zero value otherwise.

### GetBatteryShutdownLevelOk

`func (o *BatterySettings) GetBatteryShutdownLevelOk() (*int32, bool)`

GetBatteryShutdownLevelOk returns a tuple with the BatteryShutdownLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatteryShutdownLevel

`func (o *BatterySettings) SetBatteryShutdownLevel(v int32)`

SetBatteryShutdownLevel sets BatteryShutdownLevel field to given value.

### HasBatteryShutdownLevel

`func (o *BatterySettings) HasBatteryShutdownLevel() bool`

HasBatteryShutdownLevel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


