# TariffSeasonsInnerDaysInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ToU days ID. e.g&#x3D;&#39;all_days&#39;. | [optional] 
**Days** | Pointer to **string** | Comma separated days. e.g&#x3D;&#39;Sun,Mon,Tue,Wed,Thu,Fri,Sat&#39;. | [optional] 
**MustChargeStart** | Pointer to **int32** | Must charge start field. e.g&#x3D;0. | [optional] 
**MustChargeDuration** | Pointer to **int32** | Must charge duration field. e.g&#x3D;0. | [optional] 
**Periods** | Pointer to [**[]TariffSeasonsInnerDaysInnerPeriodsInner**](TariffSeasonsInnerDaysInnerPeriodsInner.md) | Periods. | [optional] 

## Methods

### NewTariffSeasonsInnerDaysInner

`func NewTariffSeasonsInnerDaysInner() *TariffSeasonsInnerDaysInner`

NewTariffSeasonsInnerDaysInner instantiates a new TariffSeasonsInnerDaysInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTariffSeasonsInnerDaysInnerWithDefaults

`func NewTariffSeasonsInnerDaysInnerWithDefaults() *TariffSeasonsInnerDaysInner`

NewTariffSeasonsInnerDaysInnerWithDefaults instantiates a new TariffSeasonsInnerDaysInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TariffSeasonsInnerDaysInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TariffSeasonsInnerDaysInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TariffSeasonsInnerDaysInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TariffSeasonsInnerDaysInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDays

`func (o *TariffSeasonsInnerDaysInner) GetDays() string`

GetDays returns the Days field if non-nil, zero value otherwise.

### GetDaysOk

`func (o *TariffSeasonsInnerDaysInner) GetDaysOk() (*string, bool)`

GetDaysOk returns a tuple with the Days field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDays

`func (o *TariffSeasonsInnerDaysInner) SetDays(v string)`

SetDays sets Days field to given value.

### HasDays

`func (o *TariffSeasonsInnerDaysInner) HasDays() bool`

HasDays returns a boolean if a field has been set.

### GetMustChargeStart

`func (o *TariffSeasonsInnerDaysInner) GetMustChargeStart() int32`

GetMustChargeStart returns the MustChargeStart field if non-nil, zero value otherwise.

### GetMustChargeStartOk

`func (o *TariffSeasonsInnerDaysInner) GetMustChargeStartOk() (*int32, bool)`

GetMustChargeStartOk returns a tuple with the MustChargeStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMustChargeStart

`func (o *TariffSeasonsInnerDaysInner) SetMustChargeStart(v int32)`

SetMustChargeStart sets MustChargeStart field to given value.

### HasMustChargeStart

`func (o *TariffSeasonsInnerDaysInner) HasMustChargeStart() bool`

HasMustChargeStart returns a boolean if a field has been set.

### GetMustChargeDuration

`func (o *TariffSeasonsInnerDaysInner) GetMustChargeDuration() int32`

GetMustChargeDuration returns the MustChargeDuration field if non-nil, zero value otherwise.

### GetMustChargeDurationOk

`func (o *TariffSeasonsInnerDaysInner) GetMustChargeDurationOk() (*int32, bool)`

GetMustChargeDurationOk returns a tuple with the MustChargeDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMustChargeDuration

`func (o *TariffSeasonsInnerDaysInner) SetMustChargeDuration(v int32)`

SetMustChargeDuration sets MustChargeDuration field to given value.

### HasMustChargeDuration

`func (o *TariffSeasonsInnerDaysInner) HasMustChargeDuration() bool`

HasMustChargeDuration returns a boolean if a field has been set.

### GetPeriods

`func (o *TariffSeasonsInnerDaysInner) GetPeriods() []TariffSeasonsInnerDaysInnerPeriodsInner`

GetPeriods returns the Periods field if non-nil, zero value otherwise.

### GetPeriodsOk

`func (o *TariffSeasonsInnerDaysInner) GetPeriodsOk() (*[]TariffSeasonsInnerDaysInnerPeriodsInner, bool)`

GetPeriodsOk returns a tuple with the Periods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriods

`func (o *TariffSeasonsInnerDaysInner) SetPeriods(v []TariffSeasonsInnerDaysInnerPeriodsInner)`

SetPeriods sets Periods field to given value.

### HasPeriods

`func (o *TariffSeasonsInnerDaysInner) HasPeriods() bool`

HasPeriods returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


