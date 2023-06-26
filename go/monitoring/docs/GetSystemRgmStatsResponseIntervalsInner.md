# GetSystemRgmStatsResponseIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | Pointer to **int64** | End time of the telemetry interval. | [optional] 
**DevicesReporting** | Pointer to **int32** | Number of revenue-grade meters that reported data for this interval at the time of the request. | [optional] 
**WhDel** | Pointer to **int32** | Energy delivered during this interval, in Wh. | [optional] 

## Methods

### NewGetSystemRgmStatsResponseIntervalsInner

`func NewGetSystemRgmStatsResponseIntervalsInner() *GetSystemRgmStatsResponseIntervalsInner`

NewGetSystemRgmStatsResponseIntervalsInner instantiates a new GetSystemRgmStatsResponseIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemRgmStatsResponseIntervalsInnerWithDefaults

`func NewGetSystemRgmStatsResponseIntervalsInnerWithDefaults() *GetSystemRgmStatsResponseIntervalsInner`

NewGetSystemRgmStatsResponseIntervalsInnerWithDefaults instantiates a new GetSystemRgmStatsResponseIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndAt

`func (o *GetSystemRgmStatsResponseIntervalsInner) GetEndAt() int64`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *GetSystemRgmStatsResponseIntervalsInner) GetEndAtOk() (*int64, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *GetSystemRgmStatsResponseIntervalsInner) SetEndAt(v int64)`

SetEndAt sets EndAt field to given value.

### HasEndAt

`func (o *GetSystemRgmStatsResponseIntervalsInner) HasEndAt() bool`

HasEndAt returns a boolean if a field has been set.

### GetDevicesReporting

`func (o *GetSystemRgmStatsResponseIntervalsInner) GetDevicesReporting() int32`

GetDevicesReporting returns the DevicesReporting field if non-nil, zero value otherwise.

### GetDevicesReportingOk

`func (o *GetSystemRgmStatsResponseIntervalsInner) GetDevicesReportingOk() (*int32, bool)`

GetDevicesReportingOk returns a tuple with the DevicesReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevicesReporting

`func (o *GetSystemRgmStatsResponseIntervalsInner) SetDevicesReporting(v int32)`

SetDevicesReporting sets DevicesReporting field to given value.

### HasDevicesReporting

`func (o *GetSystemRgmStatsResponseIntervalsInner) HasDevicesReporting() bool`

HasDevicesReporting returns a boolean if a field has been set.

### GetWhDel

`func (o *GetSystemRgmStatsResponseIntervalsInner) GetWhDel() int32`

GetWhDel returns the WhDel field if non-nil, zero value otherwise.

### GetWhDelOk

`func (o *GetSystemRgmStatsResponseIntervalsInner) GetWhDelOk() (*int32, bool)`

GetWhDelOk returns a tuple with the WhDel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhDel

`func (o *GetSystemRgmStatsResponseIntervalsInner) SetWhDel(v int32)`

SetWhDel sets WhDel field to given value.

### HasWhDel

`func (o *GetSystemRgmStatsResponseIntervalsInner) HasWhDel() bool`

HasWhDel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


