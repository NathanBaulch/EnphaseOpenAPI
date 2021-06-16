# Meta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | [**Status**](Status.md) |  | 
**LastReportAt** | **int32** |  | 
**LastEnergyAt** | **int32** |  | 
**OperationalAt** | **int32** |  | 

## Methods

### NewMeta

`func NewMeta(status Status, lastReportAt int32, lastEnergyAt int32, operationalAt int32, ) *Meta`

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

`func (o *Meta) GetStatus() Status`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Meta) GetStatusOk() (*Status, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Meta) SetStatus(v Status)`

SetStatus sets Status field to given value.


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



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


