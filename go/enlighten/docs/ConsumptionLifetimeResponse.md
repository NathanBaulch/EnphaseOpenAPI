# ConsumptionLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartDate** | **string** | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | 
**SystemId** | **int32** | The identifier of the system. | 
**Consumption** | **[]int32** | An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period. | 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewConsumptionLifetimeResponse

`func NewConsumptionLifetimeResponse(startDate string, systemId int32, consumption []int32, meta Meta, ) *ConsumptionLifetimeResponse`

NewConsumptionLifetimeResponse instantiates a new ConsumptionLifetimeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConsumptionLifetimeResponseWithDefaults

`func NewConsumptionLifetimeResponseWithDefaults() *ConsumptionLifetimeResponse`

NewConsumptionLifetimeResponseWithDefaults instantiates a new ConsumptionLifetimeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartDate

`func (o *ConsumptionLifetimeResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ConsumptionLifetimeResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ConsumptionLifetimeResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetSystemId

`func (o *ConsumptionLifetimeResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *ConsumptionLifetimeResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *ConsumptionLifetimeResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetConsumption

`func (o *ConsumptionLifetimeResponse) GetConsumption() []int32`

GetConsumption returns the Consumption field if non-nil, zero value otherwise.

### GetConsumptionOk

`func (o *ConsumptionLifetimeResponse) GetConsumptionOk() (*[]int32, bool)`

GetConsumptionOk returns a tuple with the Consumption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumption

`func (o *ConsumptionLifetimeResponse) SetConsumption(v []int32)`

SetConsumption sets Consumption field to given value.


### GetMeta

`func (o *ConsumptionLifetimeResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *ConsumptionLifetimeResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *ConsumptionLifetimeResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


