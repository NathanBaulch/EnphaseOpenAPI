# GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | Pointer to **int32** | Enlighten ID of the company. | [optional] 
**CompanyName** | Pointer to **string** | Name of the company. | [optional] 
**Location** | Pointer to **string** | Company location. | [optional] 
**Roles** | Pointer to [**[]CompanyRoleEnum**](CompanyRoleEnum.md) |  | [optional] 
**Uri** | Pointer to **string** | URI to the show() method for the company. System-generated. | [optional] 
**Status** | Pointer to **string** | Whether the subcontractor is enabled or disabled. | [optional] 

## Methods

### NewGetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner

`func NewGetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner() *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner`

NewGetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner instantiates a new GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInnerWithDefaults

`func NewGetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInnerWithDefaults() *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner`

NewGetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInnerWithDefaults instantiates a new GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyId

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetCompanyName

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetLocation

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetRoles

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetRoles() []CompanyRoleEnum`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetRolesOk() (*[]CompanyRoleEnum, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) SetRoles(v []CompanyRoleEnum)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) HasRoles() bool`

HasRoles returns a boolean if a field has been set.

### GetUri

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetStatus

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetSelfCompanyAuthorizedSubcontractorsResponseAuthorizedSubcontractorsInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


