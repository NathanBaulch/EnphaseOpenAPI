# GetSystemRgmStatsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | System ID. | [optional] 
**TotalDevices** | Pointer to **int32** | Number of active revenue-grade meters for this system. | [optional] 
**Meta** | Pointer to [**Meta**](Meta.md) |  | [optional] 
**Intervals** | Pointer to [**[]GetSystemRgmStatsResponseIntervalsInner**](GetSystemRgmStatsResponseIntervalsInner.md) | A list of intervals between the requested start and end times. | [optional] 
**MeterIntervals** | Pointer to [**[]GetSystemRgmStatsResponseMeterIntervalsInner**](GetSystemRgmStatsResponseMeterIntervalsInner.md) | A list of intervals of a meter between the requested start and end times. | [optional] 

## Methods

### NewGetSystemRgmStatsResponse

`func NewGetSystemRgmStatsResponse() *GetSystemRgmStatsResponse`

NewGetSystemRgmStatsResponse instantiates a new GetSystemRgmStatsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemRgmStatsResponseWithDefaults

`func NewGetSystemRgmStatsResponseWithDefaults() *GetSystemRgmStatsResponse`

NewGetSystemRgmStatsResponseWithDefaults instantiates a new GetSystemRgmStatsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemRgmStatsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemRgmStatsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemRgmStatsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemRgmStatsResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetTotalDevices

`func (o *GetSystemRgmStatsResponse) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *GetSystemRgmStatsResponse) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *GetSystemRgmStatsResponse) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.

### HasTotalDevices

`func (o *GetSystemRgmStatsResponse) HasTotalDevices() bool`

HasTotalDevices returns a boolean if a field has been set.

### GetMeta

`func (o *GetSystemRgmStatsResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *GetSystemRgmStatsResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *GetSystemRgmStatsResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *GetSystemRgmStatsResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.

### GetIntervals

`func (o *GetSystemRgmStatsResponse) GetIntervals() []GetSystemRgmStatsResponseIntervalsInner`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *GetSystemRgmStatsResponse) GetIntervalsOk() (*[]GetSystemRgmStatsResponseIntervalsInner, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *GetSystemRgmStatsResponse) SetIntervals(v []GetSystemRgmStatsResponseIntervalsInner)`

SetIntervals sets Intervals field to given value.

### HasIntervals

`func (o *GetSystemRgmStatsResponse) HasIntervals() bool`

HasIntervals returns a boolean if a field has been set.

### GetMeterIntervals

`func (o *GetSystemRgmStatsResponse) GetMeterIntervals() []GetSystemRgmStatsResponseMeterIntervalsInner`

GetMeterIntervals returns the MeterIntervals field if non-nil, zero value otherwise.

### GetMeterIntervalsOk

`func (o *GetSystemRgmStatsResponse) GetMeterIntervalsOk() (*[]GetSystemRgmStatsResponseMeterIntervalsInner, bool)`

GetMeterIntervalsOk returns a tuple with the MeterIntervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterIntervals

`func (o *GetSystemRgmStatsResponse) SetMeterIntervals(v []GetSystemRgmStatsResponseMeterIntervalsInner)`

SetMeterIntervals sets MeterIntervals field to given value.

### HasMeterIntervals

`func (o *GetSystemRgmStatsResponse) HasMeterIntervals() bool`

HasMeterIntervals returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


