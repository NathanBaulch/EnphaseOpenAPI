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

// checks if the StreamSystemLiveData468Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StreamSystemLiveData468Response{}

// StreamSystemLiveData468Response struct for StreamSystemLiveData468Response
type StreamSystemLiveData468Response struct {
	Error *StreamSystemLiveData468ResponseError `json:"error,omitempty"`
	// Timestamp in epoch format.
	TimestampEpoch *int32 `json:"timestamp_epoch,omitempty"`
	// Timestamp in UTC format.
	TimestampUtc *string `json:"timestamp_utc,omitempty"`
	// validation_error
	Type *string `json:"type,omitempty"`
}

// NewStreamSystemLiveData468Response instantiates a new StreamSystemLiveData468Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStreamSystemLiveData468Response() *StreamSystemLiveData468Response {
	this := StreamSystemLiveData468Response{}
	return &this
}

// NewStreamSystemLiveData468ResponseWithDefaults instantiates a new StreamSystemLiveData468Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStreamSystemLiveData468ResponseWithDefaults() *StreamSystemLiveData468Response {
	this := StreamSystemLiveData468Response{}
	return &this
}

// GetError returns the Error field value if set, zero value otherwise.
func (o *StreamSystemLiveData468Response) GetError() StreamSystemLiveData468ResponseError {
	if o == nil || IsNil(o.Error) {
		var ret StreamSystemLiveData468ResponseError
		return ret
	}
	return *o.Error
}

// GetErrorOk returns a tuple with the Error field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StreamSystemLiveData468Response) GetErrorOk() (*StreamSystemLiveData468ResponseError, bool) {
	if o == nil || IsNil(o.Error) {
		return nil, false
	}
	return o.Error, true
}

// HasError returns a boolean if a field has been set.
func (o *StreamSystemLiveData468Response) HasError() bool {
	if o != nil && !IsNil(o.Error) {
		return true
	}

	return false
}

// SetError gets a reference to the given StreamSystemLiveData468ResponseError and assigns it to the Error field.
func (o *StreamSystemLiveData468Response) SetError(v StreamSystemLiveData468ResponseError) {
	o.Error = &v
}

// GetTimestampEpoch returns the TimestampEpoch field value if set, zero value otherwise.
func (o *StreamSystemLiveData468Response) GetTimestampEpoch() int32 {
	if o == nil || IsNil(o.TimestampEpoch) {
		var ret int32
		return ret
	}
	return *o.TimestampEpoch
}

// GetTimestampEpochOk returns a tuple with the TimestampEpoch field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StreamSystemLiveData468Response) GetTimestampEpochOk() (*int32, bool) {
	if o == nil || IsNil(o.TimestampEpoch) {
		return nil, false
	}
	return o.TimestampEpoch, true
}

// HasTimestampEpoch returns a boolean if a field has been set.
func (o *StreamSystemLiveData468Response) HasTimestampEpoch() bool {
	if o != nil && !IsNil(o.TimestampEpoch) {
		return true
	}

	return false
}

// SetTimestampEpoch gets a reference to the given int32 and assigns it to the TimestampEpoch field.
func (o *StreamSystemLiveData468Response) SetTimestampEpoch(v int32) {
	o.TimestampEpoch = &v
}

// GetTimestampUtc returns the TimestampUtc field value if set, zero value otherwise.
func (o *StreamSystemLiveData468Response) GetTimestampUtc() string {
	if o == nil || IsNil(o.TimestampUtc) {
		var ret string
		return ret
	}
	return *o.TimestampUtc
}

// GetTimestampUtcOk returns a tuple with the TimestampUtc field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StreamSystemLiveData468Response) GetTimestampUtcOk() (*string, bool) {
	if o == nil || IsNil(o.TimestampUtc) {
		return nil, false
	}
	return o.TimestampUtc, true
}

// HasTimestampUtc returns a boolean if a field has been set.
func (o *StreamSystemLiveData468Response) HasTimestampUtc() bool {
	if o != nil && !IsNil(o.TimestampUtc) {
		return true
	}

	return false
}

// SetTimestampUtc gets a reference to the given string and assigns it to the TimestampUtc field.
func (o *StreamSystemLiveData468Response) SetTimestampUtc(v string) {
	o.TimestampUtc = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *StreamSystemLiveData468Response) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StreamSystemLiveData468Response) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *StreamSystemLiveData468Response) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *StreamSystemLiveData468Response) SetType(v string) {
	o.Type = &v
}

func (o StreamSystemLiveData468Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StreamSystemLiveData468Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Error) {
		toSerialize["error"] = o.Error
	}
	if !IsNil(o.TimestampEpoch) {
		toSerialize["timestamp_epoch"] = o.TimestampEpoch
	}
	if !IsNil(o.TimestampUtc) {
		toSerialize["timestamp_utc"] = o.TimestampUtc
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableStreamSystemLiveData468Response struct {
	value *StreamSystemLiveData468Response
	isSet bool
}

func (v NullableStreamSystemLiveData468Response) Get() *StreamSystemLiveData468Response {
	return v.value
}

func (v *NullableStreamSystemLiveData468Response) Set(val *StreamSystemLiveData468Response) {
	v.value = val
	v.isSet = true
}

func (v NullableStreamSystemLiveData468Response) IsSet() bool {
	return v.isSet
}

func (v *NullableStreamSystemLiveData468Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStreamSystemLiveData468Response(val *StreamSystemLiveData468Response) *NullableStreamSystemLiveData468Response {
	return &NullableStreamSystemLiveData468Response{value: val, isSet: true}
}

func (v NullableStreamSystemLiveData468Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStreamSystemLiveData468Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

