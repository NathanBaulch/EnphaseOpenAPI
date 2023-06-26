# UserParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | Pointer to **int32** | Enlighten-generated ID of the company to which the user belongs, if any. Use the &#39;company&#39; attribute instead, and the query parameter &#39;expand&#x3D;company&#39; to get detailed company information. | [optional] 
**Email** | Pointer to **string** | Email address of the user. Must be unique within Enlighten. Required. | [optional] 
**EnlightenEmails** | Pointer to **bool** | Whether the user receives automated emails from Enlighten. Default false. | [optional] 
**EnlightenView** | Pointer to **string** | Which view of Enlighten the user has. Options &#39;my&#39; for MyEnlighten, &#39;manager&#39; for Enlighten Manager. Default &#39;my&#39;. Users who do not belong to companies should be set to &#39;my&#39;. You must have an agreement with Enphase Energy to set a user to &#39;manager&#39;. | [optional] 
**FirstName** | Pointer to **string** | User&#39;s first name. Required. | [optional] 
**LastName** | Pointer to **string** | User&#39;s last name. Required. | [optional] 
**Phone** | Pointer to **string** | Telephone number of the user. Optional. | [optional] 

## Methods

### NewUserParams

`func NewUserParams() *UserParams`

NewUserParams instantiates a new UserParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserParamsWithDefaults

`func NewUserParamsWithDefaults() *UserParams`

NewUserParamsWithDefaults instantiates a new UserParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyId

`func (o *UserParams) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *UserParams) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *UserParams) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *UserParams) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetEmail

`func (o *UserParams) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *UserParams) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *UserParams) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *UserParams) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetEnlightenEmails

`func (o *UserParams) GetEnlightenEmails() bool`

GetEnlightenEmails returns the EnlightenEmails field if non-nil, zero value otherwise.

### GetEnlightenEmailsOk

`func (o *UserParams) GetEnlightenEmailsOk() (*bool, bool)`

GetEnlightenEmailsOk returns a tuple with the EnlightenEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenEmails

`func (o *UserParams) SetEnlightenEmails(v bool)`

SetEnlightenEmails sets EnlightenEmails field to given value.

### HasEnlightenEmails

`func (o *UserParams) HasEnlightenEmails() bool`

HasEnlightenEmails returns a boolean if a field has been set.

### GetEnlightenView

`func (o *UserParams) GetEnlightenView() string`

GetEnlightenView returns the EnlightenView field if non-nil, zero value otherwise.

### GetEnlightenViewOk

`func (o *UserParams) GetEnlightenViewOk() (*string, bool)`

GetEnlightenViewOk returns a tuple with the EnlightenView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnlightenView

`func (o *UserParams) SetEnlightenView(v string)`

SetEnlightenView sets EnlightenView field to given value.

### HasEnlightenView

`func (o *UserParams) HasEnlightenView() bool`

HasEnlightenView returns a boolean if a field has been set.

### GetFirstName

`func (o *UserParams) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *UserParams) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *UserParams) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *UserParams) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *UserParams) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *UserParams) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *UserParams) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *UserParams) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetPhone

`func (o *UserParams) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *UserParams) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *UserParams) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *UserParams) HasPhone() bool`

HasPhone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


