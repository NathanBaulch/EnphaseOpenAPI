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

// InlineResponse2006MeterReadings struct for InlineResponse2006MeterReadings
type InlineResponse2006MeterReadings struct {
	// The serial number of the meter.
	SerialNumber string `json:"serial_number"`
	// The odometer reading, in Watt-hours.
	Value int32 `json:"value"`
	// The time when the reading was taken, always prior or equal to the requested `end_at`.
	ReadAt int32 `json:"read_at"`
}

// NewInlineResponse2006MeterReadings instantiates a new InlineResponse2006MeterReadings object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInlineResponse2006MeterReadings(serialNumber string, value int32, readAt int32) *InlineResponse2006MeterReadings {
	this := InlineResponse2006MeterReadings{}
	this.SerialNumber = serialNumber
	this.Value = value
	this.ReadAt = readAt
	return &this
}

// NewInlineResponse2006MeterReadingsWithDefaults instantiates a new InlineResponse2006MeterReadings object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInlineResponse2006MeterReadingsWithDefaults() *InlineResponse2006MeterReadings {
	this := InlineResponse2006MeterReadings{}
	return &this
}

// GetSerialNumber returns the SerialNumber field value
func (o *InlineResponse2006MeterReadings) GetSerialNumber() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.SerialNumber
}

// GetSerialNumberOk returns a tuple with the SerialNumber field value
// and a boolean to check if the value has been set.
func (o *InlineResponse2006MeterReadings) GetSerialNumberOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SerialNumber, true
}

// SetSerialNumber sets field value
func (o *InlineResponse2006MeterReadings) SetSerialNumber(v string) {
	o.SerialNumber = v
}

// GetValue returns the Value field value
func (o *InlineResponse2006MeterReadings) GetValue() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Value
}

// GetValueOk returns a tuple with the Value field value
// and a boolean to check if the value has been set.
func (o *InlineResponse2006MeterReadings) GetValueOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Value, true
}

// SetValue sets field value
func (o *InlineResponse2006MeterReadings) SetValue(v int32) {
	o.Value = v
}

// GetReadAt returns the ReadAt field value
func (o *InlineResponse2006MeterReadings) GetReadAt() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ReadAt
}

// GetReadAtOk returns a tuple with the ReadAt field value
// and a boolean to check if the value has been set.
func (o *InlineResponse2006MeterReadings) GetReadAtOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ReadAt, true
}

// SetReadAt sets field value
func (o *InlineResponse2006MeterReadings) SetReadAt(v int32) {
	o.ReadAt = v
}

func (o InlineResponse2006MeterReadings) MarshalJSON() ([]byte, error) {
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

type NullableInlineResponse2006MeterReadings struct {
	value *InlineResponse2006MeterReadings
	isSet bool
}

func (v NullableInlineResponse2006MeterReadings) Get() *InlineResponse2006MeterReadings {
	return v.value
}

func (v *NullableInlineResponse2006MeterReadings) Set(val *InlineResponse2006MeterReadings) {
	v.value = val
	v.isSet = true
}

func (v NullableInlineResponse2006MeterReadings) IsSet() bool {
	return v.isSet
}

func (v *NullableInlineResponse2006MeterReadings) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInlineResponse2006MeterReadings(val *InlineResponse2006MeterReadings) *NullableInlineResponse2006MeterReadings {
	return &NullableInlineResponse2006MeterReadings{value: val, isSet: true}
}

func (v NullableInlineResponse2006MeterReadings) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInlineResponse2006MeterReadings) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


