# TheEnphaseMonitoringApi.StreamSystemLiveDataResponseDataData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batteryMode** | **String** | Battery mode of the site. Available values are Savings Mode, Full Backup, and Self-consumption. | [optional] 
**batteryPower** | **Number** | Battery power in watts; Power will be positive in case of discharge and negative in case of charge. | [optional] 
**batterySoc** | **Number** | Battery soc in percentage. | [optional] 
**consumptionPower** | **Number** | Consumption power in watts. | [optional] 
**envoySerialNumber** | **[String]** |  | [optional] 
**generatorPower** | **Number** | Generator power in watts. | [optional] 
**gridPower** | **Number** | Grid power in watts; Power will be negative in case of export and positive in case of import. | [optional] 
**gridStatus** | **String** | Grid state of the site. Available values are On Grid, Off Grid, Unknown. | [optional] 
**pvPower** | **Number** | PV power in watts. | [optional] 
**systemId** | **Number** | The unique numeric ID of the system. | [optional] 


