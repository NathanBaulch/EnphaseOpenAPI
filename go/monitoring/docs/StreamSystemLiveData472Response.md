# StreamSystemLiveData472Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to [**StreamSystemLiveData472ResponseError**](StreamSystemLiveData472ResponseError.md) |  | [optional] 
**TimestampEpoch** | Pointer to **int32** | Timestamp in epoch format. | [optional] 
**TimestampUtc** | Pointer to **string** | Timestamp in UTC format. | [optional] 
**Type** | Pointer to **string** | validation_error | [optional] 

## Methods

### NewStreamSystemLiveData472Response

`func NewStreamSystemLiveData472Response() *StreamSystemLiveData472Response`

NewStreamSystemLiveData472Response instantiates a new StreamSystemLiveData472Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamSystemLiveData472ResponseWithDefaults

`func NewStreamSystemLiveData472ResponseWithDefaults() *StreamSystemLiveData472Response`

NewStreamSystemLiveData472ResponseWithDefaults instantiates a new StreamSystemLiveData472Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *StreamSystemLiveData472Response) GetError() StreamSystemLiveData472ResponseError`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *StreamSystemLiveData472Response) GetErrorOk() (*StreamSystemLiveData472ResponseError, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *StreamSystemLiveData472Response) SetError(v StreamSystemLiveData472ResponseError)`

SetError sets Error field to given value.

### HasError

`func (o *StreamSystemLiveData472Response) HasError() bool`

HasError returns a boolean if a field has been set.

### GetTimestampEpoch

`func (o *StreamSystemLiveData472Response) GetTimestampEpoch() int32`

GetTimestampEpoch returns the TimestampEpoch field if non-nil, zero value otherwise.

### GetTimestampEpochOk

`func (o *StreamSystemLiveData472Response) GetTimestampEpochOk() (*int32, bool)`

GetTimestampEpochOk returns a tuple with the TimestampEpoch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampEpoch

`func (o *StreamSystemLiveData472Response) SetTimestampEpoch(v int32)`

SetTimestampEpoch sets TimestampEpoch field to given value.

### HasTimestampEpoch

`func (o *StreamSystemLiveData472Response) HasTimestampEpoch() bool`

HasTimestampEpoch returns a boolean if a field has been set.

### GetTimestampUtc

`func (o *StreamSystemLiveData472Response) GetTimestampUtc() string`

GetTimestampUtc returns the TimestampUtc field if non-nil, zero value otherwise.

### GetTimestampUtcOk

`func (o *StreamSystemLiveData472Response) GetTimestampUtcOk() (*string, bool)`

GetTimestampUtcOk returns a tuple with the TimestampUtc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampUtc

`func (o *StreamSystemLiveData472Response) SetTimestampUtc(v string)`

SetTimestampUtc sets TimestampUtc field to given value.

### HasTimestampUtc

`func (o *StreamSystemLiveData472Response) HasTimestampUtc() bool`

HasTimestampUtc returns a boolean if a field has been set.

### GetType

`func (o *StreamSystemLiveData472Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StreamSystemLiveData472Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StreamSystemLiveData472Response) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StreamSystemLiveData472Response) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


