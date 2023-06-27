# EnphaseOpenAPI.Monitoring.Model.UpdateSystemLoadControlSettingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the dry contact. Name cannot be changed. It is only used to identify the dry contact that needs to be updated. | 
**LoadName** | **string** | Load Name of the load. Load Name cannot be changed. It is only used to identify the dry contact that needs to be updated. | [optional] 
**Mode** | **string** | Mode. Available values are \&quot;Scheduled\&quot;, \&quot;Basic\&quot;, \&quot;Advanced_BatteryPowered\&quot;, \&quot;Manual_always_not_powered\&quot;, \&quot;Manual_always_powered\&quot;, \&quot;Advanced_GeneratorPowered\&quot;. | [optional] 
**SocLow** | **int** | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. It can be between 10 to 90. | [optional] 
**EssentialStartTime** | **int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**EssentialEndTime** | **int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

