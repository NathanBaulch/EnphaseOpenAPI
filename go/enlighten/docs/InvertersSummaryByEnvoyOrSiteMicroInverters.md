# InvertersSummaryByEnvoyOrSiteMicroInverters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Model** | **string** | Model number of this Microinverter. | 
**PartNumber** | **string** | The Enphase part number of this Microinverter. | 
**SerialNumber** | **string** | The serial number of this Microinverter. | 
**Sku** | **string** |  | 
**Status** | **string** | The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired. | 
**PowerProduced** | **int32** |  | 
**ProcLoad** | **string** |  | 
**ParamTable** | **string** |  | 
**EnvoySerialNumber** | **string** |  | 
**Energy** | [**InvertersSummaryByEnvoyOrSiteEnergy**](InvertersSummaryByEnvoyOrSiteEnergy.md) |  | 
**GridProfile** | **string** |  | 
**LastReportDate** | **string** | The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. | 

## Methods

### NewInvertersSummaryByEnvoyOrSiteMicroInverters

`func NewInvertersSummaryByEnvoyOrSiteMicroInverters(id int32, model string, partNumber string, serialNumber string, sku string, status string, powerProduced int32, procLoad string, paramTable string, envoySerialNumber string, energy InvertersSummaryByEnvoyOrSiteEnergy, gridProfile string, lastReportDate string, ) *InvertersSummaryByEnvoyOrSiteMicroInverters`

NewInvertersSummaryByEnvoyOrSiteMicroInverters instantiates a new InvertersSummaryByEnvoyOrSiteMicroInverters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvertersSummaryByEnvoyOrSiteMicroInvertersWithDefaults

`func NewInvertersSummaryByEnvoyOrSiteMicroInvertersWithDefaults() *InvertersSummaryByEnvoyOrSiteMicroInverters`

NewInvertersSummaryByEnvoyOrSiteMicroInvertersWithDefaults instantiates a new InvertersSummaryByEnvoyOrSiteMicroInverters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetId(v int32)`

SetId sets Id field to given value.


### GetModel

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetModel(v string)`

SetModel sets Model field to given value.


### GetPartNumber

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetPartNumber() string`

GetPartNumber returns the PartNumber field if non-nil, zero value otherwise.

### GetPartNumberOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetPartNumberOk() (*string, bool)`

GetPartNumberOk returns a tuple with the PartNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartNumber

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetPartNumber(v string)`

SetPartNumber sets PartNumber field to given value.


### GetSerialNumber

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.


### GetSku

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetSku() string`

GetSku returns the Sku field if non-nil, zero value otherwise.

### GetSkuOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetSkuOk() (*string, bool)`

GetSkuOk returns a tuple with the Sku field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSku

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetSku(v string)`

SetSku sets Sku field to given value.


### GetStatus

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPowerProduced

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetPowerProduced() int32`

GetPowerProduced returns the PowerProduced field if non-nil, zero value otherwise.

### GetPowerProducedOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetPowerProducedOk() (*int32, bool)`

GetPowerProducedOk returns a tuple with the PowerProduced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPowerProduced

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetPowerProduced(v int32)`

SetPowerProduced sets PowerProduced field to given value.


### GetProcLoad

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetProcLoad() string`

GetProcLoad returns the ProcLoad field if non-nil, zero value otherwise.

### GetProcLoadOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetProcLoadOk() (*string, bool)`

GetProcLoadOk returns a tuple with the ProcLoad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcLoad

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetProcLoad(v string)`

SetProcLoad sets ProcLoad field to given value.


### GetParamTable

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetParamTable() string`

GetParamTable returns the ParamTable field if non-nil, zero value otherwise.

### GetParamTableOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetParamTableOk() (*string, bool)`

GetParamTableOk returns a tuple with the ParamTable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParamTable

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetParamTable(v string)`

SetParamTable sets ParamTable field to given value.


### GetEnvoySerialNumber

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetEnvoySerialNumber() string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetEnvoySerialNumberOk() (*string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetEnvoySerialNumber(v string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.


### GetEnergy

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetEnergy() InvertersSummaryByEnvoyOrSiteEnergy`

GetEnergy returns the Energy field if non-nil, zero value otherwise.

### GetEnergyOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetEnergyOk() (*InvertersSummaryByEnvoyOrSiteEnergy, bool)`

GetEnergyOk returns a tuple with the Energy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergy

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetEnergy(v InvertersSummaryByEnvoyOrSiteEnergy)`

SetEnergy sets Energy field to given value.


### GetGridProfile

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetGridProfile() string`

GetGridProfile returns the GridProfile field if non-nil, zero value otherwise.

### GetGridProfileOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetGridProfileOk() (*string, bool)`

GetGridProfileOk returns a tuple with the GridProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridProfile

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetGridProfile(v string)`

SetGridProfile sets GridProfile field to given value.


### GetLastReportDate

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetLastReportDate() string`

GetLastReportDate returns the LastReportDate field if non-nil, zero value otherwise.

### GetLastReportDateOk

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) GetLastReportDateOk() (*string, bool)`

GetLastReportDateOk returns a tuple with the LastReportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportDate

`func (o *InvertersSummaryByEnvoyOrSiteMicroInverters) SetLastReportDate(v string)`

SetLastReportDate sets LastReportDate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


