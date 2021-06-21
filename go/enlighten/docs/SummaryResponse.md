# SummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrentPower** | **int32** | Current power production, in Watts. For historical requests, returns 0. | 
**EnergyLifetime** | **int32** | Energy produced in the lifetime of the system, excluding the requested day, in Watt-hours. | 
**EnergyToday** | **int32** | Energy produced on the requested day, in Watt-hours. | 
**LastIntervalEndAt** | **int64** | The last known time that the system produced energy. When a system has not been communicating for a length of time, the &#x60;last_report_at&#x60; can be recent, whereas the &#x60;last_interval_end_at&#x60; may be further back. | 
**LastReportAt** | **int64** | The last time an Envoy on this system reported. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**Modules** | **int32** | Number of active (not retired) modules. For historical requests, returns 0. | 
**OperationalAt** | **int64** | The time at which this system became operational. Corresponds to the system&#39;s interconnect time, if one is specified. Otherwise, it is the system&#39;s first interval end time. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**SizeW** | **int32** | The size of the system, in Watts. For historical requests, returns 0. | 
**Source** | **string** | Indicates whether the production of this system is measured by its microinverters (&#x60;microinverters&#x60;) or by revenue-grade meters (&#x60;meter&#x60;) installed on the system. | 
**Status** | [**Status**](Status.md) |  | 
**SummaryDate** | **string** | Effective date of the response. For historical requests, returns the date requested. For current requests, returns the current date. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**SystemId** | **int32** | The Enlighten ID of the system. | 

## Methods

### NewSummaryResponse

`func NewSummaryResponse(currentPower int32, energyLifetime int32, energyToday int32, lastIntervalEndAt int64, lastReportAt int64, modules int32, operationalAt int64, sizeW int32, source string, status Status, summaryDate string, systemId int32, ) *SummaryResponse`

NewSummaryResponse instantiates a new SummaryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSummaryResponseWithDefaults

`func NewSummaryResponseWithDefaults() *SummaryResponse`

NewSummaryResponseWithDefaults instantiates a new SummaryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrentPower

`func (o *SummaryResponse) GetCurrentPower() int32`

GetCurrentPower returns the CurrentPower field if non-nil, zero value otherwise.

### GetCurrentPowerOk

`func (o *SummaryResponse) GetCurrentPowerOk() (*int32, bool)`

GetCurrentPowerOk returns a tuple with the CurrentPower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPower

`func (o *SummaryResponse) SetCurrentPower(v int32)`

SetCurrentPower sets CurrentPower field to given value.


### GetEnergyLifetime

`func (o *SummaryResponse) GetEnergyLifetime() int32`

GetEnergyLifetime returns the EnergyLifetime field if non-nil, zero value otherwise.

### GetEnergyLifetimeOk

`func (o *SummaryResponse) GetEnergyLifetimeOk() (*int32, bool)`

GetEnergyLifetimeOk returns a tuple with the EnergyLifetime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergyLifetime

`func (o *SummaryResponse) SetEnergyLifetime(v int32)`

SetEnergyLifetime sets EnergyLifetime field to given value.


### GetEnergyToday

`func (o *SummaryResponse) GetEnergyToday() int32`

GetEnergyToday returns the EnergyToday field if non-nil, zero value otherwise.

### GetEnergyTodayOk

`func (o *SummaryResponse) GetEnergyTodayOk() (*int32, bool)`

GetEnergyTodayOk returns a tuple with the EnergyToday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergyToday

`func (o *SummaryResponse) SetEnergyToday(v int32)`

SetEnergyToday sets EnergyToday field to given value.


### GetLastIntervalEndAt

`func (o *SummaryResponse) GetLastIntervalEndAt() int64`

GetLastIntervalEndAt returns the LastIntervalEndAt field if non-nil, zero value otherwise.

### GetLastIntervalEndAtOk

`func (o *SummaryResponse) GetLastIntervalEndAtOk() (*int64, bool)`

GetLastIntervalEndAtOk returns a tuple with the LastIntervalEndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastIntervalEndAt

`func (o *SummaryResponse) SetLastIntervalEndAt(v int64)`

SetLastIntervalEndAt sets LastIntervalEndAt field to given value.


### GetLastReportAt

`func (o *SummaryResponse) GetLastReportAt() int64`

GetLastReportAt returns the LastReportAt field if non-nil, zero value otherwise.

### GetLastReportAtOk

`func (o *SummaryResponse) GetLastReportAtOk() (*int64, bool)`

GetLastReportAtOk returns a tuple with the LastReportAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportAt

`func (o *SummaryResponse) SetLastReportAt(v int64)`

SetLastReportAt sets LastReportAt field to given value.


### GetModules

`func (o *SummaryResponse) GetModules() int32`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *SummaryResponse) GetModulesOk() (*int32, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *SummaryResponse) SetModules(v int32)`

SetModules sets Modules field to given value.


### GetOperationalAt

`func (o *SummaryResponse) GetOperationalAt() int64`

GetOperationalAt returns the OperationalAt field if non-nil, zero value otherwise.

### GetOperationalAtOk

`func (o *SummaryResponse) GetOperationalAtOk() (*int64, bool)`

GetOperationalAtOk returns a tuple with the OperationalAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationalAt

`func (o *SummaryResponse) SetOperationalAt(v int64)`

SetOperationalAt sets OperationalAt field to given value.


### GetSizeW

`func (o *SummaryResponse) GetSizeW() int32`

GetSizeW returns the SizeW field if non-nil, zero value otherwise.

### GetSizeWOk

`func (o *SummaryResponse) GetSizeWOk() (*int32, bool)`

GetSizeWOk returns a tuple with the SizeW field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSizeW

`func (o *SummaryResponse) SetSizeW(v int32)`

SetSizeW sets SizeW field to given value.


### GetSource

`func (o *SummaryResponse) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *SummaryResponse) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *SummaryResponse) SetSource(v string)`

SetSource sets Source field to given value.


### GetStatus

`func (o *SummaryResponse) GetStatus() Status`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SummaryResponse) GetStatusOk() (*Status, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SummaryResponse) SetStatus(v Status)`

SetStatus sets Status field to given value.


### GetSummaryDate

`func (o *SummaryResponse) GetSummaryDate() string`

GetSummaryDate returns the SummaryDate field if non-nil, zero value otherwise.

### GetSummaryDateOk

`func (o *SummaryResponse) GetSummaryDateOk() (*string, bool)`

GetSummaryDateOk returns a tuple with the SummaryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaryDate

`func (o *SummaryResponse) SetSummaryDate(v string)`

SetSummaryDate sets SummaryDate field to given value.


### GetSystemId

`func (o *SummaryResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *SummaryResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *SummaryResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


