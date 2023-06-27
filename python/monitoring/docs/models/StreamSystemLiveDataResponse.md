# monitoring.model.stream_system_live_data_response.StreamSystemLiveDataResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[data](#data)** | dict, frozendict.frozendict,  | frozendict.frozendict,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# data

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[data](#data)** | dict, frozendict.frozendict,  | frozendict.frozendict,  |  | [optional] 
**timestamp_epoch** | decimal.Decimal, int,  | decimal.Decimal,  | Timestamp in epoch format. | [optional] 
**timestamp_utc** | str,  | str,  | Timestamp in UTC format. | [optional] 
**type** | str,  | str,  | response | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# data

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**battery_mode** | str,  | str,  | Battery mode of the site. Available values are Savings Mode, Full Backup, and Self-consumption. | [optional] 
**battery_power** | decimal.Decimal, int,  | decimal.Decimal,  | Battery power in watts; Power will be positive in case of discharge and negative in case of charge. | [optional] 
**battery_soc** | decimal.Decimal, int,  | decimal.Decimal,  | Battery soc in percentage. | [optional] 
**consumption_power** | decimal.Decimal, int,  | decimal.Decimal,  | Consumption power in watts. | [optional] 
**[envoy_serial_number](#envoy_serial_number)** | list, tuple,  | tuple,  |  | [optional] 
**generator_power** | decimal.Decimal, int,  | decimal.Decimal,  | Generator power in watts. | [optional] 
**grid_power** | decimal.Decimal, int,  | decimal.Decimal,  | Grid power in watts; Power will be negative in case of export and positive in case of import. | [optional] 
**grid_status** | str,  | str,  | Grid state of the site. Available values are On Grid, Off Grid, Unknown. | [optional] 
**pv_power** | decimal.Decimal, int,  | decimal.Decimal,  | PV power in watts. | [optional] 
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | The unique numeric ID of the system. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# envoy_serial_number

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  | Serial number of the envoy; For multi-envoy sites, the data will be returned only for one of the envoys. | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

