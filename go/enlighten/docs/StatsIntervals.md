# StatsIntervals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | **int64** | End date for interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**Powr** | **int32** | Average power produced by microinverters during this interval, in Watts. | 
**Enwh** | **int32** | Energy produced by microinverters during this interval, in Watt-hours. | 
**DevicesReporting** | **int32** | Number of microinverters that reported data for this interval at the time of the request. | 

## Methods

### NewStatsIntervals

`func NewStatsIntervals(endAt int64, powr int32, enwh int32, devicesReporting int32, ) *StatsIntervals`

NewStatsIntervals instantiates a new StatsIntervals object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatsIntervalsWithDefaults

`func NewStatsIntervalsWithDefaults() *StatsIntervals`

NewStatsIntervalsWithDefaults instantiates a new StatsIntervals object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *StatsIntervals) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *StatsIntervals) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *StatsIntervals) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.


### GetPowr

`func (o *StatsIntervals) GetPowr() int32`

GetPowr returns the Powr field if non-nil, zero value otherwise.

### GetPowrOk

`func (o *StatsIntervals) GetPowrOk() (*int32, bool)`

GetPowrOk returns a tuple with the Powr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPowr

`func (o *StatsIntervals) SetPowr(v int32)`

SetPowr sets Powr field to given value.


### GetEnwh

`func (o *StatsIntervals) GetEnwh() int32`

GetEnwh returns the Enwh field if non-nil, zero value otherwise.

### GetEnwhOk

`func (o *StatsIntervals) GetEnwhOk() (*int32, bool)`

GetEnwhOk returns a tuple with the Enwh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnwh

`func (o *StatsIntervals) SetEnwh(v int32)`

SetEnwh sets Enwh field to given value.


### GetDevicesReporting

`func (o *StatsIntervals) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *StatsIntervals) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *StatsIntervals) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


