# SystemHost

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
**Company** | Pointer to [**SystemHostCompany**](SystemHostCompany.md) |  | [optional] 

## Methods

### NewSystemHost

`func NewSystemHost() *SystemHost`

NewSystemHost instantiates a new SystemHost object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemHostWithDefaults

`func NewSystemHostWithDefaults() *SystemHost`

NewSystemHostWithDefaults instantiates a new SystemHost object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFirstName

`func (o *SystemHost) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *SystemHost) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *SystemHost) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *SystemHost) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *SystemHost) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *SystemHost) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *SystemHost) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *SystemHost) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *SystemHost) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *SystemHost) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *SystemHost) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *SystemHost) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPhone

`func (o *SystemHost) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *SystemHost) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *SystemHost) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *SystemHost) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetActive

`func (o *SystemHost) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SystemHost) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SystemHost) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *SystemHost) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetUserId

`func (o *SystemHost) GetUserId() int32`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *SystemHost) GetUserIdOk() (*int32, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *SystemHost) SetUserId(v int32)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *SystemHost) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserRoles

`func (o *SystemHost) GetUserRoles() []UserRoleEnum`

GetUserRoles returns the UserRoles field if non-nil, zero value otherwise.

### GetUserRolesOk

`func (o *SystemHost) GetUserRolesOk() (*[]UserRoleEnum, bool)`

GetUserRolesOk returns a tuple with the UserRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserRoles

`func (o *SystemHost) SetUserRoles(v []UserRoleEnum)`

SetUserRoles sets UserRoles field to given value.

### HasUserRoles

`func (o *SystemHost) HasUserRoles() bool`

HasUserRoles returns a boolean if a field has been set.

### GetEnlightenEmails

`func (o *SystemHost) GetEnlightenEmails() bool`

GetEnlightenEmails returns the EnlightenEmails field if non-nil, zero value otherwise.

### GetEnlightenEmailsOk

`func (o *SystemHost) GetEnlightenEmailsOk() (*bool, bool)`

GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenEmails

`func (o *SystemHost) SetEnlightenEmails(v bool)`

SetEnlightenEmails sets EnlightenEmails field to given value.

### HasEnlightenEmails

`func (o *SystemHost) HasEnlightenEmails() bool`

HasEnlightenEmails returns a boolean if a field has been set.

### GetEnlightenView

`func (o *SystemHost) GetEnlightenView() string`

GetEnlightenView returns the EnlightenView field if non-nil, zero value otherwise.

### GetEnlightenViewOk

`func (o *SystemHost) GetEnlightenViewOk() (*string, bool)`

GetEnlightenViewOk returns a tuple with the EnlightenView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenView

`func (o *SystemHost) SetEnlightenView(v string)`

SetEnlightenView sets EnlightenView field to given value.

### HasEnlightenView

`func (o *SystemHost) HasEnlightenView() bool`

HasEnlightenView returns a boolean if a field has been set.

### GetUri

`func (o *SystemHost) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *SystemHost) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *SystemHost) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *SystemHost) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *SystemHost) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SystemHost) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SystemHost) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *SystemHost) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetCompany

`func (o *SystemHost) GetCompany() SystemHostCompany`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *SystemHost) GetCompanyOk() (*SystemHostCompany, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *SystemHost) SetCompany(v SystemHostCompany)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *SystemHost) HasCompany() bool`

HasCompany returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


