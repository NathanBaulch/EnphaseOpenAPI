# GetSystemBatteryTelemetryResponseIntervalsInnerCharge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enwh** | Pointer to **int32** | Energy into the battery during the interval. | [optional] 
**DevicesReporting** | Pointer to **int32** | Number of devices reporting. | [optional] 

## Methods

### NewGetSystemBatteryTelemetryResponseIntervalsInnerCharge

`func NewGetSystemBatteryTelemetryResponseIntervalsInnerCharge() *GetSystemBatteryTelemetryResponseIntervalsInnerCharge`

NewGetSystemBatteryTelemetryResponseIntervalsInnerCharge instantiates a new GetSystemBatteryTelemetryResponseIntervalsInnerCharge object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemBatteryTelemetryResponseIntervalsInnerChargeWithDefaults

`func NewGetSystemBatteryTelemetryResponseIntervalsInnerChargeWithDefaults() *GetSystemBatteryTelemetryResponseIntervalsInnerCharge`

NewGetSystemBatteryTelemetryResponseIntervalsInnerChargeWithDefaults instantiates a new GetSystemBatteryTelemetryResponseIntervalsInnerCharge object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnwh

`func (o *GetSystemBatteryTelemetryResponseIntervalsInnerCharge) GetEnwh() int32`

GetEnwh returns the Enwh field if non-nil, zero value otherwise.

### GetEnwhOk

`func (o *GetSystemBatteryTelemetryResponseIntervalsInnerCharge) GetEnwhOk() (*int32, bool)`

GetEnwhOk returns a tuple with the Enwh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnwh

`func (o *GetSystemBatteryTelemetryResponseIntervalsInnerCharge) SetEnwh(v int32)`

SetEnwh sets Enwh field to given value.

### HasEnwh

`func (o *GetSystemBatteryTelemetryResponseIntervalsInnerCharge) HasEnwh() bool`

HasEnwh returns a boolean if a field has been set.

### GetDevicesReporting

`func (o *GetSystemBatteryTelemetryResponseIntervalsInnerCharge) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *GetSystemBatteryTelemetryResponseIntervalsInnerCharge) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *GetSystemBatteryTelemetryResponseIntervalsInnerCharge) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.

### HasDevicesReporting

`func (o *GetSystemBatteryTelemetryResponseIntervalsInnerCharge) HasDevicesReporting() bool`

HasDevicesReporting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


