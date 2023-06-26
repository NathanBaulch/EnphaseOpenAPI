# commissioning.model.get_system_meter_response.GetSystemMeterResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**serial_number** | str,  | str,  | Meter serial number. | [optional] 
**manufacturer** | str,  | str,  | Name of the manufacturer. | [optional] 
**model** | str,  | str,  | Model. | [optional] 
**type** | str,  | str,  | Meter type. | [optional] 
**operational_date** | str, date,  | str,  | Operational date. | [optional] value must conform to RFC-3339 full-date YYYY-MM-DD
**first_report_date** | str, datetime,  | str,  | First report date. | [optional] value must conform to RFC-3339 date-time
**last_report_date** | str, datetime,  | str,  | Last report date. | [optional] value must conform to RFC-3339 date-time
**phase** | str,  | str,  | Phase. | [optional] 
**envoy_serial_number** | str,  | str,  | Envoy serial number. | [optional] 
**status** | str,  | str,  | Meter status. | [optional] 
**state** | str,  | str,  | Meter state. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

