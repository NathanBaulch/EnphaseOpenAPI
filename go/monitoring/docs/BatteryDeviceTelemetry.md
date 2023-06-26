# BatteryDeviceTelemetry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | System ID. | [optional] 
**SerialNumber** | Pointer to **string** | Device serial number. | [optional] 
**Granularity** | Pointer to [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) |  | [optional] 
**TotalDevices** | Pointer to **int32** | Shall always be 1 since this is telemetry from individual micros. | [optional] 
**StartAt** | Pointer to **int64** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter passed in the url then start_date field will appear in response. | [optional] 
**EndAt** | Pointer to **int64** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter passed in the url then end_date field will appear in response. | [optional] 
**Items** | Pointer to **string** | List key &#39;intervals&#39;. | [optional] 
**Intervals** | Pointer to [**[]BatteryDeviceTelemetryIntervalsInner**](BatteryDeviceTelemetryIntervalsInner.md) |  | [optional] 
**LastReportedTime** | Pointer to **int32** | Last reported timestamp. | [optional] 
**LastReportedSoc** | Pointer to **string** | Last reported soc percentage. | [optional] 

## Methods

### NewBatteryDeviceTelemetry

`func NewBatteryDeviceTelemetry() *BatteryDeviceTelemetry`

NewBatteryDeviceTelemetry instantiates a new BatteryDeviceTelemetry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatteryDeviceTelemetryWithDefaults

`func NewBatteryDeviceTelemetryWithDefaults() *BatteryDeviceTelemetry`

NewBatteryDeviceTelemetryWithDefaults instantiates a new BatteryDeviceTelemetry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *BatteryDeviceTelemetry) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *BatteryDeviceTelemetry) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *BatteryDeviceTelemetry) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *BatteryDeviceTelemetry) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetSerialNumber

`func (o *BatteryDeviceTelemetry) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *BatteryDeviceTelemetry) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *BatteryDeviceTelemetry) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.

### HasSerialNumber

`func (o *BatteryDeviceTelemetry) HasSerialNumber() bool`

HasSerialNumber returns a boolean if a field has been set.

### GetGranularity

`func (o *BatteryDeviceTelemetry) GetGranularity() TelemetryGranularityEnum`

GetGranularity returns the Granularity field if non-nil, zero value otherwise.

### GetGranularityOk

`func (o *BatteryDeviceTelemetry) GetGranularityOk() (*TelemetryGranularityEnum, bool)`

GetGranularityOk returns a tuple with the Granularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGranularity

`func (o *BatteryDeviceTelemetry) SetGranularity(v TelemetryGranularityEnum)`

SetGranularity sets Granularity field to given value.

### HasGranularity

`func (o *BatteryDeviceTelemetry) HasGranularity() bool`

HasGranularity returns a boolean if a field has been set.

### GetTotalDevices

`func (o *BatteryDeviceTelemetry) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *BatteryDeviceTelemetry) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *BatteryDeviceTelemetry) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.

### HasTotalDevices

`func (o *BatteryDeviceTelemetry) HasTotalDevices() bool`

HasTotalDevices returns a boolean if a field has been set.

### GetStartAt

`func (o *BatteryDeviceTelemetry) GetStartAt() int64`

GetStartAt returns the StartAt field if non-nil, zero value otherwise.

### GetStartAtOk

`func (o *BatteryDeviceTelemetry) GetStartAtOk() (*int64, bool)`

GetStartAtOk returns a tuple with the StartAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartAt

`func (o *BatteryDeviceTelemetry) SetStartAt(v int64)`

SetStartAt sets StartAt field to given value.

### HasStartAt

`func (o *BatteryDeviceTelemetry) HasStartAt() bool`

HasStartAt returns a boolean if a field has been set.

### GetEndAt

`func (o *BatteryDeviceTelemetry) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *BatteryDeviceTelemetry) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *BatteryDeviceTelemetry) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *BatteryDeviceTelemetry) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetItems

`func (o *BatteryDeviceTelemetry) GetItems() string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *BatteryDeviceTelemetry) GetItemsOk() (*string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *BatteryDeviceTelemetry) SetItems(v string)`

SetItems sets Items field to given value.

### HasItems

`func (o *BatteryDeviceTelemetry) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetIntervals

`func (o *BatteryDeviceTelemetry) GetIntervals() []BatteryDeviceTelemetryIntervalsInner`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *BatteryDeviceTelemetry) GetIntervalsOk() (*[]BatteryDeviceTelemetryIntervalsInner, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *BatteryDeviceTelemetry) SetIntervals(v []BatteryDeviceTelemetryIntervalsInner)`

SetIntervals sets Intervals field to given value.

### HasIntervals

`func (o *BatteryDeviceTelemetry) HasIntervals() bool`

HasIntervals returns a boolean if a field has been set.

### GetLastReportedTime

`func (o *BatteryDeviceTelemetry) GetLastReportedTime() int32`

GetLastReportedTime returns the LastReportedTime field if non-nil, zero value otherwise.

### GetLastReportedTimeOk

`func (o *BatteryDeviceTelemetry) GetLastReportedTimeOk() (*int32, bool)`

GetLastReportedTimeOk returns a tuple with the LastReportedTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportedTime

`func (o *BatteryDeviceTelemetry) SetLastReportedTime(v int32)`

SetLastReportedTime sets LastReportedTime field to given value.

### HasLastReportedTime

`func (o *BatteryDeviceTelemetry) HasLastReportedTime() bool`

HasLastReportedTime returns a boolean if a field has been set.

### GetLastReportedSoc

`func (o *BatteryDeviceTelemetry) GetLastReportedSoc() string`

GetLastReportedSoc returns the LastReportedSoc field if non-nil, zero value otherwise.

### GetLastReportedSocOk

`func (o *BatteryDeviceTelemetry) GetLastReportedSocOk() (*string, bool)`

GetLastReportedSocOk returns a tuple with the LastReportedSoc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportedSoc

`func (o *BatteryDeviceTelemetry) SetLastReportedSoc(v string)`

SetLastReportedSoc sets LastReportedSoc field to given value.

### HasLastReportedSoc

`func (o *BatteryDeviceTelemetry) HasLastReportedSoc() bool`

HasLastReportedSoc returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


