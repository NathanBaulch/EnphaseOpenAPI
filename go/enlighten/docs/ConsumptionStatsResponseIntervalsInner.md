# ConsumptionStatsResponseIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | **int64** | End of interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**Enwh** | **int32** | Energy consumed during this interval, in Watt-hours. | 
**DevicesReporting** | **int32** | Number of consumption meters that reported data for this interval at the time of the request. | 

## Methods

### NewConsumptionStatsResponseIntervalsInner

`func NewConsumptionStatsResponseIntervalsInner(endAt int64, enwh int32, devicesReporting int32, ) *ConsumptionStatsResponseIntervalsInner`

NewConsumptionStatsResponseIntervalsInner instantiates a new ConsumptionStatsResponseIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConsumptionStatsResponseIntervalsInnerWithDefaults

`func NewConsumptionStatsResponseIntervalsInnerWithDefaults() *ConsumptionStatsResponseIntervalsInner`

NewConsumptionStatsResponseIntervalsInnerWithDefaults instantiates a new ConsumptionStatsResponseIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *ConsumptionStatsResponseIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *ConsumptionStatsResponseIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *ConsumptionStatsResponseIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.


### GetEnwh

`func (o *ConsumptionStatsResponseIntervalsInner) GetEnwh() int32`

GetEnwh returns the Enwh field if non-nil, zero value otherwise.

### GetEnwhOk

`func (o *ConsumptionStatsResponseIntervalsInner) GetEnwhOk() (*int32, bool)`

GetEnwhOk returns a tuple with the Enwh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnwh

`func (o *ConsumptionStatsResponseIntervalsInner) SetEnwh(v int32)`

SetEnwh sets Enwh field to given value.


### GetDevicesReporting

`func (o *ConsumptionStatsResponseIntervalsInner) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *ConsumptionStatsResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *ConsumptionStatsResponseIntervalsInner) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


