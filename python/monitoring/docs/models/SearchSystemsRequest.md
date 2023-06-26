# monitoring.model.search_systems_request.SearchSystemsRequest

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[system](#system)** | dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 
**sort_by** | [**SystemSortByEnum**](SystemSortByEnum.md) | [**SystemSortByEnum**](SystemSortByEnum.md) |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# system

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[ids](#ids)** | list, tuple,  | tuple,  | Filter system by particular Ids. | [optional] 
**name** | str,  | str,  | Search by name of the system. | [optional] 
**public_name** | [**SystemPublicNameEnum**](SystemPublicNameEnum.md) | [**SystemPublicNameEnum**](SystemPublicNameEnum.md) |  | [optional] 
**[statuses](#statuses)** | list, tuple,  | tuple,  | Search by System status. | [optional] 
**connection_type** | [**SystemConnectionTypeEnum**](SystemConnectionTypeEnum.md) | [**SystemConnectionTypeEnum**](SystemConnectionTypeEnum.md) |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# ids

Filter system by particular Ids.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Filter system by particular Ids. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | decimal.Decimal, int,  | decimal.Decimal,  |  | 

# statuses

Search by System status.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Search by System status. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**SystemStatusEnum**](SystemStatusEnum.md) | [**SystemStatusEnum**](SystemStatusEnum.md) | [**SystemStatusEnum**](SystemStatusEnum.md) |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

