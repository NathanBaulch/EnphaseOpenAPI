# EnphaseOpenAPI.Monitoring.Model.Meta
Information about the system such as its status, when it became operational and last reported to Envoy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **SystemStatusEnum** |  | [optional] 
**LastReportAt** | **int** | Timestamp (in epoch format) at which the system&#39;s Envoy last submitted a report. | [optional] 
**LastEnergyAt** | **int** | Timestamp (in epoch format) at which the system&#39;s produced energy was last reported. Even if the last produced energy is 0, its timestamp will be returned. | [optional] 
**OperationalAt** | **int** | Timestamp (in epoch format) at which this system became operational. Corresponds to the system&#39;s interconnect time, if one is specified. Otherwise, it is the system&#39;s first reported interval end time. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

