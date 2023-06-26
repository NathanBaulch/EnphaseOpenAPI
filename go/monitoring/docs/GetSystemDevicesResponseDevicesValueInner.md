# GetSystemDevicesResponseDevicesValueInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**LastReportAt** | Pointer to **int64** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**SerialNumber** | Pointer to **string** |  | [optional] 
**PartNumber** | Pointer to **string** |  | [optional] 
**EmuSwVersion** | Pointer to **string** |  | [optional] 
**Sku** | Pointer to **string** |  | [optional] 
**Model** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**State** | Pointer to **string** |  | [optional] 
**ConfigType** | Pointer to **string** |  | [optional] 
**CellularModem** | Pointer to [**GetSystemDevicesResponseDevicesValueInnerCellularModem**](GetSystemDevicesResponseDevicesValueInnerCellularModem.md) |  | [optional] 

## Methods

### NewGetSystemDevicesResponseDevicesValueInner

`func NewGetSystemDevicesResponseDevicesValueInner() *GetSystemDevicesResponseDevicesValueInner`

NewGetSystemDevicesResponseDevicesValueInner instantiates a new GetSystemDevicesResponseDevicesValueInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemDevicesResponseDevicesValueInnerWithDefaults

`func NewGetSystemDevicesResponseDevicesValueInnerWithDefaults() *GetSystemDevicesResponseDevicesValueInner`

NewGetSystemDevicesResponseDevicesValueInnerWithDefaults instantiates a new GetSystemDevicesResponseDevicesValueInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetSystemDevicesResponseDevicesValueInner) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetSystemDevicesResponseDevicesValueInner) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *GetSystemDevicesResponseDevicesValueInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLastReportAt

`func (o *GetSystemDevicesResponseDevicesValueInner) GetLastReportAt() int64`

GetLastReportAt returns the LastReportAt field if non-nil, zero value otherwise.

### GetLastReportAtOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetLastReportAtOk() (*int64, bool)`

GetLastReportAtOk returns a tuple with the LastReportAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportAt

`func (o *GetSystemDevicesResponseDevicesValueInner) SetLastReportAt(v int64)`

SetLastReportAt sets LastReportAt field to given value.

### HasLastReportAt

`func (o *GetSystemDevicesResponseDevicesValueInner) HasLastReportAt() bool`

HasLastReportAt returns a boolean if a field has been set.

### GetName

`func (o *GetSystemDevicesResponseDevicesValueInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetSystemDevicesResponseDevicesValueInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GetSystemDevicesResponseDevicesValueInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSerialNumber

`func (o *GetSystemDevicesResponseDevicesValueInner) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *GetSystemDevicesResponseDevicesValueInner) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.

### HasSerialNumber

`func (o *GetSystemDevicesResponseDevicesValueInner) HasSerialNumber() bool`

HasSerialNumber returns a boolean if a field has been set.

### GetPartNumber

`func (o *GetSystemDevicesResponseDevicesValueInner) GetPartNumber() string`

GetPartNumber returns the PartNumber field if non-nil, zero value otherwise.

### GetPartNumberOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetPartNumberOk() (*string, bool)`

GetPartNumberOk returns a tuple with the PartNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartNumber

`func (o *GetSystemDevicesResponseDevicesValueInner) SetPartNumber(v string)`

SetPartNumber sets PartNumber field to given value.

### HasPartNumber

`func (o *GetSystemDevicesResponseDevicesValueInner) HasPartNumber() bool`

HasPartNumber returns a boolean if a field has been set.

### GetEmuSwVersion

`func (o *GetSystemDevicesResponseDevicesValueInner) GetEmuSwVersion() string`

GetEmuSwVersion returns the EmuSwVersion field if non-nil, zero value otherwise.

### GetEmuSwVersionOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetEmuSwVersionOk() (*string, bool)`

GetEmuSwVersionOk returns a tuple with the EmuSwVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmuSwVersion

`func (o *GetSystemDevicesResponseDevicesValueInner) SetEmuSwVersion(v string)`

SetEmuSwVersion sets EmuSwVersion field to given value.

### HasEmuSwVersion

`func (o *GetSystemDevicesResponseDevicesValueInner) HasEmuSwVersion() bool`

HasEmuSwVersion returns a boolean if a field has been set.

### GetSku

`func (o *GetSystemDevicesResponseDevicesValueInner) GetSku() string`

GetSku returns the Sku field if non-nil, zero value otherwise.

### GetSkuOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetSkuOk() (*string, bool)`

GetSkuOk returns a tuple with the Sku field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSku

`func (o *GetSystemDevicesResponseDevicesValueInner) SetSku(v string)`

SetSku sets Sku field to given value.

### HasSku

`func (o *GetSystemDevicesResponseDevicesValueInner) HasSku() bool`

HasSku returns a boolean if a field has been set.

### GetModel

`func (o *GetSystemDevicesResponseDevicesValueInner) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *GetSystemDevicesResponseDevicesValueInner) SetModel(v string)`

SetModel sets Model field to given value.

### HasModel

`func (o *GetSystemDevicesResponseDevicesValueInner) HasModel() bool`

HasModel returns a boolean if a field has been set.

### GetStatus

`func (o *GetSystemDevicesResponseDevicesValueInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetSystemDevicesResponseDevicesValueInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetSystemDevicesResponseDevicesValueInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetActive

`func (o *GetSystemDevicesResponseDevicesValueInner) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *GetSystemDevicesResponseDevicesValueInner) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *GetSystemDevicesResponseDevicesValueInner) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetState

`func (o *GetSystemDevicesResponseDevicesValueInner) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *GetSystemDevicesResponseDevicesValueInner) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *GetSystemDevicesResponseDevicesValueInner) HasState() bool`

HasState returns a boolean if a field has been set.

### GetConfigType

`func (o *GetSystemDevicesResponseDevicesValueInner) GetConfigType() string`

GetConfigType returns the ConfigType field if non-nil, zero value otherwise.

### GetConfigTypeOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetConfigTypeOk() (*string, bool)`

GetConfigTypeOk returns a tuple with the ConfigType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigType

`func (o *GetSystemDevicesResponseDevicesValueInner) SetConfigType(v string)`

SetConfigType sets ConfigType field to given value.

### HasConfigType

`func (o *GetSystemDevicesResponseDevicesValueInner) HasConfigType() bool`

HasConfigType returns a boolean if a field has been set.

### GetCellularModem

`func (o *GetSystemDevicesResponseDevicesValueInner) GetCellularModem() GetSystemDevicesResponseDevicesValueInnerCellularModem`

GetCellularModem returns the CellularModem field if non-nil, zero value otherwise.

### GetCellularModemOk

`func (o *GetSystemDevicesResponseDevicesValueInner) GetCellularModemOk() (*GetSystemDevicesResponseDevicesValueInnerCellularModem, bool)`

GetCellularModemOk returns a tuple with the CellularModem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCellularModem

`func (o *GetSystemDevicesResponseDevicesValueInner) SetCellularModem(v GetSystemDevicesResponseDevicesValueInnerCellularModem)`

SetCellularModem sets CellularModem field to given value.

### HasCellularModem

`func (o *GetSystemDevicesResponseDevicesValueInner) HasCellularModem() bool`

HasCellularModem returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


