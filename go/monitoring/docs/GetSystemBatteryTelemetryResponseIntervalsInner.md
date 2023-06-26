# GetSystemBatteryTelemetryResponseIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | Pointer to **int64** | End time of the telemetry interval. | [optional] 
**Charge** | Pointer to [**GetSystemBatteryTelemetryResponseIntervalsInnerCharge**](GetSystemBatteryTelemetryResponseIntervalsInnerCharge.md) |  | [optional] 
**Discharge** | Pointer to [**GetSystemBatteryTelemetryResponseIntervalsInnerDischarge**](GetSystemBatteryTelemetryResponseIntervalsInnerDischarge.md) |  | [optional] 
**Soc** | Pointer to [**GetSystemBatteryTelemetryResponseIntervalsInnerSoc**](GetSystemBatteryTelemetryResponseIntervalsInnerSoc.md) |  | [optional] 

## Methods

### NewGetSystemBatteryTelemetryResponseIntervalsInner

`func NewGetSystemBatteryTelemetryResponseIntervalsInner() *GetSystemBatteryTelemetryResponseIntervalsInner`

NewGetSystemBatteryTelemetryResponseIntervalsInner instantiates a new GetSystemBatteryTelemetryResponseIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemBatteryTelemetryResponseIntervalsInnerWithDefaults

`func NewGetSystemBatteryTelemetryResponseIntervalsInnerWithDefaults() *GetSystemBatteryTelemetryResponseIntervalsInner`

NewGetSystemBatteryTelemetryResponseIntervalsInnerWithDefaults instantiates a new GetSystemBatteryTelemetryResponseIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetCharge

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) GetCharge() GetSystemBatteryTelemetryResponseIntervalsInnerCharge`

GetCharge returns the Charge field if non-nil, zero value otherwise.

### GetChargeOk

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) GetChargeOk() (*GetSystemBatteryTelemetryResponseIntervalsInnerCharge, bool)`

GetChargeOk returns a tuple with the Charge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharge

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) SetCharge(v GetSystemBatteryTelemetryResponseIntervalsInnerCharge)`

SetCharge sets Charge field to given value.

### HasCharge

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) HasCharge() bool`

HasCharge returns a boolean if a field has been set.

### GetDischarge

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) GetDischarge() GetSystemBatteryTelemetryResponseIntervalsInnerDischarge`

GetDischarge returns the Discharge field if non-nil, zero value otherwise.

### GetDischargeOk

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) GetDischargeOk() (*GetSystemBatteryTelemetryResponseIntervalsInnerDischarge, bool)`

GetDischargeOk returns a tuple with the Discharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDischarge

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) SetDischarge(v GetSystemBatteryTelemetryResponseIntervalsInnerDischarge)`

SetDischarge sets Discharge field to given value.

### HasDischarge

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) HasDischarge() bool`

HasDischarge returns a boolean if a field has been set.

### GetSoc

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) GetSoc() GetSystemBatteryTelemetryResponseIntervalsInnerSoc`

GetSoc returns the Soc field if non-nil, zero value otherwise.

### GetSocOk

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) GetSocOk() (*GetSystemBatteryTelemetryResponseIntervalsInnerSoc, bool)`

GetSocOk returns a tuple with the Soc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSoc

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) SetSoc(v GetSystemBatteryTelemetryResponseIntervalsInnerSoc)`

SetSoc sets Soc field to given value.

### HasSoc

`func (o *GetSystemBatteryTelemetryResponseIntervalsInner) HasSoc() bool`

HasSoc returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


