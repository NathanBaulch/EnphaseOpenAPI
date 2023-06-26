# TariffSettingsTariff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyType** | Pointer to [**TariffSettingsTariffCurrencyType**](TariffSettingsTariffCurrencyType.md) |  | [optional] 
**SingleRate** | Pointer to [**TariffSettingsTariffSingleRate**](TariffSettingsTariffSingleRate.md) |  | [optional] 
**Seasons** | Pointer to [**[]TariffSeasonsInner**](TariffSeasonsInner.md) | ToU seasons. | [optional] 
**SeasonsSell** | Pointer to [**[]TariffSeasonsInner**](TariffSeasonsInner.md) | ToU seasons. | [optional] 

## Methods

### NewTariffSettingsTariff

`func NewTariffSettingsTariff() *TariffSettingsTariff`

NewTariffSettingsTariff instantiates a new TariffSettingsTariff object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTariffSettingsTariffWithDefaults

`func NewTariffSettingsTariffWithDefaults() *TariffSettingsTariff`

NewTariffSettingsTariffWithDefaults instantiates a new TariffSettingsTariff object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencyType

`func (o *TariffSettingsTariff) GetCurrencyType() TariffSettingsTariffCurrencyType`

GetCurrencyType returns the CurrencyType field if non-nil, zero value otherwise.

### GetCurrencyTypeOk

`func (o *TariffSettingsTariff) GetCurrencyTypeOk() (*TariffSettingsTariffCurrencyType, bool)`

GetCurrencyTypeOk returns a tuple with the CurrencyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyType

`func (o *TariffSettingsTariff) SetCurrencyType(v TariffSettingsTariffCurrencyType)`

SetCurrencyType sets CurrencyType field to given value.

### HasCurrencyType

`func (o *TariffSettingsTariff) HasCurrencyType() bool`

HasCurrencyType returns a boolean if a field has been set.

### GetSingleRate

`func (o *TariffSettingsTariff) GetSingleRate() TariffSettingsTariffSingleRate`

GetSingleRate returns the SingleRate field if non-nil, zero value otherwise.

### GetSingleRateOk

`func (o *TariffSettingsTariff) GetSingleRateOk() (*TariffSettingsTariffSingleRate, bool)`

GetSingleRateOk returns a tuple with the SingleRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSingleRate

`func (o *TariffSettingsTariff) SetSingleRate(v TariffSettingsTariffSingleRate)`

SetSingleRate sets SingleRate field to given value.

### HasSingleRate

`func (o *TariffSettingsTariff) HasSingleRate() bool`

HasSingleRate returns a boolean if a field has been set.

### GetSeasons

`func (o *TariffSettingsTariff) GetSeasons() []TariffSeasonsInner`

GetSeasons returns the Seasons field if non-nil, zero value otherwise.

### GetSeasonsOk

`func (o *TariffSettingsTariff) GetSeasonsOk() (*[]TariffSeasonsInner, bool)`

GetSeasonsOk returns a tuple with the Seasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasons

`func (o *TariffSettingsTariff) SetSeasons(v []TariffSeasonsInner)`

SetSeasons sets Seasons field to given value.

### HasSeasons

`func (o *TariffSettingsTariff) HasSeasons() bool`

HasSeasons returns a boolean if a field has been set.

### GetSeasonsSell

`func (o *TariffSettingsTariff) GetSeasonsSell() []TariffSeasonsInner`

GetSeasonsSell returns the SeasonsSell field if non-nil, zero value otherwise.

### GetSeasonsSellOk

`func (o *TariffSettingsTariff) GetSeasonsSellOk() (*[]TariffSeasonsInner, bool)`

GetSeasonsSellOk returns a tuple with the SeasonsSell field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonsSell

`func (o *TariffSettingsTariff) SetSeasonsSell(v []TariffSeasonsInner)`

SetSeasonsSell sets SeasonsSell field to given value.

### HasSeasonsSell

`func (o *TariffSettingsTariff) HasSeasonsSell() bool`

HasSeasonsSell returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


