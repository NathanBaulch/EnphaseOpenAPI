# EnergyLifetime

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartDate** | **string** | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | 
**SystemId** | **int32** | The identifier of the system. | 
**Production** | **[]int32** | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | 
**MicroProduction** | **[]int32** |  | 
**MeterProduction** | **[]int32** |  | 
**MeterStartDate** | **string** | The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. | 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewEnergyLifetime

`func NewEnergyLifetime(startDate string, systemId int32, production []int32, microProduction []int32, meterProduction []int32, meterStartDate string, meta Meta, ) *EnergyLifetime`

NewEnergyLifetime instantiates a new EnergyLifetime object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnergyLifetimeWithDefaults

`func NewEnergyLifetimeWithDefaults() *EnergyLifetime`

NewEnergyLifetimeWithDefaults instantiates a new EnergyLifetime object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartDate

`func (o *EnergyLifetime) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *EnergyLifetime) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *EnergyLifetime) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetSystemId

`func (o *EnergyLifetime) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *EnergyLifetime) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *EnergyLifetime) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetProduction

`func (o *EnergyLifetime) GetProduction() []int32`

GetProduction returns the Production field if non-nil, zero value otherwise.

### GetProductionOk

`func (o *EnergyLifetime) GetProductionOk() (*[]int32, bool)`

GetProductionOk returns a tuple with the Production field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduction

`func (o *EnergyLifetime) SetProduction(v []int32)`

SetProduction sets Production field to given value.


### GetMicroProduction

`func (o *EnergyLifetime) GetMicroProduction() []int32`

GetMicroProduction returns the MicroProduction field if non-nil, zero value otherwise.

### GetMicroProductionOk

`func (o *EnergyLifetime) GetMicroProductionOk() (*[]int32, bool)`

GetMicroProductionOk returns a tuple with the MicroProduction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMicroProduction

`func (o *EnergyLifetime) SetMicroProduction(v []int32)`

SetMicroProduction sets MicroProduction field to given value.


### GetMeterProduction

`func (o *EnergyLifetime) GetMeterProduction() []int32`

GetMeterProduction returns the MeterProduction field if non-nil, zero value otherwise.

### GetMeterProductionOk

`func (o *EnergyLifetime) GetMeterProductionOk() (*[]int32, bool)`

GetMeterProductionOk returns a tuple with the MeterProduction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterProduction

`func (o *EnergyLifetime) SetMeterProduction(v []int32)`

SetMeterProduction sets MeterProduction field to given value.


### GetMeterStartDate

`func (o *EnergyLifetime) GetMeterStartDate() string`

GetMeterStartDate returns the MeterStartDate field if non-nil, zero value otherwise.

### GetMeterStartDateOk

`func (o *EnergyLifetime) GetMeterStartDateOk() (*string, bool)`

GetMeterStartDateOk returns a tuple with the MeterStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterStartDate

`func (o *EnergyLifetime) SetMeterStartDate(v string)`

SetMeterStartDate sets MeterStartDate field to given value.


### GetMeta

`func (o *EnergyLifetime) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *EnergyLifetime) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *EnergyLifetime) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


