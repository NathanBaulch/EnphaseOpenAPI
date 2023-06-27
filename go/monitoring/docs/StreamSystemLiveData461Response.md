# StreamSystemLiveData461Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to [**StreamSystemLiveData461ResponseError**](StreamSystemLiveData461ResponseError.md) |  | [optional] 
**TimestampEpoch** | Pointer to **int32** | Timestamp in epoch format. | [optional] 
**TimestampUtc** | Pointer to **string** | Timestamp in UTC format. | [optional] 
**Type** | Pointer to **string** | validation_error | [optional] 

## Methods

### NewStreamSystemLiveData461Response

`func NewStreamSystemLiveData461Response() *StreamSystemLiveData461Response`

NewStreamSystemLiveData461Response instantiates a new StreamSystemLiveData461Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamSystemLiveData461ResponseWithDefaults

`func NewStreamSystemLiveData461ResponseWithDefaults() *StreamSystemLiveData461Response`

NewStreamSystemLiveData461ResponseWithDefaults instantiates a new StreamSystemLiveData461Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *StreamSystemLiveData461Response) GetError() StreamSystemLiveData461ResponseError`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *StreamSystemLiveData461Response) GetErrorOk() (*StreamSystemLiveData461ResponseError, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *StreamSystemLiveData461Response) SetError(v StreamSystemLiveData461ResponseError)`

SetError sets Error field to given value.

### HasError

`func (o *StreamSystemLiveData461Response) HasError() bool`

HasError returns a boolean if a field has been set.

### GetTimestampEpoch

`func (o *StreamSystemLiveData461Response) GetTimestampEpoch() int32`

GetTimestampEpoch returns the TimestampEpoch field if non-nil, zero value otherwise.

### GetTimestampEpochOk

`func (o *StreamSystemLiveData461Response) GetTimestampEpochOk() (*int32, bool)`

GetTimestampEpochOk returns a tuple with the TimestampEpoch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampEpoch

`func (o *StreamSystemLiveData461Response) SetTimestampEpoch(v int32)`

SetTimestampEpoch sets TimestampEpoch field to given value.

### HasTimestampEpoch

`func (o *StreamSystemLiveData461Response) HasTimestampEpoch() bool`

HasTimestampEpoch returns a boolean if a field has been set.

### GetTimestampUtc

`func (o *StreamSystemLiveData461Response) GetTimestampUtc() string`

GetTimestampUtc returns the TimestampUtc field if non-nil, zero value otherwise.

### GetTimestampUtcOk

`func (o *StreamSystemLiveData461Response) GetTimestampUtcOk() (*string, bool)`

GetTimestampUtcOk returns a tuple with the TimestampUtc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampUtc

`func (o *StreamSystemLiveData461Response) SetTimestampUtc(v string)`

SetTimestampUtc sets TimestampUtc field to given value.

### HasTimestampUtc

`func (o *StreamSystemLiveData461Response) HasTimestampUtc() bool`

HasTimestampUtc returns a boolean if a field has been set.

### GetType

`func (o *StreamSystemLiveData461Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StreamSystemLiveData461Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StreamSystemLiveData461Response) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StreamSystemLiveData461Response) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


