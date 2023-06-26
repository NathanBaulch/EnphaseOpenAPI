# GetActivationOpsProductionModeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Mode** | Pointer to **string** |  | [optional] 
**TotalMicros** | Pointer to **int32** | Total number of microinverters in the system. | [optional] 
**EnergyProducingMicros** | Pointer to **int32** | Total number of microinverters producing energy in the system. | [optional] 

## Methods

### NewGetActivationOpsProductionModeResponse

`func NewGetActivationOpsProductionModeResponse() *GetActivationOpsProductionModeResponse`

NewGetActivationOpsProductionModeResponse instantiates a new GetActivationOpsProductionModeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetActivationOpsProductionModeResponseWithDefaults

`func NewGetActivationOpsProductionModeResponseWithDefaults() *GetActivationOpsProductionModeResponse`

NewGetActivationOpsProductionModeResponseWithDefaults instantiates a new GetActivationOpsProductionModeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMode

`func (o *GetActivationOpsProductionModeResponse) GetMode() string`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *GetActivationOpsProductionModeResponse) GetModeOk() (*string, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *GetActivationOpsProductionModeResponse) SetMode(v string)`

SetMode sets Mode field to given value.

### HasMode

`func (o *GetActivationOpsProductionModeResponse) HasMode() bool`

HasMode returns a boolean if a field has been set.

### GetTotalMicros

`func (o *GetActivationOpsProductionModeResponse) GetTotalMicros() int32`

GetTotalMicros returns the TotalMicros field if non-nil, zero value otherwise.

### GetTotalMicrosOk

`func (o *GetActivationOpsProductionModeResponse) GetTotalMicrosOk() (*int32, bool)`

GetTotalMicrosOk returns a tuple with the TotalMicros field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalMicros

`func (o *GetActivationOpsProductionModeResponse) SetTotalMicros(v int32)`

SetTotalMicros sets TotalMicros field to given value.

### HasTotalMicros

`func (o *GetActivationOpsProductionModeResponse) HasTotalMicros() bool`

HasTotalMicros returns a boolean if a field has been set.

### GetEnergyProducingMicros

`func (o *GetActivationOpsProductionModeResponse) GetEnergyProducingMicros() int32`

GetEnergyProducingMicros returns the EnergyProducingMicros field if non-nil, zero value otherwise.

### GetEnergyProducingMicrosOk

`func (o *GetActivationOpsProductionModeResponse) GetEnergyProducingMicrosOk() (*int32, bool)`

GetEnergyProducingMicrosOk returns a tuple with the EnergyProducingMicros field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergyProducingMicros

`func (o *GetActivationOpsProductionModeResponse) SetEnergyProducingMicros(v int32)`

SetEnergyProducingMicros sets EnergyProducingMicros field to given value.

### HasEnergyProducingMicros

`func (o *GetActivationOpsProductionModeResponse) HasEnergyProducingMicros() bool`

HasEnergyProducingMicros returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


