# monitoring.model.get_systems_response.GetSystemsResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**total** | decimal.Decimal, int,  | decimal.Decimal,  | Total number of systems. | [optional] 
**current_page** | decimal.Decimal, int,  | decimal.Decimal,  | Number of the current page fetched. | [optional] 
**size** | decimal.Decimal, int,  | decimal.Decimal,  | Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100. | [optional] 
**count** | decimal.Decimal, int,  | decimal.Decimal,  | Total number of systems actually returned for the current page. | [optional] 
**items** | str,  | str,  | Named key of the list data. In this endpoint, it is systems. | [optional] 
**[systems](#systems)** | list, tuple,  | tuple,  | List of systems. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# systems

List of systems.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | List of systems. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**SystemDetails**](SystemDetails.md) | [**SystemDetails**](SystemDetails.md) | [**SystemDetails**](SystemDetails.md) |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

