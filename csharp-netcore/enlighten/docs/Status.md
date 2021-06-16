# EnphaseOpenAPI.Enlighten.Model.Status
The current status of the system. * `comm` - One or more Envoys on the system are not communicating to Enlighten. * `power` - There is a production issue on the system. * `meter` - There is a communication problem between an Envoy and a revenue-grade meter on the system. * `meter_issue` - One or more meters on the system are reporting unusual measurements. * `micro` - There is a communication problem between an Envoy and microinverters that it monitors. * `battery` - There is a communication problem between an Envoy and an AC battery on the system. * `storage_idle` - An AC battery on the system has not changed its state of charge for more than 72 hours. * `normal` - The system is operating normally.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

