# GetSelfCompanyBranchesResponseBranchesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | Pointer to **int32** | Enlighten ID of the company. | [optional] 
**CompanyName** | Pointer to **string** | Name of the company. | [optional] 
**Location** | Pointer to **string** | Company location. | [optional] 
**Roles** | Pointer to [**[]CompanyRoleEnum**](CompanyRoleEnum.md) | What type of company this is in Enphase. For installer company roles will be [&#39;installer&#39;]. For other role roles will be empty. | [optional] 
**Uri** | Pointer to **string** | URI to the show() method for the company. System-generated. | [optional] 

## Methods

### NewGetSelfCompanyBranchesResponseBranchesInner

`func NewGetSelfCompanyBranchesResponseBranchesInner() *GetSelfCompanyBranchesResponseBranchesInner`

NewGetSelfCompanyBranchesResponseBranchesInner instantiates a new GetSelfCompanyBranchesResponseBranchesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSelfCompanyBranchesResponseBranchesInnerWithDefaults

`func NewGetSelfCompanyBranchesResponseBranchesInnerWithDefaults() *GetSelfCompanyBranchesResponseBranchesInner`

NewGetSelfCompanyBranchesResponseBranchesInnerWithDefaults instantiates a new GetSelfCompanyBranchesResponseBranchesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyId

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *GetSelfCompanyBranchesResponseBranchesInner) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *GetSelfCompanyBranchesResponseBranchesInner) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetCompanyName

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *GetSelfCompanyBranchesResponseBranchesInner) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *GetSelfCompanyBranchesResponseBranchesInner) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetLocation

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *GetSelfCompanyBranchesResponseBranchesInner) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *GetSelfCompanyBranchesResponseBranchesInner) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetRoles

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetRoles() []CompanyRoleEnum`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetRolesOk() (*[]CompanyRoleEnum, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *GetSelfCompanyBranchesResponseBranchesInner) SetRoles(v []CompanyRoleEnum)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *GetSelfCompanyBranchesResponseBranchesInner) HasRoles() bool`

HasRoles returns a boolean if a field has been set.

### GetUri

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *GetSelfCompanyBranchesResponseBranchesInner) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *GetSelfCompanyBranchesResponseBranchesInner) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *GetSelfCompanyBranchesResponseBranchesInner) HasUri() bool`

HasUri returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


