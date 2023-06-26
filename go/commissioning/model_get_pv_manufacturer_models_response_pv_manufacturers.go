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

// checks if the GetPvManufacturerModelsResponsePvManufacturers type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetPvManufacturerModelsResponsePvManufacturers{}

// GetPvManufacturerModelsResponsePvManufacturers Information about the manufacturer whose PV module models are in the response.
type GetPvManufacturerModelsResponsePvManufacturers struct {
	// Pv manufacturer ID.
	PvManufacturerId *int32 `json:"pv_manufacturer_id,omitempty"`
	// Name of the Pv manufacturer.
	Name *string `json:"name,omitempty"`
}

// NewGetPvManufacturerModelsResponsePvManufacturers instantiates a new GetPvManufacturerModelsResponsePvManufacturers object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetPvManufacturerModelsResponsePvManufacturers() *GetPvManufacturerModelsResponsePvManufacturers {
	this := GetPvManufacturerModelsResponsePvManufacturers{}
	return &this
}

// NewGetPvManufacturerModelsResponsePvManufacturersWithDefaults instantiates a new GetPvManufacturerModelsResponsePvManufacturers object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetPvManufacturerModelsResponsePvManufacturersWithDefaults() *GetPvManufacturerModelsResponsePvManufacturers {
	this := GetPvManufacturerModelsResponsePvManufacturers{}
	return &this
}

// GetPvManufacturerId returns the PvManufacturerId field value if set, zero value otherwise.
func (o *GetPvManufacturerModelsResponsePvManufacturers) GetPvManufacturerId() int32 {
	if o == nil || IsNil(o.PvManufacturerId) {
		var ret int32
		return ret
	}
	return *o.PvManufacturerId
}

// GetPvManufacturerIdOk returns a tuple with the PvManufacturerId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetPvManufacturerModelsResponsePvManufacturers) GetPvManufacturerIdOk() (*int32, bool) {
	if o == nil || IsNil(o.PvManufacturerId) {
		return nil, false
	}
	return o.PvManufacturerId, true
}

// HasPvManufacturerId returns a boolean if a field has been set.
func (o *GetPvManufacturerModelsResponsePvManufacturers) HasPvManufacturerId() bool {
	if o != nil && !IsNil(o.PvManufacturerId) {
		return true
	}

	return false
}

// SetPvManufacturerId gets a reference to the given int32 and assigns it to the PvManufacturerId field.
func (o *GetPvManufacturerModelsResponsePvManufacturers) SetPvManufacturerId(v int32) {
	o.PvManufacturerId = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *GetPvManufacturerModelsResponsePvManufacturers) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetPvManufacturerModelsResponsePvManufacturers) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *GetPvManufacturerModelsResponsePvManufacturers) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *GetPvManufacturerModelsResponsePvManufacturers) SetName(v string) {
	o.Name = &v
}

func (o GetPvManufacturerModelsResponsePvManufacturers) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetPvManufacturerModelsResponsePvManufacturers) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PvManufacturerId) {
		toSerialize["pv_manufacturer_id"] = o.PvManufacturerId
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	return toSerialize, nil
}

type NullableGetPvManufacturerModelsResponsePvManufacturers struct {
	value *GetPvManufacturerModelsResponsePvManufacturers
	isSet bool
}

func (v NullableGetPvManufacturerModelsResponsePvManufacturers) Get() *GetPvManufacturerModelsResponsePvManufacturers {
	return v.value
}

func (v *NullableGetPvManufacturerModelsResponsePvManufacturers) Set(val *GetPvManufacturerModelsResponsePvManufacturers) {
	v.value = val
	v.isSet = true
}

func (v NullableGetPvManufacturerModelsResponsePvManufacturers) IsSet() bool {
	return v.isSet
}

func (v *NullableGetPvManufacturerModelsResponsePvManufacturers) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetPvManufacturerModelsResponsePvManufacturers(val *GetPvManufacturerModelsResponsePvManufacturers) *NullableGetPvManufacturerModelsResponsePvManufacturers {
	return &NullableGetPvManufacturerModelsResponsePvManufacturers{value: val, isSet: true}
}

func (v NullableGetPvManufacturerModelsResponsePvManufacturers) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetPvManufacturerModelsResponsePvManufacturers) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


