# TheEnphaseMonitoringApi.BatterySettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **Number** |  | [optional] 
**batteryMode** | **String** | Current battery mode of the system. Available values are Savings Mode, Full Backup, and Self - Consumption. | [optional] 
**reserveSoc** | **Number** | Reserve soc for the current mode. | [optional] 
**energyIndependence** | **String** | Energy independence after peak hours enabled/disabled. Enabled: Battery will discharge to save money during peak hours when electricity rates are high. Once that is done, energy independence is prioritized. This will increase the energy self-sufficiency until the reserve soc is hit. Battery will charge from solar in the morning to get ready for the next period. Disabled: Battery will discharge only during peak hours when electricity rates are high. During other times, battery will be idle or will charge from solar in the morning to get ready for the next period. | [optional] 
**chargeFromGrid** | **String** | Charge battery from grid enabled/disabled. Enabled: Battery may also charge from the grid when in full backup mode or when battery charge is below the reserve capacity in savings or self-consumption mode. | [optional] 
**batteryShutdownLevel** | **Number** | Level at which battery shutdowns to conserve energy. Battery restarts by using the conserved energy when the utility grid restores power or solar panels start producing energy. | [optional] 


