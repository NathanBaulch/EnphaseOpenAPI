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

// checks if the GetSystemEnergyExportTelemetryResponseIntervalsInnerInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetSystemEnergyExportTelemetryResponseIntervalsInnerInner{}

// GetSystemEnergyExportTelemetryResponseIntervalsInnerInner struct for GetSystemEnergyExportTelemetryResponseIntervalsInnerInner
type GetSystemEnergyExportTelemetryResponseIntervalsInnerInner struct {
	// End time of the telemetry interval.
	EndAt *int64 `json:"end_at,omitempty"`
	// Energy exported (in Watt-Hours) during that period.
	WhExported *int32 `json:"wh_exported,omitempty"`
}

// NewGetSystemEnergyExportTelemetryResponseIntervalsInnerInner instantiates a new GetSystemEnergyExportTelemetryResponseIntervalsInnerInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetSystemEnergyExportTelemetryResponseIntervalsInnerInner() *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner {
	this := GetSystemEnergyExportTelemetryResponseIntervalsInnerInner{}
	return &this
}

// NewGetSystemEnergyExportTelemetryResponseIntervalsInnerInnerWithDefaults instantiates a new GetSystemEnergyExportTelemetryResponseIntervalsInnerInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetSystemEnergyExportTelemetryResponseIntervalsInnerInnerWithDefaults() *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner {
	this := GetSystemEnergyExportTelemetryResponseIntervalsInnerInner{}
	return &this
}

// GetEndAt returns the EndAt field value if set, zero value otherwise.
func (o *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) GetEndAt() int64 {
	if o == nil || IsNil(o.EndAt) {
		var ret int64
		return ret
	}
	return *o.EndAt
}

// GetEndAtOk returns a tuple with the EndAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) GetEndAtOk() (*int64, bool) {
	if o == nil || IsNil(o.EndAt) {
		return nil, false
	}
	return o.EndAt, true
}

// HasEndAt returns a boolean if a field has been set.
func (o *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) HasEndAt() bool {
	if o != nil && !IsNil(o.EndAt) {
		return true
	}

	return false
}

// SetEndAt gets a reference to the given int64 and assigns it to the EndAt field.
func (o *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) SetEndAt(v int64) {
	o.EndAt = &v
}

// GetWhExported returns the WhExported field value if set, zero value otherwise.
func (o *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) GetWhExported() int32 {
	if o == nil || IsNil(o.WhExported) {
		var ret int32
		return ret
	}
	return *o.WhExported
}

// GetWhExportedOk returns a tuple with the WhExported field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) GetWhExportedOk() (*int32, bool) {
	if o == nil || IsNil(o.WhExported) {
		return nil, false
	}
	return o.WhExported, true
}

// HasWhExported returns a boolean if a field has been set.
func (o *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) HasWhExported() bool {
	if o != nil && !IsNil(o.WhExported) {
		return true
	}

	return false
}

// SetWhExported gets a reference to the given int32 and assigns it to the WhExported field.
func (o *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) SetWhExported(v int32) {
	o.WhExported = &v
}

func (o GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EndAt) {
		toSerialize["end_at"] = o.EndAt
	}
	if !IsNil(o.WhExported) {
		toSerialize["wh_exported"] = o.WhExported
	}
	return toSerialize, nil
}

type NullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner struct {
	value *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner
	isSet bool
}

func (v NullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner) Get() *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner {
	return v.value
}

func (v *NullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner) Set(val *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) {
	v.value = val
	v.isSet = true
}

func (v NullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner) IsSet() bool {
	return v.isSet
}

func (v *NullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner(val *GetSystemEnergyExportTelemetryResponseIntervalsInnerInner) *NullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner {
	return &NullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner{value: val, isSet: true}
}

func (v NullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetSystemEnergyExportTelemetryResponseIntervalsInnerInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


