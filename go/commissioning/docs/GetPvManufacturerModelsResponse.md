# GetPvManufacturerModelsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PvManufacturers** | Pointer to [**GetPvManufacturerModelsResponsePvManufacturers**](GetPvManufacturerModelsResponsePvManufacturers.md) |  | [optional] 
**PvModels** | Pointer to [**[][]GetCompanyUsersResponseUsersInner**]([]GetCompanyUsersResponseUsersInner.md) | A list of PV models for this manufacturer. Each element in the list is an array including the model&#39;s primary key and name. The list may be empty. | [optional] 

## Methods

### NewGetPvManufacturerModelsResponse

`func NewGetPvManufacturerModelsResponse() *GetPvManufacturerModelsResponse`

NewGetPvManufacturerModelsResponse instantiates a new GetPvManufacturerModelsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPvManufacturerModelsResponseWithDefaults

`func NewGetPvManufacturerModelsResponseWithDefaults() *GetPvManufacturerModelsResponse`

NewGetPvManufacturerModelsResponseWithDefaults instantiates a new GetPvManufacturerModelsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPvManufacturers

`func (o *GetPvManufacturerModelsResponse) GetPvManufacturers() GetPvManufacturerModelsResponsePvManufacturers`

GetPvManufacturers returns the PvManufacturers field if non-nil, zero value otherwise.

### GetPvManufacturersOk

`func (o *GetPvManufacturerModelsResponse) GetPvManufacturersOk() (*GetPvManufacturerModelsResponsePvManufacturers, bool)`

GetPvManufacturersOk returns a tuple with the PvManufacturers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvManufacturers

`func (o *GetPvManufacturerModelsResponse) SetPvManufacturers(v GetPvManufacturerModelsResponsePvManufacturers)`

SetPvManufacturers sets PvManufacturers field to given value.

### HasPvManufacturers

`func (o *GetPvManufacturerModelsResponse) HasPvManufacturers() bool`

HasPvManufacturers returns a boolean if a field has been set.

### GetPvModels

`func (o *GetPvManufacturerModelsResponse) GetPvModels() [][]GetCompanyUsersResponseUsersInner`

GetPvModels returns the PvModels field if non-nil, zero value otherwise.

### GetPvModelsOk

`func (o *GetPvManufacturerModelsResponse) GetPvModelsOk() (*[][]GetCompanyUsersResponseUsersInner, bool)`

GetPvModelsOk returns a tuple with the PvModels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvModels

`func (o *GetPvManufacturerModelsResponse) SetPvModels(v [][]GetCompanyUsersResponseUsersInner)`

SetPvModels sets PvModels field to given value.

### HasPvModels

`func (o *GetPvManufacturerModelsResponse) HasPvModels() bool`

HasPvModels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


