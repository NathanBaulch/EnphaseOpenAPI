# Meta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to [**SystemStatusEnum**](SystemStatusEnum.md) |  | [optional] 
**LastReportAt** | Pointer to **int32** | Timestamp (in epoch format) at which the system&#39;s Envoy last submitted a report. | [optional] 
**LastEnergyAt** | Pointer to **int32** | Timestamp (in epoch format) at which the system&#39;s produced energy was last reported. Even if the last produced energy is 0, its timestamp will be returned. | [optional] 
**OperationalAt** | Pointer to **int32** | Timestamp (in epoch format) at which this system became operational. Corresponds to the system&#39;s interconnect time, if one is specified. Otherwise, it is the system&#39;s first reported interval end time. | [optional] 

## Methods

### NewMeta

`func NewMeta() *Meta`

NewMeta instantiates a new Meta object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetaWithDefaults

`func NewMetaWithDefaults() *Meta`

NewMetaWithDefaults instantiates a new Meta object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *Meta) GetStatus() SystemStatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Meta) GetStatusOk() (*SystemStatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Meta) SetStatus(v SystemStatusEnum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Meta) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetLastReportAt

`func (o *Meta) GetLastReportAt() int32`

GetLastReportAt returns the LastReportAt field if non-nil, zero value otherwise.

### GetLastReportAtOk

`func (o *Meta) GetLastReportAtOk() (*int32, bool)`

GetLastReportAtOk returns a tuple with the LastReportAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportAt

`func (o *Meta) SetLastReportAt(v int32)`

SetLastReportAt sets LastReportAt field to given value.

### HasLastReportAt

`func (o *Meta) HasLastReportAt() bool`

HasLastReportAt returns a boolean if a field has been set.

### GetLastEnergyAt

`func (o *Meta) GetLastEnergyAt() int32`

GetLastEnergyAt returns the LastEnergyAt field if non-nil, zero value otherwise.

### GetLastEnergyAtOk

`func (o *Meta) GetLastEnergyAtOk() (*int32, bool)`

GetLastEnergyAtOk returns a tuple with the LastEnergyAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEnergyAt

`func (o *Meta) SetLastEnergyAt(v int32)`

SetLastEnergyAt sets LastEnergyAt field to given value.

### HasLastEnergyAt

`func (o *Meta) HasLastEnergyAt() bool`

HasLastEnergyAt returns a boolean if a field has been set.

### GetOperationalAt

`func (o *Meta) GetOperationalAt() int32`

GetOperationalAt returns the OperationalAt field if non-nil, zero value otherwise.

### GetOperationalAtOk

`func (o *Meta) GetOperationalAtOk() (*int32, bool)`

GetOperationalAtOk returns a tuple with the OperationalAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationalAt

`func (o *Meta) SetOperationalAt(v int32)`

SetOperationalAt sets OperationalAt field to given value.

### HasOperationalAt

`func (o *Meta) HasOperationalAt() bool`

HasOperationalAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


