# GetSystemProductionMeterReadingsResponseMeterReadingsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SerialNumber** | Pointer to **string** | Serial number of the meter. | [optional] 
**Value** | Pointer to **int32** | Meter reading, in Wh. | [optional] 
**ReadAt** | Pointer to **int64** | Time when the reading was taken, always prior or equal to the requested &#39;end_at&#39;. | [optional] 

## Methods

### NewGetSystemProductionMeterReadingsResponseMeterReadingsInner

`func NewGetSystemProductionMeterReadingsResponseMeterReadingsInner() *GetSystemProductionMeterReadingsResponseMeterReadingsInner`

NewGetSystemProductionMeterReadingsResponseMeterReadingsInner instantiates a new GetSystemProductionMeterReadingsResponseMeterReadingsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemProductionMeterReadingsResponseMeterReadingsInnerWithDefaults

`func NewGetSystemProductionMeterReadingsResponseMeterReadingsInnerWithDefaults() *GetSystemProductionMeterReadingsResponseMeterReadingsInner`

NewGetSystemProductionMeterReadingsResponseMeterReadingsInnerWithDefaults instantiates a new GetSystemProductionMeterReadingsResponseMeterReadingsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSerialNumber

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.

### HasSerialNumber

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) HasSerialNumber() bool`

HasSerialNumber returns a boolean if a field has been set.

### GetValue

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetReadAt

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) GetReadAt() int64`

GetReadAt returns the ReadAt field if non-nil, zero value otherwise.

### GetReadAtOk

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) GetReadAtOk() (*int64, bool)`

GetReadAtOk returns a tuple with the ReadAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReadAt

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) SetReadAt(v int64)`

SetReadAt sets ReadAt field to given value.

### HasReadAt

`func (o *GetSystemProductionMeterReadingsResponseMeterReadingsInner) HasReadAt() bool`

HasReadAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


