# EnphaseOpenAPI.Monitoring.Model.GetSystemLoadControlSettingsResponseLoadControlDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the dry contact. | [optional] 
**LoadName** | **string** | Name of the load. | [optional] 
**OwnerCanOverride** | **string** | HOs ability to override the load control settings. | [optional] 
**Config** | **string** | Enabled/disabled. | [optional] 
**SocLow** | **int** | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. | [optional] 
**SocHigh** | **int** | Applicable for advanced mode. Load powers off when battery reaches soc_low. The load will be powered on when the battery soc reaches soc_high. | [optional] 
**EssentialStartTime** | **int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**EssentialEndTime** | **int** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

