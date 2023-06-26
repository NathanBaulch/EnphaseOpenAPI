# monitoring.model.get_system_load_control_settings_response.GetSystemLoadControlSettingsResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**[load_control_data](#load_control_data)** | list, tuple,  | tuple,  | Load control data for all the configured loads. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# load_control_data

Load control data for all the configured loads.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Load control data for all the configured loads. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[items](#items) | dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

# items

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**name** | str,  | str,  | Name of the dry contact. | [optional] 
**load_name** | str,  | str,  | Name of the load. | [optional] 
**owner_can_override** | str,  | str,  | HOs ability to override the load control settings. | [optional] 
**config** | str,  | str,  | Enabled/disabled. | [optional] 
**soc_low** | decimal.Decimal, int,  | decimal.Decimal,  | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. | [optional] 
**soc_high** | decimal.Decimal, int,  | decimal.Decimal,  | Applicable for advanced mode. Load powers off when battery reaches soc_low. The load will be powered on when the battery soc reaches soc_high. | [optional] 
**essential_start_time** | decimal.Decimal, int,  | decimal.Decimal,  | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**essential_end_time** | decimal.Decimal, int,  | decimal.Decimal,  | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

