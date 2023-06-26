# SearchUsersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** | Pointer to **int32** | Enlighten ID of the user. | [optional] 
**CompanyId** | Pointer to **int32** | Enlighten ID of the company that the user belongs to. If the user does not belong to a company, this field will not be present in the response. | [optional] 

## Methods

### NewSearchUsersResponse

`func NewSearchUsersResponse() *SearchUsersResponse`

NewSearchUsersResponse instantiates a new SearchUsersResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchUsersResponseWithDefaults

`func NewSearchUsersResponseWithDefaults() *SearchUsersResponse`

NewSearchUsersResponseWithDefaults instantiates a new SearchUsersResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserId

`func (o *SearchUsersResponse) GetUserId() int32`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *SearchUsersResponse) GetUserIdOk() (*int32, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *SearchUsersResponse) SetUserId(v int32)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *SearchUsersResponse) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetCompanyId

`func (o *SearchUsersResponse) GetCompanyId() int32`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *SearchUsersResponse) GetCompanyIdOk() (*int32, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *SearchUsersResponse) SetCompanyId(v int32)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *SearchUsersResponse) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


