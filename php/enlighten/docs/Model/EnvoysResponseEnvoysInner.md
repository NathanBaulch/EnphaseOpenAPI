# # EnvoysResponseEnvoysInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envoy_id** | **int** | The Enlighten ID of the Envoy. |
**last_report_at** | **int** | The last time this Envoy submitted a report, by default expressed in Unix epoch time. When the &#x60;datetime_format&#x60; query parameter is &#x60;iso8601&#x60;, &#x60;last_report_at&#x60; is in ISO 8601 format. If Enlighten has no record of a report from this Envoy, returns null. |
**name** | **string** | The human-friendly name of this Envoy. |
**part_number** | **string** | The Enphase part number of this Envoy. |
**serial_number** | **string** | The serial number of this Envoy. |
**status** | **string** | The current status of this Envoy. * &#x60;normal&#x60; - The Envoy is operating normally. * &#x60;comm&#x60; - The Envoy is not communicating to Enlighten. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
