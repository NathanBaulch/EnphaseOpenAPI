# # GetSystemLoadControlSettingsResponseLoadControlDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the dry contact. | [optional]
**load_name** | **string** | Name of the load. | [optional]
**owner_can_override** | **string** | HOs ability to override the load control settings. | [optional]
**config** | **string** | Enabled/disabled. | [optional]
**soc_low** | **int** | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. | [optional]
**soc_high** | **int** | Applicable for advanced mode. Load powers off when battery reaches soc_low. The load will be powered on when the battery soc reaches soc_high. | [optional]
**essential_start_time** | **int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional]
**essential_end_time** | **int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
