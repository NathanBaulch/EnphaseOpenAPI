# SystemArray

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
**Modules** | Pointer to [**[]SystemArrayModulesInner**](SystemArrayModulesInner.md) |  | [optional] 

## Methods

### NewSystemArray

`func NewSystemArray() *SystemArray`

NewSystemArray instantiates a new SystemArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemArrayWithDefaults

`func NewSystemArrayWithDefaults() *SystemArray`

NewSystemArrayWithDefaults instantiates a new SystemArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SystemArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SystemArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SystemArray) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *SystemArray) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLabel

`func (o *SystemArray) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *SystemArray) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *SystemArray) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *SystemArray) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetAngle

`func (o *SystemArray) GetAngle() int32`

GetAngle returns the Angle field if non-nil, zero value otherwise.

### GetAngleOk

`func (o *SystemArray) GetAngleOk() (*int32, bool)`

GetAngleOk returns a tuple with the Angle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAngle

`func (o *SystemArray) SetAngle(v int32)`

SetAngle sets Angle field to given value.

### HasAngle

`func (o *SystemArray) HasAngle() bool`

HasAngle returns a boolean if a field has been set.

### GetTilt

`func (o *SystemArray) GetTilt() string`

GetTilt returns the Tilt field if non-nil, zero value otherwise.

### GetTiltOk

`func (o *SystemArray) GetTiltOk() (*string, bool)`

GetTiltOk returns a tuple with the Tilt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTilt

`func (o *SystemArray) SetTilt(v string)`

SetTilt sets Tilt field to given value.

### HasTilt

`func (o *SystemArray) HasTilt() bool`

HasTilt returns a boolean if a field has been set.

### GetReportingEnvoys

`func (o *SystemArray) GetReportingEnvoys() []string`

GetReportingEnvoys returns the ReportingEnvoys field if non-nil, zero value otherwise.

### GetReportingEnvoysOk

`func (o *SystemArray) GetReportingEnvoysOk() (*[]string, bool)`

GetReportingEnvoysOk returns a tuple with the ReportingEnvoys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportingEnvoys

`func (o *SystemArray) SetReportingEnvoys(v []string)`

SetReportingEnvoys sets ReportingEnvoys field to given value.

### HasReportingEnvoys

`func (o *SystemArray) HasReportingEnvoys() bool`

HasReportingEnvoys returns a boolean if a field has been set.

### GetProvisionedEnvoy

`func (o *SystemArray) GetProvisionedEnvoy() string`

GetProvisionedEnvoy returns the ProvisionedEnvoy field if non-nil, zero value otherwise.

### GetProvisionedEnvoyOk

`func (o *SystemArray) GetProvisionedEnvoyOk() (*string, bool)`

GetProvisionedEnvoyOk returns a tuple with the ProvisionedEnvoy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionedEnvoy

`func (o *SystemArray) SetProvisionedEnvoy(v string)`

SetProvisionedEnvoy sets ProvisionedEnvoy field to given value.

### HasProvisionedEnvoy

`func (o *SystemArray) HasProvisionedEnvoy() bool`

HasProvisionedEnvoy returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *SystemArray) GetUpdatedAt() int64`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SystemArray) GetUpdatedAtOk() (*int64, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SystemArray) SetUpdatedAt(v int64)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *SystemArray) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetLeft

`func (o *SystemArray) GetLeft() int32`

GetLeft returns the Left field if non-nil, zero value otherwise.

### GetLeftOk

`func (o *SystemArray) GetLeftOk() (*int32, bool)`

GetLeftOk returns a tuple with the Left field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeft

`func (o *SystemArray) SetLeft(v int32)`

SetLeft sets Left field to given value.

### HasLeft

`func (o *SystemArray) HasLeft() bool`

HasLeft returns a boolean if a field has been set.

### GetTop

`func (o *SystemArray) GetTop() int32`

GetTop returns the Top field if non-nil, zero value otherwise.

### GetTopOk

`func (o *SystemArray) GetTopOk() (*int32, bool)`

GetTopOk returns a tuple with the Top field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTop

`func (o *SystemArray) SetTop(v int32)`

SetTop sets Top field to given value.

### HasTop

`func (o *SystemArray) HasTop() bool`

HasTop returns a boolean if a field has been set.

### GetModules

`func (o *SystemArray) GetModules() []SystemArrayModulesInner`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *SystemArray) GetModulesOk() (*[]SystemArrayModulesInner, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *SystemArray) SetModules(v []SystemArrayModulesInner)`

SetModules sets Modules field to given value.

### HasModules

`func (o *SystemArray) HasModules() bool`

HasModules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


