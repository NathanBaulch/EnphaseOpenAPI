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

// checks if the BatteryDeviceTelemetryIntervalsInnerSoc type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BatteryDeviceTelemetryIntervalsInnerSoc{}

// BatteryDeviceTelemetryIntervalsInnerSoc struct for BatteryDeviceTelemetryIntervalsInnerSoc
type BatteryDeviceTelemetryIntervalsInnerSoc struct {
	// Battery soc percentage.
	Percent *int32 `json:"percent,omitempty"`
}

// NewBatteryDeviceTelemetryIntervalsInnerSoc instantiates a new BatteryDeviceTelemetryIntervalsInnerSoc object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBatteryDeviceTelemetryIntervalsInnerSoc() *BatteryDeviceTelemetryIntervalsInnerSoc {
	this := BatteryDeviceTelemetryIntervalsInnerSoc{}
	return &this
}

// NewBatteryDeviceTelemetryIntervalsInnerSocWithDefaults instantiates a new BatteryDeviceTelemetryIntervalsInnerSoc object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBatteryDeviceTelemetryIntervalsInnerSocWithDefaults() *BatteryDeviceTelemetryIntervalsInnerSoc {
	this := BatteryDeviceTelemetryIntervalsInnerSoc{}
	return &this
}

// GetPercent returns the Percent field value if set, zero value otherwise.
func (o *BatteryDeviceTelemetryIntervalsInnerSoc) GetPercent() int32 {
	if o == nil || IsNil(o.Percent) {
		var ret int32
		return ret
	}
	return *o.Percent
}

// GetPercentOk returns a tuple with the Percent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BatteryDeviceTelemetryIntervalsInnerSoc) GetPercentOk() (*int32, bool) {
	if o == nil || IsNil(o.Percent) {
		return nil, false
	}
	return o.Percent, true
}

// HasPercent returns a boolean if a field has been set.
func (o *BatteryDeviceTelemetryIntervalsInnerSoc) HasPercent() bool {
	if o != nil && !IsNil(o.Percent) {
		return true
	}

	return false
}

// SetPercent gets a reference to the given int32 and assigns it to the Percent field.
func (o *BatteryDeviceTelemetryIntervalsInnerSoc) SetPercent(v int32) {
	o.Percent = &v
}

func (o BatteryDeviceTelemetryIntervalsInnerSoc) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BatteryDeviceTelemetryIntervalsInnerSoc) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Percent) {
		toSerialize["percent"] = o.Percent
	}
	return toSerialize, nil
}

type NullableBatteryDeviceTelemetryIntervalsInnerSoc struct {
	value *BatteryDeviceTelemetryIntervalsInnerSoc
	isSet bool
}

func (v NullableBatteryDeviceTelemetryIntervalsInnerSoc) Get() *BatteryDeviceTelemetryIntervalsInnerSoc {
	return v.value
}

func (v *NullableBatteryDeviceTelemetryIntervalsInnerSoc) Set(val *BatteryDeviceTelemetryIntervalsInnerSoc) {
	v.value = val
	v.isSet = true
}

func (v NullableBatteryDeviceTelemetryIntervalsInnerSoc) IsSet() bool {
	return v.isSet
}

func (v *NullableBatteryDeviceTelemetryIntervalsInnerSoc) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBatteryDeviceTelemetryIntervalsInnerSoc(val *BatteryDeviceTelemetryIntervalsInnerSoc) *NullableBatteryDeviceTelemetryIntervalsInnerSoc {
	return &NullableBatteryDeviceTelemetryIntervalsInnerSoc{value: val, isSet: true}
}

func (v NullableBatteryDeviceTelemetryIntervalsInnerSoc) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBatteryDeviceTelemetryIntervalsInnerSoc) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


