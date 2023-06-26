# GetSystemEnergyExportLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | Unique numeric ID of the system. | [optional] 
**StartDate** | Pointer to **string** | When no start_date parameter is specified on the request, defaults to the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, the same is included in the response. | [optional] 
**Export** | Pointer to **[]int32** | An array of export measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional] 
**Meta** | Pointer to [**Meta**](Meta.md) |  | [optional] 

## Methods

### NewGetSystemEnergyExportLifetimeResponse

`func NewGetSystemEnergyExportLifetimeResponse() *GetSystemEnergyExportLifetimeResponse`

NewGetSystemEnergyExportLifetimeResponse instantiates a new GetSystemEnergyExportLifetimeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemEnergyExportLifetimeResponseWithDefaults

`func NewGetSystemEnergyExportLifetimeResponseWithDefaults() *GetSystemEnergyExportLifetimeResponse`

NewGetSystemEnergyExportLifetimeResponseWithDefaults instantiates a new GetSystemEnergyExportLifetimeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemEnergyExportLifetimeResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemEnergyExportLifetimeResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemEnergyExportLifetimeResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemEnergyExportLifetimeResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetStartDate

`func (o *GetSystemEnergyExportLifetimeResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *GetSystemEnergyExportLifetimeResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *GetSystemEnergyExportLifetimeResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *GetSystemEnergyExportLifetimeResponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetExport

`func (o *GetSystemEnergyExportLifetimeResponse) GetExport() []int32`

GetExport returns the Export field if non-nil, zero value otherwise.

### GetExportOk

`func (o *GetSystemEnergyExportLifetimeResponse) GetExportOk() (*[]int32, bool)`

GetExportOk returns a tuple with the Export field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExport

`func (o *GetSystemEnergyExportLifetimeResponse) SetExport(v []int32)`

SetExport sets Export field to given value.

### HasExport

`func (o *GetSystemEnergyExportLifetimeResponse) HasExport() bool`

HasExport returns a boolean if a field has been set.

### GetMeta

`func (o *GetSystemEnergyExportLifetimeResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *GetSystemEnergyExportLifetimeResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *GetSystemEnergyExportLifetimeResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *GetSystemEnergyExportLifetimeResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


