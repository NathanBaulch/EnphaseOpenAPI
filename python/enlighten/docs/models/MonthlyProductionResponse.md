# enlighten.model.monthly_production_response.MonthlyProductionResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**end_date** | str, date,  | str,  | Last day included in the reporting period. | value must conform to RFC-3339 full-date YYYY-MM-DD
**production_wh** | decimal.Decimal, int,  | decimal.Decimal,  | Total production for the requested period in Watt-hours. | 
**meta** | [**Meta**](Meta.md) | [**Meta**](Meta.md) |  | 
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID for this system. | 
**[meter_readings](#meter_readings)** | list, tuple,  | tuple,  | If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty. | 
**start_date** | str, date,  | str,  | First day included in the reporting period. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | value must conform to RFC-3339 full-date YYYY-MM-DD
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# meter_readings

If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | If the system has any revenue-grade meters installed, the meter readings at the beginning and end of the reporting period are included here. Otherwise, the array is empty. | 

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
**start** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**end** | decimal.Decimal, int,  | decimal.Decimal,  |  | 
**serial_number** | str,  | str,  |  | 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

