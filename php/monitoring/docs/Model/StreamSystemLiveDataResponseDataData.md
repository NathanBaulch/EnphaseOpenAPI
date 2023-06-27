# # StreamSystemLiveDataResponseDataData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**battery_mode** | **string** | Battery mode of the site. Available values are Savings Mode, Full Backup, and Self-consumption. | [optional]
**battery_power** | **int** | Battery power in watts; Power will be positive in case of discharge and negative in case of charge. | [optional]
**battery_soc** | **int** | Battery soc in percentage. | [optional]
**consumption_power** | **int** | Consumption power in watts. | [optional]
**envoy_serial_number** | **string[]** |  | [optional]
**generator_power** | **int** | Generator power in watts. | [optional]
**grid_power** | **int** | Grid power in watts; Power will be negative in case of export and positive in case of import. | [optional]
**grid_status** | **string** | Grid state of the site. Available values are On Grid, Off Grid, Unknown. | [optional]
**pv_power** | **int** | PV power in watts. | [optional]
**system_id** | **int** | The unique numeric ID of the system. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
