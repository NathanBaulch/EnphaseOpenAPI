# GetSystemBatteryLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | Unique numeric ID of the system. | [optional] 
**StartDate** | Pointer to **string** | When no start_date parameter is specified on the request, defaults to the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, the same is included in the response. | [optional] 
**Charge** | Pointer to **[]int32** | An array of charge measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional] 
**Discharge** | Pointer to **[]int32** | An array of discharge measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional] 
**Meta** | Pointer to [**Meta**](Meta.md) |  | [optional] 

## Methods

### NewGetSystemBatteryLifetimeResponse

`func NewGetSystemBatteryLifetimeResponse() *GetSystemBatteryLifetimeResponse`

NewGetSystemBatteryLifetimeResponse instantiates a new GetSystemBatteryLifetimeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemBatteryLifetimeResponseWithDefaults

`func NewGetSystemBatteryLifetimeResponseWithDefaults() *GetSystemBatteryLifetimeResponse`

NewGetSystemBatteryLifetimeResponseWithDefaults instantiates a new GetSystemBatteryLifetimeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemBatteryLifetimeResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemBatteryLifetimeResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemBatteryLifetimeResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemBatteryLifetimeResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetStartDate

`func (o *GetSystemBatteryLifetimeResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *GetSystemBatteryLifetimeResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *GetSystemBatteryLifetimeResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *GetSystemBatteryLifetimeResponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetCharge

`func (o *GetSystemBatteryLifetimeResponse) GetCharge() []int32`

GetCharge returns the Charge field if non-nil, zero value otherwise.

### GetChargeOk

`func (o *GetSystemBatteryLifetimeResponse) GetChargeOk() (*[]int32, bool)`

GetChargeOk returns a tuple with the Charge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharge

`func (o *GetSystemBatteryLifetimeResponse) SetCharge(v []int32)`

SetCharge sets Charge field to given value.

### HasCharge

`func (o *GetSystemBatteryLifetimeResponse) HasCharge() bool`

HasCharge returns a boolean if a field has been set.

### GetDischarge

`func (o *GetSystemBatteryLifetimeResponse) GetDischarge() []int32`

GetDischarge returns the Discharge field if non-nil, zero value otherwise.

### GetDischargeOk

`func (o *GetSystemBatteryLifetimeResponse) GetDischargeOk() (*[]int32, bool)`

GetDischargeOk returns a tuple with the Discharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDischarge

`func (o *GetSystemBatteryLifetimeResponse) SetDischarge(v []int32)`

SetDischarge sets Discharge field to given value.

### HasDischarge

`func (o *GetSystemBatteryLifetimeResponse) HasDischarge() bool`

HasDischarge returns a boolean if a field has been set.

### GetMeta

`func (o *GetSystemBatteryLifetimeResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *GetSystemBatteryLifetimeResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *GetSystemBatteryLifetimeResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *GetSystemBatteryLifetimeResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


