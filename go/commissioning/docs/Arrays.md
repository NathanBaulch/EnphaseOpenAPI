# Arrays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | System ID. | [optional] 
**CreatedAt** | Pointer to **int64** | System created Epoch time. | [optional] 
**UpdatedAt** | Pointer to **int64** | System updated Epoch time. | [optional] 
**Angle** | Pointer to **int32** | Angle of the system. | [optional] 
**Arrays** | Pointer to [**[]Array**](Array.md) |  | [optional] 
**Inventory** | Pointer to **[]string** | List of active inverter serial numbers. | [optional] 
**InventoryDetails** | Pointer to [**[]ArraysInventoryDetailsInner**](ArraysInventoryDetailsInner.md) |  | [optional] 
**Layers** | Pointer to [**[]ArraysLayersInner**](ArraysLayersInner.md) |  | [optional] 

## Methods

### NewArrays

`func NewArrays() *Arrays`

NewArrays instantiates a new Arrays object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArraysWithDefaults

`func NewArraysWithDefaults() *Arrays`

NewArraysWithDefaults instantiates a new Arrays object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *Arrays) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *Arrays) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *Arrays) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *Arrays) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Arrays) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Arrays) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Arrays) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Arrays) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Arrays) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Arrays) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Arrays) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Arrays) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetAngle

`func (o *Arrays) GetAngle() int32`

GetAngle returns the Angle field if non-nil, zero value otherwise.

### GetAngleOk

`func (o *Arrays) GetAngleOk() (*int32, bool)`

GetAngleOk returns a tuple with the Angle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAngle

`func (o *Arrays) SetAngle(v int32)`

SetAngle sets Angle field to given value.

### HasAngle

`func (o *Arrays) HasAngle() bool`

HasAngle returns a boolean if a field has been set.

### GetArrays

`func (o *Arrays) GetArrays() []Array`

GetArrays returns the Arrays field if non-nil, zero value otherwise.

### GetArraysOk

`func (o *Arrays) GetArraysOk() (*[]Array, bool)`

GetArraysOk returns a tuple with the Arrays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrays

`func (o *Arrays) SetArrays(v []Array)`

SetArrays sets Arrays field to given value.

### HasArrays

`func (o *Arrays) HasArrays() bool`

HasArrays returns a boolean if a field has been set.

### GetInventory

`func (o *Arrays) GetInventory() []string`

GetInventory returns the Inventory field if non-nil, zero value otherwise.

### GetInventoryOk

`func (o *Arrays) GetInventoryOk() (*[]string, bool)`

GetInventoryOk returns a tuple with the Inventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventory

`func (o *Arrays) SetInventory(v []string)`

SetInventory sets Inventory field to given value.

### HasInventory

`func (o *Arrays) HasInventory() bool`

HasInventory returns a boolean if a field has been set.

### GetInventoryDetails

`func (o *Arrays) GetInventoryDetails() []ArraysInventoryDetailsInner`

GetInventoryDetails returns the InventoryDetails field if non-nil, zero value otherwise.

### GetInventoryDetailsOk

`func (o *Arrays) GetInventoryDetailsOk() (*[]ArraysInventoryDetailsInner, bool)`

GetInventoryDetailsOk returns a tuple with the InventoryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryDetails

`func (o *Arrays) SetInventoryDetails(v []ArraysInventoryDetailsInner)`

SetInventoryDetails sets InventoryDetails field to given value.

### HasInventoryDetails

`func (o *Arrays) HasInventoryDetails() bool`

HasInventoryDetails returns a boolean if a field has been set.

### GetLayers

`func (o *Arrays) GetLayers() []ArraysLayersInner`

GetLayers returns the Layers field if non-nil, zero value otherwise.

### GetLayersOk

`func (o *Arrays) GetLayersOk() (*[]ArraysLayersInner, bool)`

GetLayersOk returns a tuple with the Layers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLayers

`func (o *Arrays) SetLayers(v []ArraysLayersInner)`

SetLayers sets Layers field to given value.

### HasLayers

`func (o *Arrays) HasLayers() bool`

HasLayers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


