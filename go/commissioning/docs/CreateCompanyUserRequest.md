# CreateCompanyUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Email address of the user. Must be unique within Enlighten. Required. | 
**EnlightenEmails** | Pointer to **bool** | Whether the user receives automated emails from Enlighten. Default false. | [optional] 
**FirstName** | **string** | User&#39;s first name. Required. | 
**LastName** | **string** | User&#39;s last name. Required. | 
**Phone** | Pointer to **string** | Telephone number of the user. Optional. | [optional] 

## Methods

### NewCreateCompanyUserRequest

`func NewCreateCompanyUserRequest(email string, firstName string, lastName string, ) *CreateCompanyUserRequest`

NewCreateCompanyUserRequest instantiates a new CreateCompanyUserRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCompanyUserRequestWithDefaults

`func NewCreateCompanyUserRequestWithDefaults() *CreateCompanyUserRequest`

NewCreateCompanyUserRequestWithDefaults instantiates a new CreateCompanyUserRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *CreateCompanyUserRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CreateCompanyUserRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CreateCompanyUserRequest) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetEnlightenEmails

`func (o *CreateCompanyUserRequest) GetEnlightenEmails() bool`

GetEnlightenEmails returns the EnlightenEmails field if non-nil, zero value otherwise.

### GetEnlightenEmailsOk

`func (o *CreateCompanyUserRequest) GetEnlightenEmailsOk() (*bool, bool)`

GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenEmails

`func (o *CreateCompanyUserRequest) SetEnlightenEmails(v bool)`

SetEnlightenEmails sets EnlightenEmails field to given value.

### HasEnlightenEmails

`func (o *CreateCompanyUserRequest) HasEnlightenEmails() bool`

HasEnlightenEmails returns a boolean if a field has been set.

### GetFirstName

`func (o *CreateCompanyUserRequest) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CreateCompanyUserRequest) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CreateCompanyUserRequest) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *CreateCompanyUserRequest) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *CreateCompanyUserRequest) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *CreateCompanyUserRequest) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetPhone

`func (o *CreateCompanyUserRequest) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *CreateCompanyUserRequest) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *CreateCompanyUserRequest) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *CreateCompanyUserRequest) HasPhone() bool`

HasPhone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


