# InlineResponse2007Intervals1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Channel** | **int32** | The reporting channel identifier. | 
**EndAt** | **int32** | End of interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**WhDel** | **int32** | Energy delivered during this interval, in Watt-hours. | 
**CurrW** | **int32** | Energy delivered during this interval, in Watts. | 

## Methods

### NewInlineResponse2007Intervals1

`func NewInlineResponse2007Intervals1(channel int32, endAt int32, whDel int32, currW int32, ) *InlineResponse2007Intervals1`

NewInlineResponse2007Intervals1 instantiates a new InlineResponse2007Intervals1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2007Intervals1WithDefaults

`func NewInlineResponse2007Intervals1WithDefaults() *InlineResponse2007Intervals1`

NewInlineResponse2007Intervals1WithDefaults instantiates a new InlineResponse2007Intervals1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannel

`func (o *InlineResponse2007Intervals1) GetChannel() int32`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *InlineResponse2007Intervals1) GetChannelOk() (*int32, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *InlineResponse2007Intervals1) SetChannel(v int32)`

SetChannel sets Channel field to given value.


### GetEndAt

`func (o *InlineResponse2007Intervals1) GetEndAt() int32`

GetEndAt returns the EndAt field if non-nil, zero value otherwise.

### GetEndAtOk

`func (o *InlineResponse2007Intervals1) GetEndAtOk() (*int32, bool)`

GetEndAtOk returns a tuple with the EndAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndAt

`func (o *InlineResponse2007Intervals1) SetEndAt(v int32)`

SetEndAt sets EndAt field to given value.


### GetWhDel

`func (o *InlineResponse2007Intervals1) GetWhDel() int32`

GetWhDel returns the WhDel field if non-nil, zero value otherwise.

### GetWhDelOk

`func (o *InlineResponse2007Intervals1) GetWhDelOk() (*int32, bool)`

GetWhDelOk returns a tuple with the WhDel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhDel

`func (o *InlineResponse2007Intervals1) SetWhDel(v int32)`

SetWhDel sets WhDel field to given value.


### GetCurrW

`func (o *InlineResponse2007Intervals1) GetCurrW() int32`

GetCurrW returns the CurrW field if non-nil, zero value otherwise.

### GetCurrWOk

`func (o *InlineResponse2007Intervals1) GetCurrWOk() (*int32, bool)`

GetCurrWOk returns a tuple with the CurrW field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrW

`func (o *InlineResponse2007Intervals1) SetCurrW(v int32)`

SetCurrW sets CurrW field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


