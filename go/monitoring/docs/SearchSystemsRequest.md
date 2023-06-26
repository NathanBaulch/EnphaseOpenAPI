# SearchSystemsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**System** | [**SearchSystemsRequestSystem**](SearchSystemsRequestSystem.md) |  | 
**SortBy** | Pointer to [**SystemSortByEnum**](SystemSortByEnum.md) |  | [optional] 

## Methods

### NewSearchSystemsRequest

`func NewSearchSystemsRequest(system SearchSystemsRequestSystem, ) *SearchSystemsRequest`

NewSearchSystemsRequest instantiates a new SearchSystemsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchSystemsRequestWithDefaults

`func NewSearchSystemsRequestWithDefaults() *SearchSystemsRequest`

NewSearchSystemsRequestWithDefaults instantiates a new SearchSystemsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystem

`func (o *SearchSystemsRequest) GetSystem() SearchSystemsRequestSystem`

GetSystem returns the System field if non-nil, zero value otherwise.

### GetSystemOk

`func (o *SearchSystemsRequest) GetSystemOk() (*SearchSystemsRequestSystem, bool)`

GetSystemOk returns a tuple with the System field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystem

`func (o *SearchSystemsRequest) SetSystem(v SearchSystemsRequestSystem)`

SetSystem sets System field to given value.


### GetSortBy

`func (o *SearchSystemsRequest) GetSortBy() SystemSortByEnum`

GetSortBy returns the SortBy field if non-nil, zero value otherwise.

### GetSortByOk

`func (o *SearchSystemsRequest) GetSortByOk() (*SystemSortByEnum, bool)`

GetSortByOk returns a tuple with the SortBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortBy

`func (o *SearchSystemsRequest) SetSortBy(v SystemSortByEnum)`

SetSortBy sets SortBy field to given value.

### HasSortBy

`func (o *SearchSystemsRequest) HasSortBy() bool`

HasSortBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


