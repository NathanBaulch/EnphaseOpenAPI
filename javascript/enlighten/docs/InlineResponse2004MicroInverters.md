# TheEnlightenSystemsApi.InlineResponse2004MicroInverters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**model** | **String** | Model number of this Microinverter. | 
**partNumber** | **String** | The Enphase part number of this Microinverter. | 
**serialNumber** | **String** | The serial number of this Microinverter. | 
**sku** | **String** |  | 
**status** | **String** | The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired. | 
**powerProduced** | **Number** |  | 
**procLoad** | **String** |  | 
**paramTable** | **String** |  | 
**envoySerialNumber** | **String** |  | 
**energy** | [**InlineResponse2004Energy**](InlineResponse2004Energy.md) |  | 
**gridProfile** | **String** |  | 
**lastReportDate** | **Date** | The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. | 



## Enum: StatusEnum


* `normal` (value: `"normal"`)

* `power` (value: `"power"`)

* `micro` (value: `"micro"`)

* `retired` (value: `"retired"`)




