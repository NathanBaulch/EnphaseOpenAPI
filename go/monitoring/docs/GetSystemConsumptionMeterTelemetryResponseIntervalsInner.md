# GetSystemConsumptionMeterTelemetryResponseIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | Pointer to **int64** | End time of the telemetry interval. | [optional] 
**DevicesReporting** | Pointer to **int32** | Number of devices reporting. | [optional] 
**Enwh** | Pointer to **int32** | Units produced per interval. | [optional] 

## Methods

### NewGetSystemConsumptionMeterTelemetryResponseIntervalsInner

`func NewGetSystemConsumptionMeterTelemetryResponseIntervalsInner() *GetSystemConsumptionMeterTelemetryResponseIntervalsInner`

NewGetSystemConsumptionMeterTelemetryResponseIntervalsInner instantiates a new GetSystemConsumptionMeterTelemetryResponseIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemConsumptionMeterTelemetryResponseIntervalsInnerWithDefaults

`func NewGetSystemConsumptionMeterTelemetryResponseIntervalsInnerWithDefaults() *GetSystemConsumptionMeterTelemetryResponseIntervalsInner`

NewGetSystemConsumptionMeterTelemetryResponseIntervalsInnerWithDefaults instantiates a new GetSystemConsumptionMeterTelemetryResponseIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetDevicesReporting

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.

### HasDevicesReporting

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) HasDevicesReporting() bool`

HasDevicesReporting returns a boolean if a field has been set.

### GetEnwh

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) GetEnwh() int32`

GetEnwh returns the Enwh field if non-nil, zero value otherwise.

### GetEnwhOk

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) GetEnwhOk() (*int32, bool)`

GetEnwhOk returns a tuple with the Enwh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnwh

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) SetEnwh(v int32)`

SetEnwh sets Enwh field to given value.

### HasEnwh

`func (o *GetSystemConsumptionMeterTelemetryResponseIntervalsInner) HasEnwh() bool`

HasEnwh returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


