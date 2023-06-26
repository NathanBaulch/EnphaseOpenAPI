# enlighten.model.meta.Meta

Information about the system that you can use to ascertain the timeliness of the production data included in the response.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | Information about the system that you can use to ascertain the timeliness of the production data included in the response. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**last_report_at** | decimal.Decimal, int,  | decimal.Decimal,  |  | value must be a 64 bit integer
**last_energy_at** | decimal.Decimal, int,  | decimal.Decimal,  |  | value must be a 64 bit integer
**operational_at** | decimal.Decimal, int,  | decimal.Decimal,  |  | value must be a 64 bit integer
**status** | [**Status**](Status.md) | [**Status**](Status.md) |  | 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

