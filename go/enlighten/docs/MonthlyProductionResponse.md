# MonthlyProductionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemId** | **int32** | Enlighten ID for this system. | 
**StartDate** | **string** | First day included in the reporting period. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**EndDate** | **string** | Last day included in the reporting period. | 
**ProductionWh** | **int32** | Total production for the requested period in Watt-hours. | 
**MeterReadings** | [**[]MonthlyProductionResponseMeterReadings**](MonthlyProductionResponseMeterReadings.md) | If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty. | 
**Meta** | [**Meta**](Meta.md) |  | 

## Methods

### NewMonthlyProductionResponse

`func NewMonthlyProductionResponse(systemId int32, startDate string, endDate string, productionWh int32, meterReadings []MonthlyProductionResponseMeterReadings, meta Meta, ) *MonthlyProductionResponse`

NewMonthlyProductionResponse instantiates a new MonthlyProductionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMonthlyProductionResponseWithDefaults

`func NewMonthlyProductionResponseWithDefaults() *MonthlyProductionResponse`

NewMonthlyProductionResponseWithDefaults instantiates a new MonthlyProductionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemId

`func (o *MonthlyProductionResponse) GetSystemId() int32`

GetSystemId returns the SystemId field if non-nil, zero value otherwise.

### GetSystemIdOk

`func (o *MonthlyProductionResponse) GetSystemIdOk() (*int32, bool)`

GetSystemIdOk returns a tuple with the SystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemId

`func (o *MonthlyProductionResponse) SetSystemId(v int32)`

SetSystemId sets SystemId field to given value.


### GetStartDate

`func (o *MonthlyProductionResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *MonthlyProductionResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *MonthlyProductionResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetEndDate

`func (o *MonthlyProductionResponse) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *MonthlyProductionResponse) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *MonthlyProductionResponse) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.


### GetProductionWh

`func (o *MonthlyProductionResponse) GetProductionWh() int32`

GetProductionWh returns the ProductionWh field if non-nil, zero value otherwise.

### GetProductionWhOk

`func (o *MonthlyProductionResponse) GetProductionWhOk() (*int32, bool)`

GetProductionWhOk returns a tuple with the ProductionWh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductionWh

`func (o *MonthlyProductionResponse) SetProductionWh(v int32)`

SetProductionWh sets ProductionWh field to given value.


### GetMeterReadings

`func (o *MonthlyProductionResponse) GetMeterReadings() []MonthlyProductionResponseMeterReadings`

GetMeterReadings returns the MeterReadings field if non-nil, zero value otherwise.

### GetMeterReadingsOk

`func (o *MonthlyProductionResponse) GetMeterReadingsOk() (*[]MonthlyProductionResponseMeterReadings, bool)`

GetMeterReadingsOk returns a tuple with the MeterReadings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterReadings

`func (o *MonthlyProductionResponse) SetMeterReadings(v []MonthlyProductionResponseMeterReadings)`

SetMeterReadings sets MeterReadings field to given value.


### GetMeta

`func (o *MonthlyProductionResponse) GetMeta() Meta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *MonthlyProductionResponse) GetMetaOk() (*Meta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *MonthlyProductionResponse) SetMeta(v Meta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


