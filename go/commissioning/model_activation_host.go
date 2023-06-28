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

// checks if the ActivationHost type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ActivationHost{}

// ActivationHost Name of the system host. If the query parameter 'expand=host' passed in the request host detail will appear in the response.
type ActivationHost struct {
	FirstName *string `json:"first_name,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	Email *string `json:"email,omitempty"`
	Phone *string `json:"phone,omitempty"`
	// Whether the user is allowed to log in to Enlighten. Values true, false. Default true.
	Active *bool `json:"active,omitempty"`
	UserId *int32 `json:"user_id,omitempty"`
	// What type of user this is in Enlighten. For self installer user user_roles will be ['self_installer']. For other users user_roles will be empty.
	UserRoles []UserRoleEnum `json:"user_roles,omitempty"`
	EnlightenEmails *bool `json:"enlighten_emails,omitempty"`
	EnlightenView *string `json:"enlighten_view,omitempty"`
	Uri *string `json:"uri,omitempty"`
	UpdatedAt *int64 `json:"updated_at,omitempty"`
	Company *ActivationHostCompany `json:"company,omitempty"`
}

// NewActivationHost instantiates a new ActivationHost object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActivationHost() *ActivationHost {
	this := ActivationHost{}
	return &this
}

// NewActivationHostWithDefaults instantiates a new ActivationHost object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActivationHostWithDefaults() *ActivationHost {
	this := ActivationHost{}
	return &this
}

// GetFirstName returns the FirstName field value if set, zero value otherwise.
func (o *ActivationHost) GetFirstName() string {
	if o == nil || IsNil(o.FirstName) {
		var ret string
		return ret
	}
	return *o.FirstName
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetFirstNameOk() (*string, bool) {
	if o == nil || IsNil(o.FirstName) {
		return nil, false
	}
	return o.FirstName, true
}

// HasFirstName returns a boolean if a field has been set.
func (o *ActivationHost) HasFirstName() bool {
	if o != nil && !IsNil(o.FirstName) {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given string and assigns it to the FirstName field.
func (o *ActivationHost) SetFirstName(v string) {
	o.FirstName = &v
}

// GetLastName returns the LastName field value if set, zero value otherwise.
func (o *ActivationHost) GetLastName() string {
	if o == nil || IsNil(o.LastName) {
		var ret string
		return ret
	}
	return *o.LastName
}

// GetLastNameOk returns a tuple with the LastName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetLastNameOk() (*string, bool) {
	if o == nil || IsNil(o.LastName) {
		return nil, false
	}
	return o.LastName, true
}

// HasLastName returns a boolean if a field has been set.
func (o *ActivationHost) HasLastName() bool {
	if o != nil && !IsNil(o.LastName) {
		return true
	}

	return false
}

// SetLastName gets a reference to the given string and assigns it to the LastName field.
func (o *ActivationHost) SetLastName(v string) {
	o.LastName = &v
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *ActivationHost) GetEmail() string {
	if o == nil || IsNil(o.Email) {
		var ret string
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetEmailOk() (*string, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *ActivationHost) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given string and assigns it to the Email field.
func (o *ActivationHost) SetEmail(v string) {
	o.Email = &v
}

// GetPhone returns the Phone field value if set, zero value otherwise.
func (o *ActivationHost) GetPhone() string {
	if o == nil || IsNil(o.Phone) {
		var ret string
		return ret
	}
	return *o.Phone
}

// GetPhoneOk returns a tuple with the Phone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetPhoneOk() (*string, bool) {
	if o == nil || IsNil(o.Phone) {
		return nil, false
	}
	return o.Phone, true
}

// HasPhone returns a boolean if a field has been set.
func (o *ActivationHost) HasPhone() bool {
	if o != nil && !IsNil(o.Phone) {
		return true
	}

	return false
}

// SetPhone gets a reference to the given string and assigns it to the Phone field.
func (o *ActivationHost) SetPhone(v string) {
	o.Phone = &v
}

// GetActive returns the Active field value if set, zero value otherwise.
func (o *ActivationHost) GetActive() bool {
	if o == nil || IsNil(o.Active) {
		var ret bool
		return ret
	}
	return *o.Active
}

// GetActiveOk returns a tuple with the Active field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetActiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Active) {
		return nil, false
	}
	return o.Active, true
}

// HasActive returns a boolean if a field has been set.
func (o *ActivationHost) HasActive() bool {
	if o != nil && !IsNil(o.Active) {
		return true
	}

	return false
}

// SetActive gets a reference to the given bool and assigns it to the Active field.
func (o *ActivationHost) SetActive(v bool) {
	o.Active = &v
}

// GetUserId returns the UserId field value if set, zero value otherwise.
func (o *ActivationHost) GetUserId() int32 {
	if o == nil || IsNil(o.UserId) {
		var ret int32
		return ret
	}
	return *o.UserId
}

// GetUserIdOk returns a tuple with the UserId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetUserIdOk() (*int32, bool) {
	if o == nil || IsNil(o.UserId) {
		return nil, false
	}
	return o.UserId, true
}

// HasUserId returns a boolean if a field has been set.
func (o *ActivationHost) HasUserId() bool {
	if o != nil && !IsNil(o.UserId) {
		return true
	}

	return false
}

// SetUserId gets a reference to the given int32 and assigns it to the UserId field.
func (o *ActivationHost) SetUserId(v int32) {
	o.UserId = &v
}

// GetUserRoles returns the UserRoles field value if set, zero value otherwise.
func (o *ActivationHost) GetUserRoles() []UserRoleEnum {
	if o == nil || IsNil(o.UserRoles) {
		var ret []UserRoleEnum
		return ret
	}
	return o.UserRoles
}

// GetUserRolesOk returns a tuple with the UserRoles field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetUserRolesOk() ([]UserRoleEnum, bool) {
	if o == nil || IsNil(o.UserRoles) {
		return nil, false
	}
	return o.UserRoles, true
}

// HasUserRoles returns a boolean if a field has been set.
func (o *ActivationHost) HasUserRoles() bool {
	if o != nil && !IsNil(o.UserRoles) {
		return true
	}

	return false
}

// SetUserRoles gets a reference to the given []UserRoleEnum and assigns it to the UserRoles field.
func (o *ActivationHost) SetUserRoles(v []UserRoleEnum) {
	o.UserRoles = v
}

// GetEnlightenEmails returns the EnlightenEmails field value if set, zero value otherwise.
func (o *ActivationHost) GetEnlightenEmails() bool {
	if o == nil || IsNil(o.EnlightenEmails) {
		var ret bool
		return ret
	}
	return *o.EnlightenEmails
}

// GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetEnlightenEmailsOk() (*bool, bool) {
	if o == nil || IsNil(o.EnlightenEmails) {
		return nil, false
	}
	return o.EnlightenEmails, true
}

// HasEnlightenEmails returns a boolean if a field has been set.
func (o *ActivationHost) HasEnlightenEmails() bool {
	if o != nil && !IsNil(o.EnlightenEmails) {
		return true
	}

	return false
}

// SetEnlightenEmails gets a reference to the given bool and assigns it to the EnlightenEmails field.
func (o *ActivationHost) SetEnlightenEmails(v bool) {
	o.EnlightenEmails = &v
}

// GetEnlightenView returns the EnlightenView field value if set, zero value otherwise.
func (o *ActivationHost) GetEnlightenView() string {
	if o == nil || IsNil(o.EnlightenView) {
		var ret string
		return ret
	}
	return *o.EnlightenView
}

// GetEnlightenViewOk returns a tuple with the EnlightenView field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetEnlightenViewOk() (*string, bool) {
	if o == nil || IsNil(o.EnlightenView) {
		return nil, false
	}
	return o.EnlightenView, true
}

// HasEnlightenView returns a boolean if a field has been set.
func (o *ActivationHost) HasEnlightenView() bool {
	if o != nil && !IsNil(o.EnlightenView) {
		return true
	}

	return false
}

// SetEnlightenView gets a reference to the given string and assigns it to the EnlightenView field.
func (o *ActivationHost) SetEnlightenView(v string) {
	o.EnlightenView = &v
}

// GetUri returns the Uri field value if set, zero value otherwise.
func (o *ActivationHost) GetUri() string {
	if o == nil || IsNil(o.Uri) {
		var ret string
		return ret
	}
	return *o.Uri
}

// GetUriOk returns a tuple with the Uri field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetUriOk() (*string, bool) {
	if o == nil || IsNil(o.Uri) {
		return nil, false
	}
	return o.Uri, true
}

// HasUri returns a boolean if a field has been set.
func (o *ActivationHost) HasUri() bool {
	if o != nil && !IsNil(o.Uri) {
		return true
	}

	return false
}

// SetUri gets a reference to the given string and assigns it to the Uri field.
func (o *ActivationHost) SetUri(v string) {
	o.Uri = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *ActivationHost) GetUpdatedAt() int64 {
	if o == nil || IsNil(o.UpdatedAt) {
		var ret int64
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetUpdatedAtOk() (*int64, bool) {
	if o == nil || IsNil(o.UpdatedAt) {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *ActivationHost) HasUpdatedAt() bool {
	if o != nil && !IsNil(o.UpdatedAt) {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given int64 and assigns it to the UpdatedAt field.
func (o *ActivationHost) SetUpdatedAt(v int64) {
	o.UpdatedAt = &v
}

// GetCompany returns the Company field value if set, zero value otherwise.
func (o *ActivationHost) GetCompany() ActivationHostCompany {
	if o == nil || IsNil(o.Company) {
		var ret ActivationHostCompany
		return ret
	}
	return *o.Company
}

// GetCompanyOk returns a tuple with the Company field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivationHost) GetCompanyOk() (*ActivationHostCompany, bool) {
	if o == nil || IsNil(o.Company) {
		return nil, false
	}
	return o.Company, true
}

// HasCompany returns a boolean if a field has been set.
func (o *ActivationHost) HasCompany() bool {
	if o != nil && !IsNil(o.Company) {
		return true
	}

	return false
}

// SetCompany gets a reference to the given ActivationHostCompany and assigns it to the Company field.
func (o *ActivationHost) SetCompany(v ActivationHostCompany) {
	o.Company = &v
}

func (o ActivationHost) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ActivationHost) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FirstName) {
		toSerialize["first_name"] = o.FirstName
	}
	if !IsNil(o.LastName) {
		toSerialize["last_name"] = o.LastName
	}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.Phone) {
		toSerialize["phone"] = o.Phone
	}
	if !IsNil(o.Active) {
		toSerialize["active"] = o.Active
	}
	if !IsNil(o.UserId) {
		toSerialize["user_id"] = o.UserId
	}
	if !IsNil(o.UserRoles) {
		toSerialize["user_roles"] = o.UserRoles
	}
	if !IsNil(o.EnlightenEmails) {
		toSerialize["enlighten_emails"] = o.EnlightenEmails
	}
	if !IsNil(o.EnlightenView) {
		toSerialize["enlighten_view"] = o.EnlightenView
	}
	if !IsNil(o.Uri) {
		toSerialize["uri"] = o.Uri
	}
	if !IsNil(o.UpdatedAt) {
		toSerialize["updated_at"] = o.UpdatedAt
	}
	if !IsNil(o.Company) {
		toSerialize["company"] = o.Company
	}
	return toSerialize, nil
}

type NullableActivationHost struct {
	value *ActivationHost
	isSet bool
}

func (v NullableActivationHost) Get() *ActivationHost {
	return v.value
}

func (v *NullableActivationHost) Set(val *ActivationHost) {
	v.value = val
	v.isSet = true
}

func (v NullableActivationHost) IsSet() bool {
	return v.isSet
}

func (v *NullableActivationHost) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivationHost(val *ActivationHost) *NullableActivationHost {
	return &NullableActivationHost{value: val, isSet: true}
}

func (v NullableActivationHost) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivationHost) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

