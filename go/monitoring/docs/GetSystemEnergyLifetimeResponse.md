# GetSystemEnergyLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | System ID. | [optional] 
**StartDate** | Pointer to **string** | When no start_date parameter is specified on the request, this is the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, it is included here in the response. | [optional] 
**MeterStartDate** | Pointer to **string** | First day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. | [optional] 
**Production** | Pointer to **[]int32** | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional] 
**MicroProduction** | Pointer to **[]int32** |  | [optional] 
**MeterProduction** | Pointer to **[]int32** |  | [optional] 
**Meta** | Pointer to [**Meta**](Meta.md) |  | [optional] 

## Methods

### NewGetSystemEnergyLifetimeResponse

`func NewGetSystemEnergyLifetimeResponse() *GetSystemEnergyLifetimeResponse`

NewGetSystemEnergyLifetimeResponse instantiates a new GetSystemEnergyLifetimeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemEnergyLifetimeResponseWithDefaults

`func NewGetSystemEnergyLifetimeResponseWithDefaults() *GetSystemEnergyLifetimeResponse`

NewGetSystemEnergyLifetimeResponseWithDefaults instantiates a new GetSystemEnergyLifetimeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemEnergyLifetimeResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemEnergyLifetimeResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemEnergyLifetimeResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemEnergyLifetimeResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetStartDate

`func (o *GetSystemEnergyLifetimeResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *GetSystemEnergyLifetimeResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *GetSystemEnergyLifetimeResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *GetSystemEnergyLifetimeResponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetMeterStartDate

`func (o *GetSystemEnergyLifetimeResponse) GetMeterStartDate() string`

GetMeterStartDate returns the MeterStartDate field if non-nil, zero value otherwise.

### GetMeterStartDateOk

`func (o *GetSystemEnergyLifetimeResponse) GetMeterStartDateOk() (*string, bool)`

GetMeterStartDateOk returns a tuple with the MeterStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterStartDate

`func (o *GetSystemEnergyLifetimeResponse) SetMeterStartDate(v string)`

SetMeterStartDate sets MeterStartDate field to given value.

### HasMeterStartDate

`func (o *GetSystemEnergyLifetimeResponse) HasMeterStartDate() bool`

HasMeterStartDate returns a boolean if a field has been set.

### GetProduction

`func (o *GetSystemEnergyLifetimeResponse) GetProduction() []int32`

GetProduction returns the Production field if non-nil, zero value otherwise.

### GetProductionOk

`func (o *GetSystemEnergyLifetimeResponse) GetProductionOk() (*[]int32, bool)`

GetProductionOk returns a tuple with the Production field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduction

`func (o *GetSystemEnergyLifetimeResponse) SetProduction(v []int32)`

SetProduction sets Production field to given value.

### HasProduction

`func (o *GetSystemEnergyLifetimeResponse) HasProduction() bool`

HasProduction returns a boolean if a field has been set.

### GetMicroProduction

`func (o *GetSystemEnergyLifetimeResponse) GetMicroProduction() []int32`

GetMicroProduction returns the MicroProduction field if non-nil, zero value otherwise.

### GetMicroProductionOk

`func (o *GetSystemEnergyLifetimeResponse) GetMicroProductionOk() (*[]int32, bool)`

GetMicroProductionOk returns a tuple with the MicroProduction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMicroProduction

`func (o *GetSystemEnergyLifetimeResponse) SetMicroProduction(v []int32)`

SetMicroProduction sets MicroProduction field to given value.

### HasMicroProduction

`func (o *GetSystemEnergyLifetimeResponse) HasMicroProduction() bool`

HasMicroProduction returns a boolean if a field has been set.

### GetMeterProduction

`func (o *GetSystemEnergyLifetimeResponse) GetMeterProduction() []int32`

GetMeterProduction returns the MeterProduction field if non-nil, zero value otherwise.

### GetMeterProductionOk

`func (o *GetSystemEnergyLifetimeResponse) GetMeterProductionOk() (*[]int32, bool)`

GetMeterProductionOk returns a tuple with the MeterProduction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterProduction

`func (o *GetSystemEnergyLifetimeResponse) SetMeterProduction(v []int32)`

SetMeterProduction sets MeterProduction field to given value.

### HasMeterProduction

`func (o *GetSystemEnergyLifetimeResponse) HasMeterProduction() bool`

HasMeterProduction returns a boolean if a field has been set.

### GetMeta

`func (o *GetSystemEnergyLifetimeResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *GetSystemEnergyLifetimeResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *GetSystemEnergyLifetimeResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *GetSystemEnergyLifetimeResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


