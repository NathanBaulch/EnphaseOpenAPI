# # Meta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**\OpenAPI\Client\Model\SystemStatusEnum**](SystemStatusEnum.md) |  | [optional]
**last_report_at** | **int** | Timestamp (in epoch format) at which the system&#39;s Envoy last submitted a report. | [optional]
**last_energy_at** | **int** | Timestamp (in epoch format) at which the system&#39;s produced energy was last reported. Even if the last produced energy is 0, its timestamp will be returned. | [optional]
**operational_at** | **int** | Timestamp (in epoch format) at which this system became operational. Corresponds to the system&#39;s interconnect time, if one is specified. Otherwise, it is the system&#39;s first reported interval end time. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
