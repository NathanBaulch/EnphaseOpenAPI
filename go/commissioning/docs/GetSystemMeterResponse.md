# GetSystemMeterResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SerialNumber** | Pointer to **string** | Meter serial number. | [optional] 
**Manufacturer** | Pointer to **string** | Name of the manufacturer. | [optional] 
**Model** | Pointer to **string** | Model. | [optional] 
**Type** | Pointer to **string** | Meter type. | [optional] 
**OperationalDate** | Pointer to **string** | Operational date. | [optional] 
**FirstReportDate** | Pointer to **time.Time** | First report date. | [optional] 
**LastReportDate** | Pointer to **time.Time** | Last report date. | [optional] 
**Phase** | Pointer to **string** | Phase. | [optional] 
**EnvoySerialNumber** | Pointer to **string** | Envoy serial number. | [optional] 
**Status** | Pointer to **string** | Meter status. | [optional] 
**State** | Pointer to **string** | Meter state. | [optional] 

## Methods

### NewGetSystemMeterResponse

`func NewGetSystemMeterResponse() *GetSystemMeterResponse`

NewGetSystemMeterResponse instantiates a new GetSystemMeterResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemMeterResponseWithDefaults

`func NewGetSystemMeterResponseWithDefaults() *GetSystemMeterResponse`

NewGetSystemMeterResponseWithDefaults instantiates a new GetSystemMeterResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSerialNumber

`func (o *GetSystemMeterResponse) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *GetSystemMeterResponse) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *GetSystemMeterResponse) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.

### HasSerialNumber

`func (o *GetSystemMeterResponse) HasSerialNumber() bool`

HasSerialNumber returns a boolean if a field has been set.

### GetManufacturer

`func (o *GetSystemMeterResponse) GetManufacturer() string`

GetManufacturer returns the Manufacturer field if non-nil, zero value otherwise.

### GetManufacturerOk

`func (o *GetSystemMeterResponse) GetManufacturerOk() (*string, bool)`

GetManufacturerOk returns a tuple with the Manufacturer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManufacturer

`func (o *GetSystemMeterResponse) SetManufacturer(v string)`

SetManufacturer sets Manufacturer field to given value.

### HasManufacturer

`func (o *GetSystemMeterResponse) HasManufacturer() bool`

HasManufacturer returns a boolean if a field has been set.

### GetModel

`func (o *GetSystemMeterResponse) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *GetSystemMeterResponse) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *GetSystemMeterResponse) SetModel(v string)`

SetModel sets Model field to given value.

### HasModel

`func (o *GetSystemMeterResponse) HasModel() bool`

HasModel returns a boolean if a field has been set.

### GetType

`func (o *GetSystemMeterResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GetSystemMeterResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GetSystemMeterResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *GetSystemMeterResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOperationalDate

`func (o *GetSystemMeterResponse) GetOperationalDate() string`

GetOperationalDate returns the OperationalDate field if non-nil, zero value otherwise.

### GetOperationalDateOk

`func (o *GetSystemMeterResponse) GetOperationalDateOk() (*string, bool)`

GetOperationalDateOk returns a tuple with the OperationalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationalDate

`func (o *GetSystemMeterResponse) SetOperationalDate(v string)`

SetOperationalDate sets OperationalDate field to given value.

### HasOperationalDate

`func (o *GetSystemMeterResponse) HasOperationalDate() bool`

HasOperationalDate returns a boolean if a field has been set.

### GetFirstReportDate

`func (o *GetSystemMeterResponse) GetFirstReportDate() time.Time`

GetFirstReportDate returns the FirstReportDate field if non-nil, zero value otherwise.

### GetFirstReportDateOk

`func (o *GetSystemMeterResponse) GetFirstReportDateOk() (*time.Time, bool)`

GetFirstReportDateOk returns a tuple with the FirstReportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstReportDate

`func (o *GetSystemMeterResponse) SetFirstReportDate(v time.Time)`

SetFirstReportDate sets FirstReportDate field to given value.

### HasFirstReportDate

`func (o *GetSystemMeterResponse) HasFirstReportDate() bool`

HasFirstReportDate returns a boolean if a field has been set.

### GetLastReportDate

`func (o *GetSystemMeterResponse) GetLastReportDate() time.Time`

GetLastReportDate returns the LastReportDate field if non-nil, zero value otherwise.

### GetLastReportDateOk

`func (o *GetSystemMeterResponse) GetLastReportDateOk() (*time.Time, bool)`

GetLastReportDateOk returns a tuple with the LastReportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportDate

`func (o *GetSystemMeterResponse) SetLastReportDate(v time.Time)`

SetLastReportDate sets LastReportDate field to given value.

### HasLastReportDate

`func (o *GetSystemMeterResponse) HasLastReportDate() bool`

HasLastReportDate returns a boolean if a field has been set.

### GetPhase

`func (o *GetSystemMeterResponse) GetPhase() string`

GetPhase returns the Phase field if non-nil, zero value otherwise.

### GetPhaseOk

`func (o *GetSystemMeterResponse) GetPhaseOk() (*string, bool)`

GetPhaseOk returns a tuple with the Phase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhase

`func (o *GetSystemMeterResponse) SetPhase(v string)`

SetPhase sets Phase field to given value.

### HasPhase

`func (o *GetSystemMeterResponse) HasPhase() bool`

HasPhase returns a boolean if a field has been set.

### GetEnvoySerialNumber

`func (o *GetSystemMeterResponse) GetEnvoySerialNumber() string`

GetEnvoySerialNumber returns the EnvoySerialNumber field if non-nil, zero value otherwise.

### GetEnvoySerialNumberOk

`func (o *GetSystemMeterResponse) GetEnvoySerialNumberOk() (*string, bool)`

GetEnvoySerialNumberOk returns a tuple with the EnvoySerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoySerialNumber

`func (o *GetSystemMeterResponse) SetEnvoySerialNumber(v string)`

SetEnvoySerialNumber sets EnvoySerialNumber field to given value.

### HasEnvoySerialNumber

`func (o *GetSystemMeterResponse) HasEnvoySerialNumber() bool`

HasEnvoySerialNumber returns a boolean if a field has been set.

### GetStatus

`func (o *GetSystemMeterResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetSystemMeterResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetSystemMeterResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetSystemMeterResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetState

`func (o *GetSystemMeterResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *GetSystemMeterResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *GetSystemMeterResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *GetSystemMeterResponse) HasState() bool`

HasState returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


