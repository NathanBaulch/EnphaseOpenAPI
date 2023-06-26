/*
The Enphase Commissioning API

Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.

API version: 4.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package commissioning

import (
	"encoding/json"
)

// checks if the ArrayModulesInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ArrayModulesInner{}

// ArrayModulesInner struct for ArrayModulesInner
type ArrayModulesInner struct {
	// ID of the module.
	Id *int32 `json:"id,omitempty"`
	// Left axis position of module.
	Left *int32 `json:"left,omitempty"`
	// Top axis position of module.
	Top *int32 `json:"top,omitempty"`
	// Angle of the module.
	Angle *int32 `json:"angle,omitempty"`
	// Inverter serial number mapped with this module.
	SerialNum *string `json:"serial_num,omitempty"`
}

// NewArrayModulesInner instantiates a new ArrayModulesInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewArrayModulesInner() *ArrayModulesInner {
	this := ArrayModulesInner{}
	return &this
}

// NewArrayModulesInnerWithDefaults instantiates a new ArrayModulesInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewArrayModulesInnerWithDefaults() *ArrayModulesInner {
	this := ArrayModulesInner{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ArrayModulesInner) GetId() int32 {
	if o == nil || IsNil(o.Id) {
		var ret int32
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArrayModulesInner) GetIdOk() (*int32, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ArrayModulesInner) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given int32 and assigns it to the Id field.
func (o *ArrayModulesInner) SetId(v int32) {
	o.Id = &v
}

// GetLeft returns the Left field value if set, zero value otherwise.
func (o *ArrayModulesInner) GetLeft() int32 {
	if o == nil || IsNil(o.Left) {
		var ret int32
		return ret
	}
	return *o.Left
}

// GetLeftOk returns a tuple with the Left field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArrayModulesInner) GetLeftOk() (*int32, bool) {
	if o == nil || IsNil(o.Left) {
		return nil, false
	}
	return o.Left, true
}

// HasLeft returns a boolean if a field has been set.
func (o *ArrayModulesInner) HasLeft() bool {
	if o != nil && !IsNil(o.Left) {
		return true
	}

	return false
}

// SetLeft gets a reference to the given int32 and assigns it to the Left field.
func (o *ArrayModulesInner) SetLeft(v int32) {
	o.Left = &v
}

// GetTop returns the Top field value if set, zero value otherwise.
func (o *ArrayModulesInner) GetTop() int32 {
	if o == nil || IsNil(o.Top) {
		var ret int32
		return ret
	}
	return *o.Top
}

// GetTopOk returns a tuple with the Top field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArrayModulesInner) GetTopOk() (*int32, bool) {
	if o == nil || IsNil(o.Top) {
		return nil, false
	}
	return o.Top, true
}

// HasTop returns a boolean if a field has been set.
func (o *ArrayModulesInner) HasTop() bool {
	if o != nil && !IsNil(o.Top) {
		return true
	}

	return false
}

// SetTop gets a reference to the given int32 and assigns it to the Top field.
func (o *ArrayModulesInner) SetTop(v int32) {
	o.Top = &v
}

// GetAngle returns the Angle field value if set, zero value otherwise.
func (o *ArrayModulesInner) GetAngle() int32 {
	if o == nil || IsNil(o.Angle) {
		var ret int32
		return ret
	}
	return *o.Angle
}

// GetAngleOk returns a tuple with the Angle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArrayModulesInner) GetAngleOk() (*int32, bool) {
	if o == nil || IsNil(o.Angle) {
		return nil, false
	}
	return o.Angle, true
}

// HasAngle returns a boolean if a field has been set.
func (o *ArrayModulesInner) HasAngle() bool {
	if o != nil && !IsNil(o.Angle) {
		return true
	}

	return false
}

// SetAngle gets a reference to the given int32 and assigns it to the Angle field.
func (o *ArrayModulesInner) SetAngle(v int32) {
	o.Angle = &v
}

// GetSerialNum returns the SerialNum field value if set, zero value otherwise.
func (o *ArrayModulesInner) GetSerialNum() string {
	if o == nil || IsNil(o.SerialNum) {
		var ret string
		return ret
	}
	return *o.SerialNum
}

// GetSerialNumOk returns a tuple with the SerialNum field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArrayModulesInner) GetSerialNumOk() (*string, bool) {
	if o == nil || IsNil(o.SerialNum) {
		return nil, false
	}
	return o.SerialNum, true
}

// HasSerialNum returns a boolean if a field has been set.
func (o *ArrayModulesInner) HasSerialNum() bool {
	if o != nil && !IsNil(o.SerialNum) {
		return true
	}

	return false
}

// SetSerialNum gets a reference to the given string and assigns it to the SerialNum field.
func (o *ArrayModulesInner) SetSerialNum(v string) {
	o.SerialNum = &v
}

func (o ArrayModulesInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ArrayModulesInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Left) {
		toSerialize["left"] = o.Left
	}
	if !IsNil(o.Top) {
		toSerialize["top"] = o.Top
	}
	if !IsNil(o.Angle) {
		toSerialize["angle"] = o.Angle
	}
	if !IsNil(o.SerialNum) {
		toSerialize["serial_num"] = o.SerialNum
	}
	return toSerialize, nil
}

type NullableArrayModulesInner struct {
	value *ArrayModulesInner
	isSet bool
}

func (v NullableArrayModulesInner) Get() *ArrayModulesInner {
	return v.value
}

func (v *NullableArrayModulesInner) Set(val *ArrayModulesInner) {
	v.value = val
	v.isSet = true
}

func (v NullableArrayModulesInner) IsSet() bool {
	return v.isSet
}

func (v *NullableArrayModulesInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableArrayModulesInner(val *ArrayModulesInner) *NullableArrayModulesInner {
	return &NullableArrayModulesInner{value: val, isSet: true}
}

func (v NullableArrayModulesInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableArrayModulesInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


