# UpdateSystemArraysRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Angle** | **int32** | Angle of the system. | 
**Arrays** | [**[]ArrayParams**](ArrayParams.md) |  | 

## Methods

### NewUpdateSystemArraysRequest

`func NewUpdateSystemArraysRequest(angle int32, arrays []ArrayParams, ) *UpdateSystemArraysRequest`

NewUpdateSystemArraysRequest instantiates a new UpdateSystemArraysRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateSystemArraysRequestWithDefaults

`func NewUpdateSystemArraysRequestWithDefaults() *UpdateSystemArraysRequest`

NewUpdateSystemArraysRequestWithDefaults instantiates a new UpdateSystemArraysRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAngle

`func (o *UpdateSystemArraysRequest) GetAngle() int32`

GetAngle returns the Angle field if non-nil, zero value otherwise.

### GetAngleOk

`func (o *UpdateSystemArraysRequest) GetAngleOk() (*int32, bool)`

GetAngleOk returns a tuple with the Angle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAngle

`func (o *UpdateSystemArraysRequest) SetAngle(v int32)`

SetAngle sets Angle field to given value.


### GetArrays

`func (o *UpdateSystemArraysRequest) GetArrays() []ArrayParams`

GetArrays returns the Arrays field if non-nil, zero value otherwise.

### GetArraysOk

`func (o *UpdateSystemArraysRequest) GetArraysOk() (*[]ArrayParams, bool)`

GetArraysOk returns a tuple with the Arrays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrays

`func (o *UpdateSystemArraysRequest) SetArrays(v []ArrayParams)`

SetArrays sets Arrays field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


