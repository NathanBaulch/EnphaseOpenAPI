# ProductionMeterReadingsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** |  | 
**MeterReadings** | [**[]ProductionMeterReadingsResponseMeterReadingsInner**](ProductionMeterReadingsResponseMeterReadingsInner.md) |  | 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewProductionMeterReadingsResponse

`func NewProductionMeterReadingsResponse(systemId int32, meterReadings []ProductionMeterReadingsResponseMeterReadingsInner, meta Meta, ) *ProductionMeterReadingsResponse`

NewProductionMeterReadingsResponse instantiates a new ProductionMeterReadingsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductionMeterReadingsResponseWithDefaults

`func NewProductionMeterReadingsResponseWithDefaults() *ProductionMeterReadingsResponse`

NewProductionMeterReadingsResponseWithDefaults instantiates a new ProductionMeterReadingsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *ProductionMeterReadingsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *ProductionMeterReadingsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *ProductionMeterReadingsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetMeterReadings

`func (o *ProductionMeterReadingsResponse) GetMeterReadings() []ProductionMeterReadingsResponseMeterReadingsInner`

GetMeterReadings returns the MeterReadings field if non-nil, zero value otherwise.

### GetMeterReadingsOk

`func (o *ProductionMeterReadingsResponse) GetMeterReadingsOk() (*[]ProductionMeterReadingsResponseMeterReadingsInner, bool)`

GetMeterReadingsOk returns a tuple with the MeterReadings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterReadings

`func (o *ProductionMeterReadingsResponse) SetMeterReadings(v []ProductionMeterReadingsResponseMeterReadingsInner)`

SetMeterReadings sets MeterReadings field to given value.


### GetMeta

`func (o *ProductionMeterReadingsResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *ProductionMeterReadingsResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *ProductionMeterReadingsResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


