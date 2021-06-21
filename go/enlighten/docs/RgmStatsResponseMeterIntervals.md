# RgmStatsResponseMeterIntervals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MeterSerialNumber** | **string** | Serial number of the revenue grade meter. | 
**EnvoySerialNumber** | **string** | Serial number of the reporting envoy. | 
**Intervals** | [**[]RgmStatsResponseIntervals1**](RgmStatsResponseIntervals1.md) | Individual meter level interval. | 

## Methods

### NewRgmStatsResponseMeterIntervals

`func NewRgmStatsResponseMeterIntervals(meterSerialNumber string, envoySerialNumber string, intervals []RgmStatsResponseIntervals1, ) *RgmStatsResponseMeterIntervals`

NewRgmStatsResponseMeterIntervals instantiates a new RgmStatsResponseMeterIntervals object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRgmStatsResponseMeterIntervalsWithDefaults

`func NewRgmStatsResponseMeterIntervalsWithDefaults() *RgmStatsResponseMeterIntervals`

NewRgmStatsResponseMeterIntervalsWithDefaults instantiates a new RgmStatsResponseMeterIntervals object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMeterSerialNumber

`func (o *RgmStatsResponseMeterIntervals) GetMeterSerialNumber() string`

GetMeterSerialNumber returns the MeterSerialNumber field if non-nil, zero value otherwise.

### GetMeterSerialNumberOk

`func (o *RgmStatsResponseMeterIntervals) GetMeterSerialNumberOk() (*string, bool)`

GetMeterSerialNumberOk returns a tuple with the MeterSerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterSerialNumber

`func (o *RgmStatsResponseMeterIntervals) SetMeterSerialNumber(v string)`

SetMeterSerialNumber sets MeterSerialNumber field to given value.


### GetEnvoySerialNumber

`func (o *RgmStatsResponseMeterIntervals) GetEnvoySerialNumber() string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *RgmStatsResponseMeterIntervals) GetEnvoySerialNumberOk() (*string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *RgmStatsResponseMeterIntervals) SetEnvoySerialNumber(v string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.


### GetIntervals

`func (o *RgmStatsResponseMeterIntervals) GetIntervals() []RgmStatsResponseIntervals1`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *RgmStatsResponseMeterIntervals) GetIntervalsOk() (*[]RgmStatsResponseIntervals1, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *RgmStatsResponseMeterIntervals) SetIntervals(v []RgmStatsResponseIntervals1)`

SetIntervals sets Intervals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


