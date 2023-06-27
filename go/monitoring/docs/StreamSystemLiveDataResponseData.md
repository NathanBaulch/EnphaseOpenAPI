# StreamSystemLiveDataResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to [**StreamSystemLiveDataResponseDataData**](StreamSystemLiveDataResponseDataData.md) |  | [optional] 
**TimestampEpoch** | Pointer to **int32** | Timestamp in epoch format. | [optional] 
**TimestampUtc** | Pointer to **string** | Timestamp in UTC format. | [optional] 
**Type** | Pointer to **string** | response | [optional] 

## Methods

### NewStreamSystemLiveDataResponseData

`func NewStreamSystemLiveDataResponseData() *StreamSystemLiveDataResponseData`

NewStreamSystemLiveDataResponseData instantiates a new StreamSystemLiveDataResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamSystemLiveDataResponseDataWithDefaults

`func NewStreamSystemLiveDataResponseDataWithDefaults() *StreamSystemLiveDataResponseData`

NewStreamSystemLiveDataResponseDataWithDefaults instantiates a new StreamSystemLiveDataResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *StreamSystemLiveDataResponseData) GetData() StreamSystemLiveDataResponseDataData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *StreamSystemLiveDataResponseData) GetDataOk() (*StreamSystemLiveDataResponseDataData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *StreamSystemLiveDataResponseData) SetData(v StreamSystemLiveDataResponseDataData)`

SetData sets Data field to given value.

### HasData

`func (o *StreamSystemLiveDataResponseData) HasData() bool`

HasData returns a boolean if a field has been set.

### GetTimestampEpoch

`func (o *StreamSystemLiveDataResponseData) GetTimestampEpoch() int32`

GetTimestampEpoch returns the TimestampEpoch field if non-nil, zero value otherwise.

### GetTimestampEpochOk

`func (o *StreamSystemLiveDataResponseData) GetTimestampEpochOk() (*int32, bool)`

GetTimestampEpochOk returns a tuple with the TimestampEpoch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampEpoch

`func (o *StreamSystemLiveDataResponseData) SetTimestampEpoch(v int32)`

SetTimestampEpoch sets TimestampEpoch field to given value.

### HasTimestampEpoch

`func (o *StreamSystemLiveDataResponseData) HasTimestampEpoch() bool`

HasTimestampEpoch returns a boolean if a field has been set.

### GetTimestampUtc

`func (o *StreamSystemLiveDataResponseData) GetTimestampUtc() string`

GetTimestampUtc returns the TimestampUtc field if non-nil, zero value otherwise.

### GetTimestampUtcOk

`func (o *StreamSystemLiveDataResponseData) GetTimestampUtcOk() (*string, bool)`

GetTimestampUtcOk returns a tuple with the TimestampUtc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampUtc

`func (o *StreamSystemLiveDataResponseData) SetTimestampUtc(v string)`

SetTimestampUtc sets TimestampUtc field to given value.

### HasTimestampUtc

`func (o *StreamSystemLiveDataResponseData) HasTimestampUtc() bool`

HasTimestampUtc returns a boolean if a field has been set.

### GetType

`func (o *StreamSystemLiveDataResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StreamSystemLiveDataResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StreamSystemLiveDataResponseData) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StreamSystemLiveDataResponseData) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


