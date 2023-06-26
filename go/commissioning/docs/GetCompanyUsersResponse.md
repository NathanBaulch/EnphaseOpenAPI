# GetCompanyUsersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Users** | Pointer to [**[]GetCompanyUsersResponseUsersInner**](GetCompanyUsersResponseUsersInner.md) | Zero or more users. Each user is an array. In that first value of the array is Enlighten ID of the user. System-generated. Second value of the array is the email address of the user. | [optional] 

## Methods

### NewGetCompanyUsersResponse

`func NewGetCompanyUsersResponse() *GetCompanyUsersResponse`

NewGetCompanyUsersResponse instantiates a new GetCompanyUsersResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetCompanyUsersResponseWithDefaults

`func NewGetCompanyUsersResponseWithDefaults() *GetCompanyUsersResponse`

NewGetCompanyUsersResponseWithDefaults instantiates a new GetCompanyUsersResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsers

`func (o *GetCompanyUsersResponse) GetUsers() []GetCompanyUsersResponseUsersInner`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *GetCompanyUsersResponse) GetUsersOk() (*[]GetCompanyUsersResponseUsersInner, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *GetCompanyUsersResponse) SetUsers(v []GetCompanyUsersResponseUsersInner)`

SetUsers sets Users field to given value.

### HasUsers

`func (o *GetCompanyUsersResponse) HasUsers() bool`

HasUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


