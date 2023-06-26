# monitoring.model.get_system_battery_settings_response.GetSystemBatterySettingsResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**battery_mode** | str,  | str,  | Current battery mode of the system. | [optional] 
**reserve_soc** | decimal.Decimal, int,  | decimal.Decimal,  | Reserve soc for the current mode. | [optional] 
**battery_shutdown_level** | decimal.Decimal, int,  | decimal.Decimal,  | Level at which battery shutdowns to conserve energy. Battery restarts by using the conserved energy when the utility grid restores power or solar panels start producing energy. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

