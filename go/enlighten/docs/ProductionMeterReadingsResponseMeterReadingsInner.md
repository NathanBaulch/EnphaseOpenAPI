# ProductionMeterReadingsResponseMeterReadingsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SerialNumber** | **string** | The serial number of the meter. | 
**Value** | **int32** | The odometer reading, in Watt-hours. | 
**ReadAt** | **int64** | The time when the reading was taken, always prior or equal to the requested &#x60;end_at&#x60;. | 

## Methods

### NewProductionMeterReadingsResponseMeterReadingsInner

`func NewProductionMeterReadingsResponseMeterReadingsInner(serialNumber string, value int32, readAt int64, ) *ProductionMeterReadingsResponseMeterReadingsInner`

NewProductionMeterReadingsResponseMeterReadingsInner instantiates a new ProductionMeterReadingsResponseMeterReadingsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductionMeterReadingsResponseMeterReadingsInnerWithDefaults

`func NewProductionMeterReadingsResponseMeterReadingsInnerWithDefaults() *ProductionMeterReadingsResponseMeterReadingsInner`

NewProductionMeterReadingsResponseMeterReadingsInnerWithDefaults instantiates a new ProductionMeterReadingsResponseMeterReadingsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSerialNumber

`func (o *ProductionMeterReadingsResponseMeterReadingsInner) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *ProductionMeterReadingsResponseMeterReadingsInner) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *ProductionMeterReadingsResponseMeterReadingsInner) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.


### GetValue

`func (o *ProductionMeterReadingsResponseMeterReadingsInner) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ProductionMeterReadingsResponseMeterReadingsInner) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ProductionMeterReadingsResponseMeterReadingsInner) SetValue(v int32)`

SetValue sets Value field to given value.


### GetReadAt

`func (o *ProductionMeterReadingsResponseMeterReadingsInner) GetReadAt() int64`

GetReadAt returns the ReadAt field if non-nil, zero value otherwise.

### GetReadAtOk

`func (o *ProductionMeterReadingsResponseMeterReadingsInner) GetReadAtOk() (*int64, bool)`

GetReadAtOk returns a tuple with the ReadAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReadAt

`func (o *ProductionMeterReadingsResponseMeterReadingsInner) SetReadAt(v int64)`

SetReadAt sets ReadAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


