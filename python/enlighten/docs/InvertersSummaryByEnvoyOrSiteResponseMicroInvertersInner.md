# InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInner


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**model** | **str** | Model number of this Microinverter. | 
**part_number** | **str** | The Enphase part number of this Microinverter. | 
**serial_number** | **str** | The serial number of this Microinverter. | 
**sku** | **str** |  | 
**status** | **str** | The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired. | 
**power_produced** | [**InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced**](InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerPowerProduced.md) |  | 
**proc_load** | **str** |  | 
**param_table** | **str** |  | 
**envoy_serial_number** | **str** |  | 
**energy** | [**InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy**](InvertersSummaryByEnvoyOrSiteResponseMicroInvertersInnerEnergy.md) |  | 
**grid_profile** | **str** |  | 
**last_report_date** | **date** | The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. | 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


