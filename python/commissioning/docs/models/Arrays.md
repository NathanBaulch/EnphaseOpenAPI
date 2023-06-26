# commissioning.model.arrays.Arrays

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | System ID. | [optional] 
**created_at** | decimal.Decimal, int,  | decimal.Decimal,  | System created Epoch time. | [optional] value must be a 64 bit integer
**updated_at** | decimal.Decimal, int,  | decimal.Decimal,  | System updated Epoch time. | [optional] value must be a 64 bit integer
**angle** | decimal.Decimal, int,  | decimal.Decimal,  | Angle of the system. | [optional] 
**[arrays](#arrays)** | list, tuple,  | tuple,  |  | [optional] 
**[inventory](#inventory)** | list, tuple,  | tuple,  | List of active inverter serial numbers. | [optional] 
**[inventory_details](#inventory_details)** | list, tuple,  | tuple,  |  | [optional] 
**[layers](#layers)** | list, tuple,  | tuple,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# arrays

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**Array**](Array.md) | [**Array**](Array.md) | [**Array**](Array.md) |  | 

# inventory

List of active inverter serial numbers.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | List of active inverter serial numbers. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  |  | 

# inventory_details

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
**type** | str,  | str,  | Device type. | [optional] 
**count** | decimal.Decimal, int,  | decimal.Decimal,  | Device count. | [optional] 
**serialNum** | str,  | str,  | Device serial number. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# layers

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
**file** | str,  | str,  | Background image url. | [optional] 
**scale** | decimal.Decimal, int,  | decimal.Decimal,  | Zoom level. | [optional] 
**angle** | decimal.Decimal, int,  | decimal.Decimal,  | Angle of the layer. | [optional] 
**opacity** | decimal.Decimal, int,  | decimal.Decimal,  | Opacity of the layer. | [optional] 
**width** | decimal.Decimal, int,  | decimal.Decimal,  | Width of the layer. | [optional] 
**height** | decimal.Decimal, int,  | decimal.Decimal,  | Height of the layer. | [optional] 
**left** | decimal.Decimal, int,  | decimal.Decimal,  | Left of the layer. | [optional] 
**top** | decimal.Decimal, int,  | decimal.Decimal,  | Top of the layer. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

