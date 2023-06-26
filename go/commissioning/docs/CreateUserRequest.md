# CreateUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Email address of the user. Must be unique within Enlighten. Required. | 
**EnlightenEmails** | Pointer to **bool** | Whether the user receives automated emails from Enlighten. Default false. | [optional] 
**EnlightenView** | Pointer to **string** | Which view of Enlighten the user has. Options &#39;my&#39; for MyEnlighten, &#39;manager&#39; for Enlighten Manager. Default &#39;my&#39;. Users who do not belong to companies should be set to &#39;my&#39;. You must have an agreement with Enphase Energy to set a user to &#39;manager&#39;. Company ID is required when enlighten_view is &#39;manager&#39;. | [optional] 
**FirstName** | **string** | User&#39;s first name. Required. | 
**LastName** | **string** | User&#39;s last name. Required. | 
**Phone** | Pointer to **string** | Telephone number of the user. Optional. | [optional] 
**CompanyId** | Pointer to **int32** | Enlighten-generated ID of the company to which the user belongs, if any. | [optional] 

## Methods

### NewCreateUserRequest

`func NewCreateUserRequest(email string, firstName string, lastName string, ) *CreateUserRequest`

NewCreateUserRequest instantiates a new CreateUserRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateUserRequestWithDefaults

`func NewCreateUserRequestWithDefaults() *CreateUserRequest`

NewCreateUserRequestWithDefaults instantiates a new CreateUserRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *CreateUserRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CreateUserRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CreateUserRequest) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetEnlightenEmails

`func (o *CreateUserRequest) GetEnlightenEmails() bool`

GetEnlightenEmails returns the EnlightenEmails field if non-nil, zero value otherwise.

### GetEnlightenEmailsOk

`func (o *CreateUserRequest) GetEnlightenEmailsOk() (*bool, bool)`

GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenEmails

`func (o *CreateUserRequest) SetEnlightenEmails(v bool)`

SetEnlightenEmails sets EnlightenEmails field to given value.

### HasEnlightenEmails

`func (o *CreateUserRequest) HasEnlightenEmails() bool`

HasEnlightenEmails returns a boolean if a field has been set.

### GetEnlightenView

`func (o *CreateUserRequest) GetEnlightenView() string`

GetEnlightenView returns the EnlightenView field if non-nil, zero value otherwise.

### GetEnlightenViewOk

`func (o *CreateUserRequest) GetEnlightenViewOk() (*string, bool)`

GetEnlightenViewOk returns a tuple with the EnlightenView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenView

`func (o *CreateUserRequest) SetEnlightenView(v string)`

SetEnlightenView sets EnlightenView field to given value.

### HasEnlightenView

`func (o *CreateUserRequest) HasEnlightenView() bool`

HasEnlightenView returns a boolean if a field has been set.

### GetFirstName

`func (o *CreateUserRequest) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CreateUserRequest) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CreateUserRequest) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *CreateUserRequest) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *CreateUserRequest) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *CreateUserRequest) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetPhone

`func (o *CreateUserRequest) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *CreateUserRequest) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *CreateUserRequest) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *CreateUserRequest) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetCompanyId

`func (o *CreateUserRequest) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *CreateUserRequest) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *CreateUserRequest) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *CreateUserRequest) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


