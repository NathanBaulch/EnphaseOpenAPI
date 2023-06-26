# commissioning.model.get_partner_activations_response.GetPartnerActivationsResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**[systems](#systems)** | list, tuple,  | tuple,  | Zero or more activations. | [optional] 
**next** | str,  | str,  | If the first request does not return a full list, use the &#x27;next&#x27; attribute in the response body to request the next page. By default, activations are returned in batches of 10. The maximum page size is 1000. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# systems

Zero or more activations.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Zero or more activations. | 

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
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of this system. System-generated. | [optional] 
**system_name** | str,  | str,  | Name of the system. | [optional] 
**system_type** | [**SystemTypeEnum**](SystemTypeEnum.md) | [**SystemTypeEnum**](SystemTypeEnum.md) |  | [optional] 
**status** | str,  | str,  | System&#x27;s status. | [optional] 
**stage** | decimal.Decimal, int,  | decimal.Decimal,  | What stage of the activation process this activation is in. System-generated. | [optional] 
**internet_connection** | [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) | [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  | [optional] 
**lease** | bool,  | BoolClass,  | Whether the system is leased. Default false. | [optional] 
**operational** | bool,  | BoolClass,  | Whether this system is permitted to operate. Default true. | [optional] 
**owner** | str,  | str,  | Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. | [optional] 
**owner_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of this system owner. System-generated. | [optional] 
**host** | str,  | str,  | Name of the system host. Please see \&quot;Specifying an Owner and Lease Arrangement\&quot;, above, for more information. | [optional] 
**host_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of this system host. System-generated. | [optional] 
**installer_name** | str,  | str,  | Name of the installer. | [optional] 
**installer_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the installer of this system. Defaults to current user&#x27;s company ID. | [optional] 
**uri** | str,  | str,  | URI for this activation. | [optional] 
**updated_at** | decimal.Decimal, int,  | decimal.Decimal,  | Activation last updated timestamp. | [optional] value must be a 64 bit integer
**reference** | str,  | str,  | Identifier of this system as provided by the calling user&#x27;s company. This attribute is not present if the calling user&#x27;s company does not have a reference for this system. | [optional] 
**[other_references](#other_references)** | list, tuple,  | tuple,  | Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system. | [optional] 
**address** | [**Address**](Address.md) | [**Address**](Address.md) |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# other_references

Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  | Name of the reference. | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

