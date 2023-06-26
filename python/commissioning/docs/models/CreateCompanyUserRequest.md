# commissioning.model.create_company_user_request.CreateCompanyUserRequest

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**last_name** | str,  | str,  | User&#x27;s last name. Required. | 
**first_name** | str,  | str,  | User&#x27;s first name. Required. | 
**email** | str,  | str,  | Email address of the user. Must be unique within Enlighten. Required. | 
**enlighten_emails** | bool,  | BoolClass,  | Whether the user receives automated emails from Enlighten. Default false. | [optional] 
**phone** | str,  | str,  | Telephone number of the user. Optional. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

