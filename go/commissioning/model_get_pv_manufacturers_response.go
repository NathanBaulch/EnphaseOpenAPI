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

// checks if the GetPvManufacturersResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetPvManufacturersResponse{}

// GetPvManufacturersResponse struct for GetPvManufacturersResponse
type GetPvManufacturersResponse struct {
	// A list of PV manufacturers. Each element in the list is an array including the model's manufacturer's primary key and name. The list may be empty.
	PvManufacturers [][]GetCompanyUsersResponseUsersInner `json:"pv_manufacturers,omitempty"`
}

// NewGetPvManufacturersResponse instantiates a new GetPvManufacturersResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetPvManufacturersResponse() *GetPvManufacturersResponse {
	this := GetPvManufacturersResponse{}
	return &this
}

// NewGetPvManufacturersResponseWithDefaults instantiates a new GetPvManufacturersResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetPvManufacturersResponseWithDefaults() *GetPvManufacturersResponse {
	this := GetPvManufacturersResponse{}
	return &this
}

// GetPvManufacturers returns the PvManufacturers field value if set, zero value otherwise.
func (o *GetPvManufacturersResponse) GetPvManufacturers() [][]GetCompanyUsersResponseUsersInner {
	if o == nil || IsNil(o.PvManufacturers) {
		var ret [][]GetCompanyUsersResponseUsersInner
		return ret
	}
	return o.PvManufacturers
}

// GetPvManufacturersOk returns a tuple with the PvManufacturers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetPvManufacturersResponse) GetPvManufacturersOk() ([][]GetCompanyUsersResponseUsersInner, bool) {
	if o == nil || IsNil(o.PvManufacturers) {
		return nil, false
	}
	return o.PvManufacturers, true
}

// HasPvManufacturers returns a boolean if a field has been set.
func (o *GetPvManufacturersResponse) HasPvManufacturers() bool {
	if o != nil && !IsNil(o.PvManufacturers) {
		return true
	}

	return false
}

// SetPvManufacturers gets a reference to the given [][]GetCompanyUsersResponseUsersInner and assigns it to the PvManufacturers field.
func (o *GetPvManufacturersResponse) SetPvManufacturers(v [][]GetCompanyUsersResponseUsersInner) {
	o.PvManufacturers = v
}

func (o GetPvManufacturersResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetPvManufacturersResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PvManufacturers) {
		toSerialize["pv_manufacturers"] = o.PvManufacturers
	}
	return toSerialize, nil
}

type NullableGetPvManufacturersResponse struct {
	value *GetPvManufacturersResponse
	isSet bool
}

func (v NullableGetPvManufacturersResponse) Get() *GetPvManufacturersResponse {
	return v.value
}

func (v *NullableGetPvManufacturersResponse) Set(val *GetPvManufacturersResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableGetPvManufacturersResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableGetPvManufacturersResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetPvManufacturersResponse(val *GetPvManufacturersResponse) *NullableGetPvManufacturersResponse {
	return &NullableGetPvManufacturersResponse{value: val, isSet: true}
}

func (v NullableGetPvManufacturersResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetPvManufacturersResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

