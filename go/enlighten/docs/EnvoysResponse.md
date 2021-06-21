# EnvoysResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | The identifier of the system. | 
**Envoys** | [**[]EnvoysResponseEnvoys**](EnvoysResponseEnvoys.md) | A list of active Envoys on this system. | 

## Methods

### NewEnvoysResponse

`func NewEnvoysResponse(systemId int32, envoys []EnvoysResponseEnvoys, ) *EnvoysResponse`

NewEnvoysResponse instantiates a new EnvoysResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnvoysResponseWithDefaults

`func NewEnvoysResponseWithDefaults() *EnvoysResponse`

NewEnvoysResponseWithDefaults instantiates a new EnvoysResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *EnvoysResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *EnvoysResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *EnvoysResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetEnvoys

`func (o *EnvoysResponse) GetEnvoys() []EnvoysResponseEnvoys`

GetEnvoys returns the Envoys field if non-nil, zero value otherwise.

### GetEnvoysOk

`func (o *EnvoysResponse) GetEnvoysOk() (*[]EnvoysResponseEnvoys, bool)`

GetEnvoysOk returns a tuple with the Envoys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoys

`func (o *EnvoysResponse) SetEnvoys(v []EnvoysResponseEnvoys)`

SetEnvoys sets Envoys field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


