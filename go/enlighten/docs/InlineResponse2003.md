# InlineResponse2003

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | Enlighten ID for this system. | 
**Envoys** | Pointer to [**[]InlineResponse2003Envoys**](InlineResponse2003Envoys.md) | A list of Envoys on this system, including serial number. | [optional] 
**Inverters** | [**[]InlineResponse2003Envoys**](InlineResponse2003Envoys.md) | A list of inverters on this system, including serial and model numbers. | 
**Meters** | [**[]InlineResponse2003Meters**](InlineResponse2003Meters.md) | A list of meters on this system, including serial number, manufacturer, and model number. | 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewInlineResponse2003

`func NewInlineResponse2003(systemId int32, inverters []InlineResponse2003Envoys, meters []InlineResponse2003Meters, meta Meta, ) *InlineResponse2003`

NewInlineResponse2003 instantiates a new InlineResponse2003 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2003WithDefaults

`func NewInlineResponse2003WithDefaults() *InlineResponse2003`

NewInlineResponse2003WithDefaults instantiates a new InlineResponse2003 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *InlineResponse2003) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *InlineResponse2003) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *InlineResponse2003) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetEnvoys

`func (o *InlineResponse2003) GetEnvoys() []InlineResponse2003Envoys`

GetEnvoys returns the Envoys field if non-nil, zero value otherwise.

### GetEnvoysOk

`func (o *InlineResponse2003) GetEnvoysOk() (*[]InlineResponse2003Envoys, bool)`

GetEnvoysOk returns a tuple with the Envoys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoys

`func (o *InlineResponse2003) SetEnvoys(v []InlineResponse2003Envoys)`

SetEnvoys sets Envoys field to given value.

### HasEnvoys

`func (o *InlineResponse2003) HasEnvoys() bool`

HasEnvoys returns a boolean if a field has been set.

### GetInverters

`func (o *InlineResponse2003) GetInverters() []InlineResponse2003Envoys`

GetInverters returns the Inverters field if non-nil, zero value otherwise.

### GetInvertersOk

`func (o *InlineResponse2003) GetInvertersOk() (*[]InlineResponse2003Envoys, bool)`

GetInvertersOk returns a tuple with the Inverters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInverters

`func (o *InlineResponse2003) SetInverters(v []InlineResponse2003Envoys)`

SetInverters sets Inverters field to given value.


### GetMeters

`func (o *InlineResponse2003) GetMeters() []InlineResponse2003Meters`

GetMeters returns the Meters field if non-nil, zero value otherwise.

### GetMetersOk

`func (o *InlineResponse2003) GetMetersOk() (*[]InlineResponse2003Meters, bool)`

GetMetersOk returns a tuple with the Meters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeters

`func (o *InlineResponse2003) SetMeters(v []InlineResponse2003Meters)`

SetMeters sets Meters field to given value.


### GetMeta

`func (o *InlineResponse2003) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *InlineResponse2003) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *InlineResponse2003) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


