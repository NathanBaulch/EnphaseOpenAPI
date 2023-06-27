# EnphaseOpenAPI.Monitoring.Model.UpdateSystemBatterySettingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatteryMode** | **string** | To update battery mode of the system (case sensitive). Available values are Savings Mode, Self-consumption, Full Backup. | [optional] 
**ReserveSoc** | **int** | Reserve soc for the current mode. Cannot be less than vls. | [optional] 
**EnergyIndependence** | **string** | Energy independence after peak hours \&quot;enabled\&quot;/\&quot;disabled\&quot;. Enabled: Battery will discharge to save money during peak hours when electricity rates are high. Once that is done, energy independence is prioritized. This will increase the energy self-sufficiency until the reserve soc is hit. Battery will charge from solar in the morning to get ready for the next period. Disabled: Battery will discharge only during peak hours when electricity rates are high. During other times, battery will be idle or will charge from solar in the morning to get ready for the next period. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

