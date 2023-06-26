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

// checks if the GetSystemProductionMeterTelemetryResponseIntervalsInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetSystemProductionMeterTelemetryResponseIntervalsInner{}

// GetSystemProductionMeterTelemetryResponseIntervalsInner struct for GetSystemProductionMeterTelemetryResponseIntervalsInner
type GetSystemProductionMeterTelemetryResponseIntervalsInner struct {
	// End time of the telemetry interval.
	EndAt *int64 `json:"end_at,omitempty"`
	// Number of devices reporting.
	DevicesReporting *int32 `json:"devices_reporting,omitempty"`
	// Units produced per interval.
	WhDel *int32 `json:"wh_del,omitempty"`
}

// NewGetSystemProductionMeterTelemetryResponseIntervalsInner instantiates a new GetSystemProductionMeterTelemetryResponseIntervalsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetSystemProductionMeterTelemetryResponseIntervalsInner() *GetSystemProductionMeterTelemetryResponseIntervalsInner {
	this := GetSystemProductionMeterTelemetryResponseIntervalsInner{}
	return &this
}

// NewGetSystemProductionMeterTelemetryResponseIntervalsInnerWithDefaults instantiates a new GetSystemProductionMeterTelemetryResponseIntervalsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetSystemProductionMeterTelemetryResponseIntervalsInnerWithDefaults() *GetSystemProductionMeterTelemetryResponseIntervalsInner {
	this := GetSystemProductionMeterTelemetryResponseIntervalsInner{}
	return &this
}

// GetEndAt returns the EndAt field value if set, zero value otherwise.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetEndAt() int64 {
	if o == nil || IsNil(o.EndAt) {
		var ret int64
		return ret
	}
	return *o.EndAt
}

// GetEndAtOk returns a tuple with the EndAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetEndAtOk() (*int64, bool) {
	if o == nil || IsNil(o.EndAt) {
		return nil, false
	}
	return o.EndAt, true
}

// HasEndAt returns a boolean if a field has been set.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) HasEndAt() bool {
	if o != nil && !IsNil(o.EndAt) {
		return true
	}

	return false
}

// SetEndAt gets a reference to the given int64 and assigns it to the EndAt field.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) SetEndAt(v int64) {
	o.EndAt = &v
}

// GetDevicesReporting returns the DevicesReporting field value if set, zero value otherwise.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetDevicesReporting() int32 {
	if o == nil || IsNil(o.DevicesReporting) {
		var ret int32
		return ret
	}
	return *o.DevicesReporting
}

// GetDevicesReportingOk returns a tuple with the DevicesReporting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool) {
	if o == nil || IsNil(o.DevicesReporting) {
		return nil, false
	}
	return o.DevicesReporting, true
}

// HasDevicesReporting returns a boolean if a field has been set.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) HasDevicesReporting() bool {
	if o != nil && !IsNil(o.DevicesReporting) {
		return true
	}

	return false
}

// SetDevicesReporting gets a reference to the given int32 and assigns it to the DevicesReporting field.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) SetDevicesReporting(v int32) {
	o.DevicesReporting = &v
}

// GetWhDel returns the WhDel field value if set, zero value otherwise.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetWhDel() int32 {
	if o == nil || IsNil(o.WhDel) {
		var ret int32
		return ret
	}
	return *o.WhDel
}

// GetWhDelOk returns a tuple with the WhDel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetWhDelOk() (*int32, bool) {
	if o == nil || IsNil(o.WhDel) {
		return nil, false
	}
	return o.WhDel, true
}

// HasWhDel returns a boolean if a field has been set.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) HasWhDel() bool {
	if o != nil && !IsNil(o.WhDel) {
		return true
	}

	return false
}

// SetWhDel gets a reference to the given int32 and assigns it to the WhDel field.
func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) SetWhDel(v int32) {
	o.WhDel = &v
}

func (o GetSystemProductionMeterTelemetryResponseIntervalsInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetSystemProductionMeterTelemetryResponseIntervalsInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EndAt) {
		toSerialize["end_at"] = o.EndAt
	}
	if !IsNil(o.DevicesReporting) {
		toSerialize["devices_reporting"] = o.DevicesReporting
	}
	if !IsNil(o.WhDel) {
		toSerialize["wh_del"] = o.WhDel
	}
	return toSerialize, nil
}

type NullableGetSystemProductionMeterTelemetryResponseIntervalsInner struct {
	value *GetSystemProductionMeterTelemetryResponseIntervalsInner
	isSet bool
}

func (v NullableGetSystemProductionMeterTelemetryResponseIntervalsInner) Get() *GetSystemProductionMeterTelemetryResponseIntervalsInner {
	return v.value
}

func (v *NullableGetSystemProductionMeterTelemetryResponseIntervalsInner) Set(val *GetSystemProductionMeterTelemetryResponseIntervalsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableGetSystemProductionMeterTelemetryResponseIntervalsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableGetSystemProductionMeterTelemetryResponseIntervalsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetSystemProductionMeterTelemetryResponseIntervalsInner(val *GetSystemProductionMeterTelemetryResponseIntervalsInner) *NullableGetSystemProductionMeterTelemetryResponseIntervalsInner {
	return &NullableGetSystemProductionMeterTelemetryResponseIntervalsInner{value: val, isSet: true}
}

func (v NullableGetSystemProductionMeterTelemetryResponseIntervalsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetSystemProductionMeterTelemetryResponseIntervalsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


