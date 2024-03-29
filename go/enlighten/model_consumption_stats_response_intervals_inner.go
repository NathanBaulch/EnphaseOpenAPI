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

// ConsumptionStatsResponseIntervalsInner struct for ConsumptionStatsResponseIntervalsInner
type ConsumptionStatsResponseIntervalsInner struct {
	// End of interval. The format is Unix epoch time unless you pass a `datetime_format` parameter as described [here](https://developer.enphase.com/docs#Datetimes).
	EndAt int64 `json:"end_at"`
	// Energy consumed during this interval, in Watt-hours.
	Enwh int32 `json:"enwh"`
	// Number of consumption meters that reported data for this interval at the time of the request.
	DevicesReporting int32 `json:"devices_reporting"`
}

// NewConsumptionStatsResponseIntervalsInner instantiates a new ConsumptionStatsResponseIntervalsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConsumptionStatsResponseIntervalsInner(endAt int64, enwh int32, devicesReporting int32) *ConsumptionStatsResponseIntervalsInner {
	this := ConsumptionStatsResponseIntervalsInner{}
	this.EndAt = endAt
	this.Enwh = enwh
	this.DevicesReporting = devicesReporting
	return &this
}

// NewConsumptionStatsResponseIntervalsInnerWithDefaults instantiates a new ConsumptionStatsResponseIntervalsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConsumptionStatsResponseIntervalsInnerWithDefaults() *ConsumptionStatsResponseIntervalsInner {
	this := ConsumptionStatsResponseIntervalsInner{}
	return &this
}

// GetEndAt returns the EndAt field value
func (o *ConsumptionStatsResponseIntervalsInner) GetEndAt() int64 {
	if o == nil {
		var ret int64
		return ret
	}

	return o.EndAt
}

// GetEndAtOk returns a tuple with the EndAt field value
// and a boolean to check if the value has been set.
func (o *ConsumptionStatsResponseIntervalsInner) GetEndAtOk() (*int64, bool) {
	if o == nil {
    return nil, false
	}
	return &o.EndAt, true
}

// SetEndAt sets field value
func (o *ConsumptionStatsResponseIntervalsInner) SetEndAt(v int64) {
	o.EndAt = v
}

// GetEnwh returns the Enwh field value
func (o *ConsumptionStatsResponseIntervalsInner) GetEnwh() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Enwh
}

// GetEnwhOk returns a tuple with the Enwh field value
// and a boolean to check if the value has been set.
func (o *ConsumptionStatsResponseIntervalsInner) GetEnwhOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Enwh, true
}

// SetEnwh sets field value
func (o *ConsumptionStatsResponseIntervalsInner) SetEnwh(v int32) {
	o.Enwh = v
}

// GetDevicesReporting returns the DevicesReporting field value
func (o *ConsumptionStatsResponseIntervalsInner) GetDevicesReporting() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.DevicesReporting
}

// GetDevicesReportingOk returns a tuple with the DevicesReporting field value
// and a boolean to check if the value has been set.
func (o *ConsumptionStatsResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.DevicesReporting, true
}

// SetDevicesReporting sets field value
func (o *ConsumptionStatsResponseIntervalsInner) SetDevicesReporting(v int32) {
	o.DevicesReporting = v
}

func (o ConsumptionStatsResponseIntervalsInner) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["end_at"] = o.EndAt
	}
	if true {
		toSerialize["enwh"] = o.Enwh
	}
	if true {
		toSerialize["devices_reporting"] = o.DevicesReporting
	}
	return json.Marshal(toSerialize)
}

type NullableConsumptionStatsResponseIntervalsInner struct {
	value *ConsumptionStatsResponseIntervalsInner
	isSet bool
}

func (v NullableConsumptionStatsResponseIntervalsInner) Get() *ConsumptionStatsResponseIntervalsInner {
	return v.value
}

func (v *NullableConsumptionStatsResponseIntervalsInner) Set(val *ConsumptionStatsResponseIntervalsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableConsumptionStatsResponseIntervalsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableConsumptionStatsResponseIntervalsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConsumptionStatsResponseIntervalsInner(val *ConsumptionStatsResponseIntervalsInner) *NullableConsumptionStatsResponseIntervalsInner {
	return &NullableConsumptionStatsResponseIntervalsInner{value: val, isSet: true}
}

func (v NullableConsumptionStatsResponseIntervalsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConsumptionStatsResponseIntervalsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


