# Inventory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | Enlighten ID for this system. | 
**Envoys** | Pointer to [**[]InventoryEnvoys**](InventoryEnvoys.md) | A list of Envoys on this system, including serial number. | [optional] 
**Inverters** | [**[]InventoryEnvoys**](InventoryEnvoys.md) | A list of inverters on this system, including serial and model numbers. | 
**Meters** | [**[]InventoryMeters**](InventoryMeters.md) | A list of meters on this system, including serial number, manufacturer, and model number. | 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewInventory

`func NewInventory(systemId int32, inverters []InventoryEnvoys, meters []InventoryMeters, meta Meta, ) *Inventory`

NewInventory instantiates a new Inventory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryWithDefaults

`func NewInventoryWithDefaults() *Inventory`

NewInventoryWithDefaults instantiates a new Inventory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *Inventory) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *Inventory) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *Inventory) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetEnvoys

`func (o *Inventory) GetEnvoys() []InventoryEnvoys`

GetEnvoys returns the Envoys field if non-nil, zero value otherwise.

### GetEnvoysOk

`func (o *Inventory) GetEnvoysOk() (*[]InventoryEnvoys, bool)`

GetEnvoysOk returns a tuple with the Envoys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoys

`func (o *Inventory) SetEnvoys(v []InventoryEnvoys)`

SetEnvoys sets Envoys field to given value.

### HasEnvoys

`func (o *Inventory) HasEnvoys() bool`

HasEnvoys returns a boolean if a field has been set.

### GetInverters

`func (o *Inventory) GetInverters() []InventoryEnvoys`

GetInverters returns the Inverters field if non-nil, zero value otherwise.

### GetInvertersOk

`func (o *Inventory) GetInvertersOk() (*[]InventoryEnvoys, bool)`

GetInvertersOk returns a tuple with the Inverters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInverters

`func (o *Inventory) SetInverters(v []InventoryEnvoys)`

SetInverters sets Inverters field to given value.


### GetMeters

`func (o *Inventory) GetMeters() []InventoryMeters`

GetMeters returns the Meters field if non-nil, zero value otherwise.

### GetMetersOk

`func (o *Inventory) GetMetersOk() (*[]InventoryMeters, bool)`

GetMetersOk returns a tuple with the Meters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeters

`func (o *Inventory) SetMeters(v []InventoryMeters)`

SetMeters sets Meters field to given value.


### GetMeta

`func (o *Inventory) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *Inventory) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *Inventory) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


