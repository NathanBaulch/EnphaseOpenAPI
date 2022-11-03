# RgmStatsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | Enlighten ID for this system. | 
**TotalDevices** | **int32** | Number of active revenue-grade meters for this system. | 
**Meta** | [**Meta**](Meta.md) |  | 
**Intervals** | [**[]RgmStatsResponseIntervalsInner**](RgmStatsResponseIntervalsInner.md) | A list of intervals between the requested start and end times. | 
**MeterIntervals** | [**[]RgmStatsResponseMeterIntervalsInner**](RgmStatsResponseMeterIntervalsInner.md) | A list of intervals of a meter between the requested start and end times. | 

## Methods

### NewRgmStatsResponse

`func NewRgmStatsResponse(systemId int32, totalDevices int32, meta Meta, intervals []RgmStatsResponseIntervalsInner, meterIntervals []RgmStatsResponseMeterIntervalsInner, ) *RgmStatsResponse`

NewRgmStatsResponse instantiates a new RgmStatsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRgmStatsResponseWithDefaults

`func NewRgmStatsResponseWithDefaults() *RgmStatsResponse`

NewRgmStatsResponseWithDefaults instantiates a new RgmStatsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *RgmStatsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *RgmStatsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *RgmStatsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetTotalDevices

`func (o *RgmStatsResponse) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *RgmStatsResponse) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *RgmStatsResponse) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.


### GetMeta

`func (o *RgmStatsResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *RgmStatsResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *RgmStatsResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.


### GetIntervals

`func (o *RgmStatsResponse) GetIntervals() []RgmStatsResponseIntervalsInner`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *RgmStatsResponse) GetIntervalsOk() (*[]RgmStatsResponseIntervalsInner, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *RgmStatsResponse) SetIntervals(v []RgmStatsResponseIntervalsInner)`

SetIntervals sets Intervals field to given value.


### GetMeterIntervals

`func (o *RgmStatsResponse) GetMeterIntervals() []RgmStatsResponseMeterIntervalsInner`

GetMeterIntervals returns the MeterIntervals field if non-nil, zero value otherwise.

### GetMeterIntervalsOk

`func (o *RgmStatsResponse) GetMeterIntervalsOk() (*[]RgmStatsResponseMeterIntervalsInner, bool)`

GetMeterIntervalsOk returns a tuple with the MeterIntervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterIntervals

`func (o *RgmStatsResponse) SetMeterIntervals(v []RgmStatsResponseMeterIntervalsInner)`

SetMeterIntervals sets MeterIntervals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


