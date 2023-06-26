# GetSystemEnergyImportTelemetryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | Unique numeric ID of the system. | [optional] 
**Granularity** | Pointer to **string** | Granularity of the telemetry data. Default is &#39;day&#39;. | [optional] 
**TotalDevices** | Pointer to **int32** | Number of consumption meters in the site. | [optional] 
**StartAt** | Pointer to **int64** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] 
**EndAt** | Pointer to **int64** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response. | [optional] 
**Items** | Pointer to **string** | List key &#39;intervals&#39;. | [optional] 
**Intervals** | Pointer to [**[][]GetSystemEnergyImportTelemetryResponseIntervalsInnerInner**]([]GetSystemEnergyImportTelemetryResponseIntervalsInnerInner.md) | An array of telemetry objects. | [optional] 
**Meta** | Pointer to [**Meta**](Meta.md) |  | [optional] 

## Methods

### NewGetSystemEnergyImportTelemetryResponse

`func NewGetSystemEnergyImportTelemetryResponse() *GetSystemEnergyImportTelemetryResponse`

NewGetSystemEnergyImportTelemetryResponse instantiates a new GetSystemEnergyImportTelemetryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemEnergyImportTelemetryResponseWithDefaults

`func NewGetSystemEnergyImportTelemetryResponseWithDefaults() *GetSystemEnergyImportTelemetryResponse`

NewGetSystemEnergyImportTelemetryResponseWithDefaults instantiates a new GetSystemEnergyImportTelemetryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemEnergyImportTelemetryResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemEnergyImportTelemetryResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemEnergyImportTelemetryResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemEnergyImportTelemetryResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetGranularity

`func (o *GetSystemEnergyImportTelemetryResponse) GetGranularity() string`

GetGranularity returns the Granularity field if non-nil, zero value otherwise.

### GetGranularityOk

`func (o *GetSystemEnergyImportTelemetryResponse) GetGranularityOk() (*string, bool)`

GetGranularityOk returns a tuple with the Granularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGranularity

`func (o *GetSystemEnergyImportTelemetryResponse) SetGranularity(v string)`

SetGranularity sets Granularity field to given value.

### HasGranularity

`func (o *GetSystemEnergyImportTelemetryResponse) HasGranularity() bool`

HasGranularity returns a boolean if a field has been set.

### GetTotalDevices

`func (o *GetSystemEnergyImportTelemetryResponse) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *GetSystemEnergyImportTelemetryResponse) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *GetSystemEnergyImportTelemetryResponse) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.

### HasTotalDevices

`func (o *GetSystemEnergyImportTelemetryResponse) HasTotalDevices() bool`

HasTotalDevices returns a boolean if a field has been set.

### GetStartAt

`func (o *GetSystemEnergyImportTelemetryResponse) GetStartAt() int64`

GetStartAt returns the StartAt field if non-nil, zero value otherwise.

### GetStartAtOk

`func (o *GetSystemEnergyImportTelemetryResponse) GetStartAtOk() (*int64, bool)`

GetStartAtOk returns a tuple with the StartAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartAt

`func (o *GetSystemEnergyImportTelemetryResponse) SetStartAt(v int64)`

SetStartAt sets StartAt field to given value.

### HasStartAt

`func (o *GetSystemEnergyImportTelemetryResponse) HasStartAt() bool`

HasStartAt returns a boolean if a field has been set.

### GetEndAt

`func (o *GetSystemEnergyImportTelemetryResponse) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *GetSystemEnergyImportTelemetryResponse) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *GetSystemEnergyImportTelemetryResponse) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *GetSystemEnergyImportTelemetryResponse) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetItems

`func (o *GetSystemEnergyImportTelemetryResponse) GetItems() string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *GetSystemEnergyImportTelemetryResponse) GetItemsOk() (*string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *GetSystemEnergyImportTelemetryResponse) SetItems(v string)`

SetItems sets Items field to given value.

### HasItems

`func (o *GetSystemEnergyImportTelemetryResponse) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetIntervals

`func (o *GetSystemEnergyImportTelemetryResponse) GetIntervals() [][]GetSystemEnergyImportTelemetryResponseIntervalsInnerInner`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *GetSystemEnergyImportTelemetryResponse) GetIntervalsOk() (*[][]GetSystemEnergyImportTelemetryResponseIntervalsInnerInner, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *GetSystemEnergyImportTelemetryResponse) SetIntervals(v [][]GetSystemEnergyImportTelemetryResponseIntervalsInnerInner)`

SetIntervals sets Intervals field to given value.

### HasIntervals

`func (o *GetSystemEnergyImportTelemetryResponse) HasIntervals() bool`

HasIntervals returns a boolean if a field has been set.

### GetMeta

`func (o *GetSystemEnergyImportTelemetryResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *GetSystemEnergyImportTelemetryResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *GetSystemEnergyImportTelemetryResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *GetSystemEnergyImportTelemetryResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


