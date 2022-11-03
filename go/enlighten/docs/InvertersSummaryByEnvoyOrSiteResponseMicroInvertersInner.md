# InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Model** | **string** | Model number of this Microinverter. | 
**PartNumber** | **string** | The Enphase part number of this Microinverter. | 
**SerialNumber** | **string** | The serial number of this Microinverter. | 
**Sku** | **string** |  | 
**Status** | **string** | The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired. | 
**PowerProduced** | [**InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced**](InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.md) |  | 
**ProcLoad** | **string** |  | 
**ParamTable** | **string** |  | 
**EnvoySerialNumber** | **string** |  | 
**Energy** | [**InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy**](InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy.md) |  | 
**GridProfile** | **string** |  | 
**LastReportDate** | **string** | The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. | 

## Methods

### NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner

`func NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner(id int32, model string, partNumber string, serialNumber string, sku string, status string, powerProduced InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced, procLoad string, paramTable string, envoySerialNumber string, energy InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy, gridProfile string, lastReportDate string, ) *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner`

NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner instantiates a new InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerWithDefaults

`func NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerWithDefaults() *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner`

NewInvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerWithDefaults instantiates a new InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetId(v int32)`

SetId sets Id field to given value.


### GetModel

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetModel(v string)`

SetModel sets Model field to given value.


### GetPartNumber

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetPartNumber() string`

GetPartNumber returns the PartNumber field if non-nil, zero value otherwise.

### GetPartNumberOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetPartNumberOk() (*string, bool)`

GetPartNumberOk returns a tuple with the PartNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartNumber

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetPartNumber(v string)`

SetPartNumber sets PartNumber field to given value.


### GetSerialNumber

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.


### GetSku

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetSku() string`

GetSku returns the Sku field if non-nil, zero value otherwise.

### GetSkuOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetSkuOk() (*string, bool)`

GetSkuOk returns a tuple with the Sku field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSku

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetSku(v string)`

SetSku sets Sku field to given value.


### GetStatus

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPowerProduced

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetPowerProduced() InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced`

GetPowerProduced returns the PowerProduced field if non-nil, zero value otherwise.

### GetPowerProducedOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetPowerProducedOk() (*InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced, bool)`

GetPowerProducedOk returns a tuple with the PowerProduced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPowerProduced

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetPowerProduced(v InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced)`

SetPowerProduced sets PowerProduced field to given value.


### GetProcLoad

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetProcLoad() string`

GetProcLoad returns the ProcLoad field if non-nil, zero value otherwise.

### GetProcLoadOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetProcLoadOk() (*string, bool)`

GetProcLoadOk returns a tuple with the ProcLoad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcLoad

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetProcLoad(v string)`

SetProcLoad sets ProcLoad field to given value.


### GetParamTable

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetParamTable() string`

GetParamTable returns the ParamTable field if non-nil, zero value otherwise.

### GetParamTableOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetParamTableOk() (*string, bool)`

GetParamTableOk returns a tuple with the ParamTable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParamTable

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetParamTable(v string)`

SetParamTable sets ParamTable field to given value.


### GetEnvoySerialNumber

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetEnvoySerialNumber() string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetEnvoySerialNumberOk() (*string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetEnvoySerialNumber(v string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.


### GetEnergy

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetEnergy() InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy`

GetEnergy returns the Energy field if non-nil, zero value otherwise.

### GetEnergyOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetEnergyOk() (*InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy, bool)`

GetEnergyOk returns a tuple with the Energy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergy

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetEnergy(v InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy)`

SetEnergy sets Energy field to given value.


### GetGridProfile

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetGridProfile() string`

GetGridProfile returns the GridProfile field if non-nil, zero value otherwise.

### GetGridProfileOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetGridProfileOk() (*string, bool)`

GetGridProfileOk returns a tuple with the GridProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridProfile

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetGridProfile(v string)`

SetGridProfile sets GridProfile field to given value.


### GetLastReportDate

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetLastReportDate() string`

GetLastReportDate returns the LastReportDate field if non-nil, zero value otherwise.

### GetLastReportDateOk

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) GetLastReportDateOk() (*string, bool)`

GetLastReportDateOk returns a tuple with the LastReportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportDate

`func (o *InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner) SetLastReportDate(v string)`

SetLastReportDate sets LastReportDate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


