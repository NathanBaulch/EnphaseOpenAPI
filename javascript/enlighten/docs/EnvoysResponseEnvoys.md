# TheEnlightenSystemsApi.EnvoysResponseEnvoys

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envoyId** | **Number** | The Enlighten ID of the Envoy. | 
**lastReportAt** | **Number** | The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the &#x60;datetime_format&#x60; query parameter is &#x60;iso8601&#x60;, &#x60;last_report_at&#x60; is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null. | 
**name** | **String** | The human-friendly name of this Envoy. | 
**partNumber** | **String** | The Enphase part number of this Envoy. | 
**serialNumber** | **String** | The serial number of this Envoy. | 
**status** | **String** | The current status of this Envoy. * &#x60;normal&#x60; - The Envoy is operating normally. * &#x60;comm&#x60; - The Envoy is not communicating to Enlighten. | 



## Enum: StatusEnum


* `normal` (value: `"normal"`)

* `comm` (value: `"comm"`)




