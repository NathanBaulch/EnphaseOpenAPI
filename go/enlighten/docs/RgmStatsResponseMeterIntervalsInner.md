# RgmStatsResponseMeterIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MeterSerialNumber** | **string** | Serial number of the revenue grade meter. | 
**EnvoySerialNumber** | **string** | Serial number of the reporting envoy. | 
**Intervals** | [**[]RgmStatsResponseMeterIntervalsInnerIntervalsInner**](RgmStatsResponseMeterIntervalsInnerIntervalsInner.md) | Individual meter level interval. | 

## Methods

### NewRgmStatsResponseMeterIntervalsInner

`func NewRgmStatsResponseMeterIntervalsInner(meterSerialNumber string, envoySerialNumber string, intervals []RgmStatsResponseMeterIntervalsInnerIntervalsInner, ) *RgmStatsResponseMeterIntervalsInner`

NewRgmStatsResponseMeterIntervalsInner instantiates a new RgmStatsResponseMeterIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRgmStatsResponseMeterIntervalsInnerWithDefaults

`func NewRgmStatsResponseMeterIntervalsInnerWithDefaults() *RgmStatsResponseMeterIntervalsInner`

NewRgmStatsResponseMeterIntervalsInnerWithDefaults instantiates a new RgmStatsResponseMeterIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMeterSerialNumber

`func (o *RgmStatsResponseMeterIntervalsInner) GetMeterSerialNumber() string`

GetMeterSerialNumber returns the MeterSerialNumber field if non-nil, zero value otherwise.

### GetMeterSerialNumberOk

`func (o *RgmStatsResponseMeterIntervalsInner) GetMeterSerialNumberOk() (*string, bool)`

GetMeterSerialNumberOk returns a tuple with the MeterSerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterSerialNumber

`func (o *RgmStatsResponseMeterIntervalsInner) SetMeterSerialNumber(v string)`

SetMeterSerialNumber sets MeterSerialNumber field to given value.


### GetEnvoySerialNumber

`func (o *RgmStatsResponseMeterIntervalsInner) GetEnvoySerialNumber() string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *RgmStatsResponseMeterIntervalsInner) GetEnvoySerialNumberOk() (*string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *RgmStatsResponseMeterIntervalsInner) SetEnvoySerialNumber(v string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.


### GetIntervals

`func (o *RgmStatsResponseMeterIntervalsInner) GetIntervals() []RgmStatsResponseMeterIntervalsInnerIntervalsInner`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *RgmStatsResponseMeterIntervalsInner) GetIntervalsOk() (*[]RgmStatsResponseMeterIntervalsInnerIntervalsInner, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *RgmStatsResponseMeterIntervalsInner) SetIntervals(v []RgmStatsResponseMeterIntervalsInnerIntervalsInner)`

SetIntervals sets Intervals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


