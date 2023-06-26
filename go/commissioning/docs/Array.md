# Array

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | ID of the array. | [optional] 
**Label** | Pointer to **string** | Name of the array. | [optional] 
**Angle** | Pointer to **int32** | Angle of the array. | [optional] 
**Tilt** | Pointer to **string** | Tilt of the array. | [optional] 
**ReportingEnvoys** | Pointer to **[]string** | List of envoys serial numbers. | [optional] 
**ProvisionedEnvoy** | Pointer to **string** | Provisioned envoy. | [optional] 
**UpdatedAt** | Pointer to **int64** | Last updated Epoch time. | [optional] 
**Left** | Pointer to **int32** | Left axis position of array. | [optional] 
**Top** | Pointer to **int32** | Top axis position of array. | [optional] 
**Modules** | Pointer to [**[]ArrayModulesInner**](ArrayModulesInner.md) |  | [optional] 

## Methods

### NewArray

`func NewArray() *Array`

NewArray instantiates a new Array object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArrayWithDefaults

`func NewArrayWithDefaults() *Array`

NewArrayWithDefaults instantiates a new Array object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Array) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Array) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Array) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *Array) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLabel

`func (o *Array) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *Array) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *Array) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *Array) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetAngle

`func (o *Array) GetAngle() int32`

GetAngle returns the Angle field if non-nil, zero value otherwise.

### GetAngleOk

`func (o *Array) GetAngleOk() (*int32, bool)`

GetAngleOk returns a tuple with the Angle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAngle

`func (o *Array) SetAngle(v int32)`

SetAngle sets Angle field to given value.

### HasAngle

`func (o *Array) HasAngle() bool`

HasAngle returns a boolean if a field has been set.

### GetTilt

`func (o *Array) GetTilt() string`

GetTilt returns the Tilt field if non-nil, zero value otherwise.

### GetTiltOk

`func (o *Array) GetTiltOk() (*string, bool)`

GetTiltOk returns a tuple with the Tilt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTilt

`func (o *Array) SetTilt(v string)`

SetTilt sets Tilt field to given value.

### HasTilt

`func (o *Array) HasTilt() bool`

HasTilt returns a boolean if a field has been set.

### GetReportingEnvoys

`func (o *Array) GetReportingEnvoys() []string`

GetReportingEnvoys returns the ReportingEnvoys field if non-nil, zero value otherwise.

### GetReportingEnvoysOk

`func (o *Array) GetReportingEnvoysOk() (*[]string, bool)`

GetReportingEnvoysOk returns a tuple with the ReportingEnvoys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportingEnvoys

`func (o *Array) SetReportingEnvoys(v []string)`

SetReportingEnvoys sets ReportingEnvoys field to given value.

### HasReportingEnvoys

`func (o *Array) HasReportingEnvoys() bool`

HasReportingEnvoys returns a boolean if a field has been set.

### GetProvisionedEnvoy

`func (o *Array) GetProvisionedEnvoy() string`

GetProvisionedEnvoy returns the ProvisionedEnvoy field if non-nil, zero value otherwise.

### GetProvisionedEnvoyOk

`func (o *Array) GetProvisionedEnvoyOk() (*string, bool)`

GetProvisionedEnvoyOk returns a tuple with the ProvisionedEnvoy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionedEnvoy

`func (o *Array) SetProvisionedEnvoy(v string)`

SetProvisionedEnvoy sets ProvisionedEnvoy field to given value.

### HasProvisionedEnvoy

`func (o *Array) HasProvisionedEnvoy() bool`

HasProvisionedEnvoy returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Array) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Array) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Array) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Array) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetLeft

`func (o *Array) GetLeft() int32`

GetLeft returns the Left field if non-nil, zero value otherwise.

### GetLeftOk

`func (o *Array) GetLeftOk() (*int32, bool)`

GetLeftOk returns a tuple with the Left field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeft

`func (o *Array) SetLeft(v int32)`

SetLeft sets Left field to given value.

### HasLeft

`func (o *Array) HasLeft() bool`

HasLeft returns a boolean if a field has been set.

### GetTop

`func (o *Array) GetTop() int32`

GetTop returns the Top field if non-nil, zero value otherwise.

### GetTopOk

`func (o *Array) GetTopOk() (*int32, bool)`

GetTopOk returns a tuple with the Top field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTop

`func (o *Array) SetTop(v int32)`

SetTop sets Top field to given value.

### HasTop

`func (o *Array) HasTop() bool`

HasTop returns a boolean if a field has been set.

### GetModules

`func (o *Array) GetModules() []ArrayModulesInner`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *Array) GetModulesOk() (*[]ArrayModulesInner, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *Array) SetModules(v []ArrayModulesInner)`

SetModules sets Modules field to given value.

### HasModules

`func (o *Array) HasModules() bool`

HasModules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


