# InlineResponse2004MicroInverters

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
**Energy** | [**InlineResponse2004Energy**](InlineResponse2004Energy.md) |  | 
**GridProfile** | **string** |  | 
**LastReportDate** | **string** | The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. | 

## Methods

### NewInlineResponse2004MicroInverters

`func NewInlineResponse2004MicroInverters(id int32, model string, partNumber string, serialNumber string, sku string, status string, powerProduced int32, procLoad string, paramTable string, envoySerialNumber string, energy InlineResponse2004Energy, gridProfile string, lastReportDate string, ) *InlineResponse2004MicroInverters`

NewInlineResponse2004MicroInverters instantiates a new InlineResponse2004MicroInverters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2004MicroInvertersWithDefaults

`func NewInlineResponse2004MicroInvertersWithDefaults() *InlineResponse2004MicroInverters`

NewInlineResponse2004MicroInvertersWithDefaults instantiates a new InlineResponse2004MicroInverters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InlineResponse2004MicroInverters) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InlineResponse2004MicroInverters) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InlineResponse2004MicroInverters) SetId(v int32)`

SetId sets Id field to given value.


### GetModel

`func (o *InlineResponse2004MicroInverters) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *InlineResponse2004MicroInverters) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *InlineResponse2004MicroInverters) SetModel(v string)`

SetModel sets Model field to given value.


### GetPartNumber

`func (o *InlineResponse2004MicroInverters) GetPartNumber() string`

GetPartNumber returns the PartNumber field if non-nil, zero value otherwise.

### GetPartNumberOk

`func (o *InlineResponse2004MicroInverters) GetPartNumberOk() (*string, bool)`

GetPartNumberOk returns a tuple with the PartNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartNumber

`func (o *InlineResponse2004MicroInverters) SetPartNumber(v string)`

SetPartNumber sets PartNumber field to given value.


### GetSerialNumber

`func (o *InlineResponse2004MicroInverters) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *InlineResponse2004MicroInverters) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *InlineResponse2004MicroInverters) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.


### GetSku

`func (o *InlineResponse2004MicroInverters) GetSku() string`

GetSku returns the Sku field if non-nil, zero value otherwise.

### GetSkuOk

`func (o *InlineResponse2004MicroInverters) GetSkuOk() (*string, bool)`

GetSkuOk returns a tuple with the Sku field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSku

`func (o *InlineResponse2004MicroInverters) SetSku(v string)`

SetSku sets Sku field to given value.


### GetStatus

`func (o *InlineResponse2004MicroInverters) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InlineResponse2004MicroInverters) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InlineResponse2004MicroInverters) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPowerProduced

`func (o *InlineResponse2004MicroInverters) GetPowerProduced() int32`

GetPowerProduced returns the PowerProduced field if non-nil, zero value otherwise.

### GetPowerProducedOk

`func (o *InlineResponse2004MicroInverters) GetPowerProducedOk() (*int32, bool)`

GetPowerProducedOk returns a tuple with the PowerProduced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPowerProduced

`func (o *InlineResponse2004MicroInverters) SetPowerProduced(v int32)`

SetPowerProduced sets PowerProduced field to given value.


### GetProcLoad

`func (o *InlineResponse2004MicroInverters) GetProcLoad() string`

GetProcLoad returns the ProcLoad field if non-nil, zero value otherwise.

### GetProcLoadOk

`func (o *InlineResponse2004MicroInverters) GetProcLoadOk() (*string, bool)`

GetProcLoadOk returns a tuple with the ProcLoad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcLoad

`func (o *InlineResponse2004MicroInverters) SetProcLoad(v string)`

SetProcLoad sets ProcLoad field to given value.


### GetParamTable

`func (o *InlineResponse2004MicroInverters) GetParamTable() string`

GetParamTable returns the ParamTable field if non-nil, zero value otherwise.

### GetParamTableOk

`func (o *InlineResponse2004MicroInverters) GetParamTableOk() (*string, bool)`

GetParamTableOk returns a tuple with the ParamTable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParamTable

`func (o *InlineResponse2004MicroInverters) SetParamTable(v string)`

SetParamTable sets ParamTable field to given value.


### GetEnvoySerialNumber

`func (o *InlineResponse2004MicroInverters) GetEnvoySerialNumber() string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *InlineResponse2004MicroInverters) GetEnvoySerialNumberOk() (*string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *InlineResponse2004MicroInverters) SetEnvoySerialNumber(v string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.


### GetEnergy

`func (o *InlineResponse2004MicroInverters) GetEnergy() InlineResponse2004Energy`

GetEnergy returns the Energy field if non-nil, zero value otherwise.

### GetEnergyOk

`func (o *InlineResponse2004MicroInverters) GetEnergyOk() (*InlineResponse2004Energy, bool)`

GetEnergyOk returns a tuple with the Energy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergy

`func (o *InlineResponse2004MicroInverters) SetEnergy(v InlineResponse2004Energy)`

SetEnergy sets Energy field to given value.


### GetGridProfile

`func (o *InlineResponse2004MicroInverters) GetGridProfile() string`

GetGridProfile returns the GridProfile field if non-nil, zero value otherwise.

### GetGridProfileOk

`func (o *InlineResponse2004MicroInverters) GetGridProfileOk() (*string, bool)`

GetGridProfileOk returns a tuple with the GridProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridProfile

`func (o *InlineResponse2004MicroInverters) SetGridProfile(v string)`

SetGridProfile sets GridProfile field to given value.


### GetLastReportDate

`func (o *InlineResponse2004MicroInverters) GetLastReportDate() string`

GetLastReportDate returns the LastReportDate field if non-nil, zero value otherwise.

### GetLastReportDateOk

`func (o *InlineResponse2004MicroInverters) GetLastReportDateOk() (*string, bool)`

GetLastReportDateOk returns a tuple with the LastReportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportDate

`func (o *InlineResponse2004MicroInverters) SetLastReportDate(v string)`

SetLastReportDate sets LastReportDate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


