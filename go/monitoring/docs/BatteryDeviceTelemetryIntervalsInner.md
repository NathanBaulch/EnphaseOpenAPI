# BatteryDeviceTelemetryIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | Pointer to **int64** | End time of the telemetry interval. | [optional] 
**Charge** | Pointer to [**BatteryDeviceTelemetryIntervalsInnerCharge**](BatteryDeviceTelemetryIntervalsInnerCharge.md) |  | [optional] 
**Discharge** | Pointer to [**BatteryDeviceTelemetryIntervalsInnerDischarge**](BatteryDeviceTelemetryIntervalsInnerDischarge.md) |  | [optional] 
**Soc** | Pointer to [**BatteryDeviceTelemetryIntervalsInnerSoc**](BatteryDeviceTelemetryIntervalsInnerSoc.md) |  | [optional] 

## Methods

### NewBatteryDeviceTelemetryIntervalsInner

`func NewBatteryDeviceTelemetryIntervalsInner() *BatteryDeviceTelemetryIntervalsInner`

NewBatteryDeviceTelemetryIntervalsInner instantiates a new BatteryDeviceTelemetryIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatteryDeviceTelemetryIntervalsInnerWithDefaults

`func NewBatteryDeviceTelemetryIntervalsInnerWithDefaults() *BatteryDeviceTelemetryIntervalsInner`

NewBatteryDeviceTelemetryIntervalsInnerWithDefaults instantiates a new BatteryDeviceTelemetryIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *BatteryDeviceTelemetryIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *BatteryDeviceTelemetryIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *BatteryDeviceTelemetryIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *BatteryDeviceTelemetryIntervalsInner) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetCharge

`func (o *BatteryDeviceTelemetryIntervalsInner) GetCharge() BatteryDeviceTelemetryIntervalsInnerCharge`

GetCharge returns the Charge field if non-nil, zero value otherwise.

### GetChargeOk

`func (o *BatteryDeviceTelemetryIntervalsInner) GetChargeOk() (*BatteryDeviceTelemetryIntervalsInnerCharge, bool)`

GetChargeOk returns a tuple with the Charge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharge

`func (o *BatteryDeviceTelemetryIntervalsInner) SetCharge(v BatteryDeviceTelemetryIntervalsInnerCharge)`

SetCharge sets Charge field to given value.

### HasCharge

`func (o *BatteryDeviceTelemetryIntervalsInner) HasCharge() bool`

HasCharge returns a boolean if a field has been set.

### GetDischarge

`func (o *BatteryDeviceTelemetryIntervalsInner) GetDischarge() BatteryDeviceTelemetryIntervalsInnerDischarge`

GetDischarge returns the Discharge field if non-nil, zero value otherwise.

### GetDischargeOk

`func (o *BatteryDeviceTelemetryIntervalsInner) GetDischargeOk() (*BatteryDeviceTelemetryIntervalsInnerDischarge, bool)`

GetDischargeOk returns a tuple with the Discharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDischarge

`func (o *BatteryDeviceTelemetryIntervalsInner) SetDischarge(v BatteryDeviceTelemetryIntervalsInnerDischarge)`

SetDischarge sets Discharge field to given value.

### HasDischarge

`func (o *BatteryDeviceTelemetryIntervalsInner) HasDischarge() bool`

HasDischarge returns a boolean if a field has been set.

### GetSoc

`func (o *BatteryDeviceTelemetryIntervalsInner) GetSoc() BatteryDeviceTelemetryIntervalsInnerSoc`

GetSoc returns the Soc field if non-nil, zero value otherwise.

### GetSocOk

`func (o *BatteryDeviceTelemetryIntervalsInner) GetSocOk() (*BatteryDeviceTelemetryIntervalsInnerSoc, bool)`

GetSocOk returns a tuple with the Soc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSoc

`func (o *BatteryDeviceTelemetryIntervalsInner) SetSoc(v BatteryDeviceTelemetryIntervalsInnerSoc)`

SetSoc sets Soc field to given value.

### HasSoc

`func (o *BatteryDeviceTelemetryIntervalsInner) HasSoc() bool`

HasSoc returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


