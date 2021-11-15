# # InvertersSummaryByEnvoyOrSiteResponseMicroInverters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  |
**model** | **string** | Model number of this Microinverter. |
**part_number** | **string** | The Enphase part number of this Microinverter. |
**serial_number** | **string** | The serial number of this Microinverter. |
**sku** | **string** |  |
**status** | **string** | The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired. |
**power_produced** | **int** |  |
**proc_load** | **string** |  |
**param_table** | **string** |  |
**envoy_serial_number** | **string** |  |
**energy** | [**\OpenAPI\Client\Model\InvertersSummaryByEnvoyOrSiteResponseEnergy**](InvertersSummaryByEnvoyOrSiteResponseEnergy.md) |  |
**grid_profile** | **string** |  |
**last_report_date** | **\DateTime** | The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
