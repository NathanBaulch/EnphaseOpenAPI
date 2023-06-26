# ArrayParamsModulesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | ID of the module. ID cannot be changed. It is only used to identify the array that needs to be updated. | [optional] 
**Left** | **int32** | Left axis position of module w.r.t Array. Increase the value to move the module to the right, and decrease to move it to the left. | 
**Top** | **int32** | Top axis position of module w.r.t Array. Increase the value to move the module up, and decrease to move it down. | 
**Angle** | **int32** | Angle of the module. Rotate the module clockwise by the given value w.r.t array angle. For example to rotate the array clockwise by 90 degrees pass 90. | 
**SerialNum** | **string** | Inverter serial number mapped with this module. | 

## Methods

### NewArrayParamsModulesInner

`func NewArrayParamsModulesInner(left int32, top int32, angle int32, serialNum string, ) *ArrayParamsModulesInner`

NewArrayParamsModulesInner instantiates a new ArrayParamsModulesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArrayParamsModulesInnerWithDefaults

`func NewArrayParamsModulesInnerWithDefaults() *ArrayParamsModulesInner`

NewArrayParamsModulesInnerWithDefaults instantiates a new ArrayParamsModulesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ArrayParamsModulesInner) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ArrayParamsModulesInner) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ArrayParamsModulesInner) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *ArrayParamsModulesInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLeft

`func (o *ArrayParamsModulesInner) GetLeft() int32`

GetLeft returns the Left field if non-nil, zero value otherwise.

### GetLeftOk

`func (o *ArrayParamsModulesInner) GetLeftOk() (*int32, bool)`

GetLeftOk returns a tuple with the Left field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeft

`func (o *ArrayParamsModulesInner) SetLeft(v int32)`

SetLeft sets Left field to given value.


### GetTop

`func (o *ArrayParamsModulesInner) GetTop() int32`

GetTop returns the Top field if non-nil, zero value otherwise.

### GetTopOk

`func (o *ArrayParamsModulesInner) GetTopOk() (*int32, bool)`

GetTopOk returns a tuple with the Top field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTop

`func (o *ArrayParamsModulesInner) SetTop(v int32)`

SetTop sets Top field to given value.


### GetAngle

`func (o *ArrayParamsModulesInner) GetAngle() int32`

GetAngle returns the Angle field if non-nil, zero value otherwise.

### GetAngleOk

`func (o *ArrayParamsModulesInner) GetAngleOk() (*int32, bool)`

GetAngleOk returns a tuple with the Angle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAngle

`func (o *ArrayParamsModulesInner) SetAngle(v int32)`

SetAngle sets Angle field to given value.


### GetSerialNum

`func (o *ArrayParamsModulesInner) GetSerialNum() string`

GetSerialNum returns the SerialNum field if non-nil, zero value otherwise.

### GetSerialNumOk

`func (o *ArrayParamsModulesInner) GetSerialNumOk() (*string, bool)`

GetSerialNumOk returns a tuple with the SerialNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNum

`func (o *ArrayParamsModulesInner) SetSerialNum(v string)`

SetSerialNum sets SerialNum field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


