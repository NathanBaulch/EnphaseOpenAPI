# InlineResponse2002Systems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | The Enlighten ID of the system. | 
**SystemName** | **string** | The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes. | 
**SystemPublicName** | **string** | The display name of the system. Use this when displaying the system name on a public list or view. | 
**Reference** | **string** | If the calling user belongs to a company and that company has provided its own identifiers for a system, that ID is included here. Otherwise, this attribute is not returned. | 
**OtherReferences** | **[]string** | If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned. | 
**Country** | **string** | The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference. | 
**State** | **string** | The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference. | 
**City** | **string** | The name of the city where the system is located. | 
**PostalCode** | **string** | The postal code where the system is located. | 
**Timezone** | **string** | The timezone of the system. | 
**ConnectionType** | [**ConnectionType**](ConnectionType.md) |  | 
**Status** | **string** | The current status of the system. You can find this and more in the &#x60;meta&#x60; property. | 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewInlineResponse2002Systems

`func NewInlineResponse2002Systems(systemId int32, systemName string, systemPublicName string, reference string, otherReferences []string, country string, state string, city string, postalCode string, timezone string, connectionType ConnectionType, status string, meta Meta, ) *InlineResponse2002Systems`

NewInlineResponse2002Systems instantiates a new InlineResponse2002Systems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2002SystemsWithDefaults

`func NewInlineResponse2002SystemsWithDefaults() *InlineResponse2002Systems`

NewInlineResponse2002SystemsWithDefaults instantiates a new InlineResponse2002Systems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *InlineResponse2002Systems) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *InlineResponse2002Systems) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *InlineResponse2002Systems) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetSystemName

`func (o *InlineResponse2002Systems) GetSystemName() string`

GetSystemName returns the SystemName field if non-nil, zero value otherwise.

### GetSystemNameOk

`func (o *InlineResponse2002Systems) GetSystemNameOk() (*string, bool)`

GetSystemNameOk returns a tuple with the SystemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemName

`func (o *InlineResponse2002Systems) SetSystemName(v string)`

SetSystemName sets SystemName field to given value.


### GetSystemPublicName

`func (o *InlineResponse2002Systems) GetSystemPublicName() string`

GetSystemPublicName returns the SystemPublicName field if non-nil, zero value otherwise.

### GetSystemPublicNameOk

`func (o *InlineResponse2002Systems) GetSystemPublicNameOk() (*string, bool)`

GetSystemPublicNameOk returns a tuple with the SystemPublicName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemPublicName

`func (o *InlineResponse2002Systems) SetSystemPublicName(v string)`

SetSystemPublicName sets SystemPublicName field to given value.


### GetReference

`func (o *InlineResponse2002Systems) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *InlineResponse2002Systems) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *InlineResponse2002Systems) SetReference(v string)`

SetReference sets Reference field to given value.


### GetOtherReferences

`func (o *InlineResponse2002Systems) GetOtherReferences() []string`

GetOtherReferences returns the OtherReferences field if non-nil, zero value otherwise.

### GetOtherReferencesOk

`func (o *InlineResponse2002Systems) GetOtherReferencesOk() (*[]string, bool)`

GetOtherReferencesOk returns a tuple with the OtherReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherReferences

`func (o *InlineResponse2002Systems) SetOtherReferences(v []string)`

SetOtherReferences sets OtherReferences field to given value.


### GetCountry

`func (o *InlineResponse2002Systems) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *InlineResponse2002Systems) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *InlineResponse2002Systems) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetState

`func (o *InlineResponse2002Systems) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *InlineResponse2002Systems) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *InlineResponse2002Systems) SetState(v string)`

SetState sets State field to given value.


### GetCity

`func (o *InlineResponse2002Systems) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *InlineResponse2002Systems) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *InlineResponse2002Systems) SetCity(v string)`

SetCity sets City field to given value.


### GetPostalCode

`func (o *InlineResponse2002Systems) GetPostalCode() string`

GetPostalCode returns the PostalCode field if non-nil, zero value otherwise.

### GetPostalCodeOk

`func (o *InlineResponse2002Systems) GetPostalCodeOk() (*string, bool)`

GetPostalCodeOk returns a tuple with the PostalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCode

`func (o *InlineResponse2002Systems) SetPostalCode(v string)`

SetPostalCode sets PostalCode field to given value.


### GetTimezone

`func (o *InlineResponse2002Systems) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *InlineResponse2002Systems) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *InlineResponse2002Systems) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.


### GetConnectionType

`func (o *InlineResponse2002Systems) GetConnectionType() ConnectionType`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *InlineResponse2002Systems) GetConnectionTypeOk() (*ConnectionType, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *InlineResponse2002Systems) SetConnectionType(v ConnectionType)`

SetConnectionType sets ConnectionType field to given value.


### GetStatus

`func (o *InlineResponse2002Systems) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InlineResponse2002Systems) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InlineResponse2002Systems) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetMeta

`func (o *InlineResponse2002Systems) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *InlineResponse2002Systems) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *InlineResponse2002Systems) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


