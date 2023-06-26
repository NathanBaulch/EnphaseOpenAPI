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

// checks if the GetSystemProductionMicroTelemetryResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetSystemProductionMicroTelemetryResponse{}

// GetSystemProductionMicroTelemetryResponse struct for GetSystemProductionMicroTelemetryResponse
type GetSystemProductionMicroTelemetryResponse struct {
	// Unique numeric ID of the system.
	SystemId *int32 `json:"system_id,omitempty"`
	Granularity *TelemetryGranularityEnum `json:"granularity,omitempty"`
	// Number of micro inverters in the site.
	TotalDevices *int32 `json:"total_devices,omitempty"`
	// Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response.
	StartAt *int64 `json:"start_at,omitempty"`
	// End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response.
	EndAt *int64 `json:"end_at,omitempty"`
	// List key 'intervals'.
	Items *string `json:"items,omitempty"`
	// An array of telemetry objects.
	Intervals []GetSystemProductionMicroTelemetryResponseIntervalsInner `json:"intervals,omitempty"`
	Meta *Meta `json:"meta,omitempty"`
}

// NewGetSystemProductionMicroTelemetryResponse instantiates a new GetSystemProductionMicroTelemetryResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetSystemProductionMicroTelemetryResponse() *GetSystemProductionMicroTelemetryResponse {
	this := GetSystemProductionMicroTelemetryResponse{}
	return &this
}

// NewGetSystemProductionMicroTelemetryResponseWithDefaults instantiates a new GetSystemProductionMicroTelemetryResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetSystemProductionMicroTelemetryResponseWithDefaults() *GetSystemProductionMicroTelemetryResponse {
	this := GetSystemProductionMicroTelemetryResponse{}
	return &this
}

// GetSystemId returns the SystemId field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponse) GetSystemId() int32 {
	if o == nil || IsNil(o.SystemId) {
		var ret int32
		return ret
	}
	return *o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponse) GetSystemIdOk() (*int32, bool) {
	if o == nil || IsNil(o.SystemId) {
		return nil, false
	}
	return o.SystemId, true
}

// HasSystemId returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponse) HasSystemId() bool {
	if o != nil && !IsNil(o.SystemId) {
		return true
	}

	return false
}

// SetSystemId gets a reference to the given int32 and assigns it to the SystemId field.
func (o *GetSystemProductionMicroTelemetryResponse) SetSystemId(v int32) {
	o.SystemId = &v
}

// GetGranularity returns the Granularity field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponse) GetGranularity() TelemetryGranularityEnum {
	if o == nil || IsNil(o.Granularity) {
		var ret TelemetryGranularityEnum
		return ret
	}
	return *o.Granularity
}

// GetGranularityOk returns a tuple with the Granularity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponse) GetGranularityOk() (*TelemetryGranularityEnum, bool) {
	if o == nil || IsNil(o.Granularity) {
		return nil, false
	}
	return o.Granularity, true
}

// HasGranularity returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponse) HasGranularity() bool {
	if o != nil && !IsNil(o.Granularity) {
		return true
	}

	return false
}

// SetGranularity gets a reference to the given TelemetryGranularityEnum and assigns it to the Granularity field.
func (o *GetSystemProductionMicroTelemetryResponse) SetGranularity(v TelemetryGranularityEnum) {
	o.Granularity = &v
}

// GetTotalDevices returns the TotalDevices field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponse) GetTotalDevices() int32 {
	if o == nil || IsNil(o.TotalDevices) {
		var ret int32
		return ret
	}
	return *o.TotalDevices
}

// GetTotalDevicesOk returns a tuple with the TotalDevices field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponse) GetTotalDevicesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalDevices) {
		return nil, false
	}
	return o.TotalDevices, true
}

// HasTotalDevices returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponse) HasTotalDevices() bool {
	if o != nil && !IsNil(o.TotalDevices) {
		return true
	}

	return false
}

// SetTotalDevices gets a reference to the given int32 and assigns it to the TotalDevices field.
func (o *GetSystemProductionMicroTelemetryResponse) SetTotalDevices(v int32) {
	o.TotalDevices = &v
}

// GetStartAt returns the StartAt field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponse) GetStartAt() int64 {
	if o == nil || IsNil(o.StartAt) {
		var ret int64
		return ret
	}
	return *o.StartAt
}

// GetStartAtOk returns a tuple with the StartAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponse) GetStartAtOk() (*int64, bool) {
	if o == nil || IsNil(o.StartAt) {
		return nil, false
	}
	return o.StartAt, true
}

// HasStartAt returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponse) HasStartAt() bool {
	if o != nil && !IsNil(o.StartAt) {
		return true
	}

	return false
}

// SetStartAt gets a reference to the given int64 and assigns it to the StartAt field.
func (o *GetSystemProductionMicroTelemetryResponse) SetStartAt(v int64) {
	o.StartAt = &v
}

// GetEndAt returns the EndAt field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponse) GetEndAt() int64 {
	if o == nil || IsNil(o.EndAt) {
		var ret int64
		return ret
	}
	return *o.EndAt
}

// GetEndAtOk returns a tuple with the EndAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponse) GetEndAtOk() (*int64, bool) {
	if o == nil || IsNil(o.EndAt) {
		return nil, false
	}
	return o.EndAt, true
}

// HasEndAt returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponse) HasEndAt() bool {
	if o != nil && !IsNil(o.EndAt) {
		return true
	}

	return false
}

// SetEndAt gets a reference to the given int64 and assigns it to the EndAt field.
func (o *GetSystemProductionMicroTelemetryResponse) SetEndAt(v int64) {
	o.EndAt = &v
}

// GetItems returns the Items field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponse) GetItems() string {
	if o == nil || IsNil(o.Items) {
		var ret string
		return ret
	}
	return *o.Items
}

// GetItemsOk returns a tuple with the Items field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponse) GetItemsOk() (*string, bool) {
	if o == nil || IsNil(o.Items) {
		return nil, false
	}
	return o.Items, true
}

// HasItems returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponse) HasItems() bool {
	if o != nil && !IsNil(o.Items) {
		return true
	}

	return false
}

// SetItems gets a reference to the given string and assigns it to the Items field.
func (o *GetSystemProductionMicroTelemetryResponse) SetItems(v string) {
	o.Items = &v
}

// GetIntervals returns the Intervals field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponse) GetIntervals() []GetSystemProductionMicroTelemetryResponseIntervalsInner {
	if o == nil || IsNil(o.Intervals) {
		var ret []GetSystemProductionMicroTelemetryResponseIntervalsInner
		return ret
	}
	return o.Intervals
}

// GetIntervalsOk returns a tuple with the Intervals field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponse) GetIntervalsOk() ([]GetSystemProductionMicroTelemetryResponseIntervalsInner, bool) {
	if o == nil || IsNil(o.Intervals) {
		return nil, false
	}
	return o.Intervals, true
}

// HasIntervals returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponse) HasIntervals() bool {
	if o != nil && !IsNil(o.Intervals) {
		return true
	}

	return false
}

// SetIntervals gets a reference to the given []GetSystemProductionMicroTelemetryResponseIntervalsInner and assigns it to the Intervals field.
func (o *GetSystemProductionMicroTelemetryResponse) SetIntervals(v []GetSystemProductionMicroTelemetryResponseIntervalsInner) {
	o.Intervals = v
}

// GetMeta returns the Meta field value if set, zero value otherwise.
func (o *GetSystemProductionMicroTelemetryResponse) GetMeta() Meta {
	if o == nil || IsNil(o.Meta) {
		var ret Meta
		return ret
	}
	return *o.Meta
}

// GetMetaOk returns a tuple with the Meta field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemProductionMicroTelemetryResponse) GetMetaOk() (*Meta, bool) {
	if o == nil || IsNil(o.Meta) {
		return nil, false
	}
	return o.Meta, true
}

// HasMeta returns a boolean if a field has been set.
func (o *GetSystemProductionMicroTelemetryResponse) HasMeta() bool {
	if o != nil && !IsNil(o.Meta) {
		return true
	}

	return false
}

// SetMeta gets a reference to the given Meta and assigns it to the Meta field.
func (o *GetSystemProductionMicroTelemetryResponse) SetMeta(v Meta) {
	o.Meta = &v
}

func (o GetSystemProductionMicroTelemetryResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetSystemProductionMicroTelemetryResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.SystemId) {
		toSerialize["system_id"] = o.SystemId
	}
	if !IsNil(o.Granularity) {
		toSerialize["granularity"] = o.Granularity
	}
	if !IsNil(o.TotalDevices) {
		toSerialize["total_devices"] = o.TotalDevices
	}
	if !IsNil(o.StartAt) {
		toSerialize["start_at"] = o.StartAt
	}
	if !IsNil(o.EndAt) {
		toSerialize["end_at"] = o.EndAt
	}
	if !IsNil(o.Items) {
		toSerialize["items"] = o.Items
	}
	if !IsNil(o.Intervals) {
		toSerialize["intervals"] = o.Intervals
	}
	if !IsNil(o.Meta) {
		toSerialize["meta"] = o.Meta
	}
	return toSerialize, nil
}

type NullableGetSystemProductionMicroTelemetryResponse struct {
	value *GetSystemProductionMicroTelemetryResponse
	isSet bool
}

func (v NullableGetSystemProductionMicroTelemetryResponse) Get() *GetSystemProductionMicroTelemetryResponse {
	return v.value
}

func (v *NullableGetSystemProductionMicroTelemetryResponse) Set(val *GetSystemProductionMicroTelemetryResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableGetSystemProductionMicroTelemetryResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableGetSystemProductionMicroTelemetryResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetSystemProductionMicroTelemetryResponse(val *GetSystemProductionMicroTelemetryResponse) *NullableGetSystemProductionMicroTelemetryResponse {
	return &NullableGetSystemProductionMicroTelemetryResponse{value: val, isSet: true}
}

func (v NullableGetSystemProductionMicroTelemetryResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetSystemProductionMicroTelemetryResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


