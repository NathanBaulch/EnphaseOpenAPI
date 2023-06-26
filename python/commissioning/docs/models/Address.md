# commissioning.model.address.Address

Location of the system. Use the ISO 3166-1 2-letter code for the country. Latitude and longitude are calculated by Enlighten, not provided by the client.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | Location of the system. Use the ISO 3166-1 2-letter code for the country. Latitude and longitude are calculated by Enlighten, not provided by the client. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**street1** | str,  | str,  | Street line 1. | [optional] 
**street2** | str,  | str,  | Street line 2. This field is optional. | [optional] 
**city** | str,  | str,  | City. | [optional] 
**state** | str,  | str,  | State. | [optional] 
**country** | str,  | str,  | Country. | [optional] 
**postal_code** | str,  | str,  | Postal code. | [optional] 
**latitude** | decimal.Decimal, int,  | decimal.Decimal,  | Latitude. | [optional] 
**longitude** | decimal.Decimal, int,  | decimal.Decimal,  | Longitude. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

