# GetSelfCompanyAuthorizedSubcontractorsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | Pointer to **int32** | Enlighten ID of the API user&#39;s company. | [optional] 
**CompanyName** | Pointer to **string** | Name of the API user&#39;s company. | [optional] 
**AuthorizedSubcontractors** | Pointer to [**[]GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner**](GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner.md) | A list of subcontractors belonging to the API user&#39;s company. May be empty. | [optional] 

## Methods

### NewGetSelfCompanyAuthorizedSubcontractorsResponse

`func NewGetSelfCompanyAuthorizedSubcontractorsResponse() *GetSelfCompanyAuthorizedSubcontractorsResponse`

NewGetSelfCompanyAuthorizedSubcontractorsResponse instantiates a new GetSelfCompanyAuthorizedSubcontractorsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSelfCompanyAuthorizedSubcontractorsResponseWithDefaults

`func NewGetSelfCompanyAuthorizedSubcontractorsResponseWithDefaults() *GetSelfCompanyAuthorizedSubcontractorsResponse`

NewGetSelfCompanyAuthorizedSubcontractorsResponseWithDefaults instantiates a new GetSelfCompanyAuthorizedSubcontractorsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyId

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetCompanyName

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetAuthorizedSubcontractors

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetAuthorizedSubcontractors() []GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner`

GetAuthorizedSubcontractors returns the AuthorizedSubcontractors field if non-nil, zero value otherwise.

### GetAuthorizedSubcontractorsOk

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) GetAuthorizedSubcontractorsOk() (*[]GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner, bool)`

GetAuthorizedSubcontractorsOk returns a tuple with the AuthorizedSubcontractors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizedSubcontractors

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) SetAuthorizedSubcontractors(v []GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner)`

SetAuthorizedSubcontractors sets AuthorizedSubcontractors field to given value.

### HasAuthorizedSubcontractors

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponse) HasAuthorizedSubcontractors() bool`

HasAuthorizedSubcontractors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


