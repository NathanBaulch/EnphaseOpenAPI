/*
The Enlighten Systems API

The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.  Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.

API version: 2.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package enlighten

import (
	"encoding/json"
)

// EnergyLifetimeResponse struct for EnergyLifetimeResponse
type EnergyLifetimeResponse struct {
	// When no `start_date` parameter is specified on the request, this is the `operational_date` of the system. May be null if system has never produced. When a `start_date` parameter is included in the request, it is included here in the response.
	StartDate string `json:"start_date"`
	// The identifier of the system.
	SystemId int32 `json:"system_id"`
	// An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty.
	Production []int32 `json:"production"`
	MicroProduction []int32 `json:"micro_production,omitempty"`
	MeterProduction []int32 `json:"meter_production,omitempty"`
	// The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter.
	MeterStartDate *string `json:"meter_start_date,omitempty"`
	Meta Meta `json:"meta"`
}

// NewEnergyLifetimeResponse instantiates a new EnergyLifetimeResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEnergyLifetimeResponse(startDate string, systemId int32, production []int32, meta Meta) *EnergyLifetimeResponse {
	this := EnergyLifetimeResponse{}
	this.StartDate = startDate
	this.SystemId = systemId
	this.Production = production
	this.Meta = meta
	return &this
}

// NewEnergyLifetimeResponseWithDefaults instantiates a new EnergyLifetimeResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEnergyLifetimeResponseWithDefaults() *EnergyLifetimeResponse {
	this := EnergyLifetimeResponse{}
	return &this
}

// GetStartDate returns the StartDate field value
func (o *EnergyLifetimeResponse) GetStartDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value
// and a boolean to check if the value has been set.
func (o *EnergyLifetimeResponse) GetStartDateOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.StartDate, true
}

// SetStartDate sets field value
func (o *EnergyLifetimeResponse) SetStartDate(v string) {
	o.StartDate = v
}

// GetSystemId returns the SystemId field value
func (o *EnergyLifetimeResponse) GetSystemId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SystemId
}

// GetSystemIdOk returns a tuple with the SystemId field value
// and a boolean to check if the value has been set.
func (o *EnergyLifetimeResponse) GetSystemIdOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.SystemId, true
}

// SetSystemId sets field value
func (o *EnergyLifetimeResponse) SetSystemId(v int32) {
	o.SystemId = v
}

// GetProduction returns the Production field value
func (o *EnergyLifetimeResponse) GetProduction() []int32 {
	if o == nil {
		var ret []int32
		return ret
	}

	return o.Production
}

// GetProductionOk returns a tuple with the Production field value
// and a boolean to check if the value has been set.
func (o *EnergyLifetimeResponse) GetProductionOk() ([]int32, bool) {
	if o == nil {
    return nil, false
	}
	return o.Production, true
}

// SetProduction sets field value
func (o *EnergyLifetimeResponse) SetProduction(v []int32) {
	o.Production = v
}

// GetMicroProduction returns the MicroProduction field value if set, zero value otherwise.
func (o *EnergyLifetimeResponse) GetMicroProduction() []int32 {
	if o == nil || isNil(o.MicroProduction) {
		var ret []int32
		return ret
	}
	return o.MicroProduction
}

// GetMicroProductionOk returns a tuple with the MicroProduction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnergyLifetimeResponse) GetMicroProductionOk() ([]int32, bool) {
	if o == nil || isNil(o.MicroProduction) {
    return nil, false
	}
	return o.MicroProduction, true
}

// HasMicroProduction returns a boolean if a field has been set.
func (o *EnergyLifetimeResponse) HasMicroProduction() bool {
	if o != nil && !isNil(o.MicroProduction) {
		return true
	}

	return false
}

// SetMicroProduction gets a reference to the given []int32 and assigns it to the MicroProduction field.
func (o *EnergyLifetimeResponse) SetMicroProduction(v []int32) {
	o.MicroProduction = v
}

// GetMeterProduction returns the MeterProduction field value if set, zero value otherwise.
func (o *EnergyLifetimeResponse) GetMeterProduction() []int32 {
	if o == nil || isNil(o.MeterProduction) {
		var ret []int32
		return ret
	}
	return o.MeterProduction
}

// GetMeterProductionOk returns a tuple with the MeterProduction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnergyLifetimeResponse) GetMeterProductionOk() ([]int32, bool) {
	if o == nil || isNil(o.MeterProduction) {
    return nil, false
	}
	return o.MeterProduction, true
}

// HasMeterProduction returns a boolean if a field has been set.
func (o *EnergyLifetimeResponse) HasMeterProduction() bool {
	if o != nil && !isNil(o.MeterProduction) {
		return true
	}

	return false
}

// SetMeterProduction gets a reference to the given []int32 and assigns it to the MeterProduction field.
func (o *EnergyLifetimeResponse) SetMeterProduction(v []int32) {
	o.MeterProduction = v
}

// GetMeterStartDate returns the MeterStartDate field value if set, zero value otherwise.
func (o *EnergyLifetimeResponse) GetMeterStartDate() string {
	if o == nil || isNil(o.MeterStartDate) {
		var ret string
		return ret
	}
	return *o.MeterStartDate
}

// GetMeterStartDateOk returns a tuple with the MeterStartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnergyLifetimeResponse) GetMeterStartDateOk() (*string, bool) {
	if o == nil || isNil(o.MeterStartDate) {
    return nil, false
	}
	return o.MeterStartDate, true
}

// HasMeterStartDate returns a boolean if a field has been set.
func (o *EnergyLifetimeResponse) HasMeterStartDate() bool {
	if o != nil && !isNil(o.MeterStartDate) {
		return true
	}

	return false
}

// SetMeterStartDate gets a reference to the given string and assigns it to the MeterStartDate field.
func (o *EnergyLifetimeResponse) SetMeterStartDate(v string) {
	o.MeterStartDate = &v
}

// GetMeta returns the Meta field value
func (o *EnergyLifetimeResponse) GetMeta() Meta {
	if o == nil {
		var ret Meta
		return ret
	}

	return o.Meta
}

// GetMetaOk returns a tuple with the Meta field value
// and a boolean to check if the value has been set.
func (o *EnergyLifetimeResponse) GetMetaOk() (*Meta, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Meta, true
}

// SetMeta sets field value
func (o *EnergyLifetimeResponse) SetMeta(v Meta) {
	o.Meta = v
}

func (o EnergyLifetimeResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["start_date"] = o.StartDate
	}
	if true {
		toSerialize["system_id"] = o.SystemId
	}
	if true {
		toSerialize["production"] = o.Production
	}
	if !isNil(o.MicroProduction) {
		toSerialize["micro_production"] = o.MicroProduction
	}
	if !isNil(o.MeterProduction) {
		toSerialize["meter_production"] = o.MeterProduction
	}
	if !isNil(o.MeterStartDate) {
		toSerialize["meter_start_date"] = o.MeterStartDate
	}
	if true {
		toSerialize["meta"] = o.Meta
	}
	return json.Marshal(toSerialize)
}

type NullableEnergyLifetimeResponse struct {
	value *EnergyLifetimeResponse
	isSet bool
}

func (v NullableEnergyLifetimeResponse) Get() *EnergyLifetimeResponse {
	return v.value
}

func (v *NullableEnergyLifetimeResponse) Set(val *EnergyLifetimeResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableEnergyLifetimeResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableEnergyLifetimeResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEnergyLifetimeResponse(val *EnergyLifetimeResponse) *NullableEnergyLifetimeResponse {
	return &NullableEnergyLifetimeResponse{value: val, isSet: true}
}

func (v NullableEnergyLifetimeResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEnergyLifetimeResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


