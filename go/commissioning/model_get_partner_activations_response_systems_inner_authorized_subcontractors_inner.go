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

// checks if the GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner{}

// GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner struct for GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner
type GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner struct {
	// The Enlighten ID of the sub-contractor of this system. System-generated.
	AuthorizedSubcontractorId *int32 `json:"authorized_subcontractor_id,omitempty"`
	// Name of the sub-contractor of this system.
	AuthorizedSubcontractorName *string `json:"authorized_subcontractor_name,omitempty"`
	// Current status of the subcontractor for the site. This field will be shown only for pending and rejected sub-contractors.
	Status *string `json:"status,omitempty"`
}

// NewGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner instantiates a new GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner() *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner {
	this := GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner{}
	return &this
}

// NewGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInnerWithDefaults instantiates a new GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInnerWithDefaults() *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner {
	this := GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner{}
	return &this
}

// GetAuthorizedSubcontractorId returns the AuthorizedSubcontractorId field value if set, zero value otherwise.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) GetAuthorizedSubcontractorId() int32 {
	if o == nil || IsNil(o.AuthorizedSubcontractorId) {
		var ret int32
		return ret
	}
	return *o.AuthorizedSubcontractorId
}

// GetAuthorizedSubcontractorIdOk returns a tuple with the AuthorizedSubcontractorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) GetAuthorizedSubcontractorIdOk() (*int32, bool) {
	if o == nil || IsNil(o.AuthorizedSubcontractorId) {
		return nil, false
	}
	return o.AuthorizedSubcontractorId, true
}

// HasAuthorizedSubcontractorId returns a boolean if a field has been set.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) HasAuthorizedSubcontractorId() bool {
	if o != nil && !IsNil(o.AuthorizedSubcontractorId) {
		return true
	}

	return false
}

// SetAuthorizedSubcontractorId gets a reference to the given int32 and assigns it to the AuthorizedSubcontractorId field.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) SetAuthorizedSubcontractorId(v int32) {
	o.AuthorizedSubcontractorId = &v
}

// GetAuthorizedSubcontractorName returns the AuthorizedSubcontractorName field value if set, zero value otherwise.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) GetAuthorizedSubcontractorName() string {
	if o == nil || IsNil(o.AuthorizedSubcontractorName) {
		var ret string
		return ret
	}
	return *o.AuthorizedSubcontractorName
}

// GetAuthorizedSubcontractorNameOk returns a tuple with the AuthorizedSubcontractorName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) GetAuthorizedSubcontractorNameOk() (*string, bool) {
	if o == nil || IsNil(o.AuthorizedSubcontractorName) {
		return nil, false
	}
	return o.AuthorizedSubcontractorName, true
}

// HasAuthorizedSubcontractorName returns a boolean if a field has been set.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) HasAuthorizedSubcontractorName() bool {
	if o != nil && !IsNil(o.AuthorizedSubcontractorName) {
		return true
	}

	return false
}

// SetAuthorizedSubcontractorName gets a reference to the given string and assigns it to the AuthorizedSubcontractorName field.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) SetAuthorizedSubcontractorName(v string) {
	o.AuthorizedSubcontractorName = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) SetStatus(v string) {
	o.Status = &v
}

func (o GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AuthorizedSubcontractorId) {
		toSerialize["authorized_subcontractor_id"] = o.AuthorizedSubcontractorId
	}
	if !IsNil(o.AuthorizedSubcontractorName) {
		toSerialize["authorized_subcontractor_name"] = o.AuthorizedSubcontractorName
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner struct {
	value *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner
	isSet bool
}

func (v NullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) Get() *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner {
	return v.value
}

func (v *NullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) Set(val *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner(val *GetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) *NullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner {
	return &NullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner{value: val, isSet: true}
}

func (v NullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetPartnerActivationsResponseSystemsInnerAuthorizedSubcontractorsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

