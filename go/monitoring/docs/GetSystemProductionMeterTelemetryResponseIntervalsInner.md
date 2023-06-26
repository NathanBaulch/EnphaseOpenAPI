# GetSystemProductionMeterTelemetryResponseIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | Pointer to **int64** | End time of the telemetry interval. | [optional] 
**DevicesReporting** | Pointer to **int32** | Number of devices reporting. | [optional] 
**WhDel** | Pointer to **int32** | Units produced per interval. | [optional] 

## Methods

### NewGetSystemProductionMeterTelemetryResponseIntervalsInner

`func NewGetSystemProductionMeterTelemetryResponseIntervalsInner() *GetSystemProductionMeterTelemetryResponseIntervalsInner`

NewGetSystemProductionMeterTelemetryResponseIntervalsInner instantiates a new GetSystemProductionMeterTelemetryResponseIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemProductionMeterTelemetryResponseIntervalsInnerWithDefaults

`func NewGetSystemProductionMeterTelemetryResponseIntervalsInnerWithDefaults() *GetSystemProductionMeterTelemetryResponseIntervalsInner`

NewGetSystemProductionMeterTelemetryResponseIntervalsInnerWithDefaults instantiates a new GetSystemProductionMeterTelemetryResponseIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetDevicesReporting

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.

### HasDevicesReporting

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) HasDevicesReporting() bool`

HasDevicesReporting returns a boolean if a field has been set.

### GetWhDel

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetWhDel() int32`

GetWhDel returns the WhDel field if non-nil, zero value otherwise.

### GetWhDelOk

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) GetWhDelOk() (*int32, bool)`

GetWhDelOk returns a tuple with the WhDel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhDel

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) SetWhDel(v int32)`

SetWhDel sets WhDel field to given value.

### HasWhDel

`func (o *GetSystemProductionMeterTelemetryResponseIntervalsInner) HasWhDel() bool`

HasWhDel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


