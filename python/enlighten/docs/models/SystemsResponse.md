# enlighten.model.systems_response.SystemsResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[systems](#systems)** | list, tuple,  | tuple,  |  | 
**next** | str,  | str,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# systems

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
**country** | str,  | str,  | The two-letter code for the country where the system is located. See [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for reference. | 
**connection_type** | [**ConnectionType**](ConnectionType.md) | [**ConnectionType**](ConnectionType.md) |  | 
**city** | str,  | str,  | The name of the city where the system is located. | 
**meta** | [**Meta**](Meta.md) | [**Meta**](Meta.md) |  | 
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | The Enlighten ID of the system. | 
**timezone** | str,  | str,  | The timezone of the system. | 
**system_name** | str,  | str,  | The name of the system. Even if the system owner has indicated their site is anonymous for public lists, the actual system name is returned here for identification purposes. | 
**system_public_name** | str,  | str,  | The display name of the system. Use this when displaying the system name on a public list or view. | 
**state** | str,  | str,  | The two-letter code for the state where the system is located. See [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) for reference. | 
**postal_code** | str,  | str,  | The postal code where the system is located. | 
**status** | str,  | str,  | The current status of the system. You can find this and more in the &#x60;meta&#x60; property. | must be one of ["comm", "power", "meter", "meter_issue", "micro", "battery", "storage_idle", "normal", ] 
**reference** | str,  | str,  | If the calling user belongs to a company and that company has provided its own identifiers for a system, that ID is included here. Otherwise, this attribute is not returned. | [optional] 
**[other_references](#other_references)** | list, tuple,  | tuple,  | If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# other_references

If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | If any other companies have provided their own identifiers for a system, those identifiers are included here. Otherwise, this attribute is not returned. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

