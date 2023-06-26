# GetSystemDevicesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | Pointer to **int32** | System ID. | [optional] 
**TotalDevices** | Pointer to **int32** | Total active devices associated with the system. | [optional] 
**Items** | Pointer to **string** | List key. | [optional] 
**Devices** | Pointer to [**map[string][]GetSystemDevicesResponseDevicesValueInner**](array.md) | Hash keys include all the possible device types micros, meters, gateways, mids, q_relays, ACBs, Encharges, Enpowers (if the devices of this type are present). For all the device types, the object will contain the serial_number and model with some additional information pertaining to the device type. | [optional] 

## Methods

### NewGetSystemDevicesResponse

`func NewGetSystemDevicesResponse() *GetSystemDevicesResponse`

NewGetSystemDevicesResponse instantiates a new GetSystemDevicesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemDevicesResponseWithDefaults

`func NewGetSystemDevicesResponseWithDefaults() *GetSystemDevicesResponse`

NewGetSystemDevicesResponseWithDefaults instantiates a new GetSystemDevicesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *GetSystemDevicesResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *GetSystemDevicesResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *GetSystemDevicesResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.

### HasSystemId

`func (o *GetSystemDevicesResponse) HasSystemId() bool`

HasSystemId returns a boolean if a field has been set.

### GetTotalDevices

`func (o *GetSystemDevicesResponse) GetTotalDevices() int32`

GetTotalDevices returns the TotalDevices field if non-nil, zero value otherwise.

### GetTotalDevicesOk

`func (o *GetSystemDevicesResponse) GetTotalDevicesOk() (*int32, bool)`

GetTotalDevicesOk returns a tuple with the TotalDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDevices

`func (o *GetSystemDevicesResponse) SetTotalDevices(v int32)`

SetTotalDevices sets TotalDevices field to given value.

### HasTotalDevices

`func (o *GetSystemDevicesResponse) HasTotalDevices() bool`

HasTotalDevices returns a boolean if a field has been set.

### GetItems

`func (o *GetSystemDevicesResponse) GetItems() string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *GetSystemDevicesResponse) GetItemsOk() (*string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *GetSystemDevicesResponse) SetItems(v string)`

SetItems sets Items field to given value.

### HasItems

`func (o *GetSystemDevicesResponse) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetDevices

`func (o *GetSystemDevicesResponse) GetDevices() map[string][]GetSystemDevicesResponseDevicesValueInner`

GetDevices returns the Devices field if non-nil, zero value otherwise.

### GetDevicesOk

`func (o *GetSystemDevicesResponse) GetDevicesOk() (*map[string][]GetSystemDevicesResponseDevicesValueInner, bool)`

GetDevicesOk returns a tuple with the Devices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevices

`func (o *GetSystemDevicesResponse) SetDevices(v map[string][]GetSystemDevicesResponseDevicesValueInner)`

SetDevices sets Devices field to given value.

### HasDevices

`func (o *GetSystemDevicesResponse) HasDevices() bool`

HasDevices returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


