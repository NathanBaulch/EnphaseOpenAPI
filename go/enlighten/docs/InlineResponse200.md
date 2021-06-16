# InlineResponse200

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

### NewInlineResponse200

`func NewInlineResponse200(startDate string, systemId int32, production []int32, microProduction []int32, meterProduction []int32, meterStartDate string, meta Meta, ) *InlineResponse200`

NewInlineResponse200 instantiates a new InlineResponse200 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse200WithDefaults

`func NewInlineResponse200WithDefaults() *InlineResponse200`

NewInlineResponse200WithDefaults instantiates a new InlineResponse200 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartDate

`func (o *InlineResponse200) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *InlineResponse200) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *InlineResponse200) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetSystemId

`func (o *InlineResponse200) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *InlineResponse200) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *InlineResponse200) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetProduction

`func (o *InlineResponse200) GetProduction() []int32`

GetProduction returns the Production field if non-nil, zero value otherwise.

### GetProductionOk

`func (o *InlineResponse200) GetProductionOk() (*[]int32, bool)`

GetProductionOk returns a tuple with the Production field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduction

`func (o *InlineResponse200) SetProduction(v []int32)`

SetProduction sets Production field to given value.


### GetMicroProduction

`func (o *InlineResponse200) GetMicroProduction() []int32`

GetMicroProduction returns the MicroProduction field if non-nil, zero value otherwise.

### GetMicroProductionOk

`func (o *InlineResponse200) GetMicroProductionOk() (*[]int32, bool)`

GetMicroProductionOk returns a tuple with the MicroProduction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMicroProduction

`func (o *InlineResponse200) SetMicroProduction(v []int32)`

SetMicroProduction sets MicroProduction field to given value.


### GetMeterProduction

`func (o *InlineResponse200) GetMeterProduction() []int32`

GetMeterProduction returns the MeterProduction field if non-nil, zero value otherwise.

### GetMeterProductionOk

`func (o *InlineResponse200) GetMeterProductionOk() (*[]int32, bool)`

GetMeterProductionOk returns a tuple with the MeterProduction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterProduction

`func (o *InlineResponse200) SetMeterProduction(v []int32)`

SetMeterProduction sets MeterProduction field to given value.


### GetMeterStartDate

`func (o *InlineResponse200) GetMeterStartDate() string`

GetMeterStartDate returns the MeterStartDate field if non-nil, zero value otherwise.

### GetMeterStartDateOk

`func (o *InlineResponse200) GetMeterStartDateOk() (*string, bool)`

GetMeterStartDateOk returns a tuple with the MeterStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterStartDate

`func (o *InlineResponse200) SetMeterStartDate(v string)`

SetMeterStartDate sets MeterStartDate field to given value.


### GetMeta

`func (o *InlineResponse200) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *InlineResponse200) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *InlineResponse200) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


