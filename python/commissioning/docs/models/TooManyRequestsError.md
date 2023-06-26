# commissioning.model.too_many_requests_error.TooManyRequestsError

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**reason** | str,  | str,  | Response code. | [optional] 
**[message](#message)** | list, tuple,  | tuple,  |  | [optional] 
**period** | str,  | str,  | Quota exceeded for minute/month. | [optional] 
**period_start** | decimal.Decimal, int,  | decimal.Decimal,  | Starting period timestamp. | [optional] 
**period_end** | decimal.Decimal, int,  | decimal.Decimal,  | Ending period timestamp. | [optional] 
**limit** | decimal.Decimal, int,  | decimal.Decimal,  | Limit count for the period. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# message

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  | Error messages. | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

