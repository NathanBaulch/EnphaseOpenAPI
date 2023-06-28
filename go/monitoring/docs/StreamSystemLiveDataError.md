# StreamSystemLiveDataError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to [**StreamSystemLiveDataErrorError**](StreamSystemLiveDataErrorError.md) |  | [optional] 
**TimestampEpoch** | Pointer to **int32** | Timestamp in epoch format. | [optional] 
**TimestampUtc** | Pointer to **string** | Timestamp in UTC format. | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewStreamSystemLiveDataError

`func NewStreamSystemLiveDataError() *StreamSystemLiveDataError`

NewStreamSystemLiveDataError instantiates a new StreamSystemLiveDataError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamSystemLiveDataErrorWithDefaults

`func NewStreamSystemLiveDataErrorWithDefaults() *StreamSystemLiveDataError`

NewStreamSystemLiveDataErrorWithDefaults instantiates a new StreamSystemLiveDataError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *StreamSystemLiveDataError) GetError() StreamSystemLiveDataErrorError`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *StreamSystemLiveDataError) GetErrorOk() (*StreamSystemLiveDataErrorError, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *StreamSystemLiveDataError) SetError(v StreamSystemLiveDataErrorError)`

SetError sets Error field to given value.

### HasError

`func (o *StreamSystemLiveDataError) HasError() bool`

HasError returns a boolean if a field has been set.

### GetTimestampEpoch

`func (o *StreamSystemLiveDataError) GetTimestampEpoch() int32`

GetTimestampEpoch returns the TimestampEpoch field if non-nil, zero value otherwise.

### GetTimestampEpochOk

`func (o *StreamSystemLiveDataError) GetTimestampEpochOk() (*int32, bool)`

GetTimestampEpochOk returns a tuple with the TimestampEpoch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampEpoch

`func (o *StreamSystemLiveDataError) SetTimestampEpoch(v int32)`

SetTimestampEpoch sets TimestampEpoch field to given value.

### HasTimestampEpoch

`func (o *StreamSystemLiveDataError) HasTimestampEpoch() bool`

HasTimestampEpoch returns a boolean if a field has been set.

### GetTimestampUtc

`func (o *StreamSystemLiveDataError) GetTimestampUtc() string`

GetTimestampUtc returns the TimestampUtc field if non-nil, zero value otherwise.

### GetTimestampUtcOk

`func (o *StreamSystemLiveDataError) GetTimestampUtcOk() (*string, bool)`

GetTimestampUtcOk returns a tuple with the TimestampUtc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampUtc

`func (o *StreamSystemLiveDataError) SetTimestampUtc(v string)`

SetTimestampUtc sets TimestampUtc field to given value.

### HasTimestampUtc

`func (o *StreamSystemLiveDataError) HasTimestampUtc() bool`

HasTimestampUtc returns a boolean if a field has been set.

### GetType

`func (o *StreamSystemLiveDataError) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StreamSystemLiveDataError) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StreamSystemLiveDataError) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StreamSystemLiveDataError) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


