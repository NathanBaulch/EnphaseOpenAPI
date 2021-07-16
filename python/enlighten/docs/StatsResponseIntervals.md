# StatsResponseIntervals


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_at** | **int** | End date for interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**powr** | **int** | Average power produced by microinverters during this interval, in Watts. | 
**enwh** | **int** | Energy produced by microinverters during this interval, in Watt-hours. | 
**devices_reporting** | **int** | Number of microinverters that reported data for this interval at the time of the request. | 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


