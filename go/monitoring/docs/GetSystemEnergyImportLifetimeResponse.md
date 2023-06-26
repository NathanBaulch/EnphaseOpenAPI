# GetSystemEnergyImportLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | Unique numeric ID of the system. | [optional] 
**StartDate** | Pointer to **string** | When no start_date parameter is specified on the request, defaults to the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, the same is included in the response. | [optional] 
**Import** | Pointer to **[]int32** | An array of import measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional] 
**Meta** | Pointer to [**Meta**](Meta.md) |  | [optional] 

## Methods

### NewGetSystemEnergyImportLifetimeResponse

`func NewGetSystemEnergyImportLifetimeResponse() *GetSystemEnergyImportLifetimeResponse`

NewGetSystemEnergyImportLifetimeResponse instantiates a new GetSystemEnergyImportLifetimeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemEnergyImportLifetimeResponseWithDefaults

`func NewGetSystemEnergyImportLifetimeResponseWithDefaults() *GetSystemEnergyImportLifetimeResponse`

NewGetSystemEnergyImportLifetimeResponseWithDefaults instantiates a new GetSystemEnergyImportLifetimeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemEnergyImportLifetimeResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemEnergyImportLifetimeResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemEnergyImportLifetimeResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemEnergyImportLifetimeResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetStartDate

`func (o *GetSystemEnergyImportLifetimeResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *GetSystemEnergyImportLifetimeResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *GetSystemEnergyImportLifetimeResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *GetSystemEnergyImportLifetimeResponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetImport

`func (o *GetSystemEnergyImportLifetimeResponse) GetImport() []int32`

GetImport returns the Import field if non-nil, zero value otherwise.

### GetImportOk

`func (o *GetSystemEnergyImportLifetimeResponse) GetImportOk() (*[]int32, bool)`

GetImportOk returns a tuple with the Import field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImport

`func (o *GetSystemEnergyImportLifetimeResponse) SetImport(v []int32)`

SetImport sets Import field to given value.

### HasImport

`func (o *GetSystemEnergyImportLifetimeResponse) HasImport() bool`

HasImport returns a boolean if a field has been set.

### GetMeta

`func (o *GetSystemEnergyImportLifetimeResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *GetSystemEnergyImportLifetimeResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *GetSystemEnergyImportLifetimeResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *GetSystemEnergyImportLifetimeResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


