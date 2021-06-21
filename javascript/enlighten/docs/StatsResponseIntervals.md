# TheEnlightenSystemsApi.StatsResponseIntervals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endAt** | **Number** | End date for interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**powr** | **Number** | Average power produced by microinverters during this interval, in Watts. | 
**enwh** | **Number** | Energy produced by microinverters during this interval, in Watt-hours. | 
**devicesReporting** | **Number** | Number of microinverters that reported data for this interval at the time of the request. | 


