# TheEnphaseMonitoringApi.LoadControlSettingsLoadControlDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the dry contact. | [optional] 
**loadName** | **String** | Name of the load. | [optional] 
**ownerCanOverride** | **String** | HOs ability to override the load control settings. | [optional] 
**mode** | **String** | Current load control configuration. | [optional] 
**socLow** | **Number** | Applicable for advanced mode. Load will be powered off when the battery soc reaches this level. | [optional] 
**socHigh** | **Number** | Applicable for advanced mode. Load powers off when battery reaches soc_low. The load will be powered on when the battery soc reaches soc_high. | [optional] 
**status** | **String** | Available values are enabled, disabled. | [optional] 
**essentialStartTime** | **Number** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 
**essentialEndTime** | **Number** | Applicable for scheduled mode. Time in seconds. Load will powered on between essential_start_time and essential_end_time. | [optional] 


