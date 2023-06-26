# commissioning.model.array.Array

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**id** | decimal.Decimal, int,  | decimal.Decimal,  | ID of the array. | [optional] 
**label** | str,  | str,  | Name of the array. | [optional] 
**angle** | decimal.Decimal, int,  | decimal.Decimal,  | Angle of the array. | [optional] 
**tilt** | str,  | str,  | Tilt of the array. | [optional] 
**[reporting_envoys](#reporting_envoys)** | list, tuple,  | tuple,  | List of envoys serial numbers. | [optional] 
**provisioned_envoy** | str,  | str,  | Provisioned envoy. | [optional] 
**updated_at** | decimal.Decimal, int,  | decimal.Decimal,  | Last updated Epoch time. | [optional] value must be a 64 bit integer
**left** | decimal.Decimal, int,  | decimal.Decimal,  | Left axis position of array. | [optional] 
**top** | decimal.Decimal, int,  | decimal.Decimal,  | Top axis position of array. | [optional] 
**[modules](#modules)** | list, tuple,  | tuple,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# reporting_envoys

List of envoys serial numbers.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | List of envoys serial numbers. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  |  | 

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
**id** | decimal.Decimal, int,  | decimal.Decimal,  | ID of the module. | [optional] 
**left** | decimal.Decimal, int,  | decimal.Decimal,  | Left axis position of module. | [optional] 
**top** | decimal.Decimal, int,  | decimal.Decimal,  | Top axis position of module. | [optional] 
**angle** | decimal.Decimal, int,  | decimal.Decimal,  | Angle of the module. | [optional] 
**serial_num** | str,  | str,  | Inverter serial number mapped with this module. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

