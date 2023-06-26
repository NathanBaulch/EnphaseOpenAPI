# GetSystemProductionMicroTelemetryResponseIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | Pointer to **int64** | End time of the telemetry interval. | [optional] 
**DevicesReporting** | Pointer to **int32** | Number of devices reporting. | [optional] 
**Powr** | Pointer to **int32** | Average power (in Watt) produced by all the microinverters during this interval, measured in Watts. | [optional] 
**Enwh** | Pointer to **int32** | Energy produced (in Watt-Hours) from all the microinverters combined during that period. | [optional] 

## Methods

### NewGetSystemProductionMicroTelemetryResponseIntervalsInner

`func NewGetSystemProductionMicroTelemetryResponseIntervalsInner() *GetSystemProductionMicroTelemetryResponseIntervalsInner`

NewGetSystemProductionMicroTelemetryResponseIntervalsInner instantiates a new GetSystemProductionMicroTelemetryResponseIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemProductionMicroTelemetryResponseIntervalsInnerWithDefaults

`func NewGetSystemProductionMicroTelemetryResponseIntervalsInnerWithDefaults() *GetSystemProductionMicroTelemetryResponseIntervalsInner`

NewGetSystemProductionMicroTelemetryResponseIntervalsInnerWithDefaults instantiates a new GetSystemProductionMicroTelemetryResponseIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetDevicesReporting

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.

### HasDevicesReporting

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) HasDevicesReporting() bool`

HasDevicesReporting returns a boolean if a field has been set.

### GetPowr

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetPowr() int32`

GetPowr returns the Powr field if non-nil, zero value otherwise.

### GetPowrOk

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetPowrOk() (*int32, bool)`

GetPowrOk returns a tuple with the Powr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPowr

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) SetPowr(v int32)`

SetPowr sets Powr field to given value.

### HasPowr

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) HasPowr() bool`

HasPowr returns a boolean if a field has been set.

### GetEnwh

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetEnwh() int32`

GetEnwh returns the Enwh field if non-nil, zero value otherwise.

### GetEnwhOk

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) GetEnwhOk() (*int32, bool)`

GetEnwhOk returns a tuple with the Enwh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnwh

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) SetEnwh(v int32)`

SetEnwh sets Enwh field to given value.

### HasEnwh

`func (o *GetSystemProductionMicroTelemetryResponseIntervalsInner) HasEnwh() bool`

HasEnwh returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


