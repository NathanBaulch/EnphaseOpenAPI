# SearchSystemsRequestSystem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | Pointer to **[]int32** | Filter system by particular Ids. | [optional] 
**Name** | Pointer to **string** | Search by name of the system. | [optional] 
**PublicName** | Pointer to [**SystemPublicNameEnum**](SystemPublicNameEnum.md) |  | [optional] 
**Statuses** | Pointer to [**[]SystemStatusEnum**](SystemStatusEnum.md) | Search by System status. | [optional] 
**ConnectionType** | Pointer to [**SystemConnectionTypeEnum**](SystemConnectionTypeEnum.md) |  | [optional] 

## Methods

### NewSearchSystemsRequestSystem

`func NewSearchSystemsRequestSystem() *SearchSystemsRequestSystem`

NewSearchSystemsRequestSystem instantiates a new SearchSystemsRequestSystem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchSystemsRequestSystemWithDefaults

`func NewSearchSystemsRequestSystemWithDefaults() *SearchSystemsRequestSystem`

NewSearchSystemsRequestSystemWithDefaults instantiates a new SearchSystemsRequestSystem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *SearchSystemsRequestSystem) GetIds() []int32`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *SearchSystemsRequestSystem) GetIdsOk() (*[]int32, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *SearchSystemsRequestSystem) SetIds(v []int32)`

SetIds sets Ids field to given value.

### HasIds

`func (o *SearchSystemsRequestSystem) HasIds() bool`

HasIds returns a boolean if a field has been set.

### GetName

`func (o *SearchSystemsRequestSystem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SearchSystemsRequestSystem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SearchSystemsRequestSystem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SearchSystemsRequestSystem) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPublicName

`func (o *SearchSystemsRequestSystem) GetPublicName() SystemPublicNameEnum`

GetPublicName returns the PublicName field if non-nil, zero value otherwise.

### GetPublicNameOk

`func (o *SearchSystemsRequestSystem) GetPublicNameOk() (*SystemPublicNameEnum, bool)`

GetPublicNameOk returns a tuple with the PublicName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicName

`func (o *SearchSystemsRequestSystem) SetPublicName(v SystemPublicNameEnum)`

SetPublicName sets PublicName field to given value.

### HasPublicName

`func (o *SearchSystemsRequestSystem) HasPublicName() bool`

HasPublicName returns a boolean if a field has been set.

### GetStatuses

`func (o *SearchSystemsRequestSystem) GetStatuses() []SystemStatusEnum`

GetStatuses returns the Statuses field if non-nil, zero value otherwise.

### GetStatusesOk

`func (o *SearchSystemsRequestSystem) GetStatusesOk() (*[]SystemStatusEnum, bool)`

GetStatusesOk returns a tuple with the Statuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatuses

`func (o *SearchSystemsRequestSystem) SetStatuses(v []SystemStatusEnum)`

SetStatuses sets Statuses field to given value.

### HasStatuses

`func (o *SearchSystemsRequestSystem) HasStatuses() bool`

HasStatuses returns a boolean if a field has been set.

### GetConnectionType

`func (o *SearchSystemsRequestSystem) GetConnectionType() SystemConnectionTypeEnum`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *SearchSystemsRequestSystem) GetConnectionTypeOk() (*SystemConnectionTypeEnum, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *SearchSystemsRequestSystem) SetConnectionType(v SystemConnectionTypeEnum)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *SearchSystemsRequestSystem) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


