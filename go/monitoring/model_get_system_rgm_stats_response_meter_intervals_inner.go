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

// checks if the GetSystemRgmStatsResponseMeterIntervalsInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetSystemRgmStatsResponseMeterIntervalsInner{}

// GetSystemRgmStatsResponseMeterIntervalsInner struct for GetSystemRgmStatsResponseMeterIntervalsInner
type GetSystemRgmStatsResponseMeterIntervalsInner struct {
	// Meter serial number.
	MeterSerialNumber *string `json:"meter_serial_number,omitempty"`
	// Envoy serial number of the system that the micro reports to.
	EnvoySerialNumber *string `json:"envoy_serial_number,omitempty"`
	// Individual meter level interval.
	Intervals []GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner `json:"intervals,omitempty"`
}

// NewGetSystemRgmStatsResponseMeterIntervalsInner instantiates a new GetSystemRgmStatsResponseMeterIntervalsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetSystemRgmStatsResponseMeterIntervalsInner() *GetSystemRgmStatsResponseMeterIntervalsInner {
	this := GetSystemRgmStatsResponseMeterIntervalsInner{}
	return &this
}

// NewGetSystemRgmStatsResponseMeterIntervalsInnerWithDefaults instantiates a new GetSystemRgmStatsResponseMeterIntervalsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetSystemRgmStatsResponseMeterIntervalsInnerWithDefaults() *GetSystemRgmStatsResponseMeterIntervalsInner {
	this := GetSystemRgmStatsResponseMeterIntervalsInner{}
	return &this
}

// GetMeterSerialNumber returns the MeterSerialNumber field value if set, zero value otherwise.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetMeterSerialNumber() string {
	if o == nil || IsNil(o.MeterSerialNumber) {
		var ret string
		return ret
	}
	return *o.MeterSerialNumber
}

// GetMeterSerialNumberOk returns a tuple with the MeterSerialNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetMeterSerialNumberOk() (*string, bool) {
	if o == nil || IsNil(o.MeterSerialNumber) {
		return nil, false
	}
	return o.MeterSerialNumber, true
}

// HasMeterSerialNumber returns a boolean if a field has been set.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) HasMeterSerialNumber() bool {
	if o != nil && !IsNil(o.MeterSerialNumber) {
		return true
	}

	return false
}

// SetMeterSerialNumber gets a reference to the given string and assigns it to the MeterSerialNumber field.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) SetMeterSerialNumber(v string) {
	o.MeterSerialNumber = &v
}

// GetEnvoySerialNumber returns the EnvoySerialNumber field value if set, zero value otherwise.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetEnvoySerialNumber() string {
	if o == nil || IsNil(o.EnvoySerialNumber) {
		var ret string
		return ret
	}
	return *o.EnvoySerialNumber
}

// GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetEnvoySerialNumberOk() (*string, bool) {
	if o == nil || IsNil(o.EnvoySerialNumber) {
		return nil, false
	}
	return o.EnvoySerialNumber, true
}

// HasEnvoySerialNumber returns a boolean if a field has been set.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) HasEnvoySerialNumber() bool {
	if o != nil && !IsNil(o.EnvoySerialNumber) {
		return true
	}

	return false
}

// SetEnvoySerialNumber gets a reference to the given string and assigns it to the EnvoySerialNumber field.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) SetEnvoySerialNumber(v string) {
	o.EnvoySerialNumber = &v
}

// GetIntervals returns the Intervals field value if set, zero value otherwise.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetIntervals() []GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner {
	if o == nil || IsNil(o.Intervals) {
		var ret []GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner
		return ret
	}
	return o.Intervals
}

// GetIntervalsOk returns a tuple with the Intervals field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetIntervalsOk() ([]GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner, bool) {
	if o == nil || IsNil(o.Intervals) {
		return nil, false
	}
	return o.Intervals, true
}

// HasIntervals returns a boolean if a field has been set.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) HasIntervals() bool {
	if o != nil && !IsNil(o.Intervals) {
		return true
	}

	return false
}

// SetIntervals gets a reference to the given []GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner and assigns it to the Intervals field.
func (o *GetSystemRgmStatsResponseMeterIntervalsInner) SetIntervals(v []GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner) {
	o.Intervals = v
}

func (o GetSystemRgmStatsResponseMeterIntervalsInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetSystemRgmStatsResponseMeterIntervalsInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MeterSerialNumber) {
		toSerialize["meter_serial_number"] = o.MeterSerialNumber
	}
	if !IsNil(o.EnvoySerialNumber) {
		toSerialize["envoy_serial_number"] = o.EnvoySerialNumber
	}
	if !IsNil(o.Intervals) {
		toSerialize["intervals"] = o.Intervals
	}
	return toSerialize, nil
}

type NullableGetSystemRgmStatsResponseMeterIntervalsInner struct {
	value *GetSystemRgmStatsResponseMeterIntervalsInner
	isSet bool
}

func (v NullableGetSystemRgmStatsResponseMeterIntervalsInner) Get() *GetSystemRgmStatsResponseMeterIntervalsInner {
	return v.value
}

func (v *NullableGetSystemRgmStatsResponseMeterIntervalsInner) Set(val *GetSystemRgmStatsResponseMeterIntervalsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableGetSystemRgmStatsResponseMeterIntervalsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableGetSystemRgmStatsResponseMeterIntervalsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetSystemRgmStatsResponseMeterIntervalsInner(val *GetSystemRgmStatsResponseMeterIntervalsInner) *NullableGetSystemRgmStatsResponseMeterIntervalsInner {
	return &NullableGetSystemRgmStatsResponseMeterIntervalsInner{value: val, isSet: true}
}

func (v NullableGetSystemRgmStatsResponseMeterIntervalsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetSystemRgmStatsResponseMeterIntervalsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

