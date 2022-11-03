# RgmStatsResponseMeterIntervalsInnerIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Channel** | **int32** | The reporting channel identifier. | 
**EndAt** | **int64** | End of interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**WhDel** | **NullableFloat32** | Energy delivered during this interval, in Watt-hours. | 
**CurrW** | **NullableInt32** | Energy delivered during this interval, in Watts. | 

## Methods

### NewRgmStatsResponseMeterIntervalsInnerIntervalsInner

`func NewRgmStatsResponseMeterIntervalsInnerIntervalsInner(channel int32, endAt int64, whDel NullableFloat32, currW NullableInt32, ) *RgmStatsResponseMeterIntervalsInnerIntervalsInner`

NewRgmStatsResponseMeterIntervalsInnerIntervalsInner instantiates a new RgmStatsResponseMeterIntervalsInnerIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRgmStatsResponseMeterIntervalsInnerIntervalsInnerWithDefaults

`func NewRgmStatsResponseMeterIntervalsInnerIntervalsInnerWithDefaults() *RgmStatsResponseMeterIntervalsInnerIntervalsInner`

NewRgmStatsResponseMeterIntervalsInnerIntervalsInnerWithDefaults instantiates a new RgmStatsResponseMeterIntervalsInnerIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannel

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) GetChannel() int32`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) GetChannelOk() (*int32, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) SetChannel(v int32)`

SetChannel sets Channel field to given value.


### GetEndAt

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.


### GetWhDel

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) GetWhDel() float32`

GetWhDel returns the WhDel field if non-nil, zero value otherwise.

### GetWhDelOk

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) GetWhDelOk() (*float32, bool)`

GetWhDelOk returns a tuple with the WhDel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhDel

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) SetWhDel(v float32)`

SetWhDel sets WhDel field to given value.


### SetWhDelNil

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) SetWhDelNil(b bool)`

 SetWhDelNil sets the value for WhDel to be an explicit nil

### UnsetWhDel
`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) UnsetWhDel()`

UnsetWhDel ensures that no value is present for WhDel, not even an explicit nil
### GetCurrW

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) GetCurrW() int32`

GetCurrW returns the CurrW field if non-nil, zero value otherwise.

### GetCurrWOk

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) GetCurrWOk() (*int32, bool)`

GetCurrWOk returns a tuple with the CurrW field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrW

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) SetCurrW(v int32)`

SetCurrW sets CurrW field to given value.


### SetCurrWNil

`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) SetCurrWNil(b bool)`

 SetCurrWNil sets the value for CurrW to be an explicit nil

### UnsetCurrW
`func (o *RgmStatsResponseMeterIntervalsInnerIntervalsInner) UnsetCurrW()`

UnsetCurrW ensures that no value is present for CurrW, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


