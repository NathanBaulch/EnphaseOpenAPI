# GetSystemBatteryTelemetryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | Unique numeric ID of the system. | [optional] 
**Granularity** | Pointer to [**TelemetryGranularityEnum**](TelemetryGranularityEnum.md) |  | [optional] 
**TotalDevices** | Pointer to **int32** | Number of batteries in the site. | [optional] 
**StartAt** | Pointer to **int64** | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] 
**EndAt** | Pointer to **int64** | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response. | [optional] 
**Items** | Pointer to **string** | List key &#39;intervals&#39;. | [optional] 
**Intervals** | Pointer to [**[]GetSystemBatteryTelemetryResponseIntervalsInner**](GetSystemBatteryTelemetryResponseIntervalsInner.md) |  | [optional] 
**LastReportedAggregateSoc** | Pointer to **string** | Last reported aggregate soc percentage. | [optional] 

## Methods

### NewGetSystemBatteryTelemetryResponse

`func NewGetSystemBatteryTelemetryResponse() *GetSystemBatteryTelemetryResponse`

NewGetSystemBatteryTelemetryResponse instantiates a new GetSystemBatteryTelemetryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemBatteryTelemetryResponseWithDefaults

`func NewGetSystemBatteryTelemetryResponseWithDefaults() *GetSystemBatteryTelemetryResponse`

NewGetSystemBatteryTelemetryResponseWithDefaults instantiates a new GetSystemBatteryTelemetryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemBatteryTelemetryResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemBatteryTelemetryResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemBatteryTelemetryResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemBatteryTelemetryResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetGranularity

`func (o *GetSystemBatteryTelemetryResponse) GetGranularity() TelemetryGranularityEnum`

GetGranularity returns the Granularity field if non-nil, zero value otherwise.

### GetGranularityOk

`func (o *GetSystemBatteryTelemetryResponse) GetGranularityOk() (*TelemetryGranularityEnum, bool)`

GetGranularityOk returns a tuple with the Granularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGranularity

`func (o *GetSystemBatteryTelemetryResponse) SetGranularity(v TelemetryGranularityEnum)`

SetGranularity sets Granularity field to given value.

### HasGranularity

`func (o *GetSystemBatteryTelemetryResponse) HasGranularity() bool`

HasGranularity returns a boolean if a field has been set.

### GetTotalDevices

`func (o *GetSystemBatteryTelemetryResponse) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *GetSystemBatteryTelemetryResponse) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *GetSystemBatteryTelemetryResponse) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.

### HasTotalDevices

`func (o *GetSystemBatteryTelemetryResponse) HasTotalDevices() bool`

HasTotalDevices returns a boolean if a field has been set.

### GetStartAt

`func (o *GetSystemBatteryTelemetryResponse) GetStartAt() int64`

GetStartAt returns the StartAt field if non-nil, zero value otherwise.

### GetStartAtOk

`func (o *GetSystemBatteryTelemetryResponse) GetStartAtOk() (*int64, bool)`

GetStartAtOk returns a tuple with the StartAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartAt

`func (o *GetSystemBatteryTelemetryResponse) SetStartAt(v int64)`

SetStartAt sets StartAt field to given value.

### HasStartAt

`func (o *GetSystemBatteryTelemetryResponse) HasStartAt() bool`

HasStartAt returns a boolean if a field has been set.

### GetEndAt

`func (o *GetSystemBatteryTelemetryResponse) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *GetSystemBatteryTelemetryResponse) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *GetSystemBatteryTelemetryResponse) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *GetSystemBatteryTelemetryResponse) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetItems

`func (o *GetSystemBatteryTelemetryResponse) GetItems() string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *GetSystemBatteryTelemetryResponse) GetItemsOk() (*string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *GetSystemBatteryTelemetryResponse) SetItems(v string)`

SetItems sets Items field to given value.

### HasItems

`func (o *GetSystemBatteryTelemetryResponse) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetIntervals

`func (o *GetSystemBatteryTelemetryResponse) GetIntervals() []GetSystemBatteryTelemetryResponseIntervalsInner`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *GetSystemBatteryTelemetryResponse) GetIntervalsOk() (*[]GetSystemBatteryTelemetryResponseIntervalsInner, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *GetSystemBatteryTelemetryResponse) SetIntervals(v []GetSystemBatteryTelemetryResponseIntervalsInner)`

SetIntervals sets Intervals field to given value.

### HasIntervals

`func (o *GetSystemBatteryTelemetryResponse) HasIntervals() bool`

HasIntervals returns a boolean if a field has been set.

### GetLastReportedAggregateSoc

`func (o *GetSystemBatteryTelemetryResponse) GetLastReportedAggregateSoc() string`

GetLastReportedAggregateSoc returns the LastReportedAggregateSoc field if non-nil, zero value otherwise.

### GetLastReportedAggregateSocOk

`func (o *GetSystemBatteryTelemetryResponse) GetLastReportedAggregateSocOk() (*string, bool)`

GetLastReportedAggregateSocOk returns a tuple with the LastReportedAggregateSoc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportedAggregateSoc

`func (o *GetSystemBatteryTelemetryResponse) SetLastReportedAggregateSoc(v string)`

SetLastReportedAggregateSoc sets LastReportedAggregateSoc field to given value.

### HasLastReportedAggregateSoc

`func (o *GetSystemBatteryTelemetryResponse) HasLastReportedAggregateSoc() bool`

HasLastReportedAggregateSoc returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


