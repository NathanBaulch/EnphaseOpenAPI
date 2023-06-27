# StreamSystemLiveDataResponseDataData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatteryMode** | Pointer to **string** | Battery mode of the site. Available values are Savings Mode, Full Backup, and Self-consumption. | [optional] 
**BatteryPower** | Pointer to **int32** | Battery power in watts; Power will be positive in case of discharge and negative in case of charge. | [optional] 
**BatterySoc** | Pointer to **int32** | Battery soc in percentage. | [optional] 
**ConsumptionPower** | Pointer to **int32** | Consumption power in watts. | [optional] 
**EnvoySerialNumber** | Pointer to **[]string** |  | [optional] 
**GeneratorPower** | Pointer to **int32** | Generator power in watts. | [optional] 
**GridPower** | Pointer to **int32** | Grid power in watts; Power will be negative in case of export and positive in case of import. | [optional] 
**GridStatus** | Pointer to **string** | Grid state of the site. Available values are On Grid, Off Grid, Unknown. | [optional] 
**PvPower** | Pointer to **int32** | PV power in watts. | [optional] 
**SystemId** | Pointer to **int32** | The unique numeric ID of the system. | [optional] 

## Methods

### NewStreamSystemLiveDataResponseDataData

`func NewStreamSystemLiveDataResponseDataData() *StreamSystemLiveDataResponseDataData`

NewStreamSystemLiveDataResponseDataData instantiates a new StreamSystemLiveDataResponseDataData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamSystemLiveDataResponseDataDataWithDefaults

`func NewStreamSystemLiveDataResponseDataDataWithDefaults() *StreamSystemLiveDataResponseDataData`

NewStreamSystemLiveDataResponseDataDataWithDefaults instantiates a new StreamSystemLiveDataResponseDataData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatteryMode

`func (o *StreamSystemLiveDataResponseDataData) GetBatteryMode() string`

GetBatteryMode returns the BatteryMode field if non-nil, zero value otherwise.

### GetBatteryModeOk

`func (o *StreamSystemLiveDataResponseDataData) GetBatteryModeOk() (*string, bool)`

GetBatteryModeOk returns a tuple with the BatteryMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatteryMode

`func (o *StreamSystemLiveDataResponseDataData) SetBatteryMode(v string)`

SetBatteryMode sets BatteryMode field to given value.

### HasBatteryMode

`func (o *StreamSystemLiveDataResponseDataData) HasBatteryMode() bool`

HasBatteryMode returns a boolean if a field has been set.

### GetBatteryPower

`func (o *StreamSystemLiveDataResponseDataData) GetBatteryPower() int32`

GetBatteryPower returns the BatteryPower field if non-nil, zero value otherwise.

### GetBatteryPowerOk

`func (o *StreamSystemLiveDataResponseDataData) GetBatteryPowerOk() (*int32, bool)`

GetBatteryPowerOk returns a tuple with the BatteryPower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatteryPower

`func (o *StreamSystemLiveDataResponseDataData) SetBatteryPower(v int32)`

SetBatteryPower sets BatteryPower field to given value.

### HasBatteryPower

`func (o *StreamSystemLiveDataResponseDataData) HasBatteryPower() bool`

HasBatteryPower returns a boolean if a field has been set.

### GetBatterySoc

`func (o *StreamSystemLiveDataResponseDataData) GetBatterySoc() int32`

GetBatterySoc returns the BatterySoc field if non-nil, zero value otherwise.

### GetBatterySocOk

`func (o *StreamSystemLiveDataResponseDataData) GetBatterySocOk() (*int32, bool)`

GetBatterySocOk returns a tuple with the BatterySoc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatterySoc

`func (o *StreamSystemLiveDataResponseDataData) SetBatterySoc(v int32)`

SetBatterySoc sets BatterySoc field to given value.

### HasBatterySoc

`func (o *StreamSystemLiveDataResponseDataData) HasBatterySoc() bool`

HasBatterySoc returns a boolean if a field has been set.

### GetConsumptionPower

`func (o *StreamSystemLiveDataResponseDataData) GetConsumptionPower() int32`

GetConsumptionPower returns the ConsumptionPower field if non-nil, zero value otherwise.

### GetConsumptionPowerOk

`func (o *StreamSystemLiveDataResponseDataData) GetConsumptionPowerOk() (*int32, bool)`

GetConsumptionPowerOk returns a tuple with the ConsumptionPower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionPower

`func (o *StreamSystemLiveDataResponseDataData) SetConsumptionPower(v int32)`

SetConsumptionPower sets ConsumptionPower field to given value.

### HasConsumptionPower

`func (o *StreamSystemLiveDataResponseDataData) HasConsumptionPower() bool`

HasConsumptionPower returns a boolean if a field has been set.

### GetEnvoySerialNumber

`func (o *StreamSystemLiveDataResponseDataData) GetEnvoySerialNumber() []string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *StreamSystemLiveDataResponseDataData) GetEnvoySerialNumberOk() (*[]string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *StreamSystemLiveDataResponseDataData) SetEnvoySerialNumber(v []string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.

### HasEnvoySerialNumber

`func (o *StreamSystemLiveDataResponseDataData) HasEnvoySerialNumber() bool`

HasEnvoySerialNumber returns a boolean if a field has been set.

### GetGeneratorPower

`func (o *StreamSystemLiveDataResponseDataData) GetGeneratorPower() int32`

GetGeneratorPower returns the GeneratorPower field if non-nil, zero value otherwise.

### GetGeneratorPowerOk

`func (o *StreamSystemLiveDataResponseDataData) GetGeneratorPowerOk() (*int32, bool)`

GetGeneratorPowerOk returns a tuple with the GeneratorPower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratorPower

`func (o *StreamSystemLiveDataResponseDataData) SetGeneratorPower(v int32)`

SetGeneratorPower sets GeneratorPower field to given value.

### HasGeneratorPower

`func (o *StreamSystemLiveDataResponseDataData) HasGeneratorPower() bool`

HasGeneratorPower returns a boolean if a field has been set.

### GetGridPower

`func (o *StreamSystemLiveDataResponseDataData) GetGridPower() int32`

GetGridPower returns the GridPower field if non-nil, zero value otherwise.

### GetGridPowerOk

`func (o *StreamSystemLiveDataResponseDataData) GetGridPowerOk() (*int32, bool)`

GetGridPowerOk returns a tuple with the GridPower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridPower

`func (o *StreamSystemLiveDataResponseDataData) SetGridPower(v int32)`

SetGridPower sets GridPower field to given value.

### HasGridPower

`func (o *StreamSystemLiveDataResponseDataData) HasGridPower() bool`

HasGridPower returns a boolean if a field has been set.

### GetGridStatus

`func (o *StreamSystemLiveDataResponseDataData) GetGridStatus() string`

GetGridStatus returns the GridStatus field if non-nil, zero value otherwise.

### GetGridStatusOk

`func (o *StreamSystemLiveDataResponseDataData) GetGridStatusOk() (*string, bool)`

GetGridStatusOk returns a tuple with the GridStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridStatus

`func (o *StreamSystemLiveDataResponseDataData) SetGridStatus(v string)`

SetGridStatus sets GridStatus field to given value.

### HasGridStatus

`func (o *StreamSystemLiveDataResponseDataData) HasGridStatus() bool`

HasGridStatus returns a boolean if a field has been set.

### GetPvPower

`func (o *StreamSystemLiveDataResponseDataData) GetPvPower() int32`

GetPvPower returns the PvPower field if non-nil, zero value otherwise.

### GetPvPowerOk

`func (o *StreamSystemLiveDataResponseDataData) GetPvPowerOk() (*int32, bool)`

GetPvPowerOk returns a tuple with the PvPower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvPower

`func (o *StreamSystemLiveDataResponseDataData) SetPvPower(v int32)`

SetPvPower sets PvPower field to given value.

### HasPvPower

`func (o *StreamSystemLiveDataResponseDataData) HasPvPower() bool`

HasPvPower returns a boolean if a field has been set.

### GetSystemId

`func (o *StreamSystemLiveDataResponseDataData) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *StreamSystemLiveDataResponseDataData) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *StreamSystemLiveDataResponseDataData) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *StreamSystemLiveDataResponseDataData) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


