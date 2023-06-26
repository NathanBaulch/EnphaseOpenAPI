# commissioning.model.system_params.SystemParams

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**system_name** | str,  | str,  | Name of the system. Limit 255 characters. | 
**system_type** | [**SystemTypeEnum**](SystemTypeEnum.md) | [**SystemTypeEnum**](SystemTypeEnum.md) |  | [optional] 
**internet_connection** | [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) | [**SystemInternetConnectionEnum**](SystemInternetConnectionEnum.md) |  | [optional] 
**lease** | bool,  | BoolClass,  | Whether the system is leased. Default false. | [optional] 
**operational** | bool,  | BoolClass,  | Whether this system is permitted to operate. Default true. | [optional] 
**owner_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the system owner. Owner must be an Enlighten user. Optional. If the user of the API is a self-installer, the owner must be himself. If the user of the API is an installer then use the Search user API to get the owner user ID. If the owner not exist in the enlighten then use Create home owner API to create it newly. | [optional] 
**host_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the system host. System host must be an Enlighten user. Optional. If the user of the API is an installer then use the Search user API to get the host user ID. If the host not exist in the enlighten then use Create home owner API to create it newly. | [optional] 
**installer_id** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the installer of this system. Defaults to current user&#x27;s company ID. | [optional] 
**allow_public_access** | bool,  | BoolClass,  | When true, the system will be eligible to appear in the public systems lists of Enphase and the system&#x27;s installer. Default true. | [optional] 
**interconnect_date** | str, date,  | str,  | When the system was approved to connect to the grid. | [optional] value must conform to RFC-3339 full-date YYYY-MM-DD
**source** | [**SystemSourceEnum**](SystemSourceEnum.md) | [**SystemSourceEnum**](SystemSourceEnum.md) |  | [optional] 
**array_type** | [**SystemArrayTypeEnum**](SystemArrayTypeEnum.md) | [**SystemArrayTypeEnum**](SystemArrayTypeEnum.md) |  | [optional] 
**attachment_type** | [**SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) | [**SystemAttachmentTypeEnum**](SystemAttachmentTypeEnum.md) |  | [optional] 
**ensemble_envoy** | str,  | str,  | Specifies serial number of ensemble envoy in multi envoy system. | [optional] 
**grid_profile** | str,  | str,  | Grid profile to set on this system&#x27;s microinverters. See GridProfiles API for how to retrieve a list of known profiles. | [optional] 
**requested_profile** | str,  | str,  |  | [optional] 
**requested_report_freq** | str,  | str,  |  | [optional] 
**voltage** | str,  | str,  | Supported voltage/phase associated with a commercial system inside North America. If system type is not commercial, or if the installer exists &amp; installer&#x27;s country is not inside North America, or if the system&#x27;s country is not inside North America, then the voltage value would be null. | [optional] 
**[envoy_serial_numbers](#envoy_serial_numbers)** | list, tuple,  | tuple,  | A list of Envoys installed on this system. | [optional] 
**pv_manufacturer** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the PV manufacturer associated with the PV model installed on the system. See PvManufacturers for how to retrieve PV manufacturer IDs. | [optional] 
**pv_manufacturer_name** | str,  | str,  | Name of the Custom PV module manufacturer associated with the system. | [optional] 
**pv_model** | decimal.Decimal, int,  | decimal.Decimal,  | Enlighten ID of the PV model installed on the system. See PvManufacturers and PvModels for how to retrieve PV model IDs. | [optional] 
**pv_model_name** | str,  | str,  | Name of the Custom PV module model associated with the system. | [optional] 
**pv_module_power_rating** | decimal.Decimal, int, float,  | decimal.Decimal,  | Power rating (in W) of the PV module installed on the system. | [optional] value must be a 32 bit float
**pv_module_type** | decimal.Decimal, int,  | decimal.Decimal,  | Type ID of the PV module installed on the system. 1 -&gt; &#x27;Mono-facial&#x27;, 2 -&gt; &#x27;Bi-facial&#x27;, 3 -&gt; &#x27;Split cell&#x27;, 4 -&gt; &#x27;Other&#x27;. | [optional] 
**expected_envoy_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total envoys the system is supposed to have. | [optional] 
**expected_pcu_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total PCUs the system is supposed to have. | [optional] 
**expected_acb_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total acbs the system is supposed to have. | [optional] 
**expected_nsr_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total nsrs the system is supposed to have. | [optional] 
**expected_meter_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total meters the system is supposed to have. | [optional] 
**expected_encharge_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total encharges the system is supposed to have. | [optional] 
**expected_enpower_count** | decimal.Decimal, int,  | decimal.Decimal,  | Total enpowers the system is supposed to have. | [optional] 
**reference** | str,  | str,  | Identifier of this system as provided by the calling user&#x27;s company. This attribute is not present if the calling user&#x27;s company does not have a reference for this system. This value should be alphanumeric. | [optional] 
**[encharge](#encharge)** | list, tuple,  | tuple,  | Encharge detail. | [optional] 
**[enpower](#enpower)** | list, tuple,  | tuple,  | Enpower detail. | [optional] 
**[address](#address)** | dict, frozendict.frozendict,  | frozendict.frozendict,  | Location of the system. Use the ISO 3166-1 2-letter code for the country. Latitude and longitude are calculated by Enlighten, not provided by the client. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# envoy_serial_numbers

A list of Envoys installed on this system.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  | A list of Envoys installed on this system. | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
items | str,  | str,  |  | 

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
items | str,  | str,  |  | 

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
items | str,  | str,  |  | 

# address

Location of the system. Use the ISO 3166-1 2-letter code for the country. Latitude and longitude are calculated by Enlighten, not provided by the client.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  | Location of the system. Use the ISO 3166-1 2-letter code for the country. Latitude and longitude are calculated by Enlighten, not provided by the client. | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**country** | str,  | str,  |  | 
**city** | str,  | str,  |  | 
**street1** | str,  | str,  |  | 
**state** | str,  | str,  |  | 
**postal_code** | str,  | str,  |  | 
**street2** | str,  | str,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

