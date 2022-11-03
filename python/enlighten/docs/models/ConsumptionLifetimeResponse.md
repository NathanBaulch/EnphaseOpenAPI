# enlighten.model.consumption_lifetime_response.ConsumptionLifetimeResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**meta** | [**Meta**](Meta.md) | [**Meta**](Meta.md) |  | 
**[consumption](#consumption)** | list, tuple,  | tuple,  | An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period. | 
**start_date** | str, date,  | str,  | When no &#x60;start_date&#x60; parameter is specified on the request, this is the &#x60;operational_date&#x60; of the system. May be null if system has never produced. When a &#x60;start_date&#x60; parameter is included in the request, it is included here in the response. | value must conform to RFC-3339 full-date YYYY-MM-DD
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | The identifier of the system. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# consumption

An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | An array of consumption measurements, one for each day since consumption metering began, or one for each day of the requested period. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | decimal.Decimal, int,  | decimal.Decimal,  |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

