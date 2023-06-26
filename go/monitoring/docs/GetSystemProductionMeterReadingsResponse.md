# GetSystemProductionMeterReadingsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | System ID. | [optional] 
**MeterReadings** | Pointer to [**[]GetSystemProductionMeterReadingsResponseMeterReadingsInner**](GetSystemProductionMeterReadingsResponseMeterReadingsInner.md) | Production meter readings. | [optional] 
**Meta** | Pointer to [**Meta**](Meta.md) |  | [optional] 

## Methods

### NewGetSystemProductionMeterReadingsResponse

`func NewGetSystemProductionMeterReadingsResponse() *GetSystemProductionMeterReadingsResponse`

NewGetSystemProductionMeterReadingsResponse instantiates a new GetSystemProductionMeterReadingsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemProductionMeterReadingsResponseWithDefaults

`func NewGetSystemProductionMeterReadingsResponseWithDefaults() *GetSystemProductionMeterReadingsResponse`

NewGetSystemProductionMeterReadingsResponseWithDefaults instantiates a new GetSystemProductionMeterReadingsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemProductionMeterReadingsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemProductionMeterReadingsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemProductionMeterReadingsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemProductionMeterReadingsResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetMeterReadings

`func (o *GetSystemProductionMeterReadingsResponse) GetMeterReadings() []GetSystemProductionMeterReadingsResponseMeterReadingsInner`

GetMeterReadings returns the MeterReadings field if non-nil, zero value otherwise.

### GetMeterReadingsOk

`func (o *GetSystemProductionMeterReadingsResponse) GetMeterReadingsOk() (*[]GetSystemProductionMeterReadingsResponseMeterReadingsInner, bool)`

GetMeterReadingsOk returns a tuple with the MeterReadings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterReadings

`func (o *GetSystemProductionMeterReadingsResponse) SetMeterReadings(v []GetSystemProductionMeterReadingsResponseMeterReadingsInner)`

SetMeterReadings sets MeterReadings field to given value.

### HasMeterReadings

`func (o *GetSystemProductionMeterReadingsResponse) HasMeterReadings() bool`

HasMeterReadings returns a boolean if a field has been set.

### GetMeta

`func (o *GetSystemProductionMeterReadingsResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *GetSystemProductionMeterReadingsResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *GetSystemProductionMeterReadingsResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *GetSystemProductionMeterReadingsResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


