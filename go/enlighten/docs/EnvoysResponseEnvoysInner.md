# EnvoysResponseEnvoysInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnvoyId** | **int32** | The Enlighten ID of the Envoy. | 
**LastReportAt** | **int64** | The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the &#x60;datetime_format&#x60; query parameter is &#x60;iso8601&#x60;, &#x60;last_report_at&#x60; is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null. | 
**Name** | **string** | The human-friendly name of this Envoy. | 
**PartNumber** | **string** | The Enphase part number of this Envoy. | 
**SerialNumber** | **string** | The serial number of this Envoy. | 
**Status** | **string** | The current status of this Envoy. * &#x60;normal&#x60; - The Envoy is operating normally. * &#x60;comm&#x60; - The Envoy is not communicating to Enlighten. | 

## Methods

### NewEnvoysResponseEnvoysInner

`func NewEnvoysResponseEnvoysInner(envoyId int32, lastReportAt int64, name string, partNumber string, serialNumber string, status string, ) *EnvoysResponseEnvoysInner`

NewEnvoysResponseEnvoysInner instantiates a new EnvoysResponseEnvoysInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnvoysResponseEnvoysInnerWithDefaults

`func NewEnvoysResponseEnvoysInnerWithDefaults() *EnvoysResponseEnvoysInner`

NewEnvoysResponseEnvoysInnerWithDefaults instantiates a new EnvoysResponseEnvoysInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnvoyId

`func (o *EnvoysResponseEnvoysInner) GetEnvoyId() int32`

GetEnvoyId returns the EnvoyId field if non-nil, zero value otherwise.

### GetEnvoyIdOk

`func (o *EnvoysResponseEnvoysInner) GetEnvoyIdOk() (*int32, bool)`

GetEnvoyIdOk returns a tuple with the EnvoyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvoyId

`func (o *EnvoysResponseEnvoysInner) SetEnvoyId(v int32)`

SetEnvoyId sets EnvoyId field to given value.


### GetLastReportAt

`func (o *EnvoysResponseEnvoysInner) GetLastReportAt() int64`

GetLastReportAt returns the LastReportAt field if non-nil, zero value otherwise.

### GetLastReportAtOk

`func (o *EnvoysResponseEnvoysInner) GetLastReportAtOk() (*int64, bool)`

GetLastReportAtOk returns a tuple with the LastReportAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReportAt

`func (o *EnvoysResponseEnvoysInner) SetLastReportAt(v int64)`

SetLastReportAt sets LastReportAt field to given value.


### GetName

`func (o *EnvoysResponseEnvoysInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EnvoysResponseEnvoysInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EnvoysResponseEnvoysInner) SetName(v string)`

SetName sets Name field to given value.


### GetPartNumber

`func (o *EnvoysResponseEnvoysInner) GetPartNumber() string`

GetPartNumber returns the PartNumber field if non-nil, zero value otherwise.

### GetPartNumberOk

`func (o *EnvoysResponseEnvoysInner) GetPartNumberOk() (*string, bool)`

GetPartNumberOk returns a tuple with the PartNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartNumber

`func (o *EnvoysResponseEnvoysInner) SetPartNumber(v string)`

SetPartNumber sets PartNumber field to given value.


### GetSerialNumber

`func (o *EnvoysResponseEnvoysInner) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *EnvoysResponseEnvoysInner) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *EnvoysResponseEnvoysInner) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.


### GetStatus

`func (o *EnvoysResponseEnvoysInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *EnvoysResponseEnvoysInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *EnvoysResponseEnvoysInner) SetStatus(v string)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


