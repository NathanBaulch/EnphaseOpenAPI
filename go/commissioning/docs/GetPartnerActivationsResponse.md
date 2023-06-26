# GetPartnerActivationsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Systems** | Pointer to [**[]GetPartnerActivationsResponseSystemsInner**](GetPartnerActivationsResponseSystemsInner.md) | Zero or more activations. | [optional] 
**Next** | Pointer to **string** | If the first request does not return a full list, use the &#39;next&#39; attribute in the response body to request the next page. By default, activations are returned in batches of 10. The maximum page size is 1000. | [optional] 

## Methods

### NewGetPartnerActivationsResponse

`func NewGetPartnerActivationsResponse() *GetPartnerActivationsResponse`

NewGetPartnerActivationsResponse instantiates a new GetPartnerActivationsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPartnerActivationsResponseWithDefaults

`func NewGetPartnerActivationsResponseWithDefaults() *GetPartnerActivationsResponse`

NewGetPartnerActivationsResponseWithDefaults instantiates a new GetPartnerActivationsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystems

`func (o *GetPartnerActivationsResponse) GetSystems() []GetPartnerActivationsResponseSystemsInner`

GetSystems returns the Systems field if non-nil, zero value otherwise.

### GetSystemsOk

`func (o *GetPartnerActivationsResponse) GetSystemsOk() (*[]GetPartnerActivationsResponseSystemsInner, bool)`

GetSystemsOk returns a tuple with the Systems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystems

`func (o *GetPartnerActivationsResponse) SetSystems(v []GetPartnerActivationsResponseSystemsInner)`

SetSystems sets Systems field to given value.

### HasSystems

`func (o *GetPartnerActivationsResponse) HasSystems() bool`

HasSystems returns a boolean if a field has been set.

### GetNext

`func (o *GetPartnerActivationsResponse) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *GetPartnerActivationsResponse) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *GetPartnerActivationsResponse) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *GetPartnerActivationsResponse) HasNext() bool`

HasNext returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


