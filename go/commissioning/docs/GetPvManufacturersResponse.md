# GetPvManufacturersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PvManufacturers** | Pointer to [**[][]GetCompanyUsersResponseUsersInner**]([]GetCompanyUsersResponseUsersInner.md) | A list of PV manufacturers. Each element in the list is an array including the model&#39;s manufacturer&#39;s primary key and name. The list may be empty. | [optional] 

## Methods

### NewGetPvManufacturersResponse

`func NewGetPvManufacturersResponse() *GetPvManufacturersResponse`

NewGetPvManufacturersResponse instantiates a new GetPvManufacturersResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPvManufacturersResponseWithDefaults

`func NewGetPvManufacturersResponseWithDefaults() *GetPvManufacturersResponse`

NewGetPvManufacturersResponseWithDefaults instantiates a new GetPvManufacturersResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPvManufacturers

`func (o *GetPvManufacturersResponse) GetPvManufacturers() [][]GetCompanyUsersResponseUsersInner`

GetPvManufacturers returns the PvManufacturers field if non-nil, zero value otherwise.

### GetPvManufacturersOk

`func (o *GetPvManufacturersResponse) GetPvManufacturersOk() (*[][]GetCompanyUsersResponseUsersInner, bool)`

GetPvManufacturersOk returns a tuple with the PvManufacturers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPvManufacturers

`func (o *GetPvManufacturersResponse) SetPvManufacturers(v [][]GetCompanyUsersResponseUsersInner)`

SetPvManufacturers sets PvManufacturers field to given value.

### HasPvManufacturers

`func (o *GetPvManufacturersResponse) HasPvManufacturers() bool`

HasPvManufacturers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


