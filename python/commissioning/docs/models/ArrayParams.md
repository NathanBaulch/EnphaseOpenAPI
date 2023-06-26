# commissioning.model.array_params.ArrayParams

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**top** | decimal.Decimal, int,  | decimal.Decimal,  | Top axis position of array. Increase the value to move the array up, and decrease to move it down. | 
**left** | decimal.Decimal, int,  | decimal.Decimal,  | Left axis position of array. Increase the value to move the array to the right, and decrease to move it to the left. | 
**angle** | decimal.Decimal, int,  | decimal.Decimal,  | Angle of the array. Rotate the array clockwise by the given value. | 
**label** | str,  | str,  | Name of the array. | 
**tilt** | str,  | str,  | Tilt of the array. | 
**provisioned_envoy** | str,  | str,  | Provisioned envoy. | 
**[modules](#modules)** | list, tuple,  | tuple,  |  | 
**id** | decimal.Decimal, int,  | decimal.Decimal,  | ID of the array. ID cannot be changed. It is only used to identify the array that needs to be updated. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# modules

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
**top** | decimal.Decimal, int,  | decimal.Decimal,  | Top axis position of module w.r.t Array. Increase the value to move the module up, and decrease to move it down. | 
**left** | decimal.Decimal, int,  | decimal.Decimal,  | Left axis position of module w.r.t Array. Increase the value to move the module to the right, and decrease to move it to the left. | 
**angle** | decimal.Decimal, int,  | decimal.Decimal,  | Angle of the module. Rotate the module clockwise by the given value w.r.t array angle. For example to rotate the array clockwise by 90 degrees pass 90. | 
**serial_num** | str,  | str,  | Inverter serial number mapped with this module. | 
**id** | decimal.Decimal, int,  | decimal.Decimal,  | ID of the module. ID cannot be changed. It is only used to identify the array that needs to be updated. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

