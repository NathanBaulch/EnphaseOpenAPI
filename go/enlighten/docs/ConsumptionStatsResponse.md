# ConsumptionStatsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | Enlighten ID for this system. | 
**TotalDevices** | **int32** | Number of active consumption meters for this system. | 
**Meta** | [**Meta**](Meta.md) |  | 
**Intervals** | [**[]ConsumptionStatsResponseIntervals**](ConsumptionStatsResponseIntervals.md) | A list of intervals between the requested start and end times. | 

## Methods

### NewConsumptionStatsResponse

`func NewConsumptionStatsResponse(systemId int32, totalDevices int32, meta Meta, intervals []ConsumptionStatsResponseIntervals, ) *ConsumptionStatsResponse`

NewConsumptionStatsResponse instantiates a new ConsumptionStatsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConsumptionStatsResponseWithDefaults

`func NewConsumptionStatsResponseWithDefaults() *ConsumptionStatsResponse`

NewConsumptionStatsResponseWithDefaults instantiates a new ConsumptionStatsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *ConsumptionStatsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *ConsumptionStatsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *ConsumptionStatsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetTotalDevices

`func (o *ConsumptionStatsResponse) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *ConsumptionStatsResponse) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *ConsumptionStatsResponse) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.


### GetMeta

`func (o *ConsumptionStatsResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *ConsumptionStatsResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *ConsumptionStatsResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.


### GetIntervals

`func (o *ConsumptionStatsResponse) GetIntervals() []ConsumptionStatsResponseIntervals`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *ConsumptionStatsResponse) GetIntervalsOk() (*[]ConsumptionStatsResponseIntervals, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *ConsumptionStatsResponse) SetIntervals(v []ConsumptionStatsResponseIntervals)`

SetIntervals sets Intervals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


