# ArrayParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | ID of the array. ID cannot be changed. It is only used to identify the array that needs to be updated. | [optional] 
**Label** | **string** | Name of the array. | 
**Angle** | **int32** | Angle of the array. Rotate the array clockwise by the given value. | 
**Tilt** | **string** | Tilt of the array. | 
**ProvisionedEnvoy** | **string** | Provisioned envoy. | 
**Left** | **int32** | Left axis position of array. Increase the value to move the array to the right, and decrease to move it to the left. | 
**Top** | **int32** | Top axis position of array. Increase the value to move the array up, and decrease to move it down. | 
**Modules** | [**[]ArrayParamsModulesInner**](ArrayParamsModulesInner.md) |  | 

## Methods

### NewArrayParams

`func NewArrayParams(label string, angle int32, tilt string, provisionedEnvoy string, left int32, top int32, modules []ArrayParamsModulesInner, ) *ArrayParams`

NewArrayParams instantiates a new ArrayParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArrayParamsWithDefaults

`func NewArrayParamsWithDefaults() *ArrayParams`

NewArrayParamsWithDefaults instantiates a new ArrayParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ArrayParams) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ArrayParams) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ArrayParams) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *ArrayParams) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLabel

`func (o *ArrayParams) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *ArrayParams) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *ArrayParams) SetLabel(v string)`

SetLabel sets Label field to given value.


### GetAngle

`func (o *ArrayParams) GetAngle() int32`

GetAngle returns the Angle field if non-nil, zero value otherwise.

### GetAngleOk

`func (o *ArrayParams) GetAngleOk() (*int32, bool)`

GetAngleOk returns a tuple with the Angle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAngle

`func (o *ArrayParams) SetAngle(v int32)`

SetAngle sets Angle field to given value.


### GetTilt

`func (o *ArrayParams) GetTilt() string`

GetTilt returns the Tilt field if non-nil, zero value otherwise.

### GetTiltOk

`func (o *ArrayParams) GetTiltOk() (*string, bool)`

GetTiltOk returns a tuple with the Tilt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTilt

`func (o *ArrayParams) SetTilt(v string)`

SetTilt sets Tilt field to given value.


### GetProvisionedEnvoy

`func (o *ArrayParams) GetProvisionedEnvoy() string`

GetProvisionedEnvoy returns the ProvisionedEnvoy field if non-nil, zero value otherwise.

### GetProvisionedEnvoyOk

`func (o *ArrayParams) GetProvisionedEnvoyOk() (*string, bool)`

GetProvisionedEnvoyOk returns a tuple with the ProvisionedEnvoy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionedEnvoy

`func (o *ArrayParams) SetProvisionedEnvoy(v string)`

SetProvisionedEnvoy sets ProvisionedEnvoy field to given value.


### GetLeft

`func (o *ArrayParams) GetLeft() int32`

GetLeft returns the Left field if non-nil, zero value otherwise.

### GetLeftOk

`func (o *ArrayParams) GetLeftOk() (*int32, bool)`

GetLeftOk returns a tuple with the Left field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeft

`func (o *ArrayParams) SetLeft(v int32)`

SetLeft sets Left field to given value.


### GetTop

`func (o *ArrayParams) GetTop() int32`

GetTop returns the Top field if non-nil, zero value otherwise.

### GetTopOk

`func (o *ArrayParams) GetTopOk() (*int32, bool)`

GetTopOk returns a tuple with the Top field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTop

`func (o *ArrayParams) SetTop(v int32)`

SetTop sets Top field to given value.


### GetModules

`func (o *ArrayParams) GetModules() []ArrayParamsModulesInner`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *ArrayParams) GetModulesOk() (*[]ArrayParamsModulesInner, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *ArrayParams) SetModules(v []ArrayParamsModulesInner)`

SetModules sets Modules field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


