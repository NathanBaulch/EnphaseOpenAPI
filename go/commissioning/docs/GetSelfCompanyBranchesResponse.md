# GetSelfCompanyBranchesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | Pointer to **int32** | Enlighten ID of the API user&#39;s company. | [optional] 
**CompanyName** | Pointer to **string** | Name of the API user&#39;s company. | [optional] 
**Branches** | Pointer to [**[]GetSelfCompanyBranchesResponseBranchesInner**](GetSelfCompanyBranchesResponseBranchesInner.md) | A list of branches belonging to the API user&#39;s company. May be empty. | [optional] 

## Methods

### NewGetSelfCompanyBranchesResponse

`func NewGetSelfCompanyBranchesResponse() *GetSelfCompanyBranchesResponse`

NewGetSelfCompanyBranchesResponse instantiates a new GetSelfCompanyBranchesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSelfCompanyBranchesResponseWithDefaults

`func NewGetSelfCompanyBranchesResponseWithDefaults() *GetSelfCompanyBranchesResponse`

NewGetSelfCompanyBranchesResponseWithDefaults instantiates a new GetSelfCompanyBranchesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyId

`func (o *GetSelfCompanyBranchesResponse) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *GetSelfCompanyBranchesResponse) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *GetSelfCompanyBranchesResponse) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *GetSelfCompanyBranchesResponse) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetCompanyName

`func (o *GetSelfCompanyBranchesResponse) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *GetSelfCompanyBranchesResponse) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *GetSelfCompanyBranchesResponse) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *GetSelfCompanyBranchesResponse) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetBranches

`func (o *GetSelfCompanyBranchesResponse) GetBranches() []GetSelfCompanyBranchesResponseBranchesInner`

GetBranches returns the Branches field if non-nil, zero value otherwise.

### GetBranchesOk

`func (o *GetSelfCompanyBranchesResponse) GetBranchesOk() (*[]GetSelfCompanyBranchesResponseBranchesInner, bool)`

GetBranchesOk returns a tuple with the Branches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranches

`func (o *GetSelfCompanyBranchesResponse) SetBranches(v []GetSelfCompanyBranchesResponseBranchesInner)`

SetBranches sets Branches field to given value.

### HasBranches

`func (o *GetSelfCompanyBranchesResponse) HasBranches() bool`

HasBranches returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


