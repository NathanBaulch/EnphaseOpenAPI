# monitoring.model.get_system_energy_import_telemetry_response.GetSystemEnergyImportTelemetryResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | Unique numeric ID of the system. | [optional] 
**granularity** | str,  | str,  | Granularity of the telemetry data. Default is &#x27;day&#x27;. | [optional] 
**total_devices** | decimal.Decimal, int,  | decimal.Decimal,  | Number of consumption meters in the site. | [optional] 
**start_at** | decimal.Decimal, int,  | decimal.Decimal,  | Start time of the data series. Either start_date or start_at will be present. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response. | [optional] value must be a 64 bit integer
**end_at** | decimal.Decimal, int,  | decimal.Decimal,  | End time of the data series. Either end_date or end_at will be present. By default end_at will appear in response. If end_date parameter is passed in the url then end_date field will appear in response. | [optional] value must be a 64 bit integer
**items** | str,  | str,  | List key &#x27;intervals&#x27;. | [optional] 
**[intervals](#intervals)** | list, tuple,  | tuple,  | An array of telemetry objects. | [optional] 
**meta** | [**Meta**](Meta.md) | [**Meta**](Meta.md) |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# intervals

An array of telemetry objects.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | An array of telemetry objects. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[items](#items) | list, tuple,  | tuple,  |  | 

# items

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

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
**wh_imported** | decimal.Decimal, int,  | decimal.Decimal,  | Energy imported (in Watt-Hours) during that period. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

