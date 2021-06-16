# SystemsSystems

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

### NewSystemsSystems

`func NewSystemsSystems(systemId int32, systemName string, systemPublicName string, reference string, otherReferences []string, country string, state string, city string, postalCode string, timezone string, connectionType ConnectionType, status string, meta Meta, ) *SystemsSystems`

NewSystemsSystems instantiates a new SystemsSystems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemsSystemsWithDefaults

`func NewSystemsSystemsWithDefaults() *SystemsSystems`

NewSystemsSystemsWithDefaults instantiates a new SystemsSystems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *SystemsSystems) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *SystemsSystems) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *SystemsSystems) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetSystemName

`func (o *SystemsSystems) GetSystemName() string`

GetSystemName returns the SystemName field if non-nil, zero value otherwise.

### GetSystemNameOk

`func (o *SystemsSystems) GetSystemNameOk() (*string, bool)`

GetSystemNameOk returns a tuple with the SystemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemName

`func (o *SystemsSystems) SetSystemName(v string)`

SetSystemName sets SystemName field to given value.


### GetSystemPublicName

`func (o *SystemsSystems) GetSystemPublicName() string`

GetSystemPublicName returns the SystemPublicName field if non-nil, zero value otherwise.

### GetSystemPublicNameOk

`func (o *SystemsSystems) GetSystemPublicNameOk() (*string, bool)`

GetSystemPublicNameOk returns a tuple with the SystemPublicName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemPublicName

`func (o *SystemsSystems) SetSystemPublicName(v string)`

SetSystemPublicName sets SystemPublicName field to given value.


### GetReference

`func (o *SystemsSystems) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *SystemsSystems) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *SystemsSystems) SetReference(v string)`

SetReference sets Reference field to given value.


### GetOtherReferences

`func (o *SystemsSystems) GetOtherReferences() []string`

GetOtherReferences returns the OtherReferences field if non-nil, zero value otherwise.

### GetOtherReferencesOk

`func (o *SystemsSystems) GetOtherReferencesOk() (*[]string, bool)`

GetOtherReferencesOk returns a tuple with the OtherReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherReferences

`func (o *SystemsSystems) SetOtherReferences(v []string)`

SetOtherReferences sets OtherReferences field to given value.


### GetCountry

`func (o *SystemsSystems) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *SystemsSystems) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *SystemsSystems) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetState

`func (o *SystemsSystems) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SystemsSystems) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SystemsSystems) SetState(v string)`

SetState sets State field to given value.


### GetCity

`func (o *SystemsSystems) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *SystemsSystems) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *SystemsSystems) SetCity(v string)`

SetCity sets City field to given value.


### GetPostalCode

`func (o *SystemsSystems) GetPostalCode() string`

GetPostalCode returns the PostalCode field if non-nil, zero value otherwise.

### GetPostalCodeOk

`func (o *SystemsSystems) GetPostalCodeOk() (*string, bool)`

GetPostalCodeOk returns a tuple with the PostalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCode

`func (o *SystemsSystems) SetPostalCode(v string)`

SetPostalCode sets PostalCode field to given value.


### GetTimezone

`func (o *SystemsSystems) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *SystemsSystems) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *SystemsSystems) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.


### GetConnectionType

`func (o *SystemsSystems) GetConnectionType() ConnectionType`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *SystemsSystems) GetConnectionTypeOk() (*ConnectionType, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *SystemsSystems) SetConnectionType(v ConnectionType)`

SetConnectionType sets ConnectionType field to given value.


### GetStatus

`func (o *SystemsSystems) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SystemsSystems) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SystemsSystems) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetMeta

`func (o *SystemsSystems) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *SystemsSystems) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *SystemsSystems) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


