# InvertersSummaryByEnvoyOrSite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignalStrength** | **int32** |  | 
**MicroInverters** | [**[]InvertersSummaryByEnvoyOrSiteMicroInverters**](InvertersSummaryByEnvoyOrSiteMicroInverters.md) | A list of active inverters on this system, including serial and model numbers. | 

## Methods

### NewInvertersSummaryByEnvoyOrSite

`func NewInvertersSummaryByEnvoyOrSite(signalStrength int32, microInverters []InvertersSummaryByEnvoyOrSiteMicroInverters, ) *InvertersSummaryByEnvoyOrSite`

NewInvertersSummaryByEnvoyOrSite instantiates a new InvertersSummaryByEnvoyOrSite object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvertersSummaryByEnvoyOrSiteWithDefaults

`func NewInvertersSummaryByEnvoyOrSiteWithDefaults() *InvertersSummaryByEnvoyOrSite`

NewInvertersSummaryByEnvoyOrSiteWithDefaults instantiates a new InvertersSummaryByEnvoyOrSite object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignalStrength

`func (o *InvertersSummaryByEnvoyOrSite) GetSignalStrength() int32`

GetSignalStrength returns the SignalStrength field if non-nil, zero value otherwise.

### GetSignalStrengthOk

`func (o *InvertersSummaryByEnvoyOrSite) GetSignalStrengthOk() (*int32, bool)`

GetSignalStrengthOk returns a tuple with the SignalStrength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignalStrength

`func (o *InvertersSummaryByEnvoyOrSite) SetSignalStrength(v int32)`

SetSignalStrength sets SignalStrength field to given value.


### GetMicroInverters

`func (o *InvertersSummaryByEnvoyOrSite) GetMicroInverters() []InvertersSummaryByEnvoyOrSiteMicroInverters`

GetMicroInverters returns the MicroInverters field if non-nil, zero value otherwise.

### GetMicroInvertersOk

`func (o *InvertersSummaryByEnvoyOrSite) GetMicroInvertersOk() (*[]InvertersSummaryByEnvoyOrSiteMicroInverters, bool)`

GetMicroInvertersOk returns a tuple with the MicroInverters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMicroInverters

`func (o *InvertersSummaryByEnvoyOrSite) SetMicroInverters(v []InvertersSummaryByEnvoyOrSiteMicroInverters)`

SetMicroInverters sets MicroInverters field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


