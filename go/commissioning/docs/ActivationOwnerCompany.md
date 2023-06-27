# ActivationOwnerCompany

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | Pointer to **int32** |  | [optional] 
**CompanyName** | Pointer to **string** |  | [optional] 
**Location** | Pointer to **string** |  | [optional] 
**Roles** | Pointer to [**[]CompanyRoleEnum**](CompanyRoleEnum.md) | What type of company this is in Enphase. For installer company roles will be [&#39;installer&#39;]. For other role roles will be empty. | [optional] 
**Uri** | Pointer to **string** |  | [optional] 

## Methods

### NewActivationOwnerCompany

`func NewActivationOwnerCompany() *ActivationOwnerCompany`

NewActivationOwnerCompany instantiates a new ActivationOwnerCompany object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivationOwnerCompanyWithDefaults

`func NewActivationOwnerCompanyWithDefaults() *ActivationOwnerCompany`

NewActivationOwnerCompanyWithDefaults instantiates a new ActivationOwnerCompany object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyId

`func (o *ActivationOwnerCompany) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *ActivationOwnerCompany) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *ActivationOwnerCompany) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *ActivationOwnerCompany) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetCompanyName

`func (o *ActivationOwnerCompany) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *ActivationOwnerCompany) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *ActivationOwnerCompany) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *ActivationOwnerCompany) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetLocation

`func (o *ActivationOwnerCompany) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *ActivationOwnerCompany) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *ActivationOwnerCompany) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *ActivationOwnerCompany) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetRoles

`func (o *ActivationOwnerCompany) GetRoles() []CompanyRoleEnum`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *ActivationOwnerCompany) GetRolesOk() (*[]CompanyRoleEnum, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *ActivationOwnerCompany) SetRoles(v []CompanyRoleEnum)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *ActivationOwnerCompany) HasRoles() bool`

HasRoles returns a boolean if a field has been set.

### GetUri

`func (o *ActivationOwnerCompany) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *ActivationOwnerCompany) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *ActivationOwnerCompany) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *ActivationOwnerCompany) HasUri() bool`

HasUri returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


