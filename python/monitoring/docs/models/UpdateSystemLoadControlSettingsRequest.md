# monitoring.model.update_system_load_control_settings_request.UpdateSystemLoadControlSettingsRequest

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**name** | str,  | str,  | Name of the dry contact. Name cannot be changed. It is only used to identify the dry contact that needs to be updated. | 
**load_name** | str,  | str,  | Load Name of the load. Load Name cannot be changed. It is only used to identify the dry contact that needs to be updated. | [optional] 
**mode** | str,  | str,  | Mode. Available values are \&quot;Scheduled\&quot;, \&quot;Basic\&quot;, \&quot;Advanced_BatteryPowered\&quot;, \&quot;Manual_always_not_powered\&quot;, \&quot;Manual_always_powered\&quot;, \&quot;Advanced_GeneratorPowered\&quot;. | [optional] 
**soc_low** | decimal.Decimal, int,  | decimal.Decimal,  | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. It can be between 10 to 90. | [optional] 
**essential_start_time** | decimal.Decimal, int,  | decimal.Decimal,  | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**essential_end_time** | decimal.Decimal, int,  | decimal.Decimal,  | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

