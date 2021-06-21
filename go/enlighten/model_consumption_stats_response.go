/*
 * The Enlighten Systems API
 *
 * The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.
 *
 * API version: 2.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package enlighten

import (
	"encoding/json"
)

// ConsumptionStatsResponse struct for ConsumptionStatsResponse
type ConsumptionStatsResponse struct {
	// Enlighten ID for this system.
	SystemId int32 `json:"system_id"`
	// Number of active consumption meters for this system.
	TotalDevices int32 `json:"total_devices"`
	Meta Meta `json:"meta"`
	// A list of intervals between the requested start and end times.
	Intervals []ConsumptionStatsResponseIntervals `json:"intervals"`
}

// NewConsumptionStatsResponse instantiates a new ConsumptionStatsResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConsumptionStatsResponse(systemId int32, totalDevices int32, meta Meta, intervals []ConsumptionStatsResponseIntervals) *ConsumptionStatsResponse {
	this := ConsumptionStatsResponse{}
	this.SystemId = systemId
	this.TotalDevices = totalDevices
	this.Meta = meta
	this.Intervals = intervals
	return &this
}

// NewConsumptionStatsResponseWithDefaults instantiates a new ConsumptionStatsResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConsumptionStatsResponseWithDefaults() *ConsumptionStatsResponse {
	this := ConsumptionStatsResponse{}
	return &this
}

// GetSystemId returns the SystemId field value
func (o *ConsumptionStatsResponse) GetSystemId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value
// and a boolean to check if the value has been set.
func (o *ConsumptionStatsResponse) GetSystemIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SystemId, true
}

// SetSystemId sets field value
func (o *ConsumptionStatsResponse) SetSystemId(v int32) {
	o.SystemId = v
}

// GetTotalDevices returns the TotalDevices field value
func (o *ConsumptionStatsResponse) GetTotalDevices() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.TotalDevices
}

// GetTotalDevicesOk returns a tuple with the TotalDevices field value
// and a boolean to check if the value has been set.
func (o *ConsumptionStatsResponse) GetTotalDevicesOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.TotalDevices, true
}

// SetTotalDevices sets field value
func (o *ConsumptionStatsResponse) SetTotalDevices(v int32) {
	o.TotalDevices = v
}

// GetMeta returns the Meta field value
func (o *ConsumptionStatsResponse) GetMeta() Meta {
	if o == nil {
		var ret Meta
		return ret
	}

	return o.Meta
}

// GetMetaOk returns a tuple with the Meta field value
// and a boolean to check if the value has been set.
func (o *ConsumptionStatsResponse) GetMetaOk() (*Meta, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Meta, true
}

// SetMeta sets field value
func (o *ConsumptionStatsResponse) SetMeta(v Meta) {
	o.Meta = v
}

// GetIntervals returns the Intervals field value
func (o *ConsumptionStatsResponse) GetIntervals() []ConsumptionStatsResponseIntervals {
	if o == nil {
		var ret []ConsumptionStatsResponseIntervals
		return ret
	}

	return o.Intervals
}

// GetIntervalsOk returns a tuple with the Intervals field value
// and a boolean to check if the value has been set.
func (o *ConsumptionStatsResponse) GetIntervalsOk() (*[]ConsumptionStatsResponseIntervals, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Intervals, true
}

// SetIntervals sets field value
func (o *ConsumptionStatsResponse) SetIntervals(v []ConsumptionStatsResponseIntervals) {
	o.Intervals = v
}

func (o ConsumptionStatsResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["system_id"] = o.SystemId
	}
	if true {
		toSerialize["total_devices"] = o.TotalDevices
	}
	if true {
		toSerialize["meta"] = o.Meta
	}
	if true {
		toSerialize["intervals"] = o.Intervals
	}
	return json.Marshal(toSerialize)
}

type NullableConsumptionStatsResponse struct {
	value *ConsumptionStatsResponse
	isSet bool
}

func (v NullableConsumptionStatsResponse) Get() *ConsumptionStatsResponse {
	return v.value
}

func (v *NullableConsumptionStatsResponse) Set(val *ConsumptionStatsResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableConsumptionStatsResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableConsumptionStatsResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConsumptionStatsResponse(val *ConsumptionStatsResponse) *NullableConsumptionStatsResponse {
	return &NullableConsumptionStatsResponse{value: val, isSet: true}
}

func (v NullableConsumptionStatsResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConsumptionStatsResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

