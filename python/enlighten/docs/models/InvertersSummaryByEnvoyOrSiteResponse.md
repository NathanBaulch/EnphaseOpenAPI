# enlighten.model.inverters_summary_by_envoy_or_site_response.InvertersSummaryByEnvoyOrSiteResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[micro_inverters](#micro_inverters)** | list, tuple,  | tuple,  | A list of active inverters on this system, including serial and model numbers. | 
**signal_strength** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# micro_inverters

A list of active inverters on this system, including serial and model numbers.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | A list of active inverters on this system, including serial and model numbers. | 

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
**proc_load** | str,  | str,  |  | 
**serial_number** | str,  | str,  | The serial number of this Microinverter. | 
**last_report_date** | str, date,  | str,  | The last time this device submitted a report, by default expressed in Unix epoch time. If Enlighten has no record of a report from this Envoy, returns null. | value must conform to RFC-3339 full-date YYYY-MM-DD
**[power_produced](#power_produced)** | dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 
**envoy_serial_number** | str,  | str,  |  | 
**part_number** | str,  | str,  | The Enphase part number of this Microinverter. | 
**grid_profile** | str,  | str,  |  | 
**model** | str,  | str,  | Model number of this Microinverter. | 
**id** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**sku** | str,  | str,  |  | 
**param_table** | str,  | str,  |  | 
**[energy](#energy)** | dict, frozendict.frozendict,  | frozendict.frozendict,  | Returns the lifetime energy of the Microinverter. If the system has never produced energy, the energy value would be 0. | 
**status** | str,  | str,  | The current status of this Microinverter. * &#x60;normal&#x60; - The microinverter is operating normally. * &#x60;power&#x60; - There is a production issue. * &#x60;micro&#x60; - The microinverter is not reporting. * &#x60;retired&#x60; - The microinverter is retired. | must be one of ["normal", "power", "micro", "retired", ] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# power_produced

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**precision** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**units** | str,  | str,  |  | must be one of ["W", ] 
**value** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# energy

Returns the lifetime energy of the Microinverter. If the system has never produced energy, the energy value would be 0.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | Returns the lifetime energy of the Microinverter. If the system has never produced energy, the energy value would be 0. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**precision** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**units** | str,  | str,  |  | must be one of ["Wh", "kJ", ] 
**value** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

