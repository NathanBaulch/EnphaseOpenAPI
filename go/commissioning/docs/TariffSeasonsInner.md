# TariffSeasonsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ToU year ID. e.g&#x3D;&#39;all_year_long&#39;. | [optional] 
**Start** | Pointer to **string** | Start of season. e.g&#x3D;&#39;1/1&#39;. | [optional] 
**Days** | Pointer to [**[]TariffSeasonsInnerDaysInner**](TariffSeasonsInnerDaysInner.md) | ToU seasons. | [optional] 
**EnableChargeFromGrid** | Pointer to **bool** |  | [optional] 
**EnableDischargeToGrid** | Pointer to **bool** |  | [optional] 

## Methods

### NewTariffSeasonsInner

`func NewTariffSeasonsInner() *TariffSeasonsInner`

NewTariffSeasonsInner instantiates a new TariffSeasonsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTariffSeasonsInnerWithDefaults

`func NewTariffSeasonsInnerWithDefaults() *TariffSeasonsInner`

NewTariffSeasonsInnerWithDefaults instantiates a new TariffSeasonsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TariffSeasonsInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TariffSeasonsInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TariffSeasonsInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TariffSeasonsInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStart

`func (o *TariffSeasonsInner) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *TariffSeasonsInner) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *TariffSeasonsInner) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *TariffSeasonsInner) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetDays

`func (o *TariffSeasonsInner) GetDays() []TariffSeasonsInnerDaysInner`

GetDays returns the Days field if non-nil, zero value otherwise.

### GetDaysOk

`func (o *TariffSeasonsInner) GetDaysOk() (*[]TariffSeasonsInnerDaysInner, bool)`

GetDaysOk returns a tuple with the Days field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDays

`func (o *TariffSeasonsInner) SetDays(v []TariffSeasonsInnerDaysInner)`

SetDays sets Days field to given value.

### HasDays

`func (o *TariffSeasonsInner) HasDays() bool`

HasDays returns a boolean if a field has been set.

### GetEnableChargeFromGrid

`func (o *TariffSeasonsInner) GetEnableChargeFromGrid() bool`

GetEnableChargeFromGrid returns the EnableChargeFromGrid field if non-nil, zero value otherwise.

### GetEnableChargeFromGridOk

`func (o *TariffSeasonsInner) GetEnableChargeFromGridOk() (*bool, bool)`

GetEnableChargeFromGridOk returns a tuple with the EnableChargeFromGrid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableChargeFromGrid

`func (o *TariffSeasonsInner) SetEnableChargeFromGrid(v bool)`

SetEnableChargeFromGrid sets EnableChargeFromGrid field to given value.

### HasEnableChargeFromGrid

`func (o *TariffSeasonsInner) HasEnableChargeFromGrid() bool`

HasEnableChargeFromGrid returns a boolean if a field has been set.

### GetEnableDischargeToGrid

`func (o *TariffSeasonsInner) GetEnableDischargeToGrid() bool`

GetEnableDischargeToGrid returns the EnableDischargeToGrid field if non-nil, zero value otherwise.

### GetEnableDischargeToGridOk

`func (o *TariffSeasonsInner) GetEnableDischargeToGridOk() (*bool, bool)`

GetEnableDischargeToGridOk returns a tuple with the EnableDischargeToGrid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableDischargeToGrid

`func (o *TariffSeasonsInner) SetEnableDischargeToGrid(v bool)`

SetEnableDischargeToGrid sets EnableDischargeToGrid field to given value.

### HasEnableDischargeToGrid

`func (o *TariffSeasonsInner) HasEnableDischargeToGrid() bool`

HasEnableDischargeToGrid returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


