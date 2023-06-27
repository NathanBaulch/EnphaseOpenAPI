# ActivationOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstName** | Pointer to **string** |  | [optional] 
**LastName** | Pointer to **string** |  | [optional] 
**Email** | Pointer to **string** |  | [optional] 
**Phone** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** | Whether the user is allowed to log in to Enlighten. Values true, false. Default true. | [optional] 
**UserId** | Pointer to **int32** |  | [optional] 
**UserRoles** | Pointer to [**[]UserRoleEnum**](UserRoleEnum.md) | What type of user this is in Enlighten. For self installer user user_roles will be [&#39;self_installer&#39;]. For other users user_roles will be empty. | [optional] 
**EnlightenEmails** | Pointer to **bool** |  | [optional] 
**EnlightenView** | Pointer to **string** |  | [optional] 
**Uri** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **int64** |  | [optional] 
**Company** | Pointer to [**ActivationOwnerCompany**](ActivationOwnerCompany.md) |  | [optional] 

## Methods

### NewActivationOwner

`func NewActivationOwner() *ActivationOwner`

NewActivationOwner instantiates a new ActivationOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivationOwnerWithDefaults

`func NewActivationOwnerWithDefaults() *ActivationOwner`

NewActivationOwnerWithDefaults instantiates a new ActivationOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFirstName

`func (o *ActivationOwner) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *ActivationOwner) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *ActivationOwner) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *ActivationOwner) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *ActivationOwner) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *ActivationOwner) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *ActivationOwner) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *ActivationOwner) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *ActivationOwner) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ActivationOwner) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ActivationOwner) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ActivationOwner) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPhone

`func (o *ActivationOwner) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *ActivationOwner) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *ActivationOwner) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *ActivationOwner) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetActive

`func (o *ActivationOwner) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ActivationOwner) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ActivationOwner) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ActivationOwner) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetUserId

`func (o *ActivationOwner) GetUserId() int32`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *ActivationOwner) GetUserIdOk() (*int32, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *ActivationOwner) SetUserId(v int32)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *ActivationOwner) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserRoles

`func (o *ActivationOwner) GetUserRoles() []UserRoleEnum`

GetUserRoles returns the UserRoles field if non-nil, zero value otherwise.

### GetUserRolesOk

`func (o *ActivationOwner) GetUserRolesOk() (*[]UserRoleEnum, bool)`

GetUserRolesOk returns a tuple with the UserRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserRoles

`func (o *ActivationOwner) SetUserRoles(v []UserRoleEnum)`

SetUserRoles sets UserRoles field to given value.

### HasUserRoles

`func (o *ActivationOwner) HasUserRoles() bool`

HasUserRoles returns a boolean if a field has been set.

### GetEnlightenEmails

`func (o *ActivationOwner) GetEnlightenEmails() bool`

GetEnlightenEmails returns the EnlightenEmails field if non-nil, zero value otherwise.

### GetEnlightenEmailsOk

`func (o *ActivationOwner) GetEnlightenEmailsOk() (*bool, bool)`

GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenEmails

`func (o *ActivationOwner) SetEnlightenEmails(v bool)`

SetEnlightenEmails sets EnlightenEmails field to given value.

### HasEnlightenEmails

`func (o *ActivationOwner) HasEnlightenEmails() bool`

HasEnlightenEmails returns a boolean if a field has been set.

### GetEnlightenView

`func (o *ActivationOwner) GetEnlightenView() string`

GetEnlightenView returns the EnlightenView field if non-nil, zero value otherwise.

### GetEnlightenViewOk

`func (o *ActivationOwner) GetEnlightenViewOk() (*string, bool)`

GetEnlightenViewOk returns a tuple with the EnlightenView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenView

`func (o *ActivationOwner) SetEnlightenView(v string)`

SetEnlightenView sets EnlightenView field to given value.

### HasEnlightenView

`func (o *ActivationOwner) HasEnlightenView() bool`

HasEnlightenView returns a boolean if a field has been set.

### GetUri

`func (o *ActivationOwner) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *ActivationOwner) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *ActivationOwner) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *ActivationOwner) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ActivationOwner) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ActivationOwner) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ActivationOwner) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ActivationOwner) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetCompany

`func (o *ActivationOwner) GetCompany() ActivationOwnerCompany`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *ActivationOwner) GetCompanyOk() (*ActivationOwnerCompany, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *ActivationOwner) SetCompany(v ActivationOwnerCompany)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *ActivationOwner) HasCompany() bool`

HasCompany returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


