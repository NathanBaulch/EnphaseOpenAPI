# InlineResponse2001

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | The identifier of the system. | 
**Envoys** | [**[]InlineResponse2001Envoys**](InlineResponse2001Envoys.md) | A list of active Envoys on this system. | 

## Methods

### NewInlineResponse2001

`func NewInlineResponse2001(systemId int32, envoys []InlineResponse2001Envoys, ) *InlineResponse2001`

NewInlineResponse2001 instantiates a new InlineResponse2001 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2001WithDefaults

`func NewInlineResponse2001WithDefaults() *InlineResponse2001`

NewInlineResponse2001WithDefaults instantiates a new InlineResponse2001 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *InlineResponse2001) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *InlineResponse2001) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *InlineResponse2001) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetEnvoys

`func (o *InlineResponse2001) GetEnvoys() []InlineResponse2001Envoys`

GetEnvoys returns the Envoys field if non-nil, zero value otherwise.

### GetEnvoysOk

`func (o *InlineResponse2001) GetEnvoysOk() (*[]InlineResponse2001Envoys, bool)`

GetEnvoysOk returns a tuple with the Envoys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoys

`func (o *InlineResponse2001) SetEnvoys(v []InlineResponse2001Envoys)`

SetEnvoys sets Envoys field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


