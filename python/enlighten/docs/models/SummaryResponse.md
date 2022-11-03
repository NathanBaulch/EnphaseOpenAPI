# enlighten.model.summary_response.SummaryResponse

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**summary_date** | str, date,  | str,  | Effective date of the response. For historical requests, returns the date requested. For current requests, returns the current date. The format is &#x60;YYYY-mm-dd&#x60; unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | value must conform to RFC-3339 full-date YYYY-MM-DD
**last_report_at** | decimal.Decimal, int,  | decimal.Decimal,  | The last time an Envoy on this system reported. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | value must be a 64 bit integer
**size_w** | decimal.Decimal, int,  | decimal.Decimal,  | The size of the system, in Watts. For historical requests, returns 0. | 
**last_interval_end_at** | decimal.Decimal, int,  | decimal.Decimal,  | The last known time that the system produced energy. When a system has not been communicating for a length of time, the &#x60;last_report_at&#x60; can be recent, whereas the &#x60;last_interval_end_at&#x60; may be further back. | value must be a 64 bit integer
**energy_today** | decimal.Decimal, int,  | decimal.Decimal,  | Energy produced on the requested day, in Watt-hours. | 
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  | The Enlighten ID of the system. | 
**current_power** | decimal.Decimal, int,  | decimal.Decimal,  | Current power production, in Watts. For historical requests, returns 0. | 
**energy_lifetime** | decimal.Decimal, int,  | decimal.Decimal,  | Energy produced in the lifetime of the system, excluding the requested day, in Watt-hours. | 
**source** | str,  | str,  | Indicates whether the production of this system is measured by its microinverters (&#x60;microinverters&#x60;) or by revenue-grade meters (&#x60;meter&#x60;) installed on the system. | must be one of ["microinverters", "meter", ] 
**modules** | decimal.Decimal, int,  | decimal.Decimal,  | Number of active (not retired) modules. For historical requests, returns 0. | 
**operational_at** | decimal.Decimal, int,  | decimal.Decimal,  | The time at which this system became operational. Corresponds to the system&#x27;s interconnect time, if one is specified. Otherwise, it is the system&#x27;s first interval end time. The format is Unix epoch time unless you pass a &#x60;datetime_format&#x60; parameter as described [here](https://developer.enphase.com/docs#Datetimes). | value must be a 64 bit integer
**status** | [**Status**](Status.md) | [**Status**](Status.md) |  | 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

