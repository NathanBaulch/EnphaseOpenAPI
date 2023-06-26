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

// checks if the TooManyRequestsError type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TooManyRequestsError{}

// TooManyRequestsError struct for TooManyRequestsError
type TooManyRequestsError struct {
	// Response code.
	Reason *string `json:"reason,omitempty"`
	Message []string `json:"message,omitempty"`
	// Quota exceeded for minute/month.
	Period *string `json:"period,omitempty"`
	// Starting period timestamp.
	PeriodStart *int32 `json:"period_start,omitempty"`
	// Ending period timestamp.
	PeriodEnd *int32 `json:"period_end,omitempty"`
	// Limit count for the period.
	Limit *int32 `json:"limit,omitempty"`
}

// NewTooManyRequestsError instantiates a new TooManyRequestsError object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTooManyRequestsError() *TooManyRequestsError {
	this := TooManyRequestsError{}
	return &this
}

// NewTooManyRequestsErrorWithDefaults instantiates a new TooManyRequestsError object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTooManyRequestsErrorWithDefaults() *TooManyRequestsError {
	this := TooManyRequestsError{}
	return &this
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *TooManyRequestsError) GetReason() string {
	if o == nil || IsNil(o.Reason) {
		var ret string
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TooManyRequestsError) GetReasonOk() (*string, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *TooManyRequestsError) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given string and assigns it to the Reason field.
func (o *TooManyRequestsError) SetReason(v string) {
	o.Reason = &v
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *TooManyRequestsError) GetMessage() []string {
	if o == nil || IsNil(o.Message) {
		var ret []string
		return ret
	}
	return o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TooManyRequestsError) GetMessageOk() ([]string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *TooManyRequestsError) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given []string and assigns it to the Message field.
func (o *TooManyRequestsError) SetMessage(v []string) {
	o.Message = v
}

// GetPeriod returns the Period field value if set, zero value otherwise.
func (o *TooManyRequestsError) GetPeriod() string {
	if o == nil || IsNil(o.Period) {
		var ret string
		return ret
	}
	return *o.Period
}

// GetPeriodOk returns a tuple with the Period field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TooManyRequestsError) GetPeriodOk() (*string, bool) {
	if o == nil || IsNil(o.Period) {
		return nil, false
	}
	return o.Period, true
}

// HasPeriod returns a boolean if a field has been set.
func (o *TooManyRequestsError) HasPeriod() bool {
	if o != nil && !IsNil(o.Period) {
		return true
	}

	return false
}

// SetPeriod gets a reference to the given string and assigns it to the Period field.
func (o *TooManyRequestsError) SetPeriod(v string) {
	o.Period = &v
}

// GetPeriodStart returns the PeriodStart field value if set, zero value otherwise.
func (o *TooManyRequestsError) GetPeriodStart() int32 {
	if o == nil || IsNil(o.PeriodStart) {
		var ret int32
		return ret
	}
	return *o.PeriodStart
}

// GetPeriodStartOk returns a tuple with the PeriodStart field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TooManyRequestsError) GetPeriodStartOk() (*int32, bool) {
	if o == nil || IsNil(o.PeriodStart) {
		return nil, false
	}
	return o.PeriodStart, true
}

// HasPeriodStart returns a boolean if a field has been set.
func (o *TooManyRequestsError) HasPeriodStart() bool {
	if o != nil && !IsNil(o.PeriodStart) {
		return true
	}

	return false
}

// SetPeriodStart gets a reference to the given int32 and assigns it to the PeriodStart field.
func (o *TooManyRequestsError) SetPeriodStart(v int32) {
	o.PeriodStart = &v
}

// GetPeriodEnd returns the PeriodEnd field value if set, zero value otherwise.
func (o *TooManyRequestsError) GetPeriodEnd() int32 {
	if o == nil || IsNil(o.PeriodEnd) {
		var ret int32
		return ret
	}
	return *o.PeriodEnd
}

// GetPeriodEndOk returns a tuple with the PeriodEnd field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TooManyRequestsError) GetPeriodEndOk() (*int32, bool) {
	if o == nil || IsNil(o.PeriodEnd) {
		return nil, false
	}
	return o.PeriodEnd, true
}

// HasPeriodEnd returns a boolean if a field has been set.
func (o *TooManyRequestsError) HasPeriodEnd() bool {
	if o != nil && !IsNil(o.PeriodEnd) {
		return true
	}

	return false
}

// SetPeriodEnd gets a reference to the given int32 and assigns it to the PeriodEnd field.
func (o *TooManyRequestsError) SetPeriodEnd(v int32) {
	o.PeriodEnd = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *TooManyRequestsError) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TooManyRequestsError) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *TooManyRequestsError) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *TooManyRequestsError) SetLimit(v int32) {
	o.Limit = &v
}

func (o TooManyRequestsError) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TooManyRequestsError) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	if !IsNil(o.Message) {
		toSerialize["message"] = o.Message
	}
	if !IsNil(o.Period) {
		toSerialize["period"] = o.Period
	}
	if !IsNil(o.PeriodStart) {
		toSerialize["period_start"] = o.PeriodStart
	}
	if !IsNil(o.PeriodEnd) {
		toSerialize["period_end"] = o.PeriodEnd
	}
	if !IsNil(o.Limit) {
		toSerialize["limit"] = o.Limit
	}
	return toSerialize, nil
}

type NullableTooManyRequestsError struct {
	value *TooManyRequestsError
	isSet bool
}

func (v NullableTooManyRequestsError) Get() *TooManyRequestsError {
	return v.value
}

func (v *NullableTooManyRequestsError) Set(val *TooManyRequestsError) {
	v.value = val
	v.isSet = true
}

func (v NullableTooManyRequestsError) IsSet() bool {
	return v.isSet
}

func (v *NullableTooManyRequestsError) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTooManyRequestsError(val *TooManyRequestsError) *NullableTooManyRequestsError {
	return &NullableTooManyRequestsError{value: val, isSet: true}
}

func (v NullableTooManyRequestsError) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTooManyRequestsError) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


