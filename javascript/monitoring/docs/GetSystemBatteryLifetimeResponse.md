# TheEnphaseMonitoringApi.GetSystemBatteryLifetimeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemId** | **Number** | Unique numeric ID of the system. | [optional] 
**startDate** | **Date** | When no start_date parameter is specified on the request, defaults to the operational_date of the system. May be null if system has never produced. When a start_date parameter is included in the request, the same is included in the response. | [optional] 
**charge** | **[Number]** | An array of charge measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional] 
**discharge** | **[Number]** | An array of discharge measurements, one for each day since the system started producing, or one for each day of the requested period. If the system has never produced energy, the array may be empty. | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 


