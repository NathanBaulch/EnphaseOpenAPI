# RgmStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | Enlighten ID for this system. | 
**TotalDevices** | **int32** | Number of active revenue-grade meters for this system. | 
**Meta** | [**Meta**](Meta.md) |  | 
**Intervals** | [**[]RgmStatsIntervals**](RgmStatsIntervals.md) | A list of intervals between the requested start and end times. | 
**MeterIntervals** | [**[]RgmStatsMeterIntervals**](RgmStatsMeterIntervals.md) | A list of intervals of a meter between the requested start and end times. | 

## Methods

### NewRgmStats

`func NewRgmStats(systemId int32, totalDevices int32, meta Meta, intervals []RgmStatsIntervals, meterIntervals []RgmStatsMeterIntervals, ) *RgmStats`

NewRgmStats instantiates a new RgmStats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRgmStatsWithDefaults

`func NewRgmStatsWithDefaults() *RgmStats`

NewRgmStatsWithDefaults instantiates a new RgmStats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *RgmStats) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *RgmStats) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *RgmStats) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetTotalDevices

`func (o *RgmStats) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *RgmStats) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *RgmStats) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.


### GetMeta

`func (o *RgmStats) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *RgmStats) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *RgmStats) SetMeta(v Meta)`

SetMeta sets Meta field to given value.


### GetIntervals

`func (o *RgmStats) GetIntervals() []RgmStatsIntervals`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *RgmStats) GetIntervalsOk() (*[]RgmStatsIntervals, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *RgmStats) SetIntervals(v []RgmStatsIntervals)`

SetIntervals sets Intervals field to given value.


### GetMeterIntervals

`func (o *RgmStats) GetMeterIntervals() []RgmStatsMeterIntervals`

GetMeterIntervals returns the MeterIntervals field if non-nil, zero value otherwise.

### GetMeterIntervalsOk

`func (o *RgmStats) GetMeterIntervalsOk() (*[]RgmStatsMeterIntervals, bool)`

GetMeterIntervalsOk returns a tuple with the MeterIntervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterIntervals

`func (o *RgmStats) SetMeterIntervals(v []RgmStatsMeterIntervals)`

SetMeterIntervals sets MeterIntervals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


