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

// checks if the SystemEstimate type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SystemEstimate{}

// SystemEstimate struct for SystemEstimate
type SystemEstimate struct {
	// System this estimate is for.
	SystemId *int32 `json:"system_id,omitempty"`
	// Annual production degradation factor for the system, from year 0 of the system's life. Must be 0.0% or higher. Default 0.5%.
	DegradeFactor *string `json:"degrade_factor,omitempty"`
	// Estimated monthly production of the system, in kWh. A value for each month must be provided, and must be greater than 0. Send an empty array if you need to remove monthly estimates. Default empty array.
	MonthEstimates []string `json:"month_estimates,omitempty"`
}

// NewSystemEstimate instantiates a new SystemEstimate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSystemEstimate() *SystemEstimate {
	this := SystemEstimate{}
	return &this
}

// NewSystemEstimateWithDefaults instantiates a new SystemEstimate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSystemEstimateWithDefaults() *SystemEstimate {
	this := SystemEstimate{}
	return &this
}

// GetSystemId returns the SystemId field value if set, zero value otherwise.
func (o *SystemEstimate) GetSystemId() int32 {
	if o == nil || IsNil(o.SystemId) {
		var ret int32
		return ret
	}
	return *o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemEstimate) GetSystemIdOk() (*int32, bool) {
	if o == nil || IsNil(o.SystemId) {
		return nil, false
	}
	return o.SystemId, true
}

// HasSystemId returns a boolean if a field has been set.
func (o *SystemEstimate) HasSystemId() bool {
	if o != nil && !IsNil(o.SystemId) {
		return true
	}

	return false
}

// SetSystemId gets a reference to the given int32 and assigns it to the SystemId field.
func (o *SystemEstimate) SetSystemId(v int32) {
	o.SystemId = &v
}

// GetDegradeFactor returns the DegradeFactor field value if set, zero value otherwise.
func (o *SystemEstimate) GetDegradeFactor() string {
	if o == nil || IsNil(o.DegradeFactor) {
		var ret string
		return ret
	}
	return *o.DegradeFactor
}

// GetDegradeFactorOk returns a tuple with the DegradeFactor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemEstimate) GetDegradeFactorOk() (*string, bool) {
	if o == nil || IsNil(o.DegradeFactor) {
		return nil, false
	}
	return o.DegradeFactor, true
}

// HasDegradeFactor returns a boolean if a field has been set.
func (o *SystemEstimate) HasDegradeFactor() bool {
	if o != nil && !IsNil(o.DegradeFactor) {
		return true
	}

	return false
}

// SetDegradeFactor gets a reference to the given string and assigns it to the DegradeFactor field.
func (o *SystemEstimate) SetDegradeFactor(v string) {
	o.DegradeFactor = &v
}

// GetMonthEstimates returns the MonthEstimates field value if set, zero value otherwise.
func (o *SystemEstimate) GetMonthEstimates() []string {
	if o == nil || IsNil(o.MonthEstimates) {
		var ret []string
		return ret
	}
	return o.MonthEstimates
}

// GetMonthEstimatesOk returns a tuple with the MonthEstimates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemEstimate) GetMonthEstimatesOk() ([]string, bool) {
	if o == nil || IsNil(o.MonthEstimates) {
		return nil, false
	}
	return o.MonthEstimates, true
}

// HasMonthEstimates returns a boolean if a field has been set.
func (o *SystemEstimate) HasMonthEstimates() bool {
	if o != nil && !IsNil(o.MonthEstimates) {
		return true
	}

	return false
}

// SetMonthEstimates gets a reference to the given []string and assigns it to the MonthEstimates field.
func (o *SystemEstimate) SetMonthEstimates(v []string) {
	o.MonthEstimates = v
}

func (o SystemEstimate) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SystemEstimate) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.SystemId) {
		toSerialize["system_id"] = o.SystemId
	}
	if !IsNil(o.DegradeFactor) {
		toSerialize["degrade_factor"] = o.DegradeFactor
	}
	if !IsNil(o.MonthEstimates) {
		toSerialize["month_estimates"] = o.MonthEstimates
	}
	return toSerialize, nil
}

type NullableSystemEstimate struct {
	value *SystemEstimate
	isSet bool
}

func (v NullableSystemEstimate) Get() *SystemEstimate {
	return v.value
}

func (v *NullableSystemEstimate) Set(val *SystemEstimate) {
	v.value = val
	v.isSet = true
}

func (v NullableSystemEstimate) IsSet() bool {
	return v.isSet
}

func (v *NullableSystemEstimate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSystemEstimate(val *SystemEstimate) *NullableSystemEstimate {
	return &NullableSystemEstimate{value: val, isSet: true}
}

func (v NullableSystemEstimate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSystemEstimate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

