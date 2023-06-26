# GetInvertersSummaryByEnvoyOrSiteResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignalStrength** | Pointer to **int32** | Signal strength. | [optional] 
**MicroInverters** | Pointer to [**[]GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner**](GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner.md) | Microinverters. | [optional] 

## Methods

### NewGetInvertersSummaryByEnvoyOrSiteResponseInner

`func NewGetInvertersSummaryByEnvoyOrSiteResponseInner() *GetInvertersSummaryByEnvoyOrSiteResponseInner`

NewGetInvertersSummaryByEnvoyOrSiteResponseInner instantiates a new GetInvertersSummaryByEnvoyOrSiteResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetInvertersSummaryByEnvoyOrSiteResponseInnerWithDefaults

`func NewGetInvertersSummaryByEnvoyOrSiteResponseInnerWithDefaults() *GetInvertersSummaryByEnvoyOrSiteResponseInner`

NewGetInvertersSummaryByEnvoyOrSiteResponseInnerWithDefaults instantiates a new GetInvertersSummaryByEnvoyOrSiteResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignalStrength

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInner) GetSignalStrength() int32`

GetSignalStrength returns the SignalStrength field if non-nil, zero value otherwise.

### GetSignalStrengthOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInner) GetSignalStrengthOk() (*int32, bool)`

GetSignalStrengthOk returns a tuple with the SignalStrength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignalStrength

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInner) SetSignalStrength(v int32)`

SetSignalStrength sets SignalStrength field to given value.

### HasSignalStrength

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInner) HasSignalStrength() bool`

HasSignalStrength returns a boolean if a field has been set.

### GetMicroInverters

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInner) GetMicroInverters() []GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner`

GetMicroInverters returns the MicroInverters field if non-nil, zero value otherwise.

### GetMicroInvertersOk

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInner) GetMicroInvertersOk() (*[]GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner, bool)`

GetMicroInvertersOk returns a tuple with the MicroInverters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMicroInverters

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInner) SetMicroInverters(v []GetInvertersSummaryByEnvoyOrSiteResponseInnerMicroInvertersInner)`

SetMicroInverters sets MicroInverters field to given value.

### HasMicroInverters

`func (o *GetInvertersSummaryByEnvoyOrSiteResponseInner) HasMicroInverters() bool`

HasMicroInverters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


