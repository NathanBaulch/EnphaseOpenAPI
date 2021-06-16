# ProductionMeterReadings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** |  | 
**MeterReadings** | [**[]ProductionMeterReadingsMeterReadings**](ProductionMeterReadingsMeterReadings.md) |  | 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewProductionMeterReadings

`func NewProductionMeterReadings(systemId int32, meterReadings []ProductionMeterReadingsMeterReadings, meta Meta, ) *ProductionMeterReadings`

NewProductionMeterReadings instantiates a new ProductionMeterReadings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductionMeterReadingsWithDefaults

`func NewProductionMeterReadingsWithDefaults() *ProductionMeterReadings`

NewProductionMeterReadingsWithDefaults instantiates a new ProductionMeterReadings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *ProductionMeterReadings) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *ProductionMeterReadings) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *ProductionMeterReadings) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetMeterReadings

`func (o *ProductionMeterReadings) GetMeterReadings() []ProductionMeterReadingsMeterReadings`

GetMeterReadings returns the MeterReadings field if non-nil, zero value otherwise.

### GetMeterReadingsOk

`func (o *ProductionMeterReadings) GetMeterReadingsOk() (*[]ProductionMeterReadingsMeterReadings, bool)`

GetMeterReadingsOk returns a tuple with the MeterReadings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterReadings

`func (o *ProductionMeterReadings) SetMeterReadings(v []ProductionMeterReadingsMeterReadings)`

SetMeterReadings sets MeterReadings field to given value.


### GetMeta

`func (o *ProductionMeterReadings) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *ProductionMeterReadings) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *ProductionMeterReadings) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


