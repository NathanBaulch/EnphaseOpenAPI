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

// checks if the GetSystemMicroDeviceTelemetryResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetSystemMicroDeviceTelemetryResponse{}

// GetSystemMicroDeviceTelemetryResponse struct for GetSystemMicroDeviceTelemetryResponse
type GetSystemMicroDeviceTelemetryResponse struct {
	// Unique numeric ID of the system.
	SystemId *int32 `json:"system_id,omitempty"`
	// Device serial number.
	SerialNumber *string `json:"serial_number,omitempty"`
	Granularity *TelemetryGranularityEnum `json:"granularity,omitempty"`
	// Shall always be 1 since this is telemetry from individual micros.
	TotalDevices *int32 `json:"total_devices,omitempty"`
	// Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response.
	StartAt *int64 `json:"start_at,omitempty"`
	// End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response.
	EndAt *int64 `json:"end_at,omitempty"`
	// List key 'intervals'.
	Items *string `json:"items,omitempty"`
	Intervals []GetSystemMicroDeviceTelemetryResponseIntervalsInner `json:"intervals,omitempty"`
}

// NewGetSystemMicroDeviceTelemetryResponse instantiates a new GetSystemMicroDeviceTelemetryResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetSystemMicroDeviceTelemetryResponse() *GetSystemMicroDeviceTelemetryResponse {
	this := GetSystemMicroDeviceTelemetryResponse{}
	return &this
}

// NewGetSystemMicroDeviceTelemetryResponseWithDefaults instantiates a new GetSystemMicroDeviceTelemetryResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetSystemMicroDeviceTelemetryResponseWithDefaults() *GetSystemMicroDeviceTelemetryResponse {
	this := GetSystemMicroDeviceTelemetryResponse{}
	return &this
}

// GetSystemId returns the SystemId field value if set, zero value otherwise.
func (o *GetSystemMicroDeviceTelemetryResponse) GetSystemId() int32 {
	if o == nil || IsNil(o.SystemId) {
		var ret int32
		return ret
	}
	return *o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) GetSystemIdOk() (*int32, bool) {
	if o == nil || IsNil(o.SystemId) {
		return nil, false
	}
	return o.SystemId, true
}

// HasSystemId returns a boolean if a field has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) HasSystemId() bool {
	if o != nil && !IsNil(o.SystemId) {
		return true
	}

	return false
}

// SetSystemId gets a reference to the given int32 and assigns it to the SystemId field.
func (o *GetSystemMicroDeviceTelemetryResponse) SetSystemId(v int32) {
	o.SystemId = &v
}

// GetSerialNumber returns the SerialNumber field value if set, zero value otherwise.
func (o *GetSystemMicroDeviceTelemetryResponse) GetSerialNumber() string {
	if o == nil || IsNil(o.SerialNumber) {
		var ret string
		return ret
	}
	return *o.SerialNumber
}

// GetSerialNumberOk returns a tuple with the SerialNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) GetSerialNumberOk() (*string, bool) {
	if o == nil || IsNil(o.SerialNumber) {
		return nil, false
	}
	return o.SerialNumber, true
}

// HasSerialNumber returns a boolean if a field has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) HasSerialNumber() bool {
	if o != nil && !IsNil(o.SerialNumber) {
		return true
	}

	return false
}

// SetSerialNumber gets a reference to the given string and assigns it to the SerialNumber field.
func (o *GetSystemMicroDeviceTelemetryResponse) SetSerialNumber(v string) {
	o.SerialNumber = &v
}

// GetGranularity returns the Granularity field value if set, zero value otherwise.
func (o *GetSystemMicroDeviceTelemetryResponse) GetGranularity() TelemetryGranularityEnum {
	if o == nil || IsNil(o.Granularity) {
		var ret TelemetryGranularityEnum
		return ret
	}
	return *o.Granularity
}

// GetGranularityOk returns a tuple with the Granularity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) GetGranularityOk() (*TelemetryGranularityEnum, bool) {
	if o == nil || IsNil(o.Granularity) {
		return nil, false
	}
	return o.Granularity, true
}

// HasGranularity returns a boolean if a field has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) HasGranularity() bool {
	if o != nil && !IsNil(o.Granularity) {
		return true
	}

	return false
}

// SetGranularity gets a reference to the given TelemetryGranularityEnum and assigns it to the Granularity field.
func (o *GetSystemMicroDeviceTelemetryResponse) SetGranularity(v TelemetryGranularityEnum) {
	o.Granularity = &v
}

// GetTotalDevices returns the TotalDevices field value if set, zero value otherwise.
func (o *GetSystemMicroDeviceTelemetryResponse) GetTotalDevices() int32 {
	if o == nil || IsNil(o.TotalDevices) {
		var ret int32
		return ret
	}
	return *o.TotalDevices
}

// GetTotalDevicesOk returns a tuple with the TotalDevices field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) GetTotalDevicesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalDevices) {
		return nil, false
	}
	return o.TotalDevices, true
}

// HasTotalDevices returns a boolean if a field has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) HasTotalDevices() bool {
	if o != nil && !IsNil(o.TotalDevices) {
		return true
	}

	return false
}

// SetTotalDevices gets a reference to the given int32 and assigns it to the TotalDevices field.
func (o *GetSystemMicroDeviceTelemetryResponse) SetTotalDevices(v int32) {
	o.TotalDevices = &v
}

// GetStartAt returns the StartAt field value if set, zero value otherwise.
func (o *GetSystemMicroDeviceTelemetryResponse) GetStartAt() int64 {
	if o == nil || IsNil(o.StartAt) {
		var ret int64
		return ret
	}
	return *o.StartAt
}

// GetStartAtOk returns a tuple with the StartAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) GetStartAtOk() (*int64, bool) {
	if o == nil || IsNil(o.StartAt) {
		return nil, false
	}
	return o.StartAt, true
}

// HasStartAt returns a boolean if a field has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) HasStartAt() bool {
	if o != nil && !IsNil(o.StartAt) {
		return true
	}

	return false
}

// SetStartAt gets a reference to the given int64 and assigns it to the StartAt field.
func (o *GetSystemMicroDeviceTelemetryResponse) SetStartAt(v int64) {
	o.StartAt = &v
}

// GetEndAt returns the EndAt field value if set, zero value otherwise.
func (o *GetSystemMicroDeviceTelemetryResponse) GetEndAt() int64 {
	if o == nil || IsNil(o.EndAt) {
		var ret int64
		return ret
	}
	return *o.EndAt
}

// GetEndAtOk returns a tuple with the EndAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) GetEndAtOk() (*int64, bool) {
	if o == nil || IsNil(o.EndAt) {
		return nil, false
	}
	return o.EndAt, true
}

// HasEndAt returns a boolean if a field has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) HasEndAt() bool {
	if o != nil && !IsNil(o.EndAt) {
		return true
	}

	return false
}

// SetEndAt gets a reference to the given int64 and assigns it to the EndAt field.
func (o *GetSystemMicroDeviceTelemetryResponse) SetEndAt(v int64) {
	o.EndAt = &v
}

// GetItems returns the Items field value if set, zero value otherwise.
func (o *GetSystemMicroDeviceTelemetryResponse) GetItems() string {
	if o == nil || IsNil(o.Items) {
		var ret string
		return ret
	}
	return *o.Items
}

// GetItemsOk returns a tuple with the Items field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) GetItemsOk() (*string, bool) {
	if o == nil || IsNil(o.Items) {
		return nil, false
	}
	return o.Items, true
}

// HasItems returns a boolean if a field has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) HasItems() bool {
	if o != nil && !IsNil(o.Items) {
		return true
	}

	return false
}

// SetItems gets a reference to the given string and assigns it to the Items field.
func (o *GetSystemMicroDeviceTelemetryResponse) SetItems(v string) {
	o.Items = &v
}

// GetIntervals returns the Intervals field value if set, zero value otherwise.
func (o *GetSystemMicroDeviceTelemetryResponse) GetIntervals() []GetSystemMicroDeviceTelemetryResponseIntervalsInner {
	if o == nil || IsNil(o.Intervals) {
		var ret []GetSystemMicroDeviceTelemetryResponseIntervalsInner
		return ret
	}
	return o.Intervals
}

// GetIntervalsOk returns a tuple with the Intervals field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) GetIntervalsOk() ([]GetSystemMicroDeviceTelemetryResponseIntervalsInner, bool) {
	if o == nil || IsNil(o.Intervals) {
		return nil, false
	}
	return o.Intervals, true
}

// HasIntervals returns a boolean if a field has been set.
func (o *GetSystemMicroDeviceTelemetryResponse) HasIntervals() bool {
	if o != nil && !IsNil(o.Intervals) {
		return true
	}

	return false
}

// SetIntervals gets a reference to the given []GetSystemMicroDeviceTelemetryResponseIntervalsInner and assigns it to the Intervals field.
func (o *GetSystemMicroDeviceTelemetryResponse) SetIntervals(v []GetSystemMicroDeviceTelemetryResponseIntervalsInner) {
	o.Intervals = v
}

func (o GetSystemMicroDeviceTelemetryResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetSystemMicroDeviceTelemetryResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.SystemId) {
		toSerialize["system_id"] = o.SystemId
	}
	if !IsNil(o.SerialNumber) {
		toSerialize["serial_number"] = o.SerialNumber
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
	return toSerialize, nil
}

type NullableGetSystemMicroDeviceTelemetryResponse struct {
	value *GetSystemMicroDeviceTelemetryResponse
	isSet bool
}

func (v NullableGetSystemMicroDeviceTelemetryResponse) Get() *GetSystemMicroDeviceTelemetryResponse {
	return v.value
}

func (v *NullableGetSystemMicroDeviceTelemetryResponse) Set(val *GetSystemMicroDeviceTelemetryResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableGetSystemMicroDeviceTelemetryResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableGetSystemMicroDeviceTelemetryResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetSystemMicroDeviceTelemetryResponse(val *GetSystemMicroDeviceTelemetryResponse) *NullableGetSystemMicroDeviceTelemetryResponse {
	return &NullableGetSystemMicroDeviceTelemetryResponse{value: val, isSet: true}
}

func (v NullableGetSystemMicroDeviceTelemetryResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetSystemMicroDeviceTelemetryResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

