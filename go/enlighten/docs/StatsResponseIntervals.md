# StatsResponseIntervals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | **int64** | End date for interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**Powr** | **int32** | Average power produced by microinverters during this interval, in Watts. | 
**Enwh** | **int32** | Energy produced by microinverters during this interval, in Watt-hours. | 
**DevicesReporting** | **int32** | Number of microinverters that reported data for this interval at the time of the request. | 

## Methods

### NewStatsResponseIntervals

`func NewStatsResponseIntervals(endAt int64, powr int32, enwh int32, devicesReporting int32, ) *StatsResponseIntervals`

NewStatsResponseIntervals instantiates a new StatsResponseIntervals object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatsResponseIntervalsWithDefaults

`func NewStatsResponseIntervalsWithDefaults() *StatsResponseIntervals`

NewStatsResponseIntervalsWithDefaults instantiates a new StatsResponseIntervals object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *StatsResponseIntervals) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *StatsResponseIntervals) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *StatsResponseIntervals) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.


### GetPowr

`func (o *StatsResponseIntervals) GetPowr() int32`

GetPowr returns the Powr field if non-nil, zero value otherwise.

### GetPowrOk

`func (o *StatsResponseIntervals) GetPowrOk() (*int32, bool)`

GetPowrOk returns a tuple with the Powr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPowr

`func (o *StatsResponseIntervals) SetPowr(v int32)`

SetPowr sets Powr field to given value.


### GetEnwh

`func (o *StatsResponseIntervals) GetEnwh() int32`

GetEnwh returns the Enwh field if non-nil, zero value otherwise.

### GetEnwhOk

`func (o *StatsResponseIntervals) GetEnwhOk() (*int32, bool)`

GetEnwhOk returns a tuple with the Enwh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnwh

`func (o *StatsResponseIntervals) SetEnwh(v int32)`

SetEnwh sets Enwh field to given value.


### GetDevicesReporting

`func (o *StatsResponseIntervals) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *StatsResponseIntervals) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *StatsResponseIntervals) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


