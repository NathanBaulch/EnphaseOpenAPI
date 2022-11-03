# InvertersSummaryByEnvoyOrSiteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignalStrength** | **int32** |  | 
**MicroInverters** | [**[]InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner**](InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner.md) | A list of active inverters on this system, including serial and model numbers. | 

## Methods

### NewInvertersSummaryByEnvoyOrSiteResponse

`func NewInvertersSummaryByEnvoyOrSiteResponse(signalStrength int32, microInverters []InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner, ) *InvertersSummaryByEnvoyOrSiteResponse`

NewInvertersSummaryByEnvoyOrSiteResponse instantiates a new InvertersSummaryByEnvoyOrSiteResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvertersSummaryByEnvoyOrSiteResponseWithDefaults

`func NewInvertersSummaryByEnvoyOrSiteResponseWithDefaults() *InvertersSummaryByEnvoyOrSiteResponse`

NewInvertersSummaryByEnvoyOrSiteResponseWithDefaults instantiates a new InvertersSummaryByEnvoyOrSiteResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignalStrength

`func (o *InvertersSummaryByEnvoyOrSiteResponse) GetSignalStrength() int32`

GetSignalStrength returns the SignalStrength field if non-nil, zero value otherwise.

### GetSignalStrengthOk

`func (o *InvertersSummaryByEnvoyOrSiteResponse) GetSignalStrengthOk() (*int32, bool)`

GetSignalStrengthOk returns a tuple with the SignalStrength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignalStrength

`func (o *InvertersSummaryByEnvoyOrSiteResponse) SetSignalStrength(v int32)`

SetSignalStrength sets SignalStrength field to given value.


### GetMicroInverters

`func (o *InvertersSummaryByEnvoyOrSiteResponse) GetMicroInverters() []InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner`

GetMicroInverters returns the MicroInverters field if non-nil, zero value otherwise.

### GetMicroInvertersOk

`func (o *InvertersSummaryByEnvoyOrSiteResponse) GetMicroInvertersOk() (*[]InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner, bool)`

GetMicroInvertersOk returns a tuple with the MicroInverters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMicroInverters

`func (o *InvertersSummaryByEnvoyOrSiteResponse) SetMicroInverters(v []InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner)`

SetMicroInverters sets MicroInverters field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


