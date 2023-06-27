# ActivationHostCompany

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | Pointer to **int32** |  | [optional] 
**CompanyName** | Pointer to **string** |  | [optional] 
**Location** | Pointer to **string** |  | [optional] 
**Roles** | Pointer to [**[]CompanyRoleEnum**](CompanyRoleEnum.md) | What type of company this is in Enphase. For installer company roles will be [&#39;installer&#39;]. For other role roles will be empty. | [optional] 
**Uri** | Pointer to **string** |  | [optional] 

## Methods

### NewActivationHostCompany

`func NewActivationHostCompany() *ActivationHostCompany`

NewActivationHostCompany instantiates a new ActivationHostCompany object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivationHostCompanyWithDefaults

`func NewActivationHostCompanyWithDefaults() *ActivationHostCompany`

NewActivationHostCompanyWithDefaults instantiates a new ActivationHostCompany object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyId

`func (o *ActivationHostCompany) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *ActivationHostCompany) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *ActivationHostCompany) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *ActivationHostCompany) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetCompanyName

`func (o *ActivationHostCompany) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *ActivationHostCompany) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *ActivationHostCompany) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *ActivationHostCompany) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetLocation

`func (o *ActivationHostCompany) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *ActivationHostCompany) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *ActivationHostCompany) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *ActivationHostCompany) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetRoles

`func (o *ActivationHostCompany) GetRoles() []CompanyRoleEnum`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *ActivationHostCompany) GetRolesOk() (*[]CompanyRoleEnum, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *ActivationHostCompany) SetRoles(v []CompanyRoleEnum)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *ActivationHostCompany) HasRoles() bool`

HasRoles returns a boolean if a field has been set.

### GetUri

`func (o *ActivationHostCompany) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *ActivationHostCompany) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *ActivationHostCompany) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *ActivationHostCompany) HasUri() bool`

HasUri returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


