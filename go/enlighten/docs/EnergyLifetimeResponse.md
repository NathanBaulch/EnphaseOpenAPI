# EnergyLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartDate** | **string** | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | 
**SystemId** | **int32** | The identifier of the system. | 
**Production** | **[]int32** | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | 
**MicroProduction** | Pointer to **[]int32** |  | [optional] 
**MeterProduction** | Pointer to **[]int32** |  | [optional] 
**MeterStartDate** | Pointer to **string** | The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. | [optional] 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewEnergyLifetimeResponse

`func NewEnergyLifetimeResponse(startDate string, systemId int32, production []int32, meta Meta, ) *EnergyLifetimeResponse`

NewEnergyLifetimeResponse instantiates a new EnergyLifetimeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnergyLifetimeResponseWithDefaults

`func NewEnergyLifetimeResponseWithDefaults() *EnergyLifetimeResponse`

NewEnergyLifetimeResponseWithDefaults instantiates a new EnergyLifetimeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartDate

`func (o *EnergyLifetimeResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *EnergyLifetimeResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *EnergyLifetimeResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetSystemId

`func (o *EnergyLifetimeResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *EnergyLifetimeResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *EnergyLifetimeResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetProduction

`func (o *EnergyLifetimeResponse) GetProduction() []int32`

GetProduction returns the Production field if non-nil, zero value otherwise.

### GetProductionOk

`func (o *EnergyLifetimeResponse) GetProductionOk() (*[]int32, bool)`

GetProductionOk returns a tuple with the Production field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduction

`func (o *EnergyLifetimeResponse) SetProduction(v []int32)`

SetProduction sets Production field to given value.


### GetMicroProduction

`func (o *EnergyLifetimeResponse) GetMicroProduction() []int32`

GetMicroProduction returns the MicroProduction field if non-nil, zero value otherwise.

### GetMicroProductionOk

`func (o *EnergyLifetimeResponse) GetMicroProductionOk() (*[]int32, bool)`

GetMicroProductionOk returns a tuple with the MicroProduction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMicroProduction

`func (o *EnergyLifetimeResponse) SetMicroProduction(v []int32)`

SetMicroProduction sets MicroProduction field to given value.

### HasMicroProduction

`func (o *EnergyLifetimeResponse) HasMicroProduction() bool`

HasMicroProduction returns a boolean if a field has been set.

### GetMeterProduction

`func (o *EnergyLifetimeResponse) GetMeterProduction() []int32`

GetMeterProduction returns the MeterProduction field if non-nil, zero value otherwise.

### GetMeterProductionOk

`func (o *EnergyLifetimeResponse) GetMeterProductionOk() (*[]int32, bool)`

GetMeterProductionOk returns a tuple with the MeterProduction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterProduction

`func (o *EnergyLifetimeResponse) SetMeterProduction(v []int32)`

SetMeterProduction sets MeterProduction field to given value.

### HasMeterProduction

`func (o *EnergyLifetimeResponse) HasMeterProduction() bool`

HasMeterProduction returns a boolean if a field has been set.

### GetMeterStartDate

`func (o *EnergyLifetimeResponse) GetMeterStartDate() string`

GetMeterStartDate returns the MeterStartDate field if non-nil, zero value otherwise.

### GetMeterStartDateOk

`func (o *EnergyLifetimeResponse) GetMeterStartDateOk() (*string, bool)`

GetMeterStartDateOk returns a tuple with the MeterStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterStartDate

`func (o *EnergyLifetimeResponse) SetMeterStartDate(v string)`

SetMeterStartDate sets MeterStartDate field to given value.

### HasMeterStartDate

`func (o *EnergyLifetimeResponse) HasMeterStartDate() bool`

HasMeterStartDate returns a boolean if a field has been set.

### GetMeta

`func (o *EnergyLifetimeResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *EnergyLifetimeResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *EnergyLifetimeResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


