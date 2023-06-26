# commissioning.model.user.User

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**active** | bool,  | BoolClass,  | Whether the user is allowed to log in to Enlighten. | [optional] 
**[user_roles](#user_roles)** | list, tuple,  | tuple,  | What type of user this is in Enlighten. For self installer user user_roles will be [&#x27;self_installer&#x27;]. For other users user_roles will be empty. | [optional] 
**email** | str,  | str,  | Email address of the user. | [optional] 
**enlighten_emails** | bool,  | BoolClass,  | Whether the user receives automated emails from Enlighten. | [optional] 
**enlighten_view** | str,  | str,  | Which view of Enlighten the user has. | [optional] 
**first_name** | str,  | str,  | User&#x27;s first name. | [optional] 
**last_name** | str,  | str,  | User&#x27;s last name. | [optional] 
**phone** | str,  | str,  | Telephone number of the user. | [optional] 
**uri** | str,  | str,  | URI to the show() method for the user. System-generated. | [optional] 
**user_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the user. System-generated. | [optional] 
**updated_at** | decimal.Decimal, int,  | decimal.Decimal,  | Last updated date and time in Epoch format. | [optional] value must be a 64 bit integer
**company** | [**Company**](Company.md) | [**Company**](Company.md) |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# user_roles

What type of user this is in Enlighten. For self installer user user_roles will be ['self_installer']. For other users user_roles will be empty.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | What type of user this is in Enlighten. For self installer user user_roles will be [&#x27;self_installer&#x27;]. For other users user_roles will be empty. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**UserRoleEnum**](UserRoleEnum.md) | [**UserRoleEnum**](UserRoleEnum.md) | [**UserRoleEnum**](UserRoleEnum.md) |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

