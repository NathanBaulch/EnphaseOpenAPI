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

// checks if the GetSystemProductionMicroTelemetryResponseIntervalsInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetSystemProductionMicroTelemetryResponseIntervalsInner{}

// GetSystemProductionMicroTelemetryResponseIntervalsInner struct for GetSystemProductionMicroTelemetryResponseIntervalsInner
type GetSystemProductionMicroTelemetryResponseIntervalsInner struct {
	// End time of the telemetry interval.
	EndAt *int64 `json:"end_at,omitempty"`
	// Number of devices reporting.
	DevicesReporting *int32 `json:"devices_reporting,omitempty"`
	// Average power (in Watt) produced by all the microinverters during this interval, measured in Watts.
	Powr *int32 `json:"powr,omitempty"`
	// Energy produced (in Watt-Hours) from all the microinverters combined during that period.
	Enwh *int32 `json:"enwh,omitempty"`
}

// NewGetSystemProductionMicroTelemetryResponseIntervalsInner instantiates a new GetSystemProductionMicroTelemetryResponseIntervalsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetSystemProductionMicroTelemetryResponseIntervalsInner() *GetSystemProductionMicroTelemetryResponseIntervalsInner {
	this := GetSystemProductionMicroTelemetryResponseIntervalsInner{}
	return &this
}

// NewGetSystemProductionMicroTelemetryResponseIntervalsInnerWithDefaults instantiates a new GetSystemProductionMicroTelemetryResponseIntervalsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetSystemProductionMicroTelemetryResponseIntervalsInnerWithDefaults() *GetSystemProductionMicroTelemetryResponseIntervalsInner {
	this := GetSystemProductionMicroTelemetryResponseIntervalsInner{}
	return &this
}

// GetEndAt returns the EndAt field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetEndAt() int64 {
	if o == nil || IsNil(o.EndAt) {
		var ret int64
		return ret
	}
	return *o.EndAt
}

// GetEndAtOk returns a tuple with the EndAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetEndAtOk() (*int64, bool) {
	if o == nil || IsNil(o.EndAt) {
		return nil, false
	}
	return o.EndAt, true
}

// HasEndAt returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) HasEndAt() bool {
	if o != nil && !IsNil(o.EndAt) {
		return true
	}

	return false
}

// SetEndAt gets a reference to the given int64 and assigns it to the EndAt field.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) SetEndAt(v int64) {
	o.EndAt = &v
}

// GetDevicesReporting returns the DevicesReporting field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetDevicesReporting() int32 {
	if o == nil || IsNil(o.DevicesReporting) {
		var ret int32
		return ret
	}
	return *o.DevicesReporting
}

// GetDevicesReportingOk returns a tuple with the DevicesReporting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool) {
	if o == nil || IsNil(o.DevicesReporting) {
		return nil, false
	}
	return o.DevicesReporting, true
}

// HasDevicesReporting returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) HasDevicesReporting() bool {
	if o != nil && !IsNil(o.DevicesReporting) {
		return true
	}

	return false
}

// SetDevicesReporting gets a reference to the given int32 and assigns it to the DevicesReporting field.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) SetDevicesReporting(v int32) {
	o.DevicesReporting = &v
}

// GetPowr returns the Powr field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetPowr() int32 {
	if o == nil || IsNil(o.Powr) {
		var ret int32
		return ret
	}
	return *o.Powr
}

// GetPowrOk returns a tuple with the Powr field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetPowrOk() (*int32, bool) {
	if o == nil || IsNil(o.Powr) {
		return nil, false
	}
	return o.Powr, true
}

// HasPowr returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) HasPowr() bool {
	if o != nil && !IsNil(o.Powr) {
		return true
	}

	return false
}

// SetPowr gets a reference to the given int32 and assigns it to the Powr field.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) SetPowr(v int32) {
	o.Powr = &v
}

// GetEnwh returns the Enwh field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetEnwh() int32 {
	if o == nil || IsNil(o.Enwh) {
		var ret int32
		return ret
	}
	return *o.Enwh
}

// GetEnwhOk returns a tuple with the Enwh field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetEnwhOk() (*int32, bool) {
	if o == nil || IsNil(o.Enwh) {
		return nil, false
	}
	return o.Enwh, true
}

// HasEnwh returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) HasEnwh() bool {
	if o != nil && !IsNil(o.Enwh) {
		return true
	}

	return false
}

// SetEnwh gets a reference to the given int32 and assigns it to the Enwh field.
func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) SetEnwh(v int32) {
	o.Enwh = &v
}

func (o GetSystemProductionMicroTelemetryResponseIntervalsInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetSystemProductionMicroTelemetryResponseIntervalsInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EndAt) {
		toSerialize["end_at"] = o.EndAt
	}
	if !IsNil(o.DevicesReporting) {
		toSerialize["devices_reporting"] = o.DevicesReporting
	}
	if !IsNil(o.Powr) {
		toSerialize["powr"] = o.Powr
	}
	if !IsNil(o.Enwh) {
		toSerialize["enwh"] = o.Enwh
	}
	return toSerialize, nil
}

type NullableGetSystemProductionMicroTelemetryResponseIntervalsInner struct {
	value *GetSystemProductionMicroTelemetryResponseIntervalsInner
	isSet bool
}

func (v NullableGetSystemProductionMicroTelemetryResponseIntervalsInner) Get() *GetSystemProductionMicroTelemetryResponseIntervalsInner {
	return v.value
}

func (v *NullableGetSystemProductionMicroTelemetryResponseIntervalsInner) Set(val *GetSystemProductionMicroTelemetryResponseIntervalsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableGetSystemProductionMicroTelemetryResponseIntervalsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableGetSystemProductionMicroTelemetryResponseIntervalsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetSystemProductionMicroTelemetryResponseIntervalsInner(val *GetSystemProductionMicroTelemetryResponseIntervalsInner) *NullableGetSystemProductionMicroTelemetryResponseIntervalsInner {
	return &NullableGetSystemProductionMicroTelemetryResponseIntervalsInner{value: val, isSet: true}
}

func (v NullableGetSystemProductionMicroTelemetryResponseIntervalsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetSystemProductionMicroTelemetryResponseIntervalsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


