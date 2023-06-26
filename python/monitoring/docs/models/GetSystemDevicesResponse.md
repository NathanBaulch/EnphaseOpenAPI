# monitoring.model.get_system_devices_response.GetSystemDevicesResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | System ID. | [optional] 
**total_devices** | decimal.Decimal, int,  | decimal.Decimal,  | Total active devices associated with the system. | [optional] 
**items** | str,  | str,  | List key. | [optional] 
**[devices](#devices)** | dict, frozendict.frozendict,  | frozendict.frozendict,  | Hash keys include all the possible device types micros, meters, gateways, mids, q_relays, ACBs, Encharges, Enpowers (if the devices of this type are present). For all the device types, the object will contain the serial_number and model with some additional information pertaining to the device type. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# devices

Hash keys include all the possible device types micros, meters, gateways, mids, q_relays, ACBs, Encharges, Enpowers (if the devices of this type are present). For all the device types, the object will contain the serial_number and model with some additional information pertaining to the device type.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | Hash keys include all the possible device types micros, meters, gateways, mids, q_relays, ACBs, Encharges, Enpowers (if the devices of this type are present). For all the device types, the object will contain the serial_number and model with some additional information pertaining to the device type. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[any_string_name](#any_string_name)** | list, tuple,  | tuple,  | any string name can be used but the value must be the correct type | [optional] 

# any_string_name

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
**id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**last_report_at** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] value must be a 64 bit integer
**name** | str,  | str,  |  | [optional] 
**serial_number** | str,  | str,  |  | [optional] 
**part_number** | str,  | str,  |  | [optional] 
**emu_sw_version** | str,  | str,  |  | [optional] 
**sku** | str,  | str,  |  | [optional] 
**model** | str,  | str,  |  | [optional] 
**status** | str,  | str,  |  | [optional] 
**active** | bool,  | BoolClass,  |  | [optional] 
**state** | str,  | str,  |  | [optional] 
**config_type** | str,  | str,  |  | [optional] 
**[cellular_modem](#cellular_modem)** | dict, frozendict.frozendict,  | frozendict.frozendict,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# cellular_modem

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**imei** | str,  | str,  |  | [optional] 
**part_num** | str,  | str,  |  | [optional] 
**sku** | str,  | str,  |  | [optional] 
**plan_start_date** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] value must be a 64 bit integer
**plan_end_date** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] value must be a 64 bit integer
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

