# StatsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | Enlighten ID for this system. | 
**TotalDevices** | **int32** | Number of active microinverters for this system. | 
**Meta** | [**Meta**](Meta.md) |  | 
**Intervals** | [**[]StatsResponseIntervals**](StatsResponseIntervals.md) | A list of intervals between the requested start and end times. | 

## Methods

### NewStatsResponse

`func NewStatsResponse(systemId int32, totalDevices int32, meta Meta, intervals []StatsResponseIntervals, ) *StatsResponse`

NewStatsResponse instantiates a new StatsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatsResponseWithDefaults

`func NewStatsResponseWithDefaults() *StatsResponse`

NewStatsResponseWithDefaults instantiates a new StatsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *StatsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *StatsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *StatsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetTotalDevices

`func (o *StatsResponse) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *StatsResponse) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *StatsResponse) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.


### GetMeta

`func (o *StatsResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *StatsResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *StatsResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.


### GetIntervals

`func (o *StatsResponse) GetIntervals() []StatsResponseIntervals`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *StatsResponse) GetIntervalsOk() (*[]StatsResponseIntervals, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *StatsResponse) SetIntervals(v []StatsResponseIntervals)`

SetIntervals sets Intervals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


