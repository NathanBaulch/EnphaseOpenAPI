# commissioning.model.create_user_request.CreateUserRequest

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
**enlighten_view** | str,  | str,  | Which view of Enlighten the user has. Options &#x27;my&#x27; for MyEnlighten, &#x27;manager&#x27; for Enlighten Manager. Default &#x27;my&#x27;. Users who do not belong to companies should be set to &#x27;my&#x27;. You must have an agreement with Enphase Energy to set a user to &#x27;manager&#x27;. Company ID is required when enlighten_view is &#x27;manager&#x27;. | [optional] 
**phone** | str,  | str,  | Telephone number of the user. Optional. | [optional] 
**company_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten-generated ID of the company to which the user belongs, if any. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

