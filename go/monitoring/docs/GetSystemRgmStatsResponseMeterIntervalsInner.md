# GetSystemRgmStatsResponseMeterIntervalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MeterSerialNumber** | Pointer to **string** | Meter serial number. | [optional] 
**EnvoySerialNumber** | Pointer to **string** | Envoy serial number of the system that the micro reports to. | [optional] 
**Intervals** | Pointer to [**[]GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner**](GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner.md) | Individual meter level interval. | [optional] 

## Methods

### NewGetSystemRgmStatsResponseMeterIntervalsInner

`func NewGetSystemRgmStatsResponseMeterIntervalsInner() *GetSystemRgmStatsResponseMeterIntervalsInner`

NewGetSystemRgmStatsResponseMeterIntervalsInner instantiates a new GetSystemRgmStatsResponseMeterIntervalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemRgmStatsResponseMeterIntervalsInnerWithDefaults

`func NewGetSystemRgmStatsResponseMeterIntervalsInnerWithDefaults() *GetSystemRgmStatsResponseMeterIntervalsInner`

NewGetSystemRgmStatsResponseMeterIntervalsInnerWithDefaults instantiates a new GetSystemRgmStatsResponseMeterIntervalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMeterSerialNumber

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetMeterSerialNumber() string`

GetMeterSerialNumber returns the MeterSerialNumber field if non-nil, zero value otherwise.

### GetMeterSerialNumberOk

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetMeterSerialNumberOk() (*string, bool)`

GetMeterSerialNumberOk returns a tuple with the MeterSerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterSerialNumber

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) SetMeterSerialNumber(v string)`

SetMeterSerialNumber sets MeterSerialNumber field to given value.

### HasMeterSerialNumber

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) HasMeterSerialNumber() bool`

HasMeterSerialNumber returns a boolean if a field has been set.

### GetEnvoySerialNumber

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetEnvoySerialNumber() string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetEnvoySerialNumberOk() (*string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) SetEnvoySerialNumber(v string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.

### HasEnvoySerialNumber

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) HasEnvoySerialNumber() bool`

HasEnvoySerialNumber returns a boolean if a field has been set.

### GetIntervals

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetIntervals() []GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner`

GetIntervals returns the Intervals field if non-nil, zero value otherwise.

### GetIntervalsOk

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) GetIntervalsOk() (*[]GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner, bool)`

GetIntervalsOk returns a tuple with the Intervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervals

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) SetIntervals(v []GetSystemRgmStatsResponseMeterIntervalsInnerIntervalsInner)`

SetIntervals sets Intervals field to given value.

### HasIntervals

`func (o *GetSystemRgmStatsResponseMeterIntervalsInner) HasIntervals() bool`

HasIntervals returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


