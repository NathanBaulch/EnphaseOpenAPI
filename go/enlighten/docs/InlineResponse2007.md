# InlineResponse2007

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | Enlighten ID for this system. | 
**TotalDevices** | **int32** | Number of active revenue-grade meters for this system. | 
**Meta** | [**Meta**](Meta.md) |  | 
**Intervals** | [**[]InlineResponse2007Intervals**](InlineResponse2007Intervals.md) | A list of intervals between the requested start and end times. | 
**MeterIntervals** | [**[]InlineResponse2007MeterIntervals**](InlineResponse2007MeterIntervals.md) | A list of intervals of a meter between the requested start and end times. | 

## Methods

### NewInlineResponse2007

`func NewInlineResponse2007(systemId int32, totalDevices int32, meta Meta, intervals []InlineResponse2007Intervals, meterIntervals []InlineResponse2007MeterIntervals, ) *InlineResponse2007`

NewInlineResponse2007 instantiates a new InlineResponse2007 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2007WithDefaults

`func NewInlineResponse2007WithDefaults() *InlineResponse2007`

NewInlineResponse2007WithDefaults instantiates a new InlineResponse2007 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *InlineResponse2007) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *InlineResponse2007) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *InlineResponse2007) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetTotalDevices

`func (o *InlineResponse2007) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *InlineResponse2007) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *InlineResponse2007) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.


### GetMeta

`func (o *InlineResponse2007) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *InlineResponse2007) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *InlineResponse2007) SetMeta(v Meta)`

SetMeta sets Meta field to given value.


### GetIntervals

`func (o *InlineResponse2007) GetIntervals() []InlineResponse2007Intervals`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *InlineResponse2007) GetIntervalsOk() (*[]InlineResponse2007Intervals, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *InlineResponse2007) SetIntervals(v []InlineResponse2007Intervals)`

SetIntervals sets Intervals field to given value.


### GetMeterIntervals

`func (o *InlineResponse2007) GetMeterIntervals() []InlineResponse2007MeterIntervals`

GetMeterIntervals returns the MeterIntervals field if non-nil, zero value otherwise.

### GetMeterIntervalsOk

`func (o *InlineResponse2007) GetMeterIntervalsOk() (*[]InlineResponse2007MeterIntervals, bool)`

GetMeterIntervalsOk returns a tuple with the MeterIntervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterIntervals

`func (o *InlineResponse2007) SetMeterIntervals(v []InlineResponse2007MeterIntervals)`

SetMeterIntervals sets MeterIntervals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


