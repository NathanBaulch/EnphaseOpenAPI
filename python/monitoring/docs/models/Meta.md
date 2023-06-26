# monitoring.model.meta.Meta

Information about the system such as its status, when it became operational and last reported to Envoy.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | Information about the system such as its status, when it became operational and last reported to Envoy. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**status** | [**SystemStatusEnum**](SystemStatusEnum.md) | [**SystemStatusEnum**](SystemStatusEnum.md) |  | [optional] 
**last_report_at** | decimal.Decimal, int,  | decimal.Decimal,  | Timestamp (in epoch format) at which the system&#x27;s Envoy last submitted a report. | [optional] 
**last_energy_at** | decimal.Decimal, int,  | decimal.Decimal,  | Timestamp (in epoch format) at which the system&#x27;s produced energy was last reported. Even if the last produced energy is 0, its timestamp will be returned. | [optional] 
**operational_at** | decimal.Decimal, int,  | decimal.Decimal,  | Timestamp (in epoch format) at which this system became operational. Corresponds to the system&#x27;s interconnect time, if one is specified. Otherwise, it is the system&#x27;s first reported interval end time. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

