# commissioning.model.system.System

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
**timezone** | str,  | str,  | System&#x27;s timezone. | [optional] 
**stage** | decimal.Decimal, int,  | decimal.Decimal,  | What stage of the activation process this activation is in. System-generated. | [optional] 
**internet_connection** | [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) | [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  | [optional] 
**lease** | bool,  | BoolClass,  | Whether the system is leased. Default false. | [optional] 
**operational** | bool,  | BoolClass,  | Whether this system is permitted to operate. Default true. | [optional] 
**[owner](#owner)** | dict, frozendict.frozendict,  | frozendict.frozendict,  | Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. If the query parameter &#x27;expand&#x3D;owner&#x27; passed in the request owner detail will appear in the response. | [optional] 
**owner_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of this system owner. System-generated. This field is optional. | [optional] 
**[host](#host)** | dict, frozendict.frozendict,  | frozendict.frozendict,  | Name of the system host. If the query parameter &#x27;expand&#x3D;host&#x27; passed in the request host detail will appear in the response. | [optional] 
**host_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of this system host. System-generated. This field is optional. | [optional] 
**installer_name** | str,  | str,  | Name of the installer. | [optional] 
**installer_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the installer of this system. Defaults to current user&#x27;s company ID. | [optional] 
**maintainer_name** | str,  | str,  | Name of the maintainer. | [optional] 
**maintainer_id** | decimal.Decimal, int,  | decimal.Decimal,  | The Enlighten ID of the maintainer of this system. Defaults to current user&#x27;s company ID. | [optional] 
**[authorized_subcontractors](#authorized_subcontractors)** | list, tuple,  | tuple,  | List of sub-contractors of this system. | [optional] 
**uri** | str,  | str,  | URI for this activation. | [optional] 
**updated_at** | decimal.Decimal, int,  | decimal.Decimal,  | Activation last updated timestamp. | [optional] value must be a 64 bit integer
**reference** | str,  | str,  | Identifier of this system as provided by the calling user&#x27;s company. This attribute is not present if the calling user&#x27;s company does not have a reference for this system. | [optional] 
**[other_references](#other_references)** | list, tuple,  | tuple,  | Identifiers assigned to this activation by other companies which have access to it. This attribute is not present if there are no other references for this system. | [optional] 
**allow_public_access** | bool,  | BoolClass,  | When true, the system will be eligible to appear in the public systems lists of Enphase and the system&#x27;s installer. Default true. | [optional] 
**interconnect_date** | str, date,  | str,  | When the system was approved to connect to the grid. | [optional] value must conform to RFC-3339 full-date YYYY-MM-DD
**installer_support_email** | str,  | str,  | Installer support email. | [optional] 
**source** | [**SystemSourceEnum**](SystemSourceEnum.md) | [**SystemSourceEnum**](SystemSourceEnum.md) |  | [optional] 
**array_type** | [**SystemArrayTypeEnum**](SystemArrayTypeEnum.md) | [**SystemArrayTypeEnum**](SystemArrayTypeEnum.md) |  | [optional] 
**attachment_type** | [**SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) | [**SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) |  | [optional] 
**ensemble_envoy** | str,  | str,  | Specifies serial number of ensemble envoy in multi envoy system. | [optional] 
**production_mode** | [**SystemProductionModeEnum**](SystemProductionModeEnum.md) | [**SystemProductionModeEnum**](SystemProductionModeEnum.md) |  | [optional] 
**grid_profile** | str,  | str,  | Grid profile to set on this system&#x27;s microinverters. See GridProfiles API for how to retrieve a list of known profiles. | [optional] 
**requested_profile** | str,  | str,  |  | [optional] 
**requested_report_freq** | str,  | str,  |  | [optional] 
**voltage** | str,  | str,  | Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists &amp; installer&#x27;s country is not inside North America, or if the system&#x27;s country is not inside North America, then the voltage value would be null. | [optional] 
**[envoy_serial_numbers](#envoy_serial_numbers)** | list, tuple,  | tuple,  | A list of Envoys installed on this system. | [optional] 
**expected_envoy_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total envoys the system is supposed to have. | [optional] 
**expected_pcu_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total PCUs the system is supposed to have. | [optional] 
**expected_nsr_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total nsrs the system is supposed to have. | [optional] 
**expected_meter_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total meters the system is supposed to have. | [optional] 
**expected_encharge_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total encharges the system is supposed to have. | [optional] 
**expected_enpower_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total enpowers the system is supposed to have. | [optional] 
**pv_manufacturer** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs. | [optional] 
**pv_manufacturer_name** | str,  | str,  | Name of the Custom PV module manufacturer associated with the system. | [optional] 
**pv_model** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs. | [optional] 
**pv_model_name** | str,  | str,  | Name of the Custom PV module model associated with the system. | [optional] 
**pv_module_power_rating** | decimal.Decimal, int, float,  | decimal.Decimal,  | Power rating (in W) of the PV module installed on the system. | [optional] value must be a 32 bit float
**pv_module_type** | decimal.Decimal, int,  | decimal.Decimal,  | Type ID of the PV module installed on the system. 1 -&gt; &#x27;Mono-facial&#x27;, 2 -&gt; &#x27;Bi-facial&#x27;, 3 -&gt; &#x27;Split cell&#x27;, 4 -&gt; &#x27;Other&#x27;. | [optional] 
**[encharge](#encharge)** | list, tuple,  | tuple,  | Encharge detail. | [optional] 
**[enpower](#enpower)** | list, tuple,  | tuple,  | Enpower detail. | [optional] 
**address** | [**Address**](Address.md) | [**Address**](Address.md) |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# owner

Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. If the query parameter 'expand=owner' passed in the request owner detail will appear in the response.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | Name of the system owner. Owner must be an Enlighten user. If the user of the API is a self-installer, the owner must be himself. If the query parameter &#x27;expand&#x3D;owner&#x27; passed in the request owner detail will appear in the response. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**first_name** | str,  | str,  |  | [optional] 
**last_name** | str,  | str,  |  | [optional] 
**email** | str,  | str,  |  | [optional] 
**phone** | str,  | str,  |  | [optional] 
**active** | bool,  | BoolClass,  | Whether the user is allowed to log in to Enlighten. Values true, false. Default true. | [optional] 
**user_id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**[user_roles](#user_roles)** | list, tuple,  | tuple,  | What type of user this is in Enlighten. For self installer user user_roles will be [&#x27;self_installer&#x27;]. For other users user_roles will be empty. | [optional] 
**enlighten_emails** | bool,  | BoolClass,  |  | [optional] 
**enlighten_view** | str,  | str,  |  | [optional] 
**uri** | str,  | str,  |  | [optional] 
**updated_at** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] value must be a 64 bit integer
**[company](#company)** | dict, frozendict.frozendict,  | frozendict.frozendict,  | A hash of information about the owner&#x27;s company. Use the query parameter &#x27;expand&#x3D;owner.company&#x27; to get owner company detail. | [optional] 
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

# company

A hash of information about the owner's company. Use the query parameter 'expand=owner.company' to get owner company detail.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | A hash of information about the owner&#x27;s company. Use the query parameter &#x27;expand&#x3D;owner.company&#x27; to get owner company detail. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**company_id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**company_name** | str,  | str,  |  | [optional] 
**location** | str,  | str,  |  | [optional] 
**[roles](#roles)** | list, tuple,  | tuple,  | What type of company this is in Enphase. For installer company roles will be [&#x27;installer&#x27;]. For other role roles will be empty. | [optional] 
**uri** | str,  | str,  |  | [optional] 
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

# host

Name of the system host. If the query parameter 'expand=host' passed in the request host detail will appear in the response.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | Name of the system host. If the query parameter &#x27;expand&#x3D;host&#x27; passed in the request host detail will appear in the response. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**first_name** | str,  | str,  |  | [optional] 
**last_name** | str,  | str,  |  | [optional] 
**email** | str,  | str,  |  | [optional] 
**phone** | str,  | str,  |  | [optional] 
**active** | bool,  | BoolClass,  | Whether the user is allowed to log in to Enlighten. Values true, false. Default true. | [optional] 
**user_id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**[user_roles](#user_roles)** | list, tuple,  | tuple,  | What type of user this is in Enlighten. For self installer user user_roles will be [&#x27;self_installer&#x27;]. For other users user_roles will be empty. | [optional] 
**enlighten_emails** | bool,  | BoolClass,  |  | [optional] 
**enlighten_view** | str,  | str,  |  | [optional] 
**uri** | str,  | str,  |  | [optional] 
**updated_at** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] value must be a 64 bit integer
**[company](#company)** | dict, frozendict.frozendict,  | frozendict.frozendict,  | A hash of information about the system host&#x27;s company. Use the query parameter &#x27;expand&#x3D;host.company&#x27; to get system host company detail. | [optional] 
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

# company

A hash of information about the system host's company. Use the query parameter 'expand=host.company' to get system host company detail.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | A hash of information about the system host&#x27;s company. Use the query parameter &#x27;expand&#x3D;host.company&#x27; to get system host company detail. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**company_id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**company_name** | str,  | str,  |  | [optional] 
**location** | str,  | str,  |  | [optional] 
**[roles](#roles)** | list, tuple,  | tuple,  | What type of company this is in Enphase. For installer company roles will be [&#x27;installer&#x27;]. For other role roles will be empty. | [optional] 
**uri** | str,  | str,  |  | [optional] 
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

# authorized_subcontractors

List of sub-contractors of this system.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | List of sub-contractors of this system. | 

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
**authorized_subcontractor_id** | decimal.Decimal, int,  | decimal.Decimal,  | The Enlighten ID of the sub-contractor of this system. System-generated. | [optional] 
**authorized_subcontractor_name** | str,  | str,  | Name of the sub-contractor of this system. | [optional] 
**status** | str,  | str,  | Current status of the subcontractor for the site. This field will be shown only for pending and rejected sub-contractors. | [optional] 
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

# envoy_serial_numbers

A list of Envoys installed on this system.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | A list of Envoys installed on this system. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  | Envoy serial number. | 

# encharge

Encharge detail.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Encharge detail. | 

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
**envoy_serial_number** | str,  | str,  | Envoy serial number. | [optional] 
**[encharge_serial_numbers](#encharge_serial_numbers)** | list, tuple,  | tuple,  | Encharge serial numbers. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# encharge_serial_numbers

Encharge serial numbers.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Encharge serial numbers. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  | Encharge serial number. | 

# enpower

Enpower detail.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Enpower detail. | 

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
**envoy_serial_number** | str,  | str,  | Envoy serial number. | [optional] 
**[enpower_serial_numbers](#enpower_serial_numbers)** | list, tuple,  | tuple,  | Enpower serial numbers. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# enpower_serial_numbers

Enpower serial numbers.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | Enpower serial numbers. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  | Enpower serial number. | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

