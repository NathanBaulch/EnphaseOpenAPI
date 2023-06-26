# EnphaseOpenAPI.Monitoring.Model.SearchSystemsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | **int** | Total number of systems available. | [optional] 
**CurrentPage** | **int** | Current page of the systems result. Default is 1. | [optional] 
**Size** | **int** | Max number of records from API per page is 100. Default is 10. | [optional] 
**Count** | **int** | Total number of systems actually returned for the current page. | [optional] 
**Items** | **string** | Named key of the list data. In this endpoint, it is systems. | [optional] 
**Systems** | [**List&lt;System&gt;**](System.md) | List of filtered systems. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

