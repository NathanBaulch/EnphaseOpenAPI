# monitoring.model.battery_settings.BatterySettings

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**system_id** | decimal.Decimal, int,  | decimal.Decimal,  |  | [optional] 
**battery_mode** | str,  | str,  | Current battery mode of the system. Available values are Savings Mode, Full Backup, and Self - Consumption. | [optional] 
**reserve_soc** | decimal.Decimal, int,  | decimal.Decimal,  | Reserve soc for the current mode. | [optional] 
**energy_independence** | str,  | str,  | Energy independence after peak hours enabled/disabled. Enabled: Battery will discharge to save money during peak hours when electricity rates are high. Once that is done, energy independence is prioritized. This will increase the energy self-sufficiency until the reserve soc is hit. Battery will charge from solar in the morning to get ready for the next period. Disabled: Battery will discharge only during peak hours when electricity rates are high. During other times, battery will be idle or will charge from solar in the morning to get ready for the next period. | [optional] 
**charge_from_grid** | str,  | str,  | Charge battery from grid enabled/disabled. Enabled: Battery may also charge from the grid when in full backup mode or when battery charge is below the reserve capacity in savings or self-consumption mode. | [optional] 
**battery_shutdown_level** | decimal.Decimal, int,  | decimal.Decimal,  | Level at which battery shutdowns to conserve energy. Battery restarts by using the conserved energy when the utility grid restores power or solar panels start producing energy. | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

