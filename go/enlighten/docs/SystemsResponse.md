# SystemsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Systems** | [**[]SystemsResponseSystemsInner**](SystemsResponseSystemsInner.md) |  | 
**Next** | Pointer to **string** |  | [optional] 

## Methods

### NewSystemsResponse

`func NewSystemsResponse(systems []SystemsResponseSystemsInner, ) *SystemsResponse`

NewSystemsResponse instantiates a new SystemsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemsResponseWithDefaults

`func NewSystemsResponseWithDefaults() *SystemsResponse`

NewSystemsResponseWithDefaults instantiates a new SystemsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystems

`func (o *SystemsResponse) GetSystems() []SystemsResponseSystemsInner`

GetSystems returns the Systems field if non-nil, zero value otherwise.

### GetSystemsOk

`func (o *SystemsResponse) GetSystemsOk() (*[]SystemsResponseSystemsInner, bool)`

GetSystemsOk returns a tuple with the Systems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystems

`func (o *SystemsResponse) SetSystems(v []SystemsResponseSystemsInner)`

SetSystems sets Systems field to given value.


### GetNext

`func (o *SystemsResponse) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *SystemsResponse) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *SystemsResponse) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *SystemsResponse) HasNext() bool`

HasNext returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


