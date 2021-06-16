# InlineResponse2004

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignalStrength** | **int32** |  | 
**MicroInverters** | [**[]InlineResponse2004MicroInverters**](InlineResponse2004MicroInverters.md) | A list of active inverters on this system, including serial and model numbers. | 

## Methods

### NewInlineResponse2004

`func NewInlineResponse2004(signalStrength int32, microInverters []InlineResponse2004MicroInverters, ) *InlineResponse2004`

NewInlineResponse2004 instantiates a new InlineResponse2004 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2004WithDefaults

`func NewInlineResponse2004WithDefaults() *InlineResponse2004`

NewInlineResponse2004WithDefaults instantiates a new InlineResponse2004 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignalStrength

`func (o *InlineResponse2004) GetSignalStrength() int32`

GetSignalStrength returns the SignalStrength field if non-nil, zero value otherwise.

### GetSignalStrengthOk

`func (o *InlineResponse2004) GetSignalStrengthOk() (*int32, bool)`

GetSignalStrengthOk returns a tuple with the SignalStrength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignalStrength

`func (o *InlineResponse2004) SetSignalStrength(v int32)`

SetSignalStrength sets SignalStrength field to given value.


### GetMicroInverters

`func (o *InlineResponse2004) GetMicroInverters() []InlineResponse2004MicroInverters`

GetMicroInverters returns the MicroInverters field if non-nil, zero value otherwise.

### GetMicroInvertersOk

`func (o *InlineResponse2004) GetMicroInvertersOk() (*[]InlineResponse2004MicroInverters, bool)`

GetMicroInvertersOk returns a tuple with the MicroInverters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMicroInverters

`func (o *InlineResponse2004) SetMicroInverters(v []InlineResponse2004MicroInverters)`

SetMicroInverters sets MicroInverters field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


