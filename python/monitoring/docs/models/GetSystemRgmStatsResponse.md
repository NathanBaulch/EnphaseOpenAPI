# monitoring.model.get_system_rgm_stats_response.GetSystemRgmStatsResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | System ID. | [optional] 
**total_devices** | decimal.Decimal, int,  | decimal.Decimal,  | Number of active revenue-grade meters for this system. | [optional] 
**meta** | [**Meta**](Meta.md) | [**Meta**](Meta.md) |  | [optional] 
**[intervals](#intervals)** | list, tuple,  | tuple,  | A list of intervals between the requested start and end times. | [optional] 
**[meter_intervals](#meter_intervals)** | list, tuple,  | tuple,  | A list of intervals of a meter between the requested start and end times. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# intervals

A list of intervals between the requested start and end times.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | A list of intervals between the requested start and end times. | 

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
**end_at** | decimal.Decimal, int,  | decimal.Decimal,  | End time of the telemetry interval. | [optional] value must be a 64 bit integer
**devices_reporting** | decimal.Decimal, int,  | decimal.Decimal,  | Number of revenue-grade meters that reported data for this interval at the time of the request. | [optional] 
**wh_del** | decimal.Decimal, int,  | decimal.Decimal,  | Energy delivered during this interval, in Wh. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# meter_intervals

A list of intervals of a meter between the requested start and end times.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | A list of intervals of a meter between the requested start and end times. | 

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
**meter_serial_number** | str,  | str,  | Meter serial number. | [optional] 
**envoy_serial_number** | str,  | str,  | Envoy serial number of the system that the micro reports to. | [optional] 
**[intervals](#intervals)** | list, tuple,  | tuple,  | Individual meter level interval. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# intervals

Individual meter level interval.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Individual meter level interval. | 

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
**channel** | decimal.Decimal, int,  | decimal.Decimal,  | Reporting channel ID. | [optional] 
**end_at** | decimal.Decimal, int,  | decimal.Decimal,  | End time of the telemetry interval. | [optional] value must be a 64 bit integer
**wh_del** | decimal.Decimal, int, float,  | decimal.Decimal,  | Energy delivered during this interval, in Wh (Watt-Hour). | [optional] value must be a 32 bit float
**curr_w** | decimal.Decimal, int,  | decimal.Decimal,  | Energy delivered during this interval, in W (Watts). | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

