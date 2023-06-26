# GetGridProfilesResponseGridProfilesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Grid profile ID. System-generated. | [optional] 
**ProfileId** | Pointer to **string** |  | [optional] 
**Created** | Pointer to **time.Time** | Profile created date and time. | [optional] 
**Updated** | Pointer to **time.Time** | Profile last updated date and time. | [optional] 
**Name** | Pointer to **string** | Profile name. | [optional] 
**Description** | Pointer to **string** | Profile description. | [optional] 
**Version** | Pointer to **string** | Profile version. | [optional] 
**EnvoyType** | Pointer to **string** | Envoy type. | [optional] 
**Countries** | Pointer to **[]string** | Name of the Countries. | [optional] 
**States** | Pointer to **[]string** | States code. | [optional] 
**StateNames** | Pointer to **[]string** | Name of the states. | [optional] 
**Ensemble1Compatible** | Pointer to **bool** |  | [optional] 

## Methods

### NewGetGridProfilesResponseGridProfilesInner

`func NewGetGridProfilesResponseGridProfilesInner() *GetGridProfilesResponseGridProfilesInner`

NewGetGridProfilesResponseGridProfilesInner instantiates a new GetGridProfilesResponseGridProfilesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetGridProfilesResponseGridProfilesInnerWithDefaults

`func NewGetGridProfilesResponseGridProfilesInnerWithDefaults() *GetGridProfilesResponseGridProfilesInner`

NewGetGridProfilesResponseGridProfilesInnerWithDefaults instantiates a new GetGridProfilesResponseGridProfilesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetGridProfilesResponseGridProfilesInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetGridProfilesResponseGridProfilesInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetGridProfilesResponseGridProfilesInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetProfileId

`func (o *GetGridProfilesResponseGridProfilesInner) GetProfileId() string`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetProfileIdOk() (*string, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *GetGridProfilesResponseGridProfilesInner) SetProfileId(v string)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *GetGridProfilesResponseGridProfilesInner) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetCreated

`func (o *GetGridProfilesResponseGridProfilesInner) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *GetGridProfilesResponseGridProfilesInner) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *GetGridProfilesResponseGridProfilesInner) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetUpdated

`func (o *GetGridProfilesResponseGridProfilesInner) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *GetGridProfilesResponseGridProfilesInner) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.

### HasUpdated

`func (o *GetGridProfilesResponseGridProfilesInner) HasUpdated() bool`

HasUpdated returns a boolean if a field has been set.

### GetName

`func (o *GetGridProfilesResponseGridProfilesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetGridProfilesResponseGridProfilesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GetGridProfilesResponseGridProfilesInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *GetGridProfilesResponseGridProfilesInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetGridProfilesResponseGridProfilesInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GetGridProfilesResponseGridProfilesInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetVersion

`func (o *GetGridProfilesResponseGridProfilesInner) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *GetGridProfilesResponseGridProfilesInner) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *GetGridProfilesResponseGridProfilesInner) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetEnvoyType

`func (o *GetGridProfilesResponseGridProfilesInner) GetEnvoyType() string`

GetEnvoyType returns the EnvoyType field if non-nil, zero value otherwise.

### GetEnvoyTypeOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetEnvoyTypeOk() (*string, bool)`

GetEnvoyTypeOk returns a tuple with the EnvoyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoyType

`func (o *GetGridProfilesResponseGridProfilesInner) SetEnvoyType(v string)`

SetEnvoyType sets EnvoyType field to given value.

### HasEnvoyType

`func (o *GetGridProfilesResponseGridProfilesInner) HasEnvoyType() bool`

HasEnvoyType returns a boolean if a field has been set.

### GetCountries

`func (o *GetGridProfilesResponseGridProfilesInner) GetCountries() []string`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetCountriesOk() (*[]string, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *GetGridProfilesResponseGridProfilesInner) SetCountries(v []string)`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *GetGridProfilesResponseGridProfilesInner) HasCountries() bool`

HasCountries returns a boolean if a field has been set.

### GetStates

`func (o *GetGridProfilesResponseGridProfilesInner) GetStates() []string`

GetStates returns the States field if non-nil, zero value otherwise.

### GetStatesOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetStatesOk() (*[]string, bool)`

GetStatesOk returns a tuple with the States field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStates

`func (o *GetGridProfilesResponseGridProfilesInner) SetStates(v []string)`

SetStates sets States field to given value.

### HasStates

`func (o *GetGridProfilesResponseGridProfilesInner) HasStates() bool`

HasStates returns a boolean if a field has been set.

### GetStateNames

`func (o *GetGridProfilesResponseGridProfilesInner) GetStateNames() []string`

GetStateNames returns the StateNames field if non-nil, zero value otherwise.

### GetStateNamesOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetStateNamesOk() (*[]string, bool)`

GetStateNamesOk returns a tuple with the StateNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateNames

`func (o *GetGridProfilesResponseGridProfilesInner) SetStateNames(v []string)`

SetStateNames sets StateNames field to given value.

### HasStateNames

`func (o *GetGridProfilesResponseGridProfilesInner) HasStateNames() bool`

HasStateNames returns a boolean if a field has been set.

### GetEnsemble1Compatible

`func (o *GetGridProfilesResponseGridProfilesInner) GetEnsemble1Compatible() bool`

GetEnsemble1Compatible returns the Ensemble1Compatible field if non-nil, zero value otherwise.

### GetEnsemble1CompatibleOk

`func (o *GetGridProfilesResponseGridProfilesInner) GetEnsemble1CompatibleOk() (*bool, bool)`

GetEnsemble1CompatibleOk returns a tuple with the Ensemble1Compatible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnsemble1Compatible

`func (o *GetGridProfilesResponseGridProfilesInner) SetEnsemble1Compatible(v bool)`

SetEnsemble1Compatible sets Ensemble1Compatible field to given value.

### HasEnsemble1Compatible

`func (o *GetGridProfilesResponseGridProfilesInner) HasEnsemble1Compatible() bool`

HasEnsemble1Compatible returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


