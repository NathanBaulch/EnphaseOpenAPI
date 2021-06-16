# EnvoysEnvoys


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envoy_id** | **int** | The Enlighten ID of the Envoy. | 
**last_report_at** | **int** | The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the &#x60;datetime_format&#x60; query parameter is &#x60;iso8601&#x60;, &#x60;last_report_at&#x60; is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null. | 
**name** | **str** | The human-friendly name of this Envoy. | 
**part_number** | **str** | The Enphase part number of this Envoy. | 
**serial_number** | **str** | The serial number of this Envoy. | 
**status** | **str** | The current status of this Envoy. * &#x60;normal&#x60; - The Envoy is operating normally. * &#x60;comm&#x60; - The Envoy is not communicating to Enlighten. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


