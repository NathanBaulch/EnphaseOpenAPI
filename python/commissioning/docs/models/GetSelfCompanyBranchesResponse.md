# commissioning.model.get_self_company_branches_response.GetSelfCompanyBranchesResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**company_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the API user&#x27;s company. | [optional] 
**company_name** | str,  | str,  | Name of the API user&#x27;s company. | [optional] 
**[branches](#branches)** | list, tuple,  | tuple,  | A list of branches belonging to the API user&#x27;s company. May be empty. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# branches

A list of branches belonging to the API user's company. May be empty.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | A list of branches belonging to the API user&#x27;s company. May be empty. | 

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
**company_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the company. | [optional] 
**company_name** | str,  | str,  | Name of the company. | [optional] 
**location** | str,  | str,  | Company location. | [optional] 
**[roles](#roles)** | list, tuple,  | tuple,  | What type of company this is in Enphase. For installer company roles will be [&#x27;installer&#x27;]. For other role roles will be empty. | [optional] 
**uri** | str,  | str,  | URI to the show() method for the company. System-generated. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# roles

What type of company this is in Enphase. For installer company roles will be ['installer']. For other role roles will be empty.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | What type of company this is in Enphase. For installer company roles will be [&#x27;installer&#x27;]. For other role roles will be empty. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**CompanyRoleEnum**](CompanyRoleEnum.md) | [**CompanyRoleEnum**](CompanyRoleEnum.md) | [**CompanyRoleEnum**](CompanyRoleEnum.md) |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

