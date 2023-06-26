# SystemOwner

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
**Company** | Pointer to [**SystemOwnerCompany**](SystemOwnerCompany.md) |  | [optional] 

## Methods

### NewSystemOwner

`func NewSystemOwner() *SystemOwner`

NewSystemOwner instantiates a new SystemOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemOwnerWithDefaults

`func NewSystemOwnerWithDefaults() *SystemOwner`

NewSystemOwnerWithDefaults instantiates a new SystemOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFirstName

`func (o *SystemOwner) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *SystemOwner) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *SystemOwner) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *SystemOwner) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *SystemOwner) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *SystemOwner) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *SystemOwner) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *SystemOwner) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *SystemOwner) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *SystemOwner) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *SystemOwner) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *SystemOwner) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPhone

`func (o *SystemOwner) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *SystemOwner) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *SystemOwner) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *SystemOwner) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetActive

`func (o *SystemOwner) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SystemOwner) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SystemOwner) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *SystemOwner) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetUserId

`func (o *SystemOwner) GetUserId() int32`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *SystemOwner) GetUserIdOk() (*int32, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *SystemOwner) SetUserId(v int32)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *SystemOwner) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserRoles

`func (o *SystemOwner) GetUserRoles() []UserRoleEnum`

GetUserRoles returns the UserRoles field if non-nil, zero value otherwise.

### GetUserRolesOk

`func (o *SystemOwner) GetUserRolesOk() (*[]UserRoleEnum, bool)`

GetUserRolesOk returns a tuple with the UserRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserRoles

`func (o *SystemOwner) SetUserRoles(v []UserRoleEnum)`

SetUserRoles sets UserRoles field to given value.

### HasUserRoles

`func (o *SystemOwner) HasUserRoles() bool`

HasUserRoles returns a boolean if a field has been set.

### GetEnlightenEmails

`func (o *SystemOwner) GetEnlightenEmails() bool`

GetEnlightenEmails returns the EnlightenEmails field if non-nil, zero value otherwise.

### GetEnlightenEmailsOk

`func (o *SystemOwner) GetEnlightenEmailsOk() (*bool, bool)`

GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenEmails

`func (o *SystemOwner) SetEnlightenEmails(v bool)`

SetEnlightenEmails sets EnlightenEmails field to given value.

### HasEnlightenEmails

`func (o *SystemOwner) HasEnlightenEmails() bool`

HasEnlightenEmails returns a boolean if a field has been set.

### GetEnlightenView

`func (o *SystemOwner) GetEnlightenView() string`

GetEnlightenView returns the EnlightenView field if non-nil, zero value otherwise.

### GetEnlightenViewOk

`func (o *SystemOwner) GetEnlightenViewOk() (*string, bool)`

GetEnlightenViewOk returns a tuple with the EnlightenView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenView

`func (o *SystemOwner) SetEnlightenView(v string)`

SetEnlightenView sets EnlightenView field to given value.

### HasEnlightenView

`func (o *SystemOwner) HasEnlightenView() bool`

HasEnlightenView returns a boolean if a field has been set.

### GetUri

`func (o *SystemOwner) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *SystemOwner) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *SystemOwner) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *SystemOwner) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *SystemOwner) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SystemOwner) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SystemOwner) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *SystemOwner) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetCompany

`func (o *SystemOwner) GetCompany() SystemOwnerCompany`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *SystemOwner) GetCompanyOk() (*SystemOwnerCompany, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *SystemOwner) SetCompany(v SystemOwnerCompany)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *SystemOwner) HasCompany() bool`

HasCompany returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


