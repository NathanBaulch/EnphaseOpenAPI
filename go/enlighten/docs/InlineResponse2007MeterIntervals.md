# InlineResponse2007MeterIntervals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MeterSerialNumber** | **string** | Serial number of the revenue grade meter. | 
**EnvoySerialNumber** | **string** | Serial number of the reporting envoy. | 
**Intervals** | [**[]InlineResponse2007Intervals1**](InlineResponse2007Intervals1.md) | Individual meter level interval. | 

## Methods

### NewInlineResponse2007MeterIntervals

`func NewInlineResponse2007MeterIntervals(meterSerialNumber string, envoySerialNumber string, intervals []InlineResponse2007Intervals1, ) *InlineResponse2007MeterIntervals`

NewInlineResponse2007MeterIntervals instantiates a new InlineResponse2007MeterIntervals object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2007MeterIntervalsWithDefaults

`func NewInlineResponse2007MeterIntervalsWithDefaults() *InlineResponse2007MeterIntervals`

NewInlineResponse2007MeterIntervalsWithDefaults instantiates a new InlineResponse2007MeterIntervals object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMeterSerialNumber

`func (o *InlineResponse2007MeterIntervals) GetMeterSerialNumber() string`

GetMeterSerialNumber returns the MeterSerialNumber field if non-nil, zero value otherwise.

### GetMeterSerialNumberOk

`func (o *InlineResponse2007MeterIntervals) GetMeterSerialNumberOk() (*string, bool)`

GetMeterSerialNumberOk returns a tuple with the MeterSerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterSerialNumber

`func (o *InlineResponse2007MeterIntervals) SetMeterSerialNumber(v string)`

SetMeterSerialNumber sets MeterSerialNumber field to given value.


### GetEnvoySerialNumber

`func (o *InlineResponse2007MeterIntervals) GetEnvoySerialNumber() string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *InlineResponse2007MeterIntervals) GetEnvoySerialNumberOk() (*string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *InlineResponse2007MeterIntervals) SetEnvoySerialNumber(v string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.


### GetIntervals

`func (o *InlineResponse2007MeterIntervals) GetIntervals() []InlineResponse2007Intervals1`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *InlineResponse2007MeterIntervals) GetIntervalsOk() (*[]InlineResponse2007Intervals1, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *InlineResponse2007MeterIntervals) SetIntervals(v []InlineResponse2007Intervals1)`

SetIntervals sets Intervals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


