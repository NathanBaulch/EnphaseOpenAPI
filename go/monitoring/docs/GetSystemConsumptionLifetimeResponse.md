# GetSystemConsumptionLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | Unique numeric ID of the system. | [optional] 
**StartDate** | Pointer to **string** | When no start_date parameter is specified on the request, defaults to the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, the same is included in the response. | [optional] 
**Consumption** | Pointer to **[]int32** | An array of consumption measurements in Wh, one for each day since consumption metering began, or one for each day of the requested period. | [optional] 
**Meta** | Pointer to [**Meta**](Meta.md) |  | [optional] 

## Methods

### NewGetSystemConsumptionLifetimeResponse

`func NewGetSystemConsumptionLifetimeResponse() *GetSystemConsumptionLifetimeResponse`

NewGetSystemConsumptionLifetimeResponse instantiates a new GetSystemConsumptionLifetimeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemConsumptionLifetimeResponseWithDefaults

`func NewGetSystemConsumptionLifetimeResponseWithDefaults() *GetSystemConsumptionLifetimeResponse`

NewGetSystemConsumptionLifetimeResponseWithDefaults instantiates a new GetSystemConsumptionLifetimeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemConsumptionLifetimeResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemConsumptionLifetimeResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemConsumptionLifetimeResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemConsumptionLifetimeResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetStartDate

`func (o *GetSystemConsumptionLifetimeResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *GetSystemConsumptionLifetimeResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *GetSystemConsumptionLifetimeResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *GetSystemConsumptionLifetimeResponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetConsumption

`func (o *GetSystemConsumptionLifetimeResponse) GetConsumption() []int32`

GetConsumption returns the Consumption field if non-nil, zero value otherwise.

### GetConsumptionOk

`func (o *GetSystemConsumptionLifetimeResponse) GetConsumptionOk() (*[]int32, bool)`

GetConsumptionOk returns a tuple with the Consumption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumption

`func (o *GetSystemConsumptionLifetimeResponse) SetConsumption(v []int32)`

SetConsumption sets Consumption field to given value.

### HasConsumption

`func (o *GetSystemConsumptionLifetimeResponse) HasConsumption() bool`

HasConsumption returns a boolean if a field has been set.

### GetMeta

`func (o *GetSystemConsumptionLifetimeResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *GetSystemConsumptionLifetimeResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *GetSystemConsumptionLifetimeResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *GetSystemConsumptionLifetimeResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


