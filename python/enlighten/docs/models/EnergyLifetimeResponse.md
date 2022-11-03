# enlighten.model.energy_lifetime_response.EnergyLifetimeResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[production](#production)** | list, tuple,  | tuple,  | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | 
**meta** | [**Meta**](Meta.md) | [**Meta**](Meta.md) |  | 
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | The identifier of the system. | 
**start_date** | str, date,  | str,  | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | value must conform to RFC-3339 full-date YYYY-MM-DD
**[micro_production](#micro_production)** | list, tuple,  | tuple,  |  | [optional] 
**[meter_production](#meter_production)** | list, tuple,  | tuple,  |  | [optional] 
**meter_start_date** | str, date,  | str,  | The first day in the time series when measurements are taken from a meter instead of from microinverters. This field is not present unless the system has a meter. | [optional] value must conform to RFC-3339 full-date YYYY-MM-DD
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# production

An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | An array of production measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | decimal.Decimal, int,  | decimal.Decimal,  |  | 

# micro_production

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | decimal.Decimal, int,  | decimal.Decimal,  |  | 

# meter_production

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | decimal.Decimal, int,  | decimal.Decimal,  |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

