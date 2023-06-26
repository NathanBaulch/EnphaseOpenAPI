# UpdateCompanyUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | Pointer to **int32** | Enlighten-generated ID of the company to which the user belongs, if any. Use the &#39;company&#39; attribute instead, and the query parameter &#39;expand&#x3D;company&#39; to get detailed company information. | [optional] 
**Email** | Pointer to **string** | Email address of the user. Must be unique within Enlighten. Required. | [optional] 
**EnlightenEmails** | Pointer to **bool** | Whether the user receives automated emails from Enlighten. Default false. | [optional] 
**FirstName** | Pointer to **string** | User&#39;s first name. Required. | [optional] 
**LastName** | Pointer to **string** | User&#39;s last name. Required. | [optional] 
**Phone** | Pointer to **string** | Telephone number of the user. Optional. | [optional] 

## Methods

### NewUpdateCompanyUserRequest

`func NewUpdateCompanyUserRequest() *UpdateCompanyUserRequest`

NewUpdateCompanyUserRequest instantiates a new UpdateCompanyUserRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateCompanyUserRequestWithDefaults

`func NewUpdateCompanyUserRequestWithDefaults() *UpdateCompanyUserRequest`

NewUpdateCompanyUserRequestWithDefaults instantiates a new UpdateCompanyUserRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyId

`func (o *UpdateCompanyUserRequest) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *UpdateCompanyUserRequest) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *UpdateCompanyUserRequest) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *UpdateCompanyUserRequest) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetEmail

`func (o *UpdateCompanyUserRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *UpdateCompanyUserRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *UpdateCompanyUserRequest) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *UpdateCompanyUserRequest) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetEnlightenEmails

`func (o *UpdateCompanyUserRequest) GetEnlightenEmails() bool`

GetEnlightenEmails returns the EnlightenEmails field if non-nil, zero value otherwise.

### GetEnlightenEmailsOk

`func (o *UpdateCompanyUserRequest) GetEnlightenEmailsOk() (*bool, bool)`

GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenEmails

`func (o *UpdateCompanyUserRequest) SetEnlightenEmails(v bool)`

SetEnlightenEmails sets EnlightenEmails field to given value.

### HasEnlightenEmails

`func (o *UpdateCompanyUserRequest) HasEnlightenEmails() bool`

HasEnlightenEmails returns a boolean if a field has been set.

### GetFirstName

`func (o *UpdateCompanyUserRequest) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *UpdateCompanyUserRequest) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *UpdateCompanyUserRequest) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *UpdateCompanyUserRequest) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *UpdateCompanyUserRequest) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *UpdateCompanyUserRequest) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *UpdateCompanyUserRequest) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *UpdateCompanyUserRequest) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetPhone

`func (o *UpdateCompanyUserRequest) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *UpdateCompanyUserRequest) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *UpdateCompanyUserRequest) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *UpdateCompanyUserRequest) HasPhone() bool`

HasPhone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


