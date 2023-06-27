# EnphaseOpenAPI.Monitoring.Model.StreamSystemLiveDataResponseDataData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatteryMode** | **string** | Battery mode of the site. Available values are Savings Mode, Full Backup, and Self-consumption. | [optional] 
**BatteryPower** | **int** | Battery power in watts; Power will be positive in case of discharge and negative in case of charge. | [optional] 
**BatterySoc** | **int** | Battery soc in percentage. | [optional] 
**ConsumptionPower** | **int** | Consumption power in watts. | [optional] 
**EnvoySerialNumber** | **List&lt;string&gt;** |  | [optional] 
**GeneratorPower** | **int** | Generator power in watts. | [optional] 
**GridPower** | **int** | Grid power in watts; Power will be negative in case of export and positive in case of import. | [optional] 
**GridStatus** | **string** | Grid state of the site. Available values are On Grid, Off Grid, Unknown. | [optional] 
**PvPower** | **int** | PV power in watts. | [optional] 
**SystemId** | **int** | The unique numeric ID of the system. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

