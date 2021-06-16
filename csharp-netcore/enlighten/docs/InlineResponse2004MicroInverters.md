# EnphaseOpenAPI.Enlighten.Model.InlineResponse2004MicroInverters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** |  | 
**Model** | **string** | Model number of this Microinverter. | 
**PartNumber** | **string** | The Enphase part number of this Microinverter. | 
**SerialNumber** | **string** | The serial number of this Microinverter. | 
**Sku** | **string** |  | 
**Status** | **string** | The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired. | 
**PowerProduced** | **int** |  | 
**ProcLoad** | **string** |  | 
**ParamTable** | **string** |  | 
**EnvoySerialNumber** | **string** |  | 
**Energy** | [**InlineResponse2004Energy**](InlineResponse2004Energy.md) |  | 
**GridProfile** | **string** |  | 
**LastReportDate** | **DateTime** | The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

