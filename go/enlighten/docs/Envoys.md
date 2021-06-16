# Envoys

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | The identifier of the system. | 
**Envoys** | [**[]EnvoysEnvoys**](EnvoysEnvoys.md) | A list of active Envoys on this system. | 

## Methods

### NewEnvoys

`func NewEnvoys(systemId int32, envoys []EnvoysEnvoys, ) *Envoys`

NewEnvoys instantiates a new Envoys object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnvoysWithDefaults

`func NewEnvoysWithDefaults() *Envoys`

NewEnvoysWithDefaults instantiates a new Envoys object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *Envoys) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *Envoys) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *Envoys) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetEnvoys

`func (o *Envoys) GetEnvoys() []EnvoysEnvoys`

GetEnvoys returns the Envoys field if non-nil, zero value otherwise.

### GetEnvoysOk

`func (o *Envoys) GetEnvoysOk() (*[]EnvoysEnvoys, bool)`

GetEnvoysOk returns a tuple with the Envoys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoys

`func (o *Envoys) SetEnvoys(v []EnvoysEnvoys)`

SetEnvoys sets Envoys field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


