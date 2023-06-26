# GetSystemBatterySettingsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** |  | [optional] 
**BatteryMode** | Pointer to **string** | Current battery mode of the system. | [optional] 
**ReserveSoc** | Pointer to **int32** | Reserve soc for the current mode. | [optional] 
**BatteryShutdownLevel** | Pointer to **int32** | Level at which battery shutdowns to conserve energy. Battery restarts by using the conserved energy when the utility grid restores power or solar panels start producing energy. | [optional] 

## Methods

### NewGetSystemBatterySettingsResponse

`func NewGetSystemBatterySettingsResponse() *GetSystemBatterySettingsResponse`

NewGetSystemBatterySettingsResponse instantiates a new GetSystemBatterySettingsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemBatterySettingsResponseWithDefaults

`func NewGetSystemBatterySettingsResponseWithDefaults() *GetSystemBatterySettingsResponse`

NewGetSystemBatterySettingsResponseWithDefaults instantiates a new GetSystemBatterySettingsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemBatterySettingsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemBatterySettingsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemBatterySettingsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemBatterySettingsResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetBatteryMode

`func (o *GetSystemBatterySettingsResponse) GetBatteryMode() string`

GetBatteryMode returns the BatteryMode field if non-nil, zero value otherwise.

### GetBatteryModeOk

`func (o *GetSystemBatterySettingsResponse) GetBatteryModeOk() (*string, bool)`

GetBatteryModeOk returns a tuple with the BatteryMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatteryMode

`func (o *GetSystemBatterySettingsResponse) SetBatteryMode(v string)`

SetBatteryMode sets BatteryMode field to given value.

### HasBatteryMode

`func (o *GetSystemBatterySettingsResponse) HasBatteryMode() bool`

HasBatteryMode returns a boolean if a field has been set.

### GetReserveSoc

`func (o *GetSystemBatterySettingsResponse) GetReserveSoc() int32`

GetReserveSoc returns the ReserveSoc field if non-nil, zero value otherwise.

### GetReserveSocOk

`func (o *GetSystemBatterySettingsResponse) GetReserveSocOk() (*int32, bool)`

GetReserveSocOk returns a tuple with the ReserveSoc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReserveSoc

`func (o *GetSystemBatterySettingsResponse) SetReserveSoc(v int32)`

SetReserveSoc sets ReserveSoc field to given value.

### HasReserveSoc

`func (o *GetSystemBatterySettingsResponse) HasReserveSoc() bool`

HasReserveSoc returns a boolean if a field has been set.

### GetBatteryShutdownLevel

`func (o *GetSystemBatterySettingsResponse) GetBatteryShutdownLevel() int32`

GetBatteryShutdownLevel returns the BatteryShutdownLevel field if non-nil, zero value otherwise.

### GetBatteryShutdownLevelOk

`func (o *GetSystemBatterySettingsResponse) GetBatteryShutdownLevelOk() (*int32, bool)`

GetBatteryShutdownLevelOk returns a tuple with the BatteryShutdownLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatteryShutdownLevel

`func (o *GetSystemBatterySettingsResponse) SetBatteryShutdownLevel(v int32)`

SetBatteryShutdownLevel sets BatteryShutdownLevel field to given value.

### HasBatteryShutdownLevel

`func (o *GetSystemBatterySettingsResponse) HasBatteryShutdownLevel() bool`

HasBatteryShutdownLevel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


