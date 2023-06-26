/*
The Enphase Monitoring API

Monitoring API can be used to fetch system details on a site, system-level production and consumption data, and device-level production data.

API version: 4.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monitoring

import (
	"encoding/json"
)

// checks if the GetSystemBatterySettingsResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetSystemBatterySettingsResponse{}

// GetSystemBatterySettingsResponse struct for GetSystemBatterySettingsResponse
type GetSystemBatterySettingsResponse struct {
	SystemId *int32 `json:"system_id,omitempty"`
	// Current battery mode of the system.
	BatteryMode *string `json:"battery_mode,omitempty"`
	// Reserve soc for the current mode.
	ReserveSoc *int32 `json:"reserve_soc,omitempty"`
	// Level at which battery shutdowns to conserve energy. Battery restarts by using the conserved energy when the utility grid restores power or solar panels start producing energy.
	BatteryShutdownLevel *int32 `json:"battery_shutdown_level,omitempty"`
}

// NewGetSystemBatterySettingsResponse instantiates a new GetSystemBatterySettingsResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetSystemBatterySettingsResponse() *GetSystemBatterySettingsResponse {
	this := GetSystemBatterySettingsResponse{}
	return &this
}

// NewGetSystemBatterySettingsResponseWithDefaults instantiates a new GetSystemBatterySettingsResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetSystemBatterySettingsResponseWithDefaults() *GetSystemBatterySettingsResponse {
	this := GetSystemBatterySettingsResponse{}
	return &this
}

// GetSystemId returns the SystemId field value if set, zero value otherwise.
func (o *GetSystemBatterySettingsResponse) GetSystemId() int32 {
	if o == nil || IsNil(o.SystemId) {
		var ret int32
		return ret
	}
	return *o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemBatterySettingsResponse) GetSystemIdOk() (*int32, bool) {
	if o == nil || IsNil(o.SystemId) {
		return nil, false
	}
	return o.SystemId, true
}

// HasSystemId returns a boolean if a field has been set.
func (o *GetSystemBatterySettingsResponse) HasSystemId() bool {
	if o != nil && !IsNil(o.SystemId) {
		return true
	}

	return false
}

// SetSystemId gets a reference to the given int32 and assigns it to the SystemId field.
func (o *GetSystemBatterySettingsResponse) SetSystemId(v int32) {
	o.SystemId = &v
}

// GetBatteryMode returns the BatteryMode field value if set, zero value otherwise.
func (o *GetSystemBatterySettingsResponse) GetBatteryMode() string {
	if o == nil || IsNil(o.BatteryMode) {
		var ret string
		return ret
	}
	return *o.BatteryMode
}

// GetBatteryModeOk returns a tuple with the BatteryMode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemBatterySettingsResponse) GetBatteryModeOk() (*string, bool) {
	if o == nil || IsNil(o.BatteryMode) {
		return nil, false
	}
	return o.BatteryMode, true
}

// HasBatteryMode returns a boolean if a field has been set.
func (o *GetSystemBatterySettingsResponse) HasBatteryMode() bool {
	if o != nil && !IsNil(o.BatteryMode) {
		return true
	}

	return false
}

// SetBatteryMode gets a reference to the given string and assigns it to the BatteryMode field.
func (o *GetSystemBatterySettingsResponse) SetBatteryMode(v string) {
	o.BatteryMode = &v
}

// GetReserveSoc returns the ReserveSoc field value if set, zero value otherwise.
func (o *GetSystemBatterySettingsResponse) GetReserveSoc() int32 {
	if o == nil || IsNil(o.ReserveSoc) {
		var ret int32
		return ret
	}
	return *o.ReserveSoc
}

// GetReserveSocOk returns a tuple with the ReserveSoc field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemBatterySettingsResponse) GetReserveSocOk() (*int32, bool) {
	if o == nil || IsNil(o.ReserveSoc) {
		return nil, false
	}
	return o.ReserveSoc, true
}

// HasReserveSoc returns a boolean if a field has been set.
func (o *GetSystemBatterySettingsResponse) HasReserveSoc() bool {
	if o != nil && !IsNil(o.ReserveSoc) {
		return true
	}

	return false
}

// SetReserveSoc gets a reference to the given int32 and assigns it to the ReserveSoc field.
func (o *GetSystemBatterySettingsResponse) SetReserveSoc(v int32) {
	o.ReserveSoc = &v
}

// GetBatteryShutdownLevel returns the BatteryShutdownLevel field value if set, zero value otherwise.
func (o *GetSystemBatterySettingsResponse) GetBatteryShutdownLevel() int32 {
	if o == nil || IsNil(o.BatteryShutdownLevel) {
		var ret int32
		return ret
	}
	return *o.BatteryShutdownLevel
}

// GetBatteryShutdownLevelOk returns a tuple with the BatteryShutdownLevel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemBatterySettingsResponse) GetBatteryShutdownLevelOk() (*int32, bool) {
	if o == nil || IsNil(o.BatteryShutdownLevel) {
		return nil, false
	}
	return o.BatteryShutdownLevel, true
}

// HasBatteryShutdownLevel returns a boolean if a field has been set.
func (o *GetSystemBatterySettingsResponse) HasBatteryShutdownLevel() bool {
	if o != nil && !IsNil(o.BatteryShutdownLevel) {
		return true
	}

	return false
}

// SetBatteryShutdownLevel gets a reference to the given int32 and assigns it to the BatteryShutdownLevel field.
func (o *GetSystemBatterySettingsResponse) SetBatteryShutdownLevel(v int32) {
	o.BatteryShutdownLevel = &v
}

func (o GetSystemBatterySettingsResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetSystemBatterySettingsResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.SystemId) {
		toSerialize["system_id"] = o.SystemId
	}
	if !IsNil(o.BatteryMode) {
		toSerialize["battery_mode"] = o.BatteryMode
	}
	if !IsNil(o.ReserveSoc) {
		toSerialize["reserve_soc"] = o.ReserveSoc
	}
	if !IsNil(o.BatteryShutdownLevel) {
		toSerialize["battery_shutdown_level"] = o.BatteryShutdownLevel
	}
	return toSerialize, nil
}

type NullableGetSystemBatterySettingsResponse struct {
	value *GetSystemBatterySettingsResponse
	isSet bool
}

func (v NullableGetSystemBatterySettingsResponse) Get() *GetSystemBatterySettingsResponse {
	return v.value
}

func (v *NullableGetSystemBatterySettingsResponse) Set(val *GetSystemBatterySettingsResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableGetSystemBatterySettingsResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableGetSystemBatterySettingsResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetSystemBatterySettingsResponse(val *GetSystemBatterySettingsResponse) *NullableGetSystemBatterySettingsResponse {
	return &NullableGetSystemBatterySettingsResponse{value: val, isSet: true}
}

func (v NullableGetSystemBatterySettingsResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetSystemBatterySettingsResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


