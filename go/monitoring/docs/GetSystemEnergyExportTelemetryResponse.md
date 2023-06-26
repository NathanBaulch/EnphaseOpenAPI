# GetSystemEnergyExportTelemetryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | Unique numeric ID of the system. | [optional] 
**Granularity** | Pointer to **string** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] 
**TotalDevices** | Pointer to **int32** | Number of production meters in the site. | [optional] 
**StartAt** | Pointer to **int64** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] 
**EndAt** | Pointer to **int64** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response. | [optional] 
**Items** | Pointer to **string** | List key &#39;intervals&#39;. | [optional] 
**Intervals** | Pointer to [**[][]GetSystemEnergyExportTelemetryResponseIntervalsInnerInner**]([]GetSystemEnergyExportTelemetryResponseIntervalsInnerInner.md) | An array of telemetry objects. | [optional] 
**Meta** | Pointer to [**Meta**](Meta.md) |  | [optional] 

## Methods

### NewGetSystemEnergyExportTelemetryResponse

`func NewGetSystemEnergyExportTelemetryResponse() *GetSystemEnergyExportTelemetryResponse`

NewGetSystemEnergyExportTelemetryResponse instantiates a new GetSystemEnergyExportTelemetryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemEnergyExportTelemetryResponseWithDefaults

`func NewGetSystemEnergyExportTelemetryResponseWithDefaults() *GetSystemEnergyExportTelemetryResponse`

NewGetSystemEnergyExportTelemetryResponseWithDefaults instantiates a new GetSystemEnergyExportTelemetryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemEnergyExportTelemetryResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemEnergyExportTelemetryResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemEnergyExportTelemetryResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemEnergyExportTelemetryResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetGranularity

`func (o *GetSystemEnergyExportTelemetryResponse) GetGranularity() string`

GetGranularity returns the Granularity field if non-nil, zero value otherwise.

### GetGranularityOk

`func (o *GetSystemEnergyExportTelemetryResponse) GetGranularityOk() (*string, bool)`

GetGranularityOk returns a tuple with the Granularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGranularity

`func (o *GetSystemEnergyExportTelemetryResponse) SetGranularity(v string)`

SetGranularity sets Granularity field to given value.

### HasGranularity

`func (o *GetSystemEnergyExportTelemetryResponse) HasGranularity() bool`

HasGranularity returns a boolean if a field has been set.

### GetTotalDevices

`func (o *GetSystemEnergyExportTelemetryResponse) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *GetSystemEnergyExportTelemetryResponse) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *GetSystemEnergyExportTelemetryResponse) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.

### HasTotalDevices

`func (o *GetSystemEnergyExportTelemetryResponse) HasTotalDevices() bool`

HasTotalDevices returns a boolean if a field has been set.

### GetStartAt

`func (o *GetSystemEnergyExportTelemetryResponse) GetStartAt() int64`

GetStartAt returns the StartAt field if non-nil, zero value otherwise.

### GetStartAtOk

`func (o *GetSystemEnergyExportTelemetryResponse) GetStartAtOk() (*int64, bool)`

GetStartAtOk returns a tuple with the StartAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartAt

`func (o *GetSystemEnergyExportTelemetryResponse) SetStartAt(v int64)`

SetStartAt sets StartAt field to given value.

### HasStartAt

`func (o *GetSystemEnergyExportTelemetryResponse) HasStartAt() bool`

HasStartAt returns a boolean if a field has been set.

### GetEndAt

`func (o *GetSystemEnergyExportTelemetryResponse) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *GetSystemEnergyExportTelemetryResponse) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *GetSystemEnergyExportTelemetryResponse) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *GetSystemEnergyExportTelemetryResponse) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetItems

`func (o *GetSystemEnergyExportTelemetryResponse) GetItems() string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *GetSystemEnergyExportTelemetryResponse) GetItemsOk() (*string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *GetSystemEnergyExportTelemetryResponse) SetItems(v string)`

SetItems sets Items field to given value.

### HasItems

`func (o *GetSystemEnergyExportTelemetryResponse) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetIntervals

`func (o *GetSystemEnergyExportTelemetryResponse) GetIntervals() [][]GetSystemEnergyExportTelemetryResponseIntervalsInnerInner`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *GetSystemEnergyExportTelemetryResponse) GetIntervalsOk() (*[][]GetSystemEnergyExportTelemetryResponseIntervalsInnerInner, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *GetSystemEnergyExportTelemetryResponse) SetIntervals(v [][]GetSystemEnergyExportTelemetryResponseIntervalsInnerInner)`

SetIntervals sets Intervals field to given value.

### HasIntervals

`func (o *GetSystemEnergyExportTelemetryResponse) HasIntervals() bool`

HasIntervals returns a boolean if a field has been set.

### GetMeta

`func (o *GetSystemEnergyExportTelemetryResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *GetSystemEnergyExportTelemetryResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *GetSystemEnergyExportTelemetryResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *GetSystemEnergyExportTelemetryResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


