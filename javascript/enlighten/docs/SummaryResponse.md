# TheEnlightenSystemsApi.SummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentPower** | **Number** | Current power production, in Watts. For historical requests, returns 0. | 
**energyLifetime** | **Number** | Energy produced in the lifetime of the system, excluding the requested day, in Watt-hours. | 
**energyToday** | **Number** | Energy produced on the requested day, in Watt-hours. | 
**lastIntervalEndAt** | **Number** | The last known time that the system produced energy. When a system has not been communicating for a length of time, the &#x60;last_report_at&#x60; can be recent, whereas the &#x60;last_interval_end_at&#x60; may be further back. | 
**lastReportAt** | **Number** | The last time an Envoy on this system reported. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**modules** | **Number** | Number of active (not retired) modules. For historical requests, returns 0. | 
**operationalAt** | **Number** | The time at which this system became operational. Corresponds to the system&#39;s interconnect time, if one is specified. Otherwise, it is the system&#39;s first interval end time. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**sizeW** | **Number** | The size of the system, in Watts. For historical requests, returns 0. | 
**source** | **String** | Indicates whether the production of this system is measured by its microinverters (&#x60;microinverters&#x60;) or by revenue-grade meters (&#x60;meter&#x60;) installed on the system. | 
**status** | [**Status**](Status.md) |  | 
**summaryDate** | **Date** | Effective date of the response. For historical requests, returns the date requested. For current requests, returns the current date. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | 
**systemId** | **Number** | The Enlighten ID of the system. | 



## Enum: SourceEnum


* `microinverters` (value: `"microinverters"`)

* `meter` (value: `"meter"`)




