# GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | Numeric ID of the microinverter. | [optional] 
**SerialNumber** | Pointer to **string** | Serial number of the microinverter. | [optional] 
**Model** | Pointer to **string** | Microinverter model type. | [optional] 
**PartNumber** | Pointer to **string** | Microinverter part number. | [optional] 
**Sku** | Pointer to **string** | SKU of the microinverter. | [optional] 
**Status** | Pointer to **string** | Current status of the micro inverter. | [optional] 
**PowerProduced** | Pointer to [**GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced**](GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced.md) |  | [optional] 
**ProcLoad** | Pointer to **string** | Processor load. | [optional] 
**ParamTable** | Pointer to **string** | Parameter table. | [optional] 
**EnvoySerialNumber** | Pointer to **string** | Envoy serial number of the system that the micro reports to. | [optional] 
**Energy** | Pointer to [**GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy**](GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy.md) |  | [optional] 
**GridProfile** | Pointer to **string** | Grid profile ID. | [optional] 
**LastReportDate** | Pointer to **time.Time** | Date on which the microinverter last reported. | [optional] 

## Methods

### NewGetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner

`func NewGetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner() *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner`

NewGetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner instantiates a new GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerWithDefaults

`func NewGetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerWithDefaults() *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner`

NewGetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerWithDefaults instantiates a new GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSerialNumber

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.

### HasSerialNumber

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasSerialNumber() bool`

HasSerialNumber returns a boolean if a field has been set.

### GetModel

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetModel(v string)`

SetModel sets Model field to given value.

### HasModel

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasModel() bool`

HasModel returns a boolean if a field has been set.

### GetPartNumber

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetPartNumber() string`

GetPartNumber returns the PartNumber field if non-nil, zero value otherwise.

### GetPartNumberOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetPartNumberOk() (*string, bool)`

GetPartNumberOk returns a tuple with the PartNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartNumber

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetPartNumber(v string)`

SetPartNumber sets PartNumber field to given value.

### HasPartNumber

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasPartNumber() bool`

HasPartNumber returns a boolean if a field has been set.

### GetSku

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetSku() string`

GetSku returns the Sku field if non-nil, zero value otherwise.

### GetSkuOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetSkuOk() (*string, bool)`

GetSkuOk returns a tuple with the Sku field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSku

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetSku(v string)`

SetSku sets Sku field to given value.

### HasSku

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasSku() bool`

HasSku returns a boolean if a field has been set.

### GetStatus

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPowerProduced

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetPowerProduced() GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced`

GetPowerProduced returns the PowerProduced field if non-nil, zero value otherwise.

### GetPowerProducedOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetPowerProducedOk() (*GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced, bool)`

GetPowerProducedOk returns a tuple with the PowerProduced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPowerProduced

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetPowerProduced(v GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerPowerProduced)`

SetPowerProduced sets PowerProduced field to given value.

### HasPowerProduced

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasPowerProduced() bool`

HasPowerProduced returns a boolean if a field has been set.

### GetProcLoad

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetProcLoad() string`

GetProcLoad returns the ProcLoad field if non-nil, zero value otherwise.

### GetProcLoadOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetProcLoadOk() (*string, bool)`

GetProcLoadOk returns a tuple with the ProcLoad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcLoad

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetProcLoad(v string)`

SetProcLoad sets ProcLoad field to given value.

### HasProcLoad

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasProcLoad() bool`

HasProcLoad returns a boolean if a field has been set.

### GetParamTable

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetParamTable() string`

GetParamTable returns the ParamTable field if non-nil, zero value otherwise.

### GetParamTableOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetParamTableOk() (*string, bool)`

GetParamTableOk returns a tuple with the ParamTable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParamTable

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetParamTable(v string)`

SetParamTable sets ParamTable field to given value.

### HasParamTable

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasParamTable() bool`

HasParamTable returns a boolean if a field has been set.

### GetEnvoySerialNumber

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetEnvoySerialNumber() string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetEnvoySerialNumberOk() (*string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetEnvoySerialNumber(v string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.

### HasEnvoySerialNumber

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasEnvoySerialNumber() bool`

HasEnvoySerialNumber returns a boolean if a field has been set.

### GetEnergy

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetEnergy() GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy`

GetEnergy returns the Energy field if non-nil, zero value otherwise.

### GetEnergyOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetEnergyOk() (*GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy, bool)`

GetEnergyOk returns a tuple with the Energy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergy

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetEnergy(v GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInnerEnergy)`

SetEnergy sets Energy field to given value.

### HasEnergy

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasEnergy() bool`

HasEnergy returns a boolean if a field has been set.

### GetGridProfile

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetGridProfile() string`

GetGridProfile returns the GridProfile field if non-nil, zero value otherwise.

### GetGridProfileOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetGridProfileOk() (*string, bool)`

GetGridProfileOk returns a tuple with the GridProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridProfile

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetGridProfile(v string)`

SetGridProfile sets GridProfile field to given value.

### HasGridProfile

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasGridProfile() bool`

HasGridProfile returns a boolean if a field has been set.

### GetLastReportDate

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetLastReportDate() time.Time`

GetLastReportDate returns the LastReportDate field if non-nil, zero value otherwise.

### GetLastReportDateOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) GetLastReportDateOk() (*time.Time, bool)`

GetLastReportDateOk returns a tuple with the LastReportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportDate

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) SetLastReportDate(v time.Time)`

SetLastReportDate sets LastReportDate field to given value.

### HasLastReportDate

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner) HasLastReportDate() bool`

HasLastReportDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


