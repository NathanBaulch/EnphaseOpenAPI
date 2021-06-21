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

// ProductionMeterReadingsResponseMeterReadings struct for ProductionMeterReadingsResponseMeterReadings
type ProductionMeterReadingsResponseMeterReadings struct {
	// The serial number of the meter.
	SerialNumber string `json:"serial_number"`
	// The odometer reading, in Watt-hours.
	Value int32 `json:"value"`
	// The time when the reading was taken, always prior or equal to the requested `end_at`.
	ReadAt int64 `json:"read_at"`
}

// NewProductionMeterReadingsResponseMeterReadings instantiates a new ProductionMeterReadingsResponseMeterReadings object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProductionMeterReadingsResponseMeterReadings(serialNumber string, value int32, readAt int64) *ProductionMeterReadingsResponseMeterReadings {
	this := ProductionMeterReadingsResponseMeterReadings{}
	this.SerialNumber = serialNumber
	this.Value = value
	this.ReadAt = readAt
	return &this
}

// NewProductionMeterReadingsResponseMeterReadingsWithDefaults instantiates a new ProductionMeterReadingsResponseMeterReadings object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProductionMeterReadingsResponseMeterReadingsWithDefaults() *ProductionMeterReadingsResponseMeterReadings {
	this := ProductionMeterReadingsResponseMeterReadings{}
	return &this
}

// GetSerialNumber returns the SerialNumber field value
func (o *ProductionMeterReadingsResponseMeterReadings) GetSerialNumber() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.SerialNumber
}

// GetSerialNumberOk returns a tuple with the SerialNumber field value
// and a boolean to check if the value has been set.
func (o *ProductionMeterReadingsResponseMeterReadings) GetSerialNumberOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SerialNumber, true
}

// SetSerialNumber sets field value
func (o *ProductionMeterReadingsResponseMeterReadings) SetSerialNumber(v string) {
	o.SerialNumber = v
}

// GetValue returns the Value field value
func (o *ProductionMeterReadingsResponseMeterReadings) GetValue() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Value
}

// GetValueOk returns a tuple with the Value field value
// and a boolean to check if the value has been set.
func (o *ProductionMeterReadingsResponseMeterReadings) GetValueOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Value, true
}

// SetValue sets field value
func (o *ProductionMeterReadingsResponseMeterReadings) SetValue(v int32) {
	o.Value = v
}

// GetReadAt returns the ReadAt field value
func (o *ProductionMeterReadingsResponseMeterReadings) GetReadAt() int64 {
	if o == nil {
		var ret int64
		return ret
	}

	return o.ReadAt
}

// GetReadAtOk returns a tuple with the ReadAt field value
// and a boolean to check if the value has been set.
func (o *ProductionMeterReadingsResponseMeterReadings) GetReadAtOk() (*int64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ReadAt, true
}

// SetReadAt sets field value
func (o *ProductionMeterReadingsResponseMeterReadings) SetReadAt(v int64) {
	o.ReadAt = v
}

func (o ProductionMeterReadingsResponseMeterReadings) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["serial_number"] = o.SerialNumber
	}
	if true {
		toSerialize["value"] = o.Value
	}
	if true {
		toSerialize["read_at"] = o.ReadAt
	}
	return json.Marshal(toSerialize)
}

type NullableProductionMeterReadingsResponseMeterReadings struct {
	value *ProductionMeterReadingsResponseMeterReadings
	isSet bool
}

func (v NullableProductionMeterReadingsResponseMeterReadings) Get() *ProductionMeterReadingsResponseMeterReadings {
	return v.value
}

func (v *NullableProductionMeterReadingsResponseMeterReadings) Set(val *ProductionMeterReadingsResponseMeterReadings) {
	v.value = val
	v.isSet = true
}

func (v NullableProductionMeterReadingsResponseMeterReadings) IsSet() bool {
	return v.isSet
}

func (v *NullableProductionMeterReadingsResponseMeterReadings) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProductionMeterReadingsResponseMeterReadings(val *ProductionMeterReadingsResponseMeterReadings) *NullableProductionMeterReadingsResponseMeterReadings {
	return &NullableProductionMeterReadingsResponseMeterReadings{value: val, isSet: true}
}

func (v NullableProductionMeterReadingsResponseMeterReadings) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProductionMeterReadingsResponseMeterReadings) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

