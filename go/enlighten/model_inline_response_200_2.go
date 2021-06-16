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

// InlineResponse2002 struct for InlineResponse2002
type InlineResponse2002 struct {
	Systems []InlineResponse2002Systems `json:"systems"`
	Next string `json:"next"`
}

// NewInlineResponse2002 instantiates a new InlineResponse2002 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInlineResponse2002(systems []InlineResponse2002Systems, next string) *InlineResponse2002 {
	this := InlineResponse2002{}
	this.Systems = systems
	this.Next = next
	return &this
}

// NewInlineResponse2002WithDefaults instantiates a new InlineResponse2002 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInlineResponse2002WithDefaults() *InlineResponse2002 {
	this := InlineResponse2002{}
	return &this
}

// GetSystems returns the Systems field value
func (o *InlineResponse2002) GetSystems() []InlineResponse2002Systems {
	if o == nil {
		var ret []InlineResponse2002Systems
		return ret
	}

	return o.Systems
}

// GetSystemsOk returns a tuple with the Systems field value
// and a boolean to check if the value has been set.
func (o *InlineResponse2002) GetSystemsOk() (*[]InlineResponse2002Systems, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Systems, true
}

// SetSystems sets field value
func (o *InlineResponse2002) SetSystems(v []InlineResponse2002Systems) {
	o.Systems = v
}

// GetNext returns the Next field value
func (o *InlineResponse2002) GetNext() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Next
}

// GetNextOk returns a tuple with the Next field value
// and a boolean to check if the value has been set.
func (o *InlineResponse2002) GetNextOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Next, true
}

// SetNext sets field value
func (o *InlineResponse2002) SetNext(v string) {
	o.Next = v
}

func (o InlineResponse2002) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["systems"] = o.Systems
	}
	if true {
		toSerialize["next"] = o.Next
	}
	return json.Marshal(toSerialize)
}

type NullableInlineResponse2002 struct {
	value *InlineResponse2002
	isSet bool
}

func (v NullableInlineResponse2002) Get() *InlineResponse2002 {
	return v.value
}

func (v *NullableInlineResponse2002) Set(val *InlineResponse2002) {
	v.value = val
	v.isSet = true
}

func (v NullableInlineResponse2002) IsSet() bool {
	return v.isSet
}

func (v *NullableInlineResponse2002) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInlineResponse2002(val *InlineResponse2002) *NullableInlineResponse2002 {
	return &NullableInlineResponse2002{value: val, isSet: true}
}

func (v NullableInlineResponse2002) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInlineResponse2002) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


