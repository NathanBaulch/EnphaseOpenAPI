/*
The Enlighten Systems API

The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.

API version: 2.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package enlighten

import (
	"encoding/json"
)

// StatsResponseIntervalsInner struct for StatsResponseIntervalsInner
type StatsResponseIntervalsInner struct {
	// End date for interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
	EndAt int64 `json:"end_at"`
	// Average power produced by microinverters during this interval, in Watts.
	Powr int32 `json:"powr"`
	// Energy produced by microinverters during this interval, in Watt-hours.
	Enwh int32 `json:"enwh"`
	// Number of microinverters that reported data for this interval at the time of the request.
	DevicesReporting int32 `json:"devices_reporting"`
}

// NewStatsResponseIntervalsInner instantiates a new StatsResponseIntervalsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStatsResponseIntervalsInner(endAt int64, powr int32, enwh int32, devicesReporting int32) *StatsResponseIntervalsInner {
	this := StatsResponseIntervalsInner{}
	this.EndAt = endAt
	this.Powr = powr
	this.Enwh = enwh
	this.DevicesReporting = devicesReporting
	return &this
}

// NewStatsResponseIntervalsInnerWithDefaults instantiates a new StatsResponseIntervalsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStatsResponseIntervalsInnerWithDefaults() *StatsResponseIntervalsInner {
	this := StatsResponseIntervalsInner{}
	return &this
}

// GetEndAt returns the EndAt field value
func (o *StatsResponseIntervalsInner) GetEndAt() int64 {
	if o == nil {
		var ret int64
		return ret
	}

	return o.EndAt
}

// GetEndAtOk returns a tuple with the EndAt field value
// and a boolean to check if the value has been set.
func (o *StatsResponseIntervalsInner) GetEndAtOk() (*int64, bool) {
	if o == nil {
    return nil, false
	}
	return &o.EndAt, true
}

// SetEndAt sets field value
func (o *StatsResponseIntervalsInner) SetEndAt(v int64) {
	o.EndAt = v
}

// GetPowr returns the Powr field value
func (o *StatsResponseIntervalsInner) GetPowr() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Powr
}

// GetPowrOk returns a tuple with the Powr field value
// and a boolean to check if the value has been set.
func (o *StatsResponseIntervalsInner) GetPowrOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Powr, true
}

// SetPowr sets field value
func (o *StatsResponseIntervalsInner) SetPowr(v int32) {
	o.Powr = v
}

// GetEnwh returns the Enwh field value
func (o *StatsResponseIntervalsInner) GetEnwh() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Enwh
}

// GetEnwhOk returns a tuple with the Enwh field value
// and a boolean to check if the value has been set.
func (o *StatsResponseIntervalsInner) GetEnwhOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Enwh, true
}

// SetEnwh sets field value
func (o *StatsResponseIntervalsInner) SetEnwh(v int32) {
	o.Enwh = v
}

// GetDevicesReporting returns the DevicesReporting field value
func (o *StatsResponseIntervalsInner) GetDevicesReporting() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.DevicesReporting
}

// GetDevicesReportingOk returns a tuple with the DevicesReporting field value
// and a boolean to check if the value has been set.
func (o *StatsResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.DevicesReporting, true
}

// SetDevicesReporting sets field value
func (o *StatsResponseIntervalsInner) SetDevicesReporting(v int32) {
	o.DevicesReporting = v
}

func (o StatsResponseIntervalsInner) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["end_at"] = o.EndAt
	}
	if true {
		toSerialize["powr"] = o.Powr
	}
	if true {
		toSerialize["enwh"] = o.Enwh
	}
	if true {
		toSerialize["devices_reporting"] = o.DevicesReporting
	}
	return json.Marshal(toSerialize)
}

type NullableStatsResponseIntervalsInner struct {
	value *StatsResponseIntervalsInner
	isSet bool
}

func (v NullableStatsResponseIntervalsInner) Get() *StatsResponseIntervalsInner {
	return v.value
}

func (v *NullableStatsResponseIntervalsInner) Set(val *StatsResponseIntervalsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableStatsResponseIntervalsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableStatsResponseIntervalsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatsResponseIntervalsInner(val *StatsResponseIntervalsInner) *NullableStatsResponseIntervalsInner {
	return &NullableStatsResponseIntervalsInner{value: val, isSet: true}
}

func (v NullableStatsResponseIntervalsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatsResponseIntervalsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

