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

// SystemsResponse struct for SystemsResponse
type SystemsResponse struct {
	Systems []SystemsResponseSystems `json:"systems"`
	Next *string `json:"next,omitempty"`
}

// NewSystemsResponse instantiates a new SystemsResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSystemsResponse(systems []SystemsResponseSystems) *SystemsResponse {
	this := SystemsResponse{}
	this.Systems = systems
	return &this
}

// NewSystemsResponseWithDefaults instantiates a new SystemsResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSystemsResponseWithDefaults() *SystemsResponse {
	this := SystemsResponse{}
	return &this
}

// GetSystems returns the Systems field value
func (o *SystemsResponse) GetSystems() []SystemsResponseSystems {
	if o == nil {
		var ret []SystemsResponseSystems
		return ret
	}

	return o.Systems
}

// GetSystemsOk returns a tuple with the Systems field value
// and a boolean to check if the value has been set.
func (o *SystemsResponse) GetSystemsOk() (*[]SystemsResponseSystems, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Systems, true
}

// SetSystems sets field value
func (o *SystemsResponse) SetSystems(v []SystemsResponseSystems) {
	o.Systems = v
}

// GetNext returns the Next field value if set, zero value otherwise.
func (o *SystemsResponse) GetNext() string {
	if o == nil || o.Next == nil {
		var ret string
		return ret
	}
	return *o.Next
}

// GetNextOk returns a tuple with the Next field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemsResponse) GetNextOk() (*string, bool) {
	if o == nil || o.Next == nil {
		return nil, false
	}
	return o.Next, true
}

// HasNext returns a boolean if a field has been set.
func (o *SystemsResponse) HasNext() bool {
	if o != nil && o.Next != nil {
		return true
	}

	return false
}

// SetNext gets a reference to the given string and assigns it to the Next field.
func (o *SystemsResponse) SetNext(v string) {
	o.Next = &v
}

func (o SystemsResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["systems"] = o.Systems
	}
	if o.Next != nil {
		toSerialize["next"] = o.Next
	}
	return json.Marshal(toSerialize)
}

type NullableSystemsResponse struct {
	value *SystemsResponse
	isSet bool
}

func (v NullableSystemsResponse) Get() *SystemsResponse {
	return v.value
}

func (v *NullableSystemsResponse) Set(val *SystemsResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableSystemsResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableSystemsResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSystemsResponse(val *SystemsResponse) *NullableSystemsResponse {
	return &NullableSystemsResponse{value: val, isSet: true}
}

func (v NullableSystemsResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSystemsResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


