# InventoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | Enlighten ID for this system. | 
**Envoys** | Pointer to [**[]InventoryResponseEnvoys**](InventoryResponseEnvoys.md) | A list of Envoys on this system, including serial number. | [optional] 
**Inverters** | [**[]InventoryResponseEnvoys**](InventoryResponseEnvoys.md) | A list of inverters on this system, including serial and model numbers. | 
**Meters** | [**[]InventoryResponseMeters**](InventoryResponseMeters.md) | A list of meters on this system, including serial number, manufacturer, and model number. | 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewInventoryResponse

`func NewInventoryResponse(systemId int32, inverters []InventoryResponseEnvoys, meters []InventoryResponseMeters, meta Meta, ) *InventoryResponse`

NewInventoryResponse instantiates a new InventoryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryResponseWithDefaults

`func NewInventoryResponseWithDefaults() *InventoryResponse`

NewInventoryResponseWithDefaults instantiates a new InventoryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *InventoryResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *InventoryResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *InventoryResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetEnvoys

`func (o *InventoryResponse) GetEnvoys() []InventoryResponseEnvoys`

GetEnvoys returns the Envoys field if non-nil, zero value otherwise.

### GetEnvoysOk

`func (o *InventoryResponse) GetEnvoysOk() (*[]InventoryResponseEnvoys, bool)`

GetEnvoysOk returns a tuple with the Envoys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoys

`func (o *InventoryResponse) SetEnvoys(v []InventoryResponseEnvoys)`

SetEnvoys sets Envoys field to given value.

### HasEnvoys

`func (o *InventoryResponse) HasEnvoys() bool`

HasEnvoys returns a boolean if a field has been set.

### GetInverters

`func (o *InventoryResponse) GetInverters() []InventoryResponseEnvoys`

GetInverters returns the Inverters field if non-nil, zero value otherwise.

### GetInvertersOk

`func (o *InventoryResponse) GetInvertersOk() (*[]InventoryResponseEnvoys, bool)`

GetInvertersOk returns a tuple with the Inverters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInverters

`func (o *InventoryResponse) SetInverters(v []InventoryResponseEnvoys)`

SetInverters sets Inverters field to given value.


### GetMeters

`func (o *InventoryResponse) GetMeters() []InventoryResponseMeters`

GetMeters returns the Meters field if non-nil, zero value otherwise.

### GetMetersOk

`func (o *InventoryResponse) GetMetersOk() (*[]InventoryResponseMeters, bool)`

GetMetersOk returns a tuple with the Meters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeters

`func (o *InventoryResponse) SetMeters(v []InventoryResponseMeters)`

SetMeters sets Meters field to given value.


### GetMeta

`func (o *InventoryResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *InventoryResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *InventoryResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


