# enlighten.model.status.Status

The current status of the system. * `comm` - One or more Envoys on the system are not communicating to Enlighten. * `power` - There is a production issue on the system. * `meter` - There is a communication problem between an Envoy and a revenue-grade meter on the system. * `meter_issue` - One or more meters on the system are reporting unusual measurements. * `micro` - There is a communication problem between an Envoy and microinverters that it monitors. * `battery` - There is a communication problem between an Envoy and an AC battery on the system. * `storage_idle` - An AC battery on the system has not changed its state of charge for more than 72 hours. * `normal` - The system is operating normally.

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
str,  | str,  | The current status of the system. * &#x60;comm&#x60; - One or more Envoys on the system are not communicating to Enlighten. * &#x60;power&#x60; - There is a production issue on the system. * &#x60;meter&#x60; - There is a communication problem between an Envoy and a revenue-grade meter on the system. * &#x60;meter_issue&#x60; - One or more meters on the system are reporting unusual measurements. * &#x60;micro&#x60; - There is a communication problem between an Envoy and microinverters that it monitors. * &#x60;battery&#x60; - There is a communication problem between an Envoy and an AC battery on the system. * &#x60;storage_idle&#x60; - An AC battery on the system has not changed its state of charge for more than 72 hours. * &#x60;normal&#x60; - The system is operating normally. | must be one of ["comm", "power", "meter", "meter_issue", "micro", "battery", "storage_idle", "normal", ] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

