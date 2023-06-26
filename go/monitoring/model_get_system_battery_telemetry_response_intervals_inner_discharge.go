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

// checks if the GetSystemBatteryTelemetryResponseIntervalsInnerDischarge type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetSystemBatteryTelemetryResponseIntervalsInnerDischarge{}

// GetSystemBatteryTelemetryResponseIntervalsInnerDischarge struct for GetSystemBatteryTelemetryResponseIntervalsInnerDischarge
type GetSystemBatteryTelemetryResponseIntervalsInnerDischarge struct {
	// Energy discharged from the battery during the interval.
	Enwh *int32 `json:"enwh,omitempty"`
	// Number of devices reporting.
	DevicesReporting *int32 `json:"devices_reporting,omitempty"`
}

// NewGetSystemBatteryTelemetryResponseIntervalsInnerDischarge instantiates a new GetSystemBatteryTelemetryResponseIntervalsInnerDischarge object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetSystemBatteryTelemetryResponseIntervalsInnerDischarge() *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge {
	this := GetSystemBatteryTelemetryResponseIntervalsInnerDischarge{}
	return &this
}

// NewGetSystemBatteryTelemetryResponseIntervalsInnerDischargeWithDefaults instantiates a new GetSystemBatteryTelemetryResponseIntervalsInnerDischarge object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetSystemBatteryTelemetryResponseIntervalsInnerDischargeWithDefaults() *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge {
	this := GetSystemBatteryTelemetryResponseIntervalsInnerDischarge{}
	return &this
}

// GetEnwh returns the Enwh field value if set, zero value otherwise.
func (o *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) GetEnwh() int32 {
	if o == nil || IsNil(o.Enwh) {
		var ret int32
		return ret
	}
	return *o.Enwh
}

// GetEnwhOk returns a tuple with the Enwh field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) GetEnwhOk() (*int32, bool) {
	if o == nil || IsNil(o.Enwh) {
		return nil, false
	}
	return o.Enwh, true
}

// HasEnwh returns a boolean if a field has been set.
func (o *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) HasEnwh() bool {
	if o != nil && !IsNil(o.Enwh) {
		return true
	}

	return false
}

// SetEnwh gets a reference to the given int32 and assigns it to the Enwh field.
func (o *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) SetEnwh(v int32) {
	o.Enwh = &v
}

// GetDevicesReporting returns the DevicesReporting field value if set, zero value otherwise.
func (o *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) GetDevicesReporting() int32 {
	if o == nil || IsNil(o.DevicesReporting) {
		var ret int32
		return ret
	}
	return *o.DevicesReporting
}

// GetDevicesReportingOk returns a tuple with the DevicesReporting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) GetDevicesReportingOk() (*int32, bool) {
	if o == nil || IsNil(o.DevicesReporting) {
		return nil, false
	}
	return o.DevicesReporting, true
}

// HasDevicesReporting returns a boolean if a field has been set.
func (o *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) HasDevicesReporting() bool {
	if o != nil && !IsNil(o.DevicesReporting) {
		return true
	}

	return false
}

// SetDevicesReporting gets a reference to the given int32 and assigns it to the DevicesReporting field.
func (o *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) SetDevicesReporting(v int32) {
	o.DevicesReporting = &v
}

func (o GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Enwh) {
		toSerialize["enwh"] = o.Enwh
	}
	if !IsNil(o.DevicesReporting) {
		toSerialize["devices_reporting"] = o.DevicesReporting
	}
	return toSerialize, nil
}

type NullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge struct {
	value *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge
	isSet bool
}

func (v NullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge) Get() *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge {
	return v.value
}

func (v *NullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge) Set(val *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) {
	v.value = val
	v.isSet = true
}

func (v NullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge) IsSet() bool {
	return v.isSet
}

func (v *NullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge(val *GetSystemBatteryTelemetryResponseIntervalsInnerDischarge) *NullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge {
	return &NullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge{value: val, isSet: true}
}

func (v NullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetSystemBatteryTelemetryResponseIntervalsInnerDischarge) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


