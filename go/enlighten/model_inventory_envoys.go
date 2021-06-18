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

// InventoryEnvoys struct for InventoryEnvoys
type InventoryEnvoys struct {
	Sn string `json:"sn"`
	Model string `json:"model"`
	Sku string `json:"sku"`
}

// NewInventoryEnvoys instantiates a new InventoryEnvoys object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInventoryEnvoys(sn string, model string, sku string) *InventoryEnvoys {
	this := InventoryEnvoys{}
	this.Sn = sn
	this.Model = model
	this.Sku = sku
	return &this
}

// NewInventoryEnvoysWithDefaults instantiates a new InventoryEnvoys object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInventoryEnvoysWithDefaults() *InventoryEnvoys {
	this := InventoryEnvoys{}
	return &this
}

// GetSn returns the Sn field value
func (o *InventoryEnvoys) GetSn() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Sn
}

// GetSnOk returns a tuple with the Sn field value
// and a boolean to check if the value has been set.
func (o *InventoryEnvoys) GetSnOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Sn, true
}

// SetSn sets field value
func (o *InventoryEnvoys) SetSn(v string) {
	o.Sn = v
}

// GetModel returns the Model field value
func (o *InventoryEnvoys) GetModel() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Model
}

// GetModelOk returns a tuple with the Model field value
// and a boolean to check if the value has been set.
func (o *InventoryEnvoys) GetModelOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Model, true
}

// SetModel sets field value
func (o *InventoryEnvoys) SetModel(v string) {
	o.Model = v
}

// GetSku returns the Sku field value
func (o *InventoryEnvoys) GetSku() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Sku
}

// GetSkuOk returns a tuple with the Sku field value
// and a boolean to check if the value has been set.
func (o *InventoryEnvoys) GetSkuOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Sku, true
}

// SetSku sets field value
func (o *InventoryEnvoys) SetSku(v string) {
	o.Sku = v
}

func (o InventoryEnvoys) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["sn"] = o.Sn
	}
	if true {
		toSerialize["model"] = o.Model
	}
	if true {
		toSerialize["sku"] = o.Sku
	}
	return json.Marshal(toSerialize)
}

type NullableInventoryEnvoys struct {
	value *InventoryEnvoys
	isSet bool
}

func (v NullableInventoryEnvoys) Get() *InventoryEnvoys {
	return v.value
}

func (v *NullableInventoryEnvoys) Set(val *InventoryEnvoys) {
	v.value = val
	v.isSet = true
}

func (v NullableInventoryEnvoys) IsSet() bool {
	return v.isSet
}

func (v *NullableInventoryEnvoys) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInventoryEnvoys(val *InventoryEnvoys) *NullableInventoryEnvoys {
	return &NullableInventoryEnvoys{value: val, isSet: true}
}

func (v NullableInventoryEnvoys) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInventoryEnvoys) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


