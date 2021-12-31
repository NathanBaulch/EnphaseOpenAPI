# InventoryResponseMeters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sn** | **string** |  | 
**Manufacturer** | **string** |  | 
**Model** | **string** |  | 
**Status** | Pointer to **string** |  | [optional] 
**State** | Pointer to **string** |  | [optional] 

## Methods

### NewInventoryResponseMeters

`func NewInventoryResponseMeters(sn string, manufacturer string, model string, ) *InventoryResponseMeters`

NewInventoryResponseMeters instantiates a new InventoryResponseMeters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryResponseMetersWithDefaults

`func NewInventoryResponseMetersWithDefaults() *InventoryResponseMeters`

NewInventoryResponseMetersWithDefaults instantiates a new InventoryResponseMeters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSn

`func (o *InventoryResponseMeters) GetSn() string`

GetSn returns the Sn field if non-nil, zero value otherwise.

### GetSnOk

`func (o *InventoryResponseMeters) GetSnOk() (*string, bool)`

GetSnOk returns a tuple with the Sn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSn

`func (o *InventoryResponseMeters) SetSn(v string)`

SetSn sets Sn field to given value.


### GetManufacturer

`func (o *InventoryResponseMeters) GetManufacturer() string`

GetManufacturer returns the Manufacturer field if non-nil, zero value otherwise.

### GetManufacturerOk

`func (o *InventoryResponseMeters) GetManufacturerOk() (*string, bool)`

GetManufacturerOk returns a tuple with the Manufacturer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManufacturer

`func (o *InventoryResponseMeters) SetManufacturer(v string)`

SetManufacturer sets Manufacturer field to given value.


### GetModel

`func (o *InventoryResponseMeters) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *InventoryResponseMeters) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *InventoryResponseMeters) SetModel(v string)`

SetModel sets Model field to given value.


### GetStatus

`func (o *InventoryResponseMeters) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InventoryResponseMeters) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InventoryResponseMeters) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *InventoryResponseMeters) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetState

`func (o *InventoryResponseMeters) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *InventoryResponseMeters) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *InventoryResponseMeters) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *InventoryResponseMeters) HasState() bool`

HasState returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


