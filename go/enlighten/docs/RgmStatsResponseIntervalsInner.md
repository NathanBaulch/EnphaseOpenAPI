# RgmStatsResponseIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | **int64** | End of interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**WhDel** | **int32** | Energy delivered during this interval, in Watt-hours. | 
**DevicesReporting** | **int32** | Number of revenue-grade meters that reported data for this interval at the time of the request. | 

## Methods

### NewRgmStatsResponseIntervalsInner

`func NewRgmStatsResponseIntervalsInner(endAt int64, whDel int32, devicesReporting int32, ) *RgmStatsResponseIntervalsInner`

NewRgmStatsResponseIntervalsInner instantiates a new RgmStatsResponseIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRgmStatsResponseIntervalsInnerWithDefaults

`func NewRgmStatsResponseIntervalsInnerWithDefaults() *RgmStatsResponseIntervalsInner`

NewRgmStatsResponseIntervalsInnerWithDefaults instantiates a new RgmStatsResponseIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *RgmStatsResponseIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *RgmStatsResponseIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *RgmStatsResponseIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.


### GetWhDel

`func (o *RgmStatsResponseIntervalsInner) GetWhDel() int32`

GetWhDel returns the WhDel field if non-nil, zero value otherwise.

### GetWhDelOk

`func (o *RgmStatsResponseIntervalsInner) GetWhDelOk() (*int32, bool)`

GetWhDelOk returns a tuple with the WhDel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhDel

`func (o *RgmStatsResponseIntervalsInner) SetWhDel(v int32)`

SetWhDel sets WhDel field to given value.


### GetDevicesReporting

`func (o *RgmStatsResponseIntervalsInner) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *RgmStatsResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *RgmStatsResponseIntervalsInner) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


