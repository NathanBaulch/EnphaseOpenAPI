# enlighten.model.stats_response.StatsResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[intervals](#intervals)** | list, tuple,  | tuple,  | A list of intervals between the requested start and end times. | 
**total_devices** | decimal.Decimal, int,  | decimal.Decimal,  | Number of active microinverters for this system. | 
**meta** | [**Meta**](Meta.md) | [**Meta**](Meta.md) |  | 
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID for this system. | 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# intervals

A list of intervals between the requested start and end times.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | A list of intervals between the requested start and end times. | 

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
**end_at** | decimal.Decimal, int,  | decimal.Decimal,  | End date for interval. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | value must be a 64 bit integer
**enwh** | decimal.Decimal, int,  | decimal.Decimal,  | Energy produced by microinverters during this interval, in Watt-hours. | 
**devices_reporting** | decimal.Decimal, int,  | decimal.Decimal,  | Number of microinverters that reported data for this interval at the time of the request. | 
**powr** | decimal.Decimal, int,  | decimal.Decimal,  | Average power produced by microinverters during this interval, in Watts. | 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

