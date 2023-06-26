/*
The Enphase Commissioning API

Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.

API version: 4.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package commissioning

import (
	"encoding/json"
	"fmt"
)

// SystemProductionModeEnum the model 'SystemProductionModeEnum'
type SystemProductionModeEnum string

// List of SystemProductionModeEnum
const (
	SYSTEMPRODUCTIONMODEENUM_TRUE SystemProductionModeEnum = "true"
	SYSTEMPRODUCTIONMODEENUM_FALSE SystemProductionModeEnum = "false"
)

// All allowed values of SystemProductionModeEnum enum
var AllowedSystemProductionModeEnumEnumValues = []SystemProductionModeEnum{
	"true",
	"false",
}

func (v *SystemProductionModeEnum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := SystemProductionModeEnum(value)
	for _, existing := range AllowedSystemProductionModeEnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid SystemProductionModeEnum", value)
}

// NewSystemProductionModeEnumFromValue returns a pointer to a valid SystemProductionModeEnum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewSystemProductionModeEnumFromValue(v string) (*SystemProductionModeEnum, error) {
	ev := SystemProductionModeEnum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for SystemProductionModeEnum: valid values are %v", v, AllowedSystemProductionModeEnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v SystemProductionModeEnum) IsValid() bool {
	for _, existing := range AllowedSystemProductionModeEnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to SystemProductionModeEnum value
func (v SystemProductionModeEnum) Ptr() *SystemProductionModeEnum {
	return &v
}

type NullableSystemProductionModeEnum struct {
	value *SystemProductionModeEnum
	isSet bool
}

func (v NullableSystemProductionModeEnum) Get() *SystemProductionModeEnum {
	return v.value
}

func (v *NullableSystemProductionModeEnum) Set(val *SystemProductionModeEnum) {
	v.value = val
	v.isSet = true
}

func (v NullableSystemProductionModeEnum) IsSet() bool {
	return v.isSet
}

func (v *NullableSystemProductionModeEnum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSystemProductionModeEnum(val *SystemProductionModeEnum) *NullableSystemProductionModeEnum {
	return &NullableSystemProductionModeEnum{value: val, isSet: true}
}

func (v NullableSystemProductionModeEnum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSystemProductionModeEnum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
