# ConsumptionStatsIntervals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | **int32** | End of interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**Enwh** | **int32** | Energy consumed during this interval, in Watt-hours. | 
**DevicesReporting** | **int32** | Number of consumption meters that reported data for this interval at the time of the request. | 

## Methods

### NewConsumptionStatsIntervals

`func NewConsumptionStatsIntervals(endAt int32, enwh int32, devicesReporting int32, ) *ConsumptionStatsIntervals`

NewConsumptionStatsIntervals instantiates a new ConsumptionStatsIntervals object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConsumptionStatsIntervalsWithDefaults

`func NewConsumptionStatsIntervalsWithDefaults() *ConsumptionStatsIntervals`

NewConsumptionStatsIntervalsWithDefaults instantiates a new ConsumptionStatsIntervals object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *ConsumptionStatsIntervals) GetEndAt() int32`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *ConsumptionStatsIntervals) GetEndAtOk() (*int32, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *ConsumptionStatsIntervals) SetEndAt(v int32)`

SetEndAt sets EndAt field to given value.


### GetEnwh

`func (o *ConsumptionStatsIntervals) GetEnwh() int32`

GetEnwh returns the Enwh field if non-nil, zero value otherwise.

### GetEnwhOk

`func (o *ConsumptionStatsIntervals) GetEnwhOk() (*int32, bool)`

GetEnwhOk returns a tuple with the Enwh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnwh

`func (o *ConsumptionStatsIntervals) SetEnwh(v int32)`

SetEnwh sets Enwh field to given value.


### GetDevicesReporting

`func (o *ConsumptionStatsIntervals) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *ConsumptionStatsIntervals) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *ConsumptionStatsIntervals) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


