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

// checks if the InternalServerError type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InternalServerError{}

// InternalServerError struct for InternalServerError
type InternalServerError struct {
	Reason *string `json:"reason,omitempty"`
	Message []string `json:"message,omitempty"`
}

// NewInternalServerError instantiates a new InternalServerError object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInternalServerError() *InternalServerError {
	this := InternalServerError{}
	return &this
}

// NewInternalServerErrorWithDefaults instantiates a new InternalServerError object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInternalServerErrorWithDefaults() *InternalServerError {
	this := InternalServerError{}
	return &this
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *InternalServerError) GetReason() string {
	if o == nil || IsNil(o.Reason) {
		var ret string
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InternalServerError) GetReasonOk() (*string, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *InternalServerError) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given string and assigns it to the Reason field.
func (o *InternalServerError) SetReason(v string) {
	o.Reason = &v
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *InternalServerError) GetMessage() []string {
	if o == nil || IsNil(o.Message) {
		var ret []string
		return ret
	}
	return o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InternalServerError) GetMessageOk() ([]string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *InternalServerError) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given []string and assigns it to the Message field.
func (o *InternalServerError) SetMessage(v []string) {
	o.Message = v
}

func (o InternalServerError) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InternalServerError) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	if !IsNil(o.Message) {
		toSerialize["message"] = o.Message
	}
	return toSerialize, nil
}

type NullableInternalServerError struct {
	value *InternalServerError
	isSet bool
}

func (v NullableInternalServerError) Get() *InternalServerError {
	return v.value
}

func (v *NullableInternalServerError) Set(val *InternalServerError) {
	v.value = val
	v.isSet = true
}

func (v NullableInternalServerError) IsSet() bool {
	return v.isSet
}

func (v *NullableInternalServerError) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInternalServerError(val *InternalServerError) *NullableInternalServerError {
	return &NullableInternalServerError{value: val, isSet: true}
}

func (v NullableInternalServerError) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInternalServerError) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


