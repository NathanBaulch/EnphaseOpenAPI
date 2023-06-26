# GetSystemMicroDeviceTelemetryResponseIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | Pointer to **int64** | End time of the telemetry interval. | [optional] 
**Powr** | Pointer to **int32** | Average power (in Watt) produced by all the microinverters during this interval, measured in Watts. | [optional] 
**Enwh** | Pointer to **int32** | Energy produced (in Watt-Hours) from all the microinverters combined during that period. | [optional] 

## Methods

### NewGetSystemMicroDeviceTelemetryResponseIntervalsInner

`func NewGetSystemMicroDeviceTelemetryResponseIntervalsInner() *GetSystemMicroDeviceTelemetryResponseIntervalsInner`

NewGetSystemMicroDeviceTelemetryResponseIntervalsInner instantiates a new GetSystemMicroDeviceTelemetryResponseIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemMicroDeviceTelemetryResponseIntervalsInnerWithDefaults

`func NewGetSystemMicroDeviceTelemetryResponseIntervalsInnerWithDefaults() *GetSystemMicroDeviceTelemetryResponseIntervalsInner`

NewGetSystemMicroDeviceTelemetryResponseIntervalsInnerWithDefaults instantiates a new GetSystemMicroDeviceTelemetryResponseIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetPowr

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) GetPowr() int32`

GetPowr returns the Powr field if non-nil, zero value otherwise.

### GetPowrOk

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) GetPowrOk() (*int32, bool)`

GetPowrOk returns a tuple with the Powr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPowr

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) SetPowr(v int32)`

SetPowr sets Powr field to given value.

### HasPowr

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) HasPowr() bool`

HasPowr returns a boolean if a field has been set.

### GetEnwh

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) GetEnwh() int32`

GetEnwh returns the Enwh field if non-nil, zero value otherwise.

### GetEnwhOk

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) GetEnwhOk() (*int32, bool)`

GetEnwhOk returns a tuple with the Enwh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnwh

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) SetEnwh(v int32)`

SetEnwh sets Enwh field to given value.

### HasEnwh

`func (o *GetSystemMicroDeviceTelemetryResponseIntervalsInner) HasEnwh() bool`

HasEnwh returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


