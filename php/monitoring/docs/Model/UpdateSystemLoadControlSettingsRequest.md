# # UpdateSystemLoadControlSettingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the dry contact. Name cannot be changed. It is only used to identify the dry contact that needs to be updated. |
**load_name** | **string** | Load Name of the load. Load Name cannot be changed. It is only used to identify the dry contact that needs to be updated. | [optional]
**mode** | **string** | Mode. Available values are \&quot;Scheduled\&quot;, \&quot;Basic\&quot;, \&quot;Advanced_BatteryPowered\&quot;, \&quot;Manual_always_not_powered\&quot;, \&quot;Manual_always_powered\&quot;, \&quot;Advanced_GeneratorPowered\&quot;. | [optional]
**soc_low** | **int** | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. It can be between 10 to 90. | [optional]
**essential_start_time** | **int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional]
**essential_end_time** | **int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
