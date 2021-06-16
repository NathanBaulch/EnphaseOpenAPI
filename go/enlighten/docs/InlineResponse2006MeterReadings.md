# InlineResponse2006MeterReadings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SerialNumber** | **string** | The serial number of the meter. | 
**Value** | **int32** | The odometer reading, in Watt-hours. | 
**ReadAt** | **int32** | The time when the reading was taken, always prior or equal to the requested &#x60;end_at&#x60;. | 

## Methods

### NewInlineResponse2006MeterReadings

`func NewInlineResponse2006MeterReadings(serialNumber string, value int32, readAt int32, ) *InlineResponse2006MeterReadings`

NewInlineResponse2006MeterReadings instantiates a new InlineResponse2006MeterReadings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2006MeterReadingsWithDefaults

`func NewInlineResponse2006MeterReadingsWithDefaults() *InlineResponse2006MeterReadings`

NewInlineResponse2006MeterReadingsWithDefaults instantiates a new InlineResponse2006MeterReadings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSerialNumber

`func (o *InlineResponse2006MeterReadings) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *InlineResponse2006MeterReadings) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *InlineResponse2006MeterReadings) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.


### GetValue

`func (o *InlineResponse2006MeterReadings) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *InlineResponse2006MeterReadings) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *InlineResponse2006MeterReadings) SetValue(v int32)`

SetValue sets Value field to given value.


### GetReadAt

`func (o *InlineResponse2006MeterReadings) GetReadAt() int32`

GetReadAt returns the ReadAt field if non-nil, zero value otherwise.

### GetReadAtOk

`func (o *InlineResponse2006MeterReadings) GetReadAtOk() (*int32, bool)`

GetReadAtOk returns a tuple with the ReadAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReadAt

`func (o *InlineResponse2006MeterReadings) SetReadAt(v int32)`

SetReadAt sets ReadAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


