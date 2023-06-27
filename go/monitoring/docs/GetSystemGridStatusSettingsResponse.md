# GetSystemGridStatusSettingsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** |  | [optional] 
**GridState** | Pointer to **string** | Indicates whether the site is On Grid, Off Grid or grid status of site is Unknown. | [optional] 
**LastReportDate** | Pointer to **int32** | Timestamp (in epoch format) at which the system&#39;s Envoy last submitted a report. | [optional] 

## Methods

### NewGetSystemGridStatusSettingsResponse

`func NewGetSystemGridStatusSettingsResponse() *GetSystemGridStatusSettingsResponse`

NewGetSystemGridStatusSettingsResponse instantiates a new GetSystemGridStatusSettingsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemGridStatusSettingsResponseWithDefaults

`func NewGetSystemGridStatusSettingsResponseWithDefaults() *GetSystemGridStatusSettingsResponse`

NewGetSystemGridStatusSettingsResponseWithDefaults instantiates a new GetSystemGridStatusSettingsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemGridStatusSettingsResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemGridStatusSettingsResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemGridStatusSettingsResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemGridStatusSettingsResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetGridState

`func (o *GetSystemGridStatusSettingsResponse) GetGridState() string`

GetGridState returns the GridState field if non-nil, zero value otherwise.

### GetGridStateOk

`func (o *GetSystemGridStatusSettingsResponse) GetGridStateOk() (*string, bool)`

GetGridStateOk returns a tuple with the GridState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridState

`func (o *GetSystemGridStatusSettingsResponse) SetGridState(v string)`

SetGridState sets GridState field to given value.

### HasGridState

`func (o *GetSystemGridStatusSettingsResponse) HasGridState() bool`

HasGridState returns a boolean if a field has been set.

### GetLastReportDate

`func (o *GetSystemGridStatusSettingsResponse) GetLastReportDate() int32`

GetLastReportDate returns the LastReportDate field if non-nil, zero value otherwise.

### GetLastReportDateOk

`func (o *GetSystemGridStatusSettingsResponse) GetLastReportDateOk() (*int32, bool)`

GetLastReportDateOk returns a tuple with the LastReportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportDate

`func (o *GetSystemGridStatusSettingsResponse) SetLastReportDate(v int32)`

SetLastReportDate sets LastReportDate field to given value.

### HasLastReportDate

`func (o *GetSystemGridStatusSettingsResponse) HasLastReportDate() bool`

HasLastReportDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


