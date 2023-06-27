# SystemArrays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | System ID. | [optional] 
**CreatedAt** | Pointer to **int64** | System created Epoch time. | [optional] 
**UpdatedAt** | Pointer to **int64** | System updated Epoch time. | [optional] 
**Angle** | Pointer to **int32** | Angle of the system. | [optional] 
**Arrays** | Pointer to [**[]SystemArray**](SystemArray.md) |  | [optional] 
**Inventory** | Pointer to **[]string** | List of active inverter serial numbers. | [optional] 
**InventoryDetails** | Pointer to [**[]SystemArraysInventoryDetailsInner**](SystemArraysInventoryDetailsInner.md) |  | [optional] 
**Layers** | Pointer to [**[]SystemArraysLayersInner**](SystemArraysLayersInner.md) |  | [optional] 

## Methods

### NewSystemArrays

`func NewSystemArrays() *SystemArrays`

NewSystemArrays instantiates a new SystemArrays object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemArraysWithDefaults

`func NewSystemArraysWithDefaults() *SystemArrays`

NewSystemArraysWithDefaults instantiates a new SystemArrays object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *SystemArrays) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *SystemArrays) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *SystemArrays) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *SystemArrays) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *SystemArrays) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SystemArrays) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SystemArrays) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *SystemArrays) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *SystemArrays) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SystemArrays) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SystemArrays) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *SystemArrays) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetAngle

`func (o *SystemArrays) GetAngle() int32`

GetAngle returns the Angle field if non-nil, zero value otherwise.

### GetAngleOk

`func (o *SystemArrays) GetAngleOk() (*int32, bool)`

GetAngleOk returns a tuple with the Angle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAngle

`func (o *SystemArrays) SetAngle(v int32)`

SetAngle sets Angle field to given value.

### HasAngle

`func (o *SystemArrays) HasAngle() bool`

HasAngle returns a boolean if a field has been set.

### GetArrays

`func (o *SystemArrays) GetArrays() []SystemArray`

GetArrays returns the Arrays field if non-nil, zero value otherwise.

### GetArraysOk

`func (o *SystemArrays) GetArraysOk() (*[]SystemArray, bool)`

GetArraysOk returns a tuple with the Arrays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrays

`func (o *SystemArrays) SetArrays(v []SystemArray)`

SetArrays sets Arrays field to given value.

### HasArrays

`func (o *SystemArrays) HasArrays() bool`

HasArrays returns a boolean if a field has been set.

### GetInventory

`func (o *SystemArrays) GetInventory() []string`

GetInventory returns the Inventory field if non-nil, zero value otherwise.

### GetInventoryOk

`func (o *SystemArrays) GetInventoryOk() (*[]string, bool)`

GetInventoryOk returns a tuple with the Inventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventory

`func (o *SystemArrays) SetInventory(v []string)`

SetInventory sets Inventory field to given value.

### HasInventory

`func (o *SystemArrays) HasInventory() bool`

HasInventory returns a boolean if a field has been set.

### GetInventoryDetails

`func (o *SystemArrays) GetInventoryDetails() []SystemArraysInventoryDetailsInner`

GetInventoryDetails returns the InventoryDetails field if non-nil, zero value otherwise.

### GetInventoryDetailsOk

`func (o *SystemArrays) GetInventoryDetailsOk() (*[]SystemArraysInventoryDetailsInner, bool)`

GetInventoryDetailsOk returns a tuple with the InventoryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryDetails

`func (o *SystemArrays) SetInventoryDetails(v []SystemArraysInventoryDetailsInner)`

SetInventoryDetails sets InventoryDetails field to given value.

### HasInventoryDetails

`func (o *SystemArrays) HasInventoryDetails() bool`

HasInventoryDetails returns a boolean if a field has been set.

### GetLayers

`func (o *SystemArrays) GetLayers() []SystemArraysLayersInner`

GetLayers returns the Layers field if non-nil, zero value otherwise.

### GetLayersOk

`func (o *SystemArrays) GetLayersOk() (*[]SystemArraysLayersInner, bool)`

GetLayersOk returns a tuple with the Layers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLayers

`func (o *SystemArrays) SetLayers(v []SystemArraysLayersInner)`

SetLayers sets Layers field to given value.

### HasLayers

`func (o *SystemArrays) HasLayers() bool`

HasLayers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


