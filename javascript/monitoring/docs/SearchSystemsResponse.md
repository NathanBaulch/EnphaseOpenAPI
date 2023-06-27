# TheEnphaseMonitoringApi.SearchSystemsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **Number** | Total number of systems available. | [optional] 
**currentPage** | **Number** | Current page of the systems result. Default is 1. | [optional] 
**size** | **Number** | Max number of records from API per page is 100. Default is 10. | [optional] 
**count** | **Number** | Total number of systems actually returned for the current page. | [optional] 
**items** | **String** | Named key of the list data. In this endpoint, it is systems. | [optional] 
**systems** | [**[SystemDetails]**](SystemDetails.md) | List of filtered systems. | [optional] 


