# GetSystemsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | Pointer to **int32** | Total number of systems. | [optional] 
**CurrentPage** | Pointer to **int32** | Number of the current page fetched. | [optional] 
**Size** | Pointer to **int32** | Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100. | [optional] 
**Count** | Pointer to **int32** | Total number of systems actually returned for the current page. | [optional] 
**Items** | Pointer to **string** | Named key of the list data. In this endpoint, it is systems. | [optional] 
**Systems** | Pointer to [**[]System**](System.md) | List of systems. | [optional] 

## Methods

### NewGetSystemsResponse

`func NewGetSystemsResponse() *GetSystemsResponse`

NewGetSystemsResponse instantiates a new GetSystemsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemsResponseWithDefaults

`func NewGetSystemsResponseWithDefaults() *GetSystemsResponse`

NewGetSystemsResponseWithDefaults instantiates a new GetSystemsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *GetSystemsResponse) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *GetSystemsResponse) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *GetSystemsResponse) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *GetSystemsResponse) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetCurrentPage

`func (o *GetSystemsResponse) GetCurrentPage() int32`

GetCurrentPage returns the CurrentPage field if non-nil, zero value otherwise.

### GetCurrentPageOk

`func (o *GetSystemsResponse) GetCurrentPageOk() (*int32, bool)`

GetCurrentPageOk returns a tuple with the CurrentPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPage

`func (o *GetSystemsResponse) SetCurrentPage(v int32)`

SetCurrentPage sets CurrentPage field to given value.

### HasCurrentPage

`func (o *GetSystemsResponse) HasCurrentPage() bool`

HasCurrentPage returns a boolean if a field has been set.

### GetSize

`func (o *GetSystemsResponse) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *GetSystemsResponse) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *GetSystemsResponse) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *GetSystemsResponse) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetCount

`func (o *GetSystemsResponse) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *GetSystemsResponse) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *GetSystemsResponse) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *GetSystemsResponse) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetItems

`func (o *GetSystemsResponse) GetItems() string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *GetSystemsResponse) GetItemsOk() (*string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *GetSystemsResponse) SetItems(v string)`

SetItems sets Items field to given value.

### HasItems

`func (o *GetSystemsResponse) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetSystems

`func (o *GetSystemsResponse) GetSystems() []System`

GetSystems returns the Systems field if non-nil, zero value otherwise.

### GetSystemsOk

`func (o *GetSystemsResponse) GetSystemsOk() (*[]System, bool)`

GetSystemsOk returns a tuple with the Systems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystems

`func (o *GetSystemsResponse) SetSystems(v []System)`

SetSystems sets Systems field to given value.

### HasSystems

`func (o *GetSystemsResponse) HasSystems() bool`

HasSystems returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


