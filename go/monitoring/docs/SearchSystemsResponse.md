# SearchSystemsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | Pointer to **int32** | Total number of systems available. | [optional] 
**CurrentPage** | Pointer to **int32** | Current page of the systems result. Default is 1. | [optional] 
**Size** | Pointer to **int32** | Max number of records from API per page is 100. Default is 10. | [optional] 
**Count** | Pointer to **int32** | Total number of systems actually returned for the current page. | [optional] 
**Items** | Pointer to **string** | Named key of the list data. In this endpoint, it is systems. | [optional] 
**Systems** | Pointer to [**[]SystemDetails**](SystemDetails.md) | List of filtered systems. | [optional] 

## Methods

### NewSearchSystemsResponse

`func NewSearchSystemsResponse() *SearchSystemsResponse`

NewSearchSystemsResponse instantiates a new SearchSystemsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchSystemsResponseWithDefaults

`func NewSearchSystemsResponseWithDefaults() *SearchSystemsResponse`

NewSearchSystemsResponseWithDefaults instantiates a new SearchSystemsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *SearchSystemsResponse) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *SearchSystemsResponse) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *SearchSystemsResponse) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *SearchSystemsResponse) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetCurrentPage

`func (o *SearchSystemsResponse) GetCurrentPage() int32`

GetCurrentPage returns the CurrentPage field if non-nil, zero value otherwise.

### GetCurrentPageOk

`func (o *SearchSystemsResponse) GetCurrentPageOk() (*int32, bool)`

GetCurrentPageOk returns a tuple with the CurrentPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPage

`func (o *SearchSystemsResponse) SetCurrentPage(v int32)`

SetCurrentPage sets CurrentPage field to given value.

### HasCurrentPage

`func (o *SearchSystemsResponse) HasCurrentPage() bool`

HasCurrentPage returns a boolean if a field has been set.

### GetSize

`func (o *SearchSystemsResponse) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *SearchSystemsResponse) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *SearchSystemsResponse) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *SearchSystemsResponse) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetCount

`func (o *SearchSystemsResponse) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SearchSystemsResponse) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SearchSystemsResponse) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *SearchSystemsResponse) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetItems

`func (o *SearchSystemsResponse) GetItems() string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *SearchSystemsResponse) GetItemsOk() (*string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *SearchSystemsResponse) SetItems(v string)`

SetItems sets Items field to given value.

### HasItems

`func (o *SearchSystemsResponse) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetSystems

`func (o *SearchSystemsResponse) GetSystems() []SystemDetails`

GetSystems returns the Systems field if non-nil, zero value otherwise.

### GetSystemsOk

`func (o *SearchSystemsResponse) GetSystemsOk() (*[]SystemDetails, bool)`

GetSystemsOk returns a tuple with the Systems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystems

`func (o *SearchSystemsResponse) SetSystems(v []SystemDetails)`

SetSystems sets Systems field to given value.

### HasSystems

`func (o *SearchSystemsResponse) HasSystems() bool`

HasSystems returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


